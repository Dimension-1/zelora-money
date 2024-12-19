import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import "../App.css";

const HeaderAndHeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    console.log("Menu button clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    navigate('/coming-soon'); // Redirect to the /coming-soon page
  };

  return (
    <section
      className="bg-cover bg-center text-white min-h-screen relative"
      style={{
        backgroundImage: `url('/Images/Navbar/Bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="mx-auto flex flex-col items-center justify-center w-full md:max-w-6xl relative h-full">
        {/* Navbar */}
        <nav className="w-full px-6 py-4 z-10 flex justify-between items-center pl-0  absolute top-0 "> {/* Added z-index */}
          <div className="text-red-600 text-4xl font-bold">
            <img
              src="/Images/Navbar/Logo2.png"
              alt="Logo"
              className="md:h-28 md:w-28 w-20"
            />
          </div>
          <ul
            className="hidden lg:flex space-x-8 text-white text-lg items-center"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <li>
              <a href="#" className="hover:underline" onClick={handleRedirect}>
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline" onClick={handleRedirect}>
                Trade Rooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline" onClick={handleRedirect}>
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline" onClick={handleRedirect}>
                Resources
              </a>
            </li>
            <button
              className="bg-[#4C58F2] text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={handleRedirect}
            >
              Become a citizen
            </button>
          </ul>
          {/* Mobile menu */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              className="bg-[#4C58F2] text-xs sm:text-xl text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={handleRedirect}
            >
              Become a citizen
            </button>
            <button
              className="text-white text-2xl"
              onClick={toggleMenu}
              style={{ zIndex: 9999, position: "relative" }}
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
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-30 mt-2">
            <ul className="text-center space-y-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <li>
                <a href="#" className="hover:underline" onClick={handleRedirect}>
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" onClick={handleRedirect}>
                  Trade Rooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" onClick={handleRedirect}>
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" onClick={handleRedirect}>
                  Resources
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 h-full relative z-10">
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
          <div className="mt-6 flex flex-col md:flex-row items-center" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <input
              type="email"
              placeholder="Enter your email to receive an invite"
              className="py-2 px-4 rounded-lg md:rounded-l-lg md:rounded-r-none text-black w-[300px] md:w-[220px] lg:w-[300px] xl:w-[380px] mb-4 md:mb-0"
            />
            <button
              className="bg-[#4C58F2] text-white py-2 px-6 rounded-lg md:rounded-r-lg md:rounded-l-none hover:bg-blue-700 transition-colors"
              onClick={handleRedirect}
            >
              Become a citizen
            </button>
          </div>
        </div>
      </div>
      {/* Hand Image */}
      <img
        src="/Images/Navbar/hand.png"
        alt="Hand pointing"
        className="hidden lg:block absolute w-auto h-auto top-[62%] left-0 transform -translate-y-1/2"
      />
    </section>
  );
};

export default HeaderAndHeroSection;