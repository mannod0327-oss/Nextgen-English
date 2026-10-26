// Exam engine — ProfExam (.exam) + Schoolhouse Test (.stx) ideas in one open JSON format.
//
// Exam file (format "nge-exam", version 1):
// { format, version, title, passPercent, timeLimitMin,
//   questions: [{ id, type, prompt, ...typeFields, explanation?, level? }] }
// types:
//   single   { options: [..], answer: index }
//   multiple { options: [..], answer: [indices] }
//   fill     { answer: "text" | ["accepted", "variants"] }
//   order    { items: [..] }            (correct order = items as written)
//   match    { pairs: [[left, right]] } (answer: map left index -> right index)

export const FORMAT = 'nge-exam';
export const VERSION = 1;
const TYPES = new Set(['single', 'multiple', 'fill', 'order', 'match']);

export function validateExam(exam) {
  const errors = [];
  if (!exam || typeof exam !== 'object') return ['exam must be an object'];
  if (exam.format !== FORMAT) errors.push(`format must be "${FORMAT}"`);
  if (!exam.title) errors.push('title is required');
  if (!Array.isArray(exam.questions) || exam.questions.length === 0) {
    errors.push('questions must be a non-empty array');
    return errors;
  }
  const ids = new Set();
  exam.questions.forEach((q, i) => {
    const at = `questions[${i}]`;
    if (!q.id) errors.push(`${at}.id is required`);
    else if (ids.has(q.id)) errors.push(`${at}.id "${q.id}" is duplicated`);
    ids.add(q.id);
    if (!TYPES.has(q.type)) return errors.push(`${at}.type "${q.type}" is unknown`);
    if (!q.prompt) errors.push(`${at}.prompt is required`);
    const n = q.options?.length ?? 0;
    if (q.type === 'single' && !(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < n)) {
      errors.push(`${at}.answer must index into options`);
    }
    if (q.type === 'multiple' && !(Array.isArray(q.answer) && q.answer.length && q.answer.every((a) => a >= 0 && a < n))) {
      errors.push(`${at}.answer must be a non-empty list of option indices`);
    }
    if (q.type === 'fill' && !(typeof q.answer === 'string' || (Array.isArray(q.answer) && q.answer.length))) {
      errors.push(`${at}.answer must be a string or list of strings`);
    }
    if (q.type === 'order' && !(Array.isArray(q.items) && q.items.length >= 2)) errors.push(`${at}.items needs 2+ items`);
    if (q.type === 'match' && !(Array.isArray(q.pairs) && q.pairs.length >= 2)) errors.push(`${at}.pairs needs 2+ pairs`);
  });
  return errors;
}

const norm = (s) => String(s ?? '').trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?]$/, '');

// Returns 0..1. Partial credit for multiple/order/match.
export function scoreQuestion(q, answer) {
  if (answer === undefined || answer === null) return 0;
  switch (q.type) {
    case 'single':
      return answer === q.answer ? 1 : 0;
    case 'multiple': {
      const want = new Set(q.answer);
      const got = new Set(answer);
      let s = 0;
      for (const a of got) s += want.has(a) ? 1 : -1;
      return Math.max(0, s / want.size);
    }
    case 'fill': {
      const accepted = [].concat(q.answer).map(norm);
      return accepted.includes(norm(answer)) ? 1 : 0;
    }
    case 'order': // answer = items in the learner's order
      return answer.filter((item, i) => item === q.items[i]).length / q.items.length;
    case 'match': // answer = { leftIndex: rightIndex }
      return q.pairs.filter((_, i) => Number(answer[i]) === i).length / q.pairs.length;
    default:
      return 0;
  }
}

export function gradeExam(exam, answers) {
  const perQuestion = exam.questions.map((q) => ({ id: q.id, score: scoreQuestion(q, answers[q.id]) }));
  const total = perQuestion.reduce((s, x) => s + x.score, 0);
  const percent = Math.round((total / exam.questions.length) * 100);
  return {
    total: Math.round(total * 100) / 100,
    max: exam.questions.length,
    percent,
    passed: percent >= (exam.passPercent ?? 70),
    perQuestion,
    mistakes: perQuestion.filter((x) => x.score < 1).map((x) => x.id),
  };
}

// Deterministic PRNG so printed variants (Schoolhouse "versions A/B/C") are reproducible.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle(arr, rand) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// New exam with shuffled question order and shuffled options; answers remapped.
export function makeVariant(exam, seed) {
  const rand = mulberry32(seed);
  const questions = shuffle(exam.questions, rand).map((q) => {
    if (q.type !== 'single' && q.type !== 'multiple') return q;
    const perm = shuffle(q.options.map((_, i) => i), rand);
    const where = (orig) => perm.indexOf(orig);
    return {
      ...q,
      options: perm.map((i) => q.options[i]),
      answer: q.type === 'single' ? where(q.answer) : q.answer.map(where).sort((a, b) => a - b),
    };
  });
  return { ...exam, questions, variantSeed: seed };
}

export function parseExam(text) {
  const exam = JSON.parse(text);
  const errors = validateExam(exam);
  if (errors.length) throw new Error(`Invalid exam file:\n- ${errors.join('\n- ')}`);
  return exam;
}

export function serializeExam(exam) {
  return JSON.stringify({ ...exam, format: FORMAT, version: VERSION }, null, 2);
}
