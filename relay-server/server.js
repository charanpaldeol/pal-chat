
const WebSocket = require('ws');

const port = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port });

const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('🔌 New client connected');

  ws.on('message', (message) => {
    console.log('📩 Message received:', message);

    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    }
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('❌ Client disconnected');
  });
});

console.log(`🚀 WebSocket relay running on port ${port}`);
