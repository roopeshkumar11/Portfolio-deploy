import React from 'react';
import Card from '../Component/Card';

function WhatIDo() {
  const cardsData = [
    {
      title: "Frontend Developer",
      description: "This card is for Frontend developers, focusing on HTML, CSS, JavaScript, and UI/UX.",
      imageUrl: "/pic1.jpeg",
      buttonText: "Learn More",
    },
    {
      title: "Backend Developer",
      description: "This card is for Backend developers, specializing in server-side logic, databases, and APIs.",
      imageUrl: "/pic2.jpeg",
      buttonText: "Read More",
    },
    {
      title: "React.js Developer",
      description: "This card is for React.js developers, working on building interactive UIs and single-page applications.",
      imageUrl: "/pic4.jpeg",
      buttonText: "Explore",
    },
    {
      title: "Web Design",
      description: "This is the second card, showcasing key details about a specific project or feature.",
      imageUrl: "/pic2.jpeg",
      buttonText: "Read More",
    },
    {
      title: "Full Stack Developer",
      description: "This is the third card, offering insights into a particular aspect or topic.",
      imageUrl: "/pic1.jpeg",
      buttonText: "Explore",
    },

    {
      title: "Full Stack Developer",
      description: "This is the third card, offering insights into a particular aspect or topic.",
      imageUrl: "/pic4.jpeg",
      buttonText: "Explore",
    },
  ];

  return (
    <div className="bg-black text-center px-4">
      <h1 className="text-gray-300 pt-6 text-4xl font-bold">What I Do</h1>
      <p className="text-xl text-[#4FC3F7]">My Services</p>

      <div className="flex justify-center items-center ">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-10">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
