import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";
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
          value="+91 97131 09488"
          href="tel:9713109488"
        />
        <ContactCard
          icon={MessageCircle}
          title="WhatsApp"
          value="+91 73892 09576"
          href="https://wa.me/917389209576"
        />
        <ContactCard
          icon={Mail}
          title="Email"
          value="unicornnchessacademy21@gmail.com"
          href="mailto:unicornnchessacademy21@gmail.com"
        />
        <ContactCard
          icon={Instagram}
          title="Instagram"
          value="@unicorn_chess_academy"
          href="https://www.instagram.com/unicorn_chess_academy/"
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
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="https://www.instagram.com/unicorn_chess_academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-alt border border-border-light text-ink-light text-sm hover:border-royal/25 hover:text-royal transition-all duration-200"
        >
          <Instagram size={16} />
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@UnicornChessAcadamy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-alt border border-border-light text-ink-light text-sm hover:border-royal/25 hover:text-royal transition-all duration-200"
        >
          <Youtube size={16} />
          YouTube
        </a>
        <a
          href="https://chat.whatsapp.com/Eq3e80MewtWER9ecUJ4Hj9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm hover:bg-green-100 transition-all duration-200"
        >
          <MessageCircle size={16} />
          Join WhatsApp Community
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;