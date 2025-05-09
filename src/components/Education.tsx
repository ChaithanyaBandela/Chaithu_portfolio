import React from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
}

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;

}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Artificial Intelligence and Machine Learning',
    institution: 'Aditya Engineering College',
    location: 'Surampalem, India',
    period: '2022 - 2026',
    
  },
  {
    id: 2,
    degree: 'Higher Secondary Education',
    institution: 'Sri Nanna Raju Junior College',
    location: 'Ravulapalem, India',
    period: '2020 - 2022',
  },
  {
    id: 3,
    degree: 'Xth Class',
    institution: 'R.Z.P.P.High School',
    location: 'Ryali, India',
    period: '2019 - 2020',
  }
];

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    position: 'Frontend Developer Intern',
    company: 'Technical Hub',
    location: 'Inoffice',
    period: 'May 2024-Jun 2024',
  },
  {
    id: 2,
    position: 'AIML Intern',
    company: 'APSSDC',
    location: 'Remote',
    period: 'Jul 2024',
   
  }
];

const TimelineItem = ({ children, isLast }: { children: React.ReactNode, isLast: boolean }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute top-0 left-0 h-full w-px bg-primary-200 dark:bg-primary-800"></div>
      <div className="absolute top-0 left-0 w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900"></div>
      {!isLast && <div className="absolute bottom-0 left-0 w-6 h-6 bg-transparent transform -translate-x-1/2"></div>}
      {children}
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-16 bg-primary-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title text-center">Education & Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <Award size={24} className="mr-2 text-primary-600 dark:text-primary-400" />
              Education
            </h3>
            
            <div className="mt-8">
              {educationData.map((item, index) => (
                <TimelineItem key={item.id} isLast={index === educationData.length - 1}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{item.degree}</h4>
                    <h5 className="text-primary-600 dark:text-primary-400 font-medium mb-2">{item.institution}</h5>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <MapPin size={16} className="mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{item.period}</span>
                    </div>
                   
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <Briefcase size={24} className="mr-2 text-primary-600 dark:text-primary-400" />
              Experience
            </h3>
            
            <div className="mt-8">
              {experienceData.map((item, index) => (
                <TimelineItem key={item.id} isLast={index === experienceData.length - 1}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{item.position}</h4>
                    <h5 className="text-primary-600 dark:text-primary-400 font-medium mb-2">{item.company}</h5>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <MapPin size={16} className="mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;