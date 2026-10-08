import React from "react";
import Project_card from "../Component/Project_card";

function Project() {
  const data = [
    {
      imageUrl: "/restaurant_mockup.png",
      title: "Restaurant Website",
      description: "An advanced, fully responsive restaurant platform enabling digital table reservations, interactive multi-category menus, and seamless online food ordering. Built to maximize user engagement and streamline business operations.",
      tags: ["React.js", "Tailwind CSS", "Redux", "Responsive Design"],
      projectlink: "https://github.com/roopeshkumar11/React-project/tree/main/Resturant-Website",
      liveLink: "https://demo-website-resturant.netlify.app/"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
      title: "Gym Website",
      description: "A full-stack gym management platform designed for modern fitness centers. Features include membership tier subscriptions, online class scheduling, interactive trainer booking, and a high-performance, conversion-optimized landing page.",
      tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
      projectlink: "https://github.com/roopeshkumar11",
      liveLink: "https://gymdemowebiste.netlify.app/"
    },
    {
      imageUrl: "/pic1.jpeg",
      title: "Turban Store (MERN E-commerce)",
      description: "A complete MERN stack storefront featuring secure user authentication, product cataloging, search filters, an admin stock control panel, and advanced optimization via lazy loading.",
      tags: ["MERN Stack", "JWT Auth", "Tailwind CSS", "Redux"],
      projectlink: "https://github.com/roopeshkumar11/new_pr",
      liveLink: "https://turbon-store.netlify.app/"
    },
    {
      imageUrl: "/pic3.jpeg",
      title: "JustThought",
      description: "A dynamic web application where users can share random thoughts and reflections, connected to secure database endpoints for data persistence and realtime updates.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      projectlink: "https://github.com/roopeshkumar11/MAIN-MERN-Project/tree/main/AddThought_website",
      liveLink: "https://addthought-website.onrender.com"
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 border-t border-white/5 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cosmic-purple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-widest font-mono text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink">
            PROJECTS //
          </h2>
          <p className="text-sm font-mono text-gray-400 mt-2 uppercase tracking-widest">
            Selected Software Engineering Showcase
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project, index) => (
            <Project_card
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectlink={project.projectlink}
              tags={project.tags}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;

