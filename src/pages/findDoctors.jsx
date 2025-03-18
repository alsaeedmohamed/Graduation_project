// FindDoctors.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import Doctor from '../images/doctor1.svg';

function FindDoctors() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/src/pages/drinfo.jsx");
  };

  return (
    <div>
      {/* باقي محتوى الصفحة */}
      <div className="py-10 px-5">
        <h2 className="text-center text-2xl font-bold mb-6">
          Book appointments with expert doctors for trusted care and advice
        </h2>
        <div className="flex justify-center items-center gap-6">
          <div className="bg-white shadow-md rounded-lg flex items-center max-w-lg">
            <img
              src={Doctor}
              alt="Doctor"
              className="w-[177px] h-[323px] rounded-full object-cover mr-4"
            />

            {/* بيانات الطبيب */}
            <div className="flex-1 mr-5 font-poppins">
              <h3 className="text-lg font-poppins font-bold text-gray-800 text-left">
                Dr. Ahmed Shaaban
              </h3>
              <p className="text-sm text-gray-500 text-left">
                Neurologist | Mercy Hospital
              </p>

              {/* التقييم والوقت */}
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <div className="flex items-center mr-4">
                  <span className="text-yellow-500 mr-1">4.8</span>
                  <span>⭐️</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons mr-1">schedule</span>
                  <span>10:30am – 5:30pm</span>
                </div>
              </div>

              {/* زر الحجز */}
              <button
                onClick={handleNavigate}
                className="font-poppins bg-[#0C7489] w-full text-white px-4 py-2 rounded mt-4 hover:bg-[#065a67] transition duration-300"
              >
                Book Appointment
              </button>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg flex items-center max-w-lg">
            <img
              src={Doctor}
              alt="Doctor"
              className="w-[177px] h-[323px] rounded-full object-cover mr-4"
            />

            {/* بيانات الطبيب */}
            <div className="flex-1 mr-5 font-poppins">
              <h3 className="text-lg font-poppins font-bold text-gray-800 text-left">
                Dr. Mohamed Elsayed
              </h3>
              <p className="text-sm text-gray-500 text-left">
                Neurologist | Mercy Hospital
              </p>

              {/* التقييم والوقت */}
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <div className="flex items-center mr-4">
                  <span className="text-yellow-500 mr-1">4.8</span>
                  <span>⭐️</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons mr-1">schedule</span>
                  <span>10:30am – 5:30pm</span>
                </div>
              </div>

              {/* زر الحجز */}
              <button
                onClick={handleNavigate}
                className="font-poppins bg-[#0C7489] w-full text-white px-4 py-2 rounded mt-4 hover:bg-[#065a67] transition duration-300"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindDoctors;