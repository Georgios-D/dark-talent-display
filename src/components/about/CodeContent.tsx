
import { TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRef } from 'react';
import { CodeSnippet } from './types/codeSnippet';
import { useSwipeNavigation } from './hooks/useSwipeNavigation';

interface CodeContentProps {
  codeSnippets: CodeSnippet[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CodeContent = ({ codeSnippets, activeTab, setActiveTab }: CodeContentProps) => {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeNavigation({
    snippets: codeSnippets,
    activeTab,
    setActiveTab
  });
  
  return (
    <div 
      ref={tabsContainerRef}
      className="relative"
    >
      {codeSnippets.map((snippet) => (
        <TabsContent key={snippet.language} value={snippet.language} className="m-0">
          <ScrollArea className="h-[300px] w-full">
            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-portfolio-accent/50 scrollbar-track-portfolio-dark/30">
              <pre className="code-block text-sm font-fira-code p-4 whitespace-pre w-full">
                <code className="block min-w-max inline-block">{snippet.code}</code>
              </pre>
            </div>
          </ScrollArea>
        </TabsContent>
      ))}
    </div>
  );
};

export default CodeContent;
