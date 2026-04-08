import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, XIcon, SendIcon } from 'lucide-react';
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
const responses: Record<string, string> = {
  skills:
  "Ryan's top skills include Python, TensorFlow, PyTorch, React, and deep learning. He's proficient in NLP, computer vision, and full-stack development!",
  projects:
  'Ryan has built several impressive projects including a StockTrack AI: A Web-Based Inventory and Ordering System with AI Demand Forecasting, DentEase, and more. Check out the Projects section!',
  experience:
  "Ryan is currently pursuing a degree in Computer Science with a specialization in Data Science. He's also earned certifications",
  contact:
  'You can reach Ryan at ryanpatenia@gmail.com or connect on LinkedIn and GitHub. Feel free to send a message using the contact form!',
  education:
  "Ryan is currently pursuing a Bachelores Degree in Computer Science with a specialization in Data Science.",
  default:
  "I'm here to help! Ask me about Ryan's skills, projects, experience, education, or how to contact him."
};
export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
  {
    role: 'assistant',
    content:
    "Hi! I'm an AI assistant. Ask me about Ryan's skills, projects, or experience!"
  }]
  );
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: ChatMessage = {
      role: 'user',
      content: input
    };
    setMessages((prev) => [...prev, userMessage]);
    // Simple keyword matching for responses
    const lowerInput = input.toLowerCase();
    let response = responses.default;
    for (const [key, value] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        response = value;
        break;
      }
    }
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);
    setInput('');
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-neonBlue to-neonPurple rounded-full shadow-lg shadow-neonBlue/50 flex items-center justify-center animate-glow-pulse">
        
        <SparklesIcon className="text-white" size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          transition={{
            duration: 0.2
          }}
          className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] glass rounded-lg border border-neonBlue/30 shadow-2xl shadow-neonBlue/20 flex flex-col overflow-hidden">
          
            {/* Header */}
            <div className="bg-gradient-to-r from-neonBlue to-neonPurple p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <SparklesIcon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">AI Assistant</h3>
                  <p className="text-xs text-white/80">Ask me anything!</p>
                </div>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors">
              
                <XIcon size={20} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900">
              {messages.map((msg, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
                  <div
                className={`max-w-[80%] px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-neonBlue text-dark-900' : 'bg-dark-800 text-gray-300 border border-neonPurple/20'}`}>
                
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </motion.div>
            )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-dark-800 border-t border-neonBlue/20">
              <div className="flex gap-2">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-dark-900 border border-neonBlue/20 rounded-lg text-white text-sm focus:outline-none focus:border-neonBlue transition-colors" />
              
                <motion.button
                onClick={handleSend}
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-4 py-2 bg-neonBlue text-dark-900 rounded-lg hover:bg-neonBlueLight transition-colors">
                
                  <SendIcon size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}