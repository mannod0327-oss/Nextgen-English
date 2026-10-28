/* GRAMMAR GUIDE — interactive practice.
 * Progressive enhancement of the built practice blocks: each blank becomes a text field, "(a / b)" option
 * groups become buttons, and every task gets Check / Answers / Reset buttons with a score. The answer key
 * (li[data-a], "/"-separated alternatives) is the only source of truth. Print/PDF still shows plain blanks.
 */
(function () {
  "use strict";

  // ------------------------------------------------------------------ answer matching (pure, testable)
  var APOS = /[’‘`´ʼʻ]/g;

  function norm(s) {
    return String(s).toLowerCase().replace(APOS, "'").replace(/[“”„"«»]/g, "")
      .replace(/[–—−]/g, "-").replace(/…/g, "...").replace(/\s+/g, " ")
      .replace(/\s+([,.!?;:])/g, "$1").replace(/^[\s.,!?;:]+|[\s.,!?;:]+$/g, "").trim();
  }

  // full forms of contractions; 's and 'd are ambiguous, so every reading is produced
  function expand(s) {
    var t = s.replace(/\bcan't\b/g, "can not").replace(/\bcannot\b/g, "can not").replace(/\bwon't\b/g, "will not")
      .replace(/\bshan't\b/g, "shall not").replace(/n't\b/g, " not").replace(/'re\b/g, " are")
      .replace(/'ve\b/g, " have").replace(/'ll\b/g, " will").replace(/'m\b/g, " am").replace(/\blet's\b/g, "let us");
    var parts = t.split(/'([sd])\b/), out = [""];
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) { out = out.map(function (o) { return o + parts[i]; }); continue; }
      var opts = parts[i] === "s" ? ["'s", " is", " has"] : ["'d", " would", " had"];
      if (out.length > 81) opts = opts.slice(0, 1); // ponytail: cap readings for very long sentences
      var next = [];
      out.forEach(function (o) { opts.forEach(function (x) { next.push(o + x); }); });
      out = next;
    }
    return out.map(function (o) { return o.replace(/\s+/g, " ").trim(); });
  }

  function forms(s) { return expand(norm(s)); }
  function loose(s) { return expand(norm(s).replace(/[,;:!?]/g, " ").replace(/-/g, " ").replace(/\s+/g, " ").trim()); }

  // split on any of `chars` outside brackets
  function splitTop(s, chars) {
    var out = [], depth = 0, cur = "";
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (c === "(") depth++;
      else if (c === ")") depth = Math.max(0, depth - 1);
      if (depth === 0 && chars.indexOf(c) >= 0) { out.push(cur); cur = ""; } else cur += c;
    }
    out.push(cur);
    return out.map(function (x) { return x.trim(); }).filter(function (x) { return x !== ""; });
  }
  function segments(s) { return splitTop(s.replace(/\.\.\./g, "…"), "…,;"); }

  // "would drive (’d drive)", "(that) she was", "at (AmE also: in)", "wasn’t (weren’t)" -> all readings
  function parenVariants(a) {
    if (a.indexOf("(") < 0) return [a];
    var groups = [], re = /\(([^()]*)\)/g, m;
    while ((m = re.exec(a))) groups.push({ i: m.index, len: m[0].length, inner: m[1].trim() });
    function build(keep) {
      var s = "", last = 0;
      groups.forEach(function (g, k) { s += a.slice(last, g.i) + (keep[k] ? " " + g.inner + " " : " "); last = g.i + g.len; });
      return s + a.slice(last);
    }
    var all = groups.map(function () { return true; }), none = groups.map(function () { return false; });
    var out = [build(none), build(all)];
    if (groups.length > 1) groups.forEach(function (g, k) {
      var v = none.slice(); v[k] = true; out.push(build(v));
      var w = all.slice(); w[k] = false; out.push(build(w));
    });
    groups.forEach(function (g) {
      var am = g.inner.match(/^(?:AmE|BrE|US|UK)(?:\s+(?:also|ham))?\s*:\s*(.+)$/i);
      if (am) { out.push(am[1]); return; }
      var words = a.slice(0, g.i).trim().split(/\s+/).filter(Boolean), k = g.inner.split(/\s+/).length;
      if (k <= 3 && words.length >= k)
        out.push(words.slice(0, words.length - k).join(" ") + " " + g.inner + " " + a.slice(g.i + g.len));
    });
    return out;
  }

  function readings(list) {
    var f = {}, l = {};
    list.forEach(function (v) {
      forms(v).forEach(function (x) { f[x] = 1; });
      loose(v).forEach(function (x) { l[x] = 1; });
    });
    return { f: f, l: l };
  }
  function flat(alts) {
    var out = [];
    alts.forEach(function (a) {
      parenVariants(a).forEach(function (v) {
        out.push(v);
        var head = v.split(/\s[—–]\s/)[0]; // "S — write it down": the short label before the explanation
        if (head !== v && head.trim().split(/\s+/).length <= 2) out.push(head);
      });
    });
    return out;
  }
  function isDash(v) { return /^(-|ø|0|x)?$/.test(norm(v)); }

  // raw key ("/"-separated alternatives) + number of answer fields -> matcher
  // sentence: true for "→ ___" rewrite/translation items, where other wordings can also be right
  function parseKey(raw, n, sentence) {
    raw = String(raw).trim();
    var alts = splitTop(raw, "/"), all = flat(alts), key = { raw: raw, n: Math.max(1, n) };
    key.dash = all.some(isDash);
    var longest = Math.max.apply(null, alts.map(function (a) {
      var v = parenVariants(a)[0], head = v.split(/\s[—–]\s/)[0];
      return norm(head.trim().split(/\s+/).length <= 2 ? head : v).split(" ").length;
    }));
    key.open = !!sentence || longest > 4 || (key.n === 1 && /…|\.\.\./.test(raw));
    key.joined = readings(key.n > 1 ? all.map(function (v) { return v.replace(/\.\.\.|…/g, " ").replace(/,/g, " "); }).concat(all) : all);
    if (key.n > 1) {
      var tuples = alts.map(segments);
      if (tuples.every(function (t) { return t.length === key.n; }))
        key.tuples = tuples.map(function (t) { return t.map(function (seg) { return readings(parenVariants(seg)); }); });
      var segs = segments(raw);
      if (segs.length === key.n)
        key.perBlank = segs.map(function (seg) { return readings(flat(splitTop(seg, "/"))); });
    }
    return key;
  }

  function hit(v, r) {
    var a = forms(v), i;
    for (i = 0; i < a.length; i++) if (r.f[a[i]]) return "ok";
    var b = loose(v);
    for (i = 0; i < b.length; i++) if (r.l[b[i]]) return "near";
    return null;
  }
  function best(list) { return list.indexOf(null) >= 0 ? null : list.indexOf("near") >= 0 ? "near" : "ok"; }

  // values: strings typed by the student -> "ok" | "near" | "bad" | "empty"
  function judge(key, values) {
    var filled = values.filter(function (v) { return norm(v) !== ""; });
    if (!filled.length) return key.dash ? "ok" : "empty";
    var res = [];
    if (key.tuples) key.tuples.forEach(function (t) {
      res.push(best(t.map(function (r, i) { return isDash(values[i] || "") && hit("-", r) ? "ok" : hit(values[i] || "", r); })));
    });
    if (key.perBlank) res.push(best(key.perBlank.map(function (r, i) {
      return isDash(values[i] || "") && hit("-", r) ? "ok" : hit(values[i] || "", r);
    })));
    res.push(hit(values.join(" "), key.joined));
    return res.indexOf("ok") >= 0 ? "ok" : res.indexOf("near") >= 0 ? "near" : "bad";
  }

  // "(am knowing / know)" groups in an item without blanks -> option lists with the correct ones marked
  var GROUP = /\(([^()]*\/[^()]*)\)/g;
  function findChoices(text, raw) {
    var groups = [], m;
    GROUP.lastIndex = 0;
    while ((m = GROUP.exec(text))) groups.push({ text: m[0], options: m[1].split("/").map(function (o) { return o.trim(); }) });
    var alts = splitTop(String(raw), "/");
    if (!groups.length) { // "a) … b) …" / "(a) … (b) …" / "A) … B)" — the key is one or more letters ("b", "a, c")
      var letters = [], lm, LET = /(?:^|[\s(])([a-eA-E])\)/g;
      while ((lm = LET.exec(text))) if (letters.indexOf(lm[1]) < 0) letters.push(lm[1]);
      var picked = norm(parenVariants(alts[0])[0]).split(/\s*(?:,|and|va)\s*/).map(function (x) { return x.replace(/[()]/g, ""); });
      var low = letters.map(function (L) { return L.toLowerCase(); });
      if (letters.length >= 2 && picked.every(function (p) { return /^[a-e]$/.test(p) && low.indexOf(p) >= 0; }))
        return { letters: letters, correct: picked.map(function (p) { return low.indexOf(p); }) };
      return null;
    }
    function mark(group, cands) {
      var r = readings(flat(cands));
      return group.options.map(function (o, i) { return hit(o, r) === "ok" ? i : -1; }).filter(function (i) { return i >= 0; });
    }
    if (groups.length === 1) {
      groups[0].correct = mark(groups[0], alts);
      return groups[0].correct.length ? { groups: groups } : null;
    }
    var segs = segments(String(raw));
    if (segs.length !== groups.length) return null;
    for (var g = 0; g < groups.length; g++) {
      groups[g].correct = mark(groups[g], splitTop(segs[g], "/"));
      if (!groups[g].correct.length) return null;
    }
    return { groups: groups };
  }

  var api = { norm: norm, expand: expand, parenVariants: parenVariants, parseKey: parseKey, judge: judge, findChoices: findChoices };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (typeof document === "undefined") return;

  // ------------------------------------------------------------------ page wiring
  var unitId = (document.querySelector("article.unit") || {}).id || location.pathname;
  var store = {};
  try { store = JSON.parse(localStorage.getItem("gg:" + unitId) || "{}"); } catch (e) { store = {}; }
  function save() { try { localStorage.setItem("gg:" + unitId, JSON.stringify(store)); } catch (e) { /* private mode */ } }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function textBefore(node) {
    var p = node.previousSibling;
    while (p && p.nodeType === 1 && !p.textContent.trim()) p = p.previousSibling;
    return p ? p.textContent : "";
  }

  function makeInput(wide, onChange) {
    var i = el("input", "gap" + (wide ? " wide" : ""));
    i.type = "text";
    i.setAttribute("autocomplete", "off");
    i.setAttribute("autocapitalize", "off");
    i.setAttribute("spellcheck", "false");
    i.setAttribute("aria-label", "Javob");
    i.addEventListener("input", function () { if (!wide) i.size = Math.max(6, i.value.length + 2); onChange(); });
    return i;
  }

  // replace "(a / b)" inside the item's text nodes with option buttons; returns the button groups
  function chipify(li, choice, onChange) {
    var groups = [];
    if (choice.letters) {
      var box = el("span", "px-chips");
      choice.letters.forEach(function (L) { box.appendChild(el("button", null, L)); });
      li.appendChild(document.createTextNode(" "));
      li.appendChild(box);
      // always multi-select, so the buttons don't reveal how many letters are right
      groups.push({ box: box, correct: choice.correct, multi: true });
    } else {
      var walker = document.createTreeWalker(li, NodeFilter.SHOW_TEXT), nodes = [], t;
      while ((t = walker.nextNode())) nodes.push(t);
      choice.groups.forEach(function (g) {
        for (var k = 0; k < nodes.length; k++) {
          var at = nodes[k].nodeValue.indexOf(g.text);
          if (at < 0) continue;
          var rest = nodes[k].splitText(at), after = rest.splitText(g.text.length);
          var src = el("span", "px-src", g.text), box = el("span", "px-chips");
          g.options.forEach(function (o) { box.appendChild(el("button", null, o)); });
          rest.parentNode.replaceChild(src, rest);
          src.parentNode.insertBefore(box, src.nextSibling);
          nodes[k] = after;
          groups.push({ box: box, correct: g.correct });
          return;
        }
      });
      if (groups.length !== choice.groups.length) return null;
    }
    groups.forEach(function (g) {
      [].forEach.call(g.box.children, function (b) {
        b.type = "button";
        b.addEventListener("click", function () {
          var on = !b.classList.contains("sel");
          if (!g.multi) [].forEach.call(g.box.children, function (x) { x.classList.remove("sel"); });
          b.classList.toggle("sel", on);
          onChange();
        });
      });
    });
    return groups;
  }

  function setupItem(li, saved, onChange) {
    var raw = li.getAttribute("data-a") || "", blanks = li.querySelectorAll("span.blank"), item = { li: li };
    var res = el("span", "px-res");
    if (blanks.length) {
      item.inputs = [].map.call(blanks, function (b) {
        var input = makeInput(item.sentence = /→\s*$/.test(textBefore(b)) && blanks.length === 1, onChange);
        b.parentNode.replaceChild(input, b);
        return input;
      });
    } else {
      var choice = findChoices(li.textContent, raw);
      item.groups = choice && chipify(li, choice, onChange);
      if (!item.groups) item.inputs = [li.appendChild(makeInput(true, onChange))];
    }
    li.appendChild(res);
    item.key = parseKey(raw, item.inputs ? item.inputs.length : 1, item.sentence);

    function picked(g) { // indices of the selected buttons in a group
      return [].map.call(g.box.children, function (b, i) { return b.classList.contains("sel") ? i : -1; }).filter(function (i) { return i >= 0; });
    }
    item.value = function () {
      return item.inputs ? item.inputs.map(function (i) { return i.value; }) : item.groups.map(picked);
    };
    item.restore = function (v) {
      if (!v) return;
      if (item.inputs) item.inputs.forEach(function (i, k) { i.value = v[k] || ""; if (!i.classList.contains("wide")) i.size = Math.max(6, i.value.length + 2); });
      else item.groups.forEach(function (g, k) {
        [].concat(v[k] == null ? [] : v[k]).forEach(function (p) { if (g.box.children[p]) g.box.children[p].classList.add("sel"); });
      });
    };
    item.clear = function () {
      li.classList.remove("px-ok", "px-bad", "px-near", "px-open", "px-show");
      res.textContent = "";
      if (item.groups) item.groups.forEach(function (g) { [].forEach.call(g.box.children, function (b) { b.classList.remove("ok", "no"); }); });
    };
    item.reset = function () {
      item.clear();
      if (item.inputs) item.inputs.forEach(function (i) { i.value = ""; if (!i.classList.contains("wide")) i.size = 6; });
      else item.groups.forEach(function (g) { [].forEach.call(g.box.children, function (b) { b.classList.remove("sel"); }); });
    };
    item.show = function () { item.clear(); li.classList.add("px-show"); res.textContent = "🔑 " + raw; };
    item.check = function () {
      item.clear();
      var verdict;
      if (item.groups) {
        var picks = item.value();
        if (picks.every(function (p) { return !p.length; })) return "empty";
        verdict = item.groups.every(function (g, k) {
          var p = picks[k];
          return g.multi ? p.length === g.correct.length && p.every(function (i) { return g.correct.indexOf(i) >= 0; })
            : p.length === 1 && g.correct.indexOf(p[0]) >= 0;
        }) ? "ok" : "bad";
        item.groups.forEach(function (g, k) {
          picks[k].forEach(function (i) { g.box.children[i].classList.add(g.correct.indexOf(i) >= 0 ? "ok" : "no"); });
        });
      } else {
        verdict = judge(item.key, item.value());
        if (verdict === "empty") return verdict;
        if (verdict === "bad" && item.key.open) verdict = "open";
      }
      li.classList.add("px-" + verdict);
      res.textContent = {
        ok: "✓ To‘g‘ri!",
        near: "✓ Deyarli to‘g‘ri — tinish belgilarini kalit bilan solishtiring: " + raw,
        bad: "✗ To‘g‘ri javob: " + raw,
        open: "🔍 Namuna javob: " + raw + " — javobingiz boshqacha. Ma’nosi va grammatikasini solishtiring."
      }[verdict];
      return verdict;
    };
    item.restore(saved);
    return item;
  }

  function setupTask(ol, ti) {
    var saved = store[ti] || {}, items = [];
    function changed() {
      var v = {};
      items.forEach(function (it, k) { v[k] = it.value(); });
      store[ti] = v;
      save();
    }
    [].forEach.call(ol.children, function (li, k) {
      if (li.tagName === "LI" && li.hasAttribute("data-a")) items.push(setupItem(li, saved[k], changed));
    });
    if (!items.length) return;
    var bar = el("div", "px-bar no-print"), score = el("span", "px-score");
    var bCheck = el("button", "main", "✔ Tekshirish"), bShow = el("button", null, "🔑 Javoblar"), bReset = el("button", null, "↺ Qaytadan");
    [bCheck, bShow, bReset].forEach(function (b) { b.type = "button"; bar.appendChild(b); });
    bar.appendChild(score);
    ol.parentNode.insertBefore(bar, ol.nextSibling);
    bCheck.addEventListener("click", function () {
      var c = { ok: 0, near: 0, bad: 0, open: 0, empty: 0 };
      items.forEach(function (it) { c[it.check()]++; });
      var right = c.ok + c.near;
      score.textContent = "Natija: " + right + " / " + items.length +
        (c.open ? " · solishtiring: " + c.open : "") + (c.empty ? " · javobsiz: " + c.empty : "") +
        (right === items.length ? " 🎉" : "");
    });
    bShow.addEventListener("click", function () { items.forEach(function (it) { it.show(); }); score.textContent = ""; });
    bReset.addEventListener("click", function () {
      items.forEach(function (it) { it.reset(); });
      score.textContent = "";
      delete store[ti];
      save();
    });
    ol.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && e.target.classList.contains("gap")) { e.preventDefault(); bCheck.click(); }
    });
  }

  function init() {
    [].forEach.call(document.querySelectorAll(".practice"), function (pr) {
      var tip = el("p", "px-tip no-print",
        "✍️ Javobni bo‘sh joyga yozing yoki to‘g‘ri variantni bosing, so‘ng «Tekshirish» tugmasini bosing. Javoblaringiz shu brauzerda saqlanib qoladi.");
      pr.insertBefore(tip, pr.firstChild);
      var ti = 0;
      [].forEach.call(pr.querySelectorAll("ol"), function (ol) { if (!ol.closest(".answers")) setupTask(ol, ti++); });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
