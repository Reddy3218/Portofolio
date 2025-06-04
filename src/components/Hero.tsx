import { useContext } from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <section id="home" className="py-20 md:py-32 transition-colors">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Harsha Reddy</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer passionate about creating responsive, user-friendly web applications with clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Reddy3218" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                aria-label="Visit my GitHub profile"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshareddydevarapalli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:harshavardhandevarapalli32@gmail.com"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors group relative"
                aria-label="Send me an email"
                title="harshavardhandevarapalli32@gmail.com"
              >
                <Mail size={20} />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Send email
                </span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-lg">
            <img className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" src="/../pic.jpg" alt="Your Profile Photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;