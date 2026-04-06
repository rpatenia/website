import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
interface Message {
  type: 'input' | 'output';
  content: string;
}
const commands: Record<string, string> = {
  help: `Available commands:
  - about: Learn about Arjun
  - skills: View top skills
  - projects: List all projects
  - contact: Get contact information
  - clear: Clear terminal
  - hack: Try it and see 😉`,
  about: `Arjun Patel - AI/ML Engineer
  
Passionate CS student specializing in artificial intelligence and machine learning.
Currently pursuing B.Tech with a focus on deep learning, NLP, and computer vision.
Published researcher, hackathon winner, and open-source contributor.`,
  skills: `Top Skills:
  • Python (95%) - Primary language for ML/AI
  • TensorFlow & PyTorch (88%, 85%) - Deep learning frameworks
  • React (90%) - Frontend development
  • Data Analysis (90%) - Pandas, NumPy, visualization
  • Git (92%) - Version control master`,
  projects: `Featured Projects:
  1. Neural Style Transfer App - AI-powered artistic style transfer
  2. Sentiment Analysis Dashboard - Real-time social media analysis
  3. AI Code Review Bot - Automated code review using GPT
  4. Real-Time Object Detection - Computer vision with YOLO
  5. Full-Stack Task Manager - Collaborative productivity tool
  6. Data Visualization Platform - Interactive data exploration`,
  contact: `Contact Information:
  📧 Email: arjun.patel@email.com
  💼 LinkedIn: linkedin.com/in/arjunpatel
  🐙 GitHub: github.com/arjunpatel
  
Feel free to reach out for collaborations or opportunities!`,
  clear: 'CLEAR'
};
export function TerminalSection() {
  const [messages, setMessages] = useState<Message[]>([
  {
    type: 'output',
    content: `Welcome to Arjun's Interactive Terminal!
Type 'help' to see available commands.`
  }]
  );
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);
  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === '') return;
    setMessages((prev) => [
    ...prev,
    {
      type: 'input',
      content: `$ ${cmd}`
    }]
    );
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    if (trimmedCmd === 'clear') {
      setMessages([]);
      return;
    }
    if (trimmedCmd === 'hack' || trimmedCmd === 'easter-egg') {
      setMessages((prev) => [
      ...prev,
      {
        type: 'output',
        content: 'Initiating hack sequence...'
      }]
      );
      setIsMatrixMode(true);
      setTimeout(() => {
        setIsMatrixMode(false);
        setMessages((prev) => [
        ...prev,
        {
          type: 'output',
          content: '✨ You found the easter egg! Welcome to the Matrix... 🕶️'
        }]
        );
      }, 3000);
      return;
    }
    const response =
    commands[trimmedCmd] ||
    `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    setMessages((prev) => [
    ...prev,
    {
      type: 'output',
      content: response
    }]
    );
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
        historyIndex === -1 ?
        commandHistory.length - 1 :
        Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };
  return (
    <section className="relative py-20 bg-dark-800">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-8">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-glow-purple">Interactive Terminal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-neonCyan rounded-full" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="relative">
          
          {/* Terminal Window */}
          <div className="glass rounded-lg overflow-hidden border border-neonBlue/30">
            {/* Title Bar */}
            <div className="bg-dark-700 px-4 py-3 flex items-center gap-2 border-b border-neonBlue/20">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-400 text-sm font-mono">
                arjun@portfolio:~$
              </span>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              className="bg-dark-900 p-4 h-96 overflow-y-auto font-mono text-sm relative"
              onClick={() => inputRef.current?.focus()}>
              
              {/* Matrix Effect Overlay */}
              {isMatrixMode &&
              <div className="absolute inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
                  <div className="text-green-500 text-xs leading-tight opacity-80 animate-pulse">
                    {Array.from({
                    length: 50
                  }).map((_, i) =>
                  <div key={i} className="whitespace-nowrap">
                        {Array.from({
                      length: 80
                    }).
                    map(() =>
                    String.fromCharCode(33 + Math.random() * 94)
                    ).
                    join('')}
                      </div>
                  )}
                  </div>
                </div>
              }

              {/* Messages */}
              {messages.map((msg, index) =>
              <div
                key={index}
                className={
                msg.type === 'input' ? 'text-neonBlue' : 'text-green-400'
                }>
                
                  <pre className="whitespace-pre-wrap font-mono">
                    {msg.content}
                  </pre>
                </div>
              )}

              {/* Input Line */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center text-neonBlue mt-2">
                
                <span className="mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-neonBlue caret-neonBlue"
                  autoFocus />
                
                <span className="cursor-blink">█</span>
              </form>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-4 text-center font-mono">
            Hint: Try typing "hack" for a surprise 😉
          </p>
        </motion.div>
      </div>
    </section>);

}