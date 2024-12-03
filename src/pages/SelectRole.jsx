/* eslint-disable no-unused-vars */
import React from "react";
import Role from "../images/Role.svg"
import { Link } from 'react-router-dom';
import { useState } from "react";
function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const getLinkPath = () => {
    if (selectedRole === "doctor") return "/src/pages/SignUpDoctor.jsx";
    if (selectedRole === "patient") return "/src/pages/SignUpForm.jsx";
    if (selectedRole === "amenities") return "/src/pages/SignUpForm.jsx";
    return "#";
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1  flex items-center justify-center">
        <div className="text-center px-4">
          {/* Image */}
          <h3 className="text-2xl font-bold text-gray-9 00 mt-6">
          Select Your Role To Continue         </h3>
          <img
            src={Role} 
            width={500}
            height={500}  
            className="mx-auto"
            />
        </div>
        </div>

      {/* Right Section - Form */}
        <div className="flex items-center justify-center min-h-screen  ">
       
        <div className="bg-white rounded-lg shadow-lg p-8 mt-17 mr-9 ml-9"style={{ width: '660px', height: '400px' }}>
        <h1 className="text-3xl font-bold mb-4 text-center">Select your Role</h1>
        <p className="text-gray-600 text-center mb-6">
          Lorem ipsum dolor sit amet consectetur. Sed nulla tellus
        </p>
        <form>
          {/* Radio Buttons */}
          <div className="mb-2">
          <label className="block font-medium text-gray-800 text-left">
           <h2> Select your Role : </h2>
          </label>
          </div>
          {/* doctor */}
          <div className="flex flex-col mb-4">
            <div className="w-full mt-1 mb-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 hover:ring-[#0C7489] text-gray-900 text-left">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="role"
                value="doctor"
                className="mr-2"
                onChange={handleRoleChange}
              />
              <p > Doctor </p>
            </label>
            </div>
          {/* patient */}
            <div className="flex flex-col mb-4">
            <div className="w-full mt-1 mb-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 hover:ring-[#0C7489] text-gray-900 text-left">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="role"
                value="doctor"
                className="mr-2"
                onChange={handleRoleChange}
              />
              <p > patient </p>
            </label>
            </div>

          {/* Amenities */}
          <div className="flex flex-col mb-4">
            <div className="w-full mt-1 mb-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 hover:ring-[#0C7489] text-gray-900 text-left">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="role"
                value="doctor"
                className="mr-2"
                onChange={handleRoleChange}
              />
              <p > Amenities </p>
            </label>
            </div>
          </div>
          
          {/* Continue Button */}
          <Link
            to={getLinkPath()}
            className={`w-full block text-center bg-[#0C7489] text-white py-2 px-4 rounded ${
              !selectedRole ? "opacity-50 pointer-events-none" : "hover:bg-[#0C7489]"
            } transition`}
          >
            Continue
          </Link>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}



export default RoleSelectionPage;
