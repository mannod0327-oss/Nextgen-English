// Dictionary engine: sorted prefix index + binary search (the Ultralingua / SlovoEd
// B-tree idea, flattened), morphological lemma lookup and fuzzy fallback.

export function buildIndex(entries) {
  const sorted = entries
    .map((e) => ({ key: e.word.toLowerCase(), entry: e }))
    .sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
  return { sorted, byKey: new Map(sorted.map((x) => [x.key, x.entry])) };
}

function lowerBound(sorted, key) {
  let lo = 0;
  let hi = sorted.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (sorted[mid].key < key) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

export function prefixSearch(index, prefix, limit = 10) {
  const p = prefix.trim().toLowerCase();
  if (!p) return [];
  const out = [];
  for (let i = lowerBound(index.sorted, p); i < index.sorted.length && out.length < limit; i++) {
    if (!index.sorted[i].key.startsWith(p)) break;
    out.push(index.sorted[i].entry);
  }
  return out;
}

// Candidate base forms for an inflected word: "studies" -> "study", "running" -> "run".
export function lemmaCandidates(word) {
  const w = word.toLowerCase();
  const c = new Set([w]);
  const rules = [
    [/ies$/, 'y'], [/ied$/, 'y'], [/ves$/, 'f'], [/es$/, ''], [/s$/, ''],
    [/ing$/, ''], [/ing$/, 'e'], [/ed$/, ''], [/ed$/, 'e'], [/er$/, ''], [/est$/, ''],
  ];
  for (const [re, rep] of rules) {
    if (re.test(w) && w.length > 3) {
      const base = w.replace(re, rep);
      c.add(base);
      // doubled final consonant: "running" -> "runn" -> "run"
      if (/([^aeiou])\1$/.test(base)) c.add(base.slice(0, -1));
    }
  }
  return [...c];
}

export function levenshtein(a, b) {
  const prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
}

// ponytail: fuzzy is a linear scan, fine for ~10k entries; add a BK-tree past that.
export function lookup(index, query, { maxDistance = 2, limit = 5 } = {}) {
  const q = query.trim().toLowerCase();
  if (!q) return { exact: null, suggestions: [] };
  for (const cand of lemmaCandidates(q)) {
    const hit = index.byKey.get(cand);
    if (hit) return { exact: hit, lemma: cand !== q ? cand : null, suggestions: [] };
  }
  const suggestions = index.sorted
    .map((x) => ({ d: levenshtein(q, x.key), entry: x.entry }))
    .filter((x) => x.d <= maxDistance)
    .sort((a, b) => a.d - b.d)
    .slice(0, limit)
    .map((x) => x.entry);
  return { exact: null, suggestions };
}

/** Definitions map lookup ({word: [[pos, def, example], ...]}) with lemma fallback: "commuting" → "commute". */
export function lookupDefinition(defs, word) {
  for (const cand of lemmaCandidates(word.trim().toLowerCase())) {
    if (defs[cand]) return { word: cand, senses: defs[cand] };
  }
  return null;
}
