// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register identity + prekeys
router.post('/register-keys', authController.registerKeys);

// Fetch public keys by username
router.get('/get-prekeys/:username', authController.getPreKeys);

module.exports = router;

