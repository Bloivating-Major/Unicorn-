import React from "react";
import { Brain, Users, GraduationCap } from "lucide-react"; // Icons

const EmpowerSection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white px-4 py-16 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Heading */}
        <div>
          <p className="uppercase text-sm text-gray-400 font-medium mb-2">Empower</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Unlock Your Potential with <br className="hidden md:block" /> Chess Mastery
          </h2>
          <p className="text-gray-400 text-base max-w-2xl">
            Join our academy to experience unparalleled growth in your chess skills. Our
            dedicated coaches provide personalized mentorship in a nurturing environment.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <Brain className="text-purple-400 mb-3" />
            <h3 className="font-semibold text-white mb-2">
              Experience Professional Growth Through Chess
            </h3>
            <p className="text-gray-400">
              Enhance your strategic thinking and problem-solving abilities.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <Users className="text-purple-400 mb-3" />
            <h3 className="font-semibold text-white mb-2">
              Join a Supportive Community of Chess Enthusiasts
            </h3>
            <p className="text-gray-400">
              Connect with fellow players and refine your passion.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <GraduationCap className="text-purple-400 mb-3" />
            <h3 className="font-semibold text-white mb-2">
              Mentorship from Experienced Chess Coaches
            </h3>
            <p className="text-gray-400">
              Receive guidance from experts who care about your success.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-200 transition">
            Join
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
