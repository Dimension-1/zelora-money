import React from "react";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirect = () => {
    navigate('/coming-soon'); // Redirect to the /coming-soon page
  };

  return (
    <section className="py-12 mx-8">
      <div className="mx-auto flex flex-col items-start text-left md:text-left md:items-start md:justify-between w-full md:max-w-7xl xl:max-w-8xl">
      
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-[#EBEBEB] p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-lg mb-4 w-full h-52 xl:h-64 object-cover"
              />
              <div className="flex justify-between items-center w-full mt-4">
                <h3 className="text-2xl ">{card.title}</h3>
                {/* Clickable Arrow PNG */}
                <img
                  src="/Images/Cards/arrow.png"
                  alt="Arrow"
                  className="w-6 h-6 cursor-pointer" // Add cursor pointer for hover effect
                  onClick={handleRedirect} // Add onClick event for redirection
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