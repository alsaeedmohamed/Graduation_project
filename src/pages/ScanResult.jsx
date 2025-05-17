// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScanResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, resultDetails } = location.state || {};
console.log("ScanResult location state:", location.state);
  console.log("ScanResult image:", image);
  if (!image || !resultDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>لا توجد بيانات لعرضها، يتم إعادتك للصفحة الرئيسية...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fcfc] p-4">
      <h1 className="text-3xl font-semibold text-[#0c7489] mb-6">Scan Result</h1>
      <div className="w-[400px] h-[400px] rounded-md overflow-hidden mb-4 border-4 border-[#0c7489]">
        <img src={image} alt="Scanned" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md text-[#0c7489]">
        <p><strong>Prediction:</strong> {resultDetails.prediction}</p>
      </div>
      <button
        className="mt-6 bg-[#0c7489] text-white px-6 py-2 rounded-lg"
        onClick={() => navigate("/src/pages/scan.jsx")}
      >
        Scan Another
      </button>
    </div>
  );
};

export default ScanResult;