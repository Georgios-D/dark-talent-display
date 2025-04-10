
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
      </div>
    </section>
  );
};

export default About;
