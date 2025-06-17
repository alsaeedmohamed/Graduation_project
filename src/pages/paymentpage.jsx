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

function PaymentPage() {
    const navigate =useNavigate();

    const [selectedMethod, setSelectedMethod] = useState("MasterCard");
  const [selectedCard, setSelectedCard] = useState("2478");
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
          <div className="flex justify-center items-center min-h-screen ml-[50px] mr-[50px]">
      <div className=" p-6 rounded-lg  w-full ">
        <h2 className="text-lg font-semibold text-left">Choose your payment method and choose card</h2>
        <p className="text-gray-500 text-sm mb-4 text-left mb-[50px]">Lorem ipsum dolor sit amet consectetur</p>

        {/* Payment Methods */}
        <div className="space-y-3">
          {["Apple Pay", "PayPal", "MasterCard"].map((method) => (
            <label key={method} className="flex items-center space-x-2 border p-2 rounded cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={selectedMethod === method}
                onChange={() => setSelectedMethod(method)}
                className="hidden"
              />
              <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                selectedMethod === method ? "border-[#0C7489]" : "border-gray-300"
              }`}>
                {selectedMethod === method && <div className="w-2 h-2 bg-[#0C7489] rounded-full"></div>}
              </div>
              <span>{method}</span>
            </label>
          ))}
        </div>

        {/* Choose Card */}
        {selectedMethod === "MasterCard" && (
          <div className="mt-4 ">
            <h3 className="text-sm font-medium mb-1 text-left ">Choose Card</h3>
            <select
              className="w-full p-2 border rounded"
              value={selectedCard}
              onChange={(e) => setSelectedCard(e.target.value)}
            >
              <option value="2478">MasterCard **** 2478</option>
              <option value="1234">MasterCard **** 1234</option>
            </select>
            <button className="text-[#0C7489] bg-white p-2 border rounded font-bold text-sm mt-2 text-left w-full">Add Card</button>
          </div>
        )}

        {/* Purchase Information */}
        <div className="bg-white p-4 mt-4 rounded mb-[20px] p-5">
        <h2  className="text-[#0C7489] font-bold text-left">Purchase information :</h2>

          <div className="flex justify-between">
            <span>Appointment price:</span>
            <span>$60.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-semibold text-[#0C7489] mt-2">
            <span>Total cost:</span>
            <span>$55.00</span>
          </div>
        </div>

        {/* Confirm Button */}
        <button onClick={() => navigate("/add-card")} className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300">
          Confirm
        </button>
      </div>
    </div>
         
          </div>
          
         
       
    
      );
}

export default PaymentPage;
