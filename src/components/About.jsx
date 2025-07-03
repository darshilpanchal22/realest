import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Out Brand
        </span>
        <p className="text-gray-500 text-sm max-w-90 text-center mb-8">
          passionate About Properties, Dedicated to your Vision
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start md;gap-20">
           {/* <img src="./home2.jpg" alt="" /> */}
        </div>
      </h1>
    </div>
  );
};///
export default About;
