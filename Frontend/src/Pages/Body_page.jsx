import React from "react";
import CodeRainBackground from "../Component/CodeRainBackground";

function Body_page() {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto gap-12 overflow-hidden"
    >
      {/* Falling Code Rain */}
      <CodeRainBackground />

      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cosmic-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content (Left) */}
      <div className="flex-1 space-y-6 text-center lg:text-left z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cosmic-cyan/30 bg-cosmic-cyan/5 text-cosmic-cyan font-mono text-xs uppercase tracking-widest animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-cosmic-cyan animate-ping" />
          Available for Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
          ROOPESH <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink">
            KUMAR
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-mono text-gray-300 tracking-wider">
          &lt; Full-Stack Software Engineer &gt;
        </p>

        <p className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed">
          I am a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning. 
          Experienced in building high-performance full-stack web architectures, optimizing data logic, and 
          engineering clean user-centric interfaces.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 font-mono text-xs uppercase tracking-widest">
          <button
            onClick={handleScrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Transmit Message //
          </button>
          
          <a
            href="/RoopeshKumar.pdf"
            download="RoopeshKumar.pdf"
            className="px-8 py-4 bg-white/5 border border-white/10 hover:border-cosmic-cyan hover:bg-cosmic-cyan/5 text-gray-300 hover:text-white font-bold rounded-xl transition duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Download CV.pdf
          </a>
        </div>
      </div>

      {/* Floating Hero Visual (Right) */}
      <div className="flex-1 flex justify-center items-center z-10">
        <div className="relative group animate-float">
          {/* Animated Glow Halo */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          
          {/* Profile Image container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-950">
            <img
              src="/body1.png"
              alt="Roopesh Kumar Profile"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition duration-500 scale-105 hover:scale-100"
            />
          </div>

          {/* Floating mono tag */}
          <div className="absolute -bottom-4 -right-4 glassmorphism border border-white/10 rounded-xl px-4 py-2 font-mono text-[10px] text-gray-300 shadow-2xl animate-float-delayed">
            SYS_INIT: OK //
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body_page;

