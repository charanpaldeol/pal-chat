// web-chat/src/services/app.js

import { useEffect, useRef, useState } from "react";
import * as libsignal from "@signalapp/libsignal-protocol";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(null);
  const [isEncrypted, setIsEncrypted] = useState(false);

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  const userIdRef = useRef("user-" + Date.now());
  const [signalIdentity, setSignalIdentity] = useState(null);

  // === ENCRYPTION TOGGLE ===
  const handleToggleEncryption = async () => {
    if (!isEncrypted) {
      await generateSignalKeys();
      console.log("🔐 Encryption enabled");
    } else {
      console.log("🔓 Encryption disabled");
    }
    setIsEncrypted((prev) => !prev);
  };

  // === SIGNAL KEY GENERATION ===
  const generateSignalKeys = async () => {
    const identityKeyPair = await libsignal.KeyHelper.generateIdentityKeyPair();
    const registrationId = await libsignal.KeyHelper.generateRegistrationId();
    const signedPreKey = await libsignal.KeyHelper.generateSignedPreKey(identityKeyPair, 1);
    const oneTimePreKeys = [];

    for (let i = 0; i < 5; i++) {
      const preKey = await libsignal.KeyHelper.generatePreKey(i + 2);
      oneTimePreKeys.push({
        keyId: preKey.keyId,
        publicKey: arrayBufferToBase64(preKey.keyPair.pubKey)
      });
    }

    const keysPayload = {
      username: userIdRef.current,
      identityKey: {
        pubKey: arrayBufferToBase64(await identityKeyPair.pubKey.export()),
        privKey: arrayBufferToBase64(await identityKeyPair.privKey.export()),
      },
      signedPreKey: {
        keyId: signedPreKey.keyId,
        keyPair: {
          pubKey: arrayBufferToBase64(await signedPreKey.keyPair.pubKey.export()),
          privKey: arrayBufferToBase64(await signedPreKey.keyPair.privKey.export()),
        }
      },
      oneTimePreKeys
    };

    setSignalIdentity(keysPayload); // store locally

    const res = await fetch("https://api.palchat.org/api/auth/register-keys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(keysPayload),
    });

    if (res.ok) console.log("✅ Signal keys registered");
    else console.warn("⚠️ Signal registration failed");
  };

  // === WEBSOCKET SETUP ===
  useEffect(() => {
    const socket = new WebSocket("wss://pal-chat.fly.dev");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("✅ Connected to WebSocket relay");
      setConnected(true);
      setError(null);
    };

    socket.onerror = (err) => {
      console.error("❌ WebSocket error:", err);
      setError("Connection error. Please try again later.");
    };

    socket.onclose = () => {
      console.warn("🔌 WebSocket disconnected");
      setConnected(false);
    };

    socket.onmessage = async (event) => {
      let messageText = event.data instanceof Blob ? await event.data.text() : event.data;

      // TODO: decrypt the message using Signal session
      const decrypted = isEncrypted ? "[encrypted] " + messageText : messageText;

      setMessages((prev) => [...prev, { from: "Stranger", text: decrypted }]);
    };

    return () => {
      socket.close();
    };
  }, [isEncrypted]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || !connected) return;

    // TODO: use Signal to encrypt message before sending
    const encryptedMessage = input;

    socketRef.current.send(encryptedMessage);
    setMessages((prev) => [...prev, { from: "You", text: input }]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // === UTIL ===
  const arrayBufferToBase64 = (buffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
  };

  return (
    <div className="bg-gray-100 text-gray-900 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4 bg-white rounded-2xl shadow-lg flex flex-col h-[90vh]">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold">Pal (ਪਲ) – Private Chat</h1>
          <button
            onClick={handleToggleEncryption}
            className="bg-gray-700 text-white px-4 py-1 rounded hover:bg-gray-600 text-sm"
          >
            {isEncrypted ? '🔒 Encrypted' : '🔓 Plain Text'}
          </button>
        </div>

        <p className={`text-sm text-center mb-2 ${connected ? "text-green-600" : "text-red-500"}`}>
          {connected ? "🟢 Connected to server" : "🔴 Disconnected"}
        </p>

        {error && (
          <p className="text-sm text-red-600 text-center mb-2">{error}</p>
        )}

        <div className="flex-1 overflow-y-auto space-y-2 p-2 border rounded-md mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-xl max-w-[75%] ${
                msg.from === "You"
                  ? "bg-blue-100 text-blue-800 self-end"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              {msg.from === "You" ? "🫵 You: " : "👤 Stranger: "}
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={sendMessage}
            className={`px-4 py-2 rounded-xl text-white ${
              connected ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!connected}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
