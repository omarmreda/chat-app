import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'



export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Corporatica Chat
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </motion.button>
      </div>
    </header>
  )
}

