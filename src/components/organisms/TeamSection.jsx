import { Linkedin, Github, Twitter } from "lucide-react";
import { teamMembers } from "../../lib/constants/teamMembers";

const TeamCard = ({ name, role, description }) => {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <div className="group premium-card p-6 space-y-4">
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center font-playfair text-base font-bold text-gold-light flex-shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ivory">{name}</h4>
          <p className="text-xs text-gold">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-ivory-dim leading-7">{description}</p>

      {/* Social icons */}
      <div className="flex gap-3 pt-1">
        {[Linkedin, Github, Twitter].map((Icon, i) => (
          <button
            key={i}
            className="w-7 h-7 rounded-lg bg-dark-3 border border-gold/10 flex items-center justify-center text-ivory-dim hover:text-gold hover:border-gold/30 transition-all duration-200"
          >
            <Icon size={13} />
          </button>
        ))}
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-obsidian section-wrapper">
      <div className="space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow-text block mb-3">Our Team</span>
          <h2 className="heading-text mb-4">
            Meet our{" "}
            <em className="italic text-gold-light">dedicated coaches</em>
          </h2>
          <p className="body-text">
            Passionate educators and chess experts committed to helping you grow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;