import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="relative home-container pt-60">
      {/* Background Blur */}
      <div className="absolute w-full max-w-[1600px] hidden lg:flex items-center justify-center select-none top-[50%] -translate-y-1/2 left-0 -z-20">
        <div className="w-[35rem] h-[35rem] flex-shrink-0 rounded-full bg-cyan-400 bg-opacity-70 filter blur-[250px]"></div>
      </div>

      {/* Heading Section */}
      <div className="flex flex-col items-center service-box">
        <h1 className="text-center text-4xl font-bold">
          <span className="text-gradient">Why</span> choose us?
        </h1>
      </div>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-5">
        {services.map((service, index) => (
          <div key={index} className="box p-6 bg-white shadow-md rounded-lg text-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Data for service boxes
const services = [
  {
    image: "images/gifs/diamond-dark-mode--unscreen.gif",
    title: "Top-notch quality",
    description:
      "HiQual Solutions delivers excellence in every project, ensuring top-tier results through meticulous attention to detail and innovative solutions.",
  },
  {
    image: "images/gifs/clock-ldark-mode-unscreen.gif",
    title: "Lightning fast delivery",
    description:
      "We ensure your projects are completed swiftly without compromising quality. Expect prompt, efficient service every time.",
  },
  {
    image: "images/gifs/drop-dark-mode-unscreen.gif",
    title: "Fixed monthly rate",
    description:
      "High-quality services at a predictable, fixed monthly rate. Enjoy peace of mind with no hidden fees or surprises.",
  },
  {
    image: "images/gifs/file-dark-mode-unscreen.gif",
    title: "No obligation contract",
    description:
      "We offer flexible services with no obligation contracts. Enjoy the freedom to scale your projects without long-term commitments.",
  },
  {
    image: "images/gifs/saving-dark-mode--unscreen.gif",
    title: "30-Days refund policy",
    description:
      "Flexible services with no obligation contracts. Enjoy the freedom to scale your projects without long-term commitments.",
  },
  {
    image: "images/gifs/customer-dark-mode-unscreen.gif",
    title: "Excellent customer support",
    description:
      "At HiQual Solutions, we provide exceptional customer support, ensuring your needs are met promptly and professionally.",
  },
];

export default WhyChooseUs;
