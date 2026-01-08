"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../faqData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0e0700] px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 pb-12">
        <h2 className="text-white text-4xl unbounded-font">
          Frequently Asked Questions
        </h2>
        <p className="text-[#ffffff91] max-w-xl text-sm">
          Find answers to common questions about our travel services.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            layout
            initial={{ borderRadius: 16 }}
            className="bg-[#1a120a] p-6 rounded-2xl border border-[#ffffff14] cursor-pointer shadow-sm"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold text-lg">{faq.question}</h3>
              
              {/* Rotate + icon */}
              <motion.span
                className="text-[#f5c16c] text-3xl"
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>

            {/* Smooth answer animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#ffffffb3] text-sm mt-2 overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
