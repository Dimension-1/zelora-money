import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#070707] text-white relative">
      <div className="mx-auto flex flex-col md:items-center md:justify-between w-full md:max-w-6xl">
        <div className="flex justify-center px-4 lg:px-0">
          <img
            src="/Images/About/background-image-1.png"
            alt="Background Drawing"
            className="w-full hidden md:block max-w-4xl"
          />
          <img
            src="/Images/About/background-image-mobile-1.png"
            alt="Background Drawing"
            className="w-full max-w-4xl block md:hidden"
          />
        </div>

        <div className="bg-[#1A1A1A] p-12 rounded-lg mx-4 lg:mx-8 relative">
          <img
            src="/Images/About/tape.png"
            alt="Tape"
            className="absolute top-[-20px] left-[-20px] w-24 h-24"
          />

          <h2
            className="text-center text-md md:text-xl mb-4"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            ROADMAP TO SUCCESS
          </h2>
          <h3 className="text-center text-4xl md:text-5xl">
            How Do You Achieve?
          </h3>

          <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 relative">
            {/* Vertical Line for Mobile */}
            <div className="block lg:hidden absolute h-[87%] inset-y-0 top-[10%] left-[12%] md:left-[9%] md:h-[700px] md:h-full w-[2px] bg-[#4C58F2] md:max-h-full">
              <div
                className="absolute right-0 top-[-5px]"
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: "8px solid #4C58F2",
                }}
              ></div>
            </div>

            {/* Horizontal Line for Desktop with CSS Arrow */}
            <div className="hidden lg:block absolute left-[5%] inset-x-0 top-[86px] lg:top-[86px] h-[2px] bg-[#4C58F2] max-w-4xl px-4">
              {/* CSS Arrowhead */}
              <div
                className="absolute right-0 top-[-5px]"
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: "8px solid #4C58F2",
                }}
              ></div>
            </div>

            {/* Card 1 */}
            <div className="flex-1 p-0 md:p-6 rounded-lg flex flex-col justify-start items-start relative">
              <div className="relative z-10 flex items-center justify-center mb-4">
                <img
                  src="/Images/About/Circle.png"
                  alt="Circle"
                  className="w-20 h-20 relative top-[30px]"
                />
                <img
                  src="/Images/About/01.png"
                  alt="01"
                  className="absolute w-14 h-auto"
                  style={{
                    top: "86%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div
                className="bg-[#EDEDED] text-black p-6 rounded-lg shadow-lg"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <h4 className="text-xl font-semibold mb-2">
                  Online Application
                </h4>
                <p className="text-[#070707] mb-4 font-light">
                  Fill out a quick form to share your trading experience, goals,
                  and why you want to join zelora Club.
                </p>
                <p className="text-[#070707]">60 seconds</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 p-0 md:p-6 rounded-lg flex flex-col justify-start items-start relative">
              <div className="relative z-10 flex items-center justify-center mb-4">
                <img
                  src="/Images/About/Circle.png"
                  alt="Circle"
                  className="w-20 h-20 relative top-[30px]"
                />
                <img
                  src="/Images/About/02.png"
                  alt="02"
                  className="absolute w-14 h-auto"
                  style={{
                    top: "86%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div
                className="bg-[#EDEDED] text-black p-6 rounded-lg shadow-lg"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <h4 className="text-xl font-semibold mb-2">
                  Screening Session
                </h4>
                <p className="text-[#070707] mb-4 font-light">
                  A brief one-on-one call to understand your trading strategies
                  & experience to ensure mutual alignment.
                </p>
                <p className="text-[#070707]">15 minutes</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-1 p-0 md:p-6 rounded-lg flex flex-col justify-start items-start relative">
              <div className="relative z-10 flex items-center justify-center mb-4">
                <img
                  src="/Images/About/Circle.png"
                  alt="Circle"
                  className="w-20 h-20 relative top-[30px]"
                />
                <img
                  src="/Images/About/03.png"
                  alt="03"
                  className="absolute w-14 h-auto"
                  style={{
                    top: "86%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div
                className="bg-[#EDEDED] text-black p-6 rounded-lg shadow-lg"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <h4 className="text-xl font-semibold mb-2">Invitation</h4>
                <p className="text-[#070707] mb-4 font-light">
                  Receive your exclusive invite to join zelora Club and access our
                  elite trading community.
                </p>
                <p className="text-[#070707]">Within 48 hours</p>
              </div>
            </div>
          </div>

          <img
            src="/Images/About/hand.png"
            alt="Hand"
            className="absolute bottom-[0px] right-[0] md:right-[50px] w-40 h-40"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
