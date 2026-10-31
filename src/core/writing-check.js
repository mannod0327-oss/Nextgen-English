// Instant feedback on a written answer (IELTS Writing): length, repeated words, linking words,
// typical Uzbek-speaker mistakes, over-long sentences and informal contractions.
// ponytail: regex heuristics, not a parser; add rules to MISTAKES as new error patterns show up.

const STOP = new Set(('the a an and or but of to in on at for with by from as is are was were be been being it its this that these those ' +
  'there their they them he she his her we our you your i my me not no do does did have has had will would can could should may might ' +
  'more most than so such very also which who what when where how why if then because about into over after before while all some many much one two').split(' '));

export const LINKERS = ['however', 'moreover', 'furthermore', 'in addition', 'therefore', 'as a result', 'consequently', 'on the other hand',
  'although', 'whereas', 'nevertheless', 'for example', 'for instance', 'in conclusion', 'firstly', 'secondly', 'finally', 'overall',
  'in contrast', 'similarly', 'meanwhile', 'in my opinion', 'to sum up', 'despite', 'because of', 'such as', 'in other words', 'thus'];

// [pattern, suggestion, Uzbek explanation]
export const MISTAKES = [
  [/\b(i|you|we|they|he|she|people) (am|is|are) agree\b/gi, 'I agree / they agree', "agree — fe'l, oldiga am/is/are qo'yilmaydi."],
  [/\b(informations|advices|knowledges|equipments|furnitures|homeworks|luggages|evidences)\b/gi, 'information, advice…', "Sanalmaydigan ot — ko'plik -s olmaydi."],
  [/\bdiscuss about\b/gi, 'discuss (something)', 'discuss dan keyin about kerak emas.'],
  [/\bexplain (me|him|her|us|them)\b/gi, 'explain to me', 'explain + to + kishi.'],
  [/\bsaid (me|him|her|us|them)\b/gi, 'told me / said to me', "say kishini to'g'ridan-to'g'ri olmaydi: tell me."],
  [/\bpeoples\b/gi, 'people', "people allaqachon ko'plik (peoples — faqat \"xalqlar\" ma'nosida)."],
  [/\bmore (better|worse|bigger|smaller|easier|cheaper)\b/gi, 'better / worse…', "Qiyosiy daraja ikki marta qo'yilmaydi."],
  [/\bdepends? of\b/gi, 'depend on', 'depend on — of emas.'],
  [/\bmarried with\b/gi, 'married to', 'be married to someone.'],
  [/\bin the other hand\b/gi, 'on the other hand', 'Barqaror ibora: ON the other hand.'],
  [/\b(i|he|she) (have|has) \d+ years\b/gi, 'I am 20 (years old)', 'Yosh be bilan aytiladi, have bilan emas.'],
  [/\bmake (homework|sport|sports|exercise)\b/gi, 'do homework / do sport', 'do homework, do sport, do exercise.'],
  [/\bevery days\b/gi, 'every day', 'every + birlik ot.'],
  [/(?<![\w'])i(?![\w'])/g, 'I', 'I (men) har doim bosh harf bilan.'],
  [/\b(the )?most of people\b/gi, 'most people', 'most people (umumiy) — most of the people faqat aniq guruh uchun.'],
  [/\bin nowadays\b/gi, 'nowadays', "nowadays oldidan in qo'yilmaydi."],
];

const CONTRACTION = /\b\w+n't\b|\b(i|you|we|they|it|he|she|that|there)'(m|re|s|ll|ve|d)\b/gi;

// Numbers count as words, as in IELTS ("850,000", "1.9").
export const words = (text) => text.toLowerCase().match(/[a-z0-9]+(?:['’.,-][a-z0-9]+)*/g) ?? [];

// Lexical resource: type–token ratio over content words (length > 3, not stop words, no digits) and the
// academic words used. `academic` is a Set of lower-case words/phrases supplied by the caller (vocabulary data).
export function lexicalProfile(text, academic = new Set()) {
  const content = words(text).filter((x) => x.length > 3 && !STOP.has(x) && !/\d/.test(x));
  const unique = new Set(content).size;
  const lower = ` ${words(text).join(' ')} `;
  return {
    content: content.length,
    unique,
    ttr: content.length ? Math.round((unique / content.length) * 100) / 100 : 0,
    academic: [...academic].filter((a) => lower.includes(` ${a} `)).sort(),
  };
}

export function checkWriting(text, { minWords = 0, longSentence = 35, academic } = {}) {
  const w = words(text);
  const sentences = text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => words(s).length);
  const counts = {};
  for (const x of w) if (x.length > 3 && !STOP.has(x) && !/\d/.test(x)) counts[x] = (counts[x] ?? 0) + 1;
  const repeatLimit = Math.max(3, Math.round(w.length / 60));
  const lower = text.toLowerCase();
  return {
    words: w.length,
    enough: w.length >= minWords,
    sentences: sentences.length,
    avgSentence: sentences.length ? Math.round(w.length / sentences.length) : 0,
    longSentences: sentences.filter((s) => words(s).length > longSentence),
    repeated: Object.entries(counts).filter(([, n]) => n > repeatLimit).sort((a, b) => b[1] - a[1]),
    linkers: LINKERS.filter((l) => new RegExp(`\\b${l}\\b`).test(lower)),
    mistakes: MISTAKES.flatMap(([re, fix, uz]) => [...text.matchAll(re)].map((m) => ({ match: m[0], fix, uz }))),
    contractions: [...new Set((text.match(CONTRACTION) ?? []).map((c) => c.toLowerCase()))],
    lexical: lexicalProfile(text, academic),
  };
}

/** Reading speed for one timed read: words per minute and an Uzbek label. IELTS Academic Reading ≈ 2,700 words in 60 minutes with questions, so ~200+ wpm is the target. */
export function readingSpeed(text, ms) {
  const n = words(text).length;
  const wpm = ms > 0 ? Math.round(n / (ms / 60000)) : 0;
  const level = wpm < 120 ? 'sekin' : wpm < 200 ? "o'rtacha" : wpm < 300 ? 'IELTS uchun yaxshi' : 'juda tez — tushunishni tekshiring';
  return { words: n, wpm, level };
}

/**
 * Listening gap-fill: blanks n content words (5+ letters, not stop words), spread evenly through the text.
 * Returns segments [{ text } | { gap: index, answer }]; `r` (0–1 random) picks the word inside each slice.
 */
export function makeCloze(text, n = 10, r = Math.random) {
  const parts = text.split(/([A-Za-z][A-Za-z'’-]*)/);
  const candidates = parts.map((p, i) => (i % 2 && p.length >= 5 && !STOP.has(p.toLowerCase()) && !/['’-]/.test(p) ? i : -1)).filter((i) => i >= 0);
  const k = Math.min(n, candidates.length);
  const chosen = new Set();
  for (let s = 0; s < k; s++) {
    const slice = candidates.slice(Math.floor((s * candidates.length) / k), Math.floor(((s + 1) * candidates.length) / k));
    chosen.add(slice[Math.floor(r() * slice.length)]);
  }
  let g = 0;
  return parts.map((p, i) => (chosen.has(i) ? { gap: g++, answer: p } : { text: p })).filter((x) => x.gap !== undefined || x.text);
}
