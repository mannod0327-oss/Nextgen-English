// Offline support. Network-first for same-origin GETs: online users always get the latest deploy
// (no mixing a new app.js with stale, unversioned data modules); every response is cached,
// so after one online visit the app also opens with no connection.
const CACHE = 'nge-v1';
const SHELL = ['./', './index.html', './styles.css', './manifest.webmanifest', './icon.svg', './src/data/definitions.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    try {
      const res = await fetch(e.request);
      if (res.ok) cache.put(e.request, res.clone());
      return res;
    } catch {
      // Offline: the cached copy; app navigations never visited fall back to the shell.
      return (await cache.match(e.request))
        ?? (e.request.mode === 'navigate' && !url.pathname.includes('/grammar-guide/') ? await cache.match('./index.html') : undefined)
        ?? Response.error();
    }
  }));
});
