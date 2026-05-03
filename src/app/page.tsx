import About from "@/components/About";
import Contact from "@/components/Contact";
import { HeroSection } from "@/components/HeroSection";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

interface ProjectItem {
  _id: number;
  name: string;
  git: string;
  live?: string;
  imagePath: string;
}

import projectData from "@/data/project.json";

const featuredProjects: ProjectItem[] = projectData.slice(0, 3).map((item) => ({
  _id: parseInt(item._id),
  name: item.name,
  git: item.git || "#",
  live: item.live || undefined,
  imagePath: item.imagePath,
}));

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="projects">
        <Project projectData={featuredProjects} />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
