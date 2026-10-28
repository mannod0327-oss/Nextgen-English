// Tiny SVG chart helpers for the progress page (no chart library).

/** Values → SVG polyline points scaled into a w×h box (y grows downward). */
export function linePoints(values, w, h, min, max, pad = 6) {
  if (!values.length) return '';
  const span = max - min || 1;
  const step = values.length > 1 ? (w - 2 * pad) / (values.length - 1) : 0;
  return values.map((v, i) => {
    const x = values.length > 1 ? pad + i * step : w / 2;
    const y = pad + (h - 2 * pad) * (1 - (Math.min(max, Math.max(min, v)) - min) / span);
    return `${Math.round(x * 10) / 10},${Math.round(y * 10) / 10}`;
  }).join(' ');
}

/** Last n calendar days (oldest first) as YYYY-MM-DD, ending at `end`. */
export function lastDays(end, n) {
  const t = Date.parse(`${end}T00:00:00Z`);
  return Array.from({ length: n }, (_, i) => new Date(t - (n - 1 - i) * 86400000).toISOString().slice(0, 10));
}
