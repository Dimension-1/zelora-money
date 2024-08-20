import React from "react";

const ResourceHubSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto flex flex-col items-start justify-center items-center w-full md:max-w-6xl">
        <h2 className="text-4xl font-bold mb-4">Resource Hub</h2>
        <p className="text-lg mb-8">
          Find blogs, articles, videos, and tutorials, all for free, to help you
          learn at your own pace and upskill.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-full mb-12">
          Explore
        </button>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-8 text-lg mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            Blogs
          </a>
          <a href="#" className="text-white underline decoration-blue-600">
            Articles
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Tutorials
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            News
          </a>
        </div>

        {/* Articles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "/Images/Articles/article1.png", // Replace with actual image paths
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
          ].map((article, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                {article.featured && (
                  <span className="text-sm font-semibold text-red-600 uppercase mb-2 inline-block">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-400">
                  By {article.source} / {article.time}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHubSection;
