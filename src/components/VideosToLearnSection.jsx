import React from "react";

const VideosToLearnSection = () => {
  return (
    <section className="text-white py-16 px-8 bg-black">
      <div className="mx-auto flex flex-col items-start justify-center items-center w-full md:max-w-6xl bg-[#1A1A1A] p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Videos To Help You Learn</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video */}
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <img
                  src="/Images/Videos/main-video.png" // Replace with actual image path
                  alt="Main Video"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Learn Trading in 2 weeks with step-by-step guidance
              </h3>
              <p className="text-gray-400">By Fino University / 35 mins</p>
            </div>

            {/* Sidebar Videos */}
            <div className="flex flex-col space-y-4">
              {[
                {
                  image: "/Images/Videos/video1.png", // Replace with actual image path
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
                  className="flex items-center space-x-4 bg-[#2A2A2A] p-4 rounded-lg"
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    className="object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-lg font-bold mb-1">{video.title}</h4>
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
