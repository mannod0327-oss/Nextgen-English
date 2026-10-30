// "Bugungi reja": four level-appropriate tasks per day, chosen deterministically from the date,
// and marked done from the day's activity log (strings like 'vocab', 'grammar:<id>', 'reading:<id>', 'verbs').
import { mulberry32 } from './exam.js';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

const seedOf = (date) => [...date].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 7);

// Items at the learner's level; if none, the nearest lower level, then anything.
function atLevel(items, level) {
  for (let j = LEVELS.indexOf(level); j >= 0; j--) {
    const hit = items.filter((x) => x.level === LEVELS[j]);
    if (hit.length) return hit;
  }
  return items;
}

const pick = (items, r) => items[Math.floor(r() * items.length)];

export function dailyPlan({ date, level, grammar, texts, activity = [] }) {
  const r = mulberry32(seedOf(date));
  const lvl = LEVELS.includes(level) ? level : 'A1';
  const topic = pick(atLevel(grammar, lvl), r);
  const reading = pick(atLevel(texts.filter((t) => !t.listening), lvl), r);
  const listening = pick(atLevel(texts.filter((t) => t.listening), lvl), r);
  const vocabCount = activity.filter((a) => a === 'vocab').length;
  return [
    { key: 'vocab', icon: '🖼️', title: `10 ta so'z kartasini takrorlang (${Math.min(vocabCount, 10)}/10)`, href: '#/vocab?cat=__all', done: vocabCount >= 10 },
    { key: `grammar:${topic.id}`, icon: '📐', title: `Grammatika: ${topic.title}`, href: `#/grammar?topic=${topic.id}`, done: activity.includes(`grammar:${topic.id}`) },
    { key: `reading:${reading.id}`, icon: '📰', title: `O'qish: ${reading.title}`, href: `#/reading?t=${reading.id}`, done: activity.includes(`reading:${reading.id}`) },
    LEVELS.indexOf(lvl) >= 2
      ? { key: `reading:${listening.id}`, icon: '🎧', title: `Tinglash: ${listening.title}`, href: `#/reading?t=${listening.id}`, done: activity.includes(`reading:${listening.id}`) }
      : { key: 'verbs', icon: '🔁', title: "Noto'g'ri fe'llar testi", href: '#/verbs?mode=test', done: activity.includes('verbs') },
  ];
}

/** "Kun so'zi": one word per date, the same for everyone that day, from the learner's level (or below). */
export function wordOfDay(date, words, level) {
  const r = mulberry32(seedOf(`word:${date}`));
  const lvl = LEVELS.includes(level) ? level : 'A2';
  const pool = words.filter((w) => LEVELS.indexOf(w.level) <= LEVELS.indexOf(lvl) && LEVELS.indexOf(w.level) >= LEVELS.indexOf(lvl) - 1);
  return pick(pool.length ? pool : words, r);
}
