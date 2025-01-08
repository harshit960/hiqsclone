import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="home-container w-full">
      <footer className="bg-brand-dark">
        {/* Main content */}
        <div className="flex flex-col sm:flex-row w-full p-4 sm:p-8 justify-between mt-8 h-full">
          {/* Logo */}
          <a href="/" className="flex items-center self-center max-w-[20%]">
            <img src="./images/Union.svg" alt="Logo" />
          </a>

          {/* Pages Section */}
          <ul className="flex flex-col gap-2 font-light">
            <h2 className="font-medium">Pages</h2>
            <li className="menu__item">
              <a className="menu__link" href="#home">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#about-me">
                About
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#services">
                Services
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#projects">
                Project
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#testimonials">
                Testimonial
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Contact Section */}
          <div className="flex flex-col gap-4 font-light pt-8 sm:p-0">
            <h2 className="font-medium">Contact</h2>
            <div>
              <i className="fa-solid fa-phone w-6 text-center"></i> +91 9867975473
            </div>
            <div>
              <i className="fa-solid fa-envelope w-6 text-center"></i> contact@hiqualsolutions.com
            </div>
            <div>
              <i className="fa-solid fa-location-dot w-6 text-center"></i> Mumbai, Maharashtra, India
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 h-full mt-auto pt-8 sm:p-0">
            <a
              href="https://www.instagram.com/"
              className="text-2xl hover:bg-gray-800 border border-gray-700 aspect-square w-14 rounded-full flex justify-center items-center"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="/"
              className="text-2xl hover:bg-gray-800 border border-gray-700 aspect-square w-14 rounded-full flex justify-center items-center"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="flex flex-col items-center">
          <p className="text-center text-gray-400">
            ©2024 Hiqual Solutions | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
