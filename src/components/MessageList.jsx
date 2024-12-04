import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useChat } from '../context/ChatContext'
import DataVisualization from './DataVisualization'

export default function MessageList() {
  const { messages } = useChat()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-[60vh] overflow-y-auto"
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
            <div className="font-bold">{message.sender}</div>
            {message.type === 'text' && <p>{message.content}</p>}
            {message.type !== 'text' && (
              <DataVisualization type={message.type} data={message.data} />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

