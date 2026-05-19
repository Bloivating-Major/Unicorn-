import { useState } from "react";
import { motion } from "framer-motion";
import { Queen, rook, Knight, pawn } from "../../assets/images";

const pieces = [
  { src: Queen,  label: "Queen",  delay: 0 },
  { src: rook,   label: "Rook",   delay: 0.4 },
  { src: Knight, label: "Knight", delay: 0.8 },
  { src: pawn,   label: "Pawn",   delay: 1.2 },
];

const FloatingChessPieces = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="w-full flex justify-center items-end gap-4 sm:gap-8 py-6">
      {pieces.map((piece, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, -14, 0] }}
          transition={{
            delay: piece.delay,
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          onClick={() => setHoveredIdx(idx === hoveredIdx ? null : idx)}
        >
          <div
            className={`relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl 
              border transition-all duration-300 overflow-hidden
              ${hoveredIdx === idx
                ? "border-royal/40 shadow-brand-md scale-110 bg-royal-50"
                : "border-border-light bg-surface-alt scale-100"
              }`}
          >
            <img
              src={piece.src}
              alt={piece.label}
              className={`w-full h-full object-contain p-3 transition-all duration-300
                ${hoveredIdx === idx ? "opacity-100" : "opacity-60"}`}
            />
          </div>
          <span
            className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200
              ${hoveredIdx === idx ? "text-royal" : "text-ink-muted"}`}
          >
            {piece.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingChessPieces;