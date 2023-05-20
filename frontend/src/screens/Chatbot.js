import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './chat.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      const greeting = new SpeechSynthesisUtterance('Hello, dear client, can i help ?');
      greeting.lang = 'en-US';
      speechSynthesis.speak(greeting);
    }
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <button className="chatbot-toggle-button" onClick={closeChatbot}>
          <FaTimes />
        </button>
      ) : (
        <button className="chatbot-toggle-button" onClick={toggleChatbot}>
          Open Chatbot
        </button>
      )}
      {isOpen && (
        <div className="chatbot-widget">
          {/* Render the Dialogflow chatbot iframe here */}
          <iframe
            width="100%"
            height="100%"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/1555eb45-e274-44e8-a7c0-fd6515fd47cc"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
