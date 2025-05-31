import Button from "../atoms/Button";

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
          <p className="text-gray-300 mt-4">
            As a part of our vibrant academy, you&apos;ll gain access to expert
            coaching, exclusive tournaments, and a strong support system. Start
            your journey toward chess mastery today.
          </p>

          <div className="mt-6 flex gap-4">
            <Button variant="primary" size="large">
              Join Now
            </Button>
            <Button variant="secondary" size="large">
              Learn More
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <div className=" rounded-md overflow-hidden  ">
          <img
            src="/src/assets/images/aboutUsPage.webp"
            alt="Bobby Fischer"
            className="rounded-md"
          />
        </div>{" "}
        {/* Placeholder for image */}
      </div>
    </section>
  );
};

export default JoinAcademyCTA;
