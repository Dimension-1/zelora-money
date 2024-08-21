import React from "react";

const HeaderAndHeroSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white min-h-screen"
      style={{
        backgroundImage: `url('/Images/Navbar/Bg.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
          <ul className="flex space-x-8 text-white text-lg items-center" style={{ fontFamily: 'RecifeDisplay' }}>
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
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 h-full relative">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight relative" style={{ fontFamily: 'RecifeDisplay', fontWeight: 400}}>
            Be a part of the <br />
            <span className="relative">
              top 5% of traders
              <img
                src="/Images/Navbar/underline.png"
                alt="Underline"
                className="absolute right-0 bottom-0 w-[220px]"
                style={{ transform: "translateY(20%)" }}
              />
            </span>
          </h1>
          <div className="mt-6 flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email to receive an invite"
              className="py-2 px-4 rounded-l-lg text-black w-full md:w-[220px] lg:w-[300px] xl:w-[380px]"
            />
            <button className="bg-[#4C58F2] text-white py-2 px-6 rounded-r-lg hover:bg-blue-700 transition-colors">
              Become a citizen
            </button>
          </div>
        </div>
      </div>
      <img
        src="/Images/Navbar/hand.png"
        alt="Hand pointing"
        className="absolute w-auto h-auto top-[280px] transform"
      />
    </section>
  );
};

export default HeaderAndHeroSection;