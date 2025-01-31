/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import predict from "../images/predict.svg";

const questions = [
  { id: 1, question: "What is your age?", type: "number" },
  { id: 2, question: "Do you have hypertension?", type: "dropdown", options: ["0", "1"] },
  { id: 3, question: "Do you have heart disease?", type: "dropdown", options: ["0", "1"] },
  { id: 4, question: "What is your average glucose level?", type: "number" },
  { id: 5, question: "What is your BMI?", type: "number" },
  { id: 6, question: "What is your gender?", type: "dropdown", options: ["Male", "Female"] },
  { id: 7, question: "Have you ever been married?", type: "dropdown", options: ["Yes", "No"] },
  { id: 8, question: "What is your work type?", type: "dropdown", options: ["Public", "Private"] },
  { id: 9, question: "What is your residence type?", type: "dropdown", options: ["Urban", "Rural", "Suburban"] },
  { id: 10, question: "What is your smoking status?", type: "dropdown", options: ["Never Smoked", "Former Smoker", "Current Smoker", "Occasional Smoker", "Passive Smoker"] }
];

function Prediction() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!answers[currentStep] && answers[currentStep] !== 0) {
      setError(true);
    } else {
      setError(false);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setError(false);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    setAnswers({
      ...answers,
      [currentStep]: e.target.value,
    });
    setError(false);
  };

  const handleIncrement = () => {
    setAnswers({
      ...answers,
      [currentStep]: (answers[currentStep] || 0) + 1,
    });
    setError(false);
  };

  const handleDecrement = () => {
    setAnswers({
      ...answers,
      [currentStep]: Math.max((answers[currentStep] || 0) - 1, 0),
    });
    setError(false);
  };

  const handlePredict = async () => {
    try {
      const response = await fetch("https://your-backend-api.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });

      const data = await response.json();
      if (data.probability > 0.5) {
        window.location.href = "/src/pages/highrisk.jsx";
      } else {
        window.location.href = "/src/pages/lowrisk.jsx";
      }
    } catch (error) {
      console.error("Error during prediction:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mt-6 text-left">
            Predict your stroke risk now!
          </h3>
          <p className="text-left font-poppins text-[#59595A] text-[20px] leading-[30px]">
            Answer a few quick questions to help us assess your risk of stroke
          </p>
          <img src={predict} width={400} height={400} className="mx-auto mt-[10px]" />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-2 text-center">Predict your stroke risk now!</h1>
          <p className="text-gray-600 text-center mb-4">Answer questions to help us assess your risk of stroke </p>
          <p className="text-sm text-center text-[#0C7489] mb-6">
          Step {currentStep} of {questions.length}
          </p>
          <label htmlFor="answer" className="block text-left text-lg font-medium mb-2">
            {questions[currentStep - 1].question}
          </label>
          {questions[currentStep - 1].type === "dropdown" ? (
            <select
              id="answer"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring focus:border-[#0c7489]"
              value={answers[currentStep] || ""}
              onChange={(e) => {
                handleInputChange(e);
                setError(false);
              }}
            >
              <option value="" className="text-gray-400">Select an option</option>
              {questions[currentStep - 1].options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <div className="flex items-center border rounded-lg p-3 mb-3">
              <input
                type="number"
                id="answer"
                className="w-full text-center border-none focus:outline-none"
                value={answers[currentStep] || 0}
                readOnly
              />
              <button onClick={handleDecrement} className="text-lg font-bold px-2">-</button>
              <button onClick={handleIncrement} className="text-lg font-bold px-2">+</button>
            </div>
          )}

          {error && <p className="text-red-500 text-sm mb-4">Please answer the question before proceeding.</p>}

          <div className="flex justify-between">
            {currentStep > 1 && (
              <button onClick={handleBack} className="w-full mr-[5px] bg-white py-2 border-[1.5px] border-[#0c7489] text-[#0c7489] px-4 rounded-lg">
                Back
              </button>
            )}
            {currentStep < questions.length ? (
              <button onClick={handleNext} className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg">
                Next
              </button>
            ) : (
              <button onClick={handlePredict} className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300">
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