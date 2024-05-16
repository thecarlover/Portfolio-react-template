import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Astronaut Image with Bounce Animation */}
        <div className="flex items-center">
          {/* <a href="/">
            <img src="https://your-astronaut-image-url.com" alt="astronaut" className="w-12 h-12 mr-2 animate-bounce" />
          </a> */}
          <div className="text-white font-bold">Ojasvi Mittal</div>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </button>
        </div>
        {/* Navigation Links */}
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
