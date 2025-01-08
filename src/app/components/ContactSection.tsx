import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="pt-60">
      <div className="contact bg-gray-200 text-gray-700 rounded-3xl px-6 md:px-8 lg:px-10 w-full py-16 md:py-20 lg:py-24 flex flex-col justify-center items-center gap-10">
        {/* Heading */}
        <h3 className="text-center text-gray-700 max-w-[1011px] text-3xl md:text-4xl lg:text-6xl font-medium leading-tight">
          Have an Idea??... Let's Turn It into Reality with Our Expert
          Development Team!!
        </h3>

        {/* Button */}
        <a
          href="https://calendly.com/hiqualsoftwaresolutions/30min"
          rel="noreferrer"
          target="_blank"
          className="group inline-flex items-center justify-center px-6 py-3 bg-black/70 hover:bg-black/80 text-white text-lg md:text-xl font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300"
        >
          Book a Call
          <span className="ml-2 text-gray-400 text-xs group-hover:translate-x-2 transition-transform duration-200">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
