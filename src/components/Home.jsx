import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('header_img.png.avif')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 md:px-12 lg:px-20"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Find the Perfect Home for Your Vision
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Discover beautiful, modern properties designed for your comfort and lifestyle.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-sm md:text-base"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
