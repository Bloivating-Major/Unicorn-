import React from "react";
import Button from "../atoms/Button";
import FloatingKnight from "../molecules/FloatingKnight";

const HeroSection = () => {
  return (
    <section className="bg-background-dark md:h-[824px]  text-white py-16 px-2">
      <FloatingKnight />
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 md:my-auto">
          <h1 className="md:text-6xl md:w-2/3 mb-4 text-5xl max-sm:font-medium">Unlock Your Chess Potential Today!</h1>
          <p className="mb-6 md:w-3/4 text-lg">
            Join our vibrant community of chess enthusiasts and elevate your skills. 
            Whether you're a beginner or an advanced player, we provide the guidance 
            you need to succeed.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="large">Join</Button>
            <Button variant="secondary" size="large">Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2 p-4 py-8 flex items-center justify-center">
          <div className="md:w-[600px]  md:h-[600px] rounded-md overflow-hidden  ">
            <img src="/src/assets/bobby600x640.webp" alt="Bobby Fischer" className="rounded-md" />
            </div> {/* Placeholder for image */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;