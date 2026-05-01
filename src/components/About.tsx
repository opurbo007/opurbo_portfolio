import { GraduationCap, Briefcase, MapPin, Trophy } from "lucide-react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const About = () => {
  return (
    <div id="about" className="py-20 px-6">
      <div>
        <h2 className="flex items-center justify-center font-bold text-4xl pb-4 tracking-tight">
          About Me
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-sm mb-16">
          A little about who I am
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-12">
        {/* Photo */}
        <div className="relative flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-500 blur-xl opacity-20" />
          <Image
            src={"/me.jpg"}
            height={300}
            width={300}
            alt="Opu Pal"
            className="rounded-2xl object-cover w-full h-full border border-neutral-200 dark:border-neutral-800 shadow-xl relative z-10"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 flex-1 max-w-lg">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            I&apos;m a Full Stack Developer at{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">Techy&apos;s IT</span>{" "}
            with 2 years of professional experience building scalable web and desktop apps. I specialize
            in Next.js, React, Node.js, and Electron — with a focus on offline-first systems, secure
            authentication, and clean TypeScript codebases.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border border-purple-200 dark:border-purple-500/20 bg-purple-50 dark:bg-purple-500/5 hover:border-purple-400 dark:hover:border-purple-500/40 transition-colors shadow-sm">
              <CardHeader className="pb-3">
                <Briefcase className="text-purple-600 dark:text-purple-500 mb-1" size={18} />
                <CardTitle className="text-sm font-semibold">Experience</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Full Stack Developer
                  <br />
                  <span className="text-purple-600 dark:text-purple-400">Techy&apos;s IT · 2024 – Present</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-purple-200 dark:border-purple-500/20 bg-purple-50 dark:bg-purple-500/5 hover:border-purple-400 dark:hover:border-purple-500/40 transition-colors shadow-sm">
              <CardHeader className="pb-3">
                <GraduationCap className="text-purple-600 dark:text-purple-500 mb-1" size={18} />
                <CardTitle className="text-sm font-semibold">Education</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  B.Sc. in CSE · 2019–2023
                  <br />
                  <span className="text-purple-600 dark:text-purple-400">Dhaka International University</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Achievements */}
          <div className="flex items-start gap-3 p-3 rounded-xl border border-yellow-300 dark:border-yellow-500/20 bg-yellow-50 dark:bg-yellow-500/5">
            <Trophy size={16} className="text-yellow-500 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              ICPC 2020 participant · Programming Contest winner, Hackathon winner &
              Project showcase runner-up at SIU 2021
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <MapPin size={14} className="text-purple-500 dark:text-purple-400" />
            <span>Jamalpur, Bangladesh · Open to remote opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
