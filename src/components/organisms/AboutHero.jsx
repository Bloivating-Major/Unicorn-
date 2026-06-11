import { motion } from "framer-motion";
import Button from "../atoms/Button";
import FloatingChessPieces from "../molecules/FloatingChessPieces";
import {
  heroContainer,
  heroItem,
  slideInRight,
  viewportOnce,
} from "../../lib/animations";
import { openWhatsApp } from "../../lib/utils/whatsapp";

const AboutHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 board-pattern pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(45,58,140,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-wrapper relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[70vh]">

        {/* Left copy */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={heroItem} className="eyebrow-text block mb-4">
            Our Story
          </motion.span>

          <motion.h1 variants={heroItem} className="heading-text mb-5">
            Unicorn{" "}
            <em className="italic text-royal">Chess Academy</em>
          </motion.h1>

          <motion.p variants={heroItem} className="body-text max-w-lg mx-auto lg:mx-0 mb-8">
            A leading institution dedicated to chess excellence and mental wellness
            for all ages — from curious beginners to competitive champions.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button variant="primary" size="large"
              onClick={() =>
                openWhatsApp(
                  "Hey! I want to join the academy at Unicorn Chess Academy."
                )
              }
            >Join the Academy</Button>
            <Button variant="secondary" size="large"
              onClick={() =>
                openWhatsApp(
                  "Hey! I want to learn more about the academy at Unicorn Chess Academy."
                )
              }
            >Learn More</Button>
          </motion.div>
        </motion.div>

        {/* Right — floating pieces */}
        <motion.div
          className="flex-1 w-full max-w-lg"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <FloatingChessPieces />
        </motion.div>
      </div>

      <div className="gold-divider" />
    </section>
  );
};

export default AboutHero;