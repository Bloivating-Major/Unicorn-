import { Mail, Phone, MapPin } from "lucide-react";
import ContactCard from "../molecules/ContactCard";

const ContactDetails = () => {
  return (
    <div>
      <p className="text-sm text-gray-400 mb-2">Contact</p>
      <h2 className="text-3xl font-semibold font-rubik mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-10">We'd love to hear from you!</p>

      <div className="space-y-8">
        <ContactCard
          icon={Mail}
          title="Email"
          description="Reach us at"
          value="info@chessacademy.com"
          href="mailto:info@chessacademy.com"
        />
        <ContactCard
          icon={Phone}
          title="Phone"
          description="Call us at"
          value="+1 (555) 123-4567"
          href="tel:+15551234567"
        />
        <ContactCard
          icon={MapPin}
          title="Office"
          value="456 Chess Lane, Sydney NSW 2000 AU"
        />
      </div>
    </div>
  );
};

export default ContactDetails;
