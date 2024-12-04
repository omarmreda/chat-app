import React, { useState } from "react";
import "./App.css";
import { ChatProvider } from "./context/ChatContext";
import { motion } from "framer-motion";
import Header from "./components/Header";
import ChatInterface from "./components/ChatInterface";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
function App() {
  return (
    <ChatProvider>
      <Router>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen`}
          >
              <Header />
              <div className="bg-[#1b1b1b] mt-5 text-gray-900 dark:text-gray-100 min-h-screen">
              <Routes>
                <Route path="/" element={<ChatInterface />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </div>
          </motion.div>
        </motion.div>
      </Router>
    </ChatProvider>
  );
}

export default App;
