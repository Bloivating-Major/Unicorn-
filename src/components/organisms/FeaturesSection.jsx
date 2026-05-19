import React from "react";
import FeatureCard from "../molecules/FeatureCard";
import { features } from "../../lib/constants/features";

const FeaturesSection = () => {
  return (
    <section className="bg-surface-alt section-wrapper">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow-text block mb-3">Why Unicorn</span>
          <h2 className="heading-text mb-4">
            Coaching built for{" "}
            <em className="italic text-royal">every level</em>
          </h2>
          <p className="body-text">
            We combine world-class pedagogy with a passionate community to
            transform how you think, play, and compete on the board.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              iconUrl={feature.iconUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;