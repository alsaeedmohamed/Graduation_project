/* eslint-disable no-unused-vars */
import React from "react";
import Role from "../images/Role.svg"
import { Link } from 'react-router-dom';

function RoleSelectionPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Content */}
      <main className="flex-1  flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          {/* Left Section - Image and Title */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Select your Role to continue
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <img
              src="//src//images//Role.svg" 
              alt="Role Selection"
              className="mx-auto md:mx-0"
            />
          </div>

          {/* Right Section - Role Form */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Select your Role
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Lorem ipsum dolor sit amet consectetur. Sed nulla tellus.
            </p>
            <form>
              <div className="space-y-4">
                {/* Radio Buttons */}
                <label className="block">
                  <input
                    type="radio"
                    name="role"
                    value="doctor"
                    className="mr-2"
                  />
                  Doctor
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="role"
                    value="patient"
                    className="mr-2"
                  />
                  Patient
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="role"
                    value="amenities"
                    className="mr-2"
                  />
                  Amenities
                </label>
              </div>
              <span  className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"  style={{ width: '560px', height: '55px', paddingLeft:'270px',paddingRight:'265px' }}>  <Link to="/src/pages/SignUpForm.jsx">Continue</Link></span>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RoleSelectionPage;
