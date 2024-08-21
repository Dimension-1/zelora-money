import React from "react";

const VideosToLearnSection = () => {
  return (
    <section className="py-16 px-8 bg-black">
      <div className="mx-auto flex flex-col text-white items-center w-full md:max-w-6xl bg-[#1A1A1A] p-8 rounded-lg">
        <div className="w-full">
          <h2 className="text-5xl font-light mb-8">Videos To Help You Learn</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Main Video */}
            <div className="lg:w-5/8">
              <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <img
                  src="/Images/Videos/main-video.png"
                  alt="Main Video"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-4xl font-light mb-2">
                Learn Trading in 2 weeks with step-by-step guidance
              </h3>
              <p className="text-[#808080]">By Fino University / 35 mins</p>
            </div>

            {/* Sidebar Videos */}
            <div className="lg:w-3/8 flex flex-col space-y-4">
              {[
                {
                  image: "/Images/Videos/video1.png",
                  title: "Day trading basic trips and tricks 101",
                  source: "Trader Growth",
                  time: "10 min",
                },
                {
                  image: "/Images/Videos/video2.png",
                  title: "Day trading basic trips and tricks 101",
                  source: "Trader Growth",
                  time: "10 min",
                },
                {
                  image: "/Images/Videos/video3.png",
                  title: "Day trading basic trips and tricks 101",
                  source: "Trader Growth",
                  time: "10 min",
                },
              ].map((video, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 border-t border-gray-700 p-4 shadow-lg"
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    className="object-cover rounded-lg"
                  />
                  <div className="flex flex-col" style={{fontFamily: 'DM Sans'}}>
                    <h4 className="text-lg font-light mb-1">{video.title}</h4>
                    <p className="text-gray-400 text-sm">
                      By {video.source} / {video.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosToLearnSection;
