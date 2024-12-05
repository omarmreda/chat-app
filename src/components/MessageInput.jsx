import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuSendHorizontal } from "react-icons/lu";
import { FaRegImage } from "react-icons/fa";

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() || image) {
      onSendMessage({
        id: Date.now().toString(),
        sender: 'User',
        content: message,
        image: image,
        type: image ? 'image' : 'text',
      })
      setMessage('')
      setImage(null)
      setImagePreview(null)
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="mt-auto relative"
    >
      <div className="flex flex-col">
      {imagePreview && (
          <div className="absolute bottom-10 left-0 right-0 bg-[#1b1b1b] p-2 z-20">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-[58vh] w-auto mx-auto"
            />
          </div>
        )}
        <div className="flex">
      
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 focus:outline-none bg-transparent text-white border-gray-600 border-b"
            placeholder="Type a message..."
            aria-label="Type a message"
          />
          <label htmlFor="image-upload" className="p-2 text-white cursor-pointer">
            <FaRegImage className="w-4 h-4" />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-transparent text-white p-2 rounded-r-lg hover:bg-blue-600 transition duration-200"
          >
            <LuSendHorizontal className='w-4 h-4'/>
          </motion.button>
        </div>
      </div>
    </motion.form>
  )
}

