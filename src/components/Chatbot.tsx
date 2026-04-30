"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from 'react-markdown';
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === 'submitted' || status === 'streaming';

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-[var(--color-mbt-gold)] text-white shadow-xl hover:scale-105 transition-transform z-50 ${isOpen ? 'hidden' : 'block'}`}
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-100 flex-shrink-0 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-serif text-lg">Ask Mariem AI</h3>
              <p className="text-xs text-gray-400">Powered by Gemini</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-10 text-sm">
                <Bot className="w-10 h-10 mx-auto text-[var(--color-mbt-gold)] mb-3 opacity-50" />
                <p>Hello! I'm an AI assistant. How can I help you learn more about Mariem Ben Tanfous?</p>
              </div>
            ) : (
              messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 flex gap-2 ${
                    m.role === 'user' 
                      ? 'bg-[var(--color-mbt-gold)] text-white rounded-tr-sm' 
                      : 'bg-white border border-gray-100 shadow-sm text-gray-800 rounded-tl-sm'
                  }`}>
                    {m.role === 'assistant' && <Bot className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-mbt-gold)]" />}
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">
                      {m.parts?.map((part, i) => part.type === 'text' ? (
                        <div key={i} className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:p-0">
                          <ReactMarkdown>{part.text}</ReactMarkdown>
                        </div>
                      ) : null)}
                    </div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm text-gray-800 rounded-2xl rounded-tl-sm p-3">
                  <Loader2 className="w-4 h-4 animate-spin text-[var(--color-mbt-gold)]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!input.trim()) return;
                sendMessage({ parts: [{ type: 'text', text: input }], role: 'user' });
                setInput("");
              }} 
              className="flex gap-2"
            >
              <input
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-mbt-gold)]/50 focus:border-transparent transition-all"
                value={input}
                placeholder="Ask a question..."
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <Send size={18} className={input.trim() && !isLoading ? "ml-0.5" : ""} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
