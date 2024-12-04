import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useChat } from '../context/ChatContext'
import { User } from 'lucide-react'

export default function MessageList() {
  const { messages } = useChat()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#333] rounded-lg shadow-md p-4 h-[60vh] overflow-y-auto"
    >
      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4"
          >
            {message.sender === 'User' && (
              <div className="flex items-center mb-1">
                <User className="w-4 h-4 mr-2" />
                <span className="font-bold">You</span>
              </div>
            )}
            <div className="font-bold">{message.sender}</div>
            {message.type === 'text' && <p>{message.content}</p>}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

