import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurValuesAndStories = () => {
  const image = {
    arrows: "/Images/Stories/Arrows.png",
    arrowsMobile: "/Images/Stories/arrows-mobile.png",
  };
  const stories = [
    {
      testimonial:
        "A close founder friend recommended FinoClub. To be very honest I thought I know everything that FinoClub will teach. But I realised that a lot of things that are so basic were missing in my approach.",
      name: "Blessen George",
      title1: "AVP Project Program",
      title2: "Management at StateStreet",
      image: "/Images/Stories/blessen-1.png",
      memberSince: "/Images/Stories/memberSince.png",
      speechBubbles: "/Images/Stories/colon.png",
    },
    {
      testimonial:
        "A close founder friend recommended FinoClub. To be very honest I thought I know everything that FinoClub will teach. But I realised that a lot of things that are so basic were missing in my approach.",
      name: "Blessen George",
      title1: "AVP Project Program",
      title2: "Management at StateStreet",
      image: "/Images/Stories/blessen-1.png",
      memberSince: "/Images/Stories/memberSince.png",
      speechBubbles: "/Images/Stories/colon.png",
    },
    // Add more stories as needed
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  const containerClass = {};

  return (
    <section className="bg-black text-white px-4 md:px-8 overflow-hidden">
      <div className="mx-auto flex flex-col items-start justify-center items-center w-full md:max-w-6xl">
        {/* 4 Pillars of Foundation */}
        <div
          className="py-16 md:py-24 relative"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          <div className="text-center mb-24 relative">
            <h2
              className="text-xl font-normal mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              OUR VALUES
            </h2>
            <div className="relative inline-block">
              <h3 className="text-5xl font-normal relative z-10" style={{ fontFamily: "RecifeDisplay, sans-serif" }}>
                The 4 Pillars of Foundation
              </h3>
              {/* Circular Overlay Image */}
              <img
                src="/Images/Values/overlay.png"
                alt="Foundation Overlay"
                className="absolute left-[20%] sm:left-[53%] bottom-[-10px] md:transform w-[60%] sm:w-[50%] rounded-full"
              />
            </div>
          </div>

          {/* Individual Pillars */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-end"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {/* Pillar 1 */}
            <div className="relative flex flex-col items-center">
              <img
                src="/Images/Values/icon1-1.png"
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
                src="/Images/Values/icon2-1.png"
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
                src="/Images/Values/icon3-1.png"
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
                src="/Images/Values/icon4-1.png"
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
        <div className="bg-[#1A1A1A] p-4 md:p-12 rounded-lg max-w-7xl mb-16 items-center justify-center flex flex-col">
          <div className="relative text-center md:mb-16">
            <h2 className="text-md md:text-xl font-normal mb-4">
              FEATURED TRADER STORIES
            </h2>
            <h3 className="text-4xl md:text-5xl font-normal mb-12 relative inline-block">
              People Who Grew With Us
            </h3>
            <img src="/Images/Stories/Arrows.png" alt="Arrows" class="absolute hidden md:block -top-[20px] left-1/2 transform -translate-x-1/2 max-w-2xl" />
            <img
              src={image.arrowsMobile}
              alt="Arrows"
              className="absolute block md:hidden top-[65px] left-1/2 transform -translate-x-1/2 max-w-2xl"
            />
          </div>
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            containerClass="container w-[380px] sm:w-[600px] md:w-[800px] lg:w-[900px] xl:w-[1055px] "
            itemClass="carousel-item flex justify-center items-center"
            swipeable
          >
            {stories.map((story, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-4"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                  <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-extralight">
                    {story.testimonial}
                  </p>
                  <p className="font-semibold text-lg">{story.name}</p>
                  <p className="text-[#B9B7B7] text-lg">{story.title1}</p>
                  <p className="text-[#B9B7B7] text-lg">{story.title2}</p>
                </div>
                <div className="order-1 lg:order-2 flex items-center justify-center relative ">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-auto rounded-lg shadow-lg object-cover max-w-md"
                  />
                  <img
                    src={story.speechBubbles}
                    alt="Speech Bubbles"
                    className="absolute -top-10 right-0 h-auto w-40"
                  />
                  <img
                    src={story.memberSince}
                    alt="Fino Club Member Since 2023"
                    className="absolute -bottom-8 left-0 h-auto w-44"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurValuesAndStories;
