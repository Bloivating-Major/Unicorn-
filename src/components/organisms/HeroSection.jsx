import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import {
  heroContainer,
  heroItem,
  slideInRight,
  staggerContainer,
  statItem,
  viewportOnce,
} from "../../lib/animations";
import { openWhatsApp } from "../../lib/utils/whatsapp";

/* ── Mini chess board visual ── */
const PIECES = {
  "00": "♜", "10": "♞", "20": "♝", "30": "♛", "40": "♚", "50": "♝", "60": "♞", "70": "♜",
  "01": "♟", "11": "♟", "21": "♟", "31": "♟", "41": "♟", "51": "♟", "61": "♟", "71": "♟",
  "06": "♙", "16": "♙", "26": "♙", "36": "♙", "46": "♙", "56": "♙", "66": "♙", "76": "♙",
  "07": "♖", "17": "♘", "27": "♗", "37": "♕", "47": "♔", "57": "♗", "67": "♘", "77": "♖",
};
const HIGHLIGHTS = new Set(["34", "43", "44", "35"]);
const DOTS = new Set(["23", "53", "25", "55"]);

const ChessBoard = () => (
  <div
    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px]"
    style={{ perspective: "800px" }}
  >
    {/* ambient glow */}
    <div className="absolute inset-0 -m-8 rounded-full bg-royal/5 blur-2xl pointer-events-none" />

    <div
      className="grid grid-cols-8 w-full h-full rounded-xl overflow-hidden border-2 border-border-mid shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_30px_rgba(45,58,140,0.08)]"
      style={{ transform: "perspective(800px) rotateX(20deg) rotateY(-8deg)" }}
    >
      {Array.from({ length: 64 }, (_, i) => {
        const col = i % 8;
        const row = Math.floor(i / 8);
        const key = `${col}${row}`;
        const isLight = (row + col) % 2 === 0;
        const isHighlight = HIGHLIGHTS.has(key);
        const isDot = DOTS.has(key);
        const piece = PIECES[key];

        return (
          <div
            key={i}
            className={`flex items-center justify-center text-xl sm:text-2xl relative
              ${isHighlight
                ? "bg-royal/30"
                : isLight
                  ? "bg-[#F0D9B5]"
                  : "bg-[#B58863]"
              }`}
          >
            {isDot && (
              <span className="absolute w-[30%] h-[30%] rounded-full bg-royal/40" />
            )}
            {piece && <span className="relative z-10 leading-none">{piece}</span>}
          </div>
        );
      })}
    </div>
  </div>
);

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate("/about#programs-overview");
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* subtle board pattern */}
      <div className="absolute inset-0 board-pattern pointer-events-none opacity-60" />
      {/* soft radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(45,58,140,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-wrapper relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[80vh]">

        {/* ── LEFT COPY ── */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* eyebrow badge */}
          <motion.span
            variants={heroItem}
            className="inline-flex items-center gap-2 bg-royal-50 border border-royal/20 rounded-full px-4 py-1.5 text-royal text-xs font-semibold tracking-widest uppercase mb-6"
          >
            ♟ Unicorn Chess Academy · Est. 2012
          </motion.span>

          <motion.h1 variants={heroItem} className="heading-text text-4xl sm:text-5xl lg:text-6xl mb-5">
            Master the{" "}
            <em className="text-royal italic">Art of Chess</em>
          </motion.h1>

          <motion.p variants={heroItem} className="body-text text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
            Join India's most passionate chess coaching academy. From total
            beginners to competitive champions — we shape strategic minds with
            expert coaching, vibrant community, and elite tournaments.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button variant="primary" size="large" onClick={() =>
              openWhatsApp(
                "Hey! I want to book a free demo class at Unicorn Chess Academy."
              )
            }>Book Free Demo Class</Button>
            <Button variant="secondary" size="large"
              onClick={handleExplorePrograms}
            >Explore Programs</Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10"
            variants={staggerContainer}
          >
            {[
              { num: "500+", label: "Students Trained" },
              { num: "12+", label: "Years of Excellence" },
              { num: "50+", label: "Tournament Wins" },
            ].map((s) => (
              <motion.div key={s.label} variants={statItem} className="flex flex-col items-center lg:items-start">
                <span className="font-playfair text-2xl font-bold text-royal leading-none">
                  {s.num}
                </span>
                <span className="text-xs text-ink-muted mt-1">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT VISUAL ── */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <ChessBoard />
          </div>
        </motion.div>

      </div>

      {/* bottom divider */}
      <div className="gold-divider" />
    </section>
  );
};

export default HeroSection;