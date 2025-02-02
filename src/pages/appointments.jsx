// eslint-disable-next-line no-unused-vars
import React from "react";
import doctorprofile from '../images/doctorprofile.svg';
import ring from '../images/ring.svg';
import search from '../images/search.svg';
import settings from '../images/settings.svg';
import moon from '../images/moon.svg';
import about from '../images/about.svg';
import account from '../images/account.svg';
import world from '../images/world.svg';
import nonotification from '../images/nonotification.svg';
import{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import patient1 from '../images/patient1.svg'
function Appointments() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotficationsOpen, setIsNotficationsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/src/pages/patientDetails.jsx"); // استبدلي "/appointment" بالمسار الذي تريدين التوجيه إليه
  };
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
        <img src={nonotification} alt=""  className="p-10"/>
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
          <div className=" py-10 px-5">
      <h2 className="text-center text-2xl font-bold mb-6">
      Review appointments and confirm bookings seamlessly and efficiently
      </h2>
      <div className="flex justify-center items-center gap-6 ">
      <div className="bg-white shadow-md rounded-lg flex items-center  max-w-lg">
       
        <img
          src={patient1} 
          alt="patient"
          className="w-[177px] h-[323px]  object-cover mr-4"
        />

        {/* بيانات الطبيب */}
        <div className="flex-1 mr-5 font-poppins">
          <h3 className="text-lg font-poppins font-bold text-gray-800 text-left"> Hesham Ali</h3>
          <p className="text-sm text-gray-500 text-left">Patient</p>

          {/* التقييم والوقت */}
          <div className="flex items-center text-gray-600 text-sm mt-2">
            
            <div className="flex items-center">
              <span className="material-icons mr-1">schedule</span> {/* أيقونة الساعة */}
              <span>10:30am – 5:30pm</span>
            </div>
          </div>

          {/* زر الحجز */}
          <button
            onClick={handleNavigate}
            className="font-poppins bg-[#0C7489] w-full text-white px-4 py-2 rounded mt-4 hover:bg-[#065a67] transition duration-300"
          >
            Book Appointment
          </button>
        </div>
        
      </div>
      <div className="bg-white shadow-md rounded-lg flex items-center  max-w-lg">
       
        <img
          src={patient1} 
          alt="patient"
          className="w-[177px] h-[323px]  object-cover mr-4"
        />

        {/* بيانات الطبيب */}
        <div className="flex-1 mr-5 font-poppins">
          <h3 className="text-lg font-poppins font-bold text-gray-800 text-left">kareem Soltan</h3>
          <p className="text-sm text-gray-500 text-left">Patient</p>

          {/* التقييم والوقت */}
          <div className="flex items-center text-gray-600 text-sm mt-2">
           
            <div className="flex items-center">
              <span className="material-icons mr-1">schedule</span> {/* أيقونة الساعة */}
              <span>10:30am – 5:30pm</span>
            </div>
          </div>

          {/* زر الحجز */}
          <button
            onClick={handleNavigate}
            className="font-poppins bg-[#0C7489] w-full text-white px-4 py-2 rounded mt-4 hover:bg-[#065a67] transition duration-300"
          >
            View Appointment
          </button>
        </div>
        
      </div>
      </div>
      
    </div>
         
          </div>
          
         
       
    
      );
}

export default Appointments;