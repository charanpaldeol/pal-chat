import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("wss://ionized-elated-vest.glitch.me");

    ws.current.onmessage = async (event) => {
      const text = await event.data.text();
      const msg = JSON.parse(text);
      setMessages((prev) => [...prev, { from: "pal", text: msg.text }]);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    const msg = { text: input };
    ws.current.send(JSON.stringify(msg));
    setMessages((prev) => [...prev, { from: "you", text: input }]);
    setInput("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-4 rounded-2xl shadow-md">
        <h1 className="text-xl font-bold mb-3">📡 Pal (ਪਲ) Chat</h1>
        <div className="h-80 overflow-y-auto border rounded-md p-2 mb-3 bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`text-${msg.from === "you" ? "right" : "left"} mb-1`}>
              <span className="inline-block px-3 py-1 bg-blue-100 rounded-xl">
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 border px-3 py-2 rounded-md"
          />
          <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
