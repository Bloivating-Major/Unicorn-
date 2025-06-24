import React from "react";
import Button from "../atoms/Button";

const HeroSection = () => {
  return (
  <section className="section-wrapper relative overflow-hidden">
  <div className=" flex flex-col md:flex-row relative z-20">
    
    {/* Left Section */}
    <div className="md:w-1/2 p-4 md:my-auto">
      <h1 className="heading-text max-w-xl mb-6">
        Unlock Your Chess Potential Today!
      </h1>
      <p className="max-w-lg mb-8 body-text">
        Join our vibrant community of chess enthusiasts and elevate your skills. 
        Whether you're a beginner or an advanced player, we provide the guidance 
        you need to succeed.
      </p>
      <div className="flex gap-4">
        <Button variant="primary" size="medium">Join</Button>
        <Button variant="secondary" size="medium">Learn More</Button>
      </div>
    </div>

    {/* Right Section */}
    <div className="md:w-1/2 px-4 py-10 flex items-center justify-center">
      <div className="w-full md:w-[600px] max-w-full rounded-md overflow-hidden">
        <img
          src="/src/assets/images/bobby600x640.webp"
          alt="Bobby Fischer"
          className="rounded-md w-full h-auto object-cover"
        />
      </div>
    </div>
    
  </div>
</section>

  );
};

export default HeroSection;
