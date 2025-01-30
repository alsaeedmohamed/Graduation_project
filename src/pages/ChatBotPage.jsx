// eslint-disable-next-line no-unused-vars
import React from 'react';

const ChatBotPage = () => {
  return (
    <div className="flex h-screen bg-gray-100 p-4">
      {/* Chatbot Section - على اليسار */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-md mr-4">
        <h2 className="text-xl font-semibold mb-4">Chatbot</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">New Chat</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Recent Chat</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Brain Stroke...</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">How to save...</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">The dangers of...</a></li>
        </ul>
      </div>

 {/* Message Section - على اليمين */}
<div className="flex-1 flex flex-col bg-white rounded-lg shadow-md">
  {/* عنوان الرسائل */}
  <h2 className="text-xl font-semibold p-4 border-b">Can you help me, please?</h2>

  {/* منطقة الرسائل مع تمكين التمرير */}
  <div className="flex-1 overflow-y-auto p-4 space-y-4">
    {/* رسالة المستخدم */}
    <div className="flex justify-end">
      <div className="bg-blue-100 p-3 rounded-lg max-w-[70%]">
        <p className="text-gray-800">Can you help me, please?</p>
        <span className="text-xs text-gray-500 mt-1 block">3 Monthsold All - 10:30 AM</span>
      </div>
    </div>

    {/* رد البوت */}
    <div className="flex justify-start">
      <div className="bg-gray-100 p-3 rounded-lg max-w-[70%]">
        <p className="text-gray-800"><strong>NEXT TIME</strong></p>
        <p className="text-gray-800"><strong>Mohamed All</strong></p>
        <span className="text-xs text-gray-500 mt-1 block">Neuro Guard - 10:31 AM</span>
      </div>
    </div>
  </div>

  {/* حقل الإدخال الثابت في الأسفل */}
  <div className="p-4 border-t">
    <input
      type="text"
      placeholder="Type a new message here..."
      className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>

<div className="flex justify-end p-4">
      </div>
    </div>
  );
};

export default ChatBotPage;