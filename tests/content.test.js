// Content integrity: every bundled exercise must be gradeable by the exam engine.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateExam } from '../src/core/exam.js';
import { LEVELS } from '../src/core/placement.js';
import { vocabulary, categories } from '../src/data/vocabulary.js';
import { grammar } from '../src/data/grammar.js';
import { placementQuestions } from '../src/data/placement.js';
import { scenarios } from '../src/data/dialogues.js';
import { guideSections, guideUnits } from '../src/data/grammar-guide.js';
import { definitions } from '../src/data/definitions.js';
import { writing, speaking, toBand } from '../src/data/ielts.js';
import { mockTests } from '../src/data/ielts-mock.js';
import { speakingBank } from '../src/data/ielts-bank-speaking.js';
import { writingBank } from '../src/data/ielts-bank-writing.js';
import { readingBank } from '../src/data/ielts-bank-reading.js';
import { listeningBank } from '../src/data/ielts-bank-listening.js';
import { irregularVerbs } from '../src/data/irregular-verbs.js';
import { minimalPairs } from '../src/data/minimal-pairs.js';
import { collocations } from '../src/data/collocations.js';
import { existsSync } from 'node:fs';
import { exams } from '../src/data/exams.js';
import { readings } from '../src/data/readings.js';

const asExam = (title, questions) => ({ format: 'nge-exam', title, questions });

test('vocabulary: unique ids, complete fields, valid CEFR levels', () => {
  assert.equal(new Set(vocabulary.map((v) => v.id)).size, vocabulary.length);
  for (const v of vocabulary) {
    for (const f of ['word', 'ipa', 'uz', 'pos', 'level', 'emoji', 'example', 'category']) assert.ok(v[f], `${v.id}.${f}`);
    assert.ok(LEVELS.includes(v.level), `${v.id} level ${v.level}`);
    assert.ok(categories.includes(v.category));
  }
  assert.ok(vocabulary.length >= 40);
});

test('grammar: every topic exercise set is a valid exam with unique ids', () => {
  const allIds = grammar.flatMap((t) => t.exercises.map((e) => e.id));
  assert.equal(new Set(allIds).size, allIds.length);
  for (const t of grammar) {
    assert.deepEqual(validateExam(asExam(t.title, t.exercises)), [], t.id);
    assert.ok(LEVELS.includes(t.level));
    assert.ok(t.rule && t.examples.length);
  }
});

test('placement: valid questions with coverage at every level', () => {
  assert.deepEqual(validateExam(asExam('placement', placementQuestions)), []);
  for (const lvl of LEVELS) assert.ok(placementQuestions.filter((q) => q.level === lvl).length >= 3, lvl);
});

test('grammar guide: sections cover units 1..N without gaps and every unit page exists', () => {
  const nums = guideUnits.map((u) => u.n);
  assert.deepEqual(nums, nums.map((_, i) => i + 1));
  let next = 1;
  for (const s of guideSections) {
    assert.equal(s.from, next, `section ${s.en} starts at ${s.from}`);
    assert.ok(s.to >= s.from);
    next = s.to + 1;
  }
  assert.equal(next - 1, guideUnits.length);
  for (const n of nums) {
    const file = new URL(`../grammar-guide/units/unit-${String(n).padStart(3, '0')}.html`, import.meta.url);
    assert.ok(existsSync(file), `missing ${file.pathname}`);
  }
  assert.ok(existsSync(new URL('../grammar-guide/index.html', import.meta.url)));
});

test('exams: every ready-made test is valid, has a level and a unique title', () => {
  assert.ok(exams.length >= 4);
  assert.equal(new Set(exams.map((e) => e.title)).size, exams.length);
  for (const e of exams) assert.deepEqual(validateExam(e), [], e.title);
});

