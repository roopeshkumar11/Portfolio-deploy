import React from "react";
import SpotlightCard from "../Component/SpotlightCard";
import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode, FaRocket } from "react-icons/fa";

function WhatIDo() {
  const skillsData = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end development of custom web applications, seamlessly integrating highly responsive frontends with secure, scalable backend systems.",
      icon: <FaLaptopCode className="text-3xl text-green-400" />,
      technologies: ["MERN Stack", "REST APIs", "WebSockets", "Auth"],
      glowColor: "rgba(74, 222, 128, 0.15)"
    },
    {
      title: "Frontend Engineering",
      description: "Crafting highly performant, responsive, and pixel-perfect interfaces with reactive behaviors and micro-interactions.",
      icon: <FaCode className="text-3xl text-cosmic-cyan" />,
      technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3"],
      glowColor: "rgba(6, 182, 212, 0.15)"
    },
    {
      title: "Backend & API Design",
      description: "Developing robust backend architectures, secure user authorization logic, and structured RESTful endpoints.",
      icon: <FaServer className="text-3xl text-cosmic-purple" />,
      technologies: ["Node.js", "Express.js", "JWT Auth", "REST APIs"],
      glowColor: "rgba(139, 92, 246, 0.15)"
    },
    {
      title: "Databases & Schemas",
      description: "Designing optimized data structures, managing relational and non-relational models, and structuring schema models for application logic.",
      icon: <FaDatabase className="text-3xl text-cosmic-pink" />,
      technologies: ["MongoDB", "MySQL", "Database Schema Design"],
      glowColor: "rgba(236, 72, 153, 0.15)"
    },
    {
      title: "DevOps & Tooling",
      description: "Automating development pipelines, testing API endpoints, and managing cloud deployment environments.",
      icon: <FaTools className="text-3xl text-yellow-500" />,
      technologies: ["Git & GitHub", "Postman", "Render Deployment"],
      glowColor: "rgba(234, 179, 8, 0.15)"
    },
    {
      title: "Freelance & Client Solutions",
      description: "Delivering high-quality freelance projects, MVP development for startups, and digital transformation for local businesses to drive growth.",
      icon: <FaRocket className="text-3xl text-orange-400" />,
      technologies: ["E-commerce", "Booking Systems", "Custom Dashboards", "Landing Pages"],
      glowColor: "rgba(251, 146, 60, 0.15)"
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cosmic-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-widest font-mono text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink">
            WHAT I DO //
          </h2>
          <p className="text-sm font-mono text-gray-400 mt-2 uppercase tracking-widest">
            Technical Capabilities & Skill Architecture
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {skillsData.map((skill, index) => (
            <SpotlightCard
              key={index}
              spotlightColor={skill.glowColor}
              className="h-full"
            >
              <div className="p-8 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                    Core Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300 hover:border-white/20 transition duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;

