import React, { createContext, useState, useContext, ReactNode } from 'react'

const ChatContext = createContext(undefined)

export const ChatProvider= ({ children }) => {
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([
    { id: 1, name: 'Ahmed', img: `/ahmed.jpg` },
    { id: 2, name: 'Mohamed', img: `/mohamed.jpg` },
    { id: 3, name: 'Nada', img: `/nada.jpg` },
  ])

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user])
  }

  return (
    <ChatContext.Provider value={{ messages, users, addMessage, addUser }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

