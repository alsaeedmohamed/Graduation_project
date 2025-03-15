/* eslint-disable no-unused-vars */
import React from "react";
import { FaRobot, FaUser } from "react-icons/fa";

const Chatbot = () => {
  return (
    <div className="flex flex-1 bg-[#ECF8FF] min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 shadow-md rounded-md h-[90vh] m-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-700">
          <FaRobot className="text-gray-600 mr-2" /> Chatbot
        </h2>

        {/* Buttons */}
        <button className="w-full py-2 mb-2 bg-[#0C7489] text-white rounded-md text-left px-4 font-semibold ">
          New Chat
        </button>
        <button className="w-full py-2 mb-2 bg-gray-300 text-gray-800 rounded-md text-left px-4 font-semibold">
          Recent Chats
        </button>

        {/* Chat History */}
        <div className="mt-4 space-y-2">
          <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md text-left shadow-sm">
            Brain Stroke...
          </button>
          <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md text-left shadow-sm">
            How to save...
          </button>
          <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md text-left shadow-sm">
            The dangers of...
          </button>
        </div>

        {/* User Info */}
        <div className="mt-6 bg-[#D6E9FF] p-3 rounded-md flex items-center shadow-sm">
          <FaUser className="text-[#007bff] w-10 h-10 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Welcome back,</p>
            <p className="font-semibold text-black">Mohamed Ali</p>
          </div>
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 p-6 flex flex-col justify-end">
        {/* Chat Messages - تم إنزالهم لأسفل وتكبير الحجم */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-60 border border-gray-300 text-lg font-medium">
            Can you help me, please?
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-60 border border-gray-300 text-lg font-medium">
            Can you help me, please?
          </div>
        </div>

        {/* Input Field - أسفل الشاشة */}
        <div className="w-full max-w-2xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Type a new message here..."
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
