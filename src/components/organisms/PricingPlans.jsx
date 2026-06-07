import React from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "../../lib/constants/pricingPlans";
import Button from "../atoms/Button";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../lib/animations";

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
        {pricingPlans.map((plan, index) => {
          const isFeatured = index === 1;

          return (
            <motion.div
              key={index}
              variants={{
                hidden:  { opacity: 0, y: 40, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: isFeatured ? -8 : 0,
                  scale: isFeatured ? 1.02 : 1,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: isFeatured ? -14 : -6, transition: { duration: 0.2 } }}
              className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-300
                ${isFeatured
                  ? "bg-gradient-to-b from-royal-50 to-white border-royal/30 shadow-brand-md"
                  : "bg-white border-border-light shadow-card hover:border-royal/20 hover:shadow-card-lg"
                }`}
            >
              {/* Most popular badge */}
              {isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-royal-light to-royal text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-brand-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p className="eyebrow-text mb-3">{plan.name}</p>

              {/* Price */}
              <div className="mb-1 flex items-end gap-1">
                <span className="font-playfair text-4xl font-bold text-ink leading-none">
                  {plan.price}
                </span>
                <span className="text-ink-muted text-sm mb-1">/month</span>
              </div>
              <p className="text-xs text-ink-muted mb-6">
                Duration: {plan.duration}
              </p>

              {/* Divider */}
              <div className="h-px bg-border-light mb-6" />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm text-ink-light"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  >
                    <span className="text-royal font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={isFeatured ? "primary" : "secondary"}
                size="large"
                className="w-full justify-center"
              >
                {index === 0 ? "Book Free Demo" : index === 1 ? "Join Intermediate" : "Apply Now"}
              </Button>
            </motion.div>
          );
        })}
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