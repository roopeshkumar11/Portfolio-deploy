

import React from "react";
import { FaEnvelope, FaUser, FaConciergeBell, FaCommentAlt } from "react-icons/fa";

function Card_message({ name, email, service, message }) {
  return (
    <div className="w-full text-gray-300 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Name */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
          <FaUser className="text-cosmic-purple text-lg shrink-0" />
          <div className="truncate">
            <p className="text-[10px] font-mono uppercase text-gray-500">Sender Name</p>
            <p className="font-semibold text-white truncate">{name}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
          <FaEnvelope className="text-cosmic-cyan text-lg shrink-0" />
          <div className="truncate">
            <p className="text-[10px] font-mono uppercase text-gray-500">Email Address</p>
            <p className="font-semibold text-white truncate">{email}</p>
          </div>
        </div>

        {/* Service */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
          <FaConciergeBell className="text-cosmic-pink text-lg shrink-0" />
          <div className="truncate">
            <p className="text-[10px] font-mono uppercase text-gray-500">Service Category</p>
            <p className="font-semibold text-white truncate">{service}</p>
          </div>
        </div>
      </div>

      {/* Message Body */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
          <FaCommentAlt className="text-cosmic-purple text-xs" />
          <p className="text-[10px] font-mono uppercase text-gray-500">Message Payload</p>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line pt-2">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Card_message;

