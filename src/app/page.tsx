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

const featuredProjects: ProjectItem[] = [
  { _id: 1, name: "ShowBox", git: "https://github.com/opurbo007/showbox", imagePath: "/temp/project13.png", live: "https://showbox-two.vercel.app/" },
  { _id: 2, name: "Qoo-Media", git: "https://github.com/opurbo007/Qoo-media", live: "https://qoo-media.vercel.app/", imagePath: "/temp/project2.png" },
  { _id: 3, name: "Haven Store", git: "https://github.com/opurbo007/havenstore", imagePath: "/temp/project6.png" },
];

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
