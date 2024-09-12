import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex justify-between items-center py-8 px-8 transition-all duration-300 ${
        isScrolled ? 'bg-gray-100 shadow-md text-gray-950' : 'bg-transparent z-50'
      }`}
    >
      <div className="flex items-center">
        <a href="#" className="text-lg font-bold text-white">
          Logo
        </a>
      </div>
      <ul className="flex items-center">
        <li className="mr-6">
          <a href="#" className="text-white hover:text-sky-400">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-sky-400">
            About
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-sky-400">
            Services
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-sky-400">
            Casestudies
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-sky-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
