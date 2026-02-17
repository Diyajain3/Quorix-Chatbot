
import axios from "axios"
import { FaUserCircle, FaPaperPlane } from 'react-icons/fa';

import React, { useEffect, useRef, useState } from 'react'

function Bot() {
  const[messages, setMessages]=useState([])
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
   const messagesEndRef=useRef(null)


    useEffect(()=>{
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    },[messages])


  const handleSendMessage = async () => {

  if (!input.trim()) return;

  setLoading(true);

  try {

    const res = await axios.post(
      "http://localhost:4000/bot/v1/message",
      {
        text: input
      }
    );

    if (res.status === 200) {

      setMessages(prev => [
        ...prev,
        { text: res.data.userMessage, sender: "user" },
        { text: res.data.botMessage, sender: "bot" }
      ]);

    }

  } catch (error) {

    console.log("Error sending message:", error);

  } finally {

    setInput("");
    setLoading(false);

  }
};

const handleKeyPress = (e) => {
  if (e.key === "Enter" && !loading) {
    handleSendMessage();
  }
};

  return (
    <div className='flex flex-col min-h-screen bg-zinc-900 text-slate-200 selection:bg-indigo-500/30'>
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-emerald-400 rounded-lg flex items-center justify-center font-black text-white shadow-lg shadow-indigo-500/20">
              Q
            </div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Quorix
            </h1>
          </div>
          <button className="hover:opacity-80 transition-opacity">
            <FaUserCircle size={28} className="text-slate-400" />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col pt-24 pb-32">
        <div className="w-full max-w-3xl mx-auto px-4">
          {messages.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
              <div className="p-4 rounded-full bg-indigo-500/10 mb-2">
                <span className="text-4xl">✨</span>
              </div>
              <h2 className="text-3xl font-semibold text-white">How can I help today?</h2>
              <p className="text-slate-400 max-w-sm">
                Quorix is ready to brainstorm, code, or just chat.
              </p>
            </div>
          ) : (
            <div className="flex flex-col space-y-6">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-5 py-3 rounded-2xl shadow-sm leading-relaxed max-w-[85%] ${
                      msg.sender === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none shadow-indigo-500/10"
                        : "bg-slate-900 border border-white/5 text-slate-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900 border border-white/5 text-slate-400 px-5 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </main>

      {/* Input Area */}
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#050505] via-[#050505] to-transparent pb-8 pt-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-300"></div>
            <div className="relative flex bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-white placeholder-slate-500 px-6 py-4 text-base"
                placeholder="Message Quorix..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                onClick={handleSendMessage}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 m-1.5 rounded-xl flex items-center justify-center transition-all active:scale-95"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-widest font-medium">
            Powered by Quorix
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Bot
