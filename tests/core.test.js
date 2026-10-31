import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newCard, review, dueCards, isMature } from '../src/core/srs.js';
import { buildIndex, prefixSearch, lookup, lemmaCandidates, levenshtein, lookupDefinition } from '../src/core/dictionary.js';
import { scorePronunciation } from '../src/core/pronunciation.js';
import { validateExam, scoreQuestion, gradeExam, makeVariant, parseExam, serializeExam, mulberry32 } from '../src/core/exam.js';
import { createPlacement, nextQuestion, answerPlacement, placementResult } from '../src/core/placement.js';
import { renderPrintable, answerKey } from '../src/core/printable.js';
import { createStore } from '../src/core/store.js';
import { dailyPlan, wordOfDay, goalStatus, reviewQueue } from '../src/core/plan.js';
import { linePoints, lastDays, niceMax, chartSvg } from '../src/core/chart.js';
import { buildSearchIndex, search, norm } from '../src/core/search.js';
import { sampleExam } from '../src/data/sample-exam.js';
import { placementQuestions } from '../src/data/placement.js';

test('srs: SM-2 intervals grow 1 → 6 → 15 days and a lapse resets', () => {
  let c = newCard('apple', 0);
  c = review(c, 4, 0);
  assert.equal(c.interval, 1);
  c = review(c, 4, c.due);
  assert.equal(c.interval, 6);
  c = review(c, 5, c.due);
  assert.equal(c.interval, 15);
  const lapsed = review(c, 1, c.due);
  assert.equal(lapsed.interval, 0);
  assert.equal(lapsed.reps, 0);
  assert.equal(lapsed.lapses, 1);
  assert.ok(lapsed.ease < c.ease);
  assert.throws(() => review(c, 6), RangeError);
});

test('srs: ease never drops below 1.3; due ordering; maturity', () => {
  let c = newCard('x', 0);
  for (let i = 0; i < 20; i++) c = review(c, 0, 0);
  assert.equal(c.ease, 1.3);
  const cards = [{ id: 'a', due: 5 }, { id: 'b', due: 1 }, { id: 'c', due: 99 }];
  assert.deepEqual(dueCards(cards, 10).map((x) => x.id), ['b', 'a']);
  assert.equal(isMature({ interval: 21 }), true);
  assert.equal(isMature({ interval: 20 }), false);
});

const index = buildIndex(['run', 'study', 'apple', 'application', 'apply', 'leaf', 'make'].map((word) => ({ word })));

test('dictionary: prefix search uses sorted order and stops at the prefix boundary', () => {
  assert.deepEqual(prefixSearch(index, 'app').map((e) => e.word), ['apple', 'application', 'apply']);
  assert.deepEqual(prefixSearch(index, 'APP', 2).map((e) => e.word), ['apple', 'application']);
  assert.deepEqual(prefixSearch(index, 'zzz'), []);
  assert.deepEqual(prefixSearch(index, '  '), []);
});

test('dictionary: lemma lookup resolves inflections', () => {
  assert.equal(lookup(index, 'running').exact.word, 'run');
  assert.equal(lookup(index, 'studies').exact.word, 'study');
  assert.equal(lookup(index, 'leaves').exact.word, 'leaf');
  assert.equal(lookup(index, 'making').exact.word, 'make');
  assert.equal(lookup(index, 'applied').exact.word, 'apply');
  assert.equal(lookup(index, 'apple').lemma, null);
  assert.ok(lemmaCandidates('runs').includes('run'));
});

test('dictionary: fuzzy suggestions for typos', () => {
  const r = lookup(index, 'aple');
  assert.equal(r.exact, null);
  assert.equal(r.suggestions[0].word, 'apple');
  assert.equal(levenshtein('kitten', 'sitting'), 3);
  assert.deepEqual(lookup(index, '').suggestions, []);
});

test('pronunciation: perfect, partial, and wrong attempts', () => {
  assert.equal(scorePronunciation('Can I see the menu, please?', 'can i see the menu please').score, 100);
  const partial = scorePronunciation('Can I see the menu please', 'can I see the many please');
  assert.ok(partial.score > 70 && partial.score < 100, `partial=${partial.score}`);
  assert.equal(partial.words.find((w) => w.word === 'menu').heard, 'many');
  const missing = scorePronunciation('I would like green tea', 'I like tea');
  assert.equal(missing.words.find((w) => w.word === 'green').score, 0);
  assert.ok(scorePronunciation('hello world', 'completely different words here').score < 30);
  assert.equal(scorePronunciation('', 'x').score, 0);
  // extra rambling is penalised
  assert.ok(scorePronunciation('thank you', 'thank you very much indeed').score < 100);
});

