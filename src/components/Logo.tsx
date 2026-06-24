import Link from "next/link";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" aria-label="Opu Pal - Home">
      <span
        className={`inline-flex items-center gap-2.5 group select-none ${className}`}
      >
        {/* Icon mark */}
        <span className="relative flex-shrink-0 w-9 h-9 rounded-[10px] bg-blue-600 flex items-center justify-center shadow-md group-hover:bg-blue-700 transition-colors duration-200">
          <span className="text-white font-extrabold text-xl leading-none tracking-tighter">
            O
          </span>
          {/* accent dot */}
          <span className="absolute top-[6px] right-[6px] w-2 h-2 rounded-full bg-blue-300" />
        </span>

        {/* Wordmark */}
        <span className="flex flex-col leading-none">
          <span className="flex items-baseline font-bold text-xl tracking-tight">
            <span className="text-blue-600 dark:text-blue-400">OPU</span>
            <span className="text-neutral-900 dark:text-neutral-100">RBO</span>
          </span>
          <span className="text-[8px] tracking-[3px] text-blue-500 dark:text-blue-400 uppercase font-medium mt-0.5">
            Full Stack Dev
          </span>
        </span>
      </span>
    </Link>
  );
};

export default Logo;
