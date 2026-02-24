import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 w-full overflow-hidden text-center"
      id="About"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        About{""}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>

      <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mb-10">
        Passionate About Properties, Dedicated to Your Vision.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <img
          src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          alt="About section"
          className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
        />
        <div className="text-gray-700 text-sm sm:text-base md:text-left">
          <p>
            We are committed to providing exceptional real estate solutions that
            align with your lifestyle and aspirations. Our team ensures every
            property we showcase meets the highest standards of comfort and
            elegance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
