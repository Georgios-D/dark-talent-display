
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Layout, ShoppingBag, Tool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-end',
      icon: <Layout className="h-5 w-5 text-portfolio-highlight" />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'jQuery']
    },
    {
      title: 'Back-end',
      icon: <Database className="h-5 w-5 text-portfolio-highlight" />,
      skills: ['Node.js', 'PHP', 'SQL']
    },
    {
      title: 'E-commerce',
      icon: <ShoppingBag className="h-5 w-5 text-portfolio-highlight" />,
      skills: ['Magento/Adobe Commerce']
    },
    {
      title: 'Tools',
      icon: <Tool className="h-5 w-5 text-portfolio-highlight" />,
      skills: ['Git', 'GitHub', 'Require.js']
    },
    {
      title: 'AI & Integration',
      icon: <Code className="h-5 w-5 text-portfolio-highlight" />,
      skills: ['GPT Integration', 'AI App Development', 'API Integration']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-dark/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
          <p className="text-portfolio-light max-w-2xl mx-auto">
            I specialize in developing web applications with a focus on clean code, 
            performance, and user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold ml-2">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-portfolio-accent mr-2"></div>
                      <span className="text-portfolio-light">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
