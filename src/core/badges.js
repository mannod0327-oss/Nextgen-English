// Achievement badges. Pure: the app builds a plain `state` snapshot from the store and gets back
// every badge with its current value, so earned/unearned and progress are recomputed (never stored).
// state: { xp, streak, level, cards, mature, grammar: {id: %}, reading: {id: %}, bands: [number],
//          verbsBest, drillBest }

const done = (o, min = 0) => Object.values(o ?? {}).filter((p) => p >= min).length;

export const BADGES = [
  { id: 'first-step', icon: '👣', title: 'Birinchi qadam', desc: 'Birinchi XP ni oling', goal: 1, value: (s) => Math.min(s.xp, 1) },
  { id: 'placed', icon: '🧭', title: 'Darajam aniq', desc: 'Daraja testini topshiring', goal: 1, value: (s) => (s.level ? 1 : 0) },
  { id: 'streak-3', icon: '🔥', title: '3 kun ketma-ket', desc: "3 kun uzluksiz shug'ullaning", goal: 3, value: (s) => s.streak },
  { id: 'streak-7', icon: '🏅', title: 'Bir hafta', desc: "7 kun uzluksiz shug'ullaning", goal: 7, value: (s) => s.streak },
  { id: 'words-50', icon: '🖼️', title: "50 so'z", desc: '50 ta kartani takrorlang', goal: 50, value: (s) => s.cards },
  { id: 'words-100', icon: '📚', title: "100 so'z", desc: '100 ta kartani takrorlang', goal: 100, value: (s) => s.cards },
  { id: 'memory-25', icon: '🧠', title: 'Uzoq xotira', desc: "25 ta so'z uzoq xotiraga o'tsin", goal: 25, value: (s) => s.mature },
  { id: 'grammar-10', icon: '📐', title: 'Grammatik', desc: '10 ta grammatika mavzusini ishlang', goal: 10, value: (s) => done(s.grammar) },
  { id: 'grammar-ace', icon: '💯', title: 'Xatosiz', desc: '5 ta grammatika mavzusida 100%', goal: 5, value: (s) => done(s.grammar, 100) },
  { id: 'reader-10', icon: '📰', title: 'Kitobxon', desc: "10 ta matnni o'qib, savollarga javob bering", goal: 10, value: (s) => done(s.reading) },
  { id: 'first-mock', icon: '📝', title: 'Birinchi sinov', desc: 'IELTS sinov testini topshiring', goal: 1, value: (s) => Math.min(s.bands.length, 1) },
  { id: 'band-6', icon: '🎯', title: 'Band 6', desc: 'Sinov testida Band 6+ oling', goal: 6, value: (s) => Math.max(0, ...s.bands) },
  { id: 'band-7', icon: '🎓', title: 'Band 7', desc: 'Sinov testida Band 7+ oling', goal: 7, value: (s) => Math.max(0, ...s.bands) },
  { id: 'verbs-100', icon: '🔁', title: "Fe'llar ustasi", desc: "Noto'g'ri fe'llar testida 100%", goal: 100, value: (s) => s.verbsBest ?? 0 },
  { id: 'drill-100', icon: '🅰️', title: 'Artikl ustasi', desc: 'Artikl va predloglar testida 100%', goal: 100, value: (s) => s.drillBest ?? 0 },
  { id: 'xp-1000', icon: '⭐', title: '1000 XP', desc: "1000 XP to'plang", goal: 1000, value: (s) => s.xp },
];

export function badges(state) {
  return BADGES.map(({ value, ...b }) => {
    const v = Math.max(0, value(state) || 0);
    return { ...b, value: Math.min(v, b.goal), earned: v >= b.goal };
  });
}
