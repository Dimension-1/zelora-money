import React from "react";

const CoursesSection = () => {
  const mentors = [
    {
      name: "Chandrakant Sharma",
      title: "Co-founder Fino",
      experience: "5Y+ Full-time Prop trader",
      image: "/Images/Courses/expert1.png",
    },
    {
      name: "Abhimanyu Kucheria",
      title: "Partner & Fund Manager",
      experience: "Second Street Partners",
      image: "/Images/Courses/expert3.png",
    },
    {
      name: "Pratik Patil",
      title: "Proprietary Trader & CMT II",
      experience: "4Y+ Full-time Prop trader",
      image: "/Images/Courses/expert2.png",
    },
  ];

  return (
    <section className="py-16 bg-[#F7F8FA] text-black px-4 md:px-8">
      <div className="mx-auto flex flex-col items-center md:items-center md:justify-center w-full md:max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-5xl font-normal mb-4">Courses</h2>
          <p
            className="text-lg mb-8 max-w-xl font-light"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            4 weeks of online live sessions followed by 4 weeks of mentorship to
            build foundational depth.
          </p>
          <button className="bg-[#4C58F2] hover:bg-blue-700 transition-colors text-white py-3 px-6 rounded-lg flex items-center space-x-2">
            <span style={{ fontFamily: "DM Sans, sans-serif" }}>Explore</span>
            <img
              src="/Images/Icons/ArrowRight.png"
              alt="Arrow Right"
              className="inline w-4 h-4"
            />
          </button>
        </div>

        {/* Main Content Area */}
        <div
          className="bg-[#EBEBEB] p-6 md:p-12 max-w-7xl mx-auto mx-8 rounded-2xl relative"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {/* Trading Mastery 101 */}
          <div className="mb-12 ">
            <div className="flex flex-col justify-center items-start mb-8 md:mb-16 mt-4">
              <h3 className="text-2xl md:text-4xl font-semibold mb-2">
                Trading Mastery 101
              </h3>
              <span className="bg-[#E94A41] text-white px-6 py-2 rounded-full text-sm">
                8 week immersion
              </span>
              <img
                src="/Images/Courses/artboard.png"
                className="hidden md:block absolute right-0 w-1/3 top-[-120px]"
              />
              <img
                src="/Images/Courses/artboard.png"
                className="block md:hidden relative"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#D9D9D9] p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4
                  className="text-lg font-semibold italic text-[#4C58F2] mb-2"
                  style={{ fontFamily: "RecifeDisplay, sans-serif" }}
                >
                  Intraday Trading Bootcamp
                </h4>
                <p className="text-sm text-[#070707] font-light">
                  Dive deep into the fast-paced world of intraday trading with
                  real-time strategies and techniques used by professional
                  traders.
                </p>
              </div>
              <div className="bg-[#D9D9D9] p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4
                  className="text-lg font-semibold italic text-[#4C58F2] mb-2"
                  style={{ fontFamily: "RecifeDisplay, sans-serif" }}
                >
                  Swing Trading Strategies
                </h4>
                <p className="text-sm text-[#070707] font-light">
                  Master the art of swing trading with comprehensive strategies
                  and insights for maximizing medium-term gains.
                </p>
              </div>
              <div className="bg-[#D9D9D9] p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4
                  className="text-lg font-semibold italic text-[#4C58F2] mb-2"
                  style={{ fontFamily: "RecifeDisplay, sans-serif" }}
                >
                  Options Trading Mastery
                </h4>
                <p className="text-sm text-[#070707] font-light">
                  Gain in-depth knowledge of options trading, from basic
                  concepts to advanced strategies for leveraging market
                  movements.
                </p>
              </div>
              <div className="bg-[#D9D9D9] p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4
                  className="text-lg font-semibold italic text-[#4C58F2] mb-2"
                  style={{ fontFamily: "RecifeDisplay, sans-serif" }}
                >
                  Forex Trading Essentials
                </h4>
                <p className="text-sm text-[#070707] font-light">
                  Explore the global currency markets with foundational and
                  advanced strategies in forex trading for consistent success.
                </p>
              </div>
            </div>
          </div>

          {/* Self-Paced Learning Module */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/5 p-0 md:p-6 ">
              <h3 className="text-2xl font-bold mb-6">
                Self-Paced Learning Module
              </h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Fundamental Analysis",
                  "Risk Management Techniques",
                  "Crypto Trading Essentials",
                  "Trading Psychology",
                  "Algorithmic Trading Basics",
                  "Market Microstructure",
                  "Portfolio Management",
                  "Becoming a Funded Trader",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-xl justify-between py-2 border-b border-gray-300 last:border-b-0"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-[#4C58F2] hover:bg-blue-700 transition-all duration-300 ease-in-out text-white py-3 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2">
                <span>View Details</span>
                <img
                  src="/Images/Icons/ArrowRight.png"
                  alt="Arrow Right"
                  className="inline w-4 h-4"
                />
              </button>
            </div>
            <div className="lg:w-3/5 flex flex-col gap-8">
              {/* Demo Image */}
              <div className="relative text-center">
                <img
                  src="/Images/Courses/demo.png"
                  alt="View Demo"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              {/* Mentored by Experts Section */}
              <div className="bg-[#D9D8D8] p-4 sm:p-6 rounded-2xl">
                <h4
                  className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-left"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Mentored by Experts
                </h4>
                <div className="flex overflow-x-auto scrollbar-hide space-x-4">
                  {mentors.map((mentor, index) => (
                    <div
                      key={index}
                      className="bg-[#EBEBEB] min-w-[60px] sm:min-w-[100px] p-2 sm:p-4 flex-shrink-0 rounded-lg shadow-md flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full mb-2 sm:mb-4">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="font-semibold text-xs sm:text-sm text-black mb-1">
                          {mentor.name}
                        </p>
                        <p className="text-xs font-light text-black">
                          {mentor.title}
                        </p>
                        <p className="text-xs font-light text-black">
                          {mentor.experience}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
