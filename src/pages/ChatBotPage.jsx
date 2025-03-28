/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios'; 

function ChatBotPage() {
  // Manage state for messages and input field
  const [user_input, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to send message to the API
  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user's message to the chat
      const userMessage = { text: input, sender: 'user' };
      setMessages([...user_input, userMessage]);
      setInput(''); // Clear input field

      try {
        // Send the message to the API
        const response = await axios.post('http://localhost:4000/api/v1/storke/chat', {
          user_input: input, // Send the input as 'message' field (adjust based on API requirements)
          },
          {withCredentials: true,}  );

        // Assuming the API returns the bot's reply in a field called 'response'
        const botMessage = { text: response.data.response, sender: 'bot' };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error('Error sending message to API:', error);
        // Optional: Display an error message in the chat
        setMessages((prev) => [
          ...prev,
          { text: 'Error: Could not connect to the server', sender: 'bot' },
        ]);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {user_input.map((msg, index) => (
            <li
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white ml-auto'
                  : 'bg-gray-300 text-black mr-auto'
              }`}
            >
              {msg.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Message input form */}
      <form onSubmit={handleSend} className="p-4 bg-white shadow-md">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatBotPage;