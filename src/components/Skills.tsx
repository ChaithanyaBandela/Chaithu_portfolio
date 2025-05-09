import React from 'react';

const skills = [
  { name: 'HTML/CSS', level: 95},
  { name: 'Java', level: 90},
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 70},
];

const softSkills = [
  'Problem Solving',
  'Communication',
  'Team Collaboration',
  'Time Management',
];

const SkillBar = ({ name, level }: { name: string, level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-primary-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title text-center">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Technical Skills</h3>
            <div>
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center hover:bg-primary-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">English</h4>
                  <p className="text-gray-600 dark:text-gray-400">Professional</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Telugu</h4>
                  <p className="text-gray-600 dark:text-gray-400">Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;