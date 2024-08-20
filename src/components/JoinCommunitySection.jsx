import React from "react";

const JoinCommunitySection = () => {
  return (
    <section
      className="py-24 bg-red-600 text-white flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/Images/Background/pattern.png')` }}
    >
      <div className="mx-auto flex flex-col items-start justify-center items-center w-full md:max-w-6xl">
        <h2 className="text-4xl max-w-2xl font-bold text-center mb-8">
          Become a part of the fastest growing trading communities of the world
        </h2>
        <div className="flex items-center w-full max-w-xl">
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email to receive an invite"
              className="py-3 px-4 rounded-l-lg text-black outline-none flex-1 w-2/3"
            />
            <button className="bg-[#4C58F2] text-white py-3 px-6 rounded-r-lg hover:bg-blue-700 transition-colors flex-1 w-1/3">
              Become a citizen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
