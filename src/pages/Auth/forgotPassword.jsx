// eslint-disable-next-line no-unused-vars
import React from "react";
import forgetPassword from '../../images/forgetPassword.svg';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // استيراد axios

function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(''); // لعرض أخطاء الـ API
  const [success, setSuccess] = useState(''); // لعرض رسالة النجاح

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من صحة الإيميل قبل إرسال الطلب
    if (email && !emailError) {
      try {
        // إرسال طلب POST للـ API
        // eslint-disable-next-line no-unused-vars
        // const response = await axios.post('http://localhost:4000/api/v1/auth/forgot-password', {
        const response = await axios.post('https://neuroguard-api.onrender.com/api/v1/auth/forgot-password', {
          email: email // إرسال الإيميل للـ API
        },{withCredentials:true});

        // لو الطلب نجح
        setSuccess("Verification code sent successfully!");
        setError("");
        
        // التنقل لصفحة التحقق بعد ثانية
        setTimeout(() => {
          navigate("/verify-otp");
        }, 1000);
      } catch (err) {
        // التعامل مع الأخطاء من الـ API
        setError(err.response?.data?.message || "Something went wrong, please try again.");
        setSuccess("");
      }
    }
  };

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
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-2xl font-bold text-gray-700 mt-6">
            Input your mail to get verification code
          </h3>
          <img
            src={forgetPassword}
            width={1255}
            height={1255}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-white rounded-lg shadow-lg p-8 mt-17 mr-9 ml-9"
          style={{ width: '660px', height: '380px' }}
        >
          <h1 className="text-4xl font-bold mb-6 text-black text-center">Forget Password</h1>
          <p className="text-center text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur. Sed nulla tellus</p>
          <form onSubmit={handleSubmit}>
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
                required
              />
              {emailError && (
                <p className="text-[#FF4D4F] text-sm mt-1">Please input valid email. This email is invalid.</p>
              )}
              {error && <p className="text-[#FF4D4F] text-sm mt-1">{error}</p>}
              {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#0C7489] text-white py-2 rounded-md hover:bg-[#0C7489] mt-17"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
