import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import assets from '../../assets/assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the menu on small screens
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 transition-all duration-300 z-50 ${
        isScrolled ? 'bg-gray-100 shadow-md text-gray-950 ' : 'bg-transparent'
      }`}
    >
      {/* Logo */} 
      <div className="flex items-center">
        <a href="#" className="flex items-center">
          <img src={assets.logo2} alt="Logo" className="w-24 h-auto" /> {/* Adjust the size based on your logo */}
        </a>
      </div>

      {/* Hamburger icon for small screens */}
      <div className="md:hidden text-white cursor-pointer z-50" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Menu Items (Hidden on small screens) */}
      <ul className="hidden md:flex items-center">
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

      {/* Overlay menu for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-white text-2xl space-y-8 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <a href="#" onClick={toggleMenu} className="hover:text-sky-400">
          Home
        </a>
        <a href="#" onClick={toggleMenu} className="hover:text-sky-400">
          About
        </a>
        <a href="#" onClick={toggleMenu} className="hover:text-sky-400">
          Services
        </a>
        <a href="#" onClick={toggleMenu} className="hover:text-sky-400">
          Casestudies
        </a>
        <a href="#" onClick={toggleMenu} className="hover:text-sky-400">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
