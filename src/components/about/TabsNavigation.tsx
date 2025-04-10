
import { useRef } from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { CodeSnippet } from './types/codeSnippet';

interface TabsNavigationProps {
  codeSnippets: CodeSnippet[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsNavigation = ({ codeSnippets, activeTab, setActiveTab }: TabsNavigationProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = 150; // pixels to scroll
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative bg-portfolio-dark/50 border-b border-portfolio-accent/20">
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-portfolio-dark/50 p-1 rounded-r-md z-10 hidden sm:flex"
        onClick={() => handleScroll('left')}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4 text-portfolio-light" />
      </button>
      
      <div className="overflow-x-auto py-1 px-4 flex items-center" ref={scrollContainerRef}>
        <TabsList className="bg-transparent h-10 min-w-max">
          {codeSnippets.map((snippet) => (
            <TabsTrigger 
              key={snippet.language} 
              value={snippet.language}
              className="data-[state=active]:bg-portfolio-accent/20 whitespace-nowrap"
            >
              <Code2 className="h-4 w-4 mr-2" />
              {snippet.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-portfolio-dark/50 p-1 rounded-l-md z-10 hidden sm:flex"
        onClick={() => handleScroll('right')}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4 text-portfolio-light" />
      </button>
    </div>
  );
};

export default TabsNavigation;
