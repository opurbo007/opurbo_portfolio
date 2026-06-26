"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Avatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTransform({ rotateX: -dy * 20, rotateY: dx * 20, scale: 1.05 });
    setGlowPos({ x: 50 + dx * 35, y: 50 + dy * 35 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={containerRef}
      className="relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72"
      style={{ perspective: "900px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer slow orbit rings */}
      <div className="absolute inset-[-22px] rounded-full border border-blue-400/20 animate-spin-rev-slow" />
      <div className="absolute inset-[-22px] rounded-full border border-dashed border-blue-500/15 animate-spin-ultra-slow" />

      {/* 3D card */}
      <div
        className="relative w-full h-full rounded-full"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Simplified inner styling */}
          <div className="absolute inset-[-4px] rounded-full border border-gray-300/30" />


        {/* Refined gradient border for a polished look */}
        <div
          className="absolute inset-0 rounded-full p-[2px] animate-gradient-spin"
          style={{
            background:
              "linear-gradient(135deg, #3b82f6, #60a5fa, #22d3ee, #60a5fa)",
            backgroundSize: "200% 200%",
            boxShadow:
              "0 0 20px rgba(59,130,246,0.3), 0 0 40px rgba(59,130,246,0.15)",
          }}
        >
          <div className="w-full h-full rounded-full bg-background" />
        </div>

        {/* Cursor-tracking glow */}
        <div
          className="absolute inset-0 rounded-full opacity-40 blur-xl transition-all duration-200 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, #3b82f6, #3b82f6, transparent 70%)`,
          }}
        />

        {/* Photo */}
        <Image
          src="/me.png"
          alt="Opu Pal"
          fill
          className="rounded-full object-cover"
          style={{ padding: "4px", objectPosition: "center 10%" }}
          priority
        />

        {/* Glass gloss */}
        <div className="absolute inset-[4px] rounded-full bg-white/15 pointer-events-none animate-shimmer" />
      </div>

      {/* Orbiting particles */}
      <div className="absolute top-1/2 left-1/2 w-0 h-0">
        <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_14px_#3b82f6] -translate-x-1/2 -translate-y-1/2 animate-orbit-1" />
      </div>
      <div className="absolute top-1/2 left-1/2 w-0 h-0">
        <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] -translate-x-1/2 -translate-y-1/2 animate-orbit-2" />
      </div>
      <div className="absolute top-1/2 left-1/2 w-0 h-0">
        <div className="absolute w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_#ec4899] -translate-x-1/2 -translate-y-1/2 animate-orbit-3" />
      </div>
    </div>
  );
}
