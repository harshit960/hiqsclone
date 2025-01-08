// components/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-center gap-16 h-[600px] relative overflow-hidden"
    >
    
      {/* Background Blobs */}
      <div className="absolute w-[20%] aspect-square bg-purple-400/40 top-0 left-0 translate-x-[-20%] translate-y-[-20%] blur-3xl rounded-full -z-10"></div>
      <div className="absolute w-[20%] aspect-square bg-cyan-400/40 bottom-0 right-0 translate-y-[20%] blur-3xl rounded-full -z-10"></div>

      {/* Content */}
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-6xl font-bold gradient-text !font-poppins">
          Solutions. Designs. Innovation.
        </h1>
        <p className="text-gray-400 text-lg max-w-[50ch]">
          Transforming Visions into Reality with Cutting-Edge Web Design and Software Development Solutions
        </p>
        <div className="relative flex gap-8">
          <Link
            href="#"
            className="px-6 py-2 border border-blue-400 rounded hover:bg-blue-400 hover:text-white"
          >
            Book A Call
          </Link>
          <img
            src="/images/arrow.png"
            alt="Decorative arrow"
            className="absolute top-8 right-0 translate-x-32 sm:translate-x-40 translate-y-8 rotate-12 h-8"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
