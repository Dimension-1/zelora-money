import React from "react";

const OurValuesAndStories = () => {
  const stories = {
    testimonial:
      "A close founder friend recommended FinoClub. To be very honest I thought I know everything that FinoClub will teach. But I realised that a lot of things that are so basic were missing in my approach.",
    name: "Blessen George",
    title1: "AVP Project Program",
    title2: "Management at StateStreet",
    arrows: "/Images/Stories/Arrows.png",
    arrowsMobile: "/Images/Stories/arrows-mobile.png",
    image: "/Images/Stories/blessen-1.png",
    memberSince: "/Images/Stories/memberSince.png",
    speechBubbles: "/Images/Stories/colon.png",
  };

  return (
    <section className="bg-black text-white px-4 md:px-8 overflow-hidden" >
      <div className="mx-auto flex flex-col items-start justify-center items-center w-full md:max-w-6xl">
        {/* 4 Pillars of Foundation */}
        <div className="py-16 md:py-24 relative" style={{ fontFamily: "DM Sans, sans-serif" }}>
          <div className="text-center mb-24 relative">
            <h2
              className="text-xl font-normal mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              OUR VALUES
            </h2>
            <h3 className="text-5xl font-normal relative z-10">
              The 4 Pillars of Foundation
            </h3>
            <img
              src="/Images/Values/overlay.png"
              alt="Foundation Overlay"
              className="absolute top-[70px] lg:right-[10%] md:top-[70%] xl:right-[12%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[25%]"
            />
          </div>

          {/* Individual Pillars */}
          <div
            className="flex flex-col md:flex-row justify-between md:space-x-16 space-y-14 md:space-y-0 items-end"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {/* Pillar 1 */}
            <div className="relative flex flex-col items-center">
              <img
                src="/Images/Values/icon1.png"
                alt="Learn from the Best"
                className="absolute top-[-50px] h-auto w-40 z-20"
              />
              <div className="bg-[#EDEDED] p-8 rounded-lg flex flex-col items-center text-center relative z-10 pt-20">
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
                className="absolute top-[-55px] h-auto w-40 z-20"
              />
              <div className="bg-[#EDEDED] p-8 rounded-lg flex flex-col items-center text-center relative z-10 pt-20">
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
                className="absolute top-[-110px] h-auto w-36 z-20"
              />
              <div className="bg-[#EDEDED] p-8 rounded-lg flex flex-col items-center text-center relative z-10 pt-20">
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
                className="absolute top-[-70px] h-auto w-44 z-20"
              />
              <div className="bg-[#EDEDED] p-8 rounded-lg flex flex-col items-center text-center relative z-10 pt-16">
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
        <div className="bg-[#1A1A1A] p-4 md:p-12 rounded-lg max-w-7xl mx-auto mb-16">
          <div className="relative text-center md:mb-16">
            <h2
              className="text-md md:text-xl font-normal mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              FEATURED TRADER STORIES
            </h2>
            <h3 className="text-4xl md:text-5xl font-normal mb-12 relative inline-block">
              People Who Grew With Us
            </h3>
            <img
              src={stories.arrows}
              alt="Arrows"
              className="absolute hidden md:block -top-[20px] right-[19%] max-w-2xl"
            />
            <img
              src={stories.arrowsMobile}
              alt="Arrows"
              className="absolute block md:hidden right-[px] top-[65px]"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 md:p-8 rounded-lg h-full flex flex-col justify-center" >
              <p
                className="text-2xl md:text-3xl mb-8 font-light"
                style={{ fontFamily: "DM Sans, sans-serif"}}
              >
                {stories.testimonial}
              </p>
              <p
                className="font-semibold text-lg"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {stories.name}
              </p>
              <p
                className="text-[#B9B7B7] text-lg"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {stories.title1}
              </p>
              <p
                className="text-[#B9B7B7] text-lg"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {stories.title2}
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-full flex items-center justify-center">
              <img
                src={stories.image}
                alt={stories.name}
                className="rounded-lg shadow-lg w-auto h-auto object-cover"
              />
              <img
                src={stories.speechBubbles}
                alt="Speech Bubbles"
                className="absolute -top-14 right-0 md:right-10 w-44 h-auto"
              />
              <img
                src={stories.memberSince}
                alt="Fino Club Member Since 2023"
                className="absolute -bottom-6 left-0 md:left-4 w-48 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesAndStories;
