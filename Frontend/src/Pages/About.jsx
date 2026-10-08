import React from "react";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

function About() {
  const experiences = [
    {
      type: "internship",
      role: "MERN Stack Developer",
      company: "Regrip India Private Limited",
      duration: "2026 – Present",
      location: "Jaipur, India",
      points: [
        "Spearheaded the development of a real-time analytics dashboard in React.js, slashing manual operations by 25%.",
        "Refactored legacy API architectures to enhance modularity, reducing server-side runtime errors by 15%.",
        "Implemented automated CI/CD deployment pipelines, reclaiming 20% of engineering bandwidth.",
        "Collaborated in an agile sprint rotation to resolve critical blocker bugs and deliver features ahead of targets."
      ]
    },
    {
      type: "internship",
      role: "Backend Developer",
      company: "Systrac Pvt. Ltd.",
      duration: "May 2025 – Aug 2025",
      location: "Jaipur, India",
      points: [
        "Optimized complex MongoDB database schemas, accelerating query execution times by 30% on high-scale datasets.",
        "Architected a secure role-based access control system using JSON Web Tokens (JWT) to protect backend routes.",
        "Re-engineered core RESTful endpoints to process batch data transactions, driving significant system performance improvements.",
        "Collaborated with UI engineers to optimize client-server network requests, cutting page latency by 20%."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Jodhpur Institute of Engineering and Technology",
      duration: "Sep 2022 – May 2026",
      location: "Jodhpur, India",
      score: "CGPA: 9.1"
    },
    {
      degree: "12th Standard (PCM)",
      institution: "Sima Kumari Senior Secondary School",
      duration: "2019 – 2021",
      location: "Buxar, India",
      score: "Percentage: 73.4%"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-widest font-mono text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink">
            ABOUT ME //
          </h2>
          <p className="text-sm font-mono text-gray-400 mt-2 uppercase tracking-widest">
            Identity & Experience Ledger
          </p>
        </div>

        {/* Introduction Paragraph */}
        <div className="glassmorphism p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto mb-16 leading-relaxed text-gray-300">
          <p className="mb-4">
            Hi! I'm <strong className="text-white">Roopesh Kumar</strong>, a full-stack engineer and Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. 
            I focus on developing highly performant backend architectures and interactive, responsive React interfaces.
          </p>
          <p className="mb-4">
            My skill set bridges data structures, APIs, and modern database patterns with robust styling. 
            Whether building role-based JWT authentication, orchestrating database structures in SQL and NoSQL, or deployment automation, 
            I bring a comprehensive systems-level engineering approach to digital product development.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="/RoopeshKumar.pdf"
              download="RoopeshKumar.pdf"
              className="px-6 py-3 font-mono text-xs uppercase tracking-widest bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-bold rounded-xl shadow-md hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition duration-300 hover:scale-105"
            >
              Get Full Resume (PDF)
            </a>
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-mono tracking-wider text-white flex items-center gap-3">
              <FaBriefcase className="text-cosmic-purple" /> EXPERIENCE
            </h3>

            <div className="space-y-8 border-l border-white/10 pl-6 ml-3">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Bullet Node */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-obsidian border-2 border-cosmic-purple group-hover:bg-cosmic-purple transition duration-300" />
                  
                  <div className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-white/10 transition duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <h4 className="font-bold text-white tracking-wide text-lg">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-cosmic-cyan flex items-center gap-1">
                        <FaCalendarAlt /> {exp.duration}
                      </span>
                    </div>

                    <p className="text-sm font-mono text-gray-400 mt-1">
                      {exp.company} — <span className="text-xs">{exp.location}</span>
                    </p>

                    <ul className="list-disc list-inside text-xs text-gray-400 mt-4 space-y-2 leading-relaxed">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <span className="text-gray-300">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-mono tracking-wider text-white flex items-center gap-3">
              <FaGraduationCap className="text-cosmic-cyan" /> EDUCATION
            </h3>

            <div className="space-y-8 border-l border-white/10 pl-6 ml-3">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Bullet Node */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-obsidian border-2 border-cosmic-cyan group-hover:bg-cosmic-cyan transition duration-300" />

                  <div className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-white/10 transition duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <h4 className="font-bold text-white tracking-wide text-lg leading-tight">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-cosmic-purple flex items-center gap-1 whitespace-nowrap">
                        <FaCalendarAlt /> {edu.duration}
                      </span>
                    </div>

                    <p className="text-sm font-mono text-gray-400 mt-2">
                      {edu.institution} — <span className="text-xs">{edu.location}</span>
                    </p>

                    <div className="inline-block mt-4 text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-white">
                      Score: <span className="text-cosmic-cyan">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

