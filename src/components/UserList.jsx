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
      className="bg-[#1b1b1b] border border-gray-600 rounded-lg shadow-md p-4 h-[85vh]" 
    >
      <div className="flex items-center mb-4 justify-between">
        <h2 className="text-xl font-bold text-white">Users</h2>
        <button className="bg-transparent text-white font-bold text-xl rounded" onClick={handleAddUser}>+</button>
      </div>
      <div className="overflow-y-auto h-full"> 
        <ul>
          {users.map((user) => (
            <motion.li
              key={user.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center mb-4 cursor-pointer text-white"
              onClick={() => onSelectUser(user)}
            >
              <div className="w-12 h-12 mr-2 bg-cover bg-center rounded-full">
                <img src={user.img} alt={user.name} className="w-full h-full object-cover rounded-full" />
              </div>
              {user.name}
            </motion.li>
          ))}
        </ul>
      </div>
    
    </motion.div>
  )
}