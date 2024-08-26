import React from "react";

const CitizenPassSection = () => {
  const checkmarkIcon = "/Images/CitizenPass/checkbox.png";
  const addIcon = "/Images/CitizenPass/add.png";

  const yearlyPlanItems = [
    { text: "Clear defined trading outcomes", icon: checkmarkIcon },
    { text: "Flexible course durations", icon: checkmarkIcon },
    { text: "4-week membership post immersion", icon: checkmarkIcon },
    { text: "Advanced resources and tools", icon: checkmarkIcon },
    { text: "Frequent, flexible live sessions", icon: checkmarkIcon },
    { text: "Professional traders led community", icon: checkmarkIcon },
    { text: "Invite to member-only offline events", icon: checkmarkIcon },
    { text: "Monthly masterclass", icon: addIcon },
    { text: "Pay with crypto", icon: addIcon },
    { text: "Crypto trade signals", icon: addIcon },
  ];

  return (
    <section className="relative px-4 md:px-8 overflow-hidden">
      <div className="mx-auto flex flex-col items-center md:items-center md:justify-center w-full md:max-w-6xl">
        {/* Top half with black background */}
        <div className="text-white py-16">
          <div className="max-w-7xl flex flex-col md:flex-row rounded mx-4">
            {/* Left Side - All Access Citizen Pass */}
            
            <div
              className="py-10 p-2 md:p-8 flex flex-col items-center md:justify-center relative md:w-1/3 rounded-t-lg md:rounded-l-lg"
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
                className="absolute bottom-[5%] md:bottom-[25%] left-1/2 transform -translate-x-1/2 h-auto"
              />
            </div>

            {/* Middle - Pricing Plans */}
            <div className="flex flex-col lg:items-center bg-[#EBEBEB] rounded-b-lg md:rounded-r-lg pb-4">
              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start p-4 md:p-8">
                <div className="bg-white text-black p-8 rounded-lg shadow-lg mr-0 mb-4 md:mb-0 lg:mr-6">
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
                      <li key={index} className="flex items-center pt-4">
                        <img
                          src={checkmarkIcon}
                          alt="Checkmark"
                          className="w-5 h-5 mr-2"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative bg-white text-black p-8 border border-[#E94A41] rounded-lg shadow-lg relative lg:mt-0 mt-4">
                  <div className="absolute top-11 right-4 bg-white text-[#E94A41] border border-[#E94A41] py-1 px-4 rounded-lg">
                    30% OFF
                  </div>
                  <h3 className="text-xl font-bold mb-4">Yearly Plan</h3>
                  <p className="text-2xl font-bold mb-4">$290/year</p>
                  <ul className="space-y-2 mb-8">
                    {yearlyPlanItems.map((item, index) => (
                      <li key={index} className="flex items-center pt-4">
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="w-5 h-5 mr-2"
                        />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="lg:hidden block bg-[#4C58F2] text-white text-sm py-2 px-6 mt-4 rounded-lg">
                  Become a citizen
                </button>
              </div>
              <button className="hidden lg:block bg-[#4C58F2] text-white text-sm py-2 px-6 mt-4 rounded-lg text-center">
                Become a citizen
              </button>
            </div>
          </div>
        </div>

        {/* Bottom half with white background */}
        <div className="flex flex-col justify-center items-center relative">
          {/* Bottom Illustration */}
          <div className="z-10">
            <img
              src="/Images/CitizenPass/illustration1.png"
              alt="Illustration"
              className="hidden md:block"
            />
            <img
              src="/Images/CitizenPass/illustration1-mobile.png"
              alt="Illustration"
              className="relative block md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenPassSection;