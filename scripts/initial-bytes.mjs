// Bytes of JS loaded before first render: src/app.js plus its static import graph (dynamic import() excluded).
// Usage: node scripts/initial-bytes.mjs  → prints KB and the module list. Also used by tests/core.test.js.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function staticGraph(entry) {
  const seen = new Map();
  const walk = (file) => {
    if (seen.has(file)) return;
    const src = readFileSync(file, 'utf8');
    seen.set(file, Buffer.byteLength(src));
    for (const m of src.matchAll(/^\s*import\s[^'"]*?from\s*['"](\.[^'"]+)['"]/gm)) walk(resolve(dirname(file), m[1]));
  };
  walk(resolve(entry));
  return seen;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const g = staticGraph(new URL('../src/app.js', import.meta.url).pathname);
  const total = [...g.values()].reduce((a, b) => a + b, 0);
  console.log(`${(total / 1024).toFixed(0)} KB in ${g.size} modules`);
  for (const [f, b] of [...g].sort((a, b) => b[1] - a[1])) console.log(`${(b / 1024).toFixed(1).padStart(7)} KB  ${f.replace(/.*\/src\//, 'src/')}`);
}
