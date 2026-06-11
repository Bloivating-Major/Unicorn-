import React from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "../../lib/constants/pricingPlans";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../lib/animations";
import PricingCard from "../molecules/PricingCard";

const PricingPlans = () => {
  return (
    <section className="bg-surface-alt section-wrapper">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="eyebrow-text block mb-3">Pricing</span>
        <h2 className="heading-text mb-4">
          Simple,{" "}
          <em className="italic text-royal">transparent pricing</em>
        </h2>
        <p className="body-text max-w-md mx-auto">
          No hidden fees. Membership fee ₹1,200/year + Kit fee ₹1,500 (one-time) applies to all programs.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
          />
        ))}
      </motion.div>

      {/* Community join note */}
      <motion.div
        className="mt-12 text-center p-6 bg-royal-50 border border-royal/15 rounded-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <p className="text-ink font-medium mb-2">🎉 Join our WhatsApp Community</p>
        <a
          href="https://chat.whatsapp.com/Eq3e80MewtWER9ecUJ4Hj9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-royal font-semibold underline underline-offset-2 hover:text-royal-dark transition-colors"
        >
          Join WhatsApp Community →
        </a>
        <p className="text-ink-muted text-sm mt-1">Get updates, tips &amp; stay connected with the Unicorn Chess family.</p>
      </motion.div>
    </section>
  );
};

export default PricingPlans;