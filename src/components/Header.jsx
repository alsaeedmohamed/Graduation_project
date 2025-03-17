// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
{/* active button function */}
const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <header className="border-b-[1px] border-gray-300 border-spacing-1 " >
      <div className=" bg-[#f6fbfc] container mx-auto flex items-center justify-between px- py-3">
        <div className="flex items-center text-lg font-bold text-[#000000]">
          <img src={logo} alt="" className="h-12 w-12" />
          <span className="ml-4 text-xl font-bold text-gray-800">Neuro Guard</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/src/pages/HomePatient.jsx" onClick={() => handleButtonClick("home")}
            className={`px-4 py-2 rounded transition duration-200 ${
              activeButton === "home"
                ? "bg-[#095b6a] text-white"
                : "text-gray-800 ]"
            }`}>Home</Link></li>
            <li><Link to="/src/pages/services.jsx" onClick={() => handleButtonClick("services")}
            className={`px-4 py-2 rounded transition duration-200 ${
              activeButton === "services"
                ? "bg-[#095b6a] text-white"
                : "text-gray-800 ]"
            }`}>Services</Link></li>
            
            <li><Link to="/src/pages/findDoctors.jsx" onClick={() => handleButtonClick("findDoctors")}
            className={`px-4 py-2 rounded transition duration-200 ${
              activeButton === "findDoctors"
                ? "bg-[#095b6a] text-white"
                : "text-gray-800 ]"
            }`}>Find Doctors</Link></li>
            <li><Link to="/src/pages/aboutUs.jsx" onClick={() => handleButtonClick("about")}
            className={`px-4 py-2 rounded transition duration-200 ${
              activeButton === "about"
                ? "bg-[#095b6a] text-white"
                : "text-gray-800 ]"
            }`}>About Us</Link></li>
            <li><Link to="/src/pages/contactUs.jsx" onClick={() => handleButtonClick("contact")}
            className={`px-4 py-2 rounded transition duration-200 ${
              activeButton === "contact"
                ? "bg-[#095b6a] text-white"
                : "text-gray-800 ]"
            }`}>Contact Us</Link></li>
          </ul>
        </nav>
        <div>
          <Link
            to="/src/pages/SelectRole.jsx"
            onClick={() => handleButtonClick("signup")}
            className={`px-4 py-2 rounded transition duration-200 ${
              activeButton === "signup"
                ? "bg-[#095b6a] text-white"
                : "text-gray-800 ]"
            }`}
          >
            Sign Up
          </Link>
          <Link
            to="/src/pages/SignInForm.jsx"
            onClick={() => handleButtonClick("login")}
            className={`text-sm px-4 py-2 rounded mr-4 transition duration-200 ${
              activeButton === "login"
                ? "bg-[#095b6a] text-white"
                : "text-gray-800 "
            }`}
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

