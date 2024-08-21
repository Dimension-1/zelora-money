import React from "react";

const OurValuesAndStories = () => {
  const stories = {
    testimonial:
      "A close founder friend recommended FinoClub. To be very honest I thought I know everything that FinoClub will teach. But I realised that a lot of things that are so basic were missing in my approach.",
    name: "Blessen George",
    title1: "AVP Project",
    title2: "Program Management at StateStreet",
    arrows: "/Images/Stories/arrows.png",
    image: "/Images/Stories/blessen.png",
    memberSince: "/Images/Stories/memberSince.png",
    speechBubbles: "/Images/Stories/colon.png",
  };

  return (
    <section className="bg-black text-white px-8">
      <div className="mx-auto flex flex-col items-start justify-center items-center w-full md:max-w-6xl">
        {/* 4 Pillars of Foundation */}
        <div className="py-24 relative">
          <div className="text-center mb-24 relative">
            <h2
              className="text-xl font-normal mb-4"
              style={{ fontFamily: "DM Sans" }}
            >
              OUR VALUES
            </h2>
            <h3 className="text-5xl font-normal relative">
              The 4 Pillars of Foundation
            </h3>
            <img
              src="/Images/Values/overlay.png"
              alt="Foundation Overlay"
              className="absolute lg:right-[9%] top-[70%] xl:right-[12%] transform -translate-x-1/2 -translate-y-1/2 w-[25%]"
            />
          </div>

          {/* Individual Pillars */}
          <div
            className="flex justify-between space-x-16 items-end"
            style={{ fontFamily: "DM Sans" }}
          >
            {/* Pillar 1 */}
            <div className="relative flex flex-col items-center">
              <img
                src="/Images/Values/icon1.png"
                alt="Learn from the Best"
                className="absolute top-[-50px] h-auto w-24 z-20"
              />
              <div className="bg-[#EDEDED] p-8 rounded-lg flex flex-col items-center text-center relative z-10">
                <h4 className="text-xl text-[#070707] font-bold mb-4">
                  Learn from the Best
                </h4>
                <p className="text-[#070707] font-light">
                  We collaborate with top founders of quant funds, prop funds,
                  intraday traders, swing traders, and more to offer
                  unparalleled insights and strategies.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="relative flex flex-col items-center">
              <img
                src="/Images/Values/icon2.png"
                alt="Master the Strategies"
                className="absolute top-[-55px] h-auto w-24 z-20"
              />
              <div className="bg-[#EDEDED] p-8 rounded-lg flex flex-col items-center text-center relative z-10">
                <h4 className="text-xl text-[#070707] font-bold mb-4">
                  Master the Strategies
                </h4>
                <p className="text-[#070707] font-light">
                  Immerse yourself in comprehensive programs built through
                  real-world insights and practical knowledge to understand
                  various trading strategies from intraday to swing trading.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="relative flex flex-col items-center">
              <img
                src="/Images/Values/icon3.png"
                alt="Learn at your own pace"
                className="absolute top-[-110px] h-auto w-24 z-20"
              />
              <div className="bg-[#EDEDED] p-8 rounded-lg flex flex-col items-center text-center relative z-10">
                <h4 className="text-xl text-[#070707] font-bold mb-4">
                  Learn at your own pace
                </h4>
                <p className="text-[#070707] font-light">
                  With our self-paced learning crafts, you can explore various
                  trading topics and techniques according to your schedule.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="relative flex flex-col items-center">
              <img
                src="/Images/Values/icon4.png"
                alt="Achieve Excellence"
                className="absolute top-[-50px] h-auto w-24 z-20"
              />
              <div className="bg-[#EDEDED] p-8 rounded-lg flex flex-col items-center text-center relative z-10">
                <h4 className="text-xl text-[#070707] font-bold mb-4">
                  Achieve Excellence
                </h4>
                <p className="text-[#070707] font-light">
                  By being a part of an elite trading community. Joining a
                  network of top traders and enthusiasts to share knowledge, get
                  support, and stay motivated throughout your trading to a
                  profitable trader.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Trader Stories */}
        <div className="bg-[#1A1A1A] p-12 rounded-lg max-w-7xl mx-auto mb-16">
          <div className="relative text-center mb-16">
            <h2
              className="text-xl font-normal mb-4"
              style={{ fontFamily: "DM Sans" }}
            >
              FEATURED TRADER STORIES
            </h2>
            <h3 className="text-5xl font-normal mb-12 relative inline-block">
              People Who Grew With Us
            </h3>
            <img
              src={stories.arrows}
              alt="Arrows"
              className="absolute -top-[20px] right-[19%] max-w-2xl"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-lg h-full flex flex-col justify-center">
              <p
                className="text-3xl mb-8 font-extralight"
                style={{ fontFamily: "DM Sans", fontWeight: 100 }}
              >
                {stories.testimonial}
              </p>
              <p
                className="font-semibold text-lg"
                style={{ fontFamily: "DM Sans" }}
              >
                {stories.name}
              </p>
              <p
                className="text-[#B9B7B7] text-lg"
                style={{ fontFamily: "DM Sans", fontWeight: 200 }}
              >
                {stories.title1}
              </p>
              <p
                className="text-[#B9B7B7] text-lg"
                style={{ fontFamily: "DM Sans", fontWeight: 300 }}
              >
                {stories.title2}
              </p>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <img
                src={stories.image}
                alt={stories.name}
                className="rounded-lg shadow-lg w-auto h-auto object-cover"
              />
              <img
                src={stories.speechBubbles}
                alt="Speech Bubbles"
                className="absolute -top-14 right-10 w-44 h-auto"
              />
              <img
                src={stories.memberSince}
                alt="Fino Club Member Since 2023"
                className="absolute -bottom-6 left-4 w-48 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesAndStories;
