import Button from "../atoms/Button";

const OpportunitiesSection = () => {
  return (
    <section className="bg-surface-alt border-y border-border-light section-wrapper">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Text */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <span className="eyebrow-text block mb-4">Opportunities</span>
          <h2 className="heading-text mb-5">
            Unlock opportunities for passionate{" "}
            <em className="italic text-royal">chess coaches</em>{" "}
            and trainers
          </h2>
          <p className="body-text leading-8 max-w-lg mx-auto lg:mx-0 mb-8">
            Join our vibrant community of chess educators and elevate your coaching
            career. We offer workshops, competitive events, and a platform designed
            to help you connect with aspiring players across India.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button variant="primary" size="large">Join as Coach</Button>
            <Button variant="secondary" size="large">Learn More</Button>
          </div>
        </div>

        {/* Decorative */}
        <div className="flex-1 order-1 lg:order-2 w-full">
          <div className="relative rounded-2xl overflow-hidden border border-border-light shadow-card-lg bg-royal-50 h-72 sm:h-80 lg:h-96 flex items-center justify-center">
            <span className="text-[120px] text-royal/10 font-serif select-none">♞</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;