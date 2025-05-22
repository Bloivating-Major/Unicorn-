const MissionIntro = () => {
  return (
    <section className="container mx-auto  px-6 py-20 md:px-20 lg:px-32 bg-background-dark text-white flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Founded in 2023, our academy is dedicated to nurturing chess talent.
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Our Chess Academy was established to provide an exceptional curriculum
          for students worldwide. We focus on personalized instruction, community engagement,
          and nurturing passion for the long-term.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/mission-intro-placeholder.png"
          alt="Academy Vision"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </section>
  );
};

export default MissionIntro;
