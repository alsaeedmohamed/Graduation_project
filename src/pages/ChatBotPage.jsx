/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function ChatBotPage() {
  // إدارة حالة الرسائل وحقل الإدخال
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // دالة الإرسال
  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // إضافة رسالة المستخدم
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // محاكاة رد من البوت (يمكن استبدال هذا بالاتصال بخادم)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: ' الapiانت لسا مركبتش  يذكي', sender: 'bot' },
        ]);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* منطقة الرسائل */}
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {messages.map((msg, index) => (
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

      {/* نموذج إدخال الرسائل */}
      <form onSubmit={handleSend} className="p-4 bg-white shadow-md">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here... "
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatBotPage;