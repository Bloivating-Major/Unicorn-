import { useEffect, useRef } from "react";
import Button from "../atoms/Button";
import { bobby600x640 } from "../../assets/images";

/* ── Mini chess board visual ── */
const PIECES = {
  "00":"♜","10":"♞","20":"♝","30":"♛","40":"♚","50":"♝","60":"♞","70":"♜",
  "01":"♟","11":"♟","21":"♟","31":"♟","41":"♟","51":"♟","61":"♟","71":"♟",
  "06":"♙","16":"♙","26":"♙","36":"♙","46":"♙","56":"♙","66":"♙","76":"♙",
  "07":"♖","17":"♘","27":"♗","37":"♕","47":"♔","57":"♗","67":"♘","77":"♖",
};
const HIGHLIGHTS = new Set(["34","43","44","35"]);
const DOTS       = new Set(["23","53","25","55"]);

const ChessBoard = () => (
  <div
    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px]"
    style={{ perspective: "800px" }}
  >
    {/* ambient glow */}
    <div className="absolute inset-0 -m-8 rounded-full bg-gold/5 blur-2xl pointer-events-none" />

    <div
      className="grid grid-cols-8 w-full h-full rounded-md overflow-hidden border-2 border-gold/40 shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(201,168,76,0.1)]"
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
                ? "bg-gold/40"
                : isLight
                  ? "bg-[#D4B896]"
                  : "bg-[#8B5E3C]"
              }`}
          >
            {isDot && (
              <span className="absolute w-[30%] h-[30%] rounded-full bg-gold/50" />
            )}
            {piece && <span className="relative z-10 leading-none">{piece}</span>}
          </div>
        );
      })}
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative bg-obsidian overflow-hidden">
      {/* chess-board grid pattern */}
      <div className="absolute inset-0 board-pattern pointer-events-none" />
      {/* radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none" />

      <div className="section-wrapper relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[80vh]">

        {/* ── LEFT COPY ── */}
        <div className="flex-1 text-center lg:text-left">
          {/* eyebrow badge */}
          <span className="inline-flex items-center gap-2 bg-gold/8 border border-gold/25 rounded-full px-4 py-1.5 text-gold text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-up">
            ♟ Unicorn Chess Academy · Est. 2012
          </span>

          <h1 className="heading-text text-4xl sm:text-5xl lg:text-6xl mb-5 animate-fade-up delay-100">
            Master the{" "}
            <em className=" text-gold-light italic">Art of Chess</em>
          </h1>

          <p className="body-text text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-200">
            Join India's most passionate chess coaching academy. From total
            beginners to competitive champions — we shape strategic minds with
            expert coaching, vibrant community, and elite tournaments.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up delay-300">
            <Button variant="primary" size="large">Start Your Journey</Button>
            <Button variant="secondary" size="large">Watch Demo</Button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 animate-fade-up delay-400">
            {[
              { num: "500+", label: "Students Trained" },
              { num: "12+",  label: "Years of Excellence" },
              { num: "50+",  label: "Tournament Wins" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start">
                <span className="font-playfair text-2xl font-bold text-gold-light leading-none">
                  {s.num}
                </span>
                <span className="text-xs text-ivory-dim mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT VISUAL ── */}
        <div className="flex-1 flex items-center justify-center animate-fade-up delay-200">
          <div className="relative">
            {/* Hero image behind the board
            <div className="absolute -bottom-4 -right-4 w-40 h-52 sm:w-56 sm:h-72 rounded-xl overflow-hidden border border-gold/20 shadow-gold-md opacity-80">
              <img
                src={bobby600x640}
                alt="Chess master"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
            </div> */}
            <ChessBoard />
          </div>
        </div>

      </div>

      {/* bottom gold line */}
      <div className="gold-divider" />
    </section>
  );
};

export default HeroSection;