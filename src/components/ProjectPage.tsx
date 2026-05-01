"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Lock } from "lucide-react";

const projectList = [
  { _id: "14", name: "ShowBox", description: "Movie and TV show discovery app with TMDB API, Redux state management and SCSS.", stack: ["React", "Redux", "TMDB API", "SCSS"], git: "https://github.com/opurbo007/showbox", live: "https://showbox-two.vercel.app/", imagePath: "/temp/project13.png" },
  { _id: "13", name: "Portfolio", description: "Personal portfolio site built with Next.js, MongoDB, Shadcn UI and Aceternity UI.", stack: ["Next.js", "MongoDB", "Shadcn UI"], git: "https://github.com/opurbo007/portfolio", live: "https://portfolio-theta-hazel-45.vercel.app/", imagePath: "/temp/project1.png" },
  { _id: "12", name: "Qoo-Media", description: "YouTube-like video streaming app powered by RapidAPI with search and channel browsing.", stack: ["React", "RapidAPI", "Material UI"], git: "https://github.com/opurbo007/Qoo-media/", live: "https://qoo-media.vercel.app/", imagePath: "/temp/project2.png" },
  { _id: "11", name: "Weather App", description: "Real-time weather app using OpenWeather API with city search and forecast display.", stack: ["Vue.js", "OpenWeather API", "CSS"], git: "https://github.com/opurbo007/Weather-With-VUE-JS", live: "https://weather000.netlify.app/", imagePath: "/temp/project3.png" },
  { _id: "10", name: "Routine Management", description: "Academic routine scheduler with PDF export, email notifications and role-based access.", stack: ["PHP", "MySQL", "Tailwind", "PHPMailer"], git: "https://github.com/opurbo007/Routine", imagePath: "/temp/project5.png" },
  { _id: "9", name: "Haven Store", description: "Full-stack e-commerce store with Sanity CMS, Stripe payments and TypeScript.", stack: ["Next.js", "TypeScript", "Sanity", "Stripe", "Tailwind"], git: "https://github.com/opurbo007/havenstore", imagePath: "/temp/project6.png" },
  { _id: "8", name: "EventX", description: "Event discovery and management platform built with React and Tailwind CSS.", stack: ["React", "Tailwind"], git: "https://github.com/opurbo007/eventx", live: "https://eventx-zeta.vercel.app/", imagePath: "/temp/project14.png" },
  { _id: "7", name: "Leisure Life", description: "Tour & travel website showcasing destinations with booking inquiry functionality.", stack: ["HTML", "Tailwind", "PHP", "MySQL"], git: "https://github.com/opurbo007/tour_website", imagePath: "/temp/project4.png" },
  { _id: "6", name: "Amar Fosol", description: "Agriculture marketplace connecting farmers to buyers with listings and contact features.", stack: ["PHP", "MySQL", "JavaScript"], git: "https://github.com/opurbo007/farmar", imagePath: "/temp/project8.png" },
  { _id: "5", name: "Pure Fashion", description: "E-commerce fashion website with product catalog, cart and order management.", stack: ["PHP", "MySQL", "JavaScript"], git: "https://github.com/opurbo007/pure_fashion-an-e-commerce-website-", imagePath: "/temp/project9.png" },
  { _id: "4", name: "Student Portal", description: "Full-featured student management portal with authentication, grades and admin dashboard.", stack: ["HTML", "PHP", "MySQL", "JavaScript"], git: "https://github.com/opurbo007/student_panal", imagePath: "/temp/project10.png" },
  { _id: "3", name: "Be Green", description: "Nursery management system with product listings, admin panel and database integration.", stack: ["HTML", "CSS", "PHP", "MySQL"], git: "https://github.com/opurbo007/Nursary-Management", imagePath: "/temp/project11.png" },
  { _id: "2", name: "Tea Station", description: "A responsive landing page for a tea shop with modern design and smooth interactions.", stack: ["HTML", "CSS", "JavaScript"], git: "https://github.com/opurbo007/Project-I-Tea-Station-", imagePath: "/temp/project7.png" },
  { _id: "1", name: "Tom & Jerry Game", description: "A fun browser game built with vanilla JavaScript featuring classic Tom & Jerry gameplay.", stack: ["HTML", "CSS", "JavaScript"], git: "https://github.com/opurbo007/Tom-Jerry-Game", live: "https://opurbo007.github.io/Tom-Jerry-Game/", imagePath: "/temp/project12.png" },
];

export function ProjectPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
      {projectList.map((item) => (
        <div
          key={item._id}
          className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 overflow-hidden hover:border-purple-400 dark:hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-200 dark:hover:shadow-purple-500/10 transition-all duration-300"
        >
          <div className="relative overflow-hidden h-48 flex-shrink-0">
            <Image src={item.imagePath} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-transparent to-transparent" />
            {item.live && (
              <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-medium">Live</span>
            )}
          </div>
          <div className="flex flex-col flex-1 p-5 gap-3">
            <h3 className="font-semibold text-base leading-tight">{item.name}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed flex-1">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.stack.map((tech, i) => (
                <span key={i} className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-medium">{tech}</span>
              ))}
            </div>
            <div className="flex gap-2 pt-1">
              <Link href={item.git} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 text-neutral-700 dark:text-neutral-300 text-xs font-medium transition-all duration-200">
                <Github size={12} /> GitHub
              </Link>
              {item.live ? (
                <Link href={item.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium transition-all duration-200">
                  <ExternalLink size={12} /> Live Demo
                </Link>
              ) : (
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 text-neutral-400 dark:text-neutral-600 text-xs font-medium cursor-not-allowed">
                  <Lock size={12} /> No Demo
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
