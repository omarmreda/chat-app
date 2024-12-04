import React, { useState } from 'react'
import { motion } from 'framer-motion'
import UserList from './UserList'
import UserConversation from './UserConversation'
import { useChat } from '../context/ChatContext'

export default function ChatInterface() {
  const { users } = useChat()
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 h-[85vh] md:grid-cols-4 gap-4 bg-[#1b1b1b]"
    >
      <div className="md:col-span-3 h-full bg-[#1b1b1b]">
        {selectedUser ? (
          <UserConversation selectedUser={selectedUser} />
        ) : (
          <div className="text-center text-white flex flex-col items-center justify-center rounded-lg border border-gray-600 h-full">
            <img src={`${process.env.PUBLIC_URL}/chat-icon.png`} alt="Description" className="w-1/4" />
            <p className="text-lg font-bold">Select a user to start a conversation</p>
          </div>
        )}
      </div>
      <div className="md:col-span-1">
        <UserList onSelectUser={setSelectedUser} />
      </div>
    </motion.div>
  )
}