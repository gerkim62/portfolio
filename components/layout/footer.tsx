/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-2">About Me</h3>
            <p className="text-sm">
              I'm a passionate TypeScript React/Next.js developer creating beautiful and performant web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-purple-600">Home</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600">Projects</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600">About</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Get in Touch</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm">email@example.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-purple-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 YourName. All rights reserved.</p>
          <p className="text-sm mt-2 sm:mt-0 flex items-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> using React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;