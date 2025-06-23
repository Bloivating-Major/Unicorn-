import HeroSection from "../organisms/HeroSection";
import FeaturesSection from "../organisms/FeaturesSection";
import TestimonialsSection from "../organisms/TestimonialsSection";
import CTASection from "../organisms/CTASection";
import JoinSection from "../organisms/JoinSection";

const HomePageTemplate = () => {
  return (
    <main className="flex flex-col bg-background-dark font-poppins">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <JoinSection />
    </main>
  );
};

export default HomePageTemplate;