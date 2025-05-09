import React from 'react';
import { Code, BookOpen, Briefcase, Coffee, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-primary-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
            Hello! I'm Satya Chaithanya, an AI & Web Development Explorer with a solid grounding in programming and a 
            passion for solving real-world problems through intelligent, data-driven solutions. My journey in tech began during my
             undergraduate studies in Artificial Intelligence and Machine Learning at Aditya Engineering College.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
            I work with technologies like Java, Python, C, JavaScript, and SQL, and I have hands-on experience in Machine Learning. 
            </p>
            <p className="text-gray-700 dark:text-gray-300">
            Beyond coding, I'm active in competitive programming, having solved over 400 problems on CodeChef, and I love collaborating with others.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform duration-300">
              <Code size={32} className="text-primary-600 dark:text-primary-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Clean, efficient code with modern practices</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform duration-300">
              <BookOpen size={32} className="text-primary-600 dark:text-primary-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Continuously expanding my knowledge</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform duration-300">
              <Briefcase size={32} className="text-primary-600 dark:text-primary-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Building practical, meaningful applications</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform duration-300">
              <Heart size={32} className="text-primary-600 dark:text-primary-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Dedicated to quality and excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;