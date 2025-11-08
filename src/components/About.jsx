import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 overflow-hidden"
    >
      {/* 🌈 Decorative blurred gradient background */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-400/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-400/30 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-6 md:px-16 lg:px-32 flex flex-col items-center"
      >
        {/* 🏷️ Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-center"
        >
          About{" "}
          <span className="text-blue-600 underline underline-offset-4 decoration-2">
            Our Brand
          </span>
        </motion.h1>

        <p className="text-gray-500 text-lg text-center max-w-2xl mb-12">
          Elevating lifestyles through visionary real estate and timeless design.
        </p>

        {/* 🏗️ Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* 📜 Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center md:items-start text-gray-700 max-w-lg"
          >
            {/* 📊 Stats */}
            <div className="grid grid-cols-2 gap-8 mb-10 text-center md:text-left">
              <div className="group">
                <p className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                  10+
                </p>
                <p>Years of Excellence</p>
              </div>
              <div className="group">
                <p className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                  12+
                </p>
                <p>Projects Completed</p>
              </div>
              <div className="group">
                <p className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                  20+
                </p>
                <p>Mn. Sq. Ft. Delivered</p>
              </div>
              <div className="group">
                <p className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                  25+
                </p>
                <p>Ongoing Projects</p>
              </div>
            </div>

            {/* 🏠 Description */}
            <p className="text-gray-600 mb-8 leading-relaxed text-center md:text-left">
              Our real estate brand stands for innovation, excellence, and
              sustainability. Every project we build is a blend of modern
              aesthetics, smart planning, and premium comfort — creating spaces
              that inspire living and deliver enduring value.
            </p>

            {/* 🎯 Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#Projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md font-medium transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* 🖼️ Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center w-full md:w-1/2"
          >
            <img
              src={assets.brand_img}
              alt="Our Brand"
              className="rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
