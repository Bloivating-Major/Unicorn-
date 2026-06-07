import { motion } from "framer-motion";
import NavLink from "../atoms/NavLink";
import { UnicornLogo } from "../../assets/images";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { staggerContainer, fadeUpItem, viewportOnce } from "../../lib/animations";

const footerLinks = [
  {
    title: "Academy",
    links: [
      { label: "About Us",       href: "/about" },
      { label: "Our Coaches",    href: "#" },
      { label: "Gallery",        href: "/gallery" },
      { label: "Testimonials",   href: "#" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Beginner Classes",   href: "#" },
      { label: "Intermediate",       href: "#" },
      { label: "Advanced",           href: "#" },
      { label: "Online Classes",     href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us",       href: "/contact" },
      { label: "Student Portal",   href: "#" },
      { label: "Blog",             href: "#" },
      { label: "Careers",          href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-surface-alt border-t border-border-light font-sans">
      {/* Main footer grid */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-16 pt-16 pb-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <motion.div variants={fadeUpItem} className="lg:col-span-1">
            <NavLink href="/" className="inline-flex items-center gap-3 after:hidden mb-4">
                <div>
                  <img src={UnicornLogo} alt="Unicorn Chess Logo" className="w-14 h-14 rounded-lg bg-gradient-to-br from-royal-light to-royal flex items-center justify-center text-white text-lg font-bold shadow-brand-sm" />
                </div>
            </NavLink>
            <p className="text-ink-muted text-sm leading-7 mt-4 max-w-xs">
              A leading institution dedicated to chess excellence and mental
              wellness, founded in 2012 in Bhopal, Madhya Pradesh.
            </p>

            {/* Contact quick info */}
            <div className="mt-5 space-y-1.5">
              <a href="tel:7389209576" className="block text-xs text-ink-muted hover:text-royal transition-colors">
                📞 +91 73892 09576
              </a>
              <a href="mailto:unicornnchessacademy21@gmail.com" className="block text-xs text-ink-muted hover:text-royal transition-colors">
                ✉ unicornnchessacademy21@gmail.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/unicorn_chess_academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white border border-border-light flex items-center justify-center text-ink-muted hover:text-royal hover:border-royal/25 transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@UnicornChessAcadamy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white border border-border-light flex items-center justify-center text-ink-muted hover:text-royal hover:border-royal/25 transition-all duration-200"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://chat.whatsapp.com/Eq3e80MewtWER9ecUJ4Hj9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="w-9 h-9 rounded-lg bg-white border border-border-light flex items-center justify-center text-ink-muted hover:text-green-600 hover:border-green-200 transition-all duration-200"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </motion.div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <motion.div key={col.title} variants={fadeUpItem}>
              <h4 className="eyebrow-text mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <NavLink href={link.href} className="text-sm">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-border-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Unicorn Chess Academy. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <NavLink key={item} href="#" className="text-xs hover:text-royal">
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;