// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from '../images/profile.svg';
import ring from '../images/ring.svg';
import search from '../images/search.svg';
import settings from '../images/settings.svg';
import patient from '../images/patient1.svg';
import moon from '../images/moon.svg';
import about from '../images/about.svg';
import account from '../images/account.svg';
import world from '../images/world.svg';
import nonotification from '../images/nonotification.svg';
import{ useState } from 'react';
import { useNavigate } from "react-router-dom";
function PatientDetails() {
    const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const times = ["10:00 AM", "11:00 AM", "12:00 PM"];
  const dates = ["Sun 4", "Mon 5", "Tue 6"];

  const handleNavigate = () => {
    navigate("/src/pages/patientReport.jsx"); // استبدلي "/confirmation" بالمسار المطلوب
  };
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
          <div className=" min-h-screen flex justify-center items-center ">
      <div className="  rounded-lg flex items-start max-w-4xl p-6">
        {/* صورة الطبيب */}
        <div className=" flex justify-center">
          <img
            src={patient} // 
            alt=" Alaa"
            className="w-1/3 w-full rounded-lg object-cover"
          />
        </div>

        {/* بيانات الطبيب */}
        <div className="w-2/3 pl-6 font-poppins mt-5">
          <h2 className="text-2xl font-bold text-gray-800 text-left">Mohamed Ahmed </h2>

          {/* الدفع */}
          <div className="flex items-center mt-2">
            <span className="text-[#0C7489] text-lg font-bold mr-6 text-left">
              patient
            </span>
          </div>

          
          {/* التفاصيل */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">Details</h3>
            <p className="text-gray-400 text-sm leading-relaxed text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>
        </div>
      </div>
    </div>
      {/* Working Hours Section */}
    <div className="flex flex-col items-center py-10 px-5">
    <div className="w-full pr-[40px] pl-[40px] ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800  ">Appointment</h2>
          <button className="text-[#0C7489] text-sm font-medium">See all</button>
        </div>
        <div className="flex gap-4  ">
          {times.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                selectedTime === time
                  ? "bg-[#0C7489] text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Date Section */}
      <div className="w-full mt-6 pr-[40px] pl-[40px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Date</h2>
          <button className="text-[#0C7489] text-sm font-medium">See all</button>
        </div>
        <div className="flex gap-4">
          {dates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`flex-1 w-[500px] py-2 rounded-lg text-sm font-medium ${
                selectedDate === date
                  ? "bg-[#0C7489] text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              {date}
            </button>
          ))}
        </div>
        <button
        onClick={handleNavigate}
        className="mt-8 w-full bg-[#0C7489] h-[59px] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"
      >
        View Patient's Report
      </button>
      </div>

      {/* Book Appointment Button */}
      
    </div>
        
          
         </div> 
       
    
      );
}

export default PatientDetails;