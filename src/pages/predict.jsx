/* eslint-disable no-unused-vars */
import React from "react";
import predict from "../images/predict.svg"
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const questions = [
    { id: 1, question: "How old are you?" },
    { id: 2, question: "Do you have high blood pressure?" },
    { id: 3, question: "Do you smoke?" },
    { id: 4, question: "Do you have diabetes?" },
    { id: 5, question: "What is your gender?" },
    { id: 6, question: "Do you exercise regularly?" },
    { id: 7, question: "Do you consume alcohol frequently?" },
    { id: 8, question: "Do you have any family history of stroke?" },
    { id: 9, question: "What is your average daily salt intake?" },
    { id: 10, question: "Do you experience frequent stress?" },
  ];
  
function Prediction() {
  
    const navigate =useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(false); // لحفظ حالة الخطأ

  const handleNext = () => {
    if (!answers[currentStep]) {
      setError(true); // إذا لم تكن هناك إجابة، اظهر الخطأ
    } else {
      setError(false); // إزالة الخطأ عند الإجابة
      setCurrentStep(currentStep + 1); // الانتقال للسؤال التالي
    }
  };

  const handleBack = () => {
    setError(false); // إزالة الخطأ عند الرجوع
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    setAnswers({
      ...answers,
      [currentStep]: e.target.value,
    });
    setError(false); // إزالة الخطأ عند إدخال الإجابة
  };
 
  
  const handlePredict = async () => {
    try {
      // إرسال الإجابات للـ backend
      const response = await fetch("https://your-backend-api.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });
  
      const data = await response.json();
  
      // التحقق من النتيجة
      if (data.probability > 0.5) {
        // الانتقال إلى صفحة الإصابة العالية
        window.location.href = "/src/pages/highrisk.jsx";
      } else {
        // الانتقال إلى صفحة الإصابة المنخفضة
        window.location.href = "/src/pages/lowrisk.jsx";
      }
    } catch (error) {
      console.error("Error during prediction:", error);
    }
  };
  
        
 
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1  flex items-center justify-center">
        <div className="text-center px-4">
          {/* Image */}
          <h3 className="text-2xl font-poppins font-bold text-gray-9 00 mt-6 text-left">
          Predict your stroke risk now!       </h3>
          <p className="text-left font-poppins text-[#59595A] text-[20px] leading-[30px]">Answer a few quick questions to help us assess your risk of stroke</p>
          <img
            src={predict} 
            width={400}
            height={400}  
            className="mx-auto mt-[10px]"
            />
        </div>
        </div>

      {/* Right Section - Form */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Predict your stroke risk now!
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Lorem ipsum dolor sit amet consectetur. Sed nulla tellus
        </p>
        <p className="text-sm text-center text-[#0C7489] mb-6">
          Step {currentStep} of {questions.length}
        </p>
        <label htmlFor="answer" className="block text-left text-lg font-medium mb-2">
          {questions[currentStep - 1].question}
        </label>
        <input
          type="text"
          id="answer"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring focus:border-[#0c7489]"
          value={answers[currentStep] || ""}
          onChange={handleInputChange}
        />
        {error && (
  <p className="text-red-500 text-sm mb-4">Please answer the question before proceeding.</p>
)}
        <div className="flex justify-between">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="w-full mr-[5px] bg-white py-2 border-[1.5px] border-[#0c7489] text-[#0c7489]  px-4 rounded-lg "
            >
              Back
            </button>
          )}
          {currentStep < questions.length ? (
            <button
            onClick={handleNext}
            className={`w-full  py-2 px-4 rounded-lg border-[1.5px] border-[#4C4C4D]${
              answers[currentStep]
                ? "w-full bg-[#0C7489]  text-white  "
                : "w-full bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!answers[currentStep]} // تعطيل الزر إذا لم تتم الإجابة
          >
            Next
          </button>
          ) : (
            <button
            // onClick={() => navigate("/src/pages/highrisk.jsx")}
            onClick={handlePredict} 
              className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"
            >
              Predict
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}



export default Prediction;
