import React from "react";
import Button from "../atoms/Button";

const CTASection = () => {
  return (
    <section className="section-wrapper">
      <div className="relative bg-gradient-to-br from-gold/10 to-gold/4 border border-gold/25 rounded-3xl px-8 sm:px-12 lg:px-16 py-14 lg:py-20 overflow-hidden">
        {/* Giant queen watermark */}
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[200px] leading-none text-gold/4 font-serif pointer-events-none select-none hidden lg:block">
          ♛
        </span>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <span className="eyebrow-text block mb-3">Ready to begin?</span>
            <h2 className="heading-text mb-4">
              Unlock your{" "}
              <em className="italic text-gold-light">chess potential</em>{" "}
              today
            </h2>
            <p className="body-text max-w-lg mx-auto lg:mx-0">
              Join Unicorn Chess Academy and gain access to world-class coaching,
              exclusive tournaments, and a thriving community of champions. Your
              first trial class is completely free.
            </p>
          </div>

          {/* Right — CTA buttons */}
          <div className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
            <Button variant="primary" size="large" className="w-full sm:w-auto justify-center">
              Join the Academy
            </Button>
            <Button variant="secondary" size="large" className="w-full sm:w-auto justify-center">
              Schedule a Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;