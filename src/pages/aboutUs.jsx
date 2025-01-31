// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from '../images/profile.svg';
import ring from '../images/ring.svg';
import search from '../images/search.svg';
import settings from '../images/settings.svg';
import aboutus from '../images/aboutus.svg';
import aboutus2 from '../images/aboutus2.svg';
import moon from '../images/moon.svg';
import about from '../images/about.svg';
import account from '../images/account.svg';
import world from '../images/world.svg';
import whychooseus from '../images/whychooseus.svg';
import nonotification from '../images/nonotification.svg';
import{ useState } from 'react';

function AboutUs() {
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
          
          <div className=" p-10">
      {/* About Us Section */}
      <section className="mb-12">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-[60px] mr-[60px] pt-[10px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          About Us, and our Best Services
        </h2>
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <h3  className="text-lg font-semibold text-[#0C7489]">

                    Preventive care
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. 
                  </p>
                  
                </div>
                <br />
                <button className=" text-white rounded-tl-13 rounded-br-24 w-[80px] h-[40px] bg-[#0C7489] ">
                  ➔
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left ml-[60px]">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center ml-[60px] mr-[60px]">
          <img
            src={whychooseus}
            alt="Doctor with patient"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
         
            {Array(6)
              .fill()
              .map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div>
                    <img className="w-[20px] h-[20px]" src={aboutus2} alt="" />
                    <h3 className="text-lg font-semibold text-[#0C7489] text-left ">
                      Preventive care
                    </h3>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur. Sed nulla.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <div className="rounded-lg  w-full relative">
               
                  <img
                    src={aboutus}
                    alt="MasterCard"
                    className="w-full mt-20 "
                  />
                
              </div>
    </div>
          </div>
          
         
       
    
      );
}

export default AboutUs;