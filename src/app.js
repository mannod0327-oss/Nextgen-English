import { newCard, review, dueCards, isMature } from './core/srs.js';
import { buildIndex, prefixSearch, lookup, lookupDefinition } from './core/dictionary.js';
import { scorePronunciation } from './core/pronunciation.js';
import { gradeExam, scoreQuestion, makeVariant, parseExam, serializeExam, validateExam, shuffle, mulberry32 } from './core/exam.js';
import { createPlacement, nextQuestion, answerPlacement, placementResult, LEVELS } from './core/placement.js';
import { renderPrintable, esc } from './core/printable.js';
import { createStore } from './core/store.js';
import { vocabulary, categories } from './data/vocabulary.js';
import { grammar } from './data/grammar.js';
import { placementQuestions } from './data/placement.js';
import { sampleExam } from './data/sample-exam.js';
import { exams } from './data/exams.js';
import { readings } from './data/readings.js';
import { scenarios } from './data/dialogues.js';
import { guideSections, guideUnits } from './data/grammar-guide.js';

// English definitions (Open English WordNet, ~80KB gzip) load only when a view needs them.
let defsPromise;
const loadDefs = () => (defsPromise ??= import('./data/definitions.js').then((m) => m.definitions));
const sensesHtml = (hit) => `<ol class="senses">${hit.senses.map(([pos, def, ex]) => `<li><i>${esc(pos)}</i> — ${esc(def)}${ex ? ` <span class="muted">“${esc(ex)}”</span>` : ''}</li>`).join('')}</ol>`;

const guideUnitHref = (n) => `grammar-guide/units/unit-${String(n).padStart(3, '0')}.html`;

const store = createStore('nge');
const $ = (sel, root = document) => root.querySelector(sel);
const app = $('#app');
const dictIndex = buildIndex(vocabulary);
const rand = () => mulberry32(Date.now() & 0xffffffff);

// ---------- profile / XP ----------
const profile = () => store.get('profile', { level: null, xp: 0, days: [] });
function addXp(n) {
  const p = profile();
  const today = new Date().toISOString().slice(0, 10);
  if (!p.days.includes(today)) p.days = [...p.days, today].slice(-60);
  store.set('profile', { ...p, xp: p.xp + n });
  renderHeader();
}
function streak(days) {
  let n = 0;
  for (let d = new Date(); days.includes(d.toISOString().slice(0, 10)); d.setDate(d.getDate() - 1)) n++;
  return n;
}
function renderHeader() {
  const p = profile();
  $('#stats').innerHTML = `<span title="Daraja">🎯 ${p.level ?? '—'}</span><span title="Tajriba">⭐ ${p.xp} XP</span><span title="Ketma-ket kunlar">🔥 ${streak(p.days)}</span>`;
}

// ---------- speech helpers ----------
function speak(text, rate = 0.9) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = store.get('accent', 'en-GB');
  u.rate = rate;
  speechSynthesis.speak(u);
}
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// ---------- shared question renderer (grammar, exam, placement, creator preview) ----------
function questionHtml(q, r = rand()) {
  const name = `q-${esc(q.id)}`;
  switch (q.type) {
    case 'single':
    case 'multiple': {
      const type = q.type === 'single' ? 'radio' : 'checkbox';
      return `<div class="opts">${q.options.map((o, i) =>
        `<label class="opt"><input type="${type}" name="${name}" value="${i}"> ${esc(o)}</label>`).join('')}</div>`;
    }
    case 'fill':
      return `<input class="fill" type="text" autocomplete="off" spellcheck="false" placeholder="Javobingiz…" aria-label="Javob">`;
    case 'order':
      return `<div class="order-target" aria-label="Sizning tartibingiz"></div>
        <div class="order-bank">${shuffle(q.items, r).map((w) => `<button type="button" class="chip" data-word="${esc(w)}">${esc(w)}</button>`).join('')}</div>`;
    case 'match': {
      const rights = shuffle(q.pairs.map((p, i) => [p[1], i]), r);
      return `<div class="match">${q.pairs.map((p, i) => `<label>${esc(p[0])} →
        <select data-left="${i}"><option value="">—</option>${rights.map(([t, j]) => `<option value="${j}">${esc(t)}</option>`).join('')}</select></label>`).join('')}</div>`;
    }
    default:
      return '';
  }
}

function readAnswer(q, root) {
  switch (q.type) {
    case 'single': { const c = root.querySelector('input:checked'); return c ? Number(c.value) : undefined; }
    case 'multiple': { const c = [...root.querySelectorAll('input:checked')].map((x) => Number(x.value)); return c.length ? c : undefined; }
    case 'fill': { const v = root.querySelector('.fill').value; return v.trim() ? v : undefined; }
    case 'order': { const w = [...root.querySelectorAll('.order-target .chip')].map((b) => b.dataset.word); return w.length ? w : undefined; }
    case 'match': {
      const m = {};
      root.querySelectorAll('select').forEach((s) => { if (s.value !== '') m[s.dataset.left] = Number(s.value); });
      return Object.keys(m).length ? m : undefined;
    }
    default: return undefined;
  }
}

function restoreAnswer(q, root, a) {
  if (a === undefined) return;
  if (q.type === 'single') root.querySelector(`input[value="${a}"]`)?.click();
  if (q.type === 'multiple') a.forEach((i) => { root.querySelector(`input[value="${i}"]`).checked = true; });
  if (q.type === 'fill') root.querySelector('.fill').value = a;
  if (q.type === 'order') a.forEach((w) => [...root.querySelectorAll('.order-bank .chip')].find((b) => b.dataset.word === w)?.click());
  if (q.type === 'match') Object.entries(a).forEach(([l, r]) => { root.querySelector(`select[data-left="${l}"]`).value = r; });
}

