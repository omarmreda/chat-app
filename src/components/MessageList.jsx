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
      className="bg-[#333] rounded-lg shadow-md p-4 h-[60vh] overflow-y-auto text-white"
    >
      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 !text-white"
          >
              <div className="flex items-center mb-1 !text-white">
                <User className="w-4 h-4 mr-2 !text-white" />
                <span className="font-bold !text-white">You</span>
              </div>
     
            <p className="!text-white">{message.content}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

