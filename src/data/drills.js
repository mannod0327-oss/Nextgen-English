// Drill centre (#/drill): every trainer is a list of single-choice gap sets sharing one engine.
// Set: { id, title, options?, rules?, items: [[id, prompt, answer, uzExplanation, options?], …] } —
// per-item options override the set's (e.g. spelling variants). Set flags: keepOrder (don't rotate
// per-item options, e.g. syllables), speak (item gets `say` = the joined options, for a 🔊 button).
import { drillSets as articleSets } from './articles.js';
import { spellingSets } from './spelling.js';
import { linkerSets } from './linkers.js';
import { stressSets } from './stress.js';
import { task1Sets } from './task1.js';
import { synonymSets } from './synonyms.js';
import { formSets } from './forms.js';
import { depSets } from './deps.js';

export const trainers = [
  { id: 'articles', icon: '🅰️', title: 'Artikl va predloglar', desc: 'a / an / the va in / on / at',
    intro: "O'zbek tilida artikl yo'q, in/on/at esa bitta \"-da\" qo'shimchasiga to'g'ri keladi — shuning uchun bu eng ko'p uchraydigan xatolar.",
    sets: articleSets },
  { id: 'spelling', icon: '🔤', title: 'Imlo trenajyori', desc: "accommodation, necessary… to'g'ri yozilishi",
    intro: "IELTS Listening va Reading'da noto'g'ri yozilgan javob — noto'g'ri javob. Bu so'zlarni ko'pchilik xato yozadi.",
    sets: spellingSets },
  { id: 'linkers', icon: '🔗', title: "Bog'lovchi so'zlar", desc: 'however / although / despite / because of…',
    intro: "IELTS Writing'da \"Coherence and cohesion\" bali: bog'lovchidan keyin gap keladimi yoki otmi — shunga qarab tanlanadi.",
    sets: linkerSets },
  { id: 'stress', icon: '🗣️', title: "So'z urg'usi", desc: 'PHOtograph / phoTOgraphy / photoGRAPHic',
    intro: "O'zbek tilida urg'u ko'pincha oxirgi bo'g'inda — inglizchada esa qo'shimchaga qarab o'zgaradi. 🔊 tinglang va urg'uli bo'g'inni tanlang.",
    sets: stressSets },
  { id: 'task1', icon: '📊', title: 'IELTS Task 1 tili', desc: 'rise by / to, peak, slightly, twice as many…',
    intro: "Grafik, jadval va jarayonni tasvirlash uchun eng kerakli so'zlar va predloglar: by (farq) va to (yangi qiymat) — eng ko'p xato.",
    sets: task1Sets },
  { id: 'synonyms', icon: '🔁', title: 'Sinonim va parafraz', desc: 'important → crucial, buy → purchase…',
    intro: "IELTS Reading savollari matnni boshqa so'zlar bilan aytadi, Writing esa so'z boyligini baholaydi — har kundalik so'zning akademik juftini biling.",
    sets: synonymSets },
  { id: 'forms', icon: '🧬', title: "So'z yasalishi", desc: 'economy → economic / economical / economically',
    intro: "Bo'sh joyga qaysi so'z turkumi kerakligini gapdan aniqlang: artikldan keyin ot, fe'ldan keyin ravish, be/become dan keyin sifat. IELTS gap-fill va Writing'da muhim.",
    sets: formSets },
  { id: 'deps', icon: '🧷', title: "Predlogli fe'l va sifatlar", desc: 'depend on, interested in, good at, lead to…',
    intro: "O'zbek tilida -ga, -dan, -da qo'shimchalari bor; inglizchada esa har fe'l/sifatning o'z predlogi bor va uni birga yodlash kerak: depend ON, interested IN.",
    sets: depSets },
];

export const drillSets = trainers.flatMap((t) => t.sets.map((s) => ({ ...s, trainer: t.id })));

// Gaps that start a sentence (answer written "The", "A"…) get capitalised options so the answer reads naturally.
export const drillItems = drillSets.flatMap((set) =>
  set.items.map(([id, prompt, answer, explanation, own]) => {
    const cap = answer !== answer.toLowerCase() && !own;
    let options = (own ?? set.options).map((o) => (cap && o !== '—' ? o[0].toUpperCase() + o.slice(1) : o));
    // Per-item options are usually written answer-first: rotate them by a hash of the id so the
    // correct position varies but stays stable (mistakes notebook stores the answer index).
    if (own && !set.keepOrder) { const k = [...id].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7) % options.length; options = [...options.slice(k), ...options.slice(0, k)]; }
    return { id, set: set.id, trainer: set.trainer, type: 'single', prompt, options, answer: options.indexOf(answer), explanation, ...(set.speak ? { say: options.join('') } : {}) };
  }),
);
