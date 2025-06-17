// HomePatient.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import doctor from '../../images/doctor.svg';

function HomePatient() {
  return (
    <div>


      {/* باقي محتوى الصفحة */}
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            {/* Image */}
            <h3 className="font-poppins font-bold text-[80px] leading-[96px] text-left ml-[20px]">
              Stroke<br />
              <span className="text-[#0c7489] font-poppins font-bold text-[80px] leading-[96px] text-left">
                Prediction.
              </span>
            </h3>
            <p className="font-poppins text-[#1E1E1E] text-[20px] leading-[34px] text-left ml-[20px] mt-[15px]">
              Answer a few quick questions to help us assess your risk of stroke
              and connect with top neurology specialists for expert guidance.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex items-center justify-center min-h-screen">
          <img src={doctor} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePatient;
