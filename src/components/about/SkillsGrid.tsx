
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
  colSpan: string;
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
      ],
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      category: 'Backend',
      icon: <Server className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'PHP', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'Composer', level: 85 },
      ],
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      category: 'Database',
      icon: <Database className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'MySQL', level: 85 },
      ],
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      category: 'E-commerce',
      icon: <ShoppingBag className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'Magento/Adobe Commerce', level: 85 },
        { name: 'E-commerce APIs', level: 80 },
        { name: 'Payment Gateways', level: 75 },
        { name: 'Adobe Live Search', level: 80 },
      ],
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
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
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      category: 'AI Experience',
      icon: <BrainCircuit className="h-5 w-5 text-portfolio-highlight" />,
      items: [
        { name: 'Adobe Live Search', level: 85 },
        { name: 'Lovable', level: 75 },
        { name: 'Windsurf', level: 65 },
      ],
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skillCategory) => {
        const isSmallCard = 
          skillCategory.category === 'Database' || 
          skillCategory.category === 'Backend';
        
        return (
          <Card 
            key={skillCategory.category} 
            className={`glass-card ${isSmallCard ? 'col-span-1' : skillCategory.colSpan}`}
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
        );
      })}
    </div>
  );
};

export default SkillsGrid;
