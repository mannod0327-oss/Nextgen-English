// Local progress store (the per-profile AppData/Registry files of the desktop apps).
// localStorage can be missing or throw (private mode); fall back to memory.

export function createStore(namespace = 'nge', backend = globalThis.localStorage) {
  const mem = new Map();
  const get = (k) => {
    try { const v = backend?.getItem(`${namespace}:${k}`); if (v != null) return JSON.parse(v); } catch { /* fall through */ }
    return mem.get(k);
  };
  const set = (k, v) => {
    mem.set(k, v);
    try { backend?.setItem(`${namespace}:${k}`, JSON.stringify(v)); } catch { /* memory only */ }
  };
  return { get: (k, fallback) => get(k) ?? fallback, set };
}
