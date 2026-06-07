import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";
import { teamMembers } from "../../lib/constants/teamMembers";
import {
  fadeUp,
  staggerContainer,
  scaleUpItem,
  viewportOnce,
} from "../../lib/animations";

const TeamCard = ({ name, role, description }) => {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <motion.div
      variants={scaleUpItem}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group premium-card p-6 space-y-4"
    >
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-royal-50 border border-royal/20 flex items-center justify-center font-playfair text-base font-bold text-royal flex-shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink">{name}</h4>
          <p className="text-xs text-royal font-medium">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-ink-light leading-7">{description}</p>

      {/* Social icons */}
      <div className="flex gap-3 pt-1">
        {[Linkedin, Github, Twitter].map((Icon, i) => (
          <button
            key={i}
            className="w-7 h-7 rounded-lg bg-surface-alt border border-border-light flex items-center justify-center text-ink-muted hover:text-royal hover:border-royal/25 transition-all duration-200"
          >
            <Icon size={13} />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-white section-wrapper">
      <div className="space-y-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="eyebrow-text block mb-3">Our Team</span>
          <h2 className="heading-text mb-4">
            Meet our{" "}
            <em className="italic text-royal">dedicated coaches</em>
          </h2>
          <p className="body-text">
            Passionate educators and chess experts committed to helping you grow.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {teamMembers.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;