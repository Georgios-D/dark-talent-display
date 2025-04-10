
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ExternalLink, Info } from 'lucide-react';
import { GITHUB_USERNAME } from './Navbar';

const GithubTokenInput = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleOpenGitHub = () => {
    window.open(`https://github.com/${GITHUB_USERNAME}`, '_blank');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <Info size={16} />
          <span className="hidden sm:inline">GitHub API Info</span>
          <span className="inline sm:hidden">Info</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md mx-4 max-w-[calc(100vw-2rem)]">
        <DialogHeader>
          <DialogTitle>Secure GitHub API Access</DialogTitle>
          <DialogDescription>
            This application fetches repositories from {GITHUB_USERNAME}'s GitHub account using a secure server-side connection.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground">
            Repository data is securely fetched through a server using GitHub's API, 
            which allows for higher rate limits and protects any authentication tokens from being exposed.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="default" 
              onClick={handleOpenGitHub}
            >
              View GitHub Profile
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GithubTokenInput;
