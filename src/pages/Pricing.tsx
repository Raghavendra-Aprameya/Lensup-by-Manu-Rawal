import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const packages = [
    {
      name: "Starters",
      price: "12000",
      description:
        "A compact package designed to deliver high-quality results with essential features and quick turnaround.",
      features: [
        "1.5-hour photo session",
        "2 Classic Backdrop set ups",
        "10 High-Resolution retouched images",
        "21x30 Photo Frame",
      ],
    },
    {
      name: "Signature",
      price: "16000",
      description:
        "A comprehensive photography package offering a mix of creative setups and premium deliverables for standout results.",
      features: [
        "2-hour photo session",
        "3 set ups",
        "15 High-Resolution retouched images",
        "21x30 Photo Frame",
      ],
    },
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
              Our Packages
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Choose the perfect package for your photography needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-purple-600 mb-4">
                      ₹{pkg.price}
                    </div>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full mt-auto text-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Need a custom package?{" "}
              <Link
                to="/contact"
                className="text-purple-600 font-semibold hover:text-purple-700"
              >
                Contact us
              </Link>{" "}
              for personalized options.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Pricing;
