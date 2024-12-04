import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { useChat } from '../context/ChatContext'

export default function UserList({ onSelectUser }) {
  const { users, addUser } = useChat()
  const [newUserName, setNewUserName] = useState('')

  const handleAddUser = () => {
    if (newUserName.trim()) {
      addUser({ id: Date.now(), name: newUserName })
      setNewUserName('')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1b1b1b] border border-gray-600 rounded-lg shadow-md p-4 h-[85vh]" // Set height to full
    >
      <h2 className="text-xl font-bold mb-4 text-white">Users</h2>
      <div className="overflow-y-auto h-full"> {/* Set a fixed height for user list */}
        <ul>
          {users.map((user) => (
            <motion.li
              key={user.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center mb-2 cursor-pointer text-white"
              onClick={() => onSelectUser(user)}
            >
              <User className="w-6 h-6 mr-2 text-white" />
              {user.name}
            </motion.li>
          ))}
        </ul>
        <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Enter new user name"
        className="p-2 border-b border-white mb-2 focus:outline-none text-white bg-transparent"
      />
      <button onClick={handleAddUser} className="bg-transparent text-white p-2 rounded flex-end">
          Add User
        </button>
      </div>
    
    </motion.div>
  )
}