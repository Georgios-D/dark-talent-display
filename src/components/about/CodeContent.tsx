
import { TabsContent } from '@/components/ui/tabs';
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
          <div className="h-[300px] bg-portfolio-dark/70 overflow-auto" style={{ overscrollBehaviorX: 'contain' }}>
            <pre className="code-block text-sm font-fira-code p-4 w-full">
              <code className="whitespace-pre inline-block min-w-max">{snippet.code}</code>
            </pre>
          </div>
        </TabsContent>
      ))}
    </div>
  );
};

export default CodeContent;
