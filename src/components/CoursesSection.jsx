import React from "react";

const CoursesSection = () => {
  return (
    <section className="py-24 bg-[#F7F8FA] text-black">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold mb-4">Courses</h2>
        <p className="text-lg mb-8">
          4 weeks of online live sessions followed by 4 weeks of mentorship to
          build foundational depth.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 px-6 rounded-full shadow-lg">
          Explore
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#EBEBEB] p-12 max-w-7xl mx-auto mx-8 rounded-2xl">
        {/* Trading Mastery 101 */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Trading Mastery 101</h3>
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
              8 week immersion
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EBEBEB] p-6 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                Intraday Trading Bootcamp
              </h4>
              <p className="text-sm text-gray-700">
                Dive deep into the fast-paced world of intraday trading with
                real-time strategies and techniques used by professional
                traders.
              </p>
            </div>
            <div className="bg-[#EBEBEB] p-6 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                Swing Trading Strategies
              </h4>
              <p className="text-sm text-gray-700">
                Master the art of swing trading with comprehensive strategies
                and insights for maximizing medium-term gains.
              </p>
            </div>
            <div className="bg-[#EBEBEB] p-6 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                Options Trading Mastery
              </h4>
              <p className="text-sm text-gray-700">
                Gain in-depth knowledge of options trading, from basic concepts
                to advanced strategies for leveraging market movements.
              </p>
            </div>
            <div className="bg-[#EBEBEB] p-6 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                Forex Trading Essentials
              </h4>
              <p className="text-sm text-gray-700">
                Explore the global currency markets with foundational and
                advanced strategies in forex trading for consistent success.
              </p>
            </div>
          </div>
        </div>

        {/* Self-Paced Learning Module */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/5 p-6 ">
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
                  className="flex items-center justify-between py-2 border-b border-gray-300 last:border-b-0"
                >
                  <span>{item}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center space-x-2">
              <span>View Details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="lg:w-3/5 flex flex-col gap-8">
            <div className="relative">
              <img
                src="/Images/Courses/demo.png"
                alt="View Demo"
                className="rounded-lg shadow-lg w-full"
              />
              <span className="absolute bottom-4 left-4 bg-black text-white py-1 px-3 rounded-lg shadow">
                View Demo
              </span>
            </div>
            <div className="bg-[#D9D8D8] p-6 rounded-2xl">
              <h4 className="text-2xl font-bold mb-6 text-left">
                Mentored by Experts
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
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
                    image: "/Images/Courses/expert2.png",
                  },
                  {
                    name: "Pratik Patil",
                    title: "Proprietary Trader & CMT II",
                    experience: "4Y+ Full-time Prop trader",
                    image: "/Images/Courses/expert3.png",
                    withIcon: true,
                  },
                ].map((mentor, index) => (
                  <div
                    key={index}
                    className="bg-[#EBEBEB] pb-4 transition-shadow text-center relative"
                  >
                    <div className="mx-auto overflow-hidden mb-2">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-lg text-black">
                      {mentor.name}
                    </p>
                    <p className="text-sm text-blakc">{mentor.title}</p>
                    <p className="text-xs text-black">{mentor.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
