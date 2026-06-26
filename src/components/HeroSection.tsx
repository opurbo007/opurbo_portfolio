"use client";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Avatar3D from "./3dAvater";

export function HeroSection() {
  const words = [
    { text: "Full" },
    { text: "Stack" },
    { text: "Developer", className: "text-blue-600 dark:text-blue-400" },
  ];
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 flex-1">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-300 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for work
          </span>

          {/* Name */}
          <div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mb-1 tracking-widest uppercase">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Opu Pal
            </h1>
          </div>

          {/* Typewriter */}
          <div className="-my-2">
            <TypewriterEffectSmooth words={words} />
          </div>

          {/* Bio */}
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
            2+ years of professional experience building scalable web apps with
            React, Next.js, Node.js & MongoDB. I turn ideas into clean,
            production-ready products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/#contact">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-200 dark:shadow-blue-500/25">
                Hire Me <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/Opu_Pal.pdf" target="_blank">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium transition-all duration-200">
                Resume <Download size={16} />
              </button>
            </Link>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/opurbo007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-neutral-700 dark:text-neutral-300 transition-all duration-200 text-sm"
            >
              <Github size={16} /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/opu-pal-9b72a52b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-neutral-700 dark:text-neutral-300 transition-all duration-200 text-sm"
            >
              <Linkedin size={16} /> LinkedIn
            </Link>
          </div>
        </div>

        {/* Right: Photo */}
        <Avatar3D />
      </div>
    </div>
  );
}
