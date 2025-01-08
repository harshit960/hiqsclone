// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 max-w-[1600px] mx-auto flex justify-between items-center px-8 py-4 sm:py-8 w-full backdrop-blur-xl">
      <Link href="#home">
        <img src="/images/Union.svg" alt="Logo" className="max-w-[50%]" />
      </Link>
      <ul className="hidden lg:flex gap-6">
        {['About us', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
          <li key={item} className="text-gray-800 hover:text-blue-400">
            <Link href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <a
        href="https://calendly.com/hiqualsoftwaresolutions/30min"
        className="hidden lg:flex text-base border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white"
      >
        Book A Call
      </a>
      <button className="lg:hidden flex flex-col space-y-1">
        <span className="w-6 h-1 bg-gray-800"></span>
        <span className="w-6 h-1 bg-gray-800"></span>
        <span className="w-6 h-1 bg-gray-800"></span>
      </button>
    </nav>
  );
};

export default Navbar;
