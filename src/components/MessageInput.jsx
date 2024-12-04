import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuSendHorizontal } from "react-icons/lu";
import { FaRegImage } from "react-icons/fa";

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

  const handleImageUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = () => {
      const file = input.files[0]
      console.log(file)
    }
    input.click()
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className=""
    >
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 focus:outline-none bg-transparent text-white border-gray-600 border-b max-w-[calc(100%-3rem)]"
          placeholder="Type a message..."
          aria-label="Type a message"
        />
        <button
          type="button"
          className="bg-transparent text-white p-2 rounded-r-lg transition duration-200"
          onClick={handleImageUpload}
        >
          <FaRegImage className="w-4 h-4" />
        </button>
        <button
 
          type="submit"
          className="bg-transparent text-white p-2 rounded-r-lg transition duration-200"
        >
          <LuSendHorizontal className="w-4 h-4" />
        </button>
      </div>
    </motion.form>
  )
}

