"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoDark from "../icons/LogoDark";
import { useTheme } from "next-themes";
import Logo from "../icons/Logo";
import Github from "../icons/Github";
import Discord from "../icons/Discord";
import { useState } from "react";
import { Languages } from "../icons/Flags";
import { Check, Moon, ChevronsUpDown } from "lucide-react";
import { Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const isDarkMode = theme === "dark";
    const Icon = isDarkMode ? Sun : Moon;
    const NavbarLogo = isDarkMode ? <Logo /> : <LogoDark />;

    return (
        <header className="sticky top-0 container mx-auto py-4 px-3 border-l border-b border-r border-[#000f]/15 dark:border-white/15">
            <nav className="flex justify-between items-center">
                <Link href={"/"} className="flex items-center gap-4">
                    {NavbarLogo}
                    <div className="h-6 w-0.5 bg-[#000f]/50 rotate-12 dark:bg-white/50" />
                    <h2 className="font-bold uppercase text-xl text-pretty leading-relaxed text-[#000f] dark:text-zinc-200">
                        Lang.<span className="capitalize text-xs dark:text-white/75">Docs</span>
                    </h2>
                </Link>
                <ul></ul>
                <div className="flex items-center">
                    <Button asChild variant="ghost" size="icon" className={`bg-transparent ${isDarkMode ? '' : 'hover:bg-[#000f]/5'}`}>
                        <Link href={"https://discord.gg/f85Eybah"}><Discord /></Link>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className={`bg-transparent ${isDarkMode ? '' : 'hover:bg-[#000f]/5'}`}>
                        <Link href={"https://github.com/Creation-of-Destruction-Cody/LangDocs"}><Github /></Link>
                    </Button>
                    <Button variant="ghost" size="icon" className={`bg-transparent ${isDarkMode ? '' : 'hover:bg-[#000f]/5'}`} onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
                        <Icon />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className={`bg-transparent flex items-center justify-center ${isDarkMode ? '' : 'hover:bg-[#000f]/5'}`} >
                                {Languages[1].icon}
                                <ChevronsUpDown />
                            </Button>
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    );
}