import test from 'node:test';
import assert from 'node:assert/strict';
import { checkWriting } from '../src/core/writing-check.js';
import { writing } from '../src/data/ielts.js';
import { writingBank } from '../src/data/ielts-bank-writing.js';
import { speakingBank } from '../src/data/ielts-bank-speaking.js';

test('writing check: counts, linkers, repetition, long sentences, contractions', () => {
  const r = checkWriting('Technology is useful. However, technology can be harmful. Technology changes fast, and technology is everywhere. We don\'t know.', { minWords: 10 });
  assert.equal(r.words, 18);
  assert.equal(r.sentences, 4);
  assert.ok(r.enough);
  assert.deepEqual(r.linkers, ['however']);
  assert.deepEqual(r.repeated, [['technology', 4]]);
  assert.deepEqual(r.contractions, ["don't"]);
  const long = checkWriting(`${'word '.repeat(40)}end.`);
  assert.equal(long.longSentences.length, 1);
  assert.equal(checkWriting('').words, 0);
});

test('writing check: flags typical Uzbek-speaker mistakes with a fix', () => {
  const text = 'i am agree that many peoples need more informations. We discuss about it every days. He said me to make homework. In the other hand, it depends of money.';
  const found = checkWriting(text).mistakes.map((m) => m.match.toLowerCase());
  for (const m of ['i am agree', 'peoples', 'informations', 'discuss about', 'every days', 'said me', 'make homework', 'in the other hand', 'depends of', 'i'])
    assert.ok(found.includes(m), `missing: ${m}`);
  assert.ok(checkWriting(text).mistakes.every((m) => m.fix && m.uz));
});

test('writing check: no false alarms on the Band 7–8 model answers', () => {
  for (const w of [...writing, ...writingBank].filter((x) => x.model)) {
    const r = checkWriting(w.model, { minWords: w.minWords });
    assert.deepEqual(r.mistakes, [], w.id);
    assert.ok(r.enough && r.linkers.length >= 1, `${w.id}: ${r.words} words, linkers ${r.linkers}`);
  }
});

test('speaking Part 2 sample answers: ≥10, about two minutes long, no typical mistakes', () => {
  const models = speakingBank.filter((s) => s.part2.model);
  assert.ok(models.length >= 10);
  for (const s of models) {
    const r = checkWriting(s.part2.model, { minWords: 200 });
    assert.ok(r.enough, `${s.id}: ${r.words} words`);
    assert.deepEqual(r.mistakes, [], s.id);
  }
});
