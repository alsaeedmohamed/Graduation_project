// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from '../images/profile.svg';
import ring from '../images/ring.svg';
import search from '../images/search.svg';
import settings from '../images/settings.svg';
import moon from '../images/moon.svg';
import about from '../images/about.svg';
import account from '../images/account.svg';
import world from '../images/world.svg';
import nonotification from '../images/nonotification.svg';
import{ useState } from 'react';
import {  useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Scan = ({ setUploadedImage }) => {
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
    const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(imageUrl);
      setUploadedImage(imageUrl);
    }
  };

  const handleScan = () => {
    if (selectedFile) {
      navigate("/src/pages/scaning.jsx");
    }
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
        <img src={nonotification} alt=""  className="p-10"/>
        {/* <h1 className="text-center text-lg font-bold">Settings</h1> */}
        </div>
                </div>
              </div>
            </>
          )}
            <img
              src={profile} //
              alt="Profile Icon"
              className="w-[62px] h-[62px] rounded-full"
            />
          </div>
          </div>
          

      {/* File Input */}
      

      {/* Scan Button */}
      
    {/* </div> */} 
    <div className="flex flex-col items-center p-4">
      {/* Drag and Drop Box */}
      <div className="w-[780px] h-[440px] border-2 border-dotted border-[#0c7489] rounded-[24px] flex justify-center items-center text-gray-500">
        {selectedFile ? (
          <img
            src={selectedFile}
            alt="Preview"
            className="w-full h-full object-contain"
          />
        ) : (
          <p>Drag & Drop or select files from device</p>
        )}
      </div>

      <div className="mt-4">
  <label
    htmlFor="file-upload"
    className="inline-flex items-center justify-center font-medium px-6 py-3 bg-[#0c7489] w-[780px] h-[72px] text-white rounded-lg cursor-pointer hover:bg-teal-700"
  >
    Choose File
  </label>
  <input
    id="file-upload"
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    className="hidden"
  />
</div>
{/* Enhancer Button */}
<div className="mt-6">
<button
    className="inline-flex items-center justify-center font-medium px-6 py-3 bg-[#0c7489] w-[780px] h-[72px] text-white rounded-lg cursor-pointer hover:bg-teal-700"
  >
    Enhancer
  </button>
  </div>
      {/* Scan Button */}
      <button
        onClick={handleScan}
        className="bg-[#0c7489] font-medium  text-white w-[780px] h-[72px] mt-6 py-2 rounded cursor-pointer hover:bg-teal-700"
        disabled={!selectedFile}
      >
        Scan
      </button>
    </div>
          </div>
    );
  };
  
  export default Scan;