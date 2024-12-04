import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
    console.log(message)
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="mt-auto mb-10"
    >
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 focus:outline-none bg-transparent text-white border-gray-600 border-b"
          placeholder="Type a message..."
          aria-label="Type a message"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-transparent text-white p-2 rounded-r-lg hover:bg-blue-600 transition duration-200"
        >
          Send
        </motion.button>
      </div>
    </motion.form>
  )
}

