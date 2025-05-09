import React from 'react';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';
import logo from './me.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-gray-900 dark:to-primary-950">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-primary-600 dark:text-primary-400 text-xl mb-2">Hello, I'm</h3>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Satya Chaithanya
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg">
              Aspiring developer passionate about learning and building clean, user-friendly applications. 
              Eager to collaborate and grow through real-world projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1o9xuNBVmPDX_N31HOhOKq3uGr3q3NRCb" download className="btn btn-secondary">
                <Download size={18} className="mr-2" /> Download CV
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>
            <div className="mt-8 flex space-x-4">
              <a 
                href="https://github.com/ChaithanyaBandela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/satya-chaithanya-bandela/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-300 dark:border-primary-700 p-1 bg-white dark:bg-gray-800 shadow-xl">
                <img 
                  src={logo} 
                  alt="Satya Chaithanya" 
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary-500 dark:border-primary-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <ArrowDown size={24} className="text-primary-600 dark:text-primary-400" />
      </div>
    </section>
  );
};

export default Hero;