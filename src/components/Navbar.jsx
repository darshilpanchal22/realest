import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-black text-2xl sm:text-3xl font-bold">
          Real-Estate
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-black font-medium">
          {["Home", "About", "Projects", "Testimonials", "Contact Us"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="hover:text-gray-800 transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition">
          Sign up
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
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
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 px-6 pb-6 pt-3 space-y-4 text-black text-center">
          {["Home", "About", "Projects", "Testimonials"].map((item, i) => (
            <a
              key={i}
              onClick={handleToggle}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-gray-800 transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition">
            Sign up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
