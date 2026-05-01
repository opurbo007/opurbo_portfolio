import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menu = [
    { title: "Home", path: "/" },
    { title: "About", path: "/#about" },
    { title: "Skills", path: "/#skills" },
    { title: "Projects", path: "/project" },
    { title: "Contact", path: "/#contact" },
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-10">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-bold text-base tracking-tight text-neutral-900 dark:text-neutral-100">Opu Pal</span>
          <span className="text-xs text-neutral-500">Full Stack Developer</span>
        </div>

        <nav className="flex gap-5">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            { href: "mailto:opupal07@gmail.com", icon: <Mail size={15} /> },
            { href: "https://github.com/opurbo007", icon: <Github size={15} /> },
            { href: "https://www.linkedin.com/in/opu-pal-9b72a52b0/", icon: <Linkedin size={15} /> },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-purple-400 dark:hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 text-neutral-600 dark:text-neutral-400 transition-all"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-100 dark:border-neutral-800/50 py-4 text-center text-xs text-neutral-400">
        © {currentYear} Opu Pal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
