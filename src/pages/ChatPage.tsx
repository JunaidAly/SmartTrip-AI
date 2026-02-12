import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Send,
  Plane,
  Sparkles,
  MapPin,
  Wallet,
  Shield,
  Backpack,
  RefreshCw,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ChatBubble from "@/components/ChatBubble"
import { initialChatMessages, mockChatResponses, type ChatMessage } from "@/lib/dummy-data"
import { cn } from "@/lib/utils"

const quickPrompts = [
  { icon: MapPin, text: "Best time to visit Hunza?", key: "best_time" },
  { icon: Wallet, text: "What's my budget estimate?", key: "budget" },
  { icon: Shield, text: "Safety tips for solo travel", key: "safety" },
  { icon: Backpack, text: "What should I pack?", key: "packing" },
]

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
        <Plane className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1.5 items-center h-5">
          {[0, 0.2, 0.4].map((delay) => (
            <motion.div
              key={delay}
              className="w-2 h-2 bg-indigo-400 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function getAIResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes("budget") || lower.includes("cost") || lower.includes("price") || lower.includes("cheap")) {
    return mockChatResponses.budget
  }
  if (lower.includes("safe") || lower.includes("danger") || lower.includes("risk") || lower.includes("solo")) {
    return mockChatResponses.safety
  }
  if (lower.includes("time") || lower.includes("when") || lower.includes("season") || lower.includes("month")) {
    return mockChatResponses.best_time
  }
  if (lower.includes("pack") || lower.includes("carry") || lower.includes("bring") || lower.includes("luggage")) {
    return mockChatResponses.packing
  }
  return mockChatResponses.default
}

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [newMessageIds, setNewMessageIds] = useState<Set<string>>(new Set())
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText || isTyping) return

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setNewMessageIds((prev) => new Set([...prev, userMsg.id]))
    setInput("")
    setIsTyping(true)

    // Simulate AI response delay
    await new Promise((r) => setTimeout(r, 1200 + Math.random() * 800))

    const aiResponse = getAIResponse(messageText)
    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: "ai",
      content: aiResponse,
      timestamp: new Date(),
    }

    setIsTyping(false)
    setMessages((prev) => [...prev, aiMsg])
    setNewMessageIds((prev) => new Set([...prev, aiMsg.id]))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    setMessages(initialChatMessages)
    setNewMessageIds(new Set())
    setInput("")
    inputRef.current?.focus()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/40 to-white flex flex-col pt-20">
      {/* Fixed Header */}
      <div className="border-b border-gray-100 bg-white/80 backdrop-blur-lg sticky top-16 z-40">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-200">
              <Plane className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-sm leading-none">SmartTrip AI</h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500">Online • Travel Expert</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={clearChat}
              className="text-gray-400 hover:text-gray-600 gap-1.5 text-xs"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Clear
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
        {/* Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Travel Assistant
          </div>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            Ask anything about travel planning, destinations, safety, budgets, and more.
          </p>
        </motion.div>

        {/* Messages */}
        <div className="space-y-4 mb-6">
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              message={msg}
              isNew={newMessageIds.has(msg.id)}
            />
          ))}

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
              >
                <TypingIndicator />
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <AnimatePresence>
          {messages.length <= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-2 mb-6"
            >
              {quickPrompts.map((prompt, i) => (
                <motion.button
                  key={prompt.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => sendMessage(prompt.text)}
                  className="flex items-center gap-2.5 p-3 bg-white border border-gray-100 rounded-2xl text-sm text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all duration-200 text-left group shadow-sm"
                >
                  <div className="w-7 h-7 bg-indigo-50 group-hover:bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <prompt.icon className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium flex-1">{prompt.text}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area — Sticky Bottom */}
      <div className="sticky bottom-0 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-2 bg-white border border-gray-200 rounded-2xl p-2 shadow-lg shadow-gray-100/50 focus-within:border-indigo-300 focus-within:shadow-indigo-50/50 transition-all duration-200">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about destinations, budget, safety..."
              className="flex-1 bg-transparent px-2 py-1.5 text-sm text-gray-800 placeholder-gray-400 outline-none resize-none"
              disabled={isTyping}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200",
                input.trim() && !isTyping
                  ? "bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-lg shadow-indigo-200 hover:shadow-xl"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            SmartTrip AI may make mistakes. Verify important travel information.
          </p>
        </div>
      </div>
    </div>
  )
}