// tap-to-build for "order" questions (drag-and-drop equivalent that also works on phones)
document.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  const box = chip.closest('.question');
  const dest = chip.parentElement.classList.contains('order-bank') ? '.order-target' : '.order-bank';
  box.querySelector(dest).append(chip);
});

function correctAnswerText(q) {
  switch (q.type) {
    case 'single': return q.options[q.answer];
    case 'multiple': return q.answer.map((i) => q.options[i]).join(', ');
    case 'fill': return [].concat(q.answer).join(' / ');
    case 'order': return q.items.join(' ');
    case 'match': return q.pairs.map((p) => `${p[0]} → ${p[1]}`).join('; ');
    default: return '';
  }
}

function feedbackHtml(q, score) {
  const ok = score === 1;
  return `<div class="feedback ${ok ? 'ok' : score > 0 ? 'part' : 'bad'}">
    ${ok ? "✅ To'g'ri!" : `${score > 0 ? '🟡 Qisman' : "❌ Noto'g'ri"} — to'g'ri javob: <b>${esc(correctAnswerText(q))}</b>`}
    ${q.explanation ? `<div class="muted">${esc(q.explanation)}</div>` : ''}</div>`;
}

// ---------- views ----------
const views = {
  home() {
    const p = profile();
    const cards = store.get('cards', {});
    const due = dueCards(Object.values(cards)).length;
    const mature = Object.values(cards).filter(isMature).length;
    const tiles = [
      ['#/placement', '🧭', 'Daraja testi', "Adaptiv test: A1 dan C1 gacha darajangizni aniqlaydi"],
      ['#/vocab', '🖼️', "Vizual lug'at", `${vocabulary.length} ta so'z · ${due} ta takrorlash kutmoqda`],
      ['#/immersion', '🌊', "Immersiya o'yini", "Tarjimasiz: rasmga mos so'zni toping"],
      ['#/grammar', '📐', 'Grammatika', `${guideUnits.length} unitli qo'llanma + ${grammar.length} ta mashqli mavzu`],
      ['#/reading', '📰', "O'qish va tinglash", `${readings.length} ta matn (A1–B2), tushunish savollari bilan`],
      ['#/speech', '🎙️', 'Nutq laboratoriyasi', "Real vaziyatlar, talaffuzni 0–100% baholash"],
      ['#/dictionary', '📖', "Lug'at", "Prefiks qidiruv, so'z shakllarini taniydi"],
      ['#/exam', '⏱️', 'Imtihon simulyatori', "Taymer, navigatsiya, xatolar tahlili"],
      ['#/creator', '🛠️', 'Test yaratuvchi', "O'qituvchi uchun: test tuzish, variantlar, chop etish"],
    ];
    return `<section class="hero"><h1>Ingliz tilini tizimli o'rganing</h1>
      <p>${p.level ? `Sizning darajangiz: <b>${p.level}</b>. ` : "Avval darajangizni aniqlang — reja shunga moslashadi. "}
      ${mature} ta so'z uzoq muddatli xotirada.</p>
      <div class="hero-actions">${p.level ? '' : '<a class="btn primary" href="#/placement">Daraja testini boshlash →</a>'}
      <a class="btn" href="grammar-guide/index.html">📚 Grammatika qo'llanmasi (${guideUnits.length} unit)</a></div></section>
      <div class="grid">${tiles.map(([href, icon, t, d]) => `<a class="tile" href="${href}"><span class="ico">${icon}</span><b>${t}</b><span class="muted">${d}</span></a>`).join('')}</div>`;
  },

  placement() {
    let state = createPlacement(placementQuestions);
    const step = () => {
      const q = nextQuestion(state);
      if (!q) {
        const level = placementResult(state);
        store.set('profile', { ...profile(), level });
        addXp(20);
        const right = state.history.filter((h) => h.correct).length;
        app.innerHTML = `<section class="card center"><h2>Natija</h2><div class="big">${level}</div>
          <p>${right} / ${state.history.length} to'g'ri javob.</p>
          <p class="muted">Tavsiya: grammatika bo'limida <b>${level}</b> mavzularidan boshlang.</p>
          <a class="btn primary" href="#/grammar">Grammatikaga o'tish</a> <a class="btn" href="#/">Bosh sahifa</a></section>`;
        return;
      }
      app.innerHTML = `<section class="card question"><div class="muted">Savol ${state.history.length + 1} / ${state.maxQuestions}</div>
        <div class="progress"><i style="width:${(state.history.length / state.maxQuestions) * 100}%"></i></div>
        <h3>${esc(q.prompt)}</h3>${questionHtml(q)}<button class="btn primary" id="next">Keyingi →</button></section>`;
      $('#next').onclick = () => {
        const a = readAnswer(q, app);
        if (a === undefined) return;
        state = answerPlacement(state, q, scoreQuestion(q, a) === 1);
        step();
      };
    };
    queueMicrotask(step);
    return '';
  },

  vocab(params) {
    const cat = params.get('cat');
    if (!cat) {
      const cards = store.get('cards', {});
      return `<h2>🖼️ Vizual lug'at</h2><p class="muted">Mavzuni tanlang. Takrorlash SM-2 algoritmi bo'yicha rejalashtiriladi.</p>
        <div class="grid">${['__all', ...categories].map((c) => {
          const words = c === '__all' ? vocabulary : vocabulary.filter((v) => v.category === c);
          const due = words.filter((w) => !cards[w.id] || cards[w.id].due <= Date.now()).length;
          return `<a class="tile" href="#/vocab?cat=${encodeURIComponent(c)}"><span class="ico">${words[0].emoji}</span>
            <b>${c === '__all' ? 'Barcha mavzular' : esc(c)}</b><span class="muted">${words.length} so'z · ${due} navbatda</span></a>`;
        }).join('')}</div>`;
    }
    const words = cat === '__all' ? vocabulary : vocabulary.filter((v) => v.category === cat);
    const cards = store.get('cards', {});
    const queue = dueCards(words.map((w) => cards[w.id] ?? newCard(w.id))).slice(0, 20);
    let i = 0;
    const show = () => {
      if (i >= queue.length) {
        app.innerHTML = `<section class="card center"><h2>🎉 Hammasi takrorlandi</h2><p>Keyingi takrorlash vaqti kelganda bu yerda yangi kartalar paydo bo'ladi.</p>
          <a class="btn" href="#/vocab">Mavzular</a> <a class="btn primary" href="#/immersion">Immersiya o'yini</a></section>`;
        return;
      }
      const w = vocabulary.find((v) => v.id === queue[i].id);
      app.innerHTML = `<div class="muted">${i + 1} / ${queue.length} · ${esc(w.category)}</div>
        <section class="flash" id="flash" tabindex="0" aria-live="polite">
          <div class="pic">${w.emoji}</div><div class="word">${esc(w.word)}</div>
          <div class="back hidden"><div class="ipa">${esc(w.ipa)} · <i>${esc(w.pos)}</i> · ${w.level}</div>
            <div class="uz">${esc(w.uz)}</div><div class="ex">“${esc(w.example)}”</div></div>
          <button class="btn" id="say">🔊 Tinglash</button></section>
        <div class="grades hidden" id="grades">
          <button class="btn bad" data-g="1">Unutdim</button><button class="btn" data-g="3">Qiyin</button>
          <button class="btn ok" data-g="4">Yaxshi</button><button class="btn primary" data-g="5">Oson</button></div>
        <button class="btn primary wide" id="flip">Javobni ko'rsatish (Space)</button>`;
      speak(w.word);
      $('#say').onclick = (e) => { e.stopPropagation(); speak(`${w.word}. ${w.example}`); };
      const flip = () => { $('.back').classList.remove('hidden'); $('#grades').classList.remove('hidden'); $('#flip').classList.add('hidden'); };
      $('#flip').onclick = flip;
      $('#flash').onclick = flip;
      $('#grades').onclick = (e) => {
        const g = Number(e.target.dataset.g);
        if (!g) return;
        const all = store.get('cards', {});
        all[w.id] = review(all[w.id] ?? newCard(w.id), g);
        store.set('cards', all);
        addXp(g >= 3 ? 2 : 1);
        i++;
        show();
      };
      document.onkeydown = (e) => {
        if (!location.hash.startsWith('#/vocab?')) return;
        if (e.code === 'Space') { e.preventDefault(); flip(); }
        const map = { Digit1: 1, Digit2: 3, Digit3: 4, Digit4: 5 };
        if (map[e.code] && !$('#grades').classList.contains('hidden')) $(`[data-g="${map[e.code]}"]`).click();
      };
    };
    queueMicrotask(show);
    return '';
  },

  immersion() {
    // Rosetta Stone principle: picture ↔ word, no native-language translation.
    const r = rand();
    let round = 0;
    let right = 0;
    const ask = () => {
      if (round === 10) {
        addXp(right * 2);
        app.innerHTML = `<section class="card center"><h2>Natija: ${right} / 10</h2><button class="btn primary" id="again">Yana o'ynash</button> <a class="btn" href="#/">Bosh sahifa</a></section>`;
        $('#again').onclick = route;
        return;
      }
      const target = vocabulary[Math.floor(r() * vocabulary.length)];
      const opts = shuffle([target, ...shuffle(vocabulary.filter((v) => v.id !== target.id), r).slice(0, 3)], r);
      app.innerHTML = `<div class="muted">Raund ${round + 1} / 10 · ${right} to'g'ri</div>
        <section class="card center"><div class="pic huge">${target.emoji}</div>
        <div class="opts grid2">${opts.map((o) => `<button class="btn" data-id="${esc(o.id)}">${esc(o.word)}</button>`).join('')}</div></section>`;
      app.querySelector('.opts').onclick = (e) => {
        const id = e.target.dataset.id;
        if (!id || app.querySelector('.opts').dataset.locked) return;
        app.querySelector('.opts').dataset.locked = '1';
        const ok = id === target.id;
        right += ok;
        e.target.classList.add(ok ? 'ok' : 'bad');
        app.querySelector(`[data-id="${CSS.escape(target.id)}"]`).classList.add('ok');
        speak(target.word);
        round++;
        setTimeout(ask, 900);
      };
    };
    queueMicrotask(ask);
    return '';
  },

  grammar(params) {
    const id = params.get('topic');
    const topic = grammar.find((t) => t.id === id);
    if (!topic) {
      const done = store.get('grammarDone', {});
      const lvl = profile().level;
      const byLevel = [...grammar].sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level));
      return `<h2>📐 Grammatika</h2>
        <section class="card guide-intro" id="guide"><h3>📚 Grammatika qo'llanmasi: ${guideUnits.length} unit</h3>
        <p class="muted">English Grammar in Use tartibida. Har bir unitda o'zbekcha tushuntirish, rangli jadvallar, ko'p uchraydigan xatolar va javobi tekshiriladigan mashqlar bor. Bo'limni bosing, so'ng unitni tanlang.</p>
        <a class="btn primary" href="grammar-guide/index.html">Qo'llanmani ochish →</a></section>
        <div class="list guide">${guideSections.map((s) => `<details>
          <summary><b>${esc(s.uz)}</b> <span class="muted">${esc(s.en)} · ${s.from}–${s.to}</span></summary>
          ${guideUnits.filter((u) => u.n >= s.from && u.n <= s.to).map((u) => `<a class="row" href="${guideUnitHref(u.n)}">
            <span class="badge">${u.n}</span><span>${esc(u.en)}<br><span class="muted">${esc(u.uz)}</span></span></a>`).join('')}
        </details>`).join('')}</div>
        <h3>✍️ Mashqli mavzular (${grammar.length})</h3>
        <div class="list">${byLevel.map((t) => `<a class="row" href="#/grammar?topic=${t.id}">
        <span class="badge ${t.level === lvl ? 'hl' : ''}">${t.level}</span><b>${esc(t.title)}</b>
        <span class="muted">${done[t.id] != null ? `${done[t.id]}%` : ''}</span></a>`).join('')}</div>`;
    }
    const r = rand();
    queueMicrotask(() => {
      $('#check').onclick = () => {
        let total = 0;
        topic.exercises.forEach((q) => {
          const box = app.querySelector(`[data-q="${q.id}"]`);
          const s = scoreQuestion(q, readAnswer(q, box));
          total += s;
          box.querySelector('.fb').innerHTML = feedbackHtml(q, s);
        });
        const pct = Math.round((total / topic.exercises.length) * 100);
        store.set('grammarDone', { ...store.get('grammarDone', {}), [topic.id]: pct });
        addXp(Math.round(total * 3));
        $('#result').textContent = `Natija: ${pct}%`;
      };
    });
    return `<a href="#/grammar">← Mavzular</a><h2>${esc(topic.title)} <span class="badge">${topic.level}</span></h2>
      <section class="card"><p>${esc(topic.rule)}</p>
      <table class="tbl">${topic.table.map((row) => `<tr>${row.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table>
      <ul>${topic.examples.map((x) => `<li>${esc(x)} <button class="link" data-say="${esc(x)}">🔊</button></li>`).join('')}</ul></section>
      <h3>Mashqlar</h3>${topic.exercises.map((q, n) => `<section class="card question" data-q="${q.id}">
        <b>${n + 1}. ${esc(q.prompt)}</b>${questionHtml(q, r)}<div class="fb"></div></section>`).join('')}
      <button class="btn primary" id="check">Tekshirish</button> <b id="result"></b>`;
  },

  reading(params) {
    const t = readings.find((x) => x.id === params.get('t'));
    const done = store.get('readingDone', {});
    if (!t) {
      return `<h2>📰 O'qish va tinglash</h2><p class="muted">Matnni o'qing yoki 🔊 tinglang, so'ng savollarga javob bering. Tinglash mashqi uchun matnni yopib, faqat eshitib javob berib ko'ring.</p>
        <div class="list">${readings.map((x) => `<a class="row" href="#/reading?t=${x.id}">
          <span class="badge ${x.level === profile().level ? 'hl' : ''}">${x.level}</span><span><b>${x.listening ? '🎧 ' : ''}${esc(x.title)}</b><br><span class="muted">${esc(x.uzTitle)}</span></span>
          <span class="muted">${done[x.id] != null ? `${done[x.id]}%` : ''}</span></a>`).join('')}</div>`;
    }
    const r = rand();
    queueMicrotask(() => {
      const spoken = t.text.replace(/^[A-Z][a-z]+: /gm, '');
      $('#listen').onclick = () => speak(spoken);
      $('#listen-slow').onclick = () => speak(spoken, 0.7);
      $('#text').onclick = async (e) => {
        const w = e.target.closest('.tw')?.textContent;
        if (!w) return;
        const gloss = $('#gloss');
        const v = lookup(dictIndex, w).exact;
        const d = lookupDefinition(await loadDefs(), w);
        gloss.hidden = false;
        gloss.innerHTML = `<b>${esc(w)}</b> <button class="link" data-say="${esc(w)}">🔊</button>${v ? ` — <span class="uz">${esc(v.uz)}</span>` : ''}
          ${d ? sensesHtml(d) : v ? '' : '<p class="muted">Lug\'atda topilmadi.</p>'}`;
      };
      $('#hide').onclick = () => { $('#text').hidden = !$('#text').hidden; };
      $('#check').onclick = () => {
        let total = 0;
        t.questions.forEach((q) => {
          const box = app.querySelector(`[data-q="${q.id}"]`);
          const s = scoreQuestion(q, readAnswer(q, box));
          total += s;
          box.querySelector('.fb').innerHTML = feedbackHtml(q, s);
        });
        const pct = Math.round((total / t.questions.length) * 100);
        store.set('readingDone', { ...store.get('readingDone', {}), [t.id]: pct });
        addXp(Math.round(total * 3));
        $('#result').textContent = `Natija: ${pct}%`;
        $('#text').hidden = false; // listening tasks reveal the script after checking
      };
    });
    return `<a href="#/reading">← Matnlar</a><h2>${esc(t.title)} <span class="badge">${t.level}</span></h2>
      <p class="muted">${esc(t.uzTitle)}</p>
      <p><button class="btn" id="listen">🔊 Tinglash</button> <button class="btn" id="listen-slow">🐢 Sekin</button>
        <button class="btn" id="hide">🙈 Matnni yashirish / ko'rsatish</button></p>
      <p class="muted">${t.listening ? "🎧 Tinglash mashqi: matn yopiq. Avval 🔊 tinglang (IELTS'da 1 marta!), javob bering — tekshirgandan keyin matn ochiladi." : "💡 Istalgan so'zni bosing — ma'nosi chiqadi."}</p>
      <section class="card reading-text" id="text"${t.listening ? ' hidden' : ''}>${t.text.split(/([A-Za-z][A-Za-z'’-]*)/).map((p, n) => (n % 2 ? `<span class="tw">${esc(p)}</span>` : esc(p))).join('')}</section>
      <aside class="card gloss" id="gloss" hidden></aside>
      <h3>Savollar</h3>${t.questions.map((q, n) => `<section class="card question" data-q="${q.id}">
        <b>${n + 1}. ${esc(q.prompt)}</b>${questionHtml(q, r)}<div class="fb"></div></section>`).join('')}
      <button class="btn primary" id="check">Tekshirish</button> <b id="result"></b>`;
  },

  speech(params) {
    const sc = scenarios.find((s) => s.id === params.get('s'));
    if (!sc) {
      return `<h2>🎙️ Nutq laboratoriyasi</h2><p class="muted">Namunani tinglang, so'ng takrorlang. ${Recognition ? '' : "⚠️ Brauzeringiz nutqni aniqlashni qo'llamaydi (Chrome/Edge tavsiya etiladi) — aytganingizni yozib tekshirishingiz mumkin."}</p>
        <label>Talaffuz: <select id="accent"><option value="en-GB">🇬🇧 British</option><option value="en-US">🇺🇸 American</option></select></label>
        <div class="grid">${scenarios.map((s) => `<a class="tile" href="#/speech?s=${s.id}"><b>${esc(s.title)}</b><span class="muted">${s.lines.length} ta ibora</span></a>`).join('')}</div>`;
    }
    queueMicrotask(() => {
      $('#dict').onchange = (e) => {
        app.classList.toggle('dictation', e.target.checked);
        app.querySelectorAll('.line').forEach((b) => b.classList.remove('revealed'));
      };
      app.querySelectorAll('.line').forEach((box) => {
        const target = box.dataset.text;
        const show = (heard) => {
          const res = scorePronunciation(target, heard);
          const best = store.get('speechBest', {});
          if ((best[target] ?? 0) < res.score) store.set('speechBest', { ...best, [target]: res.score });
          addXp(res.score >= 80 ? 3 : 1);
          box.classList.add('revealed');
          box.querySelector('.res').innerHTML = `<div class="score ${res.score >= 80 ? 'ok' : res.score >= 50 ? 'part' : 'bad'}">${res.score}%</div>
            <div>${res.words.map((w) => `<span class="w ${w.score === 1 ? 'ok' : w.score > 0 ? 'part' : 'bad'}" title="${esc(w.heard ?? '—')}">${esc(w.word)}</span>`).join(' ')}</div>
            <div class="muted">Eshitildi: “${esc(heard)}”</div>`;
        };
        box.querySelector('.play').onclick = () => speak(target);
        box.querySelector('.slow').onclick = () => speak(target, 0.6);
        box.querySelector('.typed').onkeydown = (e) => { if (e.key === 'Enter' && e.target.value.trim()) show(e.target.value); };
        const rec = box.querySelector('.rec');
        if (!Recognition) { rec.disabled = true; return; }
        rec.onclick = async () => {
          const r = new Recognition();
          r.lang = store.get('accent', 'en-GB');
          r.maxAlternatives = 1;
          rec.textContent = '⏺ Gapiring…';
          const stopWave = await startWaveform(box.querySelector('canvas'));
          r.onresult = (e) => show(e.results[0][0].transcript);
          r.onerror = (e) => { box.querySelector('.res').textContent = `Xato: ${e.error}`; };
          r.onend = () => { rec.textContent = '🎤 Yozish'; stopWave(); };
          r.start();
        };
      });
    });
    const best = store.get('speechBest', {});
    return `<a href="#/speech">← Vaziyatlar</a><h2>${esc(sc.title)}</h2>
      <label class="dict-toggle"><input type="checkbox" id="dict"> ✍️ Diktant rejimi: matn yashiriladi — tinglang va yozing</label>
      ${sc.lines.map((l) => `<section class="card line" data-text="${esc(l)}">
      <p class="say"><span class="t">${esc(l)}</span> ${best[l] != null ? `<span class="badge">eng yaxshi: ${best[l]}%</span>` : ''}</p>
      <button class="btn play">🔊 Namuna</button> <button class="btn slow">🐢 Sekin</button> <button class="btn primary rec">🎤 Yozish</button>
      <canvas width="600" height="60" aria-hidden="true"></canvas>
      <input class="typed" placeholder="…yoki aytganingizni yozing va Enter bosing">
      <div class="res" aria-live="polite"></div></section>`).join('')}`;
  },

  dictionary(params) {
    const q = params.get('q') ?? '';
    queueMicrotask(() => {
      const input = $('#dq');
      const sugg = $('#sugg');
      input.focus();
      input.oninput = () => {
        sugg.innerHTML = prefixSearch(dictIndex, input.value, 8)
          .map((e) => `<a class="row" href="#/dictionary?q=${encodeURIComponent(e.word)}">${e.emoji} <b>${esc(e.word)}</b> <span class="muted">${esc(e.uz)}</span></a>`).join('');
      };
      input.onkeydown = (e) => { if (e.key === 'Enter') location.hash = `#/dictionary?q=${encodeURIComponent(input.value)}`; };
      if (q) {
        loadDefs().then((defs) => {
          const hit = lookupDefinition(defs, q);
          const box = $('#defs');
          if (!hit || !box) return;
          const nf = $('#nf');
          box.innerHTML = nf
            ? `<section class="card entry"><h2>${esc(hit.word)} <button class="link" data-say="${esc(hit.word)}">🔊</button></h2>${hit.word !== q.toLowerCase() ? `<p class="muted">“${esc(q)}” → asosiy shakl: <b>${esc(hit.word)}</b></p>` : ''}<p class="muted">🇬🇧 Inglizcha ta'rif (o'zbekcha tarjimasi hali yo'q)</p>${sensesHtml(hit)}</section>`
            : `<h3>🇬🇧 Inglizcha ta'rif</h3>${sensesHtml(hit)}`;
          if (nf) nf.hidden = true;
        });
      }
    });
    let entryHtml = '';
    if (q) {
      const r = lookup(dictIndex, q);
      if (r.exact) {
        const e = r.exact;
        entryHtml = `<section class="card entry"><div class="pic">${e.emoji}</div><h2>${esc(e.word)} <button class="link" data-say="${esc(e.word)}">🔊</button></h2>
          ${r.lemma ? `<p class="muted">“${esc(q)}” → asosiy shakl: <b>${esc(r.lemma)}</b></p>` : ''}
          <p>${esc(e.ipa)} · <i>${esc(e.pos)}</i> · <span class="badge">${e.level}</span> · ${esc(e.category)}</p>
          <p class="uz">${esc(e.uz)}</p><p>“${esc(e.example)}” <button class="link" data-say="${esc(e.example)}">🔊</button></p><div id="defs"></div></section>`;
      } else {
        entryHtml = `<div id="defs"></div><section class="card" id="nf"><p>“${esc(q)}” topilmadi.</p>${r.suggestions.length ? `<p>Balki: ${r.suggestions.map((s) => `<a href="#/dictionary?q=${encodeURIComponent(s.word)}">${esc(s.word)}</a>`).join(', ')}?</p>` : ''}</section>`;
      }
    }
    return `<h2>📖 Lug'at</h2><input id="dq" class="search" placeholder="Inglizcha so'z kiriting (masalan: running, studies)…" value="${esc(q)}" autocomplete="off">
      <div id="sugg" class="list"></div>${entryHtml}
      <p class="muted">Inglizcha ta'riflar: <a href="https://github.com/globalwordnet/english-wordnet">Open English WordNet</a> (CC BY 4.0) — <a href="https://github.com/mannod0327-oss/Nextgen-English/blob/main/DATA-LICENSES.md">litsenziya</a>.</p>`;
  },

  exam() {
    const exam = store.get('currentExam', sampleExam);
    queueMicrotask(() => {
      $('#start').onclick = () => runExam($('#shuffle').checked ? makeVariant(exam, Date.now() & 0xffff) : exam);
      $('#import').onchange = async (e) => {
        try {
          store.set('currentExam', parseExam(await e.target.files[0].text()));
          route();
        } catch (err) { $('#err').textContent = err.message; }
      };
      $('#reset').onclick = () => { store.set('currentExam', sampleExam); route(); };
      $('#picker').onclick = (e) => {
        const i = e.target.dataset.exam;
        if (i !== undefined) { store.set('currentExam', exams[Number(i)]); route(); }
      };
    });
    const history = store.get('examHistory', []).slice(-5).reverse();
    return `<h2>⏱️ Imtihon simulyatori</h2>
      <h3>Tayyor testlar</h3><div class="list" id="picker">${exams.map((x, i) => `<button class="row pick${x.title === exam.title ? ' cur' : ''}" data-exam="${i}">
        <span class="badge">${esc(x.level ?? 'A2–B1')}</span><b>${esc(x.title)}</b>
        <span class="muted">${x.questions.length} savol · ${x.timeLimitMin} daq</span></button>`).join('')}</div>
      <section class="card"><h3>${esc(exam.title)}</h3>
      <p>${exam.questions.length} savol · ${exam.timeLimitMin ?? '∞'} daqiqa · o'tish bali ${exam.passPercent ?? 70}%</p>
      <label><input type="checkbox" id="shuffle" checked> Savol va variantlarni aralashtirish</label><br><br>
      <button class="btn primary" id="start">Boshlash</button>
      <label class="btn">📂 Test faylini yuklash (.json)<input type="file" id="import" accept=".json,.exam,application/json" hidden></label>
      <button class="btn" id="reset">Namuna testga qaytish</button><pre id="err" class="bad"></pre></section>
      ${history.length ? `<h3>Oxirgi natijalar</h3><div class="list">${history.map((h) => `<div class="row"><b>${h.percent}%</b> ${esc(h.title)} <span class="muted">${new Date(h.at).toLocaleString()}</span></div>`).join('')}</div>` : ''}`;
  },

  creator() {
    const blank = { format: 'nge-exam', version: 1, title: 'Mening testim', passPercent: 70, timeLimitMin: 10, questions: [] };
    const draft = () => store.get('draftExam', blank);
    const showErrors = (errs) => {
      $('#valid').innerHTML = errs.length ? `<span class="bad">⚠️ ${errs.map(esc).join('<br>')}</span>` : '<span class="ok">✅ Test fayli to\'g\'ri</span>';
    };
    const save = (d) => {
      store.set('draftExam', d);
      $('#json').value = serializeExam(d);
      $('#qs').innerHTML = d.questions.map((q, i) => `<div class="row"><span class="badge">${q.type}</span> ${esc(q.prompt)}
        <button class="link" data-del="${i}" aria-label="O'chirish">🗑️</button></div>`).join('') || '<p class="muted">Hali savol yo\'q.</p>';
      showErrors(validateExam(d));
    };
    queueMicrotask(() => {
      save(draft());
      const hints = {
        single: "Variantlar — har qatorda bittadan. To'g'ri variant oldiga * qo'ying.",
        multiple: "Variantlar — har qatorda bittadan. Barcha to'g'ri variantlar oldiga * qo'ying.",
        fill: 'Qabul qilinadigan javoblar — har qatorda bittadan.',
        order: "So'zlar/qismlar to'g'ri tartibda — har qatorda bittadan.",
        match: "Juftliklar: chap = o'ng (masalan: go = went).",
      };
      $('#type').onchange = () => { $('#hint').textContent = hints[$('#type').value]; };
      $('#type').onchange();
      $('#add').onclick = () => {
        const type = $('#type').value;
        const lines = $('#body').value.split('\n').map((s) => s.trim()).filter(Boolean);
        const q = { id: `q${Date.now().toString(36)}`, type, prompt: $('#prompt').value.trim() };
        if (type === 'single' || type === 'multiple') {
          q.options = lines.map((l) => l.replace(/^\*\s*/, ''));
          const marked = lines.map((l, i) => (l.startsWith('*') ? i : -1)).filter((i) => i >= 0);
          q.answer = type === 'single' ? marked[0] : marked;
        } else if (type === 'fill') q.answer = lines;
        else if (type === 'order') q.items = lines;
        else q.pairs = lines.map((l) => l.split('=').map((s) => s.trim()));
        const expl = $('#expl').value.trim();
        if (expl) q.explanation = expl;
        const errs = validateExam({ ...blank, questions: [q] }).map((e) => e.replace('questions[0]', 'Yangi savol'));
        if (errs.length) return showErrors(errs);
        save({ ...draft(), questions: [...draft().questions, q] });
        $('#prompt').value = ''; $('#body').value = ''; $('#expl').value = '';
      };
      $('#qs').onclick = (e) => {
        const i = e.target.dataset.del;
        if (i !== undefined) save({ ...draft(), questions: draft().questions.filter((_, j) => j !== Number(i)) });
      };
      $('#title').oninput = () => save({ ...draft(), title: $('#title').value });
      $('#json').onchange = () => {
        try { save(parseExam($('#json').value)); } catch (err) { $('#valid').innerHTML = `<pre class="bad">${esc(err.message)}</pre>`; }
      };
      $('#download').onclick = () => {
        const blob = new Blob([serializeExam(draft())], { type: 'application/json' });
        const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'test.exam.json' });
        a.click();
        URL.revokeObjectURL(a.href);
      };
      $('#print').onclick = () => {
        const d = draft();
        if (validateExam(d).length) return;
        const n = Math.max(1, Math.min(5, Number($('#variants').value) || 1));
        const pages = Array.from({ length: n }, (_, k) => renderPrintable(n > 1 ? makeVariant(d, k + 1) : d));
        const w = window.open('', '_blank');
        if (!w) {
          $('#valid').innerHTML = '<span class="bad">Bu muhitda chop etish oynasi ochilmadi. Testni “Yuklab olish” bilan saqlab, oddiy brauzerda chop eting.</span>';
          return;
        }
        w.document.write(pages.join('<div style="break-after:page"></div>'));
        w.document.close();
        w.print();
      };
      $('#simulate').onclick = () => {
        if (validateExam(draft()).length) return;
        store.set('currentExam', draft());
        location.hash = '#/exam';
      };
    });
    return `<h2>🛠️ Test yaratuvchi</h2><div class="split"><section class="card">
      <label>Test nomi <input id="title" value="${esc(draft().title)}"></label>
      <h3>Savol qo'shish</h3>
      <label>Turi <select id="type"><option value="single">Bitta javob</option><option value="multiple">Bir nechta javob</option>
        <option value="fill">Bo'sh joyni to'ldirish</option><option value="order">Tartiblash</option><option value="match">Moslashtirish</option></select></label>
      <label>Savol matni <input id="prompt" placeholder="She ___ to school every day."></label>
      <label>Javoblar <textarea id="body" rows="5"></textarea></label><small id="hint" class="muted"></small>
      <label>Izoh (ixtiyoriy) <input id="expl"></label>
      <button class="btn primary" id="add">+ Qo'shish</button></section>
      <section class="card"><h3>Savollar</h3><div id="qs" class="list"></div><div id="valid"></div>
      <p><button class="btn" id="simulate">▶️ Simulyatorda sinash</button> <button class="btn" id="download">💾 Yuklab olish</button></p>
      <p><label>Variantlar soni <input id="variants" type="number" min="1" max="5" value="2" style="width:4rem"></label>
      <button class="btn" id="print">🖨️ Chop etish (javob kaliti bilan)</button></p>
      <details><summary>JSON (tahrirlash mumkin)</summary><textarea id="json" rows="14" spellcheck="false"></textarea></details></section></div>`;
  },
};

