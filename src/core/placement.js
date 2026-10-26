// Adaptive placement pre-test (Learn to Speak English "diagnostic pre-test").
// Staircase: 2 right in a row at a level -> step up, 1 wrong -> step down.

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

export function createPlacement(questions, { maxQuestions = 12, startLevel = 'A2' } = {}) {
  return { questions, maxQuestions, level: LEVELS.indexOf(startLevel), streak: 0, history: [] };
}

export function nextQuestion(state) {
  if (state.history.length >= state.maxQuestions) return null;
  const asked = new Set(state.history.map((h) => h.id));
  const pool = (lvl) => state.questions.filter((q) => q.level === LEVELS[lvl] && !asked.has(q.id));
  // nearest level that still has unasked questions
  for (let d = 0; d < LEVELS.length; d++) {
    for (const lvl of [state.level + d, state.level - d]) {
      if (lvl >= 0 && lvl < LEVELS.length && pool(lvl).length) return pool(lvl)[0];
    }
  }
  return null;
}

export function answerPlacement(state, question, correct) {
  const history = [...state.history, { id: question.id, level: question.level, correct }];
  let { level, streak } = state;
  if (correct) {
    streak += 1;
    if (streak >= 2 && level < LEVELS.length - 1) { level += 1; streak = 0; }
  } else {
    streak = 0;
    if (level > 0) level -= 1;
  }
  return { ...state, history, level, streak };
}

// Highest level answered with >= 60% accuracy over at least 2 questions.
export function placementResult(state) {
  let best = 'A1';
  for (const lvl of LEVELS) {
    const at = state.history.filter((h) => h.level === lvl);
    if (at.length >= 2 && at.filter((h) => h.correct).length / at.length >= 0.6) best = lvl;
  }
  return best;
}