test('exam: sample exam is valid and validation catches broken files', () => {
  assert.deepEqual(validateExam(sampleExam), []);
  const bad = { format: 'nge-exam', title: 'x', questions: [
    { id: 'a', type: 'single', prompt: 'p', options: ['x'], answer: 3 },
    { id: 'a', type: 'nope', prompt: 'p' },
    { id: 'b', type: 'fill', prompt: '' },
  ] };
  const errs = validateExam(bad);
  assert.ok(errs.some((e) => e.includes('index into options')));
  assert.ok(errs.some((e) => e.includes('duplicated')));
  assert.ok(errs.some((e) => e.includes('unknown')));
  assert.ok(errs.some((e) => e.includes('prompt is required')));
  assert.deepEqual(validateExam(null), ['exam must be an object']);
});

test('exam: per-type scoring with partial credit', () => {
  const q = Object.fromEntries(sampleExam.questions.map((x) => [x.id, x]));
  assert.equal(scoreQuestion(q.q1, 1), 1);
  assert.equal(scoreQuestion(q.q1, 0), 0);
  assert.equal(scoreQuestion(q.q3, [1, 2, 4]), 1);
  assert.equal(scoreQuestion(q.q3, [1, 2]), 2 / 3);
  assert.equal(scoreQuestion(q.q3, [0, 1, 2, 3, 4]), 1 / 3); // wrong picks cost points
  assert.equal(scoreQuestion(q.q4, '  WAS. '), 1);
  assert.equal(scoreQuestion(q.q5, 'dear'), 1);
  assert.equal(scoreQuestion(q.q6, ['Have', 'you', 'ever', 'been', 'abroad?']), 1);
  assert.equal(scoreQuestion(q.q6, ['you', 'Have', 'ever', 'been', 'abroad?']), 3 / 5);
  assert.equal(scoreQuestion(q.q7, { 0: 0, 1: 1, 2: 3, 3: 2 }), 0.5);
  assert.equal(scoreQuestion(q.q1, undefined), 0);
});

test('exam: grading computes percent, pass flag and mistakes', () => {
  const perfect = Object.fromEntries(sampleExam.questions.map((q) => [q.id,
    q.type === 'order' ? q.items : q.type === 'match' ? Object.fromEntries(q.pairs.map((_, i) => [i, i]))
      : q.type === 'fill' ? [].concat(q.answer)[0] : q.answer]));
  const r = gradeExam(sampleExam, perfect);
  assert.equal(r.percent, 100);
  assert.equal(r.passed, true);
  assert.deepEqual(r.mistakes, []);
  const empty = gradeExam(sampleExam, {});
  assert.equal(empty.percent, 0);
  assert.equal(empty.passed, false);
  assert.equal(empty.mistakes.length, sampleExam.questions.length);
});

test('exam: variants are deterministic and keep answers correct', () => {
  const v1 = makeVariant(sampleExam, 42);
  const v2 = makeVariant(sampleExam, 42);
  assert.deepEqual(v1, v2);
  assert.notDeepEqual(v1.questions.map((q) => q.id), sampleExam.questions.map((q) => q.id));
  const orig = Object.fromEntries(sampleExam.questions.map((q) => [q.id, q]));
  for (const q of v1.questions) {
    if (q.type === 'single') assert.equal(q.options[q.answer], orig[q.id].options[orig[q.id].answer]);
    if (q.type === 'multiple') {
      assert.deepEqual(q.answer.map((i) => q.options[i]).sort(), orig[q.id].answer.map((i) => orig[q.id].options[i]).sort());
    }
  }
  assert.deepEqual(validateExam(v1), []);
});

test('exam: serialize → parse round trip; parse rejects invalid', () => {
  assert.deepEqual(parseExam(serializeExam(sampleExam)), sampleExam);
  assert.throws(() => parseExam('{"format":"x"}'), /Invalid exam file/);
});

