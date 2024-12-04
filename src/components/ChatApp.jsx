import React, { useState } from 'react';
import MessageInput from './MessageInput';

function ChatApp() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="chat-window p-4 bg-[#333] rounded-lg shadow-md">
      <div className="messages mb-4">
        {messages.map((message, index) => (
          <div key={index} className="message p-2 bg-white rounded mb-2 shadow">
            {message}
          </div>
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatApp; 