// components/ServicesSection.tsx
const ServicesSection = () => {
    const services = [
      {
        title: "Web Design & Development",
        description: "Best if you need beautiful design & rapid development on a regular basis.",
        imgSrc: "/images/Web Development.png",
      },
      {
        title: "CRM and Application Development",
        description:
          "At HiQual Solutions, we specialize in developing custom CRM solutions and applications that streamline your business processes and enhance customer interactions.",
        imgSrc: "/images/Web Development.png",
      },
      {
        title: "Custom Chatbots",
        description:
          "Transform your business with our Custom Chatbots. Tailored to your needs, our AI-powered solutions streamline operations, enhance customer interactions, and integrate seamlessly.",
        imgSrc: "/images/Website Management.png",
      },
      {
        title: "Website Management",
        description:
          "We specialize in creating bespoke applications that elevate user experiences and meet your business objectives seamlessly.",
        imgSrc: "/images/Website Management.png",
      },
    ];
  
    return (
      <section id="services" className="relative home-container pt-60 w-full overflow-x-hidden">
        <div className="absolute w-full max-w-[1600px] hidden lg:flex items-center justify-center select-none top-[50%] translate-y-[-50%] left-0 -z-20">
          <div className="w-[45rem] h-[45rem] flex-shrink-0 rounded-full bg-purple-400 bg-opacity-70 filter blur-[250px]"></div>
        </div>
        <div className="flex-col service-box text-center">
          <h1 className="heading">
            What we <span className="gradient-text">offer</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-12">
          {services.map(({ title, description, imgSrc }) => (
            <div className="services-container" key={title}>
              <img src={imgSrc} alt={title} />
              <div>
                <h1 className="text-4xl">{title}</h1>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  