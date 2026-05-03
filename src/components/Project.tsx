import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface ProjectType {
  _id: number;
  name: string;
  git: string;
  live?: string;
  imagePath: string;
}

const Project: React.FC<{ projectData: ProjectType[] }> = ({ projectData }) => {
  return (
    <section className="py-20 px-6 flex items-center justify-between flex-col gap-12">
      <div>
        <h2 className="flex items-center justify-center font-bold text-4xl pb-4 tracking-tight">
          Projects
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-sm mb-16">
          A few things I&apos;ve built
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex sm:flex-row flex-col gap-6">
          {projectData?.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-[20rem] rounded-2xl
                border border-neutral-200 dark:border-neutral-800
                bg-white dark:bg-neutral-950/60
                hover:border-purple-400 dark:hover:border-purple-500/50
                hover:shadow-xl hover:shadow-purple-200 dark:hover:shadow-purple-500/10
                transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-44 rounded-t-2xl">
                <Image
                  src={item.imagePath}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-base mb-3 text-neutral-900 dark:text-neutral-100">
                  {item.name}
                </h3>
                <div className="flex gap-3">
                  <Link
                    href={item.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                      border border-neutral-300 dark:border-neutral-700
                      hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400
                      text-xs font-medium transition-all duration-200
                      text-neutral-700 dark:text-neutral-300"
                  >
                    <Github size={13} /> GitHub
                  </Link>
                  {item.live ? (
                    <Link
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium transition-all duration-200"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </Link>
                  ) : (
                    <span className="flex items-center px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 text-xs font-medium cursor-not-allowed">
                      No Live Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/project"
        className="text-sm font-medium px-4 py-2 rounded-lg
    border border-neutral-300 dark:border-neutral-700
    hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400
    transition-all duration-200"
      >
        View All →
      </Link>
    </section>
  );
};

export default Project;
