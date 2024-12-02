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
          <h3 className="text-2xl font-bold text-gray-700 mt-6">
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
        <h1 className="text-2xl font-bold mb-4 text-center">Select your Role</h1>
        <p className="text-gray-500 text-center mb-6">
          Lorem ipsum dolor sit amet consectetur. Sed nulla tellus
        </p>
        <form>
          <div className="flex flex-col mb-4">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="role"
                value="doctor"
                className="mr-2"
                onChange={handleRoleChange}
              />
              Doctor
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="role"
                value="patient"
                className="mr-2"
                onChange={handleRoleChange}
              />
              Patient
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="amenities"
                className="mr-2"
                onChange={handleRoleChange}
              />
              Amenities
            </label>
          </div>
          <Link
            to={getLinkPath()}
            className={`w-full block text-center bg-[#0C7489] text-white py-2 px-4 rounded ${
              !selectedRole ? "opacity-50 pointer-events-none" : "hover:bg-[#0C7489]"
            } transition`}
          >
            Continue
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
}

 {/* <span  className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"  style={{ width: '560px', height: '55px', paddingLeft:'270px',paddingRight:'265px' }}>  <Link to="/src/pages/SignUpForm.jsx">Continue</Link></span> */}

export default RoleSelectionPage;
