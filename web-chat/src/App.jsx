import { useEffect, useRef, useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(null);
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("wss://pal-chat.fly.dev"); // ← Use Fly.io relay directly
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
      setMessages((prev) => [...prev, { from: "Stranger", text: messageText }]);
    };

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() || !connected) return;
    socketRef.current.send(input);
    setMessages((prev) => [...prev, { from: "You", text: input }]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="bg-gray-100 text-gray-900 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4 bg-white rounded-2xl shadow-lg flex flex-col h-[90vh]">
        <h1 className="text-xl font-bold text-center mb-2">Pal (ਪਲ) – Private Chat</h1>
        
        {/* Connection Status */}
        <p className={`text-sm text-center mb-2 ${connected ? "text-green-600" : "text-red-500"}`}>
          {connected ? "🟢 Connected to server" : "🔴 Disconnected"}
        </p>

        {/* Error Display */}
        {error && (
          <p className="text-sm text-red-600 text-center mb-2">{error}</p>
        )}

        {/* Chat Messages */}
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

        {/* Input Area */}
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
