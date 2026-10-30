import { newCard, review, dueCards, isMature } from './core/srs.js';
import { buildIndex, prefixSearch, lookup, lookupDefinition } from './core/dictionary.js';
import { scorePronunciation } from './core/pronunciation.js';
import { gradeExam, scoreQuestion, makeVariant, parseExam, serializeExam, validateExam, shuffle, mulberry32 } from './core/exam.js';
import { createPlacement, nextQuestion, answerPlacement, placementResult, LEVELS } from './core/placement.js';
import { renderPrintable, esc } from './core/printable.js';
import { createStore } from './core/store.js';
import { dailyPlan, wordOfDay } from './core/plan.js';
import { linePoints, lastDays } from './core/chart.js';
import { buildSearchIndex, search } from './core/search.js';
import { checkWriting } from './core/writing-check.js';
import { badges } from './core/badges.js';
import { makeRound, normAnswer, ROUND_KINDS } from './core/numbers.js';
import { vocabulary, categories } from './data/vocabulary.js';
import { grammar } from './data/grammar.js';
import { placementQuestions } from './data/placement.js';
import { sampleExam } from './data/sample-exam.js';
import { exams } from './data/exams.js';
import { readings } from './data/readings.js';
import { scenarios } from './data/dialogues.js';
import { guideSections, guideUnits } from './data/grammar-guide.js';
import { writing, writingCriteria, speaking, officialResources, toBand } from './data/ielts.js';
import { mockTests } from './data/ielts-mock.js';
import { guides } from './data/ielts-guides.js';
import { speakingBank } from './data/ielts-bank-speaking.js';
import { writingBank } from './data/ielts-bank-writing.js';
import { readingBank } from './data/ielts-bank-reading.js';
import { listeningBank } from './data/ielts-bank-listening.js';
import { irregularVerbs } from './data/irregular-verbs.js';
import { minimalPairs } from './data/minimal-pairs.js';
import { collocations } from './data/collocations.js';
import { trainers, drillSets, drillItems } from './data/drills.js';

// IELTS practice bank: hand-made tasks + bank items. Bank texts open in the reading view but are listed only in #/ielts.
const allTexts = [...readings, ...readingBank, ...listeningBank];
const allWriting = [...writing, ...writingBank];
const allSpeaking = [...speaking, ...speakingBank];
const ieltsLists = {
  listening: [...readings.filter((x) => x.listening), ...listeningBank],
  reading: [...readings.filter((x) => !x.listening && x.questions.some((q) => q.options?.includes('Not Given'))), ...readingBank],
};

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
// Best drill scores per trainer; older versions stored one number for the articles trainer.
function drillBest() { const b = store.get('drillBest', {}); return typeof b === 'number' ? { articles: b } : b; }
function streak(days) {
  let n = 0;
  for (let d = new Date(); days.includes(d.toISOString().slice(0, 10)); d.setDate(d.getDate() - 1)) n++;
  return n;
}
function renderHeader() {
  const p = profile();
  $('#stats').innerHTML = `<span title="Daraja">🎯 ${p.level ?? '—'}</span><span title="Tajriba">⭐ ${p.xp} XP</span><span title="Ketma-ket kunlar">🔥 ${streak(p.days)}</span>`;
}

// Today's activity log for the daily plan: { 'YYYY-MM-DD': ['vocab', 'grammar:<id>', …] }, last 14 days kept.
const today = () => new Date().toISOString().slice(0, 10);
function logActivity(entry) {
  const log = store.get('activity', {});
  const days = Object.keys(log).sort().slice(-13);
  store.set('activity', { ...Object.fromEntries(days.map((d) => [d, log[d]])), [today()]: [...(log[today()] ?? []), entry] });
}

// ---------- voice recorder (IELTS Speaking): record → listen back; recordings stay in memory only ----------
const recorderHtml = () => `<section class="card recorder"><h3>🎙 O'zingizni yozib oling</h3>
  <p><button class="btn primary" id="rec-start">⏺ Yozish</button> <button class="btn" id="rec-stop" disabled>⏹ To'xtatish</button> <b id="rec-time"></b></p>
  <p class="muted" id="rec-msg">Javobingizni yozing va qayta tinglang: pauzalar, "ee…" lar va talaffuzga e'tibor bering. Yozuvlar faqat shu sahifada saqlanadi.</p>
  <ol id="rec-list"></ol></section>`;
