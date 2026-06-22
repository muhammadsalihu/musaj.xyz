import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, Bot, ArrowLeft, AlertCircle, Loader } from 'lucide-react';
import { chat } from '../lib/openrouter';
import Footer from './Footer';

const getAgent = (id) => {
  try {
    const stored = localStorage.getItem('musaj_agents');
    if (stored) {
      const agents = JSON.parse(stored);
      return agents.find((a) => a.id === id && a.deployed) || null;
    }
  } catch {}
  return null;
};

const Bubble = ({ msg }) => (
  <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
    {msg.role === 'assistant' && (
      <div className="bg-brand-light p-1.5 rounded-full h-7 w-7 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
        <Bot className="w-4 h-4 text-brand" />
      </div>
    )}
    <div
      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
        msg.role === 'user'
          ? 'bg-brand text-white rounded-br-sm'
          : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm shadow-sm'
      }`}
    >
      {msg.content}
    </div>
  </div>
);

const AgentChat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const agent = getAgent(id);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (agent) {
      setMessages([
        {
          role: 'assistant',
          content: `Hi! I'm ${agent.name}. ${agent.description ? agent.description + ' ' : ''}How can I help you today?`,
        },
      ]);
    }
  }, []);

  if (!agent) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-4">
        <div className="text-center">
          <Bot className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-700 mb-2">Agent not found</h2>
          <p className="text-gray-400 text-sm mb-6">This agent may not be deployed yet.</p>
          <button onClick={() => navigate('/agent')} className="text-brand font-medium text-sm hover:opacity-80 transition">
            ← Back to Agent Hub
          </button>
        </div>
      </div>
    );
  }

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const reply = await chat({
        model: agent.model,
        systemPrompt: agent.systemPrompt,
        messages: updated.map(({ role, content }) => ({ role, content })),
      });
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch (err) {
      if (err.message === 'NO_KEY') {
        setError('OpenRouter API key not configured. Add VITE_OPENROUTER_API_KEY to your Vercel environment variables.');
      } else {
        setError(err.message || 'Something went wrong. Try again.');
      }
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-surface flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-10">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <button onClick={() => navigate('/agent')} className="text-gray-400 hover:text-brand transition">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="bg-brand-light p-2 rounded-xl">
              <Bot className="w-5 h-5 text-brand" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-bold text-gray-900 truncate">{agent.name}</h1>
              <p className="text-xs text-gray-400 truncate">{agent.model}</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium flex-shrink-0">
              Live
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 space-y-4 overflow-y-auto">
          {messages.map((msg, i) => (
            <Bubble key={i} msg={msg} />
          ))}

          {loading && (
            <div className="flex items-center gap-2">
              <div className="bg-brand-light p-1.5 rounded-full h-7 w-7 flex items-center justify-center">
                <Bot className="w-4 h-4 text-brand" />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <Loader className="w-4 h-4 text-brand animate-spin" />
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Features list */}
        {agent.features?.length > 0 && messages.length <= 1 && (
          <div className="max-w-3xl w-full mx-auto px-4 pb-4">
            <p className="text-xs text-gray-400 mb-2">This agent can help with:</p>
            <div className="flex flex-wrap gap-2">
              {agent.features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => { setInput(f); inputRef.current?.focus(); }}
                  className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="bg-white border-t border-gray-100 px-4 py-4 sticky bottom-0">
          <div className="max-w-3xl mx-auto flex items-end gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={`Message ${agent.name}…`}
              rows={1}
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none max-h-32 overflow-y-auto"
              style={{ minHeight: '42px' }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="bg-brand text-white p-2.5 rounded-xl hover:opacity-90 transition disabled:opacity-40 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </>
  );
};

export default AgentChat;
