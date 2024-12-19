import React from "react";
import { useNavigate } from 'react-router-dom';

const JoinCommunitySection = () => {
  
    const navigate = useNavigate(); // Initialize useNavigate
  const handleRedirect = () => {
    navigate('/coming-soon'); // Redirect to the /coming-soon page
  };
  return (
    <section
      className="py-24 bg-red-600 text-white flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url('/Images/Background/pattern.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex flex-col items-center justify-center w-full md:max-w-6xl">
        <h2 className="text-4xl max-w-3xl font-normal text-center mb-8">
          Become a part of the fastest growing trading communities of the world
        </h2>
        <div className="flex items-center w-full max-w-3xl">
          <div className="flex w-full" style={{fontFamily: "DM Sans, sans-serif"}}>
            <input
              type="email"
              placeholder="Enter your email to receive an invite"
              className="py-2 md:py-3 px-1 lg:px-2 rounded-l-lg text-black outline-none flex-1"
              style={{ width: "70%" }}
            />
            <button
              className="bg-[#4C58F2] text-white py-1 md:py-3 px-6 rounded-r-lg hover:bg-blue-700 transition-colors" onClick={handleRedirect}
              style={{ width: "30%" }}
            >
              Become a citizen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