test('placement: strong learner climbs, weak learner stays low', () => {
  const run = (isCorrect) => {
    let s = createPlacement(placementQuestions);
    for (let q = nextQuestion(s); q; q = nextQuestion(s)) s = answerPlacement(s, q, isCorrect(q));
    return s;
  };
  const strong = run(() => true);
  assert.equal(strong.history.length, 12);
  assert.equal(placementResult(strong), 'C1');
  assert.equal(placementResult(run(() => false)), 'A1');
  const b1 = run((q) => ['A1', 'A2', 'B1'].includes(q.level));
  assert.equal(placementResult(b1), 'B1');
  // never repeats a question
  assert.equal(new Set(strong.history.map((h) => h.id)).size, strong.history.length);
});

test('printable: escapes HTML, includes key, hides order answers', () => {
  const exam = { title: '<Quiz>', questions: [
    { id: 'o', type: 'order', prompt: 'Order', items: ['b', 'a', 'c'] },
    { id: 's', type: 'single', prompt: 'x < y?', options: ['yes', 'no'], answer: 0 },
  ] };
  const html = renderPrintable(exam);
  assert.ok(html.includes('&lt;Quiz&gt;'));
  assert.ok(html.includes('x &lt; y?'));
  assert.ok(html.includes('a &nbsp;/&nbsp; b &nbsp;/&nbsp; c'));
  assert.ok(html.includes('Answer key'));
  assert.ok(!renderPrintable(exam, { withKey: false }).includes('Answer key'));
  assert.equal(answerKey(exam.questions[1]), 'A');
  assert.equal(answerKey({ type: 'multiple', answer: [0, 2] }), 'A, C');
});

test('store: persists through backend and survives a throwing backend', () => {
  const m = new Map();
  const backend = { getItem: (k) => m.get(k) ?? null, setItem: (k, v) => m.set(k, v) };
  const s = createStore('t', backend);
  s.set('xp', 10);
  assert.equal(createStore('t', backend).get('xp'), 10);
  const broken = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('denied'); } };
  const s2 = createStore('t', broken);
  s2.set('k', { a: 1 });
  assert.deepEqual(s2.get('k'), { a: 1 });
  assert.equal(s2.get('missing', 'dflt'), 'dflt');
});

test('lookupDefinition falls back to the lemma and returns null for unknown words', () => {
  const defs = { commute: [['verb', 'travel back and forth regularly', '']], run: [['verb', 'move fast', '']] };
  assert.equal(lookupDefinition(defs, 'Commuting').word, 'commute');
  assert.equal(lookupDefinition(defs, 'running').senses[0][1], 'move fast');
  assert.equal(lookupDefinition(defs, 'zzz'), null);
});

test('store: snapshot captures the namespace only, restore validates and round-trips', () => {
  const m = new Map([['other:x', '1']]);
  const backend = { getItem: (k) => m.get(k) ?? null, setItem: (k, v) => m.set(k, v), key: (i) => [...m.keys()][i], get length() { return m.size; } };
  const s = createStore('t', backend);
  s.set('xp', 42);
  s.set('cards', { a: { due: 1 } });
  const snap = s.snapshot();
  assert.equal(snap.format, 'nge-backup');
  assert.deepEqual(snap.data, { xp: 42, cards: { a: { due: 1 } } });
  const fresh = createStore('t', { getItem: () => null, setItem() {} });
  assert.equal(fresh.restore(JSON.parse(JSON.stringify(snap))), 2);
  assert.equal(fresh.get('xp'), 42);
  assert.throws(() => fresh.restore({ hello: 1 }), /zaxira/);
  assert.throws(() => fresh.restore(null), /zaxira/);
});

test('dailyPlan: deterministic per date, level-matched, done from activity', () => {
  const grammar = [{ id: 'g1', title: 'A', level: 'A1' }, { id: 'g2', title: 'B', level: 'B2' }, { id: 'g3', title: 'C', level: 'B2' }];
  const texts = [{ id: 'r1', title: 'R1', level: 'A1' }, { id: 'r2', title: 'R2', level: 'B2' }, { id: 'l1', title: 'L1', level: 'B1', listening: true }];
  const a = dailyPlan({ date: '2026-10-28', level: 'B2', grammar, texts });
  assert.deepEqual(a, dailyPlan({ date: '2026-10-28', level: 'B2', grammar, texts }));
  assert.equal(a.length, 4);
  assert.ok(['grammar:g2', 'grammar:g3'].includes(a[1].key), 'B2 grammar for a B2 learner');
  assert.equal(a[2].key, 'reading:r2');
  assert.equal(a[3].key, 'reading:l1', 'B2 learner gets listening (nearest lower level B1)');
  assert.equal(dailyPlan({ date: '2026-10-28', level: null, grammar, texts })[3].key, 'verbs', 'beginners get the verbs test');
  const done = dailyPlan({ date: '2026-10-28', level: 'B2', grammar, texts, activity: [...Array(10).fill('vocab'), a[1].key] });
  assert.deepEqual(done.map((t) => t.done), [true, true, false, false]);
});

