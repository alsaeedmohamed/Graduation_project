// eslint-disable-next-line no-unused-vars
import React from "react";
import doctorprofile from '../../images/doctorprofile.svg';
import ring from '../../images/ring.svg';
import search from '../../images/search.svg';
import settings from '../../images/settings.svg';
import xray from '../../images/xray.svg';
import moon from '../../images/moon.svg';
import about from '../../images/about.svg';
import account from '../../images/account.svg';
import world from '../../images/world.svg';
import nonotification from '../../images/nonotification.svg';
import{ useState } from 'react';
import {  useNavigate } from "react-router-dom";


function PatientReport() {
      const navigate =useNavigate();
    
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotficationsOpen, setIsNotficationsOpen] = useState(false);

  // فتح أو إغلاق قائمة الإعدادات
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  const toggleNotfications = () => {
    setIsNotficationsOpen(!isNotficationsOpen);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  // تبديل وضع الـ Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    return (
        <div>
        <div className="flex items-center justify-between px-4 bg-white  h-[110px]">
          {/* Logo */}
          <h1 className="text-[#0c7489] font-poppins font-normal text-[25px] leading-[37.5px]">Protect your mind, smarty</h1>
    
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-[#F1FDFF] p-2 rounded-lg w-209px h-62px borradios ">
          <img
              src={search} // 
              alt="Search Icon"
              className="w-5 h-5 ml-[20px]"
            />
            <input
              type="text"
              placeholder="Search for something"
              className="bg-transparent outline-none text-sm flex-grow"
            />
            
          </div>
    
          {/* Icons */}
          <div className="flex items-center gap-4">
            
            <div className="relative">
          <img
            src={settings}
            alt="Settings Icon"
            className="w-[62px] h-[62px] cursor-pointer"
            onClick={toggleSettings}
          />

          {/* القائمة */}
          {isSettingsOpen && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-30 z-9"
                onClick={toggleSettings}
              ></div>
              
              {/* قائمة الإعدادات */}
              <div className="absolute top-[80px] right-0">
                <div className="relative">
                  {/* السهم العلوي */}
                  
                  <div className="absolute -top-4 right-5 w-8 h-8 bg-white transform rotate-45  border-l-[2px] border-t-[2px] border-[#0c7489]"></div>
                  <div className="w-[468px] h-[550px] bg-white rounded-lg shadow-lg p-6 space-y-6 border-[2px] border-[#0c7489]">
        {/* عنوان الإعدادات */}
        <h1 className="text-center text-lg font-bold">Settings</h1>

        {/* Interface */}
        <div>
          <span className="text-sm font-bold block mb-2 text-left">Interface</span>
          <div className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white">
            {/* أيقونة القمر */}
            <img src={moon} alt="Moon Icon" className="w-6 h-6" />
            {/* النص */}
            <span className="text-base">Dark mode</span>
            {/* زر التبديل */}
            <label className="relative inline-flex items-center cursor-pointer ml-auto">
              <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0c7489]"></div>
            </label>
          </div>
        </div>

        {/* Language & Region */}
        <div>
          <span className="text-sm font-bold block mb-2 text-left">Language & region</span>
          <div className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white">
            {/* أيقونة العالم */}
            <img src={world} alt="Globe Icon" className="w-6 h-6" />
            {/* النص */}
            <span className="text-base">English (US)</span>
            {/* السهم */}
            <span className="ml-auto text-gray-400">&gt;</span>
          </div>
        </div>

        {/* Support */}
        <div>
          <span className="text-sm font-bold block mb-2 text-left">Support</span>
          <div className="space-y-4">
            {/* About us */}
            <div className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white">
              {/* أيقونة المعلومات */}
              <img src={about} alt="Info Icon" className="w-6 h-6" />
              <span className="text-base ">About us</span>
            </div>
            {/* Delete account */}
            <div className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white">
              {/* أيقونة الحذف */}
              <img src={account} alt="Delete Icon" className="w-6 h-6" />
              <span className="text-base text-red-500">Delete account</span>
            </div>
          </div>
        </div>
      </div>
                </div>
              </div>
            </>
          )}
        </div>
            <img
              src={ring} // 
              alt="Notification Icon"
              className="w-[62px] h-[62px] cursor-pointer" 
              onClick={toggleNotfications}
            />
            {isNotficationsOpen && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-30 z-9"
                onClick={toggleNotfications}
              ></div>
              
              {/* قائمة الإعدادات */}
              <div className="absolute top-[210px] right-[130px]">
                <div className="relative">
                  {/* السهم العلوي */}
                  
                  <div className="absolute -top-4 right-5 w-8 h-8 bg-white transform rotate-45  border-l-[2px] border-t-[2px] border-[#0c7489]"></div>
                  <div className="w-[468px] h-[550px] bg-white rounded-lg shadow-lg p-6 space-y-6 border-[2px] border-[#0c7489]">
        {/* عنوان الإعدادات */}
        <img src={nonotification} alt=""  className="w-full "/>
        {/* <h1 className="text-center text-lg font-bold">Settings</h1> */}

        

       
      </div>
                </div>
              </div>
            </>
          )}
            <img
              src={doctorprofile} //
              alt="Profile Icon"
              className="w-[62px] h-[62px] rounded-full"
            />
          </div>
          </div>
          <div className=" min-h-screen py-10 px-6">
      {/* Patient Details Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-teal-800">Patient Details</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>Name: <span className="font-medium">Ahmed</span></div>
          <div>Phone No: <span className="font-medium">7500190739</span></div>
          <div>Age: <span className="font-medium">32 years</span></div>
          <div>Address: <span className="font-medium">Lorem ipsum dolor sit</span></div>
          <div>Gender: <span className="font-medium">Male</span></div>
          <div>Medical History: <span className="font-medium">No</span></div>
        </div>
      </div>

      {/* X-Rays Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-teal-800 ">X-Rays</h2>
        <div className="flex gap-4 flex-wrap ml-[50px]">
          {/* Static X-Ray Images */}
          <img
            src={xray}
            alt="X-Ray 1"
            className="w-[300px] h-[300px] rounded-lg object-cover border"
          />
          <img
            src={xray}
            alt="X-Ray 2"
            className="w-[300px] h-[300px]  rounded-lg object-cover border"
          />
          <img
            src={xray}
            alt="X-Ray 3"
            className="w-[300px] h-[300px]  rounded-lg object-cover border"
          />
        </div>
      </div>

      {/* Chatbot Report Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-teal-800">Chatbot Report</h2>
        <p className="text-gray-700 text-left">
          Thank you for using our service. Based on the uploaded tests, here is
          a summary:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-4">
          <li className="text-gray-700 text-left">Cholesterol Level: Elevated (220 mg/dL)</li>
          <li className="text-gray-700 text-left">Blood Pressure: Normal (120/80)</li>
          <li className="text-gray-700 text-left">Blood Sugar: Slightly above normal (110 mg/dL fasting)</li>
        </ul>
      </div>

      {/* Prediction Results Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 text-teal-800">
          Prediction Results
        </h2>
        <p className="text-gray-700">
          High Risk of stroke. Probability:{" "}
          <span className="text-red-600 font-bold">54.72%</span>
        </p>
      </div>
    </div>
         
          </div>
          
         
       
    
      );
}

export default PatientReport;
