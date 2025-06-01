import React from "react";
import Button from "../atoms/Button";

const OpportunitiesSection = () => {
  return (
    <section className="container mx-auto bg-background-dark md:h-[824px]  text-white py-16 max-sm:px-6">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 md:p-4 py-4 md:my-auto">
          <h1 className="md:text-4xl md:w-4/5 mb-4 text-3xl max-sm:font-medium">
            Unlock Your Potential Opportunities for Passionate Chess Coaches
            and Trainers
          </h1>
          <p className="mb-6 md:w-3/4 text-lg">
            Join our vibrant community of chess educators and elevate your
            coaching career. We offer a range of opportunities, from workshops
            to competitive events, designed to enhance your skills and connect
            you with aspiring players.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="large">
              Join
            </Button>
            <Button variant="secondary" size="large">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 p-4 py-8 flex items-center justify-center">
          <div className="md:w-[600px]  md:h-[600px] rounded-md overflow-hidden  ">
            <img
              src="/src/assets/images/bobby600x640.webp"
              alt="Bobby Fischer"
              className="rounded-md"
            />
          </div>{" "}
          {/* Placeholder for image */}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
