import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../lib/constants/faqs";
import {
  fadeUp,
  staggerContainer,
  fadeUpItem,
  viewportOnce,
} from "../../lib/animations";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white section-wrapper">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="eyebrow-text block mb-3">FAQs</span>
          <h2 className="heading-text mb-3">Got Questions? We've Got Answers.</h2>
          <p className="body-text text-sm">Everything you need to know about joining Unicorn Chess Academy.</p>
        </motion.div>

        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className={`rounded-xl border transition-all duration-300 overflow-hidden
                ${openIndex === i
                  ? "border-royal/25 bg-royal-50 shadow-card"
                  : "border-border-light bg-white hover:border-royal/15"
                }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-playfair text-base sm:text-lg font-semibold text-ink">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="w-7 h-7 flex-shrink-0 rounded-full bg-royal/10 border border-royal/20 flex items-center justify-center text-royal text-xl font-light"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="body-text text-sm leading-7 px-6 pb-5">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-ink-muted text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Still have questions?{" "}
          <a href="/contact" className="text-royal font-semibold hover:underline underline-offset-2 transition-colors">
            Feel free to reach out →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default FAQs;