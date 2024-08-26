import React, { useState } from "react";

const HeaderAndHeroSection = () => {
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
      <div className="mx-auto flex flex-col items-center md:items-center md:justify-between w-full md:max-w-6xl relative h-full">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 pl-0 w-full">
          <div className="text-red-600 text-4xl font-bold">
            <img
              src="/Images/Navbar/Logo.png"
              alt="Logo"
              className="md:h-48 md:w-48 w-24"
            />
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 pb-12 pt-32 h-full relative">
          <img
            src="/Images/Navbar/coming-soon.png"
            alt="Underline"
            className="absolute -top-12 md:-top-32"
          />
          <h1
            className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight relative"
            style={{ fontFamily: "RecifeDisplay", fontWeight: 400 }}
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
            className="block md:hidden relative w-auto h-auto transform"
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
