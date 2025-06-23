import Button from "../atoms/Button";
import FloatingChessPieces from "../molecules/FloatingChessPieces";

const AboutHero = () => {
  return (
    <section className="section-wrapper flex flex-col md:flex-row items-center justify-between max-sm:px-5">
      <div className=" space-y-5">
        <h1 className="heading-text">Unlock Your Potential</h1>
        <p className="body-text">
          Join our Chess Academy to enhance your skills and become a master strategist in this game.
        </p>
        <div className="flex gap-4 mt-6">
          <Button variant="primary" size="medium" >
            Join
          </Button>
          <Button variant="secondary" size="medium">
            Learn More
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <FloatingChessPieces />
      </div>
    </section>
  );
};

export default AboutHero;
