import React from "react";

const HeaderAndHeroSection = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center text-white min-h-screen relative flex flex-col items-center justify-start bg-custom"
        style={{
          backgroundImage: `url('/Images/Navbar/bg-coming.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat.
          backgroundPosition: "center", // Keeps the image centered.
          zIndex: "9999"
        }}
      >
        {/* Navbar */}
        <nav className="w-full px-6 py-4 z-10 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex flex-1 justify-start items-center">
            <img
              src="/Images/Navbar/Logo2.png"
              alt="Logo"
              className="w-32 md:w-48 h-auto"
            />
          </div>

          {/* Center: "Coming Soon" Badge */}
          <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2">
            <img
              src="/Images/Navbar/coming-soon.png"
              alt="Coming Soon"
              className="h-32 w-auto md:h-40 lg:h-48"
            />
          </div>

          {/* Right: Placeholder for future items */}
          <div className="flex flex-1 justify-end items-center">
            {/* Optionally, you can add social icons or navigation links here */}
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 pb-12 pt-24 md:pt-32 h-full relative z-10">
          <h1
            className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight"
            style={{ fontFamily: "RecifeDisplay", fontWeight: 400 }}
          >
            Be a part of the <br />
            <span className="relative inline-block">
              top 5% of traders
              <img
                src="/Images/Navbar/underline.png"
                alt="Underline"
                className="absolute right-0 bottom-0 w-[220px] md:w-[220px]"
                style={{ transform: "translateY(20%)" }}
              />
            </span>
          </h1>
          {/* Hero Image for Mobile */}
          <img
            src="/Images/Navbar/hand-mobile.png"
            alt="Hand pointing"
            className="block md:hidden relative w-auto h-auto mt-6"
          />
          {/* Input and Button Section */}
          <div
            className="mt-6 flex flex-col md:flex-row items-center"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <input
              type="email"
              placeholder="Enter your email to receive an invite"
              className="py-2 px-4 rounded-lg md:rounded-l-lg md:rounded-r-none text-black w-[300px] md:w-[220px] lg:w-[300px] xl:w-[380px] mb-4 md:mb-0"
            />
            <button className="bg-[#4C58F2] text-white py-2 px-6 rounded-lg md:rounded-r-lg md:rounded-l-none hover:bg-blue-700 transition-colors">
              Become a citizen
            </button>
          </div>
        </div>

        {/* Hand Image for Larger Screens */}
        <img
          src="/Images/Navbar/hand.png"
          alt="Hand pointing"
          className="hidden lg:block absolute w-auto h-auto bottom-[0%] left-0 transform -translate-y-1/2"
        />
      </section>
    </div>
  );
};

export default HeaderAndHeroSection;
