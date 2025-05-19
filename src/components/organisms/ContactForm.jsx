import ContactFormFields from "../molecules/ContactFormFields";
import ContactMap from "../molecules/ContactMap";

const ContactForm = () => {
  return (
    <section className="bg-background-dark text-white px-6 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-sm text-gray-400 mb-2">Connect</p>
          <h2 className="text-3xl font-semibold font-rubik mb-2">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            We're here to answer your questions and help you.
          </p>
          <ContactFormFields />
        </div>
        <ContactMap />
      </div>
    </section>
  );
};

export default ContactForm;
