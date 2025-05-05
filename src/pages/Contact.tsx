import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Type the event.target as HTMLFormElement to access its form elements
    const form = event.target as HTMLFormElement;

    // Create a new URLSearchParams object to send data
    const formData = new URLSearchParams({
      Name: (form.elements.namedItem("name") as HTMLInputElement).value,
      Email: (form.elements.namedItem("email") as HTMLInputElement).value,
      Service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      Message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    });

    const url =
      "https://script.google.com/macros/s/AKfycbxF5rrhAzwFIyLnasZAbm3SGlGgowDCz6gqcw5TLSugMjHD7MUL0CTv6SCq7ijAbXim2g/exec";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Optionally handle success feedback here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally handle error feedback here
      });
  };

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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Let's discuss your photography needs and create beautiful memories
              together
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="maternity">Maternity Photography</option>
                    <option value="family">Newborn Portraits</option>
                    <option value="professional">Cake Smash Photography</option>
                    <option value="baby">Portraits and Portfolios</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us about your photography needs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-purple-600 mr-4" />
                    <span className="text-gray-600">+91 78992 45765</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-purple-600 mr-4" />
                    <span className="text-gray-600">manu.lensup@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-purple-600 mr-4" />
                    <a
                      href="
https://maps.google.com/?q=-12.809100,-6.094000"
                      target="_blank"
                      className="text-gray-600"
                    >
                      164, CherryLane, above HappyEndings, beside SOBHA JASMINE,
                      Green Glen Layout, Bellandur
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600 mb-10">
                  <p>Open Daily: 9:30 AM – 7:30 PM</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Note</h3>
                <p className="text-gray-600">
                  Weekend and evening sessions are available by appointment.
                  Please contact us for special arrangements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
