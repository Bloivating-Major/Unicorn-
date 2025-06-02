import JoinSection from '../organisms/JoinSection'
import OpportunitiesSection from '../organisms/OpportunitiesSection'
import EmpowerSection from '../organisms/EmpowerSection'
import TeamSection from '../organisms/TeamSection'
import HiringSection from '../organisms/HiringSection'
import GetInTouchForm from '../organisms/GetInTouch'
import CTASection from '../organisms/CTASection'

const CarrerPageTemplate = () => {
  return (
    <main className="bg-background-dark text-white min-h-screen py-12 font-poppins">
        <JoinSection />
        <OpportunitiesSection />
        <EmpowerSection />
        <TeamSection />
        <HiringSection />
        <GetInTouchForm />
        <CTASection />
    </main>
  )
}

export default CarrerPageTemplate
