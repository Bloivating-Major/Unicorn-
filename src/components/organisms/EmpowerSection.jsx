import React from "react";
import { Brain, Users, GraduationCap } from "lucide-react"; // Icons
import Button from "../atoms/Button";

const EmpowerSection = () => {
  return (
    <section className="container mx-auto bg-background-dark text-white px-6 py-16 md:px-8 ">
      <div className="space-y-10">
        {/* Section Heading */}
        <div>
          <p className="uppercase text-sm text-gray-400 font-medium mb-2">Empower</p>
          <h2 className="text-4xl md:text-5xl mb-4 w-[90%]">
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
            <Brain className="text-yellow-400 mb-3" />
            <h3 className="font-semibold text-white mb-2 text-2xl">
              Experience Professional Growth Through Chess
            </h3>
            <p className="text-gray-400">
              Enhance your strategic thinking and problem-solving abilities.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <Users className="text-yellow-400 mb-3" />
            <h3 className="font-semibold text-white mb-2 text-2xl">
              Join a Supportive Community of Chess Enthusiasts
            </h3>
            <p className="text-gray-400">
              Connect with fellow players and refine your passion.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <GraduationCap className="text-yellow-400 mb-3" />
            <h3 className="font-semibold text-white mb-2 text-2xl">
              Mentorship from Experienced Chess Coaches
            </h3>
            <p className="text-gray-400">
              Receive guidance from experts who care about your success.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <Button variant="primary" size="large">
            Join Our Academy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
