// components/TechnologiesSection.tsx
const TechnologiesSection = () => {
    const technologies = [
      { src: "/images/skills/django-logo.svg", alt: "Django" },
      { src: "/images/skills/nodejs.svg", alt: "Node.js" },
      { src: "/images/skills/react.svg", alt: "React" },
      { src: "/images/skills/git.svg", alt: "Git" },
      { src: "/images/skills/mysql.png", alt: "MySQL" },
      { src: "/images/skills/postgres.png", alt: "Postgres" },
      { src: "/images/skills/tailwindcss.svg", alt: "Tailwind CSS" },
      { src: "/images/skills/scikit.svg", alt: "Scikit" },
      { src: "/images/skills/angular.png", alt: "Angular" },
      { src: "/images/skills/docker.svg", alt: "Docker", hidden: true },
    ];
  
    return (
      <section className="home-container relative flex flex-col sm:flex-row-reverse gap-8 w-full items-start">
        {/* Left Section */}
        <div className="flex flex-col items-center sm:block sm:w-[40%]">
          <h1 className="text-3xl sm:text-4xl">
            <span className="gradient-text">Technologies</span> We Use
          </h1>
          <p className="text-gray-400 mt-4 text-center sm:text-start">
            Discover the advanced technologies that drive our solutions, ensuring performance, reliability, and innovation.
          </p>
          <a href="#projects" className="group btn-primary btn-23 inline-block mt-16">
            <span className="text">Projects</span>
            <span>
              <i className="fa-solid fa-chevron-right group-hover:translate-x-2 duration-200 text-xs text-gray-400 ml-2"></i>
            </span>
          </a>
        </div>
  
        {/* Right Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          {technologies.map(({ src, alt, hidden }) => (
            <div className={`tech-card ${hidden ? "sm:hidden" : ""}`} key={alt}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesSection;
  