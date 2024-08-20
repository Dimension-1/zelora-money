import React from "react";

const CommunityAndCryptoSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto flex flex-col items-start text-left md:text-left md:items-start md:justify-between w-full md:max-w-6xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Community Card */}
          <div className="bg-[#EBEBEB] p-8 rounded-lg shadow-lg relative">
            <div className="absolute top-4 left-4 z-10">
              <img
                src="/Images/Community/hand.png"
                alt="Hand Illustration"
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4">Community</h3>
            <p className="text-lg mb-6">
              Become a part of a community of traders and fintech enthusiasts,
              learn, network, and grow together!
            </p>
            <div className="relative">
              <img
                src="/Images/Community/community-photo.png"
                alt="Community"
                className="rounded-lg shadow-md mb-4"
              />
              <div className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded-lg shadow">
                <p className="text-xl font-bold">5,000+ members</p>
              </div>
            </div>
            <button className="mt-4 bg-[#4C58F2] text-white py-3 px-6 rounded-2xl hover:bg-blue-700 transition-colors">
              Explore
            </button>
          </div>

          {/* Crypto Card */}
          <div className="bg-[#EBEBEB] p-8 rounded-lg shadow-lg relative">
            <h3 className="text-3xl font-bold mb-4">Crypto</h3>
            <p className="text-lg mb-6">
              Stay ahead in the volatile world of cryptocurrencies with expert
              insights, strategic guidance, and the latest trends.
            </p>
            <div className="relative">
              <img
                src="/Images/Crypto/crypto-dashboard.png"
                alt="Crypto Dashboard"
                className="mb-4"
              />
              <div className="absolute bottom-4 left-4 w-full h-full border-2"></div>
              <img
                src="/Images/Crypto/crypto-icon.png"
                alt="Crypto Icon"
                className="absolute bottom-4 right-4 h-16 w-auto"
              />
            </div>
            <button className="mt-4 bg-[#4C58F2] text-white py-3 px-6 rounded-2xl hover:bg-blue-700 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityAndCryptoSection;
