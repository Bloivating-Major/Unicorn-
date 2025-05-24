import React from 'react'
import ContactInfo from '../organisms/ContactInfo'
import ContactForm from '../organisms/ContactForm'
import CTASection from '../organisms/CTASection'

const ContactPageTemplate = () => {
  return (
    <main className="bg-background-dark text-white min-h-screen px-6 py-12 font-poppins">
      <ContactInfo />
      <ContactForm />
      <CTASection />
    </main>
  )
}

export default ContactPageTemplate
