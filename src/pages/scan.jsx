// Scan.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Scan = ({ setUploadedImage }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(imageUrl);
      setUploadedImage(imageUrl);
    }
  };

  const handleScan = () => {
    if (selectedFile) {
      navigate("/src/pages/scaning.jsx");
    }
  };

  return (
    <div>
      {/* باقي محتوى الصفحة */}
      <div className="flex flex-col items-center p-4">
        {/* Drag and Drop Box */}
        <div className="w-[780px] h-[440px] border-2 border-dotted border-[#0c7489] rounded-[24px] flex justify-center items-center text-gray-500">
          {selectedFile ? (
            <img
              src={selectedFile}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          ) : (
            <p>Drag & Drop or select files from device</p>
          )}
        </div>

        {/* Choose File and Enhancer Buttons in the same row with total width 780px */}
        <div className="mt-4 flex w-[780px] h-[72px] space-x-2">
          <label
            htmlFor="file-upload"
            className="inline-flex items-center justify-center font-medium px-6 py-3 bg-[#0c7489] text-white rounded-l-lg cursor-pointer hover:bg-teal-700 w-1/2 h-full"
          >
            Choose File
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            className="inline-flex items-center justify-center font-medium px-6 py-3 bg-[#0c7489] text-white rounded-r-lg cursor-pointer hover:bg-teal-700 w-1/2 h-full"
          >
            Enhancer
          </button>
        </div>

        {/* Scan Button */}
        <button
          onClick={handleScan}
          className="bg-[#0c7489] font-medium text-white w-[780px] h-[72px] mt-6 py-2 rounded cursor-pointer hover:bg-teal-700"
          disabled={!selectedFile}
        >
          Scan
        </button>
      </div>
    </div>
  );
};

export default Scan;