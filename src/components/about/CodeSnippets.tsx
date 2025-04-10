
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CodeSnippet {
  language: string;
  title: string;
  code: string;
}

const CodeSnippets = () => {
  const [activeTab, setActiveTab] = useState('typescript');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Touch handling state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  
  const codeSnippets: CodeSnippet[] = [
    {
      language: 'typescript',
      title: 'React + TypeScript',
      code: `import React, { useState, useEffect } from 'react';

interface DataProps {
  id: number;
  title: string;
  completed: boolean;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title} - {item.completed ? 'Completed' : 'Pending'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;`,
    },
    {
      language: 'php',
      title: 'PHP',
      code: `<?php
class DatabaseConnection {
    private $host;
    private $username;
    private $password;
    private $database;
    private $connection;

    public function __construct($host, $username, $password, $database) {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
    }

    public function connect() {
        try {
            $this->connection = new PDO(
                "mysql:host={$this->host};dbname={$this->database}",
                $this->username,
                $this->password
            );
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return true;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            return false;
        }
    }

    public function query($sql, $params = []) {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            echo "Query failed: " . $e->getMessage();
            return false;
        }
    }

    public function close() {
        $this->connection = null;
    }
}

// Usage
$db = new DatabaseConnection('localhost', 'username', 'password', 'my_database');
$db->connect();
$users = $db->query("SELECT * FROM users WHERE status = ?", ['active']);
?>`,
    },
    {
      language: 'xml',
      title: 'XML',
      code: `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <product id="1001" category="electronics">
    <name>Smartphone X Pro</name>
    <brand>TechCorp</brand>
    <price currency="USD">899.99</price>
    <specifications>
      <screen size="6.5" type="OLED">
        <resolution width="1440" height="3200">Quad HD+</resolution>
        <refresh-rate>120Hz</refresh-rate>
      </screen>
      <processor cores="8">Snapdragon 8 Gen 2</processor>
      <memory>
        <ram>12GB</ram>
        <storage>256GB</storage>
      </memory>
      <battery capacity="5000">Fast charging 45W</battery>
    </specifications>
    <available-colors>
      <color>Midnight Black</color>
      <color>Stellar Silver</color>
      <color>Ocean Blue</color>
    </available-colors>
    <in-stock>true</in-stock>
  </product>
</catalog>`,
    },
    {
      language: 'sql',
      title: 'SQL',
      code: `-- Create a table for users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create a table for projects
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Complex query joining multiple tables with filtering and ordering
SELECT 
    p.id, 
    p.title, 
    p.description, 
    u.username AS creator,
    COUNT(c.id) AS comment_count
FROM 
    projects p
JOIN 
    users u ON p.user_id = u.id
LEFT JOIN 
    comments c ON p.id = c.project_id
WHERE 
    p.created_at > DATE_SUB(NOW(), INTERVAL 30 DAY)
    AND u.active = TRUE
GROUP BY 
    p.id
HAVING 
    comment_count > 5
ORDER BY 
    comment_count DESC, p.created_at DESC
LIMIT 10;`,
    },
  ];

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
  
  // Get index of current active tab
  const getCurrentTabIndex = () => {
    return codeSnippets.findIndex(snippet => snippet.language === activeTab);
  };
  
  // Navigate to next or previous tab
  const navigateTab = (direction: 'next' | 'prev') => {
    const currentIndex = getCurrentTabIndex();
    const totalTabs = codeSnippets.length;
    
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % totalTabs;
      setActiveTab(codeSnippets[nextIndex].language);
    } else {
      const prevIndex = (currentIndex - 1 + totalTabs) % totalTabs;
      setActiveTab(codeSnippets[prevIndex].language);
    }
  };
  
  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      navigateTab('next');
    } else if (isRightSwipe) {
      navigateTab('prev');
    }
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-0">
        <Tabs 
          defaultValue="typescript" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
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
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CodeSnippets;
