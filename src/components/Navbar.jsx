import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (menuOpen) {document.body.style.overflow = 'hidden';
  } else{
    document.body.style.overflow = 'auto';
  }
return ()=>{
    document.body.style.overflow = 'auto';
  };
},[menuOpen]);
  

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <div className="text-black text-3xl font-bold">Real-Estate</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 text-black font-medium">
          <li>
            <a href="#home" className="hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-gray-800">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-800">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-gray-800">
              Testimonials
            </a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
          Sign up
        </button>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden" onClick={handleToggle}>
          {menuOpen ? (
            // Close icon
            <svg
              className="h-7 w-7 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-7 w-7 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 px-6 pb-6 pt-2 space-y-4 text-black">
          <a  onClick={handleToggle} href="#home" className="block hover:text-gray-800">
            Home
          </a>
          <a  onClick={handleToggle} href="#About" className="block hover:text-gray-800">
            About
          </a>
          <a  onClick={handleToggle} href="#projects" className="block hover:text-gray-800">
            Projects
          </a>
          <a  onClick={handleToggle} href="#testimonials" className="block hover:text-gray-800">
            Testimonials
          </a>
          <button className="w-full bg-black text-white px-4 py-2 rounded-full mt-2 hover:bg-gray-900 transition">
            Sign up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
