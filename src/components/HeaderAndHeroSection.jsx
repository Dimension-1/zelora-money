import React, { useState } from "react";

const HeaderAndHeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu button clicked"); // Debugging: log when the button is clicked
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section
      className="bg-cover bg-center text-white min-h-screen relative"
      style={{
        backgroundImage: `url('/Images/Navbar/Bg.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="mx-auto flex flex-col items-center justify-center w-full md:max-w-6xl relative h-full">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 pl-0 w-full absolute top-0">
          <div className="text-red-600 text-4xl font-bold">
            <img
              src="/Images/Navbar/Logo.png"
              alt="Logo"
              className="md:h-48 md:w-48 w-24"
            />
          </div>
          <ul
            className="hidden lg:flex space-x-8 text-white text-lg items-center"
            style={{ fontFamily: "RecifeDisplay" }}
          >
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
            <button className="bg-[#4C58F2] text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Become a citizen
            </button>
          </ul>
          {/* Mobile menu */}
          <div className="flex lg:hidden items-center space-x-4">
            <button className="bg-[#4C58F2] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Become a citizen
            </button>
            <button
              className="text-white text-2xl"
              onClick={toggleMenu}
              style={{ zIndex: 9999, position: "relative" }} // Adjust the z-index and position
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-10 mt-2">
            <ul className="text-center space-y-4">
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
          </ul>
          </div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 h-full relative">
          <h1
            className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight relative"
            style={{
              fontFamily: "RecifeDisplay",
              fontWeight: 400,
              backdropFilter: "brightness(70%)",
            }}
          >
            Be a part of the <br />
            <span className="relative">
              top 5% of traders
              <img
                src="/Images/Navbar/underline.png"
                alt="Underline"
                className="absolute right-0 bottom-0 w-[220px] md:w-[220px] md:w-[220px]"
                style={{ transform: "translateY(20%)" }}
              />
            </span>
          </h1>
          <img
            src="/Images/Navbar/hand-mobile.png"
            alt="Hand pointing"
            className="block lg:hidden relative w-auto h-auto transform"
          />
          <div className="mt-6 flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email to receive an invite"
              className="py-2 px-4 rounded-lg md:rounded-l-lg text-black w-[300px] md:w-[220px] lg:w-[300px] xl:w-[380px] mb-4 md:mb-0"
            />
            <button className="bg-[#4C58F2] text-white py-2 px-6 rounded-lg md:rounded-r-lg hover:bg-blue-700 transition-colors">
              Become a citizen
            </button>
          </div>
        </div>
      </div>
      {/* Hand Image */}
      <img
        src="/Images/Navbar/hand.png"
        alt="Hand pointing"
        className="hidden lg:block absolute w-auto h-auto top-[50%] left-0 transform -translate-y-1/2"
      />
    </section>
  );
};

export default HeaderAndHeroSection;
