// FindDoctors.jsx
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FindDoctors() {
  const navigate = useNavigate();

  // States for managing doctors data, navigation, loading, and error
  const [doctors, setDoctors] = useState([]); // Store doctors data from API
  const [startIndex, setStartIndex] = useState(0); // Track the starting index for displayed doctors
  const [loading, setLoading] = useState(true); // Loading state while fetching data
  const [error, setError] = useState(null); // Error state for API failures
  const doctorsPerPage = 2; // Number of doctors to display at a time (2 as per your design)

  // Fetch doctors from the API when the component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // const response = await axios.get("https://neuroguard-api.onrender.com/api/v1/doctors?limit=30"); // Replace with your API endpoint
        const response = await axios.get("http://localhost:4000/api/v1/doctors?limit=30"); // Replace with your API endpoint

        if (!response.status == 200) {
          throw new Error("Failed to fetch doctors");
        }
        const data = await response.data.data;
        setDoctors(data.doctors); // Store the data in state
      } catch (error) {
        setError(error.message); // Store error message if fetch fails
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchDoctors();
  }, []);

  // Navigate to doctor info page
  const handleNavigate =  (docId) => {
    navigate('/doctor', { 
      state: { id: docId } 
    });
  };

  // () => {
  //   navigate("/doctor");
  // };

  // Handle navigation to the next set of doctors
  const handleNext = () => {
    if (startIndex + doctorsPerPage < doctors.length) {
      setStartIndex(startIndex + doctorsPerPage);
    }
  };

  // Handle navigation to the previous set of doctors
  const handlePrev = () => {
    if (startIndex - doctorsPerPage >= 0) {
      setStartIndex(startIndex - doctorsPerPage);
    }
  };

  // Slice the doctors array to display only the current set (two doctors)
  const displayedDoctors = doctors.slice(startIndex, startIndex + doctorsPerPage);

  // Placeholder card data to show when no data is available
  const placeholderDoctors = [
    {
      name: "No Data Available",
      specialty: "N/A",
      hospital: "N/A",
      rating: "N/A",
      schedule: "N/A",
      image: "https://via.placeholder.com/177x323?text=No+Image", // Placeholder image
    },
    {
      name: "No Data Available",
      specialty: "N/A",
      hospital: "N/A",
      rating: "N/A",
      schedule: "N/A",
      image: "https://via.placeholder.com/177x323?text=No+Image", // Placeholder image
    },
  ];

  // Decide which doctors to display: real data or placeholders
  const doctorsToDisplay = doctors.length > 0 ? displayedDoctors : placeholderDoctors;

  // Show loading state
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="py-10 px-5">
      <h2 className="text-center text-2xl font-bold mb-6">
        Book appointments with expert doctors for trusted care and advice
      </h2>
      <div className="flex justify-center items-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0 || doctors.length === 0}
          className="bg-[#0C7489] text-white p-2 rounded-full disabled:opacity-50 hover:bg-[#065a67] transition duration-300"
        >
          ←
        </button>

        {/* Doctor Cards */}
        {doctorsToDisplay.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg flex items-center max-w-lg"
          >
            <img
              src={doctor.profileImg}
              alt="Doctor"
              className="w-[177px] h-[323px] rounded-full object-cover mr-4"
            />
            <div className="flex-1 mr-5 font-poppins">
              <h3 className="text-lg font-poppins font-bold text-gray-800 text-left">
                {`${doctor.firstName} ${doctor.lastName}`}
              </h3>
              <p className="text-sm text-gray-500 text-left">
                {doctor.specialization}
              </p>
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <div className="flex items-center mr-4">
                  <span className="text-yellow-500 mr-1">{doctor.rating}</span>
                  {doctor.rating !== "N/A" && <span>⭐️</span>}
                </div>
                <div className="flex items-center">
                  {doctor.schedule !== "N/A" && (
                    <span className="material-icons mr-1">schedule</span>
                  )}
                  <span>{doctor.schedule}</span>
                </div>
              </div>
              <button
                onClick={()=>handleNavigate(doctor._id)}
                disabled={doctors.length === 0} // Disable button if no real data
                className="font-poppins bg-[#0C7489] w-full text-white px-4 py-2 rounded mt-4 hover:bg-[#065a67] transition duration-300 disabled:opacity-50"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + doctorsPerPage >= doctors.length || doctors.length === 0}
          className="bg-[#0C7489] text-white p-2 rounded-full disabled:opacity-50 hover:bg-[#065a67] transition duration-300"
        >
          →
        </button>
      </div>
      {/* Show error message below if there's an error */}
      {error && (
        <p className="text-center text-red-500 mt-4">Error: {error}</p>
      )}
    </div>
  );
}

export default FindDoctors;
