import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const navItems = [
    { name: "Home", link: "#header" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-black text-xl sm:text-2xl font-bold tracking-wide cursor-pointer">
          RealEstate.
        </div>

        <ul className="hidden md:flex gap-6 text-black font-medium text-[15px]">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-gray-700 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-black text-white px-4 py-1.5 text-sm rounded-full hover:bg-gray-900 transition duration-300">
          Sign Up
        </button>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden bg-white/95 px-6   space-y-4 text-black text-center transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-700 transition duration-300"
          >
            {item.name}
          </a>
        ))}
        <button className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;