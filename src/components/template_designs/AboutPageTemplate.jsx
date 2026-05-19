import AboutHero        from "../organisms/AboutHero";
import MissionIntro     from "../organisms/MissionIntro";
import ProgramsOverview from "../organisms/ProgramsOverview";
import CurriculumSection from "../organisms/CurriculumSection";
import JoinAcademyCTA   from "../organisms/JoinAcademy";
import TestimonialSection from "../organisms/TestimonialsSection";
import FAQs             from "../organisms/FAQs";
import PricingPlans     from "../organisms/PricingPlans";
import CTASection       from "../organisms/CTASection";

const AboutPageTemplate = () => {
  return (
    <main className="bg-white font-sans">
      <AboutHero />
      <MissionIntro />
      <ProgramsOverview />
      <CurriculumSection />
      <JoinAcademyCTA />
      <TestimonialSection />
      <FAQs />
      <PricingPlans />
      <CTASection />
    </main>
  );
};

export default AboutPageTemplate;