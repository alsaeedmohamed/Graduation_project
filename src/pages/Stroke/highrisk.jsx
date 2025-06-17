import highRisk from "../../images/result1.svg"
import { useLocation } from "react-router-dom";
const HighRisk = () => {
    const location = useLocation();
    const probability = location.state?.probability;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* العنوان الرئيسي */}

      {/* الصورة */}
      <img
        src={highRisk}
        alt="High Risk Illustration"
        className="w-[590px] h-[570px] mb-8 p-5"
      />

      {/* رسالة النتيجة */}
      {/* رسالة النتيجة */}
      <p className="text-lg text-gray-700 font-medium p-5">
        High Risk of stroke. Probability:{" "}
        <span className="text-red-600 font-bold">
          {probability !== undefined
            ? `${(probability * 100).toFixed(2)}%`
            : "N/A"}
        </span>
      </p>
    </div>
  );
};

export default HighRisk;
