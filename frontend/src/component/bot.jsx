import axios from "axios";
import { FaUserCircle, FaPaperPlane } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

function Bot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    // 🔥 Optimistic UI (show user message instantly)
    setMessages((prev) => [
      ...prev,
      { text: trimmed, sender: "user" },
    ]);

    setInput("");
    setLoading(true);

    try {
    const res = await axios.post(
  "https://quorix-chatbot-diya.onrender.com/bot/v1/message",
  {
    text: input
  }
);
      );

      if (res.status === 200) {
        setMessages((prev) => [
          ...prev,
          { text: res.data.botMessage, sender: "bot" },
        ]);
      }
    } catch (error) {
      console.log("Error sending message:", error);

      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Failed to get response. Try again.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-slate-200">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-emerald-400 rounded-lg flex items-center justify-center font-black text-white">
              Q
            </div>
            <h1 className="text-xl font-bold">Quorix</h1>
          </div>

          <FaUserCircle size={28} className="text-slate-400" />
        </div>
      </header>

      {/* Chat */}
      <main className="flex-1 flex flex-col pt-24 pb-32">
        <div className="w-full max-w-3xl mx-auto px-4">

          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <h2 className="text-3xl font-semibold">How can I help today?</h2>
              <p className="text-slate-400 mt-2">
                Quorix is ready to assist you 🚀
              </p>
            </div>
          ) : (
            <div className="flex flex-col space-y-6">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-5 py-3 rounded-2xl max-w-[85%] ${
                      msg.sender === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none"
                        : "bg-slate-900 border border-white/5 text-slate-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900 border border-white/5 px-5 py-3 rounded-2xl">
                    <span className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </main>

      {/* Input */}
      <footer className="fixed bottom-0 w-full bg-[#050505] py-6">
        <div className="max-w-3xl mx-auto px-4 flex gap-2">
          <input
            className="flex-1 px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 outline-none"
            placeholder="Message Quorix..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button
            onClick={handleSendMessage}
            disabled={loading}
            className="bg-indigo-600 px-4 rounded-xl disabled:opacity-50"
          >
            <FaPaperPlane />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Bot;