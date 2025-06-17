// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import signup from "../images/signup.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import countryList from "react-select-country-list";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  // State لكل حقل في الفورم
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Prepare country list options
  const countries = countryList().getData().map((country) => ({
    value: country.value,
    label: (
      <div className="flex items-center">
        <img
          src={`https://flagcdn.com/w40/${country.value.toLowerCase()}.png`}
          alt={country.label}
          className="mr-2 w-5 h-4"
        />
        {country.label}
      </div>
    ),
  }));

  // Email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(value));
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

  // Handle country selection change
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  // Handle form submission with Axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    // التأكد من صحة الحقول
    const isValidEmail = email && !emailError;
    const isPhoneValid = phone;
    const isPasswordValid = password && !passwordError;
    const isCountrySelected = selectedCountry;

    if (isValidEmail && isPhoneValid && isPasswordValid && isCountrySelected) {
      try {
        // جمع الداتا من الـ state
        const formData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          dateOfBirth: dateOfBirth,
          gender: gender,
          phone: phone,
          country: selectedCountry?.value,
          address: address || "",
        };

        // إرسال الداتا للـ API باستخدام Axios
        const response = await axios.post(
          "http://localhost:4000/api/v1/patients/register",
          formData
        );

        // التحقق من نجاح الـ API
        if (response.status === 201) {
          navigate("/login");
        }
      } catch (error) {
        alert(
          error.response?.data?.message || "Registration failed! Please try again."
        );
      }
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            Examine & shows Test Results
          </h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <img src={signup} width={1255} height={1255} className="mx-auto" />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div
          className="bg-white rounded-lg shadow-lg p-8"
          style={{ width: "660px" }}
        >
          <h1 className="text-4xl font-bold mb-6 text-black text-center">
            Sign Up
          </h1>
          <p className="text-base text-center mb-7 text-gray-600">
            Begin your journey with just a few clicks
          </p>
          <form onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="mb-4">
              <label className="block font-medium text-gray-600 text-left">
                First Name<span className="text-[#FF4D4F]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="block font-medium text-gray-600 text-left">
                Last Name<span className="text-[#FF4D4F]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
                required
              />
            </div>

            {/* Email */}
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
                  emailError
                    ? "border-[#FF4D4F] focus:ring-[#FF4D4F]"
                    : "border-gray-300 focus:ring-[#0C7489]"
                }`}
                required
              />
              {emailError && (
                <p className="text-[#FF4D4F] text-sm mt-1">
                  Please input valid email. This email is invalid.
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label className="block font-medium text-gray-600 text-left">
                Password<span className="text-[#FF4D4F]">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 ${
                    passwordError
                      ? "border-[#FF4D4F] focus:ring-[#FF4D4F]"
                      : "border-gray-300 focus:ring-[#0C7489]"
                  }`}
                  required
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-600" />
                  ) : (
                    <FaEyeSlash className="text-gray-600" />
                  )}
                </div>
              </div>
              {passwordError && (
                <p className="text-[#FF4D4F] text-sm mt-1">{passwordError}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label className="block font-medium text-gray-600 text-left">
                Date of Birth<span className="text-[#FF4D4F]">*</span>
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
                required
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 text-left">
                Gender<span className="text-[#FF4D4F]">*</span>
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              >
                <option value="">Choose your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Phone number */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 text-left">
                Mobile Phone<span className="text-[#FF4D4F]">*</span>
              </label>
              <PhoneInput
                country={"eg"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass="!w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
                placeholder="Enter your mobile phone"
                required
              />
            </div>

            {/* Country Selection */}
            <div className="mb-4">
              <label className="block font-medium text-gray-600 text-left">
                Your Country<span className="text-[#FF4D4F]">*</span>
              </label>
              <Select
                options={countries}
                value={selectedCountry}
                onChange={handleCountryChange}
                className="w-full focus:ring-[#0C7489] text-gray-700 text-left"
                placeholder="Select your country"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 text-left">
                Address
              </label>
              <input
                type="text"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0C7489] text-white py-2 rounded-md hover:bg-[#0C7489]"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
