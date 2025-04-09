
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// GitHub username constant - replace with your actual GitHub username
const GITHUB_USERNAME = 'gdimitriad';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // GitHub profile URL
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`;

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 navbar-blur',
        scrolled ? 'bg-portfolio-dark/80 py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold gradient-text">
          Portfolio<span className="text-portfolio-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-portfolio-light hover:text-white transition-colors hover:gradient-text"
            >
              {item.label}
            </a>
          ))}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-light" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden glass-card m-4 mt-2 p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-portfolio-light hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-light hover:text-white py-2"
            >
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
