// eslint-disable-next-line no-unused-vars
import React from "react";
import restpass from '../images/restpass.svg';
import{ useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () =>{
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const updatePassword = (password) => {
      // محاكاة نجاح تحديث كلمة المرور
      setTimeout(() => {
        setSuccess("Password successfully reset!");
        setError("");
      }, 1000); // تأخير بسيط لمحاكاة الاتصال بالسيرفر
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        setSuccess("");
      } else {
        setError("");
        updatePassword(password); // محاكاة تحديث كلمة المرور
      }
    };
  
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1  flex items-center justify-center">
        <div className="text-center px-4">
          {/* Image */}
          <h3 className="text-2xl font-bold text-gray-700 mt-6">
          Enter your new password and confirm it        </h3>
          <img
            src={restpass} 
            width={344}
            height={372.58}  
            className="mx-auto mt-10"
            />
        </div>
        </div>

      {/* Right Section - Form */}
      <div className="flex items-center justify-center min-h-screen " style={{ width: '660px', height: '489px' }}>
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
        <p className="text-gray-500 mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur. Sed nulla tellus
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="flex-left block text-sm font-medium mb-2 text-left" htmlFor="password">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0c7489]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-left"
              htmlFor="confirmPassword"
            >
              Confirmation Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0c7489]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required placeholder="Enter Password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <button
            type="submit"
            className="w-full bg-[#0c7489] text-white py-2 px-4 rounded-md hover:bg-[#0b6779] transition duration-200"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
    </div>
    );
}

export default SignInForm;

