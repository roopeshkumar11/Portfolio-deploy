

import React from 'react';

function Card_message({ name, email, service, message }) {
  return (
    <div className="max-h-full  w-[100%] md:w-[80%] p-5 text-gray-300">
      <div className=" p-5  border-gray-600">
        <p className="md:text-xl font-bold">Name: {name}</p>
        <p className="md:text-xl font-bold">Email: {email}</p>
        <p className="md:text-xl font-bold">Service: {service}</p>
        <p className="md:text-xl font-bold">Message: {message}</p>

        
      </div>
    </div>
  );
}

export default Card_message;
