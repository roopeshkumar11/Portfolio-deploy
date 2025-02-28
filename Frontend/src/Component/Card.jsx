import React from 'react';
function Card({ title, description, imageUrl, buttonText }) {
  return (
    <div className="bg-gray-900 max-w-sm p-5 rounded-2xl shadow-lg text-gray-300 transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-lg" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <button className="mt-4 px-5 py-2 bg-[#4FC3F7] text-black rounded-md font-medium hover:bg-[#3BAFDA] transition">
        {buttonText}
      </button>
    </div>
  );
}
export default Card;
