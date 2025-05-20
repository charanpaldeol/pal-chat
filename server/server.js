// server/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the project root
const rootPath = path.join(__dirname, '..');
app.use(express.static(rootPath));

// Routes
app.get('/', (req, res) => {
  // Send the welcome page when visiting the root URL
  res.sendFile(path.join(rootPath, 'index.html'));
});
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
