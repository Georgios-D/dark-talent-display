
import { Card, CardContent } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { useState } from 'react';
import TabsNavigation from './TabsNavigation';
import CodeContent from './CodeContent';
import { codeSnippets } from './data/codeSnippets';

const CodeSnippets = () => {
  const [activeTab, setActiveTab] = useState('typescript');

  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-0">
        <Tabs 
          defaultValue="typescript" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsNavigation 
            codeSnippets={codeSnippets}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          
          <CodeContent 
            codeSnippets={codeSnippets}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CodeSnippets;
