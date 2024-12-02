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
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center text-lg font-bold text-[#000000]">
          <img src={logo} alt="" className="h-12 w-12" />
          <span className="ml-4 text-xl font-bold text-gray-800">Neuro Guard</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-[#0C7489]">Home</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-[#0C7489]">Services</Link></li>
            <li><Link to="/doctors" className="text-gray-600 hover:text-[#0C7489]">Find Doctors</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-[#0C7489]">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-[#0C7489]">Contact Us</Link></li>
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

