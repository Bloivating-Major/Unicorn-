import { Gamepad2, Laptop2, Users2, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: <Gamepad2 className="w-8 h-8 text-yellow-400" />,
    title: "Join Exciting Tournaments",
    description: "Showcase your skills on the board in thrilling matches against peers.",
    cta: "Learn",
  },
  {
    icon: <Laptop2 className="w-8 h-8 text-yellow-400" />,
    title: "Interactive Online Sessions",
    description: "Get coaching tailored to your skill level, no matter where you are.",
    cta: "Join",
  },
  {
    icon: <Users2 className="w-8 h-8 text-yellow-400" />,
    title: "Build Community & Friendship",
    description: "Make lasting connections through our regular academy events.",
    cta: "Connect",
  },
];

const ProgramsOverview = () => {
  return (
    <section className="section-wrapper max-sm:px-5">
      <div className="text-center mb-12">
        <h2 className="heading-text">Unlock Your Potential</h2>
        <p className="sub-heading-text">
          With Our Comprehensive Chess Coaching Programs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {programs.map((item, index) => (
          <div key={index} className="bg-[#1f1f1f] p-6 rounded-xl shadow-md hover:shadow-xl transition">
            {item.icon}
            <h3 className="sub-heading-text mt-4">{item.title}</h3>
            <p className="body-text mt-2">{item.description}</p>
            <button className="mt-4 text-yellow-300 hover:text-purple-100 transition flex items-center gap-1">
              {item.cta} <ArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsOverview;
