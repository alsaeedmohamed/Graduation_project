// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Scan = ({ setUploadedImage }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleScan = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile); // ✅ التعديل هنا

        // Debug: عرض محتوى الفورم
        for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
        }

        const response = await axios.post(
          "http://127.0.0.1:8000/upload-image/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("API Response:", response.data); // ✅ طباعة نتيجة الـ API

        navigate("/src/pages/scaning.jsx", {
          state: {
            image: URL.createObjectURL(selectedFile),
            result: response.data,
          },
        });
      } catch (error) {
        console.error("Error uploading image:", error);
        navigate("/src/pages/scaning.jsx", {
          state: {
            image: URL.createObjectURL(selectedFile),
            result: { error: "فشل التحليل" },
          },
        });
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center p-4">
        <div className="w-[780px] h-[440px] border-2 border-dotted border-[#0c7489] rounded-[24px] flex justify-center items-center text-gray-500">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          ) : (
            <p>Drag & Drop or select files from device</p>
          )}
        </div>

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
