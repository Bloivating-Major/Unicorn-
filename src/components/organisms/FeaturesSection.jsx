import React from "react";
import FeatureCard from "../molecules/FeatureCard";
import { features } from "../../lib/constants/features";

const FeaturesSection = () => {

  return (
    <section className="bg-background-dark text-white py-16 md:px-14 px-8 md:h-[668px]">
      <div className="container mx-auto">
        <h2 className="md:text-5xl  text-4xl md:w-3/5 mx-auto text-center mb-12">
          Unlock Your Child's Potential with Our Expert Chess Coaching
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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