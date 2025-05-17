// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Scanning = () => {
  const [scanningLine, setScanningLine] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // جلب الصورة ونتيجة الـ API من الـ state
  const uploadedImage = location.state?.image;
  const result = location.state?.result;

  // التحقق من وجود الصورة والنتيجة
  useEffect(() => {
    if (!uploadedImage || !result) {
      console.log("Missing data:", { uploadedImage, result });
      navigate("/scan");
    }
  }, [uploadedImage, result, navigate]);

  // أنيميشن الخط
  useEffect(() => {
    const animate = () => {
      setScanningLine((prev) => (prev >= 100 ? 0 : prev + 0.5));
    };
    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  // التنقل بعد 5 ثواني مع النتيجة الحقيقية
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Navigating to ScanResult with:", { image: uploadedImage, resultDetails: result });
      navigate("/src/pages/ScanResult.jsx", {
        state: { image: uploadedImage, resultDetails: result },
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, uploadedImage, result]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fcfc]">
      <div className="relative w-[400px] h-[400px] bg-[#0c7489] rounded-md overflow-hidden">
        {uploadedImage && (
          <>
            <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c7489] opacity-50"></div>
            <div className="absolute left-0 w-full h-[2px] bg-white shadow-md" style={{ top: `${scanningLine}%` }} />
          </>
        )}
      </div>
      <p className="mt-6 text-[#0c7489] text-4xl font-medium text-center leading-[48px]">
        Scanning...
      </p>
    </div>
  );
};

export default Scanning;