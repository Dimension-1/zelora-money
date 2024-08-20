import React from "react";

const CitizenPassSection = () => {
  const checkmarkIcon = "/Images/CitizenPass/checkmark.svg"; // Replace with the path to your SVG

  return (
    <section className="relative">
      <div className="mx-auto flex flex-col items-center md:items-center md:justify-center w-full md:max-w-6xl">
        {/* Top half with black background */}
        <div className="text-white py-16">
          <div className="max-w-7xl flex flex-row h-[867px]">
            {/* Left Side - All Access Citizen Pass */}
            <div
              className="p-8 flex flex-col items-center justify-center relative"
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
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-4">
                An All Access Citizen Pass
              </h2>
              <p className="mb-4">PRICING AND BENEFITS</p>
              <img
                src="/Images/CitizenPass/arrow.png"
                alt="Arrow"
                className="bottom-8 left-8"
              />
            </div>

            {/* Middle - Pricing Plans */}
            <div className="flex flex-col justify-center items-center bg-[#EBEBEB]">
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
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                name: "- Rajesh K.",
                title: "Stock Market Enthusiast",
                img: "/Images/CitizenPass/testimonial1.png",
              },
              {
                name: "- Emily R.",
                title: "Professional Trader",
                img: "/Images/CitizenPass/testimonial2.png",
              },
              {
                name: "- Sneha S.",
                title: "Investment Advisor",
                img: "/Images/CitizenPass/testimonial3.png",
              },
            ].map((testimonial, index) => (
              <div key={index} className="">
                <img
                  src={testimonial.img}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Bottom Illustration */}
          <div className="z-10">
            <img
              src="/Images/CitizenPass/illustration.png"
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
