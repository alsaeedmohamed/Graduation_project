// LoggedInNavbar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from '../images/logo.svg';
import profile from '../images/profile.svg';
import ring from '../images/ring.svg';
import search from '../images/search.svg';
import settings from '../images/settings.svg';
import moon from '../images/moon.svg';
import about from '../images/about.svg';
import account from '../images/account.svg';
import world from '../images/world.svg';
import nonotification from '../images/nonotification.svg';

const LoggedInNavbar = ({ user, onLogout }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotficationsOpen, setIsNotficationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  const toggleNotfications = () => {
    setIsNotficationsOpen(!isNotficationsOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  // const handleLogout = async () => {
  //   try {
  //     // إرسال طلب POST للـ API مع withCredentials
  //     // await axios.get('http://localhost:4000/api/v1/auth/logout', {
  //     await axios.get('https://neurogurard-api.onrender.com/api/v1/auth/logout', {
  //       // headers: {
  //       //   Authorization: `Bearer ${localStorage.getItem('token')}`
  //       // },
  //       withCredentials: true,
  //     });
  //
  //     // لو الطلب نجح، احذف التوكن وانقلني لصفحة الـ SignInForm
  //     // localStorage.removeItem('token');
  //     navigate('/login'); // هنا بيرجع للـ Header العادي
  //     setIsSettingsOpen(false);
  //   } catch (error) {
  //     // لو حصل خطأ، اطبع الخطأ في الكونسول واحذف التوكن وانقلني بردو
  //     console.error('Logout failed:', error);
  //     // localStorage.removeItem('token');
  //     navigate('/login'); // هنا بيرجع للـ Header العادي
  //     setIsSettingsOpen(false);
  //   }
  // };
  const handleLogout = async () => {
    setLoading(true); // تشغيل التحميل
    try {
      // إرسال طلب GET للـ API مع withCredentials
      await axios.get('https://neuroguard-api.onrender.com/api/v1/auth/logout', {
        withCredentials: true,
      });

      // لو الطلب نجح، استدعي onLogout لتحديث حالة المصادقة في App.jsx
      if (onLogout) {
        onLogout(); // هذا بيخلي isLoggedIn = false في App.jsx
      }

      // إغلاق قائمة الإعدادات
      setIsSettingsOpen(false);
      
      // انتقال لصفحة تسجيل الدخول
      navigate('/login');
    } catch (error) {
      // لو حصل خطأ، لسه نعمل logout من الـ frontend
      console.error('Logout failed:', error);
      
      if (onLogout) {
        onLogout(); // هذا بيخلي isLoggedIn = false في App.jsx
      }
      
      setIsSettingsOpen(false);
      navigate('/login');
    } finally {
      setLoading(false); // إيقاف التحميل
    }
  };

  return (
    <header className="border-b-[1px] border-gray-300 border-spacing-1">
      <div className="bg-[#f6fbfc] container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center text-lg font-bold text-[#000000]">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <span className="ml-3 text-lg font-bold text-gray-800">Neuro Guard</span>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-3">
            <li>
              <Link
                to="/"
                // to="/doctors/home" for doctors different home page with appointments and patients
                onClick={() => handleButtonClick("home")}
                className={`px-4 py-2 rounded transition duration-200 text-base ${
                  activeButton === "home" ? "bg-[#095b6a] text-white" : "text-gray-800"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => handleButtonClick("services")}
                className={`px-4 py-2 rounded transition duration-200 text-base ${
                  activeButton === "services" ? "bg-[#095b6a] text-white" : "text-gray-800"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/doctors"
                // to="/appointments" for doctors get appointments not doctors -> then patient report 
                onClick={() => handleButtonClick("findDoctors")}
                className={`px-4 py-2 rounded transition duration-200 text-base ${
                  activeButton === "findDoctors" ? "bg-[#095b6a] text-white" : "text-gray-800"
                }`}
              >
                Find Doctors
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={() => handleButtonClick("about")}
                className={`px-4 py-2 rounded transition duration-200 text-base ${
                  activeButton === "about" ? "bg-[#095b6a] text-white" : "text-gray-800"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => handleButtonClick("contact")}
                className={`px-4 py-2 rounded transition duration-200 text-base ${
                  activeButton === "contact" ? "bg-[#095b6a] text-white" : "text-gray-800"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* الجزء الأيمن: العناصر */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for something"
              className="w-56 pl-10 pr-4 py-2 rounded bg-[#f6fbfc] border border-gray-300 focus:outline-none focus:border-[#0f525e] text-sm"
            />
            <img
              src={search}
              alt="Search Icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>

          {/* Settings Icon */}
          <div className="relative">
            <img
              src={settings}
              alt="Settings Icon"
              className="w-12 h-12 cursor-pointer"
              onClick={toggleSettings}
            />

            {/* قائمة الإعدادات */}
            {isSettingsOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black bg-opacity-30 z-9"
                  onClick={toggleSettings}
                ></div>
                <div className="absolute top-[70px] right-0">
                  <div className="relative">
                    <div className="absolute -top-4 right-5 w-8 h-8 bg-white transform rotate-45 border-l-[2px] border-t-[2px] border-[#0c7489]"></div>
                    <div className="w-[468px] h-[620px] bg-white rounded-lg shadow-lg p-6 space-y-6 border-[2px] border-[#0c7489]">
                      <h1 className="text-center text-lg font-bold">Settings</h1>
                      <div>
                        <span className="text-sm font-bold block mb-2 text-left">Interface</span>
                        <div className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white">
                          <img src={moon} alt="Moon Icon" className="w-6 h-6" />
                          <span className="text-base">Dark mode</span>
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
                      <div>
                        <span className="text-sm font-bold block mb-2 text-left">Language & region</span>
                        <div className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white">
                          <img src={world} alt="Globe Icon" className="w-6 h-6" />
                          <span className="text-base">English (US)</span>
                          <span className="ml-auto text-gray-400"></span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-bold block mb-2 text-left">Support</span>
                        <div className="space-y-4">
                          <div className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white">
                            <img src={about} alt="Info Icon" className="w-6 h-6" />
                            <span className="text-base">About us</span>
                          </div>
                          <div className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white">
                            <img src={account} alt="Delete Icon" className="w-6 h-6" />
                            <span className="text-base text-red-500">Delete account</span>
                          </div>
                          <div
                            className="w-[416px] h-[73px] flex items-center shadow-md rounded-lg p-[24px_17px] gap-[23px] bg-white cursor-pointer"
                            onClick={handleLogout}
                          >
                            <img src={account} alt="Logout Icon" className="w-6 h-6" />
                            <span className="text-base text-blue-500">Log Out</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Notifications Icon */}
          <div className="relative">
            <img
              src={ring}
              alt="Notification Icon"
              className="w-12 h-12 cursor-pointer"
              onClick={toggleNotfications}
            />
            {isNotficationsOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black bg-opacity-30 z-9"
                  onClick={toggleNotfications}
                ></div>
                <div className="absolute top-[70px] right-[50px]">
                  <div className="relative">
                    <div className="absolute -top-4 right-5 w-8 h-8 bg-white transform rotate-45 border-l-[2px] border-t-[2px] border-[#0c7489]"></div>
                    <div className="w-[468px] h-[550px] bg-white rounded-lg shadow-lg p-6 space-y-6 border-[2px] border-[#0c7489]">
                      <img src={nonotification} alt="" className="p-10" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Profile Picture */}
          <img
            src={user.profileImg}
            // src={profile}
            alt="Profile Icon"
            className="h-12 w-12 rounded-full border border-gray-300 hover:shadow-md cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default LoggedInNavbar;
