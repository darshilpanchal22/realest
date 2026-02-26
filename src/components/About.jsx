import React from "react";
import image from "../assets/premium_photo-1689609950112-d66095626efb.avif";

const About = () => {

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Our Brand
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          With over 10+ years of experience in the real estate industry,
          we connect families with their dream homes through trust,
          transparency, and premium service.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <img
          src={image}
          alt="About real estate"
          className="w-full md:w-1/2 h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-lg"
        />

        <div className="md:w-1/2 text-gray-700 space-y-6 text-sm sm:text-base">
          <p>
            We specialize in providing verified and high-quality properties
            tailored to your lifestyle and aspirations. Every property we
            showcase meets the highest standards of comfort and elegance.
          </p>

          <p>
            Our team ensures a smooth buying and selling experience with
            complete legal assistance and transparent pricing.
          </p>

          <button
            onClick={() => handleNavClick("projects")}
            className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Explore Properties
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-gray-500 text-sm">Properties Sold</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">1200+</h3>
          <p className="text-gray-500 text-sm">Happy Clients</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">25+</h3>
          <p className="text-gray-500 text-sm">Cities Covered</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">4.9⭐</h3>
          <p className="text-gray-500 text-sm">Client Rating</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6">
          Why Choose Us?
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-left text-gray-700 text-sm sm:text-base">
          <div>✔ Verified & Trusted Properties</div>
          <div>✔ Transparent Pricing</div>
          <div>✔ Legal Documentation Support</div>
          <div>✔ 24/7 Customer Assistance</div>
        </div>
      </div>
    </section>
  );
};

export default About;