import React from "react";
import Navigation from "../organisms/Navigation";
import HeroSection from "../organisms/HeroSection";
import FeaturesSection from "../organisms/FeaturesSection";
import TestimonialsSection from "../organisms/TestimonialsSection";
import CTASection from "../organisms/CTASection";
import JoinSection from "../organisms/JoinSection";
import Footer from "../organisms/Footer";

const HomePageTemplate = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background-dark font-poppins">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <JoinSection />
    </main>
  );
};

export default HomePageTemplate;