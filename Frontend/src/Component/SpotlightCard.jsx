import React, { useRef, useState } from "react";

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.15)",
  glowBorderColor = "rgba(6, 182, 212, 0.3)"
}) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:border-white/20 hover:-translate-y-1 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Background */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
