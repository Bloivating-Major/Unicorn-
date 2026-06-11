import React from "react";
import { motion } from "framer-motion";
import Button from "../atoms/Button";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
  fadeUpItem,
  viewportOnce,
} from "../../lib/animations";
import { openWhatsApp } from "../../lib/utils/whatsapp";

const CTASection = () => {
  return (
    <section className="section-wrapper">
      <motion.div
        className="relative bg-gradient-to-br from-royal-50 to-white border border-royal/15 rounded-3xl px-8 sm:px-12 lg:px-16 py-14 lg:py-20 overflow-hidden shadow-card-lg"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Queen watermark */}
        <motion.span
          className="absolute right-8 top-1/2 -translate-y-1/2 text-[200px] leading-none text-royal/5 font-serif pointer-events-none select-none hidden lg:block"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          ♛
        </motion.span>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="eyebrow-text block mb-3">Ready to begin?</span>
            <h2 className="heading-text mb-4">
              Unlock your{" "}
              <em className="italic text-royal">chess potential</em>{" "}
              today
            </h2>
            <p className="body-text max-w-lg mx-auto lg:mx-0">
              Join Unicorn Chess Academy and gain access to world-class coaching,
              exclusive tournaments, and a thriving community of champions. Your
              first trial class is completely free.
            </p>
          </motion.div>

          {/* Right — CTA buttons */}
          <motion.div
            className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUpItem}>
              <Button variant="primary" size="large" className="w-full sm:w-auto justify-center" 
              onClick={() =>
              openWhatsApp(
                "Hey! I want to join the academy at Unicorn Chess Academy."
              )
            }
              >
                Join the Academy
              </Button>
            </motion.div>
            <motion.div variants={fadeUpItem}>
              <Button variant="secondary" size="large" className="w-full sm:w-auto justify-center"
              onClick={() =>
                            openWhatsApp(
                              "Hey! I want to book a free demo class at Unicorn Chess Academy."
                            )
                          }
              >
                Book Free Trial Class
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;