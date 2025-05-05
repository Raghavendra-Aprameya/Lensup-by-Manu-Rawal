import React from "react";
import { motion } from "framer-motion";
import { Camera, Heart, Users, Baby } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Welcome to Lensup
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Capturing Life's Beautiful Moments
          </motion.p>
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Book a Session
          </motion.a>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in capturing your precious moments with creativity
              and passion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Camera className="h-12 w-12 text-purple-600" />}
              title="Maternity Photography"
              description="Beautiful and intimate maternity photo sessions to capture your journey into motherhood"
            />
            <ServiceCard
              icon={<Heart className="h-12 w-12 text-purple-600" />}
              title="Family Portraits"
              description="Capture the love and connection of your family in stunning photographs"
            />
            <ServiceCard
              icon={<Users className="h-12 w-12 text-purple-600" />}
              title="Professional Headshots"
              description="Professional headshots that make you stand out in your career"
            />
            <ServiceCard
              icon={<Baby className="h-12 w-12 text-purple-600" />} // baby icon, soft pink color
              title="Baby Portraits"
              description="Capture the adorable moments of your little one with our professional baby photography sessions."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Capture Your Moments?
          </h2>
          <p className="text-xl mb-8">
            Let's create beautiful memories together
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({
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

export default Home;
