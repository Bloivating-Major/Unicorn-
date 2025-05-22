
const JoinAcademyCTA = () => {
  return (
    <section className="container mx-auto bg-background-dark text-white px-6 py-20 md:px-20 lg:px-32">
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Unlock Your Potential: <br />
            Join Our Chess Academy Community Today!
          </h2>
          <p className="text-gray-400 mt-4">
            As a part of our vibrant academy, you&apos;ll gain access to expert coaching,
            exclusive tournaments, and a strong support system. Start your journey
            toward chess mastery today.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-full shadow-md transition">
              Join Now
            </button>
            <button className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white px-6 py-2 rounded-full transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-[300px] bg-gray-800 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Image Here</span>
        </div>
      </div>
    </section>
  );
};

export default JoinAcademyCTA;
