import { motion } from "framer-motion";

import Button from "../atoms/Button";

import { openWhatsApp } from "../../lib/utils/whatsapp"

const PricingCard = ({ plan }) => {
  const isFeatured = plan.featured;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },

        visible: {
          opacity: 1,
          y: isFeatured ? -8 : 0,
          scale: isFeatured ? 1.02 : 1,

          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        y: isFeatured ? -14 : -6,

        transition: {
          duration: 0.2,
        },
      }}
      className={`
        relative
        flex
        flex-col
        rounded-2xl
        p-7
        border
        transition-all
        duration-300

        ${
          isFeatured
            ? "bg-gradient-to-b from-royal-50 to-white border-royal/30 shadow-brand-md"
            : "bg-white border-border-light shadow-card hover:border-royal/20 hover:shadow-card-lg"
        }
      `}
    >
      {isFeatured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className="
              bg-gradient-to-r
              from-royal-light
              to-royal
              text-white
              text-xs
              font-bold
              tracking-widest
              uppercase
              px-4
              py-1.5
              rounded-full
              shadow-brand-sm
            "
          >
            Most Popular
          </span>
        </div>
      )}

      <p className="eyebrow-text mb-3">
        {plan.name}
      </p>

      <div className="mb-1 flex items-end gap-1">
        <span className="font-playfair text-4xl font-bold text-ink leading-none">
          {plan.price}
        </span>

        <span className="text-ink-muted text-sm mb-1">
          /month
        </span>
      </div>

      <p className="text-xs text-ink-muted mb-6">
        Duration: {plan.duration}
      </p>

      <div className="h-px bg-border-light mb-6" />

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-ink-light"
          >
            <span className="text-royal font-bold text-xs mt-0.5">
              ✓
            </span>

            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={
          isFeatured
            ? "primary"
            : "secondary"
        }
        size="large"
        className="w-full justify-center"
        onClick={() =>
          openWhatsApp(
            plan.whatsappMessage
          )
        }
      >
        {plan.ctaText}
      </Button>
    </motion.div>
  );
};

export default PricingCard;