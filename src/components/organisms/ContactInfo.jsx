import ContactMap from "../molecules/ContactMap";
import ContactDetails from "./ContactDetails";

const ContactInfo = () => {
  return (
    <section className="bg-obsidian section-wrapper">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <ContactDetails />
        <ContactMap />
      </div>
    </section>
  );
};

export default ContactInfo;