import { motion } from "framer-motion";
import Button from "../atoms/Button";
import {
  fadeUp,
  staggerContainer,
  scaleUpItem,
  slideInLeft,
  slideInRight,
  viewportOnce,
} from "../../lib/animations";

const openings = [
  {
    title: "Chess Coach",
    type: "Full-time",
    location: "Bhopal, MP",
    desc: "Guide students from beginner to advanced levels with structured lesson plans and personalized feedback.",
  },
  {
    title: "Online Trainer",
    type: "Remote",
    location: "Anywhere in India",
    desc: "Deliver high-quality virtual sessions using interactive boards and video conferencing tools.",
  },
  {
    title: "Tournament Coordinator",
    type: "Part-time",
    location: "Bhopal, MP",
    desc: "Organize and manage competitive events that foster sportsmanship and rapid skill development.",
  },
];

const HiringSection = () => {
  return (
    <section className="bg-surface-alt border-y border-border-light section-wrapper">
      <div className="space-y-12">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="eyebrow-text block mb-3">We're Hiring</span>
            <h2 className="heading-text max-w-xl">
              Shape the future of{" "}
              <em className="italic text-royal">chess education</em>
            </h2>
          </motion.div>
          <motion.p
            className="body-text max-w-sm text-sm lg:text-right"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Do you have a passion for chess and mentoring? We're always looking for
            talented, motivated individuals to join our growing team.
          </motion.p>
        </div>

        {/* Job cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {openings.map((job, i) => (
            <motion.div
              key={i}
              variants={scaleUpItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group premium-card p-6 flex flex-col gap-4"
            >
              {/* Badges */}
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-semibold tracking-wide uppercase bg-royal-50 border border-royal/20 text-royal px-3 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="text-xs font-medium text-ink-muted bg-surface-alt border border-border-light px-3 py-1 rounded-full">
                  {job.location}
                </span>
              </div>

              <h3 className="font-playfair text-lg font-semibold text-ink">
                {job.title}
              </h3>
              <p className="body-text text-sm leading-7 flex-1">{job.desc}</p>

              <button className="text-royal text-sm font-semibold tracking-wide uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-200 w-fit mt-1">
                Apply Now →
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-border-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="body-text text-sm max-w-md text-center sm:text-left">
            Don't see a role that fits? Send us your profile — we'd love to hear from passionate people.
          </p>
          <Button variant="primary" size="large" className="flex-shrink-0">
            View All Careers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringSection;