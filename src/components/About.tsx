
import Introduction from './about/Introduction';
import CodeSnippets from './about/CodeSnippets';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-portfolio-light max-w-2xl mx-auto">
            I'm a full-stack developer with expertise in modern web technologies.
            I specialize in building responsive, performant applications with clean, maintainable code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Introduction />
          </div>
          
          <div>
            <CodeSnippets />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">My <span className="gradient-text">Tech Stack</span></h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Front-end Card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-accent/20 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10v2H7z" />
                    <path d="M7 11h10v2H7z" />
                    <path d="M7 15h10v2H7z" />
                  </svg>
                </span>
                Front-end
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  React / Next.js
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  TypeScript / JavaScript
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  TailwindCSS / SCSS
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Knockout.js
                </p>
              </div>
            </div>

            {/* Back-end Card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-accent/20 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
                    <path d="M2 22h20" />
                    <path d="M21 13h-4a2 2 0 0 0-2 2v7" />
                    <path d="M5 13h4a2 2 0 0 1 2 2v7" />
                    <path d="M19 2H5a2 2 0 0 0-2 2v6h18V4a2 2 0 0 0-2-2Z" />
                  </svg>
                </span>
                Back-end
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Node.js
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  PHP
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  XML
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Apache / Nginx
                </p>
              </div>
            </div>

            {/* Database Card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-accent/20 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" />
                    <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" />
                  </svg>
                </span>
                Database
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  MySQL / MariaDB
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Supabase
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Elasticsearch / OpenSearch
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  SQL
                </p>
              </div>
            </div>

            {/* E-commerce Card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-accent/20 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
                    <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                    <path d="M12 6v12" />
                    <path d="M6 12h12" />
                  </svg>
                </span>
                E-commerce
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Magento / Adobe Commerce
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Shopify
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Adobe Live Search
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Liquid
                </p>
              </div>
            </div>

            {/* DevOps Card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-accent/20 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
                    <rect width="16" height="16" x="4" y="4" rx="2" />
                    <path d="m9 9 6 6" />
                    <path d="m15 9-6 6" />
                  </svg>
                </span>
                DevOps
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Git / GitHub Actions
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Docker / Kubernetes
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  AWS / Google Cloud
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  CI/CD Pipelines
                </p>
              </div>
            </div>
            
            {/* AI & Integration Card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-accent/20 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-accent">
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                  </svg>
                </span>
                AI & Integration
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Adobe Live Search
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  API Integration
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  Lovable AI
                </p>
                <p className="text-sm text-portfolio-light flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  ChatGPT / Grok / Windsurf
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
