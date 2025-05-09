import React, { useState } from 'react';
import { ExternalLink, Code, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Blog Platform',
    description: 'A full-featured Blog platform built with Html,CSS,Java Script,Node.js and Mongo DB. Includes user authentication.',
    image: 'https://img.freepik.com/premium-photo/midsection-person-holding-coffee-cup_1048944-30168042.jpg?ga=GA1.1.1012993482.1680683815&semt=ais_hybrid&w=740',
    technologies: ['HTML', 'Node.js', 'MongoDB', 'CSS'],
    codeLink: 'https://github.com/ChaithanyaBandela/Blog_platform',
  },
  {
    id: 2,
    title:'House Price Prediction',
    description:'House Price Prediction is a machine learning project that uses historical housing data to predict the price of a house based on various features.',
    image:'https://img.freepik.com/free-vector/technology-background_52683-5265.jpg?ga=GA1.1.1012993482.1680683815&semt=ais_hybrid&w=740',
    technologies: ['Python','Machine Learning'],
    codeLink:'https://github.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Tailwind CSS. Features responsive design, dark mode, and smooth animations.',
    image: 'https://img.freepik.com/premium-vector/web-landing-page-template-design_706582-340.jpg?ga=GA1.1.1012993482.1680683815&semt=ais_hybrid&w=740',
    technologies: ['React', 'CSS'],
    codeLink: 'https://github.com/ChaithanyaBandela/Chaithu_portfolio',
  },
  {
    id: 4,
    title: 'Java-Based Applications',
    description: 'A collection of diverse Java projects demonstrating proficiency in core Java, GUI development with AWT/Swing, file handling, and logic building through practical applications like games, management systems, and utilities.',
    image: 'https://img.freepik.com/premium-photo/java-programming-concept-virtual-machine-server-room-background_161452-9180.jpg?ga=GA1.1.1012993482.1680683815&semt=ais_hybrid&w=740',
    technologies: ['Java', 'Swing','JDBC','SQL'],
    codeLink: 'https://github.com/ChaithanyaBandela/JavaProjects',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-center">My Projects</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === category 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="card overflow-hidden group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-primary-600 p-2 rounded-full hover:bg-primary-100 transition-colors"
                    aria-label="View demo"
                  >
                    <Eye size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;