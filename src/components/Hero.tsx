
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'React | TypeScript | PHP | SQL | AI';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4 inline-block">
            <div className="px-4 py-1 border border-portfolio-accent/30 rounded-full bg-portfolio-accent/10 text-portfolio-light text-sm">
              Full Stack Developer
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating <span className="gradient-text">digital experiences</span> that make an impact
          </h1>
          
          <div className="h-8 mb-4">
            <p className="text-xl text-portfolio-light font-fira-code">
              <span className="text-portfolio-highlight">&gt;</span> {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-xl text-portfolio-light mb-8">
            I build modern web applications with an emphasis on clean code, 
            performance and user experience.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-portfolio-accent hover:bg-portfolio-highlight text-white">
              View My Projects <ArrowRightIcon className="ml-2" />
            </Button>
            <Button variant="outline" className="border-portfolio-accent text-portfolio-light hover:bg-portfolio-accent/10">
              Download Resume
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <a href="#about" className="animate-bounce text-portfolio-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
