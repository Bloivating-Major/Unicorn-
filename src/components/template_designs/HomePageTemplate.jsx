import HeroSection         from "../organisms/HeroSection";
import FeaturesSection     from "../organisms/FeaturesSection";
import TestimonialSection  from "../organisms/TestimonialsSection";
import CTASection          from "../organisms/CTASection";
import PricingPlans        from "../organisms/PricingPlans";
import FAQs                from "../organisms/FAQs";

const HomePageTemplate = () => {
  return (
    <main className="bg-obsidian font-poppins">
      <HeroSection />
      <FeaturesSection />

      {/* Stats / Trust bar */}
      <div className="bg-dark-2 border-y border-gold/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-2 sm:grid-cols-4 divide-x divide-gold/10">
          {[
            { num: "500+",  label: "Students Trained"      },
            { num: "12+",   label: "Years of Excellence"   },
            { num: "50+",   label: "Tournament Wins"       },
            { num: "98%",   label: "Satisfaction Rate"     },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center py-8 px-4 gap-1">
              <span className="font-playfair text-3xl font-bold text-gold-light">
                {s.num}
              </span>
              <span className="text-xs text-ivory-dim text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <TestimonialSection />
      <PricingPlans />
      <FAQs />
      <CTASection />
    </main>
  );
};

export default HomePageTemplate;