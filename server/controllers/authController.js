// server/controllers/authController.js

const signalService = require('../services/signalService');

// Register user keys
exports.registerKeys = async (req, res) => {
  try {
    const { username, identityKey, signedPreKey, oneTimePreKeys } = req.body;

    if (!username || !identityKey || !signedPreKey || !oneTimePreKeys) {
      return res.status(400).json({ error: 'Missing required key data' });
    }

    await signalService.storeKeys(username, {
      identityKey,
      signedPreKey,
      oneTimePreKeys,
    });

    return res.status(200).json({ message: 'Keys registered successfully' });
  } catch (error) {
    console.error('Key registration error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch user keys
exports.getPreKeys = async (req, res) => {
  try {
    const { username } = req.params;
    const keys = await signalService.getKeys(username);

    if (!keys) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(keys);
  } catch (error) {
    console.error('Get prekeys error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
