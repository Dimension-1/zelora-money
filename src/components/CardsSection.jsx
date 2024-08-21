import React from "react";

const cardsData = [
  {
    id: 1,
    title: "Courses",
    image: "/Images/Cards/courses.png", 
  },
  {
    id: 2,
    title: "Trade Rooms",
    image: "/Images/Cards/trade-rooms.png",
  },
  {
    id: 3,
    title: "Community",
    image: "/Images/Cards/community.png",
  },
];

const CardsSection = () => {
  return (
    <section className="py-12 mx-8">
      <div className="mx-auto flex flex-col items-start text-left md:text-left md:items-start md:justify-between w-full md:max-w-6xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-[#EBEBEB] p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <div className="flex justify-between items-center w-full mt-4">
                <h3 className="text-2xl ">{card.title}</h3>
                {/* Arrow PNG */}
                <img
                  src="/Images/Cards/arrow.png"
                  alt="Arrow"
                  className="w-6 h-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
