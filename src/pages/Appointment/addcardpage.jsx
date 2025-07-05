// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from '../../images/card.svg';
import{ useState } from 'react';
import { useNavigate } from "react-router-dom";

function AddCardPage() {
  const navigate = useNavigate();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [saveCard, setSaveCard] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-full mr-[50px] ml-[50px]">
        {/* بطاقة الكريدت */}
        <div className="rounded-lg text-white w-full relative">
          <img src={Card} alt="MasterCard" className="w-full" />
        </div>

        {/* إدخال بيانات البطاقة */}
        <h3 className="text-md font-semibold mt-6 text-left">Enter card details</h3>
        <div className="mt-4 space-y-7">
          <input
            type="text"
            placeholder="Card name"
            className="w-full p-2 border rounded"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Card number"
            className="w-full p-2 border rounded"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Expiry date"
              className="w-1/2 p-2 border rounded"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 p-2 border rounded"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        {/* الموافقة على الشروط */}
        <div className="mt-4 space-y-2 text-sm">
          <label className="flex items-center space-x-2 mt-[20px] mb-[10px]">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <span>
              I agree to the <span className="text-[#0C7489]">Terms and conditions</span>
            </span>
          </label>
          <label className="flex items-center space-x-2 mt-[10px] mb-[30px]">
            <input
              type="checkbox"
              checked={saveCard}
              onChange={() => setSaveCard(!saveCard)}
            />
            <span>Save card details</span>
          </label>
        </div>

        {/* زر الإضافة */}
        <button
          onClick={() => navigate("/appointment")}
          className="w-full h-[46px] mt-[20px] bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"
        >
          Add Card
        </button>
      </div>
    </div>
  );
}

export default AddCardPage;
