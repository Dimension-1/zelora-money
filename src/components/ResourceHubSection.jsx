import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ResourceHubSection = () => {
  const [activeTab, setActiveTab] = useState("Articles");

  const articles = [
    {
      image: "/Images/Articles/article1.png",
      title: "Fintech Industry Faces A Loss In Next 5 Years",
      source: "Times Of India",
      time: "11 hours ago",
      featured: true,
    },
    {
      image: "/Images/Articles/article1.png",
      title: "Fintech Industry Faces A Loss In Next 5 Years",
      source: "Times Of India",
      time: "11 hours ago",
      featured: true,
    },
    {
      image: "/Images/Articles/article1.png",
      title: "Fintech Industry Faces A Loss In Next 5 Years",
      source: "Times Of India",
      time: "11 hours ago",
      featured: true,
    },
    {
      image: "/Images/Articles/article1.png",
      title: "Fintech Industry Faces A Loss In Next 5 Years",
      source: "Times Of India",
      time: "11 hours ago",
      featured: true,
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/coming-soon");
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="bg-black text-white py-12 md:py-16 px-8 relative">
      <img
        src="/Images/Resource/hand.png"
        alt="Hand Icon"
        className="hidden md:block absolute top-[-50px] right-0 h-auto w-[300px]"
      />

      <div className="mx-auto flex flex-col items-center justify-center w-full md:max-w-6xl">
        <img
          src="/Images/Resource/hand-mobile.png"
          alt="Hand Icon"
          className="relative block md:hidden top-[-50px] right-0 h-auto md:w-[200px]"
        />
        <h2 className="text-5xl font-normal mb-4 text-center">Resource Hub</h2>
        <p
          className="text-lg mb-8 text-center font-light max-w-2xl"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Find blogs, articles, videos, and tutorials, all for free, to help you
          learn at your own pace and upskill.
        </p>
        <button
          className="mb-10 bg-[#4C58F2] hover:bg-blue-700 transition-all duration-300 ease-in-out text-white py-2 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2"
          onClick={handleRedirect}
        >
          <span style={{ fontFamily: "DM Sans, sans-serif" }}>Explore</span>
          <img
            src="/Images/Icons/ArrowRight.png"
            alt="Arrow Right"
            className="inline w-4 h-4"
          />
        </button>

        <div
          className="flex justify-center space-x-8 text-lg mb-8"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {["Blogs", "Articles", "Tutorials", "News"].map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(tab)}
              className={`relative text-lg font-light px-4 py-2 transition-colors duration-200 ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <img
                  src="/Images/Resource/circle.png"
                  alt="Active Indicator"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
              )}
            </button>
          ))}
        </div>

        {/* Articles Carousel */}
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows
          autoPlaySpeed={3000}
          draggable
          swipeable
          className="mb-8"
          containerClass="container mx-auto"
          itemClass="px-4"
        >
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div
                className="p-6"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {article.featured && (
                  <span className="text-sm font-light border px-2 py-1 rounded-lg border-[#E94A41] text-[#E94A41] uppercase mb-2 inline-block">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-light mb-2">{article.title}</h3>
                <p className="text-sm text-gray-400">
                  By {article.source} / {article.time}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ResourceHubSection;
