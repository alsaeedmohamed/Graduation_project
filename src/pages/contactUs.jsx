// Contact.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import contact from '../images/contact.svg';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!email.trim() || !validateEmail(email)) {
      newErrors.email = "Please input a valid email. This email is invalid.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 font-poppins">
            {/* Image */}
            <h3 className="text-2xl font-bold text-gray-900 mt-6 text-left">
              Get in touch
            </h3>
            <p className="text-gray-600 text-left mb-5">
              We are here for you! How can we help?
            </p>
            <img
              src={contact}
              width={400}
              height={400}
              className=""
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-md w-[600px] mr-[50px]">
            <h2 className="text-2xl font-bold text-center">Contact Us</h2>
            <p className="text-gray-500 text-center mb-6">
              We are here for you! How can we help?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-left">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Example"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-left">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-left">Message</label>
                <textarea
                  className="w-full p-2 border rounded h-24"
                  placeholder="Lorem ipsum dolor sit amet consectetur. Sed nulla tellus"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;