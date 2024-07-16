/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Home, RefreshCcw } from "lucide-react";
import Link from "@/components/link-with-loader";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 flex flex-col justify-center items-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-600 dark:text-purple-400 mb-4">
          404
        </h1>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Looks like you've ventured into uncharted territory!
        </p>

       

        <div className="flex justify-center whitespace-nowrap">
          <Link
            href="/"
            className="bg-purple-600 dark:bg-purple-700 text-white px-12 py-3 rounded-full hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center w-48"
          >
            <Home size={20} className="mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
