import React from 'react'
import ContactInfo from '../organisms/ContactInfo'
import ContactForm from '../organisms/ContactForm'
import CTASection from '../organisms/CTASection'

const ContactPageTemplate = () => {
  return (
    <main className="bg-background-dark text-white min-h-screen px-6 max-sm:py-0 py-12 font-poppins">
      <ContactInfo />
      <CTASection />
    </main>
  )
}

export default ContactPageTemplate
