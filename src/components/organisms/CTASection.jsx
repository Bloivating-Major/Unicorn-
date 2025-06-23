import React from "react";
import Button from "../atoms/Button";

const CTASection = () => {
  return (
    <section className="section-wrapper">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-sm:px-3">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="heading-text mb-4">
            Unlock Your Chess Potential Today
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-6">
          <p className="body-text">
            Join our vibrant community of chess enthusiasts and take your skills to the next level. 
            Whether you're a beginner or looking to refine your strategies, we have the perfect program for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="medium">Get Started</Button>
            <Button variant="secondary" size="medium">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
