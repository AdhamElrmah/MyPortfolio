import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../../data/skills";

const commands = {
  help: "Available commands:\n- about     : Print my short bio\n- skills    : List my tech stack\n- contact   : Show my contact info\n- clear     : Clear the terminal\n- sudo hire me : ???",
  about: "Adham Elrmah - Software Engineer based in Egypt.\nSpecializing in high-performance web applications with React, TypeScript, and Node.js.",
  skills: skillCategories.map(c => `${c.title}:\n  ${c.skills.map(s => s.name).join(", ")}`).join("\n\n"),
  contact: "Email: adhamelrmah@gmail.com\nGitHub: @AdhamElrmah\nLinkedIn: adham-elrmah",
};

export const TerminalTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: "Welcome to Adham's Terminal v1.0.0\nType 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        terminalRef.current &&
        !terminalRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    const newHistory = [...history, { type: "input", text: input } as const];
    
    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd === "sudo hire me") {
      newHistory.push({ type: "output", text: "ACCESS GRANTED. Redirecting to contact section..." });
      setHistory(newHistory);
      setTimeout(() => {
        setIsOpen(false);
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 1500);
    } else if (cmd in commands) {
      newHistory.push({ type: "output", text: commands[cmd as keyof typeof commands] });
      setHistory(newHistory);
    } else {
      newHistory.push({ type: "output", text: `Command not found: ${cmd}. Type 'help' for available commands.` });
      setHistory(newHistory);
    }
    
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 lg:left-auto lg:right-20 z-50 w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 text-[#C3E41D] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(195,228,29,0.2)] transition-all cursor-hover group"
            aria-label="Open Terminal"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" x2="20" y1="19" y2="19" />
            </svg>
            
            {/* Tooltip */}
            <span className="absolute left-full ml-3 lg:left-auto lg:ml-0 lg:right-full lg:mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-black text-[10px] font-mono tracking-wider uppercase opacity-0 -translate-x-2 lg:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
              Open Terminal (Ctrl + `)
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 lg:left-auto lg:right-6 w-[400px] max-w-[calc(100vw-48px)] h-[300px] z-[100] rounded-xl overflow-hidden border border-neutral-700 bg-black/90 backdrop-blur-xl shadow-2xl flex flex-col font-mono text-sm"
          >
            {/* Header */}
            <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-neutral-500 text-xs">adham@portfolio ~ bash</span>
            </div>

            {/* Terminal Body */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto text-neutral-300">
              {history.map((item, i) => (
                <div key={i} className="mb-2 whitespace-pre-wrap">
                  {item.type === "input" ? (
                    <span className="text-[#C3E41D]">
                      <span className="text-blue-400">adham@portfolio</span>:<span className="text-purple-400">~</span>$ {item.text}
                    </span>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
              
              {/* Active Input Line */}
              <form onSubmit={handleSubmit} className="flex items-center text-[#C3E41D]">
                <span className="mr-2 text-blue-400">adham@portfolio</span>
                <span className="mr-2 text-purple-400">~</span>
                <span className="mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-[#C3E41D]"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
