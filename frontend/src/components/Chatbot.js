import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaCat, FaTimes, FaSyncAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (question.trim()) {
      const newMessage = { text: question, sender: 'user' };
      setMessages([...messages, newMessage]);
      setQuestion('');
      setLoading(true);

      try {
        const res = await axios.post('https://dominikhommer-38eb5eaaef1a.herokuapp.com/ask', { question });
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: res.data.answer, sender: 'bot' }
        ]);
      } catch (error) {
        console.error('Error fetching response:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClearConversation = async () => {
    try {
      await axios.post('https://dominikhommer-38eb5eaaef1a.herokuapp.com/reset');
      setMessages([]);
    } catch (error) {
      console.error('Error resetting chat history:', error);
    }
  };

  return (
    <div>
      <div className="chatbot-container">
        <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
          <FaCat size={30} color="white" />
        </div>
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <FaTimes className="close-chat" onClick={() => setIsOpen(false)} />
          <div className="chatbot-header">Hello! I'm Dominik's AI assistant. Feel free to ask me anything about his projects, skills, and more!</div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message-bubble ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="loading-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input-area">
            <div className="chatbot-refresh" onClick={handleClearConversation}>
              <FaSyncAlt size={20} />
              <span className="tooltip">Reset Conversation</span>
            </div>

            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="chatbot-input"
            />

            <button type="submit" className="chatbot-button">
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;












