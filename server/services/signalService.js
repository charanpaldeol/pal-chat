// server/services/signalService.js

const inMemoryStore = new Map();

// Save user's Signal keys
exports.storeKeys = (username, keys) => {
  inMemoryStore.set(username, keys);
};

// Get stored keys for a user
exports.getKeys = (username) => {
  return inMemoryStore.get(username);
};

