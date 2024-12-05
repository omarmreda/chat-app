import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className="bg-[#1b1b1b] border-b border-gray-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <Link
          to="/"
          className="text-2xl font-bold text-black dark:text-blue-400 flex items-center gap-2"
        >
          <img src="https://corporatica.com/_next/static/media/Logo.f6bc9642.svg" alt="Corporatica Chat" />
        </Link>
        <Link
          to="/account"
          className="p-2 rounded-md font-bold text-white hover:underline bg-transparent dark:bg-gray-700"
        >
          Account
        </Link>
      </div>
    </header>
  )
}

