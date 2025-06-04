import { Code, Database, Globe, Server } from 'lucide-react';
import SkillBadge from './SkillBadge';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Globe className="text-blue-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Server className="text-teal-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Database className="text-purple-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Database</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.database.map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Code className="text-orange-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Other</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.other.map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;