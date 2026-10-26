// Speech Lab scoring (TruAccent / Strokes "0-100%" idea). Browsers expose ASR text,
// not acoustic models, so we score the recognised transcript against the target:
// word alignment (LCS) with per-word character similarity for partial credit.

import { levenshtein } from './dictionary.js';

export function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9' ]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function similarity(a, b) {
  if (a === b) return 1;
  const max = Math.max(a.length, b.length);
  return max === 0 ? 1 : 1 - levenshtein(a, b) / max;
}

export function scorePronunciation(target, heard) {
  const t = normalize(target);
  const h = normalize(heard);
  if (t.length === 0) return { score: 0, words: [] };

  // DP alignment maximising summed similarity (only pairs >= 0.5 count as matches).
  const dp = Array.from({ length: t.length + 1 }, () => new Array(h.length + 1).fill(0));
  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= h.length; j++) {
      const s = similarity(t[i - 1], h[j - 1]);
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], s >= 0.5 ? dp[i - 1][j - 1] + s : 0);
    }
  }
  const words = t.map((w) => ({ word: w, score: 0, heard: null }));
  for (let i = t.length, j = h.length; i > 0 && j > 0; ) {
    const s = similarity(t[i - 1], h[j - 1]);
    if (s >= 0.5 && dp[i][j] === dp[i - 1][j - 1] + s) {
      words[i - 1] = { word: t[i - 1], score: s, heard: h[j - 1] };
      i--; j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) i--;
    else j--;
  }
  const extra = Math.max(0, h.length - t.length);
  const raw = dp[t.length][h.length] / (t.length + extra * 0.5);
  return { score: Math.round(Math.min(1, raw) * 100), words };
}
