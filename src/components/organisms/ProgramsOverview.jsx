import { motion } from "framer-motion";
import { CheckCircle, Clock, Monitor, Award } from "lucide-react";
import Button from "../atoms/Button";
import {
  fadeUp,
  staggerContainer,
  fadeUpItem,
  scaleUpItem,
  viewportOnce,
} from "../../lib/animations";

const programs = [
  {
    number: "01",
    level: "Beginner Program",
    subtitle: "For absolute beginners (Age 5+)",
    duration: "3–4 months",
    mode: "Online / Offline",
    outcome: "Students will be able to play complete games with understanding and confidence.",
    ctaLabel: "Book Free Demo Class",
    topics: [
      "Piece movement & board understanding",
      "Basic rules (check, checkmate, stalemate)",
      "Simple tactics (fork, pin, skewer)",
      "Basic opening principles",
      "Confidence in playing full games",
    ],
  },
  {
    number: "02",
    level: "Intermediate Program",
    subtitle: "For students who know basics and want to improve",
    duration: "5–6 months",
    mode: "Online / Offline",
    outcome: "Students start thinking strategically and performing in tournaments.",
    ctaLabel: "Join Intermediate Batch",
    topics: [
      "Tactical combinations & calculation",
      "Opening ideas and traps",
      "Positional understanding",
      "Endgame fundamentals",
      "Game analysis techniques",
    ],
  },
  {
    number: "03",
    level: "Advanced Program",
    subtitle: "For serious players & tournament aspirants",
    duration: "Ongoing",
    mode: "Online / Offline",
    outcome: "Students develop a competitive edge and aim for rating improvement.",
    ctaLabel: "Apply for Advanced Training",
    topics: [
      "Advanced strategy & planning",
      "Deep opening preparation",
      "Complex endgames",
      "Tournament psychology",
      "Personalized game analysis",
    ],
  },
];

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
          <motion.div
            key={index}
            variants={fadeUpItem}
            className="group premium-card p-8 flex flex-col lg:flex-row gap-8"
          >
            {/* Left: number + title */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-playfair text-4xl font-bold text-royal/80">{prog.number}</span>
                <span className="eyebrow-text">{prog.level}</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-ink mb-2">{prog.level}</h3>
              <p className="text-sm text-ink-muted italic mb-4">{prog.subtitle}</p>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-ink-light">
                  <Clock size={14} className="text-royal flex-shrink-0" />
                  Duration: <span className="font-medium text-ink">{prog.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-ink-light">
                  <Monitor size={14} className="text-royal flex-shrink-0" />
                  Mode: <span className="font-medium text-ink">{prog.mode}</span>
                </div>
              </div>

              <Button variant="primary" size="medium" className="mt-6">
                {prog.ctaLabel}
              </Button>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-border-light flex-shrink-0" />

            {/* Right: topics + outcome */}
            <div className="flex-1">
              <p className="text-xs font-bold tracking-widest uppercase text-ink-muted mb-4">What students will learn:</p>
              <ul className="space-y-2 mb-6">
                {prog.topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-light">
                    <CheckCircle size={15} className="text-royal mt-0.5 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="bg-royal-50 border border-royal/15 rounded-xl px-5 py-4">
                <div className="flex items-start gap-3">
                  <Award size={16} className="text-royal mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-royal mb-1">Outcome</p>
                    <p className="text-sm text-ink-light">{prog.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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