import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";
import ContactCard from "../molecules/ContactCard";

const ContactDetails = () => {
  return (
    <div>
      <p className="text-sm text-gray-400 mb-2">Contact</p>
      <h2 className="text-3xl font-semibold font-rubik mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-10">We'd love to hear from you!</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
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
            title=""
            value="unicornchessacademy21@gmail.com"
            href="mailto:unicornchessacademy21@gmail.com"
          />
          <ContactCard
            icon={Mail}
            title=""
            value="support@unicornchessacademy.com"
            href="mailto:support@unicornchessacademy.com"
          />
        </div>
        <div className="space-y-6 ">
          <ContactCard
            icon={MapPin}
            title="Address"
            value="Regal Treasure, 4th Floor, 7FF7+8V8 Regal Treasure Building, Ayodhya Bypass Rd, near Minal Gate, Bhawanidham Phase-1, Narela Shankri, Ayodhya Nagar, Bhopal, Madhya Pradesh 462041"
          />
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/unicorn_chess_academy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition"
            >
              <Instagram className="w-8 h-8 text-pink-500" />
            </a>
            <a
              href="https://www.youtube.com/@UnicornChessAcadamy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:scale-110 transition"
            >
              <Youtube className="w-8 h-8 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;