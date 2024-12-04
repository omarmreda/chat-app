import React from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'



export default function UserList({ users }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
    >
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul>
        {users.map((user) => (
          <motion.li
            key={user.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center mb-2"
          >
            <User className="w-6 h-6 mr-2" />
            {user.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

