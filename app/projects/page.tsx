import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Sample project data (replace with your actual projects)
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Prisma.",
    image: "/api/placeholder/300/200",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A React-based task manager with drag-and-drop functionality.",
    image: "/api/placeholder/300/200",
    tags: ["React", "TypeScript", "Redux", "Styled Components"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-600 hover:text-purple-800 flex items-center"
        >
          <ExternalLink size={16} className="mr-1" /> Live Demo
        </a>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <Github size={16} className="mr-1" /> GitHub
        </a>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">My Projects</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Check out some of my recent work!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;