import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      {/* 🔹 Section Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          What Our <span className="text-blue-600 underline underline-offset-4">Clients Say</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Real stories from people who turned their dreams into homes.
        </p>
      </div>

      {/* 💬 Testimonials Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="relative max-w-sm w-full bg-white/80 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-8 text-center"
          >
            {/* 🖼️ Profile Picture */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 👤 Name & Title */}
            <h2 className="mt-5 text-xl font-semibold text-gray-800">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 text-sm">{testimonial.title}</p>

            {/* ⭐ Rating */}
            <div className="flex justify-center gap-1 mt-3 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <img
                  key={i}
                  src={assets.star_icon}
                  alt="star"
                  className="w-5 h-5"
                />
              ))}
            </div>

            {/* 💬 Review */}
            <p className="text-gray-600 text-sm leading-relaxed">
              “{testimonial.text}”
            </p>

            {/* ✨ Subtle decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
