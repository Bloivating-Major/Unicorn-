import FloatingChessPieces from "../molecules/FloatingChessPieces";

const AboutHero = () => {
  return (
    <section className="container mx-auto bg-background-dark text-white px-6 py-20 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-xl">
      <div className="max-w-xl space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold">Unlock Your Potential</h1>
        <p className="text-lg">
          Join our Chess Academy to enhance your skills and become a master strategist in this game.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-indigo-200 text-black px-6 py-2 rounded-md font-semibold shadow hover:opacity-90 transition">
            Join
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold shadow hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <FloatingChessPieces />
      </div>
    </section>
  );
};

export default AboutHero;
