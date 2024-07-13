import React from 'react';
import { Code, Book, Coffee, Briefcase, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">About Me</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Get to know the developer behind the code!</p>

        <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img 
              src="/api/placeholder/200/200" 
              alt="Your Name" 
              className="w-48 h-48 rounded-full border-4 border-purple-300 mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Name</h2>
              <p className="text-xl text-purple-600 mb-4">TypeScript React/Next.js Developer</p>
              <p className="text-gray-600">
                Hello! I'm a passionate web developer with a love for creating beautiful, 
                efficient, and user-friendly applications. With a strong foundation in 
                React and TypeScript, I specialize in building modern web experiences 
                that delight users and solve real-world problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Code className="mr-2 text-purple-600" /> Skills
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Node.js & Express</li>
                <li>GraphQL</li>
                <li>Prisma & PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Book className="mr-2 text-purple-600" /> Education
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>B.S. in Computer Science</strong>
              </p>
              <p className="text-gray-600">
                University Name, Graduated 20XX
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <Briefcase className="mr-2 text-purple-600" /> Work Experience
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-800">Senior Frontend Developer</p>
                <p className="text-purple-600">Company Name | 20XX - Present</p>
                <p className="text-gray-600">
                  Led the development of multiple high-traffic web applications using React and TypeScript.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Junior Web Developer</p>
                <p className="text-purple-600">Another Company | 20XX - 20XX</p>
                <p className="text-gray-600">
                  Contributed to various client projects and honed my skills in modern web development technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <Award className="mr-2 text-purple-600" /> Achievements
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Winner of Local Hackathon 20XX</li>
              <li>Published article on React best practices in Tech Magazine</li>
              <li>Open source contributor to popular React libraries</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <Coffee className="mr-2 text-purple-600" /> Fun Facts
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Avid hiker and nature photographer</li>
              <li>Coffee enthusiast and home barista</li>
              <li>Enjoys solving complex coding puzzles in free time</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-200 text-center">
            <p className="text-gray-600 flex items-center justify-center">
              Passionate about creating amazing web experiences with
              <Heart size={20} className="text-red-500 mx-1" />
              and lots of
              <Coffee size={20} className="text-brown-500 ml-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;