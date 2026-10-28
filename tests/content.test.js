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

test('readings: valid questions, unique ids, every CEFR band A1–B2 covered', () => {
  assert.equal(new Set(readings.map((r) => r.id)).size, readings.length);
  for (const r of readings) {
    assert.ok(r.text.split(/\s+/).length >= 60, `${r.id} text too short`);
    assert.deepEqual(validateExam(asExam(r.title, r.questions)), [], r.id);
  }
  for (const lvl of ['A1', 'A2', 'B1', 'B2']) assert.ok(readings.some((r) => r.level === lvl), lvl);
});

test('scenarios: each has lines', () => {
  for (const s of scenarios) assert.ok(s.lines.length >= 2, s.id);
});
