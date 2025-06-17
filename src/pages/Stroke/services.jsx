// Services.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import setting1 from '../../images/setting1.svg';
import setting2 from '../../images/setting2.svg';
import setting3 from '../../images/setting3.svg';


function Services() {
  const navigate = useNavigate();

  return (
    <div>
      {/* استدعاء كمبوننت الـ Navbar */}


      {/* باقي محتوى الصفحة */}
      <div className="min-h-screen flex flex-col items-center justify-start py-10">
        {/* Header Text */}
        <h1 className="text-2xl font-bold text-center leading-[57px] mb-10">
          Start your journey by choosing a category that aligns with your goals
        </h1>

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div
            onClick={() => navigate("/scan")}
            className="bg-blue-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 border-[1.5px] border-[#0c7489] rounded-md w-60 h-72 flex flex-col items-center justify-center"
          >
            <div className="w-full bg-white rounded-md h-full flex items-center justify-center">
              <div className="w-full cursor-pointer h-4/5">
                <img className="p-5" src={setting1} alt="" />
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div
            onClick={() => navigate("/predict")}
            className="bg-blue-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 border-[1.5px] border-[#0c7489] rounded-md w-60 h-72 flex flex-col items-center justify-center"
          >
            <div className="w-full bg-white rounded-md h-full flex items-center justify-center">
              <div className="w-full cursor-pointer h-4/5">
                <img className="p-5" src={setting2} alt="" />
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div
            onClick={() => navigate("/chatbot")}
            className="bg-blue-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 border-[1.5px] border-[#0c7489] rounded-md w-60 h-72 flex flex-col items-center justify-center"
          >
            <div className="w-full bg-white rounded-md h-full flex items-center justify-center">
              <div className="w-full h-4/5 cursor-pointer">
                <img className="p-5" src={setting3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
