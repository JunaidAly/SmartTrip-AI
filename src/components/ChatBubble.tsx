import { motion } from "framer-motion"
import { Plane } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ChatMessage } from "@/lib/dummy-data"

interface ChatBubbleProps {
  message: ChatMessage
  isNew?: boolean
}

export default function ChatBubble({ message, isNew = false }: ChatBubbleProps) {
  const isUser = message.role === "user"

  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: 10, scale: 0.97 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex items-end gap-2.5",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
          <Plane className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
      )}

      {isUser && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center flex-shrink-0 shadow-md">
          <span className="text-white text-xs font-bold">You</span>
        </div>
      )}

      {/* Bubble */}
      <div
        className={cn(
          "max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm",
          isUser
            ? "bg-gradient-to-br from-indigo-600 to-blue-500 text-white rounded-br-sm shadow-indigo-200 dark:shadow-indigo-900"
            : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm"
        )}
      >
        {message.content}
        <div
          className={cn(
            "text-[10px] mt-1.5",
            isUser ? "text-indigo-200 text-right" : "text-gray-400"
          )}
        >
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </motion.div>
  )
}
