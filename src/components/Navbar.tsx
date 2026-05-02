"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { ModeToggle } from "../provider/mode-toggle";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { title: "Home",     path: "/" },
    { title: "About",    path: "/#about" },
    { title: "Skills",   path: "/#skills" },
    { title: "Projects", path: "/project" },
    { title: "Contact",  path: "/#contact" },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center top-0 left-0 w-full pt-6 px-32">
        <Logo />
        <div className="flex items-center gap-4">
          <Menubar className="border-none bg-transparent shadow-none gap-0">
            {menu.map((item, idx) => (
              <MenubarMenu key={idx}>
                <Link href={item.path}>
                  <MenubarTrigger className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                    {item.title}
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            ))}
          </Menubar>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex justify-between items-center w-full p-4 md:hidden">
        <Logo />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-purple-400 transition-colors">
                <Menu size={18} className="text-neutral-700 dark:text-neutral-300" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="pt-4 flex items-start">
                  <Logo />
                </SheetTitle>
                <SheetDescription asChild>
                  <nav className="flex flex-col gap-1 pt-6">
                    {menu.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.path}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-150"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
