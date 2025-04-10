
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = ['React', 'TypeScript', 'PHP', 'SQL', 'AI', 'Web Development'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1500;
  
  // Advanced typing effect with sequential text rotation
  useEffect(() => {
    const text = texts[currentTextIndex];
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(prev => prev.substring(0, prev.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length + 1));
        if (typedText === text) {
          // Pause at complete word before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenTexts);
        }
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [typedText, currentTextIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8 relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-portfolio-accent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-portfolio-highlight blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="w-full md:w-auto md:flex-shrink-0 mb-6 md:mb-0 animate-fade-in">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-portfolio-accent/30 shadow-lg shadow-portfolio-accent/20">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/lovable-uploads/2ec210cc-f946-4475-8a49-a30e6d1279af.png" 
                    alt="Georgios Dimitriadis" 
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-portfolio-accent/10 text-portfolio-light">GD</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Green dot indicator removed */}
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1">
            <div className="mb-4 inline-block animate-fade-in">
              <div className="px-4 py-1 border border-portfolio-accent/30 rounded-full bg-portfolio-accent/10 text-portfolio-light text-sm">
                Full Stack Developer
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              Creating <span className="gradient-text">digital experiences</span> that make an impact
            </h1>
            
            <div className="h-8 mb-6">
              <p className="text-xl text-portfolio-light font-fira-code">
                <span className="text-portfolio-highlight">&gt;</span> {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className="text-xl text-portfolio-light mb-8 animate-fade-in opacity-90">
              I build modern web applications with an emphasis on clean code, 
              performance and exceptional user experience.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a href="#projects">
                <Button className="bg-portfolio-accent hover:bg-portfolio-highlight text-white transition-all duration-300">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button variant="outline" className="border-portfolio-accent text-portfolio-light hover:bg-portfolio-accent/10 transition-all duration-300">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center animate-bounce">
          <a href="#about" className="text-portfolio-light hover:text-white transition-colors">
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
    </section>
  );
};

export default Hero;
