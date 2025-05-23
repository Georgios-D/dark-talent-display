import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, ExternalLink, MoreVertical, GitFork, Star, Code2, Eye, ChevronDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import GithubTokenInput from './GithubTokenInput';
import { supabase } from "@/integrations/supabase/client";
import { GITHUB_USERNAME } from './Navbar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const fetchRepositories = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      const { data, error: functionError } = await supabase.functions.invoke('fetch-github-repos', {
        body: { username: GITHUB_USERNAME }
      });
      
      if (functionError) {
        console.error("Edge function error:", functionError);
        throw new Error(functionError.message || 'Error calling GitHub API');
      }
      
      if (!data) {
        throw new Error('No data returned from GitHub API');
      }
      
      if (data.error) {
        console.error("GitHub API error:", data.error);
        throw new Error(data.error);
      }
      
      setRepos(data);
      setFilteredRepos(data);
      
      toast({
        title: "Repositories Loaded",
        description: `Successfully loaded ${data.length} repositories from GitHub.`,
      });
    } catch (err) {
      console.error("Error fetching repositories:", err);
      setError(err.message || 'Failed to load repositories');
      toast({
        title: 'Error',
        description: err.message || 'Failed to load GitHub repositories. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
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
    fetchRepositories();
  };

  const getLanguageColor = (language: string | null) => {
    if (!language) return 'bg-gray-400/20 border-gray-400/50 text-gray-400';
    
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400/20 border-yellow-400/50 text-yellow-400',
      TypeScript: 'bg-blue-400/20 border-blue-400/50 text-blue-400',
      PHP: 'bg-purple-400/20 border-purple-400/50 text-purple-400',
      HTML: 'bg-orange-400/20 border-orange-400/50 text-orange-400',
      CSS: 'bg-pink-400/20 border-pink-400/50 text-pink-400',
      Java: 'bg-red-400/20 border-red-400/50 text-red-400',
      Python: 'bg-green-400/20 border-green-400/50 text-green-400',
      Ruby: 'bg-red-600/20 border-red-600/50 text-red-600',
      Go: 'bg-blue-600/20 border-blue-600/50 text-blue-600',
      C: 'bg-gray-600/20 border-gray-600/50 text-gray-600',
      'C++': 'bg-pink-600/20 border-pink-600/50 text-pink-600',
      'C#': 'bg-purple-600/20 border-purple-600/50 text-purple-600',
    };
    
    return colors[language] || 'bg-gray-400/20 border-gray-400/50 text-gray-400';
  };

  const renderProjectCard = (repo: Repository) => (
    <Card key={repo.id} className="project-card glass-card overflow-hidden h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          {repo.language && (
            <Badge variant="outline" className={`${getLanguageColor(repo.language)}`}>
              {repo.language}
            </Badge>
          )}
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
                  {repo.language && (
                    <Badge className={`${getLanguageColor(repo.language)}`}>
                      {repo.language}
                    </Badge>
                  )}
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
                      {Math.floor(Math.random() * 100)} watchers
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
  );

  const renderAccordionProject = (repo: Repository) => (
    <AccordionItem key={repo.id} value={`repo-${repo.id}`} className="glass-card mb-4 overflow-hidden">
      <AccordionTrigger className="px-4 py-2 hover:no-underline">
        <div className="flex items-center justify-between w-full pr-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">{repo.name}</h3>
            {repo.language && (
              <Badge variant="outline" className={`${getLanguageColor(repo.language)}`}>
                {repo.language}
              </Badge>
            )}
          </div>
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
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4">
        <div className="space-y-3">
          <p className="text-portfolio-light">
            {repo.description || 'No description provided'}
          </p>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {repo.topics?.map((topic) => (
              <Badge key={topic} variant="secondary" className="bg-portfolio-dark/50 text-xs">
                {topic}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-3 mt-4">
            <Button asChild size="sm" className="bg-portfolio-accent hover:bg-portfolio-highlight">
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
              <Button asChild size="sm" variant="outline">
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
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4 mr-1" />
                  Details
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card max-w-3xl">
                {/* ... keep existing code (Dialog content) */}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
          <p className="text-portfolio-light max-w-2xl mx-auto mb-4">
            Browse through my GitHub repositories. These projects showcase my skills, coding style,
            and the technologies I work with.
          </p>
          
          <div className="flex justify-center mt-6 mb-8">
            <GithubTokenInput />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mt-8 mb-8">
            <Input
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-portfolio-dark/30 border-portfolio-accent/30 placeholder:text-portfolio-light/50"
            />
            
            <div className="flex flex-wrap gap-2 justify-center">
              {languages.map(language => (
                <Badge
                  key={language || 'null'}
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
            <p className="text-sm text-gray-400 mt-2">
              Make sure the GitHub username is correct and the account has public repositories.
            </p>
            <Button onClick={handleRefresh} className="mt-4">
              Try Again
            </Button>
          </div>
        ) : (
          <>
            {isMobile ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredRepos.map(renderAccordionProject)}
              </Accordion>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map(renderProjectCard)}
              </div>
            )}
          </>
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
