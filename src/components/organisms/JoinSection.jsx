const JoinSection = () => {
  return (
    <section className="relative bg-obsidian overflow-hidden">
      <div className="absolute inset-0 board-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_40%_50%,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none" />

      <div className="section-wrapper relative z-10 pt-20 pb-16">
        <span className="eyebrow-text block mb-4 animate-fade-up">Careers</span>
        <h1 className="heading-text text-4xl sm:text-5xl max-w-2xl mb-5 animate-fade-up delay-100">
          Join Our{" "}
          <em className="italic text-gold-light">Academy</em>
        </h1>
        <p className="body-text max-w-xl text-base leading-8 animate-fade-up delay-200">
          Unlock your potential and master the game of chess — or help others do
          the same. We're building a community of champions, coaches, and creators.
        </p>
      </div>

      <div className="gold-divider" />
    </section>
  );
};

export default JoinSection;