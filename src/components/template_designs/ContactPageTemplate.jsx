import ContactInfo  from "../organisms/ContactInfo";
import ContactForm   from "../organisms/ContactForm";
import CTASection    from "../organisms/CTASection";

const ContactPageTemplate = () => {
  return (
    <main className="bg-obsidian font-poppins">
      <ContactInfo />
      <ContactForm />
      <CTASection />
    </main>
  );
};

export default ContactPageTemplate;