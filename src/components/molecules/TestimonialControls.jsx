// components/molecules/TestimonialControls.jsx
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialControls = ({ prevRef, nextRef }) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      {/* Dots (Pagination) - Left */}
      <div className="custom-pagination flex space-x-2"></div>

      {/* Arrows (Navigation) - Right */}
      <div className="flex gap-3">
        <button
          ref={prevRef}
          className="bg-[#444] text-white w-10 h-10 rounded-md hover:bg-[#666] transition flex justify-center items-center"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="bg-[#444] text-white w-10 h-10 rounded-md hover:bg-[#666] transition flex justify-center items-center"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialControls;
