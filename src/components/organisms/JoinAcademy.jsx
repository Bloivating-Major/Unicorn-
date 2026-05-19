import Button from "../atoms/Button";
import { aboutUsPage } from "../../assets/images";

const JoinAcademyCTA = () => {
  return (
    <section className="bg-white border-y border-border-light section-wrapper">
      <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">

        {/* Text */}
        <div className="flex flex-col gap-5 order-2 lg:order-1 text-center lg:text-left">
          <span className="eyebrow-text">Join Us</span>
          <h2 className="heading-text">
            Unlock your potential —{" "}
            <em className="italic text-royal">
              join our Chess Academy
            </em>{" "}
            community today
          </h2>
          <p className="body-text">
            As part of our vibrant academy, you'll gain access to expert coaching,
            exclusive tournaments, and a strong support system. Start your journey
            toward chess mastery today.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
            <Button variant="primary" size="large">Join Now</Button>
            <Button variant="secondary" size="large">Learn More</Button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="relative rounded-2xl overflow-hidden border border-border-light shadow-card-lg">
            <img
              src={aboutUsPage}
              alt="Students at Unicorn Chess Academy"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinAcademyCTA;