// Content integrity: every bundled exercise must be gradeable by the exam engine.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateExam } from '../src/core/exam.js';
import { LEVELS } from '../src/core/placement.js';
import { vocabulary, categories } from '../src/data/vocabulary.js';
import { grammar } from '../src/data/grammar.js';
import { placementQuestions } from '../src/data/placement.js';
import { scenarios } from '../src/data/dialogues.js';

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

test('scenarios: each has lines', () => {
  for (const s of scenarios) assert.ok(s.lines.length >= 2, s.id);
});
