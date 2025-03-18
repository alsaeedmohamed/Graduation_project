// AboutUs.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import aboutus from '../images/aboutus.svg';
import aboutus2 from '../images/aboutus2.svg';
import whychooseus from '../images/whychooseus.svg';

function AboutUs() {
  return (
    <div>
      <div className="p-10">
        {/* About Us Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-[60px] mr-[60px] pt-[10px]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              About Us, and our Best Services
            </h2>
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[#0C7489]">
                      Preventive care
                    </h3>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <br />
                  <button className="text-white rounded-tl-13 rounded-br-24 w-[80px] h-[40px] bg-[#0C7489]">
                    ➔
                  </button>
                </div>
              ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left ml-[60px]">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center ml-[60px] mr-[60px]">
            <img
              src={whychooseus}
              alt="Doctor with patient"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array(6)
                .fill()
                .map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div>
                      <img className="w-[20px] h-[20px]" src={aboutus2} alt="" />
                      <h3 className="text-lg font-semibold text-[#0C7489] text-left">
                        Preventive care
                      </h3>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur. Sed nulla.
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <div className="rounded-lg w-full relative">
          <img
            src={aboutus}
            alt="MasterCard"
            className="w-full mt-20"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;