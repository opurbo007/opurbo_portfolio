"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Lock, X } from "lucide-react";
import projectList from "@/data/project.json";
import { useState } from "react";

export function ProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
      {projectList.map((item) => (
        <div
          key={item._id}
          className="group flex flex-col rounded-2xl
            border border-neutral-200 dark:border-neutral-800
            bg-white dark:bg-neutral-950/60
            hover:border-blue-400 dark:hover:border-blue-500/50
            hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-500/10
            transition-all duration-300"
        >
          {/* Thumbnail */}
          <div
            className="relative overflow-hidden h-48 rounded-t-2xl flex-shrink-0 cursor-pointer"
            onClick={() => setSelectedImage(item.imagePath)}
          >
            <Image
              src={item.imagePath}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 opacity-60" />
            {item.live && (
              <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-500/30 text-green-700 dark:text-green-400 text-[10px] font-semibold">
                Live
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <h3 className="font-semibold text-base leading-tight text-neutral-900 dark:text-neutral-100">
              {item.name}
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed flex-1">
              {item.description}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-1.5">
              {item.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-[10px] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-1">
              <Link
                href={item.git}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  border border-neutral-300 dark:border-neutral-700
                  hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400
                  text-neutral-700 dark:text-neutral-300
                  text-xs font-medium transition-all duration-200"
              >
                <Github size={12} /> GitHub
              </Link>
              {item.live ? (
                <Link
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-all duration-200"
                >
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
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-10 right-0 text-white hover:text-red-400"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>

            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
