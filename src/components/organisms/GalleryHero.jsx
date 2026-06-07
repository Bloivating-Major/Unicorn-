import { motion } from "framer-motion";
import { heroContainer, heroItem, viewportOnce } from "../../lib/animations";

const GalleryHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 board-pattern pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(45,58,140,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-wrapper relative z-10 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <motion.div
            className="max-w-xl"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={heroItem} className="eyebrow-text block mb-4">
              Gallery
            </motion.span>
            <motion.h1 variants={heroItem} className="heading-text">
              Our Chess{" "}
              <em className="italic text-royal">Gallery</em>
            </motion.h1>
          </motion.div>
          <motion.p
            className="max-w-md body-text leading-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            Explore moments captured at our Chess Academy — from intense matches
            to joyful victories. Each image tells a story of dedication, skill, and
            the vibrant community we foster.
          </motion.p>
        </div>
      </div>

      <div className="gold-divider" />
    </section>
  );
};

export default GalleryHero;