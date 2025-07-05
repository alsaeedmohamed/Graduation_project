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
  const [availableHours, setAvailableHours] = useState([]); // Store available hours for selected date
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Generate 7 days from today
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const dayName = dayNames[date.getDay()];
      const dayNumber = date.getDate();
      const fullDate = date.toISOString().split('T')[0]; // Format: 2025-07-05
      
      dates.push({
        display: `${dayName} ${dayNumber}`,
        fullDate: fullDate,
        dateObj: date
      });
    }
    
    return dates;
  };

  const dates = generateDates();

  // const handleNavigate = () => {
  //   if (selectedDate && selectedTime) {
  //     navigate("/payment", {
  //       state: {
  //         doctorId: doctorId,
  //         selectedDate: selectedDate,
  //         selectedTime: selectedTime,
  //         appointmentDateTime: `${selectedDate}T${selectedTime}+03:00`
  //       }
  //     });
  //   } else {
  //     alert("Please select both date and time");
  //   }
  // };

  // get the doctor id state from the previous page "find doctors"
  const location = useLocation();
  const doc = location.state?.doctor;

  useEffect(() => {
  if (doc) setDoctor(doc)
  }, [doctor]);

  // useEffect(() => {
  //   // get this doctor request
  //   const getDoctor = async () => {
  //     try {
  //       // const response = await axios.get(`https://neuroguard-api.onrender.com/api/v1/doctors/${doctorId}`)
  //       // // const response = await axios.get(`http://localhost:4000/api/v1/doctors/${doctorId}`)
  //       // const doctor = response.data.data.doctor
  //       // setDoctor(doctor)
  //       // // console.log(doctor)
  //
  //       // Automatically select today's date and load its schedule
  //       const today = dates[0];
  //       setSelectedDate(today.fullDate);
  //       await getSchedule(doctorId, today.fullDate);
  //
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   
  //   if (doctor) {
  //     getDoctor()
  //   }
  // }, [doctorId]);

  // get times array for specific date -> date like "2025-04-12"
  const getSchedule = async (docId, date) => {
    if (!docId || !date) return;
    
    setLoading(true);
    try {
      const response = await axios.get(
        `https://neuroguard-api.onrender.com/api/v1/doctors/${docId}/schedule/${date}`,
        // `http://localhost:4000/api/v1/doctors/${docId}/schedule/${date}`,
      );
      const available = response.data.data.availabeHours;
      console.log('Available hours for', date, ':', available);

      // convert the start end schedule object to array with start times only
      const hours = available.map(hour => {
        // Extract time from format like "2025-07-05 17:00" -> "17:00"
        const timeStr = hour.start.split(" ")[1];
        return timeStr;
      });
      
      setAvailableHours(hours);
      setSelectedTime(null); // Reset selected time when date changes
      
    } catch (error) {
      console.log('Error getting schedule:', error);
      setAvailableHours([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle date selection
  const handleDateSelect = async (date) => {
    setSelectedDate(date.fullDate);
    await getSchedule(doctor._id, date.fullDate);
  };

  // book appointment with doctor id and time
  // const bookAppointment = async (docId, time) => {
  const bookAppointment = async () => {
        //  console.log({
        //   doctorId: doctorId,
        //   selectedDate: selectedDate,
        //   selectedTime: selectedTime,
        //   appointmentDateTime: `${selectedDate}T${selectedTime}+03:00`
        // })
    try {
      const response = await axios.post(
        "https://neuroguard-api.onrender.com/api/v1/appointments/",
        // "http://localhost:4000/api/v1/appointments/",
        {
          doctorId: doctor._id, 
          startTime: `${selectedDate}T${selectedTime}+03:00` //time,
        },
        { withCredentials: true },
      );
      // console.log(response.data.data);
      const appointmentId = response.data.data._id
      if (response.status === 201) {
          // const res = await axios.post(`http://localhost:4000/api/v1/appointments/${appointmentId}/pay`,{}, {withCredentials: true})
        const res = await axios.post(`https://neuroguard-api.onrender.com/api/v1/appointments/${appointmentId}/pay`,{}, {withCredentials: true})
        // console.log(res.data.data)
        const url = res.data.data.url;
        // console.log(url)
        if (res.status === 200) window.location.href = url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Format time for display (convert 24h to 12h format)
  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div>
      {/* Doctor Info Section */}
      <div className="min-h-screen flex justify-center items-center">
        <div className="rounded-lg flex items-start max-w-4xl p-6">
          {/* Doctor Image */}
          <div className="flex justify-center">
            <img
              src={doctor?.profileImg || Doctor}
              alt="Doctor"
              className="w-1/3 w-full rounded-lg object-cover"
            />
          </div>

          {/* Doctor Details */}
          <div className="w-2/3 pl-6 font-poppins mt-5">
            <h2 className="text-2xl font-bold text-gray-800 text-left">
              {doctor ? `${doctor.firstName} ${doctor.lastName}` : 'Loading...'}
            </h2>

            {/* Payment */}
            <div className="flex items-center mt-2">
              <span className="text-[#0C7489] text-lg font-bold mr-6 text-left">
                Payment
              </span>
              <span className="text-[#0C7489] text-lg font-bold ml-auto">
                ${doctor?.appointmentFee || 0}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-2">
              <span className="text-gray-600 text-sm font-medium mr-2 ml-auto">4.8</span>
              <span className="text-yellow-500">⭐️</span>
            </div>

            {/* Details */}
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

      {/* Date Section */}
      <div className="flex flex-col items-center py-10 px-5">
        <div className="w-full pr-[40px] pl-[40px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Select Date</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium ${
                  selectedDate === date.fullDate
                    ? "bg-[#0C7489] text-white"
                    : "bg-white text-gray-800 border"
                }`}
              >
                {date.display}
              </button>
            ))}
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="w-full mt-6 pr-[40px] pl-[40px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Available Hours</h2>
            {selectedDate && (
              <span className="text-sm text-gray-500">
                {dates.find(d => d.fullDate === selectedDate)?.display}
              </span>
            )}
          </div>
          
          {loading ? (
            <div className="text-center py-4">
              <span className="text-gray-500">Loading available hours...</span>
            </div>
          ) : availableHours.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {availableHours.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 rounded-lg text-sm font-medium ${
                    selectedTime === time
                      ? "bg-[#0C7489] text-white"
                      : "bg-white text-gray-800 border"
                  }`}
                >
                  {formatTime(time)}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <span className="text-gray-500">No available hours for this date</span>
            </div>
          )}
          
          <button
            onClick={bookAppointment}
            // onClick={handleNavigate}
            disabled={!selectedDate || !selectedTime}
            className={`mt-8 w-full h-[59px] text-white py-2 px-4 rounded-lg transition duration-300 ${
              selectedDate && selectedTime
                ? "bg-[#0C7489] hover:bg-[#065a67]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drinfo;
