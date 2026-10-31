// Progress export for teachers: plain CSV (RFC 4180 quoting) that opens in Excel / Google Sheets.
import { isMature } from './srs.js';

/** Rows of cells → CSV text. Cells with comma, quote or newline are quoted; quotes doubled. CRLF line ends. */
export const toCsv = (rows) => rows
  .map((r) => r.map((c) => {
    const s = c == null ? '' : String(c);
    return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  }).join(','))
  .join('\r\n');

/**
 * Learner state (store values) → [section, item, value, date] rows.
 * state: { profile, mistakes, ieltsMockHistory, readingDone, grammarDone, drillBest, readingSpeed, cards }
 */
export function progressRows({ profile = {}, mistakes = {}, ieltsMockHistory = [], readingDone = {}, grammarDone = {}, drillBest = {}, readingSpeed = [], cards = {} }) {
  const rows = [['section', 'item', 'value', 'date']];
  rows.push(['profile', 'level', profile.level ?? '', ''], ['profile', 'xp', profile.xp ?? 0, ''], ['profile', 'active days', (profile.days ?? []).length, '']);
  for (const h of ieltsMockHistory) rows.push(['ielts mock', h.key, `${h.raw}/40 → band ${h.band}`, h.date]);
  for (const [id, pct] of Object.entries(readingDone)) rows.push(['reading', id, `${pct}%`, '']);
  for (const [id, pct] of Object.entries(grammarDone)) rows.push(['grammar', id, `${pct}%`, '']);
  for (const [id, pct] of Object.entries(typeof drillBest === 'number' ? { articles: drillBest } : drillBest)) rows.push(['drill', id, `${pct}%`, '']);
  for (const s of readingSpeed) rows.push(['reading speed', s.id, `${s.wpm} wpm`, s.date]);
  const c = Object.values(cards);
  rows.push(['vocabulary', 'cards studied', c.length, ''], ['vocabulary', 'cards mature (21+ days)', c.filter(isMature).length, '']);
  for (const m of Object.values(mistakes)) rows.push(['open mistake', `${m.source}: ${m.q?.prompt ?? m.q?.id}`, m.given, m.date]);
  return rows;
}
