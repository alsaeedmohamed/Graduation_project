import lowRisk from "../images/result2.svg"
const LowRisk = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">

      {/* الصورة */}
      <img
        src={lowRisk}
        alt="Low Risk Illustration"
        className="w-[590px] h-[570px] mb-8 p-5"
      />

      {/* رسالة النتيجة */}
      <p className="text-lg text-gray-700 font-medium p-5">
        Low Risk of stroke. Probability:{" "}
        <span className="text-[#0c7489]  font-bold">00.07%</span>
      </p>
    </div>
  );
};

export default LowRisk;