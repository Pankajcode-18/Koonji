import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { chatbotConfig } from '../../config/chatbotConfig';

// Simple text formatter for bold and links
function FormattedMessage({ text }) {
  // Split by newlines first
  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        // Handle bold **text**
        let formattedLine = line.split(/(\*\*.*?\*\*)/).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>;
          }
          // Handle links [text](url)
          return part.split(/(\[.*?\]\(.*?\))/).map((subPart, k) => {
            const linkMatch = subPart.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
              return (
                <Link key={k} to={linkMatch[2]} className="text-brand underline hover:text-blue-700">
                  {linkMatch[1]}
                </Link>
              );
            }
            return subPart;
          });
        });

        return (
          <p key={i} className="min-h-[1rem]">
            {formattedLine}
          </p>
        );
      })}
    </div>
  );
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Initialize welcome message when opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          type: 'bot',
          text: chatbotConfig.welcomeMessage,
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleQuickAction = (action) => {
    // Add user message
    const userMsg = { id: Date.now(), type: 'user', text: action.label };
    
    // Add bot response after a tiny delay
    const botMsg = { 
      id: Date.now() + 1, 
      type: 'bot', 
      text: chatbotConfig.responses[action.id] || chatbotConfig.fallbackMessage 
    };

    setMessages((prev) => [...prev, userMsg]);
    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue('');

    const userMsg = { id: Date.now(), type: 'user', text: userText };
    setMessages((prev) => [...prev, userMsg]);

    // Simple matching or fallback
    const lowerText = userText.toLowerCase();
    let responseText = chatbotConfig.fallbackMessage;

    // Optional: add tiny matching logic for "hello", "hi"
    if (lowerText.match(/hi|hello|hey/)) {
      responseText = "Hello there! How can I help you today?";
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, type: 'bot', text: responseText }
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 px-6 items-center justify-center rounded-full bg-brand text-white shadow-xl hover:bg-blue-700 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <FiMessageSquare size={22} className="mr-2.5" />
        <span className="font-medium text-sm">Chat with us</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200 
                       w-[calc(100vw-3rem)] sm:w-[380px] h-[550px] max-h-[calc(100vh-6rem)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-white px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 border border-gray-100 overflow-hidden">
                  <img src="/logo.png" alt="Logo" className="h-5 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{chatbotConfig.companyInfo.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {chatbotConfig.companyInfo.status}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-50 focus:outline-none"
                aria-label="Close chat"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      msg.type === 'user'
                        ? 'bg-brand text-white rounded-br-sm'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                    }`}
                  >
                    <FormattedMessage text={msg.text} />
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length > 0 && (
              <div className="px-5 py-3 bg-white border-t border-gray-50 flex gap-2 overflow-x-auto no-scrollbar snap-x">
                {chatbotConfig.quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleQuickAction(action)}
                    className="snap-start shrink-0 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 hover:border-brand hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="bg-white p-4 border-t border-gray-100">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-2 py-1 focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-all"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors disabled:opacity-50 hover:bg-blue-700"
                  aria-label="Send message"
                >
                  <FiSend size={14} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
