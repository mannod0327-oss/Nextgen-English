import test from 'node:test';
import assert from 'node:assert/strict';
import { numberWords, ordinalWords, yearWords, phoneWords, priceWords, normAnswer, makeRound, ROUND_KINDS } from '../src/core/numbers.js';
import { mulberry32 } from '../src/core/exam.js';

test('numbers: British number words', () => {
  assert.equal(numberWords(0), 'zero');
  assert.equal(numberWords(15), 'fifteen');
  assert.equal(numberWords(50), 'fifty');
  assert.equal(numberWords(73), 'seventy-three');
  assert.equal(numberWords(105), 'one hundred and five');
  assert.equal(numberWords(1250), 'one thousand, two hundred and fifty');
  assert.equal(numberWords(2005), 'two thousand and five');
  assert.equal(numberWords(99999), 'ninety-nine thousand, nine hundred and ninety-nine');
});

test('numbers: ordinals, years, phones, prices', () => {
  assert.equal(ordinalWords(1), 'first');
  assert.equal(ordinalWords(12), 'twelfth');
  assert.equal(ordinalWords(20), 'twentieth');
  assert.equal(ordinalWords(21), 'twenty-first');
  assert.equal(ordinalWords(23), 'twenty-third');
  assert.equal(yearWords(1998), 'nineteen ninety-eight');
  assert.equal(yearWords(2005), 'two thousand and five');
  assert.equal(yearWords(2024), 'twenty twenty-four');
  assert.equal(yearWords(1905), 'nineteen oh five');
  assert.equal(yearWords(1900), 'nineteen hundred');
  assert.equal(phoneWords('07914465'), 'oh seven nine one, double four six five');
  assert.equal(priceWords(12, 50), 'twelve pounds fifty');
  assert.equal(priceWords(1), 'one pound');
  assert.equal(normAnswer(' £12.50 '), '12.50');
  assert.equal(normAnswer('21st March'), '21march');
});

test('numbers: every round kind produces a spoken prompt whose shown answer is accepted', () => {
  const r = mulberry32(42);
  for (let i = 0; i < 300; i++) {
    const kind = ROUND_KINDS[i % ROUND_KINDS.length];
    const round = makeRound(kind, r);
    assert.ok(round.say && round.hint && round.accept.length, kind);
    assert.ok(round.accept.includes(normAnswer(round.shown)), `${kind}: shown "${round.shown}" not accepted (${round.accept})`);
    assert.ok(!/\d/.test(round.say), `${kind}: TTS text must be words, not digits: ${round.say}`);
  }
});
