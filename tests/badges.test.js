import test from 'node:test';
import assert from 'node:assert/strict';
import { badges, BADGES } from '../src/core/badges.js';

const empty = { xp: 0, streak: 0, level: null, cards: 0, mature: 0, grammar: {}, reading: {}, bands: [], verbsBest: null, drillBest: null };

test('badges: ≥12 unique badges, nothing earned on a fresh profile', () => {
  assert.ok(BADGES.length >= 12);
  assert.equal(new Set(BADGES.map((b) => b.id)).size, BADGES.length);
  const list = badges(empty);
  assert.equal(list.filter((b) => b.earned).length, 0);
  assert.ok(list.every((b) => b.value === 0 && b.goal > 0 && b.icon && b.title && b.desc));
});

test('badges: thresholds, capped progress, best band and 100% grammar', () => {
  const s = { ...empty, xp: 1500, streak: 5, level: 'B1', cards: 60, mature: 10, grammar: { a: 100, b: 80 }, reading: {}, bands: [5.5, 6.5], verbsBest: 100, drillBest: 90 };
  const byId = Object.fromEntries(badges(s).map((b) => [b.id, b]));
  for (const id of ['first-step', 'placed', 'streak-3', 'words-50', 'first-mock', 'band-6', 'verbs-100', 'xp-1000']) assert.ok(byId[id].earned, id);
  for (const id of ['streak-7', 'words-100', 'memory-25', 'grammar-ace', 'band-7', 'drill-100']) assert.ok(!byId[id].earned, id);
  assert.equal(byId['streak-7'].value, 5);
  assert.equal(byId['xp-1000'].value, 1000, 'value is capped at the goal');
  assert.equal(byId['grammar-ace'].value, 1);
  assert.equal(byId['band-7'].value, 6.5);
});
