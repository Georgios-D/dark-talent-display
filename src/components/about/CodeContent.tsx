
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
      onTouchStart={isMobile ? onTouchStart : undefined}
      onTouchMove={isMobile ? onTouchMove : undefined}
      onTouchEnd={isMobile ? onTouchEnd : undefined}
    >
      {codeSnippets.map((snippet) => (
        <TabsContent key={snippet.language} value={snippet.language} className="m-0">
          <ScrollArea className="max-h-[300px]">
            <pre className="code-block text-sm font-fira-code">
              <code>{snippet.code}</code>
            </pre>
          </ScrollArea>
        </TabsContent>
      ))}
    </div>
  );
};

export default CodeContent;
