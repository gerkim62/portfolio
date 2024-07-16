/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Github, Linkedin, Mail, Heart, Twitter, Facebook } from "lucide-react";
import personal from "@/constants/personal";
import Link from "../link-with-loader";

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
              About Me
            </h3>
            <p className="text-sm">
              I'm a passionate TypeScript React/Next.js developer creating
              beautiful and performant web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                 href="/"
                  className="text-sm hover:text-purple-600 dark:hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                 href="/projects" className="text-sm hover:text-purple-600 dark:hover:text-purple-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-purple-600 dark:hover:text-purple-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-purple-600 dark:hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
              Get in Touch
            </h3>
            <div className="flex mb-4 space-x-4">
              <a
                target="_blank"
                href={personal.social.github}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                <Github size={24} />
              </a>
              <a
                href={personal.social.linkedin}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personal.contact.email}`}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                <Mail size={24} />
              </a>
              <a
                target="_blank"
                href={personal.social.x}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                <Twitter size={24} />
              </a>
              <a
                target="_blank"
                href={personal.social.facebook}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                <Facebook size={24} />
              </a>
            </div>
            <p className="text-sm">{personal.contact.email}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-purple-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2024 {personal.name}. All rights reserved.
          </p>
          <p className="text-sm mt-2 sm:mt-0 flex items-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> using
            React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;