import highRisk from "../../images/result1.svg";
import { useLocation } from "react-router-dom";

const HighRisk = () => {
  const location = useLocation();
  const probability = location.state?.probability;
  const instructions = location.state?.instructions;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <img
        src={highRisk}
        alt="High Risk Illustration"
        className="w-[590px] h-[570px] mb-6 p-5"
      />

      <p className="text-lg text-gray-800 font-medium text-center mb-3">
        High Risk of stroke. Probability:{" "}
        <span className="text-red-600 font-bold">
          {probability !== undefined ? `${(probability * 100).toFixed(2)}%` : "N/A"}
        </span>
      </p>

      {instructions && (
        <p className="text-center text-red-700 font-semibold text-base px-6 max-w-xl leading-relaxed">
          {instructions}
        </p>
      )}
    </div>
  );
};

export default HighRisk;
