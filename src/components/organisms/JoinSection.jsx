import { motion } from "framer-motion";
import { heroContainer, heroItem, viewportOnce, slideInRight } from "../../lib/animations";

const JoinSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 board-pattern pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_40%_50%,rgba(45,58,140,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-wrapper relative z-10 pt-20 pb-16">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={heroItem} className="eyebrow-text block mb-4">
            Careers
          </motion.span>
          <motion.h1 variants={heroItem} className="heading-text text-4xl sm:text-5xl max-w-2xl mb-5">
            Join Our{" "}
            <em className="italic text-royal">Academy</em>
          </motion.h1>
          <motion.p variants={heroItem} className="body-text max-w-xl text-base leading-8">
            Unlock your potential and master the game of chess — or help others do
            the same. We're building a community of champions, coaches, and creators.
          </motion.p>
        </motion.div>
      </div>

      <div className="gold-divider" />
    </section>
  );
};

export default JoinSection;