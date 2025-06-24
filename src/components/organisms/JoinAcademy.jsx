import Button from "../atoms/Button";

const JoinAcademyCTA = () => {
  return (
    <section className="section-wrapper max-sm:px-5">
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="flex flex-col gap-3">
          <h2 className="heading-text">
            Unlock Your Potential: <br />
            Join Our Chess Academy Community Today!
          </h2>
          <p className="body-text">
            As a part of our vibrant academy, you&apos;ll gain access to expert
            coaching, exclusive tournaments, and a strong support system. Start
            your journey toward chess mastery today.
          </p>

          <div className="flex gap-4">
            <Button variant="primary" size="medium">
              Join Now
            </Button>
            <Button variant="secondary" size="medium">
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
