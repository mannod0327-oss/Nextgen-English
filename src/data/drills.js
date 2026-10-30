// Drill centre (#/drill): every trainer is a list of single-choice gap sets sharing one engine.
// Set: { id, title, options?, rules?, items: [[id, prompt, answer, uzExplanation, options?], …] } —
// per-item options override the set's (e.g. spelling variants).
import { drillSets as articleSets } from './articles.js';
import { spellingSets } from './spelling.js';

export const trainers = [
  { id: 'articles', icon: '🅰️', title: 'Artikl va predloglar', desc: 'a / an / the va in / on / at',
    intro: "O'zbek tilida artikl yo'q, in/on/at esa bitta \"-da\" qo'shimchasiga to'g'ri keladi — shuning uchun bu eng ko'p uchraydigan xatolar.",
    sets: articleSets },
  { id: 'spelling', icon: '🔤', title: 'Imlo trenajyori', desc: "accommodation, necessary… to'g'ri yozilishi",
    intro: "IELTS Listening va Reading'da noto'g'ri yozilgan javob — noto'g'ri javob. Bu so'zlarni ko'pchilik xato yozadi.",
    sets: spellingSets },
];

export const drillSets = trainers.flatMap((t) => t.sets.map((s) => ({ ...s, trainer: t.id })));

// Gaps that start a sentence (answer written "The", "A"…) get capitalised options so the answer reads naturally.
export const drillItems = drillSets.flatMap((set) =>
  set.items.map(([id, prompt, answer, explanation, own]) => {
    const cap = answer !== answer.toLowerCase() && !own;
    const options = (own ?? set.options).map((o) => (cap && o !== '—' ? o[0].toUpperCase() + o.slice(1) : o));
    return { id, set: set.id, trainer: set.trainer, type: 'single', prompt, options, answer: options.indexOf(answer), explanation };
  }),
);
