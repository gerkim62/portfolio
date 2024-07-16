/* eslint-disable react/no-unescaped-entities */
import Link from "@/components/link-with-loader";
import personal from "@/constants/personal";
import {
  BookOpen,
  ChevronRight,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col justify-center items-center p-4">
      <main className="w-full max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            height={150}
            width={150}
            src="/profile.png"
            alt="Your Profile"
            className="rounded-full mx-auto mb-4 border-4 border-purple-300 dark:border-purple-600"
          />
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Hi, I'm {personal.name}! 👋
          </h2>
          <p className="text-xl text-purple-600 dark:text-purple-400">
            TypeScript React/Next.js Developer
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            I create beautiful and performant web applications using modern
            technologies.
          </p>
          <div className="flex justify-center space-x-2 gap-y-2 flex-wrap">
            <span className="bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              React/Next.js
            </span>
            <span className="bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              TypeScript
            </span>
            <span className="bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              Prisma
            </span>
            <span className="bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              PWA
            </span>
          </div>
        </div>

        <div className="mb-8 flex justify-center space-x-4 flex-wrap gap-y-2">
          <Link
            href={"/projects"}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-semibold dark:bg-purple-700 dark:hover:bg-purple-600"
          >
            View My Projects
          </Link>
          <Link
            href={"/blog"}
            className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-6 py-2 rounded-full hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors border-2 border-purple-600 dark:border-purple-400 font-semibold"
          >
            Read My Blog
          </Link>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            target="_blank"
            href={personal.social.github}
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Github size={24} />
          </a>
          <a
            href={personal.social.linkedin}
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personal.contact.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Mail size={24} />
          </a>
          <a
            target="_blank"
            href={personal.social.x}
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Twitter size={24} />
          </a>
          <a
            target="_blank"
            href={personal.social.facebook}
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Facebook size={24} />
          </a>
        </div>
      </main>
    </div>
  );
};

export default HomePage;