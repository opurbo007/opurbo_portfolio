import { Code2, DatabaseZap, Wrench, Server } from "lucide-react";

type Skill = { name: string };

const frontEnd: Skill[] = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Tailwind" },
  { name: "Shadcn UI" },
  { name: "Material UI" },
  { name: "Aceternity UI" },
  { name: "Bootstrap" },
];

const backEnd: Skill[] = [
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Next.js (API Routes)" },
  { name: "NextAuth" },
  { name: "Electron" },
  { name: "REST APIs" },
  { name: "PHP" },
  { name: "Python" },
];

const databases: Skill[] = [
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "SQLite" },
  { name: "Firebase" },
  { name: "Prisma ORM" },
];

const tools: Skill[] = [
  { name: "Git" },
  { name: "GitHub" },
  { name: "CI/CD" },
  { name: "Vercel" },
  { name: "Stripe" },
  { name: "Sanity CMS" },
  { name: "Offline-first" },
  { name: "Multi-store" },
];

type CategoryAccent = {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
  accent: string; // single accent color per category, used sparingly
};

const categories: CategoryAccent[] = [
  {
    icon: <Code2 size={16} />,
    title: "Front-End",
    skills: frontEnd,
    accent: "cyan",
  },
  {
    icon: <Server size={16} />,
    title: "Back-End",
    skills: backEnd,
    accent: "violet",
  },
  {
    icon: <DatabaseZap size={16} />,
    title: "Databases",
    skills: databases,
    accent: "emerald",
  },
  {
    icon: <Wrench size={16} />,
    title: "Tools & DevOps",
    skills: tools,
    accent: "amber",
  },
];

// Tailwind needs literal class names, so map accent -> static class strings
// rather than building them with string interpolation.
const accentStyles: Record<
  string,
  {
    card: string;
    icon: string;
    text: string;
    badgeBorder: string;
    badgeHover: string;
  }
> = {
  cyan: {
    card: "border-cyan-100 dark:border-cyan-500/10",
    icon: "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
    text: "text-cyan-600/90 dark:text-cyan-400/80",
    badgeBorder: "border-neutral-200 dark:border-neutral-800",
    badgeHover:
      "hover:border-cyan-200 hover:bg-cyan-50/50 dark:hover:border-cyan-500/25 dark:hover:bg-cyan-500/5",
  },
  violet: {
    card: "border-violet-100 dark:border-violet-500/10",
    icon: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
    text: "text-violet-600/90 dark:text-violet-400/80",
    badgeBorder: "border-neutral-200 dark:border-neutral-800",
    badgeHover:
      "hover:border-violet-200 hover:bg-violet-50/50 dark:hover:border-violet-500/25 dark:hover:bg-violet-500/5",
  },
  emerald: {
    card: "border-emerald-100 dark:border-emerald-500/10",
    icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    text: "text-emerald-600/90 dark:text-emerald-400/80",
    badgeBorder: "border-neutral-200 dark:border-neutral-800",
    badgeHover:
      "hover:border-emerald-200 hover:bg-emerald-50/50 dark:hover:border-emerald-500/25 dark:hover:bg-emerald-500/5",
  },
  amber: {
    card: "border-amber-100 dark:border-amber-500/10",
    icon: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    text: "text-amber-600/90 dark:text-amber-400/80",
    badgeBorder: "border-neutral-200 dark:border-neutral-800",
    badgeHover:
      "hover:border-amber-200 hover:bg-amber-50/50 dark:hover:border-amber-500/25 dark:hover:bg-amber-500/5",
  },
};

const SkillBadge = ({
  name,
  text,
  badgeBorder,
  badgeHover,
}: {
  name: string;
  text: string;
  badgeBorder: string;
  badgeHover: string;
}) => (
  <span
    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
      bg-white dark:bg-neutral-900
      border shadow-sm transition-colors duration-150 cursor-default
      ${text} ${badgeBorder} ${badgeHover}`}
  >
    {name}
  </span>
);

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
        {categories.map((cat) => {
          const style = accentStyles[cat.accent];
          return (
            <div
              key={cat.title}
              className={`rounded-2xl border bg-gray-50 dark:bg-gray-800 p-5 ${style.card}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`p-1.5 rounded-lg ${style.icon}`}>
                  {cat.icon}
                </span>
                <h3 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    text={style.text}
                    badgeBorder={style.badgeBorder}
                    badgeHover={style.badgeHover}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
