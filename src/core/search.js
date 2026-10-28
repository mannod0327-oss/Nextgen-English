// Global search over all content: one normalised haystack per entry, ranked by where the query matches.
// Entries: { type, title, sub, href, text } — text is extra searchable content (examples, passages…).

// Lower-case, unify Uzbek/English apostrophes and strip punctuation so "o‘qish", "o'qish" and "oqish" all match.
export const norm = (s) => String(s ?? '').toLowerCase().replace(/[‘’ʻʼ`']/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

export function buildSearchIndex(entries) {
  return entries.map((e) => ({ e, title: norm(e.title), body: norm(`${e.sub ?? ''} ${e.text ?? ''}`) }));
}

/** Ranks: title starts with query (0) < a title word starts with it (1) < title contains it (2) < body contains it (3). */
export function search(index, query, limit = 50) {
  const q = norm(query);
  if (q.length < 2) return [];
  const words = q.split(' ');
  const rank = ({ title, body }) => {
    if (title.startsWith(q)) return 0;
    if (title.split(' ').some((w) => w.startsWith(q))) return 1;
    if (title.includes(q)) return 2;
    if (body.includes(q) || words.every((w) => title.includes(w) || body.includes(w))) return 3;
    return -1;
  };
  return index
    .map((x) => ({ x, r: rank(x) }))
    .filter(({ r }) => r >= 0)
    .sort((a, b) => a.r - b.r || a.x.title.length - b.x.title.length)
    .slice(0, limit)
    .map(({ x }) => x.e);
}
