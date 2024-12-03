// eslint-disable-next-line no-unused-vars
import React from "react";
import forgetPassword from '../images/forgetPassword.svg';
import{ useState } from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
    const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Regex للتحقق من صحة الإيميل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(true); 
    } else {
      setEmailError(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1  flex items-center justify-center">
        <div className="text-center px-4">
          {/* Image */}
          <h3 className="text-2xl font-bold text-gray-700 mt-6">
          Input your mail to get verification code          </h3>
          <img
            src={forgetPassword} 
            width={1255}
            height={1255}  
            className="mx-auto"
            />
        </div>
        </div>

      {/* Right Section - Form */}
        <div className="flex items-center justify-center min-h-screen  ">
        <div
        className="bg-white rounded-lg shadow-lg p-8 mt-17 mr-9 ml-9"
        style={{ width: '660px', height: '380px' }}
        >
        <h1 className="text-4xl font-bold mb-6 text-black text-center	">forget Password</h1>
        <p className="text-center text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur. Sed nulla tellus</p>
        <form>
          {/* Email Field */}
            <div className="mb-4">
            <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 text-left pl-1"
            >
                Email<span className="text-[#FF4D4F]">*</span>
            </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Example@gmail.com"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                emailError ? 'border-[#FF4D4F] focus:ring-[#FF4D4F]' : 'border-gray-300 focus:ring-[#0C7489]'
                }`}
                required/>
            {emailError && (
                <p className="text-[#FF4D4F] text-sm mt-1">Please input valid email. This email is invalid.</p>
            )}
            </div>
          {/* Login Button */}
            
            

          <Link
            to="/src/pages/Verify.jsx"
            className={"w-full block text-center bg-[#0C7489] text-white py-2 px-4 rounded"}
          >
            Continue
          </Link>
            
        </form>
        </div>
    </div>
    </div>
    );
}

export default SignInForm;