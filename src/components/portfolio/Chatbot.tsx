import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send } from "lucide-react";
import { chatWithMegaBot } from "../../functions/chat";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Meg.AI Assistant, an AI clone of Megavarshan. Ask me anything about his experience, skills, or projects!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    // Show tooltip quickly, and don't auto hide it so the user definitely sees it
    const showTimer = setTimeout(() => setShowTooltip(true), 1500);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (isOpen) setShowTooltip(false);
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now(), text: input.trim(), sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatWithMegaBot({ data: { message: userMsg.text } });
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: response.text || "", sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: "Communication error. Please try again.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Tooltip Bubble */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-2xl p-4 glass glow-border shadow-elevated cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--neon)]">
               <img src="/mascot.png" alt="Meg.AI Avatar" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs font-semibold uppercase tracking-wider text-[var(--neon)]">Online</span>
               <p className="text-base font-bold text-white">Chat with Meg.AI</p>
            </div>
            
            {/* Close button for tooltip */}
            <button 
              className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 border border-[var(--border)] hover:bg-[var(--neon)]"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
            >
              <X className="h-3 w-3" />
            </button>

            {/* little triangle pointer pointing down to the button */}
            <div className="absolute -bottom-2 right-5 h-4 w-4 rotate-45 border-b border-r border-white/10 bg-[#0f172a] shadow-elevated"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[var(--neon)] to-[var(--violet-glow)] text-white shadow-glow-strong transition-transform hover:scale-110 active:scale-95"
        whileHover={{ rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[450px] w-[350px] flex-col overflow-hidden rounded-2xl bg-[#030917] border border-[var(--border)] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[#0a1526] p-4">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--neon)]">
                <img src="/mascot.png" alt="Meg.AI Avatar" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white">Meg.AI Assistant</h3>
                <div className="flex items-center gap-1.5 text-xs text-[var(--neon)]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--neon)]" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-medium shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[var(--neon)] to-[#0ea5e9] text-white rounded-br-sm"
                        : "bg-[#f8fafc] text-[#0f172a] rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm bg-[#f8fafc] text-[#0f172a] rounded-bl-sm shadow-sm flex gap-1.5 items-center">
                    <span className="h-2 w-2 rounded-full bg-[#94a3b8] animate-bounce" />
                    <span className="h-2 w-2 rounded-full bg-[#94a3b8] animate-bounce [animation-delay:0.2s]" />
                    <span className="h-2 w-2 rounded-full bg-[#94a3b8] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-[var(--border)] bg-[#0a1526] p-3">
              <div className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 ring-1 ring-[var(--border)] focus-within:ring-[var(--neon)]">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-muted-foreground focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="text-[var(--neon)] transition-colors hover:text-white disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
