// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Scan = ({ setUploadedImage }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [enhancementType, setEnhancementType] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleEnhancement = async () => {
    if (!selectedFile || !enhancementType) {
      alert("Please select an image and enhancement type.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/predict/${enhancementType}/`,
        formData,
        { responseType: "blob" }
      );

      const enhancedBlob = response.data;
      const enhancedFile = new File([enhancedBlob], selectedFile.name, {
        type: enhancedBlob.type,
      });

      setSelectedFile(enhancedFile);
      setUploadedImage(URL.createObjectURL(enhancedFile));
      console.log("✅ Image enhanced and updated");
    } catch (error) {
      console.error("❌ Enhancement failed:", error);
      alert("Image enhancement failed.");
    }
  };

  const handleScan = async () => {
    if (!selectedFile) {
      console.warn("⚠️ No file selected");
      return;
    }

    console.log("📤 Preparing to send image...");
    console.log("📷 Selected File:", selectedFile);
    console.log("📷 Type:", selectedFile.type);
    console.log("📷 Name:", selectedFile.name);

    const formData = new FormData();
    formData.append("file", selectedFile);

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload-image/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("✅ API Response:", response.data);

      navigate("/scaning", {
        state: {
          image: URL.createObjectURL(selectedFile),
          result: response.data,
        },
      });
    } catch (error) {
      console.error("❌ Upload failed:", error);

      if (error.response) {
        console.error("📡 Server responded with error data:", error.response.data);
        console.error("📊 Status code:", error.response.status);
      } else if (error.request) {
        console.error("📭 No response received:", error.request);
      } else {
        console.error("🛠 Error setting up request:", error.message);
      }

      navigate("/scaning", {
        state: {
          image: URL.createObjectURL(selectedFile),
          result: { error: "Scan failed" },
        },
      });
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

        {/* Enhancement Type Dropdown */}
        <select
          value={enhancementType}
          onChange={(e) => setEnhancementType(e.target.value)}
          className="w-[780px] mt-4 mb-2 p-2 border border-gray-300 rounded text-[#0c7489] focus:outline-none focus:ring-2 focus:ring-[#0c7489] focus:border-[#0c7489]"

        >
          <option value="">Select enhancement type</option>
          <option value="srgan">SRGAN (Enhance Quality)</option>
          <option value="denoising">Denoising</option>
          <option value="cyclegan">CycleGAN Style</option>
        </select>

        {/* Enhancer and Choose File Buttons */}
        <div className="mt-2 flex w-[780px] h-[72px] space-x-2">
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
            onClick={handleEnhancement}
            className="inline-flex items-center justify-center font-medium px-6 py-3 bg-[#0c7489] text-white rounded-r-lg cursor-pointer hover:bg-teal-700 w-1/2 h-full"
            disabled={!enhancementType || !selectedFile}
          >
            Enhance
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
