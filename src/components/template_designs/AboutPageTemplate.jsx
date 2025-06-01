import React from 'react'
import AboutHero from '../organisms/AboutHero'
import MissionIntro from '../organisms/MissionIntro'
import ProgramsOverview from '../organisms/ProgramsOverview'
import JoinAcademyCTA from '../organisms/JoinAcademy'
import TestimonialSection from '../organisms/TestimonialsSection'
import FAQs from '../organisms/FAQs'
import PricingPlans from '../organisms/PricingPlans'
import CTASection from '../organisms/CTASection'

const AboutPageTemplate = () => {
  return (
    <main className=" bg-background-dark text-white min-h-screen font-poppins">
        <AboutHero />
        <MissionIntro />
        <ProgramsOverview />
        <JoinAcademyCTA />
        <TestimonialSection />
        <FAQs />
        <PricingPlans />
        <CTASection />
    </main>
  )
}

export default AboutPageTemplate
