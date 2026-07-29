import React, { useEffect, useRef } from "react";

export default function CodeRainBackground() {
  const canvasRef = useRef(null);

  const snippets = [
    "const [data, setData] = useState(null);",
    "useEffect(() => { fetchAPI(); }, []);",
    "import React, { useState } from 'react';",
    "axios.post('/api/sendmessage', formdata);",
    "className='relative overflow-hidden border'",
    "console.log('System initialized //');",
    "const token = localStorage.getItem('token');",
    "const { id } = useParams();",
    "app.use(express.json());",
    "Router, Routes, Route",
    "<SpotlightCard spotlightColor={glow}>",
    "backdrop-filter: blur(12px);",
    "bg-zinc-950/40 border-white/10",
    "mongodb+srv://admin:secure@",
    "SELECT * FROM users WHERE role = 'admin';",
    "export default function Navbar() {",
    "onClick={() => setIsOpen(!isOpen)}",
    "event.preventDefault();",
    "history.push('/dashboard');",
    "npm run build",
    "git commit -m 'feat: ui upgrades'"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const columnWidth = 180; // wide enough to hold snippets without overlap
    let columns = Math.floor(width / columnWidth);

    // Track state of drops: y position, speed, and active snippet text
    let drops = Array(columns).fill(0).map(() => Math.random() * -500);
    let speeds = Array(columns).fill(0).map(() => 0.4 + Math.random() * 0.8);
    let activeSnippets = Array(columns).fill("").map(() => snippets[Math.floor(Math.random() * snippets.length)]);

    const draw = () => {
      // Semi-transparent overlay to create the fading trail effect
      ctx.fillStyle = "rgba(3, 7, 18, 0.12)";
      ctx.fillRect(0, 0, width, height);

      drops.forEach((y, x) => {
        const snippet = activeSnippets[x];
        
        // Cosmic gradient styling (Cyan to Violet transition) - Increased opacity for visibility
        const gradientRatio = Math.min(Math.max(y / height, 0), 1);
        ctx.fillStyle = `rgba(${Math.floor(139 - gradientRatio * 133)}, ${Math.floor(92 + gradientRatio * 90)}, ${Math.floor(246 - gradientRatio * 34)}, 0.4)`;
        
        ctx.font = "11px monospace";
        ctx.fillText(snippet, x * columnWidth + 10, y);

        // Reset drops
        if (y > height && Math.random() > 0.98) {
          drops[x] = Math.random() * -200;
          speeds[x] = 0.4 + Math.random() * 0.8;
          activeSnippets[x] = snippets[Math.floor(Math.random() * snippets.length)];
        }
        drops[x] += speeds[x];
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      const newColumns = Math.floor(width / columnWidth);
      if (newColumns > drops.length) {
        const extraDrops = Array(newColumns - drops.length).fill(0).map(() => Math.random() * -500);
        const extraSpeeds = Array(newColumns - speeds.length).fill(0).map(() => 0.4 + Math.random() * 0.8);
        const extraSnippets = Array(newColumns - activeSnippets.length).fill("").map(() => snippets[Math.floor(Math.random() * snippets.length)]);
        
        drops.push(...extraDrops);
        speeds.push(...extraSpeeds);
        activeSnippets.push(...extraSnippets);
      }
      columns = newColumns;
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none -z-10 opacity-50"
    />
  );
}
