/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Paperclip, Send } from 'lucide-react';

function ChatBotPage() {
  const [user_input, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [user_input]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage, { text: '...', sender: 'bot', loading: true }]);
    setInput('');

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/storke/chat',
        { user_input: input },
        { withCredentials: true }
      );

      let botResponse = response.data.response;
      botResponse = botResponse.replace(/\\n/g, '\n');

      setMessages((prev) => [
        ...prev.filter((msg) => !msg.loading),
        { text: botResponse, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error sending message to API:', error);
      setMessages((prev) => [
        ...prev.filter((msg) => !msg.loading),
        { text: 'Error: Could not connect to the server', sender: 'bot' },
      ]);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setMessages((prev) => [
      ...prev,
      { text: `📄 Uploaded: ${file.name}`, sender: 'user' },
    ]);

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/storke/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      const result = response.data;

      setMessages((prev) => [
        ...prev,
        { text: `✅ File processed: ${result}`, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Upload error:', error);
      setMessages((prev) => [
        ...prev,
        { text: '❌ Failed to upload file.', sender: 'bot' },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 relative">

      {/* Welcome message overlay */}
      {user_input.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <h1 className="text-2xl sm:text-3xl font-semibold text-blue-500 text-center">
            Hi, how can I help you?
          </h1>
        </div>
      )}

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-32 z-0">
        {user_input.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.sender === 'user'
                ? 'ml-auto w-fit max-w-[90%] sm:max-w-[80%] bg-blue-500 text-white rounded-2xl rounded-br-none shadow-md p-3 text-left text-base'
                : 'w-full bg-gray-200 text-gray-900 rounded-2xl rounded-bl-none shadow-sm p-4 text-left text-lg font-medium'
            } whitespace-pre-wrap overflow-x-auto`}
          >
            {msg.sender === 'bot' ? (
              msg.loading ? (
                '⌛ Thinking...'
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto">
                        <table
                          className="table-auto border-collapse border border-gray-400 w-full text-sm"
                          {...props}
                        />
                      </div>
                    ),
                    th: ({ node, ...props }) => (
                      <th
                        className="border border-gray-400 bg-gray-300 px-4 py-2 text-left"
                        {...props}
                      />
                    ),
                    td: ({ node, ...props }) => (
                      <td
                        className="border border-gray-400 px-4 py-2"
                        {...props}
                      />
                    ),
                    tr: ({ node, ...props }) => (
                      <tr className="odd:bg-white even:bg-gray-100" {...props} />
                    ),
                  }}
                >
                  {msg.text}
                </ReactMarkdown>
              )
            ) : (
              msg.text
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input + File Upload + Send */}
      <form onSubmit={handleSend} className="sticky bottom-4 bg-white px-4 py-3 z-20">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
          >
            <Paperclip size={20} className="text-gray-600" />
          </button>
          <input
            type="file"
            accept=".pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatBotPage;
