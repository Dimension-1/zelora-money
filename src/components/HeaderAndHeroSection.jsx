import React from "react";

const HeaderAndHeroSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white min-h-screen"
      style={{
        backgroundImage: `url('/Images/Navbar/Bg.png')`,
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <div className="mx-auto flex flex-col items-start md:items-center md:justify-between w-full md:max-w-6xl relative h-full">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 w-full">
          <div className="text-red-600 text-4xl font-bold">
            <img
              src="/Images/Navbar/Logo.png"
              alt="Logo"
              className="h-18 w-18"
            />
          </div>
          <ul className="flex space-x-8 text-white text-lg items-center">
            <li>
              <a href="#" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Trade Rooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
              Become a citizen
            </button>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 h-full">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Be a part of the <br />
            <span className="text-red-600 underline decoration-red-600">
              top 5% of traders
            </span>
          </h1>
          <div className="mt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email to receive an invite"
              className="py-3 px-4 rounded-full text-black w-full md:w-96"
            />
            <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors">
              Become a citizen
            </button>
          </div>
          <img
            src="/Images/Navbar/hand.png" // Assuming this is the image of the hand pointing
            alt="Hand pointing"
            className="absolute left-0 bottom-0 transform translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderAndHeroSection;