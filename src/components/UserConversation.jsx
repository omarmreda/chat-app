import React from 'react'
import { motion } from 'framer-motion'
import { useChat } from '../context/ChatContext'
import MessageInput from './MessageInput'

export default function UserConversation({ selectedUser }) {
  const { messages, addMessage } = useChat()

  const userMessages = messages.filter(
    (message) => message.sender === selectedUser.name
  )

  const handleAddMessage = (content) => {
    addMessage({
      id: Date.now().toString(),
      sender: selectedUser.name,
      content,
      type: 'text',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1b1b1b] border border-gray-600 rounded-lg shadow-md p-4 h-full"
    >
      <h2 className="text-xl font-bold mb-4 text-white">{selectedUser.name}'s Conversation</h2>
      <div className="overflow-y-auto h-full flex flex-col">
        <ul>
          {userMessages.map((message) => (
            <li key={message.id} className="mb-2">
              {message.content}
            </li>
          ))}
        </ul>
        <MessageInput onSendMessage={handleAddMessage} />
      </div>
    </motion.div>
  )
} 