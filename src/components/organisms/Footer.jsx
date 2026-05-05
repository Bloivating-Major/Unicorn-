import NavLink from "../atoms/NavLink";
import { UnicornLogo } from "../../assets/images";
import { Instagram, Youtube } from "lucide-react";

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
    <footer className="bg-dark-2 border-t border-gold/10 font-poppins">
      {/* Main footer grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <NavLink href="/" className="inline-flex items-center gap-3 after:hidden mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold-gradient flex items-center justify-center text-obsidian font-bold text-base">
                ♞
              </div>
              <img src={UnicornLogo} alt="Unicorn Chess" className="h-9 w-auto" />
            </NavLink>
            <p className="text-ivory-dim text-sm leading-7 mt-4 max-w-xs">
              A leading institution dedicated to chess excellence and mental
              wellness, founded in 2012 in Bhopal, Madhya Pradesh.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/unicorn_chess_academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gold/8 border border-gold/20 flex items-center justify-center text-ivory-dim hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@UnicornChessAcadamy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-gold/8 border border-gold/20 flex items-center justify-center text-ivory-dim hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
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
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory-dim">
          <p>© {new Date().getFullYear()} Unicorn Chess Academy. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <NavLink key={item} href="#" className="text-xs hover:text-gold">
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