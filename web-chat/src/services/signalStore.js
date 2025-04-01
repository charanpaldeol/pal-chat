// web-chat/src/services/signalStore.js
export const store = new Map();

export const SignalStore = {
  get: (key, defaultValue) => {
    const value = store.get(key);
    return value === undefined ? defaultValue : value;
  },
  put: (key, value) => {
    store.set(key, value);
  },
  remove: (key) => {
    store.delete(key);
  },
};
