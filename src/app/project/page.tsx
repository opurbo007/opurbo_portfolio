import { ProjectPage } from "@/components/ProjectPage";

const project = () => {
  return (
    <div className="min-h-screen py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="font-bold text-4xl tracking-tight mb-3">All Projects</h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Everything I&apos;ve built — from experiments to production apps
        </p>
      </div>
      <ProjectPage />
    </div>
  );
};

export default project;

