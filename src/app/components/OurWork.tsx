import React from "react";

const OurWork: React.FC = () => {
  return (
    <div className="home-container pt-60 w-full">
      {/* Heading */}
      <div className="flex flex-col items-center service-box" id="projects">
        <h1 className="text-center text-4xl font-bold">
          Our <span className="text-gradient font-normal">work</span>
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 md:mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-box group ${
              project.visibleOnLgOnly ? "hidden lg:flex" : ""
            }`}
          >
            <div>
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Data for project images
const projects = [
  { image: "images/projects/project1.png", visibleOnLgOnly: false },
  { image: "images/projects/project2.png", visibleOnLgOnly: false },
  { image: "images/projects/project3.png", visibleOnLgOnly: false },
  { image: "images/projects/project4.png", visibleOnLgOnly: true },
  { image: "images/projects/project5.png", visibleOnLgOnly: true },
  { image: "images/projects/project6.png", visibleOnLgOnly: true },
];

export default OurWork;
