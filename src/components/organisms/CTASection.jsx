import React from "react";
import Button from "../atoms/Button";

const CTASection = () => {
  return (
    <section className="bg-background-dark text-white py-16 flex px-5 md:h-[380px] max-sm:flex-col">
      <div className="container bg-background-dark flex mx-auto justify-between max-sm:flex-col">  
      <div className="md:w-1/2 ">
        <h1 className="md:text-5xl text-4xl md:w-4/5 mb-2">Unlock Your Chess Potential Today</h1>
    
      </div>
        <div className="md:w-1/2 py-3">
            <p className="mb-6 text-lg w-11/12">
          Join our vibrant community of chess enthusiasts and take your skills to the next level. 
          Whether you're a beginner or looking to refine your strategies, we have the perfect program for you.
        </p>
          <div className="flex gap-4">
          <Button variant="primary" size="large" >Get Started</Button>
          <Button variant="secondary" size="large">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;