
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ExternalLink, Info } from 'lucide-react';

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
          <Info size={16} />
          GitHub API Info
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Secure GitHub API Access</DialogTitle>
          <DialogDescription>
            This application uses a secure server-side connection to GitHub's API with authentication.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground">
            Your requests are securely routed through a server using a GitHub token, 
            which allows for higher rate limits (5,000 requests per hour) and 
            protects the token from being exposed in the browser.
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
