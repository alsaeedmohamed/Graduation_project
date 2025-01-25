// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from '../images/profile.svg';
import ring from '../images/ring.svg';
import search from '../images/search.svg';
import settings from '../images/settings.svg';
import doctor from '../images/doctor.svg';
import{ useState } from 'react';

function HomePatient() {
    return (
        <div>
        <div className="flex items-center justify-between px-4 bg-white  h-[110px]">
          {/* Logo */}
          <h1 className="text-[#0c7489] font-poppins font-normal text-[25px] leading-[37.5px]">Protect your mind, smarty</h1>
    
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-[#F1FDFF] p-2 rounded-lg w-209px h-62px borradios ">
          <img
              src={search} // 
              alt="Search Icon"
              className="w-5 h-5 ml-[20px]"
            />
            <input
              type="text"
              placeholder="Search for something"
              className="bg-transparent outline-none text-sm flex-grow"
            />
            
          </div>
    
          {/* Icons */}
          <div className="flex items-center gap-4">
            <img
              src={settings} //
              alt="Settings Icon"
              className="w-[62px] h-[62px]"
            />
            <img
              src={ring} // 
              alt="Notification Icon"
              className="w-[62px] h-[62px]"
            />
            <img
              src={profile} //
              alt="Profile Icon"
              className="w-[62px] h-[62px] rounded-full"
            />
          </div>
          </div>
          <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Section - Image */}
      <div className="flex-1  flex items-center justify-center">
        <div className="text-center px-4">
          {/* Image */}
          <h3 className=" font-poppins font-bold text-[80px] leading-[96px] text-left ml-[20px]">
          Stroke<br/><span className="text-[#0c7489] font-poppins font-bold text-[80px] leading-[96px] text-left">Prediction.</span> </h3>
          <p className="font-poppins text-[#1E1E1E]  text-[20px] leading-[34px] text-left ml-[20px] mt-[15px]" >Answer a few quick questions to help us assess your risk of stroke and connect with top neurology specialists for expert guidance.</p>
        </div>
        </div>
        {/* Right Section - Form */}
        <div className="flex items-center justify-center min-h-screen  ">
        <img src={doctor} alt="" />
    </div>
          </div>
          </div>
          
         
       
    
      );
}

export default HomePatient;