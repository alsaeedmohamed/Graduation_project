// Scanning.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Scanning = ({ uploadedImage }) => {
  const [scanningLine, setScanningLine] = useState(0);
  const navigate = useNavigate();

  // التحقق من وجود الصورة
  useEffect(() => {
    if (!uploadedImage) {
      navigate("/src/pages/scan.jsx"); // رجوع لصفحة Scan لو مفيش صورة
    }
  }, [uploadedImage, navigate]);

  // أنيميشن الخط
  useEffect(() => {
    const animate = () => {
      setScanningLine((prev) => {
        if (prev >= 100) {
          return 0; // لما يوصل 100% يرجع تاني من أول
        }
        return prev + 0.5; // تحريك الخط بشكل أبطأ وأكثر سلاسة
      });
    };

    const interval = setInterval(animate, 30); // 30ms عشان الأنيميشن يبقى أكتر سلاسة
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* باقي محتوى الصفحة */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fcfc]">
        {/* Image Container */}
        <div className="relative w-[400px] h-[400px] bg-[#0c7489] rounded-md overflow-hidden">
          {uploadedImage && (
            <>
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-full object-cover opacity-70"
              />
              {/* Gradient Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c7489] opacity-50"></div>
              {/* Scanning Line */}
              <div
                className="absolute left-0 w-full h-[2px] bg-white shadow-md"
                style={{ top: `${scanningLine}%` }}
              />
            </>
          )}
        </div>

        {/* Scanning Text */}
        <p className="mt-6 text-[#0c7489] text-4xl font-medium text-center leading-[48px]">
          Scanning...
        </p>
      </div>
    </div>
  );
};

// تحديد PropTypes
Scanning.propTypes = {
  uploadedImage: PropTypes.string, // uploadedImage بتاع نوع string (لأنه URL)
};

export default Scanning;