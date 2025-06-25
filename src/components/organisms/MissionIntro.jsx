const MissionIntro = () => {
  return (
    <section className="section-wrapper flex flex-col-reverse md:flex-row items-center gap-10 max-sm:px-5">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="heading-text">
          Founded in 2023, our academy is dedicated to nurturing chess talent.
        </h2>
        <p className="body-text">
          Our Chess Academy was established to provide an exceptional curriculum
          for students worldwide. We focus on personalized instruction, community engagement,
          and nurturing passion for the long-term.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-full md:w-[600px] max-w-full rounded-md overflow-hidden">
          <img
            src="/src/assets/images/bobby600x640.webp"
            alt="Bobby Fischer"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;
