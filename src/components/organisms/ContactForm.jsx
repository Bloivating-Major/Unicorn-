import ContactFormFields from "../molecules/ContactFormFields";
import ContactMap from "../molecules/ContactMap";

const ContactForm = () => {
  return (
    <section className="bg-dark-2 border-t border-gold/10 section-wrapper">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Form side */}
        <div>
          <span className="eyebrow-text block mb-3">Connect</span>
          <h2 className="heading-text mb-3">Send us a message</h2>
          <p className="body-text mb-8 text-sm">
            We're here to answer your questions and help you start your chess journey.
          </p>
          <ContactFormFields />
        </div>

        {/* Map side */}
        <div className="flex flex-col justify-center">
          <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;