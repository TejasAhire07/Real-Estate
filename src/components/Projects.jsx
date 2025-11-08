import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1); // 👈 mobile = 1, desktop = 3

  // 🔹 Detect screen width and set cardsToShow accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Next Button
  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev >= projectsData.length - cardsToShow ? 0 : prev + 1
    );
  };

  // 🔹 Previous Button
  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - cardsToShow : prev - 1
    );
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      {/* 🏷️ Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Our{" "}
          <span className="text-blue-600 underline underline-offset-4">
            Projects
          </span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Building experiences, leaving a mark — explore our finest developments.
        </p>
      </div>

      {/* 🔘 Navigation Buttons */}
      <div className="flex justify-end items-center mb-8 gap-3">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          aria-label="Previous Projects"
        >
          <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          aria-label="Next Projects"
        >
          <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
        </button>
      </div>

      {/* 🧱 Project Cards Slider */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex md:gap-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-full lg:w-1/3 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* 🖼️ Image */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* 📄 Info */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-500 mb-4 text-sm">
                  {project.price} <span className="mx-1">|</span>{" "}
                  {project.location}
                </p>
                <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
