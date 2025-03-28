// eslint-disable-next-line no-unused-vars
import React from "react";
import verify from '../images/verify.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // استيراد axios

function SignInForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [error, setError] = useState(''); // لعرض أخطاء الـ API
  const [success, setSuccess] = useState(''); // لعرض رسالة النجاح

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const code = inputs.join(""); // دمج الأرقام الأربعة في سلسلة واحدة
    if (code.length === 4) {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.post('http://localhost:4000/api/v1/auth/verify-otp', {
          otp:  code // إرسال الـ OTP للـ API
        });

        // لو الطلب نجح
        setSuccess("OTP verified successfully!");
        setError("");
        
        // التنقل لصفحة إعادة تعيين كلمة المرور بعد ثانية
        setTimeout(() => {
          navigate("/src/pages/RestPass.jsx");
        }, 1000);
      } catch (err) {
        // التعامل مع الأخطاء من الـ API
        setError(err.response?.data?.message || "Invalid OTP, please try again.");
        setSuccess("");
      }
    } else {
      setError("Please enter all 4 digits of the code.");
      setSuccess("");
    }
  };

  // Handle input change
  const handleInputChange = (value, index) => {
    const newInputs = [...inputs];
    newInputs[index] = value.slice(0, 1); // Restrict input to 1 character
    setInputs(newInputs);

    // Move focus to next input
    if (value && index < inputs.length - 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  // Start timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);

  // Resend Code
  const handleResend = () => {
    alert("A new code has been sent to your email!");
    setTimeLeft(60);
    setIsResendDisabled(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-2xl font-bold text-gray-700 mt-6">
            Enter the verify code to reset your password
          </h3>
          <img
            src={verify}
            width={444}
            height={363.32}
            className="mx-auto mt-20"
          />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50" style={{ width: '660px', height: '479px', gap: 50 }}>
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Enter the verify code</h1>
          <p className="text-gray-600 text-center mb-6">
            Please enter the code sent to your email address.
          </p>

          {/* Input Boxes */}
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4 mb-6">
              {inputs.map((input, index) => (
                <input
                  key={index}
                  id={`input-${index}`}
                  type="text"
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className="w-12 h-12 text-center border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                />
              ))}
            </div>

            {/* Error and Success Messages */}
            {error && <p className="text-[#FF4D4F] text-sm mb-4 text-center">{error}</p>}
            {success && <p className="text-green-500 text-sm mb-4 text-center">{success}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0C7489] text-white py-2 rounded-md hover:bg-[#0C7489] mt-17"
            >
              Submit code
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-4 text-sm text-gray-600">
            The verify code will expire in{" "}
            <span className="font-bold">
              {`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? "0" : ""}${timeLeft % 60}`}
            </span>
            <div>
              <button
                onClick={handleResend}
                disabled={isResendDisabled}
                className={`${
                  isResendDisabled
                    ? "text-gray-400 pointer-events-none"
                    : "text-blue-500 hover:underline"
                }`}
              >
                Resend Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;