
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Code2, Database, Layout, Server, Wrench, Globe, ShoppingBag, Search } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  items: SkillItem[];
}

const SkillsGrid = () => {
  const skills: SkillCategory[] = [
    {
      category: 'Frontend',
      icon: <Layout className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'jQuery', level: 85 },
        { name: 'Knockout.js', level: 75 },
        { name: 'Liquid', level: 80 },
      ],
    },
    {
      category: 'Backend',
      icon: <Server className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'PHP', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'Composer', level: 85 },
        { name: 'Apache/Nginx', level: 75 },
        { name: 'XML', level: 85 },
      ],
    },
    {
      category: 'E-commerce',
      icon: <ShoppingBag className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'Magento/Adobe Commerce', level: 85 },
        { name: 'Shopify', level: 80 },
        { name: 'E-commerce APIs', level: 80 },
        { name: 'Payment Gateways', level: 75 },
        { name: 'Adobe Live Search', level: 80 },
        { name: 'Elasticsearch/OpenSearch', level: 80 },
      ],
    },
    {
      category: 'Database',
      icon: <Database className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'MySQL', level: 85 },
        { name: 'MariaDB', level: 80 },
        { name: 'Supabase', level: 75 },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: <Wrench className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Require.js', level: 80 },
      ],
    },
    {
      category: 'AI Experience',
      icon: <BrainCircuit className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'Adobe Live Search', level: 85 },
        { name: 'Lovable', level: 75 },
        { name: 'Windsurf', level: 65 },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {skills.map((skillCategory) => (
        <Card 
          key={skillCategory.category} 
          className="glass-card"
        >
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              {skillCategory.icon}
              <h4 className="text-lg font-semibold ml-2">{skillCategory.category}</h4>
            </div>
            <div className="space-y-4">
              {skillCategory.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-portfolio-light">{skill.name}</span>
                    <span className="text-xs text-portfolio-light">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-portfolio-dark/50 rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-portfolio-accent to-portfolio-highlight h-1.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsGrid;
