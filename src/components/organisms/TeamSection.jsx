import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Head Coach",
    description: "Passionate about nurturing chess talent and mentoring young players.",
  },
  {
    name: "Mark Lee",
    role: "Assistant Coach",
    description: "Brings years of experience and a love for the game.",
  },
  {
    name: "Sarah Kim",
    role: "Youth Trainer",
    description: "Dedicated to helping the next generation of chess players.",
  },
  {
    name: "David Brown",
    role: "Tournament Director",
    description: "Expert in organizing competitive events and fostering sportsmanship.",
  },
  {
    name: "Emily White",
    role: "Online Coach",
    description: "Specialist in virtual sessions to reach students everywhere.",
  },
  {
    name: "James Green",
    role: "Strategy Expert",
    description: "Focused on developing advanced tactics and critical thinking skills.",
  },
];

const TeamCard = ({ name, role, description }) => (
  <div className="bg-[#1a1a1a] rounded-xl p-5 text-white space-y-2">
    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
      {name.split(" ").map((n) => n[0]).join("")}
    </div>
    <h4 className="text-lg font-semibold">{name}</h4>
    <p className="text-sm text-gray-400">{role}</p>
    <p className="text-sm text-gray-400">{description}</p>
    <div className="flex gap-3 mt-2 text-gray-400">
      <Linkedin size={16} className="cursor-pointer hover:text-white" />
      <Github size={16} className="cursor-pointer hover:text-white" />
      <Twitter size={16} className="cursor-pointer hover:text-white" />
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white px-4 py-16 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <p className="uppercase text-sm text-gray-400 font-medium mb-2">Together</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-400 text-base max-w-2xl">
            Meet our dedicated coaches and trainers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
