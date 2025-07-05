// Drinfo.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Doctor from '../../images/doctor2.svg';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function Drinfo() {
  const [doctor, setDoctor] = useState({}); // Store doctors data from API
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const times = ["10:00 AM", "11:00 AM", "12:00 PM"];
  const dates = ["Sun 4", "Mon 5", "Tue 6"];

  const handleNavigate = () => {
    navigate("/payment");
  };

  // get the doctor id state from the previos page "find doctors"
  const location = useLocation();
  const doctorId = location.state?.id;

  useEffect(() => {
    // get this dector request
    const getDoctor = async () => {
      try {
        const response = await axios.get(`https://neuroguard-api.onrender.com/api/v1/doctors/${doctorId}`)
        // const response = await axios.get(`http://localhost:4000/api/v1/doctors/${doctorId}`)
        const doctor = response.data.data
        // console.log(doctor)
        // doctor object -> doctor.doctor & doctor.availabeHours
        setDoctor(doctor)

        // get the time available for today from the get single doctor request
        const scheduleForToday = await doctor.availabeHours;
        console.log(scheduleForToday)

        // convert the scheule object { start: "17:00" , end: "18:00" } to array with start times only [ "17:00", ....]
        const hours = scheduleForToday.map(hour => hour.start.split(" ")[1])
        console.log(hours)
      } catch (error) {
        console.log(error)
      }
    }
    getDoctor()
  }, []);


  // get times array for specific date -> date like "2025-04-12"
  const getSchedule = async (docId, date) => {
    try {
      const response = await axios.get(
        `https://neuroguard-api.onrender.com/api/v1/doctors/${docId}/schedule/${date}`,
      );
      const availabe = response.data.data.availabeHours;
      console.log(availabe);

      // convert the start end schedule object to array with start times only
      const hours = availabe.map(hour => hour.start.split(" ")[1])
      console.log(hours)
    } catch (error) {
      console.log(error);
    }
  };
  // getSchedule(doctorId, "2025-07-05");
  
  // book appointment with doctor id and time -> schema like 
  // "2025-05-22T11:00+03:00" ==> date: 2025-05-22 | time: T11:00:00 | timeZone: +03:00
  const bookAppointment = async (docId, time) => {
    try {
      const response = await axios.post(
        "https://neuroguard-api.onrender.com/api/v1/appointments/",
        {
          doctorId: docId, 
          startTime: time,
        },
        { withCredentials: true },
      );
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  // get time and date from the select options and update
  const date = "2025-07-03"
  const time = "17:00"
  const dateTime = `${date}T${time}+03:00` // date: 2025-05-22 || time: T11:00:00  || timeZone: +03:00
  console.log(dateTime)
  // bookAppointment(doctorId, dateTime)

  return (
    <div>
      {/* باقي محتوى الصفحة */}
      <div className="min-h-screen flex justify-center items-center">
        <div className="rounded-lg flex items-start max-w-4xl p-6">
          {/* صورة الطبيب */}
          <div className="flex justify-center">
            <img
              // use doctor's profileImg but fix the size and alignment
              src={doctor.doctor.profileImg}
              // src={Doctor}
              alt="Dr. Alaa"
              className="w-1/3 w-full rounded-lg object-cover"
            />
          </div>

          {/* بيانات الطبيب */}
          <div className="w-2/3 pl-6 font-poppins mt-5">
            <h2 className="text-2xl font-bold text-gray-800 text-left">{`${doctor.doctor.firstName} ${doctor.doctor.lastName}`}</h2>

            {/* الدفع */}
            <div className="flex items-center mt-2">
              <span className="text-[#0C7489] text-lg font-bold mr-6 text-left">
                Payment
              </span>
              <span className="text-[#0C7489] text-lg font-bold ml-auto">${doctor.doctor.appointmentFee}</span>
            </div>

            {/* التقييم */}
            <div className="flex items-center mt-2">
              <span className="text-gray-600 text-sm font-medium mr-2 ml-auto">4.8</span>
              <span className="text-yellow-500">⭐️</span>
            </div>

            {/* التفاصيل */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">Details</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                lobortis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Working Hours Section */}
      <div className="flex flex-col items-center py-10 px-5">
        <div className="w-full pr-[40px] pl-[40px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Working Hours</h2>
            <button className="text-[#0C7489] text-sm font-medium">See all</button>
          </div>
          <div className="flex gap-4">
            {times.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                  selectedTime === time
                    ? "bg-[#0C7489] text-white"
                    : "bg-white text-gray-800 border"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Date Section */}
        <div className="w-full mt-6 pr-[40px] pl-[40px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Date</h2>
            <button className="text-[#0C7489] text-sm font-medium">See all</button>
          </div>
          <div className="flex gap-4">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(date)}
                className={`flex-1 w-[500px] py-2 rounded-lg text-sm font-medium ${
                  selectedDate === date
                    ? "bg-[#0C7489] text-white"
                    : "bg-white text-gray-800 border"
                }`}
              >
                {date}
              </button>
            ))}
          </div>
          <button
            onClick={handleNavigate}
            className="mt-8 w-full bg-[#0C7489] h-[59px] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drinfo;
