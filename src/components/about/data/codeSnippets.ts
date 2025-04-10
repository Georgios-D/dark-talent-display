
import { CodeSnippet } from '../types/codeSnippet';

export const codeSnippets: CodeSnippet[] = [
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
