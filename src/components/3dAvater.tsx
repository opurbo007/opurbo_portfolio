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
      <div className="absolute inset-[-22px] rounded-full border border-dashed border-purple-500/15 animate-spin-ultra-slow" />

      {/* 3D card */}
      <div
        className="relative w-full h-full rounded-full"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Inner dashed ring */}
        <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-purple-400/50 animate-spin-slow" />
        {/* Inner solid ring */}
        <div className="absolute inset-[-16px] rounded-full border border-blue-400/30 animate-spin-reverse" />

        {/* Pulsing conic glow halo */}
        <div
          className="absolute inset-[-8px] rounded-full opacity-20 blur-lg animate-pulse-ring"
          style={{
            background:
              "conic-gradient(from 0deg, #a855f7, #3b82f6, #22d3ee, #ec4899, #a855f7)",
          }}
        />

        {/* Animated gradient border */}
        <div
          className="absolute inset-0 rounded-full p-[3px] animate-gradient-spin"
          style={{
            background:
              "linear-gradient(135deg, #a855f7, #3b82f6, #22d3ee, #a855f7)",
            backgroundSize: "300% 300%",
            boxShadow:
              "0 0 40px rgba(168,85,247,0.5), 0 0 80px rgba(59,130,246,0.2)",
          }}
        >
          <div className="w-full h-full rounded-full bg-background" />
        </div>

        {/* Cursor-tracking glow */}
        <div
          className="absolute inset-0 rounded-full opacity-40 blur-xl transition-all duration-200 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, #a855f7, #3b82f6, transparent 70%)`,
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
        <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none animate-shimmer" />
      </div>

      {/* Orbiting particles */}
      <div className="absolute top-1/2 left-1/2 w-0 h-0">
        <div className="absolute w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_14px_#a855f7] -translate-x-1/2 -translate-y-1/2 animate-orbit-1" />
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
