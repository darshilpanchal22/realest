import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bgImage from "../assets/pexels-pripicart-463734.jpg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const navItems = [
    { name: "Home", id: "header" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleNavClick = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="header"
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}    >
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 md:px-10 lg:px-20">
          <div
            onClick={() => handleNavClick("header")}
            className="text-black text-xl sm:text-2xl font-bold tracking-wide cursor-pointer"
          >
            RealEstate.
          </div>

          <ul className="hidden md:flex gap-6 text-black font-medium text-[17px]">
            {navItems.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-gray-700"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate("/signup")}
            className="hidden md:block bg-black text-white px-4 py-1.5 text-sm rounded-full hover:bg-gray-900"
          >
            Sign Up
          </button>

          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white px-6 py-4 text-center space-y-4">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(item.id)}
                className="block w-full hover:text-gray-700"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate("/signup");
                setMenuOpen(false);
              }}
              className="w-full bg-black text-white px-4 py-2 rounded-full"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-20 max-w-4xl">
        <h1 className="text-white font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Explore Homes That <br className="hidden sm:block" />
          Fit Your Dreams
        </h1>

        <p className="text-gray-200 mt-6 text-sm sm:text-base md:text-lg">
          Discover premium properties tailored to your lifestyle.
          Modern design, prime locations, and unmatched comfort.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={() => handleNavClick("projects")}
            className="bg-white border border-black text-black px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-black hover:text-white transition duration-300"
          >
            View Projects
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className="bg-black text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition duration-300 border border-white"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;