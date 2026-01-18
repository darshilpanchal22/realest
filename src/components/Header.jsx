import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center text-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/pexels-pripicart-463734.jpg')" }}
      id="Header"
    >
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold leading-tight pt-24 md:pt-32">
          Explore Homes That Fit Your Dreams
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 sm:mt-16">
          <a
            href="#Projects"
            className="bg-white text-black px-8 py-3 rounded hover:bg-gray-100 transition"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-black text-white px-8 py-3 rounded hover:bg-gray-900 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
