// components/molecules/TestimonialCard.jsx
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[#444] text-white p-10 rounded-lg shadow-lg flex flex-col gap-4 min-h-[250px]">
      <div className="text-yellow-400 text-2xl">★★★★★</div>
      <p className="text-base">"{testimonial.message}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="text-sm">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-gray-300">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
