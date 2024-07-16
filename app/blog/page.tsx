import React from "react";
import { Calendar, Clock, ChevronRight } from "lucide-react";

// Sample blog post data (replace with your actual blog posts)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js and TypeScript",
    excerpt:
      "Learn how to set up a new project with Next.js and TypeScript, and discover the benefits of this powerful combination.",
    date: "2024-03-15",
    readTime: 5,
    slug: "getting-started-with-nextjs-and-typescript",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt:
      "Explore advanced techniques and best practices for using Tailwind CSS in your projects.",
    date: "2024-02-28",
    readTime: 7,
    slug: "mastering-tailwind-css-tips-and-tricks",
  },
  // Add more blog posts as needed
];

const BlogListPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
          My Blog
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          Thoughts, tutorials, and insights on web development
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  <a
                    href={`/blog/${post.slug}`}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    {post.title}
                  </a>
                </h2>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold flex items-center"
                >
                  Read More <ChevronRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;