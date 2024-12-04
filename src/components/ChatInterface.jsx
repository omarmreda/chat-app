import React from 'react'
import { motion } from 'framer-motion'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import UserList from './UserList'
import { useChat } from '../context/ChatContext'

export default function ChatInterface() {
  const { users } = useChat()

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <div className="md:col-span-3">
        <MessageList />
        <MessageInput />
      </div>
      <div className="md:col-span-1">
        <UserList users={users} />
      </div>
    </motion.div>
  )
}