test('readings: valid questions, unique ids, every CEFR band A1–C1 covered, listening tasks present', () => {
  assert.equal(new Set(readings.map((r) => r.id)).size, readings.length);
  const qids = readings.flatMap((r) => r.questions.map((q) => q.id));
  assert.equal(new Set(qids).size, qids.length, 'question ids must be unique');
  for (const r of readings) {
    assert.ok(r.text.split(/\s+/).length >= 60, `${r.id} text too short`);
    assert.deepEqual(validateExam(asExam(r.title, r.questions)), [], r.id);
  }
  for (const lvl of ['A1', 'A2', 'B1', 'B2', 'C1']) assert.ok(readings.some((r) => r.level === lvl), lvl);
  assert.ok(readings.filter((r) => r.listening).length >= 4);
});

test('scenarios: each has lines', () => {
  for (const s of scenarios) assert.ok(s.lines.length >= 2, s.id);
});

test('definitions are well-formed and cover the vocabulary', () => {
  for (const [word, senses] of Object.entries(definitions)) {
    assert.ok(senses.length >= 1 && senses.length <= 2, word);
    for (const [pos, def] of senses) assert.ok(pos && def, word);
  }
  const missing = vocabulary.filter((v) => !definitions[v.word.toLowerCase()]);
  assert.ok(missing.length <= vocabulary.length * 0.05, `no definition: ${missing.map((v) => v.word)}`);
});

test('ielts: model answers meet word limits, speaking sets complete, band table sane', () => {
  for (const w of writing) assert.ok(w.model.split(/\s+/).length >= w.minWords, `${w.id} model too short`);
  for (const sp of speaking) assert.ok(sp.part1.length >= 4 && sp.part2.points.length === 4 && sp.part3.length >= 3, sp.id);
  assert.equal(toBand('listening', 40), 9);
  assert.equal(toBand('listening', 30), 7);
  assert.equal(toBand('reading', 0), 0);
  for (let raw = 1; raw <= 40; raw++) assert.ok(toBand('reading', raw) >= toBand('reading', raw - 1));
});

test('ielts mock tests: 40 single-answer questions each, answers findable in the source text', () => {
  for (const [kind, mock] of Object.entries(mockTests)) {
    const qs = mock.sections.flatMap((sec) => sec.questions);
    assert.equal(qs.length, 40, kind);
    assert.equal(new Set(qs.map((q) => q.id)).size, 40, `${kind} ids`);
    assert.deepEqual(validateExam(asExam(mock.title, qs)), [], kind);
    for (const sec of mock.sections) {
      const src = (sec.script ?? sec.text).toLowerCase();
      for (const q of sec.questions) {
        assert.ok(['single', 'fill'].includes(q.type), `${q.id}: only single-answer types keep raw score 0–40`);
        if (q.type === 'fill' && q.id !== 'ml10') {
          assert.ok([].concat(q.answer).some((a) => src.includes(String(a).toLowerCase())), `${q.id}: answer not in text`);
        }
      }
    }
  }
});

test('question ids are unique across grammar, readings and mocks (mistakes notebook keys)', () => {
  const ids = [
    ...grammar.flatMap((t) => t.exercises.map((e) => e.id)),
    ...[...readings, ...readingBank, ...listeningBank].flatMap((r) => r.questions.map((q) => q.id)),
    ...Object.values(mockTests).flatMap((m) => m.sections.flatMap((sec) => sec.questions.map((q) => q.id))),
  ];
  assert.equal(new Set(ids).size, ids.length);
});

test('ielts bank: 200+ original tasks, every question valid and every gap-fill answer in its text', () => {
  assert.ok(speakingBank.length >= 60 && writingBank.length >= 60 && readingBank.length >= 40 && listeningBank.length >= 40);
  assert.ok(speakingBank.length + writingBank.length + readingBank.length + listeningBank.length >= 200);
  const textIds = [...readings, ...readingBank, ...listeningBank].map((r) => r.id);
  assert.equal(new Set(textIds).size, textIds.length, 'text ids');
  for (const r of [...readingBank, ...listeningBank]) {
    assert.equal(r.questions.length, 5, r.id);
    assert.deepEqual(validateExam(asExam(r.title, r.questions)), [], r.id);
    const src = r.text.toLowerCase();
    for (const q of r.questions.filter((x) => x.type === 'fill')) {
      assert.ok([].concat(q.answer).some((a) => src.includes(String(a).toLowerCase())), `${q.id}: answer not in text`);
    }
  }
  for (const sp of speakingBank) assert.ok(sp.part1.length >= 4 && sp.part2.points.length === 4 && sp.part3.length >= 3, sp.id);
  const ids = [...writing, ...writingBank, ...speaking, ...speakingBank].map((x) => x.id);
  assert.equal(new Set(ids).size, ids.length, 'writing/speaking ids');
  for (const w of writingBank) {
    assert.ok(w.prompt && w.plan.length >= 2, w.id);
    if (w.table) assert.ok(w.table.every((row) => row.length === w.table[0].length), `${w.id}: ragged table`);
  }
});

test('irregular verbs: 100+, unique base forms, complete rows, valid levels, genuinely irregular', () => {
  assert.ok(irregularVerbs.length >= 100);
  const bases = irregularVerbs.map((v) => v[0]);
  assert.equal(new Set(bases).size, bases.length, 'duplicate verb');
  for (const [v1, v2, v3, uz, lvl] of irregularVerbs) {
    assert.ok(v1 && v2 && v3 && uz, v1);
    assert.ok(LEVELS.includes(lvl), `${v1}: ${lvl}`);
    const regular = `${v1.replace(/e$/, '')}ed`;
    assert.ok(!(v2 === regular && v3 === regular), `${v1} is regular`);
  }
});

test('minimal pairs: 8+ sound contrasts, 6 distinct pairs each, unique ids', () => {
  assert.ok(minimalPairs.length >= 8);
  assert.equal(new Set(minimalPairs.map((x) => x.id)).size, minimalPairs.length);
  for (const set of minimalPairs) {
    assert.equal(set.pairs.length, 6, set.id);
    assert.ok(set.tip && set.sounds, set.id);
    for (const [a, b] of set.pairs) assert.ok(a && b && a.toLowerCase() !== b.toLowerCase(), `${set.id}: ${a}/${b}`);
    assert.equal(new Set(set.pairs.flat()).size, 12, `${set.id}: repeated word`);
  }
});

test('pwa: service worker shell, manifest icons and Pages deploy list stay in sync', async () => {
  const { readFileSync } = await import('node:fs');
  const root = new URL('../', import.meta.url);
  const sw = readFileSync(new URL('sw.js', root), 'utf8');
  const shell = JSON.parse(sw.match(/const SHELL = (\[[^\]]*\])/)[1].replace(/'/g, '"'));
  for (const f of shell.filter((x) => x !== './')) assert.ok(existsSync(new URL(f, root)), `sw shell: ${f}`);
  const manifest = JSON.parse(readFileSync(new URL('manifest.webmanifest', root), 'utf8'));
  for (const icon of manifest.icons) assert.ok(existsSync(new URL(icon.src, root)), icon.src);
  const deploy = readFileSync(new URL('.github/workflows/pages.yml', root), 'utf8');
  for (const f of ['sw.js', 'manifest.webmanifest', ...manifest.icons.map((i) => i.src)]) assert.ok(deploy.includes(f), `pages.yml must copy ${f}`);
});

test('collocations: 60+, verb phrases start with their verb, examples use the phrase, quiz ids unique', () => {
  const items = collocations.flatMap((g) => g.items.map((it) => [g, ...it]));
  assert.ok(items.length >= 60);
  const slugs = items.map(([, p]) => p.toLowerCase().replace(/[^a-z]+/g, '-'));
  assert.equal(new Set(slugs).size, slugs.length, 'duplicate phrase');
  for (const [g, phrase, uz, ex] of items) {
    assert.ok(uz && ex, phrase);
    if (g.kind === 'verb') assert.ok(phrase.startsWith(`${g.title} `), `${phrase} must start with ${g.title}`);
    if (g.kind === 'adj') assert.equal(phrase.split(' ').length, 2, phrase);
  }
  assert.ok(collocations.filter((g) => g.kind === 'verb').length >= 4, 'verb quiz needs 4 options');
});
