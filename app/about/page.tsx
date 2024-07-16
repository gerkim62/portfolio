/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Code, Book, Coffee, Briefcase, Award, Heart } from "lucide-react";
import Image from "next/image";
import personal from "@/constants/personal";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
          About Me
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          Get to know the developer behind the code!
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <Image
              height={200}
              width={200}
              src="/profile.png"
              alt={personal.name + "'s Profile Picture"}
              className="w-48 h-48 rounded-full border-4 border-purple-300 dark:border-purple-600 mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {personal.name}
              </h2>
              <p className="text-xl text-purple-600 dark:text-purple-400 mb-4">
                TypeScript React/Next.js Developer
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Hello! I'm a passionate web developer with a love for creating
                beautiful, efficient, and user-friendly applications. With a
                strong foundation in React and TypeScript, I specialize in
                building modern web experiences that delight users and solve
                real-world problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <Code className="mr-2 text-purple-600 dark:text-purple-400" />{" "}
                Skills
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Node.js & Express</li>
                <li>Prisma</li>
                <li>Auth.JS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <Book className="mr-2 text-purple-600 dark:text-purple-400" />{" "}
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>B.S. in Software Engineering</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                University of Eastern Africa, Baraton, Graduate
                {new Date().getFullYear() < 2026 ? "s" : "d"} 2026
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <Coffee className="mr-2 text-purple-600 dark:text-purple-400" />{" "}
              Fun Facts
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Addicted to coding👨‍💻</li>
              <li>I don't think AI will replace me😅</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-200 dark:border-purple-800 text-center">
            <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center text-pretty">
              Passionate about creating amazing web experiences with 💖 and lots
              of 🍵.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
