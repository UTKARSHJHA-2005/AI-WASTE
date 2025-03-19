"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is organic fertilizer made from food waste?",
    answer:
      "Our organic fertilizer is produced by converting food waste into nutrient-rich compost through a natural, eco-friendly process. It enhances soil health and promotes sustainable farming.",
  },
  {
    question: "How is it different from chemical fertilizers?",
    answer: "Chemical fertilizers are synthetically produced, whereas organic fertilizers are derived from natural sources, making them environmentally friendly.",
  },
  {
    question: "What are the benefits of using this fertilizer?",
    answer: "It improves soil structure, retains moisture, and provides essential nutrients without harming the environment.",
  },
  {
    question: "Is it safe for all types of plants?",
    answer: "Yes, organic fertilizer is safe for all types of plants, including vegetables, flowers, and trees.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16  px-6 md:px-16 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl items-center w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-8">
          Turning food waste into clean energy and organic fertilizers, we create a sustainable
          future while reducing landfill pollution and carbon emissions.
        </p>
      </div>
      <div className="max-w-3xl  w-full">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`border rounded-lg mb-2 overflow-hidden ${
              openIndex === index ? "border-green-500" : "border-gray-300"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-4 bg-white text-left focus:outline-none"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <motion.div
                className="p-4 bg-green-50 text-gray-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
