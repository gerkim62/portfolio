/* eslint-disable react/no-unescaped-entities */
import personal from "@/constants/personal";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          I'd love to hear from you! Feel free to reach out.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-purple-600 dark:bg-purple-900 text-white p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="mb-8">
                Fill out the form or contact me directly using the information
                below.
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <Phone className="mr-4" size={20} />
                  {personal.contact.whatsapp}
                </p>
                <p className="flex items-center">
                  <Mail className="mr-4" size={20} />
                  {personal.contact.email}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-8">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  placeholder="What shall I call you?"
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  placeholder="How can I reach you?"
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  placeholder="Hello..."
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;