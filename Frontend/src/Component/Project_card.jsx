import React from "react";
import SpotlightCard from "./SpotlightCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project_card({ imageUrl, title, description, projectlink, tags = [], liveLink }) {
  return (
    <SpotlightCard spotlightColor="rgba(6, 182, 212, 0.12)" className="h-full">
      <div className="flex flex-col h-full">
        {/* Project Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500 scale-100 hover:scale-105"
          />
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
          <div className="space-y-3">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cosmic-cyan"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white tracking-wide leading-snug">
              {title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-2 font-mono text-[11px] uppercase tracking-wider">
            <a
              href={projectlink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition duration-300"
            >
              <FaGithub className="text-sm" /> Code
            </a>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cosmic-cyan hover:text-cosmic-pink transition duration-300 ml-auto"
              >
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default Project_card;

