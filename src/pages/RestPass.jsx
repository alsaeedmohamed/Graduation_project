// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import restpass from '../images/restpass.svg';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(""); // Added state for password match error
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Added state for confirm password visibility
  const [success, setSuccess] = useState("");

  // eslint-disable-next-line no-unused-vars
  const updatePassword = (password) => {
    // Simulate password update success
    setTimeout(() => {
      setSuccess("Password successfully reset!");
      setError("");
    }, 1000); // Simulate server delay
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match!");
      setError('');
      setSuccess('');
    } else {
      setPasswordMatchError('');
      updatePassword(password); // Simulate password update
    }
  };

  // Password validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPasswordError(
      !passwordRegex.test(value)
        ? "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character."
        : ""
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-2xl font-bold text-gray-700 mt-6">
            Enter your new password and confirm it
          </h3>
          <img
            src={restpass}
            width={344}
            height={372.58}
            className="mx-auto mt-10"
          />
        </div>
      </div>

      {/* Right Section*/}
      <div className="flex items-center justify-center min-h-screen" style={{ width: '660px', height: '489px' }}>
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
          <p className="text-gray-500 mb-6 text-center">Lorem ipsum dolor sit amet consectetur. Sed nulla tellus</p>
          <form onSubmit={handleSubmit}>
            {/* Password */}
            <div className="mb-4 relative">
              <label className="block font-medium text-gray-600 text-left">
                Password<span className="text-[#FF4D4F]">*</span>
              </label>
              <div className="relative">
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 ${
                    passwordError
                      ? 'border-[#FF4D4F] focus:ring-[#FF4D4F]'
                      : 'border-gray-300 focus:ring-[#0C7489]'
                  }`}
                />
                {/* Eye icon for password */}
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye className="text-gray-600" /> : <FaEyeSlash className="text-gray-600" />}
                </div>
              </div>
              {passwordError && <p className="text-[#FF4D4F] text-sm mt-1">{passwordError}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-4 relative">
              <label className="block font-medium text-gray-600 text-left" htmlFor="confirmPassword">
                Confirmation Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0c7489]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Enter Password"
                />
                {/* Eye icon for confirm password */}
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye className="text-gray-600" /> : <FaEyeSlash className="text-gray-600" />}
                </div>
              </div>
            </div>

            {/* Error Messages */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {passwordMatchError && <p className="text-red-500 text-sm mb-4">{passwordMatchError}</p>}
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
};

export default SignInForm;
