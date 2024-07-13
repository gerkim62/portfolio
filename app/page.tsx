/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-purple-50 text-gray-800 flex flex-col justify-center items-center p-4">
      <main className="w-full max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            height={150}
            width={150}
            src="/next.svg"
            alt="Your Profile"
            className="rounded-full mx-auto mb-4 border-4 border-purple-300"
          />
          <h2 className="text-4xl font-bold mb-2 text-gray-900">
            Hi, I'm YourName! 👋
          </h2>
          <p className="text-xl text-purple-600">
            TypeScript React/Next.js Developer
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg mb-4 text-gray-700">
            I create beautiful and performant web applications using modern
            technologies.
          </p>
          <div className="flex justify-center space-x-2">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              React
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              Next.js
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              TypeScript
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              Tailwind CSS
            </span>
          </div>
        </div>

        <div className="mb-8">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors">
            View My Projects
          </button>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-purple-600">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            <Mail size={24} />
          </a>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
