import React from "react";
import { Link } from "react-router-dom";

const HiringSection = () => {
  return (
    <section className="bg-[#151515] text-white py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            We’re Hiring
          </h2>
          <p className="text-gray-400 text-base max-w-md">
            Do you have a passion for chess and mentoring? We're always looking
            for talented and motivated individuals to join our team and shape
            the future of chess education.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            to="#"
            className="inline-block bg-white text-black font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            View Careers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
