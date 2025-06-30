// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScanResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, resultDetails } = location.state || {};

  console.log("ScanResult location state:", location.state);
  console.log("ScanResult image:", image);
  console.log("ResultDetails:", resultDetails);

  useEffect(() => {
    if (!image || !resultDetails) {
      navigate("/scan");
    }
  }, [image, resultDetails, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fcfc] p-4">
      <h1 className="text-3xl font-semibold text-[#0c7489] mb-6">Scan Result</h1>

      <div className="w-[400px] h-[400px] rounded-md overflow-hidden mb-4 border-4 border-[#0c7489]">
        <img src={image} alt="Scanned" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md text-[#0c7489] space-y-4 text-center">
        <p className="text-lg">
          <strong>Prediction:</strong> {resultDetails.prediction}
        </p>

        {/* عرض التعليمات لو موجودة */}
        {resultDetails.Instructions && (
          <p className="text-[#d97706] font-medium">
            <strong>Instructions:</strong> {resultDetails.Instructions}
          </p>
        )}

        {/* رسالة إيجابية في حالة النتيجة Normal ومفيش تعليمات */}
        {!resultDetails.Instructions && resultDetails.prediction === "Normal" && (
          <p className="text-green-600 font-semibold">
            ✅ Great! No signs of stroke. Keep taking care of your health.
          </p>
        )}

        {/* عرض رسالة خطأ لو موجودة */}
        {resultDetails.error && (
          <p className="text-red-600 font-semibold">
            ⚠️ {resultDetails.error}
          </p>
        )}
      </div>

      <button
        className="mt-6 bg-[#0c7489] text-white px-6 py-2 rounded-lg hover:bg-[#095d6e]"
        onClick={() => navigate("/scan")}
      >
        Scan Another
      </button>
    </div>
  );
};

export default ScanResult;
