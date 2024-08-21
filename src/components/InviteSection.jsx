import React from "react";

const RequestInviteSection = () => {
  return (
    <section className="bg-[#E94A41] text-white py-8 px-8">
      <div className="mx-auto flex flex-row items-center md:items-center md:justify-between w-full md:max-w-6xl">
        <h2 className="text-3xl font-semibold text-center">
          Request your invite now!
        </h2>
        <div className="flex w-full max-w-xl">
          <input
            type="email"
            placeholder="Enter your email to receive an invite"
            className="py-2 px-4 rounded-l-lg text-gray-800 w-full outline-none"
          />
          <button className="bg-blue-600 text-white py-2 px-6 rounded-r-lg hover:bg-blue-700 transition-colors w-full max-w-[150px]">
            Become a citizen
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestInviteSection;