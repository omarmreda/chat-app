import React, { useState } from 'react';
import './App.css';
import { ChatProvider } from './context/ChatContext';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ChatProvider>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}
    >
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="container mx-auto p-4">
          <ChatInterface />
        </main>
      </div>
    </motion.div>
  </ChatProvider>
  );
}

export default App;
