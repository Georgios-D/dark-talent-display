
import React from 'react';

interface TechItem {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const TechStack = () => {
  const techCategories: TechItem[] = [
    {
      title: "Front-end",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 7h10v2H7z" />
          <path d="M7 11h10v2H7z" />
          <path d="M7 15h10v2H7z" />
        </svg>
      ),
      items: ["React / Next.js", "TypeScript / JavaScript", "TailwindCSS / SCSS", "Knockout.js"]
    },
    {
      title: "Back-end",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
          <path d="M2 22h20" />
          <path d="M21 13h-4a2 2 0 0 0-2 2v7" />
          <path d="M5 13h4a2 2 0 0 1 2 2v7" />
          <path d="M19 2H5a2 2 0 0 0-2 2v6h18V4a2 2 0 0 0-2-2Z" />
        </svg>
      ),
      items: ["Node.js", "PHP", "XML", "Apache / Nginx"]
    },
    {
      title: "Database",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" />
          <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" />
        </svg>
      ),
      items: ["MySQL / MariaDB", "Supabase", "Elasticsearch / OpenSearch", "SQL"]
    },
    {
      title: "E-commerce",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
          <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <path d="M12 6v12" />
          <path d="M6 12h12" />
        </svg>
      ),
      items: ["Magento / Adobe Commerce", "Shopify", "Adobe Live Search", "Liquid"]
    },
    {
      title: "DevOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <path d="m9 9 6 6" />
          <path d="m15 9-6 6" />
        </svg>
      ),
      items: ["Git / GitHub Actions", "Docker / Kubernetes", "AWS / Google Cloud", "CI/CD Pipelines"]
    },
    {
      title: "AI & Integration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
          <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
          <path d="M7 7h.01" />
        </svg>
      ),
      items: ["Adobe Live Search", "API Integration", "Lovable AI", "ChatGPT / Grok / Windsurf"]
    }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center">My <span className="gradient-text">Tech Stack</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techCategories.map((category, index) => (
          <div key={index} className="glass-card p-6 hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-portfolio-accent/20 p-2 rounded-md mr-3">
                {category.icon}
              </span>
              {category.title}
            </h4>
            <div className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <p key={itemIndex} className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
