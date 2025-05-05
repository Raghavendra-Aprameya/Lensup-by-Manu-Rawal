import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const images = [
    "/Assets/Maternity1.jpg",
    "/Assets/_HEC7297.jpg",
    "/Assets/Maternity2.jpeg",
    "/Assets/_HEC8195.jpg",
    "/Assets/Maternity3.jpeg",
    "/Assets/_HEC6077.jpg",
    "/Assets/_HEC6427.jpg",
    "/Assets/_HEC6618.jpg",
    "/Assets/_HEC7130.jpg",
    "/Assets/_HEC7195.jpg",
    "/Assets/_HEC7313.jpg",
    "/Assets/_HEC7453.jpg",
    "/Assets/_HEC7676.jpg",
    "/Assets/IMG_20240624_135833_634.jpg",
    "/Assets/WhatsApp Image 2025-04-26 at 11.33.56.jpeg",
  ];

  return (
    <div className="bg-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              A collection of our finest work
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
