import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  fadeUpItem,
  scaleUpItem,
  viewportOnce,
} from "../../lib/animations";
import ProgramCard from "../molecules/ProgramCard";
import { programs } from "../../lib/constants/programs";

const specialPrograms = [
  {
    title: "Kids Foundation Batch",
    points: ["Fun-based learning", "Focus on concentration & discipline", "Activity-based sessions"],
  },
  {
    title: "Tournament Preparation Program",
    points: ["Practice matches", "Time management", "Real-game simulations"],
  },
];

const whyItWorks = [
  "Structured curriculum (level-wise progression)",
  "Small batch sizes for personal attention",
  "Regular assessments & feedback",
  "Focus on both skill + personality development",
];

const ProgramsOverview = () => {
  return (
    <section className="bg-white section-wrapper">
      {/* Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="eyebrow-text block mb-3">Courses / Programs</span>
        <h2 className="heading-text mb-4">
          Our Chess{" "}
          <em className="italic text-royal">Programs</em>
        </h2>
        <p className="body-text">
          Structured learning paths designed for every level — from first move to tournament mastery.
        </p>
      </motion.div>

      {/* Main program cards */}
      <motion.div
        className="space-y-8 mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {programs.map((prog, index) => (
         <ProgramCard key={index} prog={prog} index={index} />
        ))}
      </motion.div>

      {/* Special Programs */}
      <motion.div
        className="mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h3 className="font-playfair text-2xl font-bold text-ink mb-8 text-center">
          Special Programs
        </h3>
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {specialPrograms.map((sp, i) => (
            <motion.div key={i} variants={scaleUpItem} className="premium-card p-6">
              <h4 className="font-semibold text-ink mb-4">{sp.title}</h4>
              <ul className="space-y-2">
                {sp.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-ink-light">
                    <CheckCircle size={14} className="text-royal mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Why our programs work */}
      <motion.div
        className="bg-gradient-to-br from-royal-50 to-white border border-royal/15 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-playfair text-2xl font-bold text-ink mb-6 text-center">Why Our Programs Work</h3>
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {whyItWorks.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className="flex items-center gap-3 text-sm text-ink-light"
            >
              <span className="w-6 h-6 rounded-full bg-royal/10 flex items-center justify-center text-royal text-xs font-bold flex-shrink-0">✓</span>
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProgramsOverview;