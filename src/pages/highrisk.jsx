import highRisk from "../images/result1.svg"
const HighRisk = () => {
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
      <p className="text-lg text-gray-700 font-medium p-5">
        High Risk of stroke. Probability:{" "}
        <span className="text-[#0c7489]  font-bold">54.72%</span>
      </p>
    </div>
  );
};

export default HighRisk;