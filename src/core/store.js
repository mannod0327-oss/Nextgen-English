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
  // Backup: every key of this namespace as one JSON-able object (localStorage keys + memory fallback).
  const snapshot = () => {
    const data = Object.fromEntries(mem);
    try {
      for (let i = 0; i < (backend?.length ?? 0); i++) {
        const key = backend.key(i);
        if (key?.startsWith(`${namespace}:`)) data[key.slice(namespace.length + 1)] = JSON.parse(backend.getItem(key));
      }
    } catch { /* memory copy only */ }
    return { format: 'nge-backup', version: 1, date: new Date().toISOString(), data };
  };
  const restore = (backup) => {
    if (backup?.format !== 'nge-backup' || backup.version !== 1 || typeof backup.data !== 'object' || backup.data === null) {
      throw new Error("Bu fayl Nextgen English zaxira nusxasi emas.");
    }
    for (const [k, v] of Object.entries(backup.data)) set(k, v);
    return Object.keys(backup.data).length;
  };
  return { get: (k, fallback) => get(k) ?? fallback, set, snapshot, restore };
}
