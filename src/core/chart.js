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

const escXml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Smallest "nice" axis maximum (1, 1.5, 2, 2.5, 3, 4, 5, 6, 8 × 10^n) that is ≥ v; the axis is split into 5 steps. */
export function niceMax(v) {
  if (v <= 0) return 1;
  const p = 10 ** Math.floor(Math.log10(v));
  return [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10].map((m) => m * p).find((m) => m >= v - 1e-9);
}

/**
 * IELTS Task 1 chart as an SVG string: { type: 'line' | 'bar', labels: [x…], series: [{ name, values }], unit }.
 * Scales to its container (viewBox); colours come from CSS classes .s0–.s3.
 */
export function chartSvg({ type, labels, series, unit = '' }, W = 360, H = 230) {
  const L = 44, R = 8, T = 10, B = 52;
  const max = niceMax(Math.max(...series.flatMap((s) => s.values)));
  const y = (v) => T + (H - T - B) * (1 - v / max);
  const band = (W - L - R) / labels.length;
  const cx = (i) => L + band * (i + 0.5);
  const grid = [0, 1, 2, 3, 4, 5].map((k) => {
    const v = (max / 5) * k;
    return `<line class="grid-line" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/><text class="axis" x="${L - 4}" y="${y(v) + 3}" text-anchor="end">${+v.toFixed(2)}</text>`;
  }).join('');
  const xLabels = labels.map((l, i) => `<text class="axis" x="${cx(i)}" y="${H - B + 14}" text-anchor="middle">${escXml(l)}</text>`).join('');
  let marks;
  if (type === 'bar') {
    const bw = (band * 0.8) / series.length;
    marks = series.map((s, j) => s.values.map((v, i) => {
      const x = cx(i) - (band * 0.8) / 2 + j * bw;
      return `<rect class="s${j}" x="${x.toFixed(1)}" y="${y(v).toFixed(1)}" width="${bw.toFixed(1)}" height="${(y(0) - y(v)).toFixed(1)}"><title>${escXml(`${s.name}, ${labels[i]}: ${v}${unit}`)}</title></rect>`;
    }).join('')).join('');
  } else {
    marks = series.map((s, j) => `<polyline class="s${j} line" fill="none" points="${s.values.map((v, i) => `${cx(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')}"/>`
      + s.values.map((v, i) => `<circle class="s${j}" cx="${cx(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="3"><title>${escXml(`${s.name}, ${labels[i]}: ${v}${unit}`)}</title></circle>`).join('')).join('');
  }
  const legend = series.map((s, j) => `<rect class="s${j}" x="${L + j * 100}" y="${H - 22}" width="10" height="10"/><text class="axis" x="${L + j * 100 + 14}" y="${H - 13}">${escXml(s.name)}</text>`).join('');
  const label = `${type === 'bar' ? 'Ustunli diagramma' : 'Chiziqli grafik'}: ${series.map((s) => s.name).join(', ')}${unit ? ` (${unit})` : ''}`;
  return `<svg class="t1-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escXml(label)}">${grid}${marks}${xLabels}${legend}</svg>`;
}
