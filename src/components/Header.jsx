import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section
      id="header"
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/pexels-pripicart-463734.jpg')",
      }}
    >
      <Navbar />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-20 max-w-4xl">
        <h1 className="text-white font-semibold leading-tight 
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl">
          Explore Homes That <br className="hidden sm:block" />
          Fit Your Dreams
        </h1>

        <p className="text-gray-200 mt-6 text-sm sm:text-base md:text-lg">
          Discover premium properties tailored to your lifestyle.
          Modern design, prime locations, and unmatched comfort.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-10">
          <a
            href="#projects"
            className="bg-white border border-black text-black px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-black hover:text-white transition duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-black text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition duration-300 border border-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;