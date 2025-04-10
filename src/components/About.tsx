import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { BrainCircuit, Code2, Database, Layout, Server, Wrench, Globe, ShoppingBag, Search } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'jQuery', level: 85 },
        { name: 'Knockout.js', level: 75 },
      ],
    },
    {
      category: 'Backend',
      icon: <Server className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'PHP', level: 90 },
        { name: 'Node.js', level: 80 },
      ],
    },
    {
      category: 'Database',
      icon: <Database className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      category: 'E-commerce',
      icon: <ShoppingBag className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'Magento/Adobe Commerce', level: 85 },
        { name: 'E-commerce APIs', level: 80 },
        { name: 'Payment Gateways', level: 75 },
        { name: 'Adobe Live Search', level: 80 },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: <Wrench className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Require.js', level: 80 },
      ],
    },
    {
      category: 'AI Experience',
      icon: <BrainCircuit className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'Adobe Live Search', level: 85 },
        { name: 'ChatGPT', level: 80 },
        { name: 'Lovable', level: 75 },
        { name: 'Grok', level: 70 },
        { name: 'Windsurf', level: 65 },
      ],
    },
  ];

  const codeSnippets = [
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

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-portfolio-light max-w-2xl mx-auto">
            I'm a full-stack developer with expertise in modern web technologies.
            I specialize in building responsive, performant applications with clean, maintainable code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">My <span className="gradient-text">Journey</span></h3>
            <p className="text-portfolio-light mb-4">
              With several years of experience in web development, I've worked on projects ranging from small business websites to complex enterprise applications. 
              I'm passionate about creating solutions that are not only technically sound but also provide excellent user experiences.
            </p>
            <p className="text-portfolio-light mb-4">
              My approach combines technical expertise with a deep understanding of user needs and business goals. 
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Knockout.js</span>
              <span className="tech-tag">Magento</span>
              <span className="tech-tag">Adobe Live Search</span>
            </div>
          </div>
          
          <div>
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-0">
                <Tabs defaultValue="typescript" className="w-full">
                  <TabsList className="w-full bg-portfolio-dark/50 rounded-t-none border-b border-portfolio-accent/20">
                    {codeSnippets.map((snippet) => (
                      <TabsTrigger 
                        key={snippet.language} 
                        value={snippet.language}
                        className="data-[state=active]:bg-portfolio-accent/20"
                      >
                        <Code2 className="h-4 w-4 mr-2" />
                        {snippet.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {codeSnippets.map((snippet) => (
                    <TabsContent key={snippet.language} value={snippet.language} className="m-0">
                      <pre className="code-block text-sm max-h-[300px] overflow-y-auto font-fira-code">
                        <code>{snippet.code}</code>
                      </pre>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        <div id="skills">
          <h3 className="text-2xl font-bold mb-6 text-center">Technical <span className="gradient-text">Skills</span></h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory) => (
              <Card key={skillCategory.category} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {skillCategory.icon}
                    <h4 className="text-lg font-semibold ml-2">{skillCategory.category}</h4>
                  </div>
                  <div className="space-y-4">
                    {skillCategory.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-portfolio-light">{skill.name}</span>
                          <span className="text-xs text-portfolio-light">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-portfolio-dark/50 rounded-full h-1.5">
                          <div 
                            className="bg-gradient-to-r from-portfolio-accent to-portfolio-highlight h-1.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
