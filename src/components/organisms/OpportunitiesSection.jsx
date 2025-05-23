import React from "react";

const OpportunitiesSection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white px-4 py-16 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Unlock Your Potential: Opportunities for Passionate Chess Coaches and Trainers
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Join our vibrant community of chess educators and elevate your coaching skills.
            We offer a range of opportunities, from workshops to tournaments, designed to
            enhance your skills and connect you with aspiring players.
          </p>
        </div>
        <div className="w-full h-72 md:h-96 bg-gray-300 rounded-lg flex items-center justify-center">
          {/* Placeholder for image */}
          <span className="text-gray-500 text-5xl">🖼️</span>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
