import Button from "../atoms/Button";

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
    <section className="bg-dark-2 border-y border-gold/10 section-wrapper">
      <div className="space-y-12">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="eyebrow-text block mb-3">We're Hiring</span>
            <h2 className="heading-text max-w-xl">
              Shape the future of{" "}
              <em className="italic text-gold-light">chess education</em>
            </h2>
          </div>
          <p className="body-text max-w-sm text-sm lg:text-right">
            Do you have a passion for chess and mentoring? We're always looking for
            talented, motivated individuals to join our growing team.
          </p>
        </div>

        {/* Job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {openings.map((job, i) => (
            <div key={i} className="group premium-card p-6 flex flex-col gap-4">
              {/* Badges */}
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-semibold tracking-wide uppercase bg-gold/10 border border-gold/25 text-gold px-3 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="text-xs font-medium text-ivory-dim bg-dark-3 border border-gold/10 px-3 py-1 rounded-full">
                  {job.location}
                </span>
              </div>

              <h3 className="font-playfair text-lg font-semibold text-ivory">
                {job.title}
              </h3>
              <p className="body-text text-sm leading-7 flex-1">{job.desc}</p>

              <button className="text-gold text-sm font-semibold tracking-wide uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-200 w-fit mt-1">
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-gold/10">
          <p className="body-text text-sm max-w-md text-center sm:text-left">
            Don't see a role that fits? Send us your profile — we'd love to hear from passionate people.
          </p>
          <Button variant="primary" size="large" className="flex-shrink-0">
            View All Careers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;