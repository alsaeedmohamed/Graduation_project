// eslint-disable-next-line no-unused-vars
import React from "react";
import{ useState } from 'react';
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState("MasterCard");
  const [selectedCard, setSelectedCard] = useState("2478");

  return (
    <div className="flex justify-center items-center min-h-screen ml-[50px] mr-[50px]">
      <div className="p-6 rounded-lg w-full">
        <h2 className="text-lg font-semibold text-left">
          Choose your payment method and choose card
        </h2>
        <p className="text-gray-500 text-sm mb-4 text-left mb-[50px]">
          Lorem ipsum dolor sit amet consectetur
        </p>

        {/* Payment Methods */}
        <div className="space-y-3">
          {["Apple Pay", "PayPal", "MasterCard"].map((method) => (
            <label
              key={method}
              className="flex items-center space-x-2 border p-2 rounded cursor-pointer"
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={selectedMethod === method}
                onChange={() => setSelectedMethod(method)}
                className="hidden"
              />
              <div
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                  selectedMethod === method
                    ? "border-[#0C7489]"
                    : "border-gray-300"
                }`}
              >
                {selectedMethod === method && (
                  <div className="w-2 h-2 bg-[#0C7489] rounded-full"></div>
                )}
              </div>
              <span>{method}</span>
            </label>
          ))}
        </div>

        {/* Choose Card */}
        {selectedMethod === "MasterCard" && (
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-1 text-left ">Choose Card</h3>
            <select
              className="w-full p-2 border rounded"
              value={selectedCard}
              onChange={(e) => setSelectedCard(e.target.value)}
            >
              <option value="2478">MasterCard **** 2478</option>
              <option value="1234">MasterCard **** 1234</option>
            </select>
            <button className="text-[#0C7489] bg-white p-2 border rounded font-bold text-sm mt-2 text-left w-full">
              Add Card
            </button>
          </div>
        )}

        {/* Purchase Information */}
        <div className="bg-white p-4 mt-4 rounded mb-[20px] p-5">
          <h2 className="text-[#0C7489] font-bold text-left">
            Purchase information :
          </h2>

          <div className="flex justify-between">
            <span>Appointment price:</span>
            <span>$60.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-semibold text-[#0C7489] mt-2">
            <span>Total cost:</span>
            <span>$55.00</span>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => navigate("/add-card")}
          className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
