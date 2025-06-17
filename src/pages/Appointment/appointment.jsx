// Appointment.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import appointment from '../../images/appointment.svg';
function Appointment() {
  return (
    <div>
      {/* باقي محتوى الصفحة */}
      <div className="rounded-lg text-white w-full relative">
        <img
          src={appointment}
          alt="MasterCard"
          className="w-[500px] m-auto mt-[50px]"
        />
      </div>
    </div>
  );
}

export default Appointment;
