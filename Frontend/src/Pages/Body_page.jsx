import React from 'react';

function Body_page() {
  return (
    <div className="flex flex-col  p-5 items-center text-center bg-gradient-to-b from-gray-900 to-black py-10 text-gray-300">
      {/* Profile Image */}
      <img 
        src="/body.jpg" 
        className="w-48 h-48 object-cover rounded-full border-4 border-gray-600 shadow-lg" 
        alt="Roopesh Kumar"
      />
      
      {/* Name */}
      <p className="mt-4  text-4xl md:text-6xl font-bold tracking-wide text-white">Roopesh Kumar</p>

      {/* Title */}
      <p className="text-xl text-[#4FC3F7] mt-2">MERN Stack Developer</p>

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm md:text-lg leading-relaxed">
        As a passionate MERN stack developer, with expertise in building full-stack web applications, 
        I thrive on the challenges of designing scalable architectures, optimizing performance, and 
        creating seamless user experiences that drive innovation.
      </p>

      {/* Contact Button */}
      <button className="mt-6 px-6 py-3 bg-[#4FC3F7] text-black font-semibold rounded-full border border-gray-600 shadow-md hover:bg-[#3BAFDA] transition">
        Contact Me
      </button>
    </div>
  );
}

export default Body_page;
