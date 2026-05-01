import { Code2, DatabaseZap, Wrench } from "lucide-react";

type Skill = { name: string; color: string };

const frontEnd: Skill[] = [
  { name: "React.js", color: "text-cyan-600 dark:text-cyan-400" },
  { name: "Next.js", color: "text-neutral-700 dark:text-neutral-300" },
  { name: "TypeScript", color: "text-blue-600 dark:text-blue-400" },
  { name: "JavaScript", color: "text-yellow-600 dark:text-yellow-400" },
  { name: "HTML5", color: "text-orange-600 dark:text-orange-400" },
  { name: "CSS3", color: "text-blue-500 dark:text-blue-400" },
  { name: "Tailwind CSS", color: "text-teal-600 dark:text-teal-400" },
  { name: "Shadcn UI", color: "text-neutral-700 dark:text-neutral-300" },
  { name: "Material UI", color: "text-blue-600 dark:text-blue-400" },
  { name: "AceternityUI", color: "text-purple-600 dark:text-purple-400" },
  { name: "Bootstrap", color: "text-purple-700 dark:text-purple-500" },
];

const backEnd: Skill[] = [
  { name: "Node.js", color: "text-green-600 dark:text-green-400" },
  { name: "Express.js", color: "text-neutral-700 dark:text-neutral-300" },
  { name: "Next.js", color: "text-neutral-700 dark:text-neutral-300" },
  { name: "NextAuth", color: "text-indigo-600 dark:text-indigo-400" },
  { name: "Electron", color: "text-blue-500 dark:text-blue-300" },
  { name: "REST APIs", color: "text-yellow-600 dark:text-yellow-400" },
  { name: "PHP", color: "text-indigo-500 dark:text-indigo-400" },
  { name: "Python", color: "text-yellow-600 dark:text-yellow-400" },
];

const databases: Skill[] = [
  { name: "MongoDB", color: "text-green-600 dark:text-green-500" },
  { name: "PostgreSQL", color: "text-blue-600 dark:text-blue-400" },
  { name: "MySQL", color: "text-blue-500 dark:text-blue-300" },
  { name: "SQLite", color: "text-sky-600 dark:text-sky-400" },
  { name: "Firebase", color: "text-orange-500 dark:text-orange-400" },
  { name: "Prisma ORM", color: "text-teal-600 dark:text-teal-400" },
];

const tools: Skill[] = [
  { name: "Git", color: "text-orange-600 dark:text-orange-400" },
  { name: "GitHub", color: "text-neutral-700 dark:text-neutral-300" },
  { name: "CI/CD", color: "text-green-600 dark:text-green-400" },
  { name: "Vercel", color: "text-neutral-700 dark:text-neutral-300" },
  { name: "Stripe", color: "text-purple-600 dark:text-purple-400" },
  { name: "Sanity CMS", color: "text-red-500 dark:text-red-400" },
  { name: "Offline-first", color: "text-teal-600 dark:text-teal-300" },
  { name: "Multi-store", color: "text-pink-600 dark:text-pink-400" },
];

const SkillBadge = ({ name, color }: Skill) => (
  <span
    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
      bg-white dark:bg-neutral-900
      border border-neutral-200 dark:border-neutral-800
      hover:border-purple-400 dark:hover:border-purple-500/50
      hover:bg-purple-50 dark:hover:bg-purple-500/5
      shadow-sm
      transition-all duration-200 cursor-default ${color}`}
  >
    {name}
  </span>
);

type Category = {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
  lightAccent: string;
  darkAccent: string;
};

const categories: Category[] = [
  {
    icon: <Code2 size={16} />,
    title: "Front-End",
    lightAccent: "bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200",
    darkAccent: "dark:from-cyan-500/10 dark:to-purple-500/10 dark:border-cyan-500/20",
  },
  {
    icon: <DatabaseZap size={16} />,
    title: "Back-End",
    lightAccent: "bg-gradient-to-br from-green-50 to-blue-50 border-green-200",
    darkAccent: "dark:from-green-500/10 dark:to-blue-500/10 dark:border-green-500/20",
  },
  {
    icon: <DatabaseZap size={16} />,
    title: "Databases",
    lightAccent: "bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200",
    darkAccent: "dark:from-blue-500/10 dark:to-teal-500/10 dark:border-blue-500/20",
  },
  {
    icon: <Wrench size={16} />,
    title: "Tools & DevOps",
    lightAccent: "bg-gradient-to-br from-orange-50 to-pink-50 border-orange-200",
    darkAccent: "dark:from-orange-500/10 dark:to-pink-500/10 dark:border-orange-500/20",
  },
];

const skillsMap = [frontEnd, backEnd, databases, tools];

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
          <div
            key={idx}
            className={`rounded-2xl border p-5 bg-gradient-to-br ${cat.lightAccent} ${cat.darkAccent}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-1.5 rounded-lg bg-purple-100 dark:bg-white/5 text-purple-600 dark:text-purple-400">
                {cat.icon}
              </span>
              <h3 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsMap[idx].map((skill, i) => (
                <SkillBadge key={i} name={skill.name} color={skill.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