// ---------- exam runner (ProfExam Simulator flow) ----------
function runExam(exam) {
  const answers = {};
  let cur = 0;
  const deadline = exam.timeLimitMin ? Date.now() + exam.timeLimitMin * 60_000 : null;
  const r = rand();
  let timer;
  const finish = () => {
    clearInterval(timer);
    const res = gradeExam(exam, answers);
    store.set('examHistory', [...store.get('examHistory', []), { title: exam.title, percent: res.percent, at: Date.now() }].slice(-50));
    addXp(Math.round(res.total * 2));
    app.innerHTML = `<section class="card center"><h2>${res.passed ? "🎉 O'tdingiz" : "Yana urinib ko'ring"}</h2><div class="big">${res.percent}%</div>
      <p>${res.total} / ${res.max} ball · o'tish bali ${exam.passPercent ?? 70}%</p></section>
      <h3>Xatolar ustida ishlash (${res.mistakes.length})</h3>
      ${exam.questions.filter((q) => res.mistakes.includes(q.id)).map((q) => `<section class="card"><b>${esc(q.prompt)}</b>
        ${feedbackHtml(q, res.perQuestion.find((p) => p.id === q.id).score)}</section>`).join('') || '<p>Xato yo\'q — ajoyib!</p>'}
      <button class="btn primary" id="again">Qaytadan</button>`;
    $('#again').onclick = route;
  };
  const tick = () => {
    if (!deadline) return;
    const left = Math.max(0, deadline - Date.now());
    const el = $('#timer');
    if (el) el.textContent = `⏱ ${Math.floor(left / 60000)}:${String(Math.floor((left % 60000) / 1000)).padStart(2, '0')}`;
    if (left === 0) { if ($('.question')) answers[exam.questions[cur].id] = readAnswer(exam.questions[cur], $('.question')); finish(); }
  };
  timer = setInterval(tick, 1000);
  const render = () => {
    const q = exam.questions[cur];
    app.innerHTML = `<div class="exambar"><b>${esc(exam.title)}</b><span id="timer"></span></div>
      <nav class="qnav">${exam.questions.map((x, i) => `<button class="${i === cur ? 'cur' : ''} ${answers[x.id] !== undefined ? 'done' : ''}" data-go="${i}">${i + 1}</button>`).join('')}</nav>
      <section class="card question"><div class="muted">${cur + 1} / ${exam.questions.length}</div><h3>${esc(q.prompt)}</h3>${questionHtml(q, r)}</section>
      <button class="btn" id="prev" ${cur === 0 ? 'disabled' : ''}>← Oldingi</button>
      <button class="btn" id="nxt" ${cur === exam.questions.length - 1 ? 'disabled' : ''}>Keyingi →</button>
      <button class="btn primary" id="finish">Yakunlash</button>`;
    restoreAnswer(q, app, answers[q.id]);
    tick();
    const keep = () => { answers[q.id] = readAnswer(q, $('.question')); };
    const go = (i) => { keep(); cur = i; render(); };
    $('.qnav').onclick = (e) => { if (e.target.dataset.go) go(Number(e.target.dataset.go)); };
    $('#prev').onclick = () => go(cur - 1);
    $('#nxt').onclick = () => go(cur + 1);
    // in-page confirmation: confirm() is unavailable in sandboxed embeds
    $('#finish').onclick = (e) => {
      keep();
      const missing = exam.questions.filter((x) => answers[x.id] === undefined).length;
      if (missing && !e.target.dataset.armed) {
        e.target.dataset.armed = '1';
        e.target.textContent = `${missing} ta savol javobsiz — baribir yakunlash`;
        return;
      }
      finish();
    };
  };
  window.addEventListener('hashchange', () => clearInterval(timer), { once: true });
  render();
}

// ---------- mic waveform (Speech Lab visual feedback) ----------
async function startWaveform(canvas) {
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { return () => {}; }
  const ctx = new AudioContext();
  const analyser = ctx.createAnalyser();
  analyser.fftSize = 1024;
  ctx.createMediaStreamSource(stream).connect(analyser);
  const data = new Uint8Array(analyser.fftSize);
  const g = canvas.getContext('2d');
  const color = getComputedStyle(document.documentElement).getPropertyValue('--accent');
  let raf;
  const draw = () => {
    analyser.getByteTimeDomainData(data);
    g.clearRect(0, 0, canvas.width, canvas.height);
    g.strokeStyle = color;
    g.beginPath();
    data.forEach((v, i) => g.lineTo((i / data.length) * canvas.width, (v / 255) * canvas.height));
    g.stroke();
    raf = requestAnimationFrame(draw);
  };
  draw();
  return () => { cancelAnimationFrame(raf); stream.getTracks().forEach((t) => t.stop()); ctx.close(); };
}

// ---------- router ----------
function route() {
  const [path, query] = location.hash.replace(/^#\/?/, '').split('?');
  const view = views[path || 'home'] ?? views.home;
  document.onkeydown = null;
  app.classList.remove('dictation');
  app.innerHTML = view(new URLSearchParams(query));
  document.querySelectorAll('.nav a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#/${path}`));
  queueMicrotask(() => {
    const accent = $('#accent');
    if (accent) { accent.value = store.get('accent', 'en-GB'); accent.onchange = () => store.set('accent', accent.value); }
  });
  window.scrollTo(0, 0);
}

// Delegated so 🔊 buttons inserted after render (definitions, reading gloss) work too.
app.addEventListener('click', (e) => { const b = e.target.closest('[data-say]'); if (b) speak(b.dataset.say); });
window.addEventListener('hashchange', route);
renderHeader();
route();
