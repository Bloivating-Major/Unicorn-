import ContactMap from "../molecules/ContactMap";
import ContactDetails from "./ContactDetails";

const ContactInfo = () => {
  return (
    <main className="bg-background-dark text-white max-sm:px-2 px-6 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <ContactDetails />
        <ContactMap />
      </div>
    </main>
  );
};

export default ContactInfo;
