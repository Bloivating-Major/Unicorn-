import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";
import { teamMembers } from "../../lib/constants/teamMembers";


const TeamCard = ({ name, role, description }) => (
  <div className="bg-background-dull/60 rounded-xl p-5 text-white space-y-2">
    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
      {name.split(" ").map((n) => n[0]).join("")}
    </div>
    <h4 className="text-lg font-medium">{name}</h4>
    <p className="text-sm text-yellow-400">{role}</p>
    <p className="text-sm ">{description}</p>
    <div className="flex gap-3 mt-2 text-gray-400">
      <Linkedin size={16} className="cursor-pointer hover:text-white text-yellow-400" />
      <Github size={16} className="cursor-pointer hover:text-white text-yellow-400" />
      <Twitter size={16} className="cursor-pointer hover:text-white text-yellow-400" />
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="bg-background-dark mx-auto container text-white px-5 py-16 md:px-8">
      <div className="space-y-10">
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
