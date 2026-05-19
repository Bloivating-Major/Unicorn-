import { aboutHero } from "../../assets/images";

const MissionIntro = () => {
  return (
    <section className="bg-surface-alt border-y border-border-light section-wrapper">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

        {/* Text */}
        <div className="flex-1 space-y-6">
          <span className="eyebrow-text block">Our Mission</span>
          <h2 className="heading-text">
            Founded in 2012, dedicated to{" "}
            <em className="italic text-royal">nurturing chess talent</em>
          </h2>
          <p className="body-text leading-8">
            Ms. Savita Shrivastava and Mr. Ravi Shrivastava — a passionate wife-husband
            duo — took the first bold step toward a vision they shared for the future
            of chess in their community. What started as a dream has grown into one of
            Madhya Pradesh's most respected chess academies.
          </p>

          {/* Founders stat strip */}
          <div className="flex gap-8 pt-4">
            {[
              { num: "2012", label: "Founded" },
              { num: "2",    label: "Visionary Founders" },
              { num: "MP",   label: "Madhya Pradesh" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-playfair text-2xl font-bold text-royal">{s.num}</p>
                <p className="text-xs text-ink-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <div className="relative rounded-2xl overflow-hidden border border-border-light shadow-card-lg">
            <img
              src={aboutHero}
              alt="Unicorn Chess Academy founders"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;