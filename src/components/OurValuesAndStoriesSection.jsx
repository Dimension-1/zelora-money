import React from "react";

const OurValuesAndStories = () => {
  const pillars = [
    {
      title: "Learn from the Best",
      description:
        "We collaborate with top founders of quant funds, prop funds, intraday traders, swing traders, and more to offer unparalleled insights and strategies.",
      icon: "/Images/Values/icon1.png", // Replace with your icon image paths
    },
    {
      title: "Master the Strategies",
      description:
        "Immerse yourself in comprehensive programs built through real-world insights and practical knowledge to understand various trading strategies from intraday to swing trading.",
      icon: "/Images/Values/icon2.png",
    },
    {
      title: "Learn at your own pace",
      description:
        "With our self-paced learning crafts, you can explore various trading topics and techniques according to your schedule.",
      icon: "/Images/Values/icon3.png",
    },
    {
      title: "Achieve Excellence",
      description:
        "By being a part of an elite trading community. Joining a network of top traders and enthusiasts to share knowledge, get support, and stay motivated throughout your trading to a profitable trader.",
      icon: "/Images/Values/icon4.png",
    },
  ];

  const stories = {
    testimonial:
      "A close founder friend recommended FinoClub. To be very honest I thought I know everything that FinoClub will teach. But I realised that a lot of things that are so basic were missing in my approach.",
    name: "Blessen George",
    title: "AVP Project and Program Management at StateStreet",
    arrows: "/Images/Stories/arrows.png",
    image: "/Images/Stories/blessen.png",
    memberSince: "/Images/Stories/memberSince.png",
    speechBubbles: "/Images/Stories/colon.png",
  };

  return (
    <section className="bg-black text-white">
    <div className="mx-auto flex flex-col items-start text-left md:text-left md:items-start md:justify-between w-full md:max-w-6xl">
    
      {/* 4 Pillars of Foundation */}
      <div className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold mb-4">OUR VALUES</h2>
          <h3 className="text-4xl font-bold mb-12">
            The 4 Pillars of <span className="text-red-600">Foundation</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-8 rounded-lg flex flex-col items-center text-center"
            >
              <img
                src={pillar.icon}
                alt={pillar.title}
                className="mb-6 h-20 w-20"
              />
              <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
              <p className="text-gray-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Trader Stories */}
      <div className="bg-[#1A1A1A] p-12 rounded-lg max-w-7xl mx-auto mb-16">
        <div className="relative text-center mb-16">
          <h2 className="text-xl font-semibold mb-4">FEATURED TRADER STORIES</h2>
          <h3 className="text-4xl font-bold mb-12 relative inline-block">
            People Who Grew With Us
            <img
              src={stories.arrows}
              alt="Arrows"
              className="absolute -top-10 right-0 w-auto h-auto"
            />
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="p-8 rounded-lg h-full flex flex-col justify-center">
            <p className="text-lg italic leading-relaxed mb-8 tracking-wide">
              {stories.testimonial.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-1"
                  style={{ textDecoration: "underline", textDecorationColor: "rgba(0,0,0,0)" }}
                >
                  {word}
                </span>
              ))}
            </p>
            <p className="font-semibold">{stories.name}</p>
            <p className="text-gray-400">{stories.title}</p>
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