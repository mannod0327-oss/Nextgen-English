// SM-2 spaced repetition (the "memory trainer" from Jourist / Easy Learning English).
// grade: 0..5 (0-2 = forgot, 3 = hard, 4 = good, 5 = easy)

const DAY = 86_400_000;

export function newCard(id, now = Date.now()) {
  return { id, ease: 2.5, interval: 0, reps: 0, due: now, lapses: 0 };
}

export function review(card, grade, now = Date.now()) {
  if (!Number.isInteger(grade) || grade < 0 || grade > 5) {
    throw new RangeError(`grade must be an integer 0..5, got ${grade}`);
  }
  const next = { ...card };
  if (grade < 3) {
    next.reps = 0;
    next.interval = 0;
    next.lapses = card.lapses + 1;
    next.due = now + 10 * 60_000; // relearn in 10 minutes
  } else {
    next.reps = card.reps + 1;
    next.interval = next.reps === 1 ? 1 : next.reps === 2 ? 6 : Math.round(card.interval * card.ease);
    next.due = now + next.interval * DAY;
  }
  next.ease = Math.max(1.3, card.ease + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));
  return next;
}

export function dueCards(cards, now = Date.now()) {
  return cards.filter((c) => c.due <= now).sort((a, b) => a.due - b.due);
}

// A card counts as "learned" once it has survived to a 21+ day interval.
export function isMature(card) {
  return card.interval >= 21;
}
