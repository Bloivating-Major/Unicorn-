import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";
import ContactCard from "../molecules/ContactCard";

const ContactDetails = () => {
  return (
    <div className="space-y-8">
      <div>
        <span className="eyebrow-text block mb-3">Contact</span>
        <h2 className="heading-text mb-3">Get in Touch</h2>
        <p className="body-text">We'd love to hear from you — reach out any time.</p>
      </div>

      {/* Contact items */}
      <div className="grid sm:grid-cols-2 gap-6">
        <ContactCard
          icon={Phone}
          title="Aditi Shrivastava"
          value="97131 09488"
          href="tel:9713109488"
        />
        <ContactCard
          icon={Phone}
          title="Anand"
          value="73892 09576"
          href="tel:7389209576"
        />
        <ContactCard
          icon={Mail}
          title="Email"
          value="unicornchessacademy21@gmail.com"
          href="mailto:unicornchessacademy21@gmail.com"
        />
        <ContactCard
          icon={Mail}
          title="Support"
          value="support@unicornchessacademy.com"
          href="mailto:support@unicornchessacademy.com"
        />
        <div className="sm:col-span-2">
          <ContactCard
            icon={MapPin}
            title="Address"
            value="Regal Treasure, 4th Floor, Ayodhya Bypass Rd, Bhawanidham Phase-1, Bhopal, Madhya Pradesh 462041"
          />
        </div>
      </div>

      {/* Social */}
      <div className="flex gap-4 pt-2">
        <a
          href="https://www.instagram.com/unicorn_chess_academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-3 border border-gold/15 text-ivory-dim text-sm hover:border-gold/35 hover:text-gold transition-all duration-200"
        >
          <Instagram size={16} />
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@UnicornChessAcadamy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-3 border border-gold/15 text-ivory-dim text-sm hover:border-gold/35 hover:text-gold transition-all duration-200"
        >
          <Youtube size={16} />
          YouTube
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;