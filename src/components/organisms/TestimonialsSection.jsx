// components/organisms/TestimonialSection.jsx
import React from "react";
import TestimonialSlider from "../molecules/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="container mx-auto bg-background-dark h-[725px]  text-white py-12 px-5 relative">
      <div className="container mx-auto  relative">
        <h2 className="text-5xl mb-4">Customer Testimonials</h2>
        <p className="mb-10 text-gray-400 text-lg">
          My child has grown tremendously in confidence and skill!
        </p>

        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;
