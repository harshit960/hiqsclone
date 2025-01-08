// pages/index.tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechnologiesSection from './components/TechnologiesSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import OurWork from './components/OurWork';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TechnologiesSection />
      <AboutUsSection />
      <ServicesSection />
      <WhyChooseUs/>
      <OurWork/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </>
  );
};

export default Home;
