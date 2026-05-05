import Button from "../atoms/Button";
import FloatingChessPieces from "../molecules/FloatingChessPieces";

const AboutHero = () => {
  return (
    <section className="relative bg-obsidian overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 board-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(201,168,76,0.07),transparent_70%)] pointer-events-none" />

      <div className="section-wrapper relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[70vh]">

        {/* Left copy */}
        <div className="flex-1 text-center lg:text-left">
          <span className="eyebrow-text block mb-4 animate-fade-up">Our Story</span>

          <h1 className="heading-text mb-5 animate-fade-up delay-100">
            Unicorn{" "}
            <em className="italic text-gold-light">Chess Academy</em>
          </h1>

          <p className="body-text max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up delay-200">
            A leading institution dedicated to chess excellence and mental wellness
            for all ages — from curious beginners to competitive champions.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up delay-300">
            <Button variant="primary" size="large">Join the Academy</Button>
            <Button variant="secondary" size="large">Learn More</Button>
          </div>
        </div>

        {/* Right — floating pieces */}
        <div className="flex-1 w-full max-w-lg animate-fade-up delay-200">
          <FloatingChessPieces />
        </div>
      </div>

      <div className="gold-divider" />
    </section>
  );
};

export default AboutHero;