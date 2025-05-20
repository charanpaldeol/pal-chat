# Pal Chat

Pal Chat is a demo application that showcases a basic messaging setup with WebSockets and an API server. The project consists of two small Node.js servers and a React web client.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.

## Setup

### 1. WebSocket Relay Server
This server broadcasts WebSocket messages between connected clients.

```bash
# from the project root
node server.js
```
It runs on port `3000` by default.

### 2. API Server
The Express API lives in the `server/` folder.

```bash
cd server
npm install
npm start
```
The API listens on port `4000`.

### 3. Web Chat
The front‑end lives in `web-chat/` and uses Vite for development.

```bash
cd web-chat
npm install
npm run dev
```
Open the printed local URL (usually `http://localhost:5173`) to chat.

## Overview
Run the relay server and API server, then start the web chat. Messages will be relayed through the WebSocket server while API endpoints handle key registration.
