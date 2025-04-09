
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Key } from 'lucide-react';

interface GithubTokenInputProps {
  onTokenSaved: (token: string) => void;
}

const GithubTokenInput = ({ onTokenSaved }: GithubTokenInputProps) => {
  const [token, setToken] = useState('');
  const [savedToken, setSavedToken] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  // Check for existing token on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('github_token');
    if (storedToken) {
      setSavedToken(storedToken);
      onTokenSaved(storedToken);
    }
  }, [onTokenSaved]);

  const handleSaveToken = () => {
    if (!token.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid GitHub token",
        variant: "destructive",
      });
      return;
    }

    // Save token to localStorage
    localStorage.setItem('github_token', token);
    setSavedToken(token);
    onTokenSaved(token);
    
    toast({
      title: "Success",
      description: "GitHub token saved successfully",
    });
    
    setToken('');
    setOpen(false);
  };

  const handleRemoveToken = () => {
    localStorage.removeItem('github_token');
    setSavedToken(null);
    
    toast({
      title: "Token Removed",
      description: "GitHub token has been removed",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 mt-4"
        >
          <Key size={16} />
          {savedToken ? "Change GitHub Token" : "Connect GitHub"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{savedToken ? "Update GitHub Token" : "Connect to GitHub"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="github-token">GitHub Personal Access Token</Label>
            <Input
              id="github-token"
              type="password"
              placeholder="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"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              This token will be stored locally in your browser and will only be used to fetch your GitHub repositories.
            </p>
          </div>
          <div className="flex justify-between">
            <Button 
              variant="default" 
              onClick={handleSaveToken}
            >
              Save Token
            </Button>
            {savedToken && (
              <Button 
                variant="destructive" 
                onClick={handleRemoveToken}
              >
                Remove Token
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GithubTokenInput;
