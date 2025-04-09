import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, ExternalLink, MoreVertical, GitFork, Star, Code2, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const { toast } = useToast();

  const mockRepos: Repository[] = [
    {
      id: 1,
      name: 'react-dashboard',
      description: 'A responsive dashboard built with React, TypeScript and TailwindCSS with dark mode support.',
      html_url: 'https://github.com/username/react-dashboard',
      homepage: 'https://react-dashboard-demo.com',
      stargazers_count: 48,
      forks_count: 12,
      language: 'TypeScript',
      topics: ['react', 'typescript', 'dashboard', 'tailwindcss']
    },
    {
      id: 2,
      name: 'php-ecommerce-api',
      description: 'RESTful API for e-commerce applications built with PHP and Laravel. Includes authentication, product management, and order processing.',
      html_url: 'https://github.com/username/php-ecommerce-api',
      homepage: '',
      stargazers_count: 36,
      forks_count: 8,
      language: 'PHP',
      topics: ['api', 'ecommerce', 'php', 'laravel', 'rest']
    },
    {
      id: 3,
      name: 'ai-content-generator',
      description: 'AI-powered content generation tool that uses GPT models to create blog posts, product descriptions, and social media content.',
      html_url: 'https://github.com/username/ai-content-generator',
      homepage: 'https://ai-content-demo.com',
      stargazers_count: 92,
      forks_count: 24,
      language: 'JavaScript',
      topics: ['ai', 'gpt', 'content-generation', 'openai-api']
    },
    {
      id: 4,
      name: 'sql-query-builder',
      description: 'A lightweight SQL query builder for PHP applications with support for MySQL, PostgreSQL, and SQLite.',
      html_url: 'https://github.com/username/sql-query-builder',
      homepage: '',
      stargazers_count: 58,
      forks_count: 15,
      language: 'PHP',
      topics: ['sql', 'database', 'query-builder', 'php']
    },
    {
      id: 5,
      name: 'react-native-geolocation',
      description: 'React Native geolocation component with support for maps, directions, and location sharing.',
      html_url: 'https://github.com/username/react-native-geolocation',
      homepage: '',
      stargazers_count: 71,
      forks_count: 19,
      language: 'TypeScript',
      topics: ['react-native', 'maps', 'geolocation', 'mobile']
    },
    {
      id: 6,
      name: 'neural-network-js',
      description: 'JavaScript implementation of neural networks for image recognition and data classification.',
      html_url: 'https://github.com/username/neural-network-js',
      homepage: 'https://nn-js-demo.com',
      stargazers_count: 105,
      forks_count: 31,
      language: 'JavaScript',
      topics: ['machine-learning', 'neural-network', 'ai', 'image-recognition']
    }
  ];

  const fetchRepositories = async (username: string) => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        setRepos(mockRepos);
        setFilteredRepos(mockRepos);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to load repositories');
      toast({
        title: 'Error',
        description: 'Failed to load GitHub repositories. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories('username');
  }, []);

  useEffect(() => {
    let result = repos;
    
    if (searchTerm) {
      result = result.filter(repo => 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (repo.topics && repo.topics.some(topic => topic.includes(searchTerm.toLowerCase())))
      );
    }
    
    if (selectedLanguage !== 'All') {
      result = result.filter(repo => repo.language === selectedLanguage);
    }
    
    setFilteredRepos(result);
  }, [searchTerm, selectedLanguage, repos]);

  const languages = ['All', ...Array.from(new Set(repos.map(repo => repo.language).filter(Boolean)))];

  const handleRefresh = () => {
    fetchRepositories('username');
    toast({
      title: 'Repositories Refreshed',
      description: 'Your GitHub repositories have been refreshed.',
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400/20 border-yellow-400/50 text-yellow-400',
      TypeScript: 'bg-blue-400/20 border-blue-400/50 text-blue-400',
      PHP: 'bg-purple-400/20 border-purple-400/50 text-purple-400',
      HTML: 'bg-orange-400/20 border-orange-400/50 text-orange-400',
      CSS: 'bg-pink-400/20 border-pink-400/50 text-pink-400',
    };
    
    return colors[language] || 'bg-gray-400/20 border-gray-400/50 text-gray-400';
  };

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
          <p className="text-portfolio-light max-w-2xl mx-auto mb-8">
            Browse through my GitHub repositories. These projects showcase my skills, coding style,
            and the technologies I work with.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-8">
            <Input
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-portfolio-dark/30 border-portfolio-accent/30 placeholder:text-portfolio-light/50"
            />
            
            <div className="flex flex-wrap gap-2 justify-center">
              {languages.map(language => (
                <Badge
                  key={language}
                  variant="outline"
                  className={`cursor-pointer hover:bg-portfolio-accent/20 ${
                    selectedLanguage === language 
                      ? 'bg-portfolio-accent/20 border-portfolio-accent' 
                      : 'bg-transparent'
                  }`}
                  onClick={() => setSelectedLanguage(language)}
                >
                  {language || 'Other'}
                </Badge>
              ))}
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleRefresh}
                disabled={isLoading}
                className="ml-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${isLoading ? 'animate-spin' : ''}`}
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-portfolio-accent"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 p-8 glass-card">
            <p>{error}</p>
            <Button onClick={handleRefresh} className="mt-4">
              Try Again
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <Card key={repo.id} className="project-card glass-card overflow-hidden h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={`${getLanguageColor(repo.language)}`}>
                      {repo.language}
                    </Badge>
                    <div className="flex items-center space-x-2 text-portfolio-light">
                      <span className="flex items-center text-xs">
                        <Star className="h-3.5 w-3.5 mr-1" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center text-xs">
                        <GitFork className="h-3.5 w-3.5 mr-1" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{repo.name}</CardTitle>
                  <CardDescription className="text-portfolio-light line-clamp-2">
                    {repo.description || 'No description provided'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {repo.topics?.slice(0, 4).map((topic) => (
                      <Badge key={topic} variant="secondary" className="bg-portfolio-dark/50 text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {repo.topics?.length > 4 && (
                      <Badge variant="secondary" className="bg-portfolio-dark/50 text-xs">
                        +{repo.topics.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center justify-between w-full">
                    <a 
                      href={repo.html_url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-portfolio-light hover:text-portfolio-accent transition-colors text-sm"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Repository
                    </a>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass-card max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="text-xl flex items-center">
                            <Code2 className="h-5 w-5 mr-2 text-portfolio-accent" />
                            {repo.name}
                          </DialogTitle>
                          <DialogDescription className="text-portfolio-light">
                            {repo.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4 mt-4">
                          <div className="flex flex-wrap gap-2">
                            <Badge className={`${getLanguageColor(repo.language)}`}>
                              {repo.language}
                            </Badge>
                            {repo.topics?.map((topic) => (
                              <Badge key={topic} variant="secondary" className="bg-portfolio-dark/50">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-portfolio-light">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <Star className="h-4 w-4 mr-1" />
                                {repo.stargazers_count} stars
                              </span>
                              <span className="flex items-center">
                                <GitFork className="h-4 w-4 mr-1" />
                                {repo.forks_count} forks
                              </span>
                              <span className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {Math.floor(Math.random() * 1000)} watchers
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex gap-3 mt-6">
                            <Button asChild className="bg-portfolio-accent hover:bg-portfolio-highlight">
                              <a 
                                href={repo.html_url} 
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                View on GitHub
                              </a>
                            </Button>
                            
                            {repo.homepage && (
                              <Button asChild variant="outline">
                                <a 
                                  href={repo.homepage} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {filteredRepos.length === 0 && !isLoading && !error && (
          <div className="text-center p-12 glass-card">
            <p className="text-portfolio-light mb-4">No repositories match your search criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedLanguage('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
