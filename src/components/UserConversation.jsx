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
    console.log(messages)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1b1b1b] border border-gray-600 rounded-lg shadow-md p-4 h-full"
    >
      <div className="flex items-center gap-2 border-b border-gray-600 pb-2">
        <div className="w-12 h-12 mr-2 bg-cover bg-center rounded-full">
          <img src={selectedUser.img} alt={selectedUser.name} className="w-full h-full object-cover rounded-full" />
        </div>
        <h2 className="text-xl font-bold text-white">{selectedUser.name}</h2>
      </div>
      <div className="overflow-y-auto h-full flex flex-col">
        <ul>
          {userMessages.map((message) => (
            <li key={message.id} className="mb-2">
              {message.content} {/* Ensure this is a string */}
            </li>
          ))}
        </ul>
        <MessageInput onSendMessage={handleAddMessage} />
      </div>
    </motion.div>
  )
}