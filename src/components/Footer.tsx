import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 dark:bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Satya Chaithanya</h2>
            <p className="text-primary-200 mt-2">Dream. Develop. Deploy. This Is Just the Beginning.</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
              <li>
                <a 
                  href="#home"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#education"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Satya Chaithanya. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;