
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { AtSign, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-portfolio-light max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out! I'm always open to new challenges and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-light mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="bg-portfolio-dark/30 border-portfolio-accent/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-light mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="bg-portfolio-dark/30 border-portfolio-accent/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-light mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    required
                    rows={5}
                    className="bg-portfolio-dark/30 border-portfolio-accent/30 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-accent hover:bg-portfolio-highlight"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <Card className="glass-card mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-portfolio-light">
                    <AtSign className="h-5 w-5 mr-3 text-portfolio-accent" />
                    <a href="mailto:georgios97@gmail.com" className="hover:text-portfolio-accent transition-colors">
                      georgios97@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center text-portfolio-light">
                    <MapPin className="h-5 w-5 mr-3 text-portfolio-accent" />
                    <span>Stockholm, Sverige</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-portfolio-dark/50 hover:bg-portfolio-accent/20 p-3 rounded-full transition-colors"
                  >
                    <Github className="h-6 w-6 text-portfolio-light" />
                  </a>
                  
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-portfolio-dark/50 hover:bg-portfolio-accent/20 p-3 rounded-full transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-portfolio-light" />
                  </a>
                </div>
                
                <div className="mt-6">
                  <p className="text-portfolio-light">
                    Feel free to reach out through social media as well. I'm always open to connecting with fellow developers and potential clients.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
