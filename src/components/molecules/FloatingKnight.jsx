import React from "react";
import { motion } from "framer-motion";

const FloatingKnight = () => {
  return (
      <motion.div
      className="absolute bottom-0 left-[43%] transform -translate-x-1/2 z-20  pointer-events-none"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: -400, opacity: 1 }}
      transition={{
        duration: 1.6,
        ease: "easeOut",
      }}
    >
      {/* Glow Behind */}
      <div className="absolute inset-0 max-sm:hidden w-24 h-24 rounded-full bg-purple-500 opacity-30 blur-2xl animate-pulse" />

      {/* Floating Knight */}
      <motion.img
        src="/src/assets/Knight.svg" // Make sure this path is correct
        alt="Floating Knight"
        className="max-sm:hidden md:w-44 relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default FloatingKnight;
