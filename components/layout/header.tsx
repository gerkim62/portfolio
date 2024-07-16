"use client";

import personal from "@/constants/personal";
import {
  BookOpen,
  Folder,
  Home,
  LucideIcon,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useScrollDirection } from "use-scroll-direction";
import Link from "../link-with-loader";
import { ThemeToggle } from "../theme-toggle";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection } = useScrollDirection();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (scrollDirection === "DOWN") {
      setVisible(false);
    } else if (scrollDirection === "UP") {
      setVisible(true);
    }
  }, [scrollDirection]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavItem = ({
    href,
    icon: Icon,
    children,
  }: {
    href: string;
    icon: LucideIcon;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
        ${pathname === href ? "bg-purple-100 dark:bg-gray-700 font-bold" : ""}
        `}
    >
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </Link>
  );

  return (
    <header
      className={`sticky z-50 transition-all duration-500 ease-in-out border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 ${
        visible ? "top-0" : "-top-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/profile.png"
                alt="Profile picture"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200">
                {personal.name}
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:ml-6 md:flex md:space-x-4 whitespace-nowrap">
            <NavItem href="/projects" icon={Folder}>
              Projects
            </NavItem>
            <NavItem href="/blog" icon={BookOpen}>
              Blog
            </NavItem>
            <NavItem href="/about" icon={User}>
              About
            </NavItem>
            <NavItem href="/contact" icon={Mail}>
              Contact
            </NavItem>
          </nav>

          <div className="flex items-center">
            <ThemeToggle />
            {/* Mobile menu button */}
            <div className="flex md:hidden ml-2">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div onClick={toggleMenu} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="/" icon={Home}>
              Home
            </NavItem>
            <NavItem href="/projects" icon={Folder}>
              My Projects
            </NavItem>
            <NavItem href="/blog" icon={BookOpen}>
              My Blog
            </NavItem>
            <NavItem href="/about" icon={User}>
              About Me
            </NavItem>
            <NavItem href="/contact" icon={Mail}>
              Contact Me
            </NavItem>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
