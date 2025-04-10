
import React from 'react';

const Introduction = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">My <span className="gradient-text">Journey</span></h3>
      <p className="text-portfolio-light mb-4">
        With several years of experience in web development, I've worked on projects ranging from small business websites to complex enterprise applications. 
        I'm passionate about creating solutions that are not only technically sound but also provide excellent user experiences.
      </p>
      <p className="text-portfolio-light mb-4">
        My approach combines technical expertise with a deep understanding of user needs and business goals. 
        I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
      </p>
      
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tech-tag">React</span>
        <span className="tech-tag">TypeScript</span>
        <span className="tech-tag">JavaScript</span>
        <span className="tech-tag">PHP</span>
        <span className="tech-tag">SQL</span>
        <span className="tech-tag">Node.js</span>
        <span className="tech-tag">Knockout.js</span>
        <span className="tech-tag">Magento</span>
        <span className="tech-tag">Adobe Live Search</span>
        <span className="tech-tag">Composer</span>
      </div>
    </div>
  );
};

export default Introduction;
