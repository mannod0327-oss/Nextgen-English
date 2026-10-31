import test from 'node:test';
import assert from 'node:assert/strict';
import { checkWriting, readingSpeed, lexicalProfile, makeCloze } from '../src/core/writing-check.js';
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
  assert.ok(models.length >= 20);
  for (const s of models) {
    const r = checkWriting(s.part2.model, { minWords: 200 });
    assert.ok(r.enough, `${s.id}: ${r.words} words`);
    assert.deepEqual(r.mistakes, [], s.id);
  }
});

test('speaking Part 3 sample answers: ≥10 sets, each answer ≥60 words, matches a question, no typical mistakes', () => {
  const sets = speakingBank.filter((s) => s.part3Models);
  assert.ok(sets.length >= 10);
  for (const s of sets) {
    assert.ok(s.part3Models.length <= s.part3.length, s.id);
    for (const a of s.part3Models) {
      const r = checkWriting(a, { minWords: 60 });
      assert.ok(r.enough, `${s.id}: ${r.words} words`);
      assert.deepEqual(r.mistakes, [], s.id);
    }
  }
});

test('readingSpeed: words per minute and level', () => {
  const text = Array.from({ length: 300 }, (_, i) => `word${i}`).join(' ');
  assert.deepEqual(readingSpeed(text, 60000), { words: 300, wpm: 300, level: 'juda tez — tushunishni tekshiring' });
  assert.equal(readingSpeed(text, 120000).wpm, 150);
  assert.equal(readingSpeed(text, 120000).level, "o'rtacha");
  assert.equal(readingSpeed(text, 0).wpm, 0);
  assert.equal(readingSpeed('The 2,700-word test.', 60000).words, 3);
});

test('lexicalProfile: type–token ratio over content words, academic words found as whole words', () => {
  const p = lexicalProfile('Good good good food is food, really good. It is crucial.', new Set(['crucial', 'demonstrate', 'is crucial']));
  assert.deepEqual([p.content, p.unique, p.ttr], [8, 4, 0.5]);
  assert.deepEqual(p.academic, ['crucial', 'is crucial']);
  assert.deepEqual(lexicalProfile('').academic, []);
  assert.equal(lexicalProfile('').ttr, 0);
  for (const w of writingBank.filter((x) => x.model)) assert.ok(lexicalProfile(w.model).ttr >= 0.45, `${w.id}: model below the TTR warning line`);
  assert.ok(checkWriting('Crucial data.', { academic: new Set(['crucial']) }).lexical.academic.includes('crucial'));
});

test('makeCloze: n gaps of content words, spread through the text, text preserved', () => {
  const text = 'Welcome to the museum. Tickets cost twenty dollars, and children under twelve travel free. Please collect your headphones at reception before the guided tour begins.';
  const segs = makeCloze(text, 4, () => 0.5);
  const gaps = segs.filter((s) => s.gap !== undefined);
  assert.equal(gaps.length, 4);
  assert.deepEqual(gaps.map((s) => s.gap), [0, 1, 2, 3]);
  assert.ok(gaps.every((s) => s.answer.length >= 5 && /^[A-Za-z]+$/.test(s.answer)));
  assert.equal(segs.map((s) => s.text ?? s.answer).join(''), text, 'joining gives back the script');
  const pos = gaps.map((g) => segs.indexOf(g));
  assert.ok(pos[3] - pos[0] > segs.length / 3, 'gaps spread out');
  assert.equal(makeCloze('a b c', 5).filter((s) => s.gap !== undefined).length, 0);
});

test('speaking Part 1 sample answers: ≥10 sets, one per question, 2–3 sentences (15–45 words), no typical mistakes', () => {
  const sets = speakingBank.filter((s) => s.part1Models);
  assert.ok(sets.length >= 10);
  for (const s of sets) {
    assert.equal(s.part1Models.length, s.part1.length, s.id);
    for (const a of s.part1Models) {
      const r = checkWriting(a);
      assert.ok(r.words >= 15 && r.words <= 45 && r.sentences >= 2 && r.sentences <= 3, `${s.id}: ${r.words} words / ${r.sentences} sentences — ${a}`);
      assert.deepEqual(r.mistakes, [], s.id);
    }
  }
});
