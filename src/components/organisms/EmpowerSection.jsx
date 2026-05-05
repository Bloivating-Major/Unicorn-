import { Brain, Users, GraduationCap } from "lucide-react";
import Button from "../atoms/Button";

const benefits = [
  {
    icon: Brain,
    title: "Professional Growth Through Chess",
    desc: "Enhance your strategic thinking and problem-solving abilities that extend far beyond the board.",
  },
  {
    icon: Users,
    title: "A Supportive Community",
    desc: "Connect with fellow players, mentors, and enthusiasts who share your passion for the game.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship from Expert Coaches",
    desc: "Receive guidance from experienced coaches who genuinely care about your growth and success.",
  },
];

const EmpowerSection = () => {
  return (
    <section className="bg-dark-2 border-y border-gold/10 section-wrapper">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow-text block mb-3">Empower</span>
            <h2 className="heading-text">
              Unlock your potential with{" "}
              <em className="italic text-gold-light">Chess Mastery</em>
            </h2>
          </div>
          <p className="body-text max-w-sm text-sm lg:text-right">
            Join our academy to experience unparalleled growth in chess — and in life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="group premium-card p-7 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/15 transition-all duration-200">
                  <Icon size={20} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-ivory leading-snug">
                  {b.title}
                </h3>
                <p className="body-text text-sm leading-7">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div>
          <Button variant="primary" size="large">Join Our Academy</Button>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;