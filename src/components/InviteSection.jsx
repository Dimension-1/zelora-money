import React from "react";

const RequestInviteSection = () => {
  return (
    <section className="bg-[#E94A41] text-white py-8 px-8">
      <div className="mx-auto flex flex-col md:flex-row items-center md:items-center md:justify-between w-full md:max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-4 md:mb-0">
          Request your invite now!
        </h2>
        <div className="flex w-full md:w-3/5">
          <input
            type="email"
            placeholder="Enter your email to receive an invite"
            className="py-1 md:py-3 px-1 md:pl-6 rounded-l-lg text-black outline-none flex-1"
            style={{ width: "70%" }}
          />
          <button
            className="bg-[#4C58F2] text-white py-1 md:py-3 px-6 rounded-r-lg hover:bg-blue-700 transition-colors"
            style={{ width: "30%" }}
          >
            Become a citizen
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestInviteSection;