function mountRecorder() {
  const start = $('#rec-start');
  const stop = $('#rec-stop');
  const msg = $('#rec-msg');
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    start.disabled = true;
    msg.textContent = "⚠️ Bu brauzer ovoz yozishni qo'llamaydi (Chrome, Edge yoki Firefox'ning yangi versiyasini ishlating).";
    return { start: () => {}, stop: () => {} };
  }
  let rec = null;
  let timer = null;
  const end = () => { if (rec?.state === 'recording') rec.stop(); };
  const begin = async () => {
    if (rec?.state === 'recording') return;
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      msg.textContent = "❌ Mikrofonga ruxsat berilmadi. Brauzer manzil satridagi 🔒 belgisidan mikrofonga ruxsat bering.";
      return;
    }
    const chunks = [];
    const t0 = Date.now();
    rec = new MediaRecorder(stream);
    rec.ondataavailable = (e) => chunks.push(e.data);
    rec.onstop = () => {
      clearInterval(timer);
      stream.getTracks().forEach((t) => t.stop());
      start.disabled = false;
      stop.disabled = true;
      if (!$('#rec-list')) return; // view already left
      const sec = Math.round((Date.now() - t0) / 1000);
      const li = document.createElement('li');
      li.innerHTML = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')} <audio controls src="${URL.createObjectURL(new Blob(chunks, { type: rec.mimeType }))}"></audio>`;
      $('#rec-list').append(li);
      $('#rec-time').textContent = '';
    };
    rec.start();
    start.disabled = true;
    stop.disabled = false;
    timer = setInterval(() => {
      const sec = Math.round((Date.now() - t0) / 1000);
      if (!$('#rec-time')) return end();
      $('#rec-time').textContent = `⏺ ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
      if (sec >= 180) end();
    }, 500);
  };
  start.onclick = begin;
  stop.onclick = end;
  return { start: begin, stop: end };
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

// Grade one rendered question, show feedback, and keep the mistakes notebook in sync:
// a wrong answer is saved (with the question, so it can be retried), a correct one clears it.
function gradeBox(q, box, source) {
  const answer = readAnswer(q, box);
  const score = scoreQuestion(q, answer);
  box.querySelector('.fb').innerHTML = feedbackHtml(q, score);
  const mistakes = store.get('mistakes', {});
  if (score < 1) mistakes[q.id] = { q, source, href: location.hash, given: answer === undefined ? '—' : q.type === 'single' ? q.options[answer] : [].concat(answer).join(', '), date: new Date().toISOString().slice(0, 10) };
  else delete mistakes[q.id];
  store.set('mistakes', mistakes);
  return score;
}

let searchIndex; // built on first visit to #/search

// ---------- views ----------
const views = {
  home() {
    queueMicrotask(() => {
      $('#backup-save').onclick = () => {
        const url = URL.createObjectURL(new Blob([JSON.stringify(store.snapshot(), null, 1)], { type: 'application/json' }));
        const link = Object.assign(document.createElement('a'), { href: url, download: `nextgen-english-${new Date().toISOString().slice(0, 10)}.json` });
        link.click();
        URL.revokeObjectURL(url);
        $('#backup-msg').textContent = '✅ Fayl yuklab olindi.';
      };
      $('#backup-load').onchange = async (e) => {
        try {
          const n = store.restore(JSON.parse(await e.target.files[0].text()));
          renderHeader();
          route();
          $('#backup-msg').textContent = `✅ Tiklandi: ${n} ta yozuv.`;
        } catch (err) {
          $('#backup-msg').textContent = `❌ ${err instanceof SyntaxError ? "Fayl o'qib bo'lmadi (JSON emas)." : err.message}`;
        }
      };
    });
    const p = profile();
    const cards = store.get('cards', {});
    const due = dueCards(Object.values(cards)).length;
    const mature = Object.values(cards).filter(isMature).length;
    const tiles = [
      ['#/placement', '🧭', 'Daraja testi', "Adaptiv test: A1 dan C1 gacha darajangizni aniqlaydi"],
      ['#/vocab', '🖼️', "Vizual lug'at", `${vocabulary.length} ta so'z · ${due} ta takrorlash kutmoqda`],
      ['#/immersion', '🌊', "Immersiya o'yini", "Tarjimasiz: rasmga mos so'zni toping"],
      ['#/grammar', '📐', 'Grammatika', `${guideUnits.length} unitli qo'llanma + ${grammar.length} ta mashqli mavzu`],
      ['#/reading', '📰', "O'qish va tinglash", `${readings.length} ta matn va tinglash (A1–C1), savollar bilan`],
      ['#/verbs', '🔁', "Noto'g'ri fe'llar", `${irregularVerbs.length} ta fe'l: jadval, tinglash va V2/V3 testi`],
      ['#/sounds', '👂', 'Qiyin tovushlar', `${minimalPairs.length} juft tovush (w/v, θ/s, iː/ɪ…): eshiting va farqlang`],
      ['#/drill', '🎯', 'Mashqlar markazi', `${drillItems.length} ta mashq: ${trainers.map((t) => t.title.toLowerCase()).join(', ')}`],
      ['#/collocations', '🧩', 'Kollokatsiyalar', `${collocations.reduce((n, g) => n + g.items.length, 0)} ta ibora: make/do/take, sifat+ot, idiomalar`],
      ['#/ielts', '🎓', 'IELTS tayyorlov', `Listening, Reading, ${writing.length} ta Writing, ${speaking.length} ta Speaking, ball hisoblagich`],
      ['#/speech', '🎙️', 'Nutq laboratoriyasi', "Real vaziyatlar, talaffuzni 0–100% baholash"],
      ['#/dictionary', '📖', "Lug'at", "Prefiks qidiruv, so'z shakllarini taniydi"],
      ['#/exam', '⏱️', 'Imtihon simulyatori', "Taymer, navigatsiya, xatolar tahlili"],
      ['#/creator', '🛠️', 'Test yaratuvchi', "O'qituvchi uchun: test tuzish, variantlar, chop etish"],
    ];
    const plan = dailyPlan({ date: today(), level: p.level, grammar, texts: allTexts, activity: store.get('activity', {})[today()] ?? [] });
    const planDone = plan.filter((t) => t.done).length;
    const wod = wordOfDay(today(), vocabulary, p.level);
    queueMicrotask(() => import('./data/definitions.js').then(({ definitions }) => {
      const d = definitions[wod.word.toLowerCase()];
      const el = $('#wod-def');
      if (d?.[0] && el) el.textContent = d[0][1];
    }).catch(() => {}));
    const wodHtml = `<section class="card wod"><h3>🌟 Kun so'zi</h3>
      <p class="wod-word"><span class="ico">${wod.emoji}</span> <b>${esc(wod.word)}</b> <span class="muted">${esc(wod.ipa)} · ${esc(wod.pos)} · ${wod.level}</span> <button class="btn" data-say="${esc(wod.word)}">🔊</button></p>
      <p><b>${esc(wod.uz)}</b> — <i id="wod-def" class="muted"></i></p>
      <p>${esc(wod.example)} <button class="link" data-say="${esc(wod.example)}">🔊</button></p>
      <p><a href="#/vocab?cat=${encodeURIComponent(wod.category)}">Mavzu: ${esc(wod.category)} →</a></p></section>`;
    const planHtml = `<section class="card plan"><h3>📅 Bugungi reja <span class="badge ${planDone === plan.length ? 'ok' : ''}">${planDone}/${plan.length}</span></h3>
      ${p.level ? '' : `<p class="muted">Darajangiz aniqlanmagan — reja A1 uchun. <a href="#/placement">Daraja testini topshiring</a>, reja moslashadi.</p>`}
      <div class="list">${plan.map((t) => `<a class="row${t.done ? ' done' : ''}" href="${t.href}"><span class="badge">${t.done ? '✅' : t.icon}</span><span>${esc(t.title)}</span></a>`).join('')}</div>
      ${planDone === plan.length ? '<p>🎉 Bugungi reja bajarildi! Ertaga yangi vazifalar.</p>' : ''}</section>`;
    return `<section class="hero"><h1>Ingliz tilini tizimli o'rganing</h1>
      <p>${p.level ? `Sizning darajangiz: <b>${p.level}</b>. ` : "Avval darajangizni aniqlang — reja shunga moslashadi. "}
      ${mature} ta so'z uzoq muddatli xotirada.</p>
      <div class="hero-actions">${p.level ? '' : '<a class="btn primary" href="#/placement">Daraja testini boshlash →</a>'}
      <a class="btn" href="grammar-guide/index.html">📚 Grammatika qo'llanmasi (${guideUnits.length} unit)</a></div></section>
      ${planHtml}
      ${wodHtml}
      <div class="grid">${tiles.map(([href, icon, t, d]) => `<a class="tile" href="${href}"><span class="ico">${icon}</span><b>${t}</b><span class="muted">${d}</span></a>`).join('')}</div>
      <section class="card"><h3>💾 Zaxira nusxa</h3>
        <p class="muted">Progress faqat shu brauzerda saqlanadi. Telefon yoki kompyuter almashtirsangiz, faylni yuklab oling va yangi qurilmada qayta yuklang.</p>
        <p><button class="btn" id="backup-save">⬇ Progressni yuklab olish</button>
          <label class="btn">⬆ Fayldan tiklash <input type="file" id="backup-load" accept="application/json,.json" hidden></label></p>
        <p id="backup-msg" aria-live="polite"></p></section>`;
  },

  placement() {
    let state = createPlacement(placementQuestions, { rand: rand() });
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
    if (params.get('mode') === 'test') {
      // Writing test: half "Uzbek → English", half "listen and write" (sentence context with the word blanked).
      const r = rand();
      const pool = cat && cat !== '__all' ? vocabulary.filter((v) => v.category === cat) : vocabulary;
      const qs = shuffle(pool, r).slice(0, 10).map((w, n) => {
        const blanked = w.example.replace(new RegExp(w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), '___');
        const listen = n % 2 === 1 && blanked !== w.example;
        return { id: `vt-${w.id.toLowerCase().replace(/[^a-z]+/g, '-')}`, type: 'fill', answer: w.word, say: listen ? w.word : null,
          prompt: listen ? `🔊 Eshiting va yozing: ${blanked}` : `${w.emoji} "${w.uz}" inglizcha qanday? (${w.pos})` };
      });
      queueMicrotask(() => {
        $('#check').onclick = () => {
          let total = 0;
          qs.forEach((q) => { total += gradeBox(q, app.querySelector(`[data-q="${q.id}"]`), "Lug'at testi"); });
          const pct = Math.round((total / qs.length) * 100);
          store.set('vocabTestBest', Math.max(store.get('vocabTestBest', 0), pct));
          logActivity('vocab-test');
          addXp(total);
          $('#result').textContent = `Natija: ${pct}%`;
          $('#check').disabled = true;
        };
      });
      return `<a href="#/vocab">← Lug'at</a><h2>✍️ Lug'at yozish testi${cat && cat !== '__all' ? ` · ${esc(cat)}` : ''}</h2>
        <p class="muted">So'zni inglizcha yozing. 🔊 tugmasi so'zni o'qib beradi — eshitganingizni yozing.</p>
        ${qs.map((q, n) => `<section class="card question" data-q="${q.id}"><b>${n + 1}. ${esc(q.prompt)}</b>${q.say ? ` <button class="btn" data-say="${esc(q.say)}">🔊 Tinglash</button>` : ''}${questionHtml(q, r)}<div class="fb"></div></section>`).join('')}
        <p><button class="btn primary" id="check">Tekshirish</button> <b id="result"></b></p>`;
    }
    if (!cat) {
      const cards = store.get('cards', {});
      const best = store.get('vocabTestBest', null);
      queueMicrotask(() => { $('#vt-go').onclick = () => { location.hash = `#/vocab?mode=test&cat=${encodeURIComponent($('#vt-cat').value)}`; }; });
      return `<h2>🖼️ Vizual lug'at</h2><p class="muted">Mavzuni tanlang. Takrorlash SM-2 algoritmi bo'yicha rejalashtiriladi.</p>
        <section class="card"><h3>✍️ Yozish testi</h3><p class="muted">10 savol: o'zbekchadan inglizchaga yozish va eshitib yozish.</p>
          <p><select id="vt-cat" class="select"><option value="__all">Barcha mavzular</option>${categories.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select>
          <button class="btn primary" id="vt-go">Boshlash →</button> ${best != null ? `<span class="badge ok">eng yaxshi: ${best}%</span>` : ''}</p></section>
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
        logActivity('vocab');
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
          total += gradeBox(q, app.querySelector(`[data-q="${q.id}"]`), `Grammatika: ${topic.title}`);
        });
        const pct = Math.round((total / topic.exercises.length) * 100);
        store.set('grammarDone', { ...store.get('grammarDone', {}), [topic.id]: pct });
        logActivity(`grammar:${topic.id}`);
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
    const t = allTexts.find((x) => x.id === params.get('t'));
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
      // IELTS-style highlighter: CSS Custom Highlight API marks ranges without touching the DOM.
      if (globalThis.CSS?.highlights) {
        const marks = new Highlight();
        CSS.highlights.set('nge-mark', marks);
        $('#mark').onclick = () => {
          const sel = getSelection();
          if (sel.rangeCount && !sel.isCollapsed && $('#text').contains(sel.anchorNode)) marks.add(sel.getRangeAt(0).cloneRange());
          sel.removeAllRanges();
        };
        $('#unmark').onclick = () => marks.clear();
      }
      $('#check').onclick = () => {
        let total = 0;
        t.questions.forEach((q) => {
          total += gradeBox(q, app.querySelector(`[data-q="${q.id}"]`), `O'qish: ${t.title}`);
        });
        const pct = Math.round((total / t.questions.length) * 100);
        store.set('readingDone', { ...store.get('readingDone', {}), [t.id]: pct });
        logActivity(`reading:${t.id}`);
        addXp(Math.round(total * 3));
        $('#result').textContent = `Natija: ${pct}%`;
        $('#text').hidden = false; // listening tasks reveal the script after checking
      };
    });
    return `<a href="${t.ielts ? `#/ielts?bank=${t.listening ? 'listening' : 'reading'}` : '#/reading'}">← ${t.ielts ? 'IELTS banki' : 'Matnlar'}</a><h2>${esc(t.title)} <span class="badge">${t.level}</span></h2>
      <p class="muted">${esc(t.uzTitle)}</p>
      <p><button class="btn" id="listen">🔊 Tinglash</button> <button class="btn" id="listen-slow">🐢 Sekin</button>
        <button class="btn" id="hide">🙈 Matnni yashirish / ko'rsatish</button>
        ${globalThis.CSS?.highlights ? `<button class="btn" id="mark">🖍 Belgilash</button> <button class="btn" id="unmark">Tozalash</button>` : ''}</p>
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

  ielts(params) {
    const mmss = (sec) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
    // Countdown that stops itself once the view is gone.
    const countdown = (el, sec, done) => {
      el.textContent = mmss(sec);
      const id = setInterval(() => {
        if (!el.isConnected) return clearInterval(id);
        el.textContent = mmss(--sec);
        if (sec <= 0) { clearInterval(id); done?.(); }
      }, 1000);
    };
    const mockKind = params.get('mock');
    const mock = mockTests[mockKind];
    if (mock) {
      const all = mock.sections.flatMap((sec) => sec.questions);
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        let raw = 0;
        all.forEach((q) => {
          raw += gradeBox(q, app.querySelector(`[data-q="${q.id}"]`), mock.title);
        });
        raw = Math.round(raw);
        const band = toBand(mock.kind, raw);
        store.set('ieltsMock', { ...store.get('ieltsMock', {}), [mockKind]: { raw, band, date: new Date().toISOString().slice(0, 10) } });
        store.set('ieltsMockHistory', [...store.get('ieltsMockHistory', []), { key: mockKind, kind: mock.kind, raw, band, date: today() }].slice(-50));
        addXp(raw);
        app.querySelectorAll('.script').forEach((el) => { el.hidden = false; });
        $('#mock-finish').disabled = true;
        $('#mock-result').innerHTML = `Natija: <b>${raw} / ${all.length}</b> → taxminiy band <b class="big-band">${band}</b>`;
        $('#mock-result').scrollIntoView({ behavior: 'smooth' });
      };
      queueMicrotask(() => {
        countdown($('#mock-timer'), mock.minutes * 60, () => { $('#mock-timer').textContent = '⏰ Vaqt tugadi'; finish(); });
        app.querySelectorAll('[data-play]').forEach((b) => {
          const text = mock.sections[b.dataset.play].script.replace(/^[A-Z][a-z]+: /gm, '');
          b.onclick = () => speak(text, b.dataset.slow ? 0.75 : 0.9);
        });
        $('#mock-finish').onclick = finish;
      });
      const r = rand();
      return `<a href="#/ielts">← IELTS</a><h2>📝 ${esc(mock.title)}</h2>
        <p class="sticky-bar card">⏱ <b id="mock-timer"></b> · ${all.length} savol · ${mock.minutes} daqiqa
          <span class="muted">${mock.kind === 'listening' ? "— har bir qismni 🔊 bir marta tinglang (haqiqiy imtihondagidek). Matnlar yakunda ochiladi." : '— har bir matnga ~20 daqiqa ajrating.'}</span></p>
        ${mock.sections.map((sec, n) => `<section class="card"><h3>${esc(sec.title)}</h3><p class="muted">${esc(sec.intro)}</p>
          ${sec.script ? `<p><button class="btn" data-play="${n}">🔊 Tinglash</button> <button class="btn" data-play="${n}" data-slow="1">🐢 Sekinroq</button></p>
            <div class="reading-text script" hidden>${esc(sec.script)}</div>` : `<div class="reading-text">${esc(sec.text)}</div>`}
          ${sec.questions.map((q) => `<div class="question" data-q="${q.id}"><b>${esc(q.prompt)}</b>${questionHtml(q, r)}<div class="fb"></div></div>`).join('')}</section>`).join('')}
        <p><button class="btn primary" id="mock-finish">✅ Testni yakunlash</button></p><p id="mock-result" aria-live="polite"></p>`;
    }
    const g = guides.find((x) => x.id === params.get('guide'));
    if (g) {
      queueMicrotask(() => {
        $('#guide-play')?.addEventListener('click', () => speak(g.script.replace(/\b[A-Z][a-z]+: /g, ''), 0.85));
        $('#guide-check').onclick = () => {
          let total = 0;
          g.questions.forEach((q) => { total += gradeBox(q, app.querySelector(`[data-q="${q.id}"]`), `IELTS strategiya: ${g.title}`); });
          const pct = Math.round((total / g.questions.length) * 100);
          store.set('guideBest', { ...store.get('guideBest', {}), [g.id]: Math.max(store.get('guideBest', {})[g.id] ?? 0, pct) });
          if (g.script) $('#guide-script').hidden = false;
          $('#guide-result').textContent = `Natija: ${pct}%`;
        };
      });
      return `<a href="#/ielts">← IELTS</a><h2>${g.icon} ${esc(g.title)} <span class="badge">${esc(g.skill)}</span></h2>
        <p>${esc(g.intro)}</p>
        <section class="card"><h3>📋 Qadamlar</h3><ol>${g.steps.map((x) => `<li>${esc(x)}</li>`).join('')}</ol></section>
        <section class="card"><h3>⚠️ Tuzoqlar</h3><ul>${g.traps.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>
        <section class="card"><h3>🏋️ Mini mashq</h3>
          ${g.text ? `<div class="reading-text" lang="en">${esc(g.text)}</div>` : ''}
          ${g.script ? `<p><button class="btn" id="guide-play">🔊 Tinglash</button></p><div class="reading-text script" id="guide-script" lang="en" hidden>${esc(g.script)}</div>` : ''}
          ${g.questions.map((q) => `<div class="question" data-q="${q.id}"><b lang="en">${esc(q.prompt)}</b>${questionHtml(q)}<div class="fb"></div></div>`).join('')}
          <p><button class="btn primary" id="guide-check">Tekshirish</button> <span id="guide-result" aria-live="polite"></span></p></section>
        <p>${guides.filter((x) => x !== g).map((x) => `<a class="btn" href="#/ielts?guide=${x.id}">${x.icon} ${esc(x.title)}</a>`).join(' ')}</p>`;
    }
    const w = allWriting.find((x) => x.id === params.get('w'));
    if (w) {
      const drafts = store.get('ieltsDrafts', {});
      queueMicrotask(() => {
        const ta = $('#essay');
        const count = () => {
          const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
          $('#wc').textContent = `${n} / ${w.minWords} so'z`;
          $('#wc').className = n >= w.minWords ? 'badge ok' : 'badge';
          store.set('ieltsDrafts', { ...store.get('ieltsDrafts', {}), [w.id]: ta.value });
        };
        ta.oninput = count;
        count();
        $('#wcheck').onclick = () => {
          const r = checkWriting(ta.value, { minWords: w.minWords });
          const li = (ok, html) => `<li>${ok ? '✅' : '⚠️'} ${html}</li>`;
          $('#wreport').innerHTML = `<section class="card wreport"><h3>🔍 Matn tahlili</h3><ul class="checks">
            ${li(r.enough, `<b>${r.words}</b> so'z (kamida ${w.minWords})`)}
            ${li(r.linkers.length >= 3, `Bog'lovchi so'zlar: <b>${r.linkers.length}</b>${r.linkers.length ? ` — ${esc(r.linkers.join(', '))}` : ''}${r.linkers.length < 3 ? ' · qo\'shing: however, moreover, as a result, for example…' : ''}`)}
            ${li(!r.repeated.length, r.repeated.length ? `Ko'p takrorlangan so'zlar: ${r.repeated.map(([x, n]) => `<b>${esc(x)}</b> ×${n}`).join(', ')} — sinonim ishlating` : "So'zlar xilma-xil")}
            ${li(!r.longSentences.length, `${r.sentences} gap, o'rtacha ${r.avgSentence} so'z${r.longSentences.length ? ` · ${r.longSentences.length} ta juda uzun gap (35+ so'z) — bo'ling` : ''}`)}
            ${li(!r.contractions.length, r.contractions.length ? `Qisqartmalar (akademik uslubda yozilmaydi): ${esc(r.contractions.join(', '))} → do not, cannot…` : 'Qisqartmalar yo\'q (akademik uslub)')}
            ${li(!r.mistakes.length, r.mistakes.length ? `<b>${r.mistakes.length}</b> ta tipik xato:` : 'Tipik xatolar topilmadi')}</ul>
            ${r.mistakes.length ? `<ul class="mistake-list">${r.mistakes.map((m) => `<li><s>${esc(m.match)}</s> → <b>${esc(m.fix)}</b><br><span class="muted">${esc(m.uz)}</span></li>`).join('')}</ul>` : ''}
            <p class="muted">Bu avtomatik maslahat — grammatikaning hammasini tekshirmaydi. Yakuniy bahoni 4 mezon bo'yicha o'zingiz qo'ying.</p></section>`;
        };
        $('#timer-start').onclick = (e) => { e.target.disabled = true; countdown($('#timer'), w.minutes * 60, () => { $('#timer').textContent = "⏰ Vaqt tugadi!"; }); };
      });
      return `<a href="#/ielts">← IELTS</a><h2>Writing ${w.type ? esc(w.type) : `Task ${w.task}`} <span class="badge">${w.minutes} daqiqa · ${w.minWords}+ so'z</span></h2>
        <section class="card"><p><b>${esc(w.prompt)}</b></p>
        ${w.table ? `<table class="tbl">${w.table.map((row, i) => `<tr>${row.map((c) => (i ? `<td>${esc(c)}</td>` : `<th>${esc(c)}</th>`)).join('')}</tr>`).join('')}</table>` : ''}
        ${w.steps ? `<ol class="steps">${w.steps.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}</section>
        <p><button class="btn" id="timer-start">⏱ Taymerni boshlash</button> <b id="timer">${mmss(w.minutes * 60)}</b> <span id="wc" class="badge"></span></p>
        <textarea id="essay" rows="14" class="essay" placeholder="Javobingizni shu yerga yozing… (avtomatik saqlanadi)">${esc(drafts[w.id] ?? '')}</textarea>
        <p><button class="btn" id="wcheck">🔍 Tekshirish</button> <span class="muted">so'z soni, bog'lovchilar, takrorlar va o'zbeklar ko'p qiladigan xatolar</span></p><div id="wreport"></div>
        <section class="card"><h3>✅ O'zingizni tekshiring (4 mezon)</h3>${writingCriteria.map(([c, d]) => `<label class="check"><input type="checkbox"> <b>${esc(c)}</b> — <span class="muted">${esc(d)}</span></label>`).join('')}</section>
        ${w.plan ? `<details class="card"><summary><b>📋 Reja va g'oyalar</b></summary><ul>${w.plan.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          <p class="muted">${w.task === 1 ? "Tuzilma: 1) savolni qayta yozish · 2) Overview (2 asosiy tendensiya) · 3–4) raqamlar bilan taqqoslash." : "Tuzilma: kirish + pozitsiya · 2 asosiy abzas (fikr + sabab + misol) · xulosa."}</p></details>` : ''}
        ${w.tips ? `<details class="card"><summary><b>💡 Maslahatlar</b></summary><ul>${w.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></details>` : ''}
        ${w.model ? `<details class="card"><summary><b>📄 Namunaviy javob (Band 7–8)</b> — avval o'zingiz yozing!</summary><div class="model">${esc(w.model)}</div>
          <p class="muted">${w.model.split(/\s+/).length} so'z</p></details>` : ''}`;
    }
    const sp = allSpeaking.find((x) => x.id === params.get('s'));
    if (sp) {
      queueMicrotask(() => {
        const recorder = mountRecorder();
        $('#cue-start').onclick = (e) => {
          e.target.disabled = true;
          $('#cue-phase').textContent = 'Tayyorlanish (eslatma yozing):';
          countdown($('#cue-timer'), 60, () => {
            $('#cue-phase').textContent = '🎙 Gapiring!';
            if ($('#rec-auto')?.checked) recorder.start();
            countdown($('#cue-timer'), 120, () => {
              $('#cue-phase').textContent = '✅ Vaqt tugadi.';
              e.target.disabled = false;
              recorder.stop();
            });
          });
        };
      });
      const qs = (list) => `<ol>${list.map((q) => `<li>${esc(q)} <button class="link" data-say="${esc(q)}">🔊</button></li>`).join('')}</ol>`;
      return `<a href="#/ielts">← IELTS</a><h2>Speaking: ${esc(sp.topic)}</h2>
        <p class="muted">Savolni 🔊 tinglang va ovoz chiqarib javob bering. Part 1 — 2–3 gap, Part 3 — sabab va misol bilan kengroq.</p>
        <section class="card"><h3>Part 1 · 4–5 daqiqa</h3>${qs(sp.part1)}</section>
        <section class="card cue"><h3>Part 2 · Cue card</h3><p><b>${esc(sp.part2.card)}</b></p><p>You should say:</p>
          <ul>${sp.part2.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
          <p><button class="btn primary" id="cue-start">⏱ 1 daqiqa tayyorlanish + 2 daqiqa gapirish</button> <span id="cue-phase"></span> <b id="cue-timer"></b></p>
          <label class="check"><input type="checkbox" id="rec-auto" checked> "Gapiring!" boshlanganda avtomatik yozib olish</label>
          <textarea rows="3" class="essay" placeholder="Qisqa eslatmalar (faqat kalit so'zlar)…"></textarea>
          ${sp.part2.model ? `<details class="card"><summary><b>📄 Namunaviy javob (Band 7)</b> — avval o'zingiz gapiring!</summary><div class="model">${esc(sp.part2.model)}</div>
            <p><button class="btn" data-say="${esc(sp.part2.model)}">🔊 Tinglash</button> <span class="muted">${sp.part2.model.split(/\s+/).length} so'z ≈ 2 daqiqa</span></p></details>` : ''}</section>
        ${recorderHtml()}
        <section class="card"><h3>Part 3 · Muhokama</h3>${qs(sp.part3)}</section>
        <p><a class="btn" href="#/speech">🎙 Talaffuzni baholash — Nutq laboratoriyasi</a></p>`;
    }
    const done = store.get('readingDone', {});
    const rows = (list) => list.map((x) => `<a class="row" href="#/reading?t=${x.id}"><span class="badge">${x.level}</span><span><b>${esc(x.title)}</b><br><span class="muted">${esc(x.uzTitle ?? '')}</span></span><span class="muted">${done[x.id] != null ? `${done[x.id]}%` : ''}</span></a>`).join('');
    const bank = params.get('bank');
    if (bank) {
      const drafts = store.get('ieltsDrafts', {});
      const groups = {
        listening: () => [1, 2, 3, 4].map((n) => [`Part ${n}`, ieltsLists.listening.filter((x) => (x.part ?? 0) === n)]).concat([['Boshqa', ieltsLists.listening.filter((x) => !x.part)]]),
        reading: () => LEVELS.map((l) => [l, ieltsLists.reading.filter((x) => x.level === l)]),
        writing: () => [1, 2].map((n) => [`Task ${n}`, allWriting.filter((x) => x.task === n)]),
        speaking: () => [['Part 1–3', allSpeaking]],
      }[bank]?.() ?? [];
      const item = (x) => (bank === 'writing'
        ? `<a class="row" href="#/ielts?w=${x.id}"><span class="badge">${esc(x.type ?? `Task ${x.task}`)}</span><span>${esc(x.prompt.slice(0, 90))}…</span><span class="muted">${(drafts[x.id] ?? '').trim().split(/\s+/).length >= x.minWords ? '✅' : ''}</span></a>`
        : bank === 'speaking'
          ? `<a class="row" href="#/ielts?s=${x.id}"><span class="badge">🗣</span><span><b>${esc(x.topic)}</b><br><span class="muted">${esc(x.part2.card)}</span></span></a>`
          : rows([x]));
      const titles = { listening: '🎧 Listening', reading: '📰 Reading', writing: '✍️ Writing', speaking: '🗣 Speaking' };
      const total = groups.reduce((n, [, list]) => n + list.length, 0);
      return `<a href="#/ielts">← IELTS</a><h2>${titles[bank] ?? ''} banki <span class="badge">${total} ta</span></h2>
        ${groups.filter(([, list]) => list.length).map(([g, list]) => `<h3>${esc(g)} <span class="muted">(${list.length})</span></h3><div class="list">${list.map(item).join('')}</div>`).join('')}`;
    }
    queueMicrotask(() => {
      const calc = () => {
        const l = Math.min(40, Math.max(0, Number($('#raw-l').value) || 0));
        const r = Math.min(40, Math.max(0, Number($('#raw-r').value) || 0));
        $('#band').textContent = `Listening ≈ ${toBand('listening', l)} · Reading ≈ ${toBand('reading', r)}`;
      };
      $('#raw-l').oninput = calc;
      $('#raw-r').oninput = calc;
      calc();
    });
    return `<h2>🎓 IELTS Academic tayyorlov</h2>
      <p class="muted">Barcha topshiriqlar original, rasmiy IELTS formatida yozilgan. Haqiqiy test 4 qismdan iborat: Listening (30 daq), Reading (60 daq), Writing (60 daq), Speaking (11–14 daq).</p>
      <div class="grid">
        <section class="card"><h3>📦 Mashqlar banki</h3><p class="muted">Jami <b>${ieltsLists.listening.length + ieltsLists.reading.length + allWriting.length + allSpeaking.length}</b> ta original IELTS topshirig'i.</p>
          <div class="list">
            <a class="row" href="#/ielts?bank=listening"><span class="badge">🎧</span><span><b>Listening</b> — Part 1–4</span><span class="muted">${ieltsLists.listening.length} ta</span></a>
            <a class="row" href="#/drill?t=task1"><span class="badge">📊</span><span><b>Task 1 tili</b> — rise by/to, peak, twice as many… trenajyori</span><span class="muted">${drillItems.filter((q) => q.trainer === 'task1').length} ta</span></a>
            <a class="row" href="#/numbers"><span class="badge">🔢</span><span><b>Raqamlar va sanalar</b> — Part 1 uchun tinglash trenajyori</span><span class="muted">cheksiz</span></a>
            <a class="row" href="#/ielts?bank=reading"><span class="badge">📰</span><span><b>Reading</b> — T/F/NG, MCQ, gap-fill</span><span class="muted">${ieltsLists.reading.length} ta</span></a>
            <a class="row" href="#/ielts?bank=writing"><span class="badge">✍️</span><span><b>Writing</b> — Task 1 & 2</span><span class="muted">${allWriting.length} ta</span></a>
            <a class="row" href="#/ielts?bank=speaking"><span class="badge">🗣</span><span><b>Speaking</b> — Part 1–3</span><span class="muted">${allSpeaking.length} ta</span></a>
          </div></section>
        <section class="card"><h3>🧭 Savol turlari strategiyasi</h3><p class="muted">Har bir savol turi uchun o'zbekcha qadamlar, tuzoqlar va mini mashq.</p>
          <div class="list">${guides.map((x) => `<a class="row" href="#/ielts?guide=${x.id}"><span class="badge">${x.icon}</span><span><b>${esc(x.title)}</b> — ${esc(x.skill)}</span><span class="muted">${store.get('guideBest', {})[x.id] != null ? `${store.get('guideBest', {})[x.id]}%` : ''}</span></a>`).join('')}</div></section>
        <section class="card"><h3>📝 To'liq sinov testi</h3><p class="muted">Haqiqiy format: 40 savol, umumiy taymer, yakunda band.</p>
          ${Object.entries(mockTests).map(([k, m]) => { const res = store.get('ieltsMock', {})[k]; return `<p><a class="btn primary" href="#/ielts?mock=${k}">${m.kind === 'listening' ? '🎧' : '📰'} ${esc(m.title.replace(/^IELTS (Academic )?/, ''))} · ${m.minutes} daq</a>
            ${res ? `<span class="badge ok">oxirgi: ${res.raw}/40 → ${res.band}</span>` : ''}</p>`; }).join('')}</section>
        <section class="card"><h3>🧾 Xatolar daftari</h3><p class="muted">Barcha testlardagi noto'g'ri javoblaringiz bir joyda — qayta ishlang.</p>
          <a class="btn" href="#/mistakes">Xatolar: ${Object.keys(store.get('mistakes', {})).length} ta →</a></section>
        <section class="card"><h3>📚 Akademik so'zlar</h3><p class="muted">IELTS Writing va Reading uchun ${vocabulary.filter((v) => v.category === "Akademik so'zlar (IELTS)").length} ta asosiy so'z — kartalar bilan yodlang.</p>
          <a class="btn primary" href="#/vocab?cat=${encodeURIComponent("Akademik so'zlar (IELTS)")}">Kartalarni boshlash →</a></section>
      </div>
      <section class="card"><h3>🧮 Ball hisoblagich (40 savoldan)</h3>
        <label>Listening to'g'ri javoblar: <input id="raw-l" type="number" min="0" max="40" value="30"></label>
        <label>Reading to'g'ri javoblar: <input id="raw-r" type="number" min="0" max="40" value="30"></label>
        <p class="big-band" id="band"></p><p class="muted">Taxminiy, ochiq e'lon qilingan jadval asosida; rasmiy ball har bir test uchun biroz farq qilishi mumkin.</p></section>
      <section class="card"><h3>🔗 Rasmiy bepul materiallar</h3><ul>${officialResources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('')}</ul>
        <p class="muted">Cambridge IELTS kitoblari mualliflik huquqi bilan himoyalangan — ularni faqat sotib olib yoki kutubxonadan foydalaning.</p></section>`;
  },

  verbs(params) {
    const forms = (x) => x.split('/');
    if (params.get('mode') === 'test') {
      const r = rand();
      const picked = shuffle(irregularVerbs, r).slice(0, 10);
      const qs = picked.flatMap(([v1, v2, v3, uz]) => [
        { id: `iv-${v1}-2`, type: 'fill', prompt: `${v1} (${uz}) → Past Simple (V2)`, answer: forms(v2) },
        { id: `iv-${v1}-3`, type: 'fill', prompt: `${v1} (${uz}) → Past Participle (V3)`, answer: forms(v3) },
      ]);
      queueMicrotask(() => {
        $('#check').onclick = () => {
          let total = 0;
          qs.forEach((q) => { total += gradeBox(q, app.querySelector(`[data-q="${q.id}"]`), "Noto'g'ri fe'llar"); });
          const pct = Math.round((total / qs.length) * 100);
          store.set('verbsBest', Math.max(store.get('verbsBest', 0), pct));
          logActivity('verbs');
          addXp(total);
          $('#result').textContent = `Natija: ${pct}%`;
          $('#check').disabled = true;
        };
      });
      return `<a href="#/verbs">← Jadval</a><h2>🔁 Fe'llar testi</h2><p class="muted">10 ta tasodifiy fe'l — V2 va V3 shaklini yozing. Ikki shakl bo'lsa (learnt/learned), bittasini yozish kifoya.</p>
        <div class="grid">${qs.map((q) => `<section class="card question" data-q="${q.id}"><b>${esc(q.prompt)}</b>${questionHtml(q)}<div class="fb"></div></section>`).join('')}</div>
        <p><button class="btn primary" id="check">Tekshirish</button> <b id="result"></b> <a class="btn" href="#/">Bosh sahifa</a></p>`;
    }
    queueMicrotask(() => {
      const filter = () => {
        const q = $('#vq').value.trim().toLowerCase();
        const lvl = $('#vl').value;
        app.querySelectorAll('#verbs tbody tr').forEach((tr) => {
          tr.hidden = !(tr.dataset.s.includes(q) && (!lvl || tr.dataset.level === lvl));
        });
      };
      $('#vq').oninput = filter;
      $('#vl').onchange = filter;
    });
    const best = store.get('verbsBest', null);
    return `<h2>🔁 Noto'g'ri fe'llar (${irregularVerbs.length})</h2>
      <p class="muted">O'tgan zamon (V2) va 3-shakl (V3) "-ed" bilan yasalmaydigan fe'llar. 🔊 bosib uchala shaklni tinglang.</p>
      <p><a class="btn primary" href="#/verbs?mode=test">✍️ Test: 10 ta tasodifiy fe'l</a> ${best != null ? `<span class="badge ok">eng yaxshi: ${best}%</span>` : ''}</p>
      <p><input id="vq" class="search" placeholder="Qidirish (inglizcha yoki o'zbekcha)…" autocomplete="off">
        <select id="vl"><option value="">Barcha darajalar</option>${LEVELS.map((l) => `<option>${l}</option>`).join('')}</select></p>
      <table class="tbl" id="verbs"><thead><tr><th>V1</th><th>V2</th><th>V3</th><th>O'zbekcha</th><th></th></tr></thead><tbody>
      ${irregularVerbs.map(([v1, v2, v3, uz, lvl]) => `<tr data-level="${lvl}" data-s="${esc(`${v1} ${v2} ${v3} ${uz}`.toLowerCase())}"><td><b>${esc(v1)}</b></td><td>${esc(v2)}</td><td>${esc(v3)}</td><td>${esc(uz)} <span class="badge">${lvl}</span></td>
        <td><button class="link" data-say="${esc(`${v1}, ${forms(v2)[0]}, ${forms(v3)[0]}`)}">🔊</button></td></tr>`).join('')}
      </tbody></table>`;
  },

  sounds(params) {
    const best = store.get('soundsBest', {});
    const set = minimalPairs.find((x) => x.id === params.get('set'));
    if (!set) {
      return `<h2>👂 Qiyin tovushlar — minimal juftlar</h2>
        <p class="muted">Bir tovush bilan farq qiladigan so'zlar (ship / sheep). O'zbek tilida bo'lmagan yoki boshqacha aytiladigan tovushlarni quloq bilan ajratishni o'rganing — so'ng Nutq laboratoriyasida o'zingiz ayting.</p>
        <div class="grid">${minimalPairs.map((x) => `<a class="tile" href="#/sounds?set=${x.id}"><b>${esc(x.sounds)}</b>
          <span class="muted">${x.pairs.slice(0, 2).map((p) => p.join(' / ')).join(', ')}…</span>${best[x.id] != null ? `<span class="badge ok">eng yaxshi: ${best[x.id]}%</span>` : ''}</a>`).join('')}</div>`;
    }
    const ROUNDS = 10;
    const r = rand();
    let round = 0;
    let score = 0;
    const play = () => {
      if (round === ROUNDS) {
        const pct = Math.round((score / ROUNDS) * 100);
        store.set('soundsBest', { ...store.get('soundsBest', {}), [set.id]: Math.max(best[set.id] ?? 0, pct) });
        addXp(score);
        $('#game').innerHTML = `<div class="score ${pct >= 80 ? 'ok' : pct >= 50 ? 'part' : 'bad'}">${score} / ${ROUNDS}</div>
          <p>${pct >= 80 ? "Zo'r! Quloq bu tovushlarni ajratyapti." : "Jadvaldagi juftlarni yana tinglang va qayta urinib ko'ring."}</p><button class="btn primary" id="again">🔁 Qayta</button>`;
        $('#again').onclick = () => { round = 0; score = 0; play(); };
        return;
      }
      const pair = set.pairs[Math.floor(r() * set.pairs.length)];
      const target = pair[Math.floor(r() * 2)];
      const options = shuffle(pair, r);
      $('#game').innerHTML = `<p class="muted">${round + 1} / ${ROUNDS} · to'g'ri: ${score}</p>
        <p><button class="btn primary" id="listen" data-word="${esc(target)}">🔊 Tinglash</button> <button class="btn" id="listen-slow">🐢 Sekin</button></p>
        <p>Qaysi so'zni eshitdingiz?</p><p>${options.map((o) => `<button class="btn pick-word" data-w="${esc(o)}">${esc(o)}</button>`).join(' ')}</p><div id="sfb"></div>`;
      $('#listen').onclick = () => speak(target, 0.8);
      $('#listen-slow').onclick = () => speak(target, 0.55);
      speak(target, 0.8);
      app.querySelectorAll('.pick-word').forEach((b) => {
        b.onclick = () => {
          const ok = b.dataset.w === target;
          if (ok) score++;
          app.querySelectorAll('.pick-word').forEach((x) => { x.disabled = true; x.classList.add(x.dataset.w === target ? 'primary' : 'muted'); });
          $('#sfb').innerHTML = `<p class="feedback ${ok ? 'ok' : 'bad'}">${ok ? "✅ To'g'ri!" : `❌ Bu <b>${esc(target)}</b> edi.`}
            ${pair.map((w) => `<button class="link" data-say="${esc(w)}">🔊 ${esc(w)}</button>`).join(' ')}</p><button class="btn" id="next">Keyingisi →</button>`;
          round++;
          $('#next').onclick = play;
        };
      });
    };
    queueMicrotask(play);
    return `<a href="#/sounds">← Tovushlar</a><h2>👂 ${esc(set.sounds)}</h2>
      <section class="card"><p>💡 ${esc(set.tip)}</p></section>
      <section class="card" id="game" aria-live="polite"></section>
      <h3>Juftlarni mashq qiling</h3>
      <table class="tbl"><tbody>${set.pairs.map(([a, b]) => `<tr><td><button class="link" data-say="${esc(a)}">🔊</button> ${esc(a)}</td><td><button class="link" data-say="${esc(b)}">🔊</button> ${esc(b)}</td></tr>`).join('')}</tbody></table>
      <p><a class="btn" href="#/speech">🎙 Endi o'zingiz ayting — Nutq laboratoriyasi</a></p>`;
  },

  progress() {
    const p = profile();
    const cards = Object.values(store.get('cards', {}));
    const avg = (o) => { const v = Object.values(o); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null; };
    const grammarDone = store.get('grammarDone', {});
    const readingDone = store.get('readingDone', {});
    const history = store.get('ieltsMockHistory', []);
    const activity = store.get('activity', {});
    const days = lastDays(today(), 14);
    const counts = days.map((d) => (activity[d] ?? []).length);
    const maxCount = Math.max(1, ...counts);
    const stat = (icon, label, value, sub = '') => `<div class="stat card"><span class="ico">${icon}</span><b>${value}</b><span>${label}</span>${sub ? `<span class="muted">${sub}</span>` : ''}</div>`;
    const W = 320;
    const H = 140;
    const series = (kind, color) => {
      const pts = history.filter((h) => h.kind === kind).map((h) => h.band);
      const line = linePoints(pts, W, H, 0, 9, 18);
      // Dots as well as the line: a single attempt is a zero-length polyline and would be invisible.
      return pts.length ? `<polyline fill="none" stroke="${color}" stroke-width="2.5" points="${line}"/>${line.split(' ').map((xy, i) => `<circle cx="${xy.split(',')[0]}" cy="${xy.split(',')[1]}" r="3.5" fill="${color}"><title>${pts[i]}</title></circle>`).join('')}` : '';
    };
    return `<h2>📈 Mening progressim</h2>
      <div class="stats-grid">
        ${stat('🎯', 'daraja', p.level ?? '—', p.level ? '' : '<a href="#/placement">testni topshiring</a>')}
        ${stat('⭐', 'XP', p.xp)}
        ${stat('🔥', 'kun ketma-ket', streak(p.days))}
        ${stat('🖼️', "so'z o'rganilmoqda", cards.length, `${cards.filter(isMature).length} ta uzoq xotirada`)}
        ${stat('📐', 'grammatika mavzusi', Object.keys(grammarDone).length, avg(grammarDone) != null ? `o'rtacha ${avg(grammarDone)}%` : '')}
        ${stat('📰', "o'qish / tinglash", Object.keys(readingDone).length, avg(readingDone) != null ? `o'rtacha ${avg(readingDone)}%` : '')}
        ${stat('🧾', 'ochiq xato', Object.keys(store.get('mistakes', {})).length, '<a href="#/mistakes">ishlash →</a>')}
        ${stat('🔁', "fe'llar testi", store.get('verbsBest', null) != null ? `${store.get('verbsBest')}%` : '—', 'eng yaxshi')}
      </div>
      ${(() => {
        const list = badges({ xp: p.xp, streak: streak(p.days), level: p.level, cards: cards.length, mature: cards.filter(isMature).length,
          grammar: grammarDone, reading: readingDone, bands: history.map((h) => h.band), verbsBest: store.get('verbsBest', null), drillBest: drillBest().articles ?? null });
        return `<section class="card"><h3>🏆 Yutuqlar <span class="badge">${list.filter((b) => b.earned).length} / ${list.length}</span></h3>
          <div class="badges">${list.map((b) => `<div class="bdg${b.earned ? ' earned' : ''}" data-badge="${b.id}" title="${esc(b.desc)}"><span class="ico">${b.icon}</span><b>${esc(b.title)}</b>
            <span class="muted">${b.earned ? '✅ olindi' : `${esc(b.desc)} · ${b.value}/${b.goal}`}</span>${b.earned ? '' : `<progress max="${b.goal}" value="${b.value}"></progress>`}</div>`).join('')}</div></section>`;
      })()}
      <section class="card"><h3>🎓 IELTS sinov testlari</h3>
        ${history.length ? `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Band natijalari grafigi">
            ${[3, 5, 7, 9].map((b) => { const y = linePoints([b], W, H, 0, 9, 18).split(',')[1]; return `<line x1="16" x2="${W}" y1="${y}" y2="${y}" class="grid-line"/><text x="2" y="${Number(y) + 3}" class="axis">${b}</text>`; }).join('')}
            ${series('listening', 'var(--accent)')}${series('reading', 'var(--ok)')}</svg>
          <p class="muted"><span style="color:var(--accent)">━</span> Listening · <span style="color:var(--ok)">━</span> Reading</p>
          <table class="tbl"><thead><tr><th>Sana</th><th>Test</th><th>Ball</th><th>Band</th></tr></thead><tbody>
          ${history.slice().reverse().map((h) => `<tr><td>${h.date}</td><td>${esc(mockTests[h.key]?.title ?? h.key)}</td><td>${h.raw}/40</td><td><b>${h.band}</b></td></tr>`).join('')}</tbody></table>`
          : `<p class="muted">Hali sinov testi topshirilmagan. <a href="#/ielts">IELTS bo'limida</a> boshlang — natijalar shu yerda grafikda ko'rinadi.</p>`}</section>
      <section class="card"><h3>📅 So'nggi 14 kun faolligi</h3>
        <div class="bars" role="img" aria-label="Kunlik faollik">${days.map((d, i) => `<div class="bar" title="${d}: ${counts[i]}"><span style="height:${Math.round((counts[i] / maxCount) * 100)}%"></span><small>${d.slice(8)}</small></div>`).join('')}</div>
        <p class="muted">Har bir ustun — kartalar, grammatika, o'qish va testlar bo'yicha bajarilgan ishlar soni.</p></section>`;
  },

  // Legacy alias: #/articles?set=… → the articles trainer of the drill centre.
  articles(params) { params.set('t', 'articles'); return views.drill(params); },

  drill(params) {
    const t = trainers.find((x) => x.id === params.get('t'));
    const bests = drillBest();
    if (!t) {
      return `<h2>🎯 Mashqlar markazi</h2><p class="muted">Har bir trenajyor — 10 ta tasodifiy savol, har javobdan keyin o'zbekcha izoh. Xatolar daftariga tushadi.</p>
        <div class="grid">${trainers.map((x) => `<a class="tile" href="#/drill?t=${x.id}"><span class="ico">${x.icon}</span><b>${esc(x.title)}</b>
          <span class="muted">${esc(x.desc)} · ${drillItems.filter((q) => q.trainer === x.id).length} ta mashq</span>${bests[x.id] != null ? `<span class="badge ok">eng yaxshi: ${bests[x.id]}%</span>` : ''}</a>`).join('')}
          <a class="tile" href="#/numbers"><span class="ico">🔢</span><b>Raqamlar va sanalar (tinglash)</b><span class="muted">fifteen/fifty, sana, narx, telefon — har safar yangi</span></a></div>`;
    }
    const r = rand();
    const sets = drillSets.filter((x) => x.trainer === t.id);
    const set = sets.find((x) => x.id === params.get('set'));
    const pool = drillItems.filter((q) => (set ? q.set === set.id : q.trainer === t.id));
    const qs = shuffle(pool, r).slice(0, 10);
    const link = (extra = '') => `#/drill?t=${t.id}${extra}`;
    queueMicrotask(() => {
      $('#check').onclick = () => {
        let total = 0;
        qs.forEach((q) => { total += gradeBox(q, app.querySelector(`[data-q="${q.id}"]`), t.title); });
        const pct = Math.round((total / qs.length) * 100);
        store.set('drillBest', { ...drillBest(), [t.id]: Math.max(drillBest()[t.id] ?? 0, pct) });
        logActivity(`drill:${t.id}`);
        addXp(total);
        $('#result').textContent = `Natija: ${pct}%`;
        $('#check').disabled = true;
      };
    });
    return `<a href="#/drill">← Mashqlar markazi</a><h2>${t.icon} ${esc(t.title)}</h2><p class="muted">${esc(t.intro)} Har javobdan keyin o'zbekcha izoh chiqadi.</p>
      ${sets.length > 1 ? `<p><a class="btn${set ? '' : ' primary'}" href="${link()}">Aralash</a> ${sets.map((x) => `<a class="btn${set === x ? ' primary' : ''}" href="${link(`&set=${x.id}`)}">${esc(x.title.split(':')[0])} (${x.items.length})</a>`).join(' ')}` : '<p>'}
        ${bests[t.id] != null ? `<span class="badge ok">eng yaxshi: ${bests[t.id]}%</span>` : ''}</p>
      ${(set ? [set] : sets).filter((x) => x.rules).map((x) => `<details class="card"><summary><b>📋 Qoidalar: ${esc(x.title)}</b></summary>
        <table class="tbl"><tbody>${x.rules.map(([w, rule, ex]) => `<tr><td><b>${esc(w)}</b></td><td>${esc(rule)}</td><td class="muted">${esc(ex)}</td></tr>`).join('')}</tbody></table></details>`).join('')}
      ${qs.map((q, n) => `<section class="card question" data-q="${q.id}"><b>${n + 1}. ${esc(q.prompt)}</b>${q.say ? ` <button class="btn" data-say="${esc(q.say)}">🔊</button>` : ''}${questionHtml(q, r)}<div class="fb"></div></section>`).join('')}
      <p><button class="btn primary" id="check">Tekshirish</button> <a class="btn" href="${link(`${set ? `&set=${set.id}` : ''}&r=${Date.now()}`)}">🔄 Yangi 10 ta</a> <b id="result"></b></p>`;
  },

  // Numbers & dates listening (IELTS Listening Part 1): generated rounds, not stored in the mistakes notebook.
  numbers() {
    const r = rand();
    const kinds = shuffle([...ROUND_KINDS, ...ROUND_KINDS], r).slice(0, 10);
    const rounds = kinds.map((k) => makeRound(k, r));
    queueMicrotask(() => {
      app.querySelectorAll('[data-slow]').forEach((b) => { b.onclick = () => speak(b.dataset.slow, 0.6); });
      $('#check').onclick = () => {
        let ok = 0;
        rounds.forEach((rd, i) => {
          const box = app.querySelector(`[data-round="${i}"]`);
          const good = rd.accept.includes(normAnswer(box.querySelector('input').value));
          ok += good;
          box.querySelector('.fb').innerHTML = `<div class="feedback ${good ? 'ok' : 'bad'}">${good ? '✅' : '❌'} <b>${esc(rd.shown)}</b> — <span class="muted">"${esc(rd.say)}"</span></div>`;
        });
        const pct = ok * 10;
        store.set('numbersBest', Math.max(store.get('numbersBest', 0), pct));
        logActivity('numbers');
        addXp(ok);
        $('#result').textContent = `Natija: ${pct}%`;
        $('#check').disabled = true;
      };
    });
    const best = store.get('numbersBest', null);
    return `<a href="#/drill">← Mashqlar markazi</a><h2>🔢 Raqamlar va sanalarni tinglash</h2>
      <p class="muted">IELTS Listening Part 1'da eng ko'p xato: fifteen/fifty, sanalar, narxlar va telefon raqamlari. 🔊 bosing, eshitganingizni <b>raqam bilan</b> yozing. Telefon: "oh" = 0, "double four" = 44.</p>
      ${best != null ? `<p><span class="badge ok">eng yaxshi: ${best}%</span></p>` : ''}
      ${rounds.map((rd, i) => `<section class="card question" data-round="${i}"><b>${i + 1}. ${esc(rd.hint)}</b>
        <p><button class="btn" data-say="${esc(rd.say)}">🔊 Tinglash</button> <button class="btn" data-slow="${esc(rd.say)}">🐢 Sekin</button></p>
        <input class="fill" inputmode="text" autocomplete="off" aria-label="Javob ${i + 1}"><div class="fb"></div></section>`).join('')}
      <p><button class="btn primary" id="check">Tekshirish</button> <a class="btn" href="#/numbers?r=${Date.now()}">🔄 Yangi 10 ta</a> <b id="result"></b></p>`;
  },

  collocations(params) {
    const all = collocations.flatMap((g) => g.items.map((it) => ({ g, it })));
    if (params.get('mode') === 'test') {
      const r = rand();
      const verbs = collocations.filter((g) => g.kind === 'verb').map((g) => g.title);
      const adjs = [...new Set(collocations.filter((g) => g.kind === 'adj').flatMap((g) => g.items.map(([p]) => p.split(' ')[0])))];
      const idioms = collocations.filter((g) => g.kind === 'idiom').flatMap((g) => g.items);
      const particles = [...new Set(collocations.filter((g) => g.kind === 'phrasal').flatMap((g) => g.items.map(([p]) => p.split(' ').slice(1).join(' '))))];
      const slug = (p) => p.toLowerCase().replace(/[^a-z]+/g, '-');
      const choices = (right, pool) => shuffle([right, ...shuffle(pool.filter((x) => x !== right), r).slice(0, 3)], r);
      const qs = shuffle(all, r).slice(0, 10).map(({ g, it: [phrase, uz] }) => {
        if (g.kind === 'idiom') {
          const options = choices(uz, idioms.map((x) => x[1]));
          return { id: `co-${slug(phrase)}`, type: 'single', prompt: `"${phrase}" nimani anglatadi?`, options, answer: options.indexOf(uz) };
        }
        const [head, ...rest] = phrase.split(' ');
        if (g.kind === 'phrasal') {
          const part = rest.join(' ');
          const options = choices(part, particles);
          return { id: `co-${slug(phrase)}`, type: 'single', prompt: `${head} ___  (${uz})`, options, answer: options.indexOf(part) };
        }
        const options = choices(head, g.kind === 'verb' ? verbs : adjs);
        return { id: `co-${slug(phrase)}`, type: 'single', prompt: `___ ${rest.join(' ')}  (${uz})`, options, answer: options.indexOf(head) };
      });
      queueMicrotask(() => {
        $('#check').onclick = () => {
          let total = 0;
          qs.forEach((q) => { total += gradeBox(q, app.querySelector(`[data-q="${q.id}"]`), 'Kollokatsiyalar'); });
          const pct = Math.round((total / qs.length) * 100);
          store.set('collocBest', Math.max(store.get('collocBest', 0), pct));
          logActivity('collocations');
          addXp(total);
          $('#result').textContent = `Natija: ${pct}%`;
          $('#check').disabled = true;
        };
      });
      return `<a href="#/collocations">← Iboralar</a><h2>🧩 Kollokatsiya testi</h2><p class="muted">Bo'sh joyga mos so'zni tanlang (inglizlar aynan shunday aytadi).</p>
        ${qs.map((q, n) => `<section class="card question" data-q="${q.id}"><b>${n + 1}. ${esc(q.prompt)}</b>${questionHtml(q, r)}<div class="fb"></div></section>`).join('')}
        <p><button class="btn primary" id="check">Tekshirish</button> <b id="result"></b></p>`;
    }
    const best = store.get('collocBest', null);
    return `<h2>🧩 Kollokatsiyalar va iboralar (${all.length})</h2>
      <p class="muted">Kollokatsiya — so'zlarning tabiiy birikmasi: <b>make</b> a decision (do a decision emas), <b>heavy</b> rain (strong rain emas). Frazali fe'llar: get <b>over</b>, put <b>up with</b>, come <b>up with</b>… IELTS'da "Lexical resource" balini ko'taradi.</p>
      <p><a class="btn primary" href="#/collocations?mode=test">✍️ Test: 10 ta savol</a> ${best != null ? `<span class="badge ok">eng yaxshi: ${best}%</span>` : ''}</p>
      ${collocations.map((g) => `<section class="card"><h3>${esc(g.kind === 'verb' ? `${g.title} + …` : g.title)} <span class="muted">(${g.items.length})</span></h3>
        <table class="tbl"><tbody>${g.items.map(([p, uz, ex]) => `<tr><td><b>${esc(p)}</b></td><td>${esc(uz)}</td><td class="muted">${esc(ex)} <button class="link" data-say="${esc(ex)}">🔊</button></td></tr>`).join('')}</tbody></table></section>`).join('')}`;
  },

  search(params) {
    searchIndex ??= buildSearchIndex([
      ...vocabulary.map((v) => ({ type: "So'z", title: v.word, sub: v.uz, href: `#/dictionary?q=${encodeURIComponent(v.word)}`, text: v.example })),
      ...grammar.map((t) => ({ type: 'Grammatika', title: t.title, sub: t.level, href: `#/grammar?topic=${t.id}`, text: t.rule })),
      ...guideUnits.map((u) => ({ type: "Qo'llanma", title: `Unit ${u.n}: ${u.en}`, sub: u.uz, href: guideUnitHref(u.n) })),
      ...allTexts.map((t) => ({ type: t.listening ? 'Tinglash' : "O'qish", title: t.title, sub: `${t.level} · ${t.uzTitle ?? ''}`, href: `#/reading?t=${t.id}`, text: t.text })),
      ...allWriting.map((w) => ({ type: 'Writing', title: w.prompt.slice(0, 90), sub: w.type ?? `Task ${w.task}`, href: `#/ielts?w=${w.id}`, text: w.prompt })),
      ...allSpeaking.map((x) => ({ type: 'Speaking', title: x.topic, sub: x.part2.card, href: `#/ielts?s=${x.id}`, text: [...x.part1, ...x.part3].join(' ') })),
      ...Object.entries(mockTests).map(([k, m]) => ({ type: 'Sinov testi', title: m.title, sub: `${m.minutes} daqiqa`, href: `#/ielts?mock=${k}` })),
      { type: 'Mashq', title: 'Raqamlar va sanalarni tinglash', sub: 'fifteen fifty sana narx telefon raqami numbers dates', href: '#/numbers' },
      ...drillSets.map((x) => ({ type: 'Mashq', title: x.title, sub: x.rules.map(([w]) => w).join(', '), text: x.items.map(([, t]) => t).join(' '), href: `#/drill?t=${x.trainer}&set=${x.id}` })),
      ...irregularVerbs.map(([v1, v2, v3, uz]) => ({ type: "Fe'l", title: `${v1} – ${v2} – ${v3}`, sub: uz, href: '#/verbs' })),
      ...collocations.flatMap((g) => g.items.map(([ph, uz, ex]) => ({ type: 'Ibora', title: ph, sub: uz, href: '#/collocations', text: ex }))),
      ...minimalPairs.map((x) => ({ type: 'Tovush', title: x.sounds, sub: x.pairs.map((p) => p.join('/')).join(', '), href: `#/sounds?set=${x.id}` })),
    ]);
    const render = (q) => {
      const hits = search(searchIndex, q);
      $('#sres').innerHTML = q.trim().length < 2 ? '<p class="muted">Kamida 2 ta harf yozing.</p>'
        : hits.length ? `<p class="muted">${hits.length}${hits.length === 50 ? '+' : ''} ta natija</p><div class="list">${hits.map((h) => `<a class="row" href="${h.href}"><span class="badge">${esc(h.type)}</span><span><b>${esc(h.title)}</b><br><span class="muted">${esc(h.sub ?? '')}</span></span></a>`).join('')}</div>`
          : `<p>“${esc(q)}” bo'yicha hech narsa topilmadi.</p>`;
    };
    queueMicrotask(() => {
      const input = $('#sq');
      input.focus();
      input.oninput = () => {
        history.replaceState(null, '', `#/search?q=${encodeURIComponent(input.value)}`); // keep the URL shareable without re-rendering
        render(input.value);
      };
      render(input.value);
    });
    return `<h2>🔎 Qidiruv</h2><input id="sq" class="search" type="search" placeholder="So'z, grammatika, matn, IELTS mavzusi… (inglizcha yoki o'zbekcha)" value="${esc(params.get('q') ?? '')}" autocomplete="off">
      <div id="sres" aria-live="polite"></div>`;
  },

  mistakes() {
    const list = Object.values(store.get('mistakes', {})).sort((a, b) => (a.date < b.date ? 1 : -1));
    if (!list.length) {
      return `<h2>🧾 Xatolar daftari</h2><section class="card center"><p>Hozircha xato yo'q 🎉</p>
        <p class="muted">Grammatika, O'qish va IELTS sinov testlaridagi noto'g'ri javoblar shu yerga avtomatik yig'iladi.</p>
        <a class="btn primary" href="#/ielts">IELTS bo'limiga</a></section>`;
    }
    const r = rand();
    queueMicrotask(() => {
      $('#retry').onclick = () => {
        let fixed = 0;
        list.forEach((m) => { fixed += gradeBox(m.q, app.querySelector(`[data-q="${m.q.id}"]`), m.source) === 1 ? 1 : 0; });
        $('#retry-result').textContent = `${fixed} / ${list.length} tuzatildi — to'g'ri javoblar daftardan o'chirildi.`;
        renderHeader();
      };
      $('#clear-mistakes').onclick = () => { store.set('mistakes', {}); route(); };
    });
    return `<h2>🧾 Xatolar daftari <span class="badge">${list.length}</span></h2>
      <p class="muted">Har bir savolga qaytadan javob bering. To'g'ri javob berilgan savol daftardan o'chadi.</p>
      ${list.map((m) => `<section class="card question" data-q="${esc(m.q.id)}">
        <p class="muted">${esc(m.source)} · ${m.date} · oldingi javobingiz: <s>${esc(m.given)}</s> · <a href="${esc(m.href)}">manbaga o'tish</a></p>
        <b>${esc(m.q.prompt)}</b>${questionHtml(m.q, r)}<div class="fb"></div></section>`).join('')}
      <p><button class="btn primary" id="retry">Tekshirish</button> <button class="btn" id="clear-mistakes">Daftarni tozalash</button></p>
      <p id="retry-result" aria-live="polite"></p>`;
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
// Offline: cache the app on first visit (service worker needs https or localhost).
// Display preferences: theme (light/dark, default follows the OS) and font scale, saved per device.
const FONT_STEPS = [0.875, 1, 1.125, 1.25, 1.375];
function applyPrefs() {
  const { theme, fs = 1 } = store.get('prefs', {});
  const root = document.documentElement;
  if (theme) root.dataset.theme = theme; else delete root.dataset.theme;
  root.style.setProperty('--fs', fs);
  const dark = theme ? theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  $('#theme').textContent = dark ? '☀️' : '🌙';
  $('#theme').setAttribute('aria-pressed', String(dark));
  $('#fs-down').disabled = fs <= FONT_STEPS[0];
  $('#fs-up').disabled = fs >= FONT_STEPS.at(-1);
}
const setPrefs = (patch) => { store.set('prefs', { ...store.get('prefs', {}), ...patch }); applyPrefs(); };
$('#theme').onclick = () => setPrefs({ theme: $('#theme').textContent === '🌙' ? 'dark' : 'light' });
const stepFont = (d) => { const i = FONT_STEPS.indexOf(store.get('prefs', {}).fs ?? 1); setPrefs({ fs: FONT_STEPS[Math.min(FONT_STEPS.length - 1, Math.max(0, (i < 0 ? 1 : i) + d))] }); };
$('#fs-down').onclick = () => stepFont(-1);
$('#fs-up').onclick = () => stepFont(1);
applyPrefs();

if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
renderHeader();
route();
