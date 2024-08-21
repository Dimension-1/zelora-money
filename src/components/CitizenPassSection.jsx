import React from "react";

const CitizenPassSection = () => {
  const checkmarkIcon = "/Images/CitizenPass/checkmark.svg"; // Replace with the path to your SVG

  return (
    <section className="relative px-8">
      <div className="mx-auto flex flex-col items-center md:items-center md:justify-center w-full md:max-w-6xl">
        {/* Top half with black background */}
        <div className="text-white py-16">
          <div className="max-w-7xl flex flex-row h-[867px]">
            {/* Left Side - All Access Citizen Pass */}
            <div
              className="p-8 flex flex-col items-center justify-center relative w-1/3 rounded-l-lg"
              style={{
                backgroundImage: `url('/Images/CitizenPass/bg.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src="/Images/CitizenPass/icon.png"
                alt="Citizen Pass Icon"
                className="mb-8 h-auto"
              />
              <h2 className="text-4xl font-light text-center mb-4">
                An All Access Citizen Pass
              </h2>
              <p className="text-xl text-center mb-8">PRICING AND BENEFITS</p>
              <img
                src="/Images/CitizenPass/arrow.png"
                alt="Arrow"
                className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 h-auto"
              />
            </div>

            {/* Middle - Pricing Plans */}
            <div className="flex flex-col justify-center items-center bg-[#EBEBEB] rounded-r-lg">
              <div className="flex  p-8">
                <div className="bg-white text-black p-8 rounded-lg shadow-lg mr-6 h-[585px]">
                  <h3 className="text-xl font-bold mb-4">Monthly Plan</h3>
                  <p className="text-2xl font-bold mb-4">$36/month</p>
                  <ul className="space-y-2 mb-8">
                    {[
                      "Clear defined trading outcomes",
                      "Flexible course durations",
                      "4-week membership post immersion",
                      "Advanced resources and tools",
                      "Frequent, flexible live sessions",
                      "Professional traders led community",
                      "Invite to member-only offline events",
                      "Switch to Crypto trade signals anytime",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <img
                          src="Images/CitizenPass/checkbox.png"
                          alt="Checkmark"
                          className="w-5 h-5 mr-2"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white text-black p-8 border border-[#E94A41] rounded-lg shadow-lg relative h-[694px]">
                  <div className="absolute top-11 right-4 bg-white text-[#E94A41] border border-[#E94A41] py-1 px-4 rounded-lg">
                    30% OFF
                  </div>
                  <h3 className="text-xl font-bold mb-4">Yearly Plan</h3>
                  <p className="text-2xl font-bold mb-4">$290/year</p>
                  <ul className="space-y-2 mb-8">
                    {[
                      "Clear defined trading outcomes",
                      "Flexible course durations",
                      "4-week membership post immersion",
                      "Advanced resources and tools",
                      "Frequent, flexible live sessions",
                      "Professional traders led community",
                      "Invite to member-only offline events",
                      "Monthly masterclass",
                      "Pay with crypto",
                      "Crypto trade signals",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <img
                          src="Images/CitizenPass/checkbox.png"
                          alt="Checkmark"
                          className="w-5 h-5 mr-2"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="bg-blue-600 text-white text-sm py-2 px-6 rounded-lg">
                Become a citizen
              </button>
            </div>
          </div>
        </div>

        {/* Bottom half with white background */}
        <div className="flex flex-col justify-center items-center">
          {/* Bottom Illustration */}
          <div className="z-10">
            <img
              src="/Images/CitizenPass/illustration1.png"
              alt="Illustration"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenPassSection;
