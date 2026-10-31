// "Bugungi reja": four level-appropriate tasks per day, chosen deterministically from the date,
// and marked done from the day's activity log (strings like 'vocab', 'grammar:<id>', 'reading:<id>', 'verbs').
import { mulberry32 } from './exam.js';
import { lastDays } from './chart.js';

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

export const XP_GOALS = [20, 50, 100];

/**
 * Daily XP goal. xpDays = { 'YYYY-MM-DD': xp }. Returns today's progress, the last 7 days (oldest first)
 * and the streak of consecutive days the goal was met (today counts only once it is met).
 */
export function goalStatus(xpDays, goal, date) {
  const week = lastDays(date, 7).map((d) => ({ date: d, xp: xpDays[d] ?? 0, met: (xpDays[d] ?? 0) >= goal }));
  const todayXp = xpDays[date] ?? 0;
  let streak = 0;
  const back = lastDays(date, 61).reverse();
  for (const [i, d] of back.entries()) {
    if ((xpDays[d] ?? 0) >= goal) streak++;
    else if (i > 0) break;
  }
  return { today: todayXp, pct: Math.min(100, Math.round((todayXp / goal) * 100)), met: todayXp >= goal, week, streak };
}


/**
 * Daily mistakes review: the n oldest open mistakes first (a mistake answered wrongly again gets today's
 * date and moves to the back; a correct answer removes it), ties broken by id so the order is stable.
 */
export function reviewQueue(mistakes, n = 10) {
  return Object.values(mistakes)
    .sort((a, b) => (a.date === b.date ? (a.q.id < b.q.id ? -1 : 1) : a.date < b.date ? -1 : 1))
    .slice(0, n);
}

export const MY_WORDS = "Mening so'zlarim";

/** Saved words ({ word: { uz, def, ex, added } }) → flashcard items shaped like vocabulary entries, oldest first. */
export function personalCards(myWords) {
  return Object.entries(myWords)
    .sort((a, b) => (a[1].added < b[1].added ? -1 : a[1].added > b[1].added ? 1 : a[0] < b[0] ? -1 : 1))
    .map(([word, x]) => ({ id: `my:${word}`, word, ipa: '', pos: '', level: '', emoji: '⭐', uz: x.uz || x.def || '', example: x.ex || '', category: MY_WORDS }));
}

/**
 * Countdown plan to an IELTS date (both 'YYYY-MM-DD'). Phases: foundation (> 8 weeks), practice (3–8 weeks),
 * final (≤ 2 weeks), done (date passed). `week` lists this week's targets with links.
 */
export function examPlan(examDate, date) {
  const days = Math.round((Date.parse(`${examDate}T00:00:00Z`) - Date.parse(`${date}T00:00:00Z`)) / 86400000);
  if (!(days >= 0)) return { days, phase: 'done', title: 'Imtihon sanasi o‘tgan', week: [] };
  const phase = days > 56 ? 'foundation' : days > 14 ? 'practice' : 'final';
  const week = {
    foundation: [['📐', "Grammatika: 3 ta mavzu", '#/grammar'], ['🖼️', "Lug'at: har kuni 10 karta", '#/vocab?cat=__all'], ['📰', "O'qish: 3 ta matn (tezlikni o'lchang)", '#/reading'], ['📝', '1 ta sinov testi (har 2 haftada)', '#/ielts']],
    practice: [['📝', '2 ta to‘liq sinov testi (Listening + Reading)', '#/ielts'], ['✍️', 'Writing: 1 ta Task 1 + 1 ta Task 2', '#/ielts?bank=writing'], ['🗣', 'Speaking: 3 ta to‘plam, o‘zingizni yozib oling', '#/ielts?bank=speaking'], ['🔁', 'Xatolarni takrorlash', '#/mistakes?mode=review']],
    final: [['⏱', 'Har kuni 1 ta sinov testi — vaqt bilan', '#/ielts'], ['🔁', 'Barcha xatolarni qayta ishlash', '#/mistakes?mode=review'], ['🧭', 'Savol turlari strategiyasini takrorlang', '#/ielts?guide=tfng'], ['😴', 'Imtihon oldidan yaxshi uxlang — yangi narsa o‘rganmang', '#/']],
  }[phase].map(([icon, title, href]) => ({ icon, title, href }));
  const title = { foundation: 'Asos qurish bosqichi', practice: 'Amaliyot bosqichi', final: 'Yakuniy tayyorgarlik' }[phase];
  return { days, weeks: Math.ceil(days / 7), phase, title, week };
}
