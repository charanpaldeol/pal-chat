
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3001 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    // Broadcast to all clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
