// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from '../images/profile.svg';
import ring from '../images/ring.svg';
import search from '../images/search.svg';
import settings from '../images/settings.svg';
import contact from '../images/contact.svg';
import moon from '../images/moon.svg';
import about from '../images/about.svg';
import account from '../images/account.svg';
import world from '../images/world.svg';
import nonotification from '../images/nonotification.svg';
import{ useState } from 'react';

function Contact() {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!email.trim() || !validateEmail(email)) {
      newErrors.email = "Please input a valid email. This email is invalid.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
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
          <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1  flex items-center justify-center">
        <div className="text-center px-4 font-poppins">
          {/* Image */}
          <h3 className="text-2xl font-bold text-gray-9 00 mt-6 text-left">
          Get in touch         </h3>
          <p className="text-gray-600 text-left mb-5 ">We are here for you! How can we help?</p>
          <img
            src={contact} 
            width={400}
            height={400}  
            className=""
            />
        </div>
        </div>

      {/* Right Section - Form */}
      <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-md w-[600px] mr-[50px]">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
        <p className="text-gray-500 text-center mb-6">
        We are here for you! How can we help?        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-left">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Example"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-left">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-left">Message</label>
            <textarea
              className="w-full p-2 border rounded h-24"
              placeholder="Lorem ipsum dolor sit amet consectetur. Sed nulla tellus"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
         
          </div>
          
         
       
    
      );
}

export default Contact;