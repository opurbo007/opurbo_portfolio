import { Code2, DatabaseZap, Wrench } from "lucide-react";

type Skill = { name: string; lightColor: string; darkColor: string };

const frontEnd: Skill[] = [
  { name: "React.js",    lightColor: "text-cyan-700",    darkColor: "dark:text-cyan-400" },
  { name: "Next.js",     lightColor: "text-neutral-800", darkColor: "dark:text-neutral-200" },
  { name: "TypeScript",  lightColor: "text-blue-700",    darkColor: "dark:text-blue-400" },
  { name: "JavaScript",  lightColor: "text-yellow-700",  darkColor: "dark:text-yellow-400" },
  { name: "HTML5",       lightColor: "text-orange-700",  darkColor: "dark:text-orange-400" },
  { name: "CSS3",        lightColor: "text-blue-600",    darkColor: "dark:text-blue-400" },
  { name: "Tailwind",    lightColor: "text-teal-700",    darkColor: "dark:text-teal-400" },
  { name: "Shadcn UI",   lightColor: "text-neutral-800", darkColor: "dark:text-neutral-200" },
  { name: "Material UI", lightColor: "text-blue-700",    darkColor: "dark:text-blue-400" },
  { name: "AceternityUI",lightColor: "text-blue-700",  darkColor: "dark:text-blue-400" },
  { name: "Bootstrap",   lightColor: "text-blue-800",  darkColor: "dark:text-blue-400" },
];

const backEnd: Skill[] = [
  { name: "Node.js",    lightColor: "text-green-700",   darkColor: "dark:text-green-400" },
  { name: "Express.js", lightColor: "text-neutral-800", darkColor: "dark:text-neutral-200" },
  { name: "Next.js",    lightColor: "text-neutral-800", darkColor: "dark:text-neutral-200" },
  { name: "NextAuth",   lightColor: "text-indigo-700",  darkColor: "dark:text-indigo-400" },
  { name: "Electron",   lightColor: "text-blue-600",    darkColor: "dark:text-blue-300" },
  { name: "REST APIs",  lightColor: "text-amber-700",   darkColor: "dark:text-yellow-400" },
  { name: "PHP",        lightColor: "text-indigo-600",  darkColor: "dark:text-indigo-400" },
  { name: "Python",     lightColor: "text-amber-700",   darkColor: "dark:text-yellow-400" },
];

const databases: Skill[] = [
  { name: "MongoDB",    lightColor: "text-green-700",   darkColor: "dark:text-green-500" },
  { name: "PostgreSQL", lightColor: "text-blue-700",    darkColor: "dark:text-blue-400" },
  { name: "MySQL",      lightColor: "text-blue-600",    darkColor: "dark:text-blue-300" },
  { name: "SQLite",     lightColor: "text-sky-700",     darkColor: "dark:text-sky-400" },
  { name: "Firebase",   lightColor: "text-orange-600",  darkColor: "dark:text-orange-400" },
  { name: "Prisma ORM", lightColor: "text-teal-700",    darkColor: "dark:text-teal-400" },
];

const tools: Skill[] = [
  { name: "Git",          lightColor: "text-orange-700",  darkColor: "dark:text-orange-400" },
  { name: "GitHub",       lightColor: "text-neutral-800", darkColor: "dark:text-neutral-200" },
  { name: "CI/CD",        lightColor: "text-green-700",   darkColor: "dark:text-green-400" },
  { name: "Vercel",       lightColor: "text-neutral-800", darkColor: "dark:text-neutral-200" },
  { name: "Stripe",       lightColor: "text-blue-700",  darkColor: "dark:text-blue-400" },
  { name: "Sanity CMS",   lightColor: "text-red-600",     darkColor: "dark:text-red-400" },
  { name: "Offline-first",lightColor: "text-teal-700",    darkColor: "dark:text-teal-300" },
  { name: "Multi-store",  lightColor: "text-pink-700",    darkColor: "dark:text-pink-400" },
];

const SkillBadge = ({ name, lightColor, darkColor }: Skill) => (
  <span
    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold
      bg-white dark:bg-neutral-900
      border border-neutral-200 dark:border-neutral-800
      hover:border-blue-400 dark:hover:border-blue-500/50
      hover:bg-blue-50 dark:hover:bg-blue-500/5
      shadow-sm transition-all duration-200 cursor-default
      ${lightColor} ${darkColor}`}
  >
    {name}
  </span>
);

const categories = [
  {
    icon: <Code2 size={16} />,
    title: "Front-End",
    skills: frontEnd,
    cardClass: "bg-gray-50 dark:bg-gray-800 border-blue-200 dark:border-blue-500/20",
    iconClass: "bg-cyan-100 dark:bg-white/5 text-cyan-700 dark:text-cyan-400",
  },
  {
    icon: <DatabaseZap size={16} />,
    title: "Back-End",
    skills: backEnd,
    cardClass: "bg-gray-50 dark:bg-gray-800 border-green-200 dark:border-green-500/20",
    iconClass: "bg-green-100 dark:bg-white/5 text-green-700 dark:text-green-400",
  },
  {
    icon: <DatabaseZap size={16} />,
    title: "Databases",
    skills: databases,
    cardClass: "bg-gray-50 dark:bg-gray-800 border-blue-200 dark:border-blue-500/20",
    iconClass: "bg-blue-100 dark:bg-white/5 text-blue-700 dark:text-blue-400",
  },
  {
    icon: <Wrench size={16} />,
    title: "Tools & DevOps",
    skills: tools,
    cardClass: "bg-gray-50 dark:bg-gray-800 border-orange-200 dark:border-orange-500/20",
    iconClass: "bg-orange-100 dark:bg-white/5 text-orange-700 dark:text-orange-400",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div>
        <h2 className="flex items-center justify-center font-bold text-4xl pb-4 tracking-tight">
          Skills
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-sm mb-16">
          Technologies I work with
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {categories.map((cat, idx) => (
          <div key={idx} className={`rounded-2xl border p-5 ${cat.cardClass}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`p-1.5 rounded-lg ${cat.iconClass}`}>
                {cat.icon}
              </span>
              <h3 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <SkillBadge key={i} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
