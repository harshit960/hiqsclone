// components/AboutUsSection.tsx
const AboutUsSection = () => {
    return (
      <section id="about-us" className="home-container pt-60">
        <div className="text-center">
          <h1 className="heading">
            Who <span className="gradient-text">we</span> are
          </h1>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row items-start gap-8 rounded-3xl p-8 md:p-16 bg-gradient-to-b md:bg-gradient-to-r from-purple-500 to-cyan-500">
          <img
            src="/images/3d-casual-life.png"
            alt="About Us Image"
            className="w-[80%] md:w-[50%] self-center"
          />
          <div className="md:text-2xl text-justify">
            <h1 className="font-semibold md:text-xl pt-2 leading-relaxed drop-shadow-2xl">
              ● About Us
            </h1>
            <p className="my-4">
              At HiQual Solutions, we provide top-quality software development, web design, and SaaS services to help businesses streamline their processes and drive growth. Our team is dedicated to delivering innovative, custom solutions that meet your unique needs, from responsive websites to powerful applications. We prioritize close collaboration with clients to ensure our technology aligns with their goals and sets them up for long-term success.
            </p>
            <a href="#services" className="group btn-primary text-white btn-23 inline-block mt-4">
              <span className="text">Services</span>
              <span>
                <i className="fa-solid fa-chevron-right group-hover:translate-x-2 duration-200 text-xs text-white ml-2"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;
  