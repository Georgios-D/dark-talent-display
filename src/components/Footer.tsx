
import { HeartIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-portfolio-accent/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">
              Portfolio<span className="text-portfolio-accent">.</span>
            </a>
          </div>
          
          <div className="flex items-center text-portfolio-light text-sm">
            <span>© {currentYear} All Rights Reserved</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Made with <HeartIcon className="h-4 w-4 mx-1 text-portfolio-accent" /> and React
            </span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6 text-sm text-portfolio-light">
              <a href="#home" className="hover:text-portfolio-accent transition-colors">Home</a>
              <a href="#about" className="hover:text-portfolio-accent transition-colors">About</a>
              <a href="#projects" className="hover:text-portfolio-accent transition-colors">Projects</a>
              <a href="#contact" className="hover:text-portfolio-accent transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
