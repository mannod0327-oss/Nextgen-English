// Zero-dependency static server: `npm start` → http://localhost:8080
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const port = Number(process.env.PORT) || 8080;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json', '.png': 'image/png' };

createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  const file = resolve(join(root, path === sep || path === '/' ? 'index.html' : path));
  if (file !== root && !file.startsWith(root + sep)) return res.writeHead(403).end();
  try {
    const body = await readFile(file);
    const type = types[extname(file)] ?? 'application/octet-stream';
    res.writeHead(200, { 'content-type': type.startsWith('image/png') ? type : `${type}; charset=utf-8` }).end(body);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(port, () => console.log(`Nextgen English → http://localhost:${port}`));
