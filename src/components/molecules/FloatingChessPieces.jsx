import { useState } from "react";
import { motion } from "framer-motion";

const pieces = [
  { src: "/src/assets/Queen.svg", delay: 0 },
  { src: "/src/assets/rook.svg", delay: 0.3 },
  { src: "/src/assets/Knight.svg", delay: 0.6 },
  { src: "/src/assets/pawn.svg", delay: 0.9 },
];

const FloatingChessPieces = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="w-full flex justify-center gap-6">
      {pieces.map((piece, idx) => (
        <motion.img
          key={idx}
          src={piece.src}
          alt={`chess-piece-${idx}`}
          className={`w-16 h-16 md:w-32 md:h-32 rounded-full cursor-pointer transition duration-300 ${
            hoveredIdx === idx
              ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] scale-110"
              : ""
          }`}
          initial={{ y: 50, opacity: 1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            delay: piece.delay,
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          onMouseEnter={() => setHoveredIdx(idx)}    // hover in
          onMouseLeave={() => setHoveredIdx(null)}   // hover out
          onClick={() => setHoveredIdx(idx)}         // tap for mobile
        />
      ))}
    </div>
  );
};

export default FloatingChessPieces;
