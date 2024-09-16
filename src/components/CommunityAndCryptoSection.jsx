import React from "react";
import { useNavigate } from 'react-router-dom';

const CommunityAndCryptoSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirect = () => {
    navigate('/coming-soon'); // Redirect to the /coming-soon page
  };
  return (
    <section className="py-24 bg-white relative px-8">
      <div className="mx-auto flex flex-col items-center md:items-center w-full md:max-w-6xl">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Community Card */}
          <div className="bg-[#EBEBEB] py-8 px-4 md:px-16 rounded-lg shadow-lg relative flex flex-col items-center justify-between">
            <div className="absolute top-64 md:top-32 xl:-left-24 z-10 -left-8 xl:w-auto md:w-[250px] md:-left-16">
              <img
                src="/Images/Community/hand.png"
                alt="Hand Illustration"
                className="w-[200px] md:w-auto"
              />
            </div>
            <div>
              <h3 className="text-5xl font-normal mb-4 text-center">Community</h3>
              <p className="text-lg mb-6 text-center" style={{fontFamily: "DM Sans, sans-serif"}}>
                Become a part of a community of traders and fintech enthusiasts,
                learn, network, and grow together!
              </p>
            </div>
            <div className="relative">
              <img
                src="/Images/Community/community-photo.png"
                alt="Community"
                className="rounded-lg shadow-md mb-4"
              />
              <img
                src="/Images/Community/members.png"
                alt="5000+ Members"
                className="absolute -bottom-10 -right-10 w-40"
              />
            </div>
            <button className="mt-8 bg-[#4C58F2] hover:bg-blue-700 transition-all duration-300 ease-in-out text-white py-3 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2" onClick={handleRedirect}>
              <span>Explore</span>
              <img
                src="/Images/Icons/ArrowRight.png"
                alt="Arrow Right"
                className="inline w-4 h-4"
              />
            </button>
          </div>

          {/* Crypto Card */}
          <div className="bg-[#EBEBEB] py-8 px-4 md:px-16 rounded-lg shadow-lg relative flex flex-col items-center justify-between">
            <div>
              <h3 className="text-5xl font-normal mb-4 text-center">Crypto</h3>
              <p className="text-lg mb-6 text-center" style={{fontFamily: "DM Sans, sans-serif"}}>
                Stay ahead in the volatile world of cryptocurrencies with expert
                insights, strategic guidance, and the latest trends.
              </p>
            </div>
            <div className="relative">
              <img
                src="/Images/Crypto/crypto-dashboard-1.png"
                alt="Crypto Dashboard"
                className="mb-4"
              />
              <img
                src="/Images/Crypto/crypto-icon.png"
                alt="Crypto Icon"
                className="absolute -bottom-24 right:1/2 lg:right-32 z-30 w-[230px] md:w-auto"
              />
            </div>
            <button className="mt-8 bg-[#4C58F2] hover:bg-blue-700 transition-all duration-300 ease-in-out text-white py-3 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2" onClick={handleRedirect}>
              <span>Explore</span>
              <img
                src="/Images/Icons/ArrowRight.png"
                alt="Arrow Right"
                className="inline w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityAndCryptoSection;
