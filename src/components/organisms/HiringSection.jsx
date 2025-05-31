import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const HiringSection = () => {
  return (
    <section className="bg-background-dark container mx-auto text-white py-20 md:px-8 px-5">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            We&apos;re Hiring
          </h2>
          <p className="text-gray-400 text-base max-w-md">
            Do you have a passion for chess and mentoring? We're always looking
            for talented and motivated individuals to join our team and shape
            the future of chess education.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Button variant="primary" size="large" as={Link} to="/careers">
            View Careers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