test('chart helpers: scaled polyline points and calendar days', () => {
  assert.equal(linePoints([], 100, 50, 0, 9), '');
  assert.equal(linePoints([0, 9], 100, 50, 0, 9, 0), '0,50 100,0');
  assert.equal(linePoints([4.5], 100, 50, 0, 9, 0), '50,25');
  assert.equal(linePoints([12], 100, 50, 0, 9, 0), '50,0', 'clamped to max');
  assert.deepEqual(lastDays('2026-03-02', 3), ['2026-02-28', '2026-03-01', '2026-03-02']);
});

test('search: normalises apostrophes/case, ranks title prefix first, searches body text', () => {
  assert.equal(norm("O‘qish va Tinglash!"), 'oqish va tinglash');
  const idx = buildSearchIndex([
    { type: 'a', title: 'The present perfect', text: 'have + V3' },
    { type: 'b', title: 'Present simple', text: 'habits' },
    { type: 'c', title: "O'qish: Navruz", text: 'spring holiday sumalak' },
  ]);
  assert.deepEqual(search(idx, 'present').map((e) => e.type), ['b', 'a'], 'prefix match before word match');
  assert.deepEqual(search(idx, 'o‘qish').map((e) => e.type), ['c'], 'curly apostrophe matches straight');
  assert.deepEqual(search(idx, 'sumalak').map((e) => e.type), ['c'], 'body text');
  assert.deepEqual(search(idx, 'habits present').map((e) => e.type), ['b'], 'all words must match');
  assert.deepEqual(search(idx, 'x'), [], 'too short');
});

test('wordOfDay: same word all day, changes across days, matches level band', () => {
  const words = ['A1', 'A2', 'B1', 'B2', 'C1'].flatMap((level) => Array.from({ length: 20 }, (_, i) => ({ word: `${level}-${i}`, level })));
  const a = wordOfDay('2026-10-30', words, 'B1');
  assert.equal(wordOfDay('2026-10-30', words, 'B1'), a);
  assert.ok(['A2', 'B1'].includes(a.level), 'level or one below');
  const week = new Set(Array.from({ length: 7 }, (_, i) => wordOfDay(`2026-11-0${i + 1}`, words, 'B1').word));
  assert.ok(week.size >= 5, 'varies day to day');
  assert.ok(['A1', 'A2'].includes(wordOfDay('2026-10-30', words, null).level), 'no level → A2 band');
});

test('placement: with rand, questions vary between runs but the result logic is unchanged', () => {
  const seq = (seed) => {
    let s = createPlacement(placementQuestions, { rand: mulberry32(seed) });
    for (let q = nextQuestion(s); q; q = nextQuestion(s)) s = answerPlacement(s, q, ['A1', 'A2', 'B1'].includes(q.level));
    return s;
  };
  const a = seq(1);
  const b = seq(2);
  assert.notDeepEqual(a.history.map((h) => h.id), b.history.map((h) => h.id));
  assert.equal(placementResult(a), 'B1');
  assert.equal(placementResult(b), 'B1');
  assert.equal(new Set(a.history.map((h) => h.id)).size, a.history.length);
});

test('goalStatus: today %, 7-day week, streak of met days', () => {
  const xp = { '2026-10-24': 60, '2026-10-25': 55, '2026-10-26': 10, '2026-10-27': 50, '2026-10-28': 70, '2026-10-29': 20 };
  const s = goalStatus(xp, 50, '2026-10-29');
  assert.deepEqual([s.today, s.pct, s.met], [20, 40, false]);
  assert.equal(s.week.length, 7);
  assert.deepEqual(s.week.map((d) => d.date), ['2026-10-23', '2026-10-24', '2026-10-25', '2026-10-26', '2026-10-27', '2026-10-28', '2026-10-29']);
  assert.deepEqual(s.week.map((d) => d.met), [false, true, true, false, true, true, false]);
  assert.equal(s.streak, 2, 'today not met yet → streak counts yesterday and before');
  assert.equal(goalStatus({ ...xp, '2026-10-29': 50 }, 50, '2026-10-29').streak, 3);
  assert.equal(goalStatus(xp, 100, '2026-10-29').streak, 0);
  assert.equal(goalStatus({ '2026-10-29': 500 }, 20, '2026-10-29').pct, 100);
});

