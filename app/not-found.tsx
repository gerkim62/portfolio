import React from 'react';
import { Home, RefreshCcw } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col justify-center items-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Looks like you've ventured into uncharted territory!
        </p>
        
        {/* Cute SVG illustration */}
        <svg className="w-64 h-64 mx-auto mb-8" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#EDE9FE" />
          <circle cx="70" cy="80" r="20" fill="white" />
          <circle cx="130" cy="80" r="20" fill="white" />
          <circle cx="75" cy="75" r="10" fill="#7C3AED" />
          <circle cx="135" cy="75" r="10" fill="#7C3AED" />
          <path d="M 65 120 Q 100 150 135 120" stroke="#7C3AED" strokeWidth="6" fill="none" />
        </svg>
        
        <div className="flex justify-center space-x-4">
          <a 
            href="/"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center"
          >
            <Home size={20} className="mr-2" />
            Go Home
          </a>
          <button 
            className="bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100 transition-colors duration-300 flex items-center border border-purple-600"
          >
            <RefreshCcw size={20} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;