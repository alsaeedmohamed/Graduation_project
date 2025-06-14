import lowRisk from "../images/result2.svg";
import { useLocation } from "react-router-dom";

const LowRisk = () => {
  const location = useLocation();
  const probability = location.state?.probability;
        console.log( probability);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* الصورة */}
      <img
        src={lowRisk}
        alt="Low Risk Illustration"
        className="w-[590px] h-[570px] mb-8 p-5"
      />

      {/* رسالة النتيجة */}

      <p className="text-lg text-gray-700 font-medium p-5">
        Low Risk of stroke. Probability:{" "}
        <span className="text-[#0c7489] font-bold">
          {probability !== undefined
            ? `${(probability * 100).toFixed(2)}%`
            : "N/A"}
        </span>
      </p>

    </div>
  );
};

export default LowRisk;