test('first render loads no IELTS mocks/banks/guides and stays under 600 KB of JS', async () => {
  const { staticGraph } = await import('../scripts/initial-bytes.mjs');
  const g = staticGraph(new URL('../src/app.js', import.meta.url).pathname);
  const files = [...g.keys()].map((f) => f.replace(/.*\/src\//, ''));
  for (const lazy of ['ielts-mock', 'ielts-guides', 'ielts-bank-', 'definitions']) assert.ok(!files.some((f) => f.includes(lazy)), `${lazy} is on the first-render path`);
  const kb = [...g.values()].reduce((a, b) => a + b, 0) / 1024;
  assert.ok(kb < 600, `${kb.toFixed(0)} KB`);
});

test('niceMax and chartSvg: nice axis, one mark per value, legend, escaped labels', () => {
  assert.deepEqual([niceMax(42), niceMax(55), niceMax(9.8), niceMax(1400), niceMax(0)], [50, 60, 10, 1500, 1]);
  const bar = chartSvg({ type: 'bar', labels: ['2010', '2020'], series: [{ name: 'Men', values: [10, 20] }, { name: 'Women & girls', values: [15, 25] }], unit: '%' });
  assert.equal((bar.match(/<rect [^>]*><title>/g) ?? []).length, 4, "one bar per value (legend squares have no title)");
  assert.ok(bar.includes('Women &amp; girls') && !bar.includes('Women & girls'));
  assert.ok(bar.startsWith('<svg') && bar.includes('role="img"'));
  const line = chartSvg({ type: 'line', labels: ['A', 'B', 'C'], series: [{ name: 'X', values: [1, 2, 3] }] });
  assert.equal((line.match(/<polyline/g) ?? []).length, 1);
  assert.equal((line.match(/<circle/g) ?? []).length, 3);
});

test('reviewQueue: oldest mistakes first, stable order, at most n', () => {
  const m = (id, date) => [id, { q: { id }, date }];
  const book = Object.fromEntries([m('c', '2026-10-20'), m('a', '2026-10-25'), m('b', '2026-10-20'), m('d', '2026-10-29')]);
  assert.deepEqual(reviewQueue(book, 3).map((x) => x.q.id), ['b', 'c', 'a']);
  assert.equal(reviewQueue(book).length, 4);
  assert.deepEqual(reviewQueue({}), []);
});

test('csv export: RFC 4180 quoting and progress rows', async () => {
  const { toCsv, progressRows } = await import('../src/core/csv.js');
  assert.equal(toCsv([['a', 'b,c'], ['say "hi"', null], ['line\nbreak', 3]]), 'a,"b,c"\r\n"say ""hi""",\r\n"line\nbreak",3');
  const rows = progressRows({
    profile: { level: 'B1', xp: 120, days: ['2026-10-29', '2026-10-30'] },
    ieltsMockHistory: [{ key: 'reading-2', raw: 30, band: 7, date: '2026-10-30' }],
    readingDone: { chorsu: 80 }, grammarDone: { passive: 100 }, drillBest: 70,
    cards: { a: { interval: 30 }, b: { interval: 2 } },
    mistakes: { q1: { q: { id: 'q1', prompt: 'Pick one' }, source: 'Grammar', given: 'x', date: '2026-10-28' } },
  });
  assert.deepEqual(rows[0], ['section', 'item', 'value', 'date']);
  for (const r of [['profile', 'level', 'B1', ''], ['profile', 'active days', 2, ''], ['ielts mock', 'reading-2', '30/40 → band 7', '2026-10-30'], ['drill', 'articles', '70%', ''],
    ['vocabulary', 'cards mature (21+ days)', 1, ''], ['open mistake', 'Grammar: Pick one', 'x', '2026-10-28']]) assert.ok(rows.some((x) => JSON.stringify(x) === JSON.stringify(r)), JSON.stringify(r));
  assert.ok(rows.every((r) => r.length === 4));
  assert.equal(progressRows({}).length, 6);
});
