import { Gamepad2, Laptop2, Users2, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Gamepad2,
    title: "Join Exciting Tournaments",
    description:
      "Showcase your skills on the board in thrilling matches against peers from across the region.",
    cta: "Learn more",
  },
  {
    icon: Laptop2,
    title: "Interactive Online Sessions",
    description:
      "Get coaching tailored to your skill level, no matter where you are. Learn from home, grow fast.",
    cta: "Join a class",
  },
  {
    icon: Users2,
    title: "Build Community & Friendship",
    description:
      "Make lasting connections through our regular academy events, camps, and chess meetups.",
    cta: "Connect",
  },
];

const ProgramsOverview = () => {
  return (
    <section className="bg-obsidian section-wrapper">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="eyebrow-text block mb-3">Programs</span>
        <h2 className="heading-text mb-4">
          Structured paths to{" "}
          <em className="italic text-gold-light">mastery</em>
        </h2>
        <p className="body-text">
          Our comprehensive coaching programs are designed to take you from your
          first move all the way to competitive play.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group premium-card p-7 flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold/15">
                <Icon size={22} />
              </div>

              {/* Text */}
              <h3 className="font-playfair text-xl font-semibold text-ivory leading-snug">
                {item.title}
              </h3>
              <p className="body-text text-sm flex-1">{item.description}</p>

              {/* CTA */}
              <button className="flex items-center gap-2 text-gold text-sm font-semibold tracking-wide uppercase group-hover:gap-3 transition-all duration-200 w-fit">
                {item.cta} <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgramsOverview;