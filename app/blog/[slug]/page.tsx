import { Calendar, Clock } from "lucide-react";

const BlogPostPage = () => {
  const post = {
    id: 2,
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt:
      "Explore advanced techniques and best practices for using Tailwind CSS in your projects.",
    date: "2024-02-28",
    readTime: 7,
    slug: "mastering-tailwind-css-tips-and-tricks",
  };
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-8">
              <Calendar size={16} className="mr-2" />
              <span className="mr-4">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <Clock size={16} className="mr-2" />
              <span>{post.readTime} min read</span>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              {/* This is where you'd render your blog post content */}
              <p>
                Your blog post content goes here. You can use Markdown or HTML
                formatting.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold flex items-center justify-center"
          >
            ← Back to all posts
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;