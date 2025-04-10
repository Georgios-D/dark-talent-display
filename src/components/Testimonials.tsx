
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "I had the privilege of being a mentor to Georgios at Techover Academy, where I got to see him build and develop impressive systems. Georgios is a skilled web developer with the ability to quickly understand new technologies and implement them efficiently. I am convinced that Georgios will be an asset to any organization seeking a skilled web developer.",
      author: "Matt Bergström",
      position: "CTO, Techover",
      avatarUrl: "/lovable-uploads/3e7933d8-c630-4e00-adb8-e2d6aa026426.png"
    },
    {
      id: 2,
      content: "I am delighted to write this testimonial for Georgios, with whom I had the pleasure of working in a challenging environment where innovative solutions were required. During our collaboration, Georgios consistently demonstrated a unique combination of intelligence, creativity, and dedication, which greatly impressed me. I am sure Georgios will be a great contribution to any company he works for in the future.",
      author: "Nessim Bakir",
      position: "CTO, WastePick",
      avatarUrl: "/lovable-uploads/9938c47b-a569-4cdb-8db0-98591d9e79c0.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-portfolio-dark/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Client <span className="gradient-text">Testimonials</span></h2>
          <p className="text-portfolio-light max-w-2xl mx-auto">
            Here's what people I've worked with have to say about my skills and contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="glass-card overflow-hidden">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-portfolio-accent/20" />
                <div className="flex flex-col gap-6">
                  <p className="text-portfolio-light italic relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <Avatar className="h-12 w-12 border-2 border-portfolio-accent/30">
                      <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} />
                      <AvatarFallback className="bg-portfolio-accent/30">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-portfolio-light">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
