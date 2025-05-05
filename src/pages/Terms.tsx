import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="bg-white text-gray-800">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            >
              Terms & Conditions
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Please review our terms and conditions before proceeding with a
              booking.
            </motion.p>
          </div>

          <div className="space-y-6 text-base leading-7 text-gray-700">
            <p>
              • Prices are non-negotiable. We maintain pricing to preserve the
              quality of our work.
            </p>
            <p>
              • A non-refundable advance of ₹6,000 is required to confirm your
              session booking.
            </p>
            <p>• The remaining payment is due on the day of the shoot.</p>
            <p>
              • The booking amount is transferable if rescheduled with at least
              7 days' notice.
            </p>
            <p>• The advance is non-refundable in case of cancellation.</p>
            <p>
              • Clients are responsible for any location or venue charges. We
              only shoot where photography is permitted.
            </p>
            <p>
              • Preview images for selection will be shared in low-resolution
              JPEG format with watermarks. RAW files are not provided under any
              condition.
            </p>
            <p>
              • Post-processing begins only after full payment has been
              received.
            </p>
            <p>
              • Delivery time is a minimum of 3 weeks after selection. A
              priority edit add-on is available for ₹3,000.
            </p>
            <p>• Pricing is subject to change without prior notice.</p>
            <p>
              • The client bears the cost for any additional decoration, props,
              balloons, cakes, or fresh flowers required for the shoot.
            </p>
            <p>
              • The photographer reserves the right to cancel and refund if the
              session cannot proceed due to unforeseen circumstances.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Privacy Agreement (NDA)
            </h2>
            <p>
              We rely on showcasing our work online to reach new clients and
              display our creative approach. If you prefer not to have your
              photos shared, you may choose from the following:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>30-Day Hold:</strong> We will refrain from sharing your
                images for 30 days after the session. After that period, your
                consent will be assumed. This is a free option.
              </li>
              <li>
                <strong>Full Privacy:</strong> To ensure complete privacy, you
                can opt out of public sharing entirely by paying an additional
                30% of your package price. This helps offset the marketing
                impact of not showcasing your images.
              </li>
            </ul>
            <p>
              A model consent form will be provided to document your preference,
              and we will fully respect your selection.
            </p>
            <p>
              If you have any questions or concerns, please don't hesitate to
              reach out. We're here to help!
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Terms;
