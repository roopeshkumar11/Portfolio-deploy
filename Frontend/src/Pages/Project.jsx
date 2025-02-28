import React from 'react';
import Project_card from '../Component/Project_card';

function Project() {
  const data = [
    {
      imageUrl: "/pic1.jpeg",
      title: "JustThought",
      description: "A platform to share your random thoughts.",
      projectlink: "https://github.com/roopeshkumar11/MAIN-MERN-Project/tree/main/AddThought_websitet",
    },
    {
      imageUrl: "/pic2.jpeg",
      title: "Restaurant Website",
      description: "A website built for restaurants to showcase their menu and services.",
      projectlink: "https://github.com/roopeshkumar11/React-project/tree/main/Resturant-Website",
    },
    {
      imageUrl: "/pic3.jpeg", // Use an actual image for this project
      title: "Portfolio",
      description: "A personal portfolio to showcase my web development projects and skills.",
      projectlink: "https://github.com/roopeshkumar11/MAIN-MERN-Project/tree/main/Portfolio",
    },
  ];
  

  return (
    <div className="bg-black px-4">
      <div className="text-center">
        <p className="text-4xl font-bold mb-4 text-gray-300">Projects</p>
        <p className="text-xl text-[#4FC3F7]">Some of my work</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-10">
          {data.map((project, index) => (
            <Project_card
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectlink={project.projectlink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
