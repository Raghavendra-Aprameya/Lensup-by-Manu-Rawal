import React from "react";
import { motion } from "framer-motion";
import { Camera, Star, Award } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              About Lensup Photography
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Capturing life's precious moments with creativity and passion
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded by Manu Rawal, Lensup Photography has been capturing
                beautiful moments for families and professionals since 2015. Our
                journey began with a simple belief: every moment deserves to be
                preserved in its most authentic and beautiful form.
              </p>
              <p className="text-gray-600">
                We specialize in maternity photography, family portraits, and
                professional headshots, bringing creativity and technical
                excellence to every shoot. Our commitment to quality and
                personal attention has made us a trusted name in professional
                photography.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[38rem]"
            >
              <img
                src="src/Assets/ManuRawal.jpg"
                alt="A picture of Manu Rawal"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring together artistic vision and technical expertise to
              create stunning photographs that tell your story
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="h-12 w-12 text-purple-600" />}
              title="Professional Equipment"
              description="State-of-the-art cameras and lighting equipment to ensure the highest quality photos"
            />
            <FeatureCard
              icon={<Star className="h-12 w-12 text-purple-600" />}
              title="Experience"
              description="Years of experience in capturing life's most precious moments"
            />
            <FeatureCard
              icon={<Award className="h-12 w-12 text-purple-600" />}
              title="Quality Guaranteed"
              description="100% satisfaction guaranteed with every photoshoot"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-lg shadow-lg text-center"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default About;
