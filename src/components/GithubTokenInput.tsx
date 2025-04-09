
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ExternalLink } from 'lucide-react';

const GithubTokenInput = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleOpenGitHub = () => {
    window.open('https://github.com', '_blank');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
        >
          <ExternalLink size={16} />
          View GitHub Docs
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>GitHub Public API Access</DialogTitle>
          <DialogDescription>
            This application uses GitHub's public API to fetch repository data. No authentication is required.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground">
            The GitHub API has rate limits for unauthenticated requests (60 requests per hour per IP address).
            This is typically sufficient for normal usage.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="default" 
              onClick={handleOpenGitHub}
            >
              Open GitHub
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GithubTokenInput;
