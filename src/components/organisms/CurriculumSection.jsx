import { motion } from "framer-motion";
import { CheckCircle, Target, BookOpen, Brain, Trophy } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  scaleUpItem,
  fadeUpItem,
  viewportOnce,
} from "../../lib/animations";

const levels = [
  {
    tag: "Level 1",
    title: "Foundation",
    subtitle: "Beginner",
    goal: "Build strong basics and confidence",
    duration: "8–12 weeks",
    topics: [
      "Chessboard setup & piece movement",
      "Rules: check, checkmate, stalemate",
      "Basic tactics: fork, pin, skewer",
      "Introduction to opening principles",
      "Simple checkmate patterns",
    ],
    skills: ["Focus & patience", "Logical thinking", "Game understanding"],
  },
  {
    tag: "Level 2",
    title: "Tactical Growth",
    subtitle: "Lower Intermediate",
    goal: "Improve calculation and awareness",
    duration: "12–16 weeks",
    topics: [
      "Tactical combinations",
      "Piece coordination",
      "Opening traps & ideas",
      "Basic endgames (king + pawn, opposition)",
      "Introduction to notation & analysis",
    ],
    skills: ["Calculation ability", "Pattern recognition", "Decision-making"],
  },
  {
    tag: "Level 3",
    title: "Strategic Development",
    subtitle: "Intermediate",
    goal: "Learn planning and positional play",
    duration: "4–6 months",
    topics: [
      "Pawn structures & strategy",
      "Weak squares & outposts",
      "Opening repertoire basics",
      "Endgame techniques",
      "Game analysis (own + master games)",
    ],
    skills: ["Strategic thinking", "Long-term planning", "Positional understanding"],
  },
  {
    tag: "Level 4",
    title: "Competitive Training",
    subtitle: "Advanced",
    goal: "Prepare for tournaments & ratings",
    duration: "Ongoing",
    topics: [
      "Advanced calculation & visualization",
      "Deep opening preparation",
      "Complex endgames",
      "Tournament strategy & psychology",
      "Personalized game review",
    ],
    skills: ["Competitive mindset", "Time management", "Performance under pressure"],
  },
];

const assessmentPoints = [
  "Monthly progress evaluation",
  "Practice tests & game reviews",
  "Individual feedback for each student",
  "Level completion certificates",
];

const approachPoints = [
  "Small batch sizes for personal attention",
  "Interactive & practical sessions",
  "Focus on both chess skills and life skills",
  "Regular tournament exposure",
];

const CurriculumSection = () => {
  return (
    <section className="bg-surface-alt section-wrapper">
      {/* Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="eyebrow-text block mb-3">Curriculum / Syllabus</span>
        <h2 className="heading-text mb-4">
          Our Structured Chess{" "}
          <em className="italic text-royal">Curriculum</em>
        </h2>
        <p className="body-text">
          Step-by-step learning designed to build strong fundamentals and competitive skills.
          Each level focuses on specific skills, ensuring students not only learn chess
          but develop thinking, discipline, and decision-making.
        </p>
      </motion.div>

      {/* Level cards */}
      <motion.div
        className="grid sm:grid-cols-2 gap-6 mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {levels.map((lvl, index) => (
          <motion.div key={index} variants={scaleUpItem} className="premium-card p-7 flex flex-col gap-5">
            {/* Tag + title */}
            <div>
              <span className="eyebrow-text block mb-1">{lvl.tag} · {lvl.subtitle}</span>
              <h3 className="font-playfair text-xl font-bold text-ink">{lvl.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <Target size={13} className="text-royal" />
                <p className="text-xs text-ink-muted">Goal: {lvl.goal}</p>
              </div>
            </div>

            {/* Topics */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-ink-muted mb-3">What students learn:</p>
              <ul className="space-y-1.5">
                {lvl.topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-light">
                    <CheckCircle size={13} className="text-royal mt-0.5 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills + Duration */}
            <div className="border-t border-border-light pt-4 flex flex-wrap gap-4 justify-between">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-ink-muted mb-2">Skills Developed:</p>
                <div className="flex flex-wrap gap-1.5">
                  {lvl.skills.map((s, i) => (
                    <span key={i} className="text-xs bg-royal-50 text-royal border border-royal/15 rounded-full px-3 py-0.5 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-end">
                <span className="text-xs text-ink-muted font-medium">⏱ {lvl.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Assessment + Approach */}
      <motion.div
        className="grid sm:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUpItem} className="premium-card p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-royal-50 border border-royal/15 flex items-center justify-center text-royal">
              <BookOpen size={18} />
            </div>
            <h3 className="font-playfair text-lg font-bold text-ink">Assessment &amp; Progress Tracking</h3>
          </div>
          <ul className="space-y-3">
            {assessmentPoints.map((pt, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-ink-light">
                <span className="w-5 h-5 rounded-full bg-royal/10 flex items-center justify-center text-royal text-xs font-bold flex-shrink-0">✓</span>
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUpItem} className="premium-card p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-royal-50 border border-royal/15 flex items-center justify-center text-royal">
              <Brain size={18} />
            </div>
            <h3 className="font-playfair text-lg font-bold text-ink">Learning Approach</h3>
          </div>
          <ul className="space-y-3">
            {approachPoints.map((pt, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-ink-light">
                <span className="w-5 h-5 rounded-full bg-royal/10 flex items-center justify-center text-royal text-xs font-bold flex-shrink-0">✓</span>
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Closing statement */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="text-ink-light text-sm max-w-2xl mx-auto italic">
          "Our curriculum is not just about mastering chess — it's about shaping disciplined,
          confident thinkers ready to win both on and off the board."
        </p>
      </motion.div>
    </section>
  );
};

export default CurriculumSection;
