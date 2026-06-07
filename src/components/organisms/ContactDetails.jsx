import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";
import ContactCard from "../molecules/ContactCard";
import {
  fadeUp,
  staggerContainer,
  fadeUpItem,
  viewportOnce,
} from "../../lib/animations";

const ContactDetails = () => {
  return (
    <div className="space-y-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="eyebrow-text block mb-3">Contact</span>
        <h2 className="heading-text mb-3">Get in Touch</h2>
        <p className="body-text">We'd love to hear from you — reach out any time.</p>
      </motion.div>

      {/* Contact items */}
      <motion.div
        className="grid sm:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUpItem}>
          <ContactCard
            icon={Phone}
            title="Aditi Shrivastava"
            value="+91 97131 09488"
            href="tel:9713109488"
          />
        </motion.div>
        <motion.div variants={fadeUpItem}>
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            value="+91 73892 09576"
            href="https://wa.me/917389209576"
          />
        </motion.div>
        <motion.div variants={fadeUpItem}>
          <ContactCard
            icon={Mail}
            title="Email"
            value="unicornnchessacademy21@gmail.com"
            href="mailto:unicornnchessacademy21@gmail.com"
          />
        </motion.div>
        <motion.div variants={fadeUpItem}>
          <ContactCard
            icon={Instagram}
            title="Instagram"
            value="@unicorn_chess_academy"
            href="https://www.instagram.com/unicorn_chess_academy/"
          />
        </motion.div>
        <motion.div variants={fadeUpItem} className="sm:col-span-2">
          <ContactCard
            icon={MapPin}
            title="Address"
            value="Regal Treasure, 4th Floor, Ayodhya Bypass Rd, Bhawanidham Phase-1, Bhopal, Madhya Pradesh 462041"
          />
        </motion.div>
      </motion.div>

      {/* Social */}
      <motion.div
        className="flex flex-wrap gap-3 pt-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {[
          {
            href: "https://www.instagram.com/unicorn_chess_academy/",
            Icon: Instagram,
            label: "Instagram",
            className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-alt border border-border-light text-ink-light text-sm hover:border-royal/25 hover:text-royal transition-all duration-200",
          },
          {
            href: "https://www.youtube.com/@UnicornChessAcadamy",
            Icon: Youtube,
            label: "YouTube",
            className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-alt border border-border-light text-ink-light text-sm hover:border-royal/25 hover:text-royal transition-all duration-200",
          },
          {
            href: "https://chat.whatsapp.com/Eq3e80MewtWER9ecUJ4Hj9",
            Icon: MessageCircle,
            label: "Join WhatsApp Community",
            className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm hover:bg-green-100 transition-all duration-200",
          },
        ].map(({ href, Icon, label, className }) => (
          <motion.a
            key={label}
            variants={fadeUpItem}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            <Icon size={16} />
            {label}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactDetails;