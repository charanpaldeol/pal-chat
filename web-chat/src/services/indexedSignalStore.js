/*

// web-chat/src/services/indexedSignalStore.js
import { openDB } from 'idb';

const DB_NAME = 'pal-signal-db';
const STORE_NAME = 'signal-store';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(STORE_NAME);
  },
});

export const IndexedDBSignalStore = {
  async get(key, defaultValue) {
    const db = await dbPromise;
    const value = await db.get(STORE_NAME, key);
    return value === undefined ? defaultValue : value;
  },

  async put(key, value) {
    const db = await dbPromise;
    return db.put(STORE_NAME, value, key);
  },

  async remove(key) {
    const db = await dbPromise;
    return db.delete(STORE_NAME, key);
  },
};

*/
