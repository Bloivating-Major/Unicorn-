import { motion } from "framer-motion";
import TestimonialSlider from "../molecules/TestimonialSlider";
import {
  slideInLeft,
  slideInRight,
  viewportOnce,
} from "../../lib/animations";

const TestimonialSection = () => {
  return (
    <section className="bg-white border-y border-border-light section-wrapper">
      <div className="relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="eyebrow-text block mb-3">Testimonials</span>
            <h2 className="heading-text">Words from our community</h2>
          </motion.div>
          <motion.p
            className="body-text text-sm max-w-xs sm:text-right"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Hear what students, parents, and champions say about Unicorn Chess Academy.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;