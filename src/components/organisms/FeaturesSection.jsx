import React from "react";
import FeatureCard from "../molecules/FeatureCard";
import { features } from "../../lib/constants/features";

const FeaturesSection = () => {

  return (
    <section className="section-wrapper lg:py-16 lg:px-32 p-3">
      <div>
        <h2 className="heading-text md:w-3/5 text-center mx-auto mb-12">
          Unlock Your Child's Potential with Our Expert Chess Coaching
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              iconUrl={feature.iconUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;