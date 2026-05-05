import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialControls = ({ prevRef, nextRef }) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      {/* Pagination dots */}
      <div className="custom-pagination flex gap-2" />

      {/* Arrow buttons */}
      <div className="flex gap-3">
        <button
          ref={prevRef}
          aria-label="Previous"
          className="w-10 h-10 rounded-lg bg-dark-3 border border-gold/15 text-ivory-dim hover:border-gold/40 hover:text-gold transition-all duration-200 flex items-center justify-center"
        >
          <FaArrowLeft size={14} />
        </button>
        <button
          ref={nextRef}
          aria-label="Next"
          className="w-10 h-10 rounded-lg bg-dark-3 border border-gold/15 text-ivory-dim hover:border-gold/40 hover:text-gold transition-all duration-200 flex items-center justify-center"
        >
          <FaArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialControls;