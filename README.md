# Chess Frontend - Complete Code Reference

---

## src/main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## src/App.jsx
```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/organisms/Navigation";
import Gallery from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/organisms/Footer";
import Contact from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CarrerPage from "./pages/CarrerPage";

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/gallery"  element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
```

---

## src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* index.css or global.css */
.custom-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #888;
  opacity: 0.5;
  border-radius: 9999px;
  transition: all 0.3s ease;
  margin-right: 6px;
}

.custom-pagination .swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}

/* Custom section wrapper class */
.section-wrapper {
  @apply container mx-auto bg-background-dark text-slate-300 lg:py-16 px-3 py-8 lg:px-32 font-poppins;
}

.heading-text {
  @apply text-3xl md:text-4xl font-semibold;
}

.sub-heading-text {
  @apply text-xl font-medium;
}

.body-text {
  @apply text-gray-400;
}
```

---

## src/styles/font.css
```css
@font-face {
  font-family: 'Poppins';
  src: url('/src/assets/fonts/poppins/Poppins-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  src: url('/src/assets/fonts/poppins/Poppins-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  src: url('/src/assets/fonts/poppins/Poppins-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

---

## src/assets/images/index.js
```js
import aboutHero from './aboutHero.jpg';
import aboutUsPage from './aboutUsPage.webp';
import blueKnight from './blueKnight.svg';
import bobby600x640 from './bobby600x640.webp';
import Knight from './Knight.svg';
import logoUnicorn from './logoUnicorn.png';
import pawn from './pawn.svg';
import Queen from './Queen.svg';
import react from './react.svg';
import rook from './rook.svg';
import UnicornLogo from './UnicornLogoWhite.png';

export {
  aboutHero,
  aboutUsPage,
  blueKnight,
  bobby600x640,
  Knight,
  logoUnicorn,
  pawn,
  Queen,
  react,
  rook,
  UnicornLogo
};
```

---

# Pages

## src/pages/HomePage.jsx
```jsx
import HomePageTemplate from "../components/template_designs/HomePageTemplate";

const HomePage = () => {
  return <HomePageTemplate />;
};

export default HomePage;
```

---

## src/pages/AboutPage.jsx
```jsx
import AboutPageTemplate from "../components/template_designs/AboutPageTemplate"

const AboutPage = () => {
  return <AboutPageTemplate />
}

export default AboutPage
```

---

## src/pages/GalleryPage.jsx
```jsx
import GalleryTemplate from "../components/template_designs/GalleryPageTemplate";

const Gallery = () => {
  return <GalleryTemplate />;
};

export default Gallery;
```

---

## src/pages/ContactPage.jsx
```jsx
import ContactPageTemplate from '../components/template_designs/ContactPageTemplate'

const ContactPage = () => {
  return <ContactPageTemplate />
}

export default ContactPage
```

---

## src/pages/CarrerPage.jsx
```jsx
import CarrerPageTemplate from '../components/template_designs/CarrerPageTemplate'

const CarrerPage = () => {
  return <CarrerPageTemplate />

}

export default CarrerPage
```

---

# Components - Atoms

## src/components/atoms/Button.jsx
```jsx
import React from "react";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "medium", 
  className = "", 
  ...props 
}) => {
  const baseStyles = "rounded-xl font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-blue-lighter text-black hover:bg-blue-lighter/80",
    secondary: "bg-neutral-lighter border border-white text-black hover:bg-neutral-lighter/80",
    white: "bg-white text-black hover:bg-gray-100"
  };
  
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-2"
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

---

## src/components/atoms/NavLink.jsx
```jsx
import { useNavigate } from "react-router-dom";

const NavLink = ({
  href = "#",
  children,
  className = "",
  onNavigate, // Pass a function to close the menu from parent
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    // Close the mobile menu (triggered from parent via prop)
    if (onNavigate) onNavigate();

    // Delay navigation slightly to let animation finish
    setTimeout(() => {
      navigate(href);
    }, 100); // Adjust delay based on your animation timing
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`hover:text-gray-300 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;
```

---

## src/components/atoms/DesktopNav.jsx
```jsx
import React from "react";
import NavLink from "./NavLink";
import Button from "./Button";
import { BiMenu, BiX, BiChevronDown } from "react-icons/bi";
import { FaChessKnight } from "react-icons/fa";
import { UnicornLogo } from "../../assets/images";
import { menuData } from "../../lib/constants/menuData";
import { useNavigate } from "react-router-dom";

const DesktopNav = ({ showMenu, setShowMenu, mobileNavOpen, setMobileNavOpen }) => {
  const navigate = useNavigate();

  // Close all menus on link click
  const closeAllMenus = () => {
    setShowMenu(false);
    setMobileNavOpen(false);
  };

  const toggleMobileNav = () => {
    setShowMenu(false); // Always close dropdown when opening mobile
    setMobileNavOpen((prev) => !prev);
  };

  const goToContact = () => {
    closeAllMenus();
    navigate("/contact");
  };

  return (
    <>
      <nav className="bg-background-dark text-white font-poppins shadow-md z-50 relative">
        <div className="container mx-auto flex justify-between items-center px-4 py-4 lg:px-8">
          {/* Logo + Mobile Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <NavLink
              href="/"
              onNavigate={closeAllMenus}
              className="text-lg font-semibold"
            >
              <img src={UnicornLogo} alt="Logo" className="h-16 w-auto mr-2" />
            </NavLink>

            <button
              aria-label="Toggle Menu"
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileNav}
            >
              {mobileNavOpen ? <BiX size={30} /> : <BiMenu size={30} />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink onNavigate={closeAllMenus} href="/about">
              About Us
            </NavLink>
            <NavLink onNavigate={closeAllMenus} href="/gallery">
              Gallery
            </NavLink>
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              Services
              <BiChevronDown
                className={`transform transition-transform ${
                  showMenu ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" size="large" onClick={goToContact}>
              Join Us
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
```

---

## src/components/atoms/MobileNav.jsx
```jsx
import React from "react";
import NavLink from "./NavLink";
import Button from "./Button";
import { BiChevronDown } from "react-icons/bi";
import { FaChessKnight } from "react-icons/fa";
import { menuData } from "../../lib/constants/menuData";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ showMenu, setShowMenu, mobileNavOpen, setMobileNavOpen }) => {
  const navigate = useNavigate();

  // Close all menus on link click
  const closeAllMenus = () => {
    setShowMenu(false);
    setMobileNavOpen(false);
  };

  const toggleMobileNav = () => {
    setShowMenu(false); // Always close dropdown when opening mobile
    setMobileNavOpen((prev) => !prev);
  };

  const goToContact = () => {
    closeAllMenus();
    navigate("/contact");
  };

  return (
    <>
      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div className="md:hidden flex flex-col text-white bg-background-dark px-4 py-4 space-y-3 z-40">
          <NavLink onNavigate={closeAllMenus} href="/about" block>
            About Us
          </NavLink>
          <NavLink onNavigate={closeAllMenus} href="/gallery" block>
            Gallery
          </NavLink>
          <div
            className="flex items-center justify-between text-white cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span>Services</span>
            <BiChevronDown
              className={`transition-transform ${
                showMenu ? "rotate-180" : "rotate-0"
              }`}
              size={30}
            />
          </div>
          <Button
            variant="primary"
            size="large"
            onClick={goToContact}
            className="rounded-xl"
          >
            Join Us
          </Button>
        </div>
      )}

      {/* Dropdown Menu (Join Us) */}
      {showMenu && (
        <div className="bg-background-dark text-white pt-8 z-40 relative">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 lg:px-8">
            {menuData.map((group, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
                <div className="space-y-2">
                  {group.items.map((item, itemIndex) => (
                    <NavLink
                      key={itemIndex}
                      href="#"
                      className="block hover:text-gray-300 transition-colors"
                      onNavigate={closeAllMenus}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-background-dull mt-6 py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 lg:px-8">
              <p className="text-sm">
                Ready to join us?
                <NavLink onNavigate={closeAllMenus}>
                  <span className="ml-2 border-b border-gray-400">
                    Sign up for free
                  </span>
                </NavLink>
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <FaChessKnight />
                  <NavLink
                    className="text-black font-medium"
                    onNavigate={closeAllMenus}
                  >
                    Join
                  </NavLink>
                </div>
                <div className="flex items-center gap-2">
                  <FaChessKnight />
                  <NavLink
                    className="text-black font-medium"
                    onNavigate={closeAllMenus}
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
```

---

# Components - Molecules

## src/components/molecules/ContactCard.jsx
```jsx
import { ArrowRight } from "lucide-react";

const ContactCard = ({ icon: Icon, title, description, value, href }) => {
  return (
    <div>
      <Icon className="w-6 h-6 mb-2" />
      <p className="font-semibold">{title}</p>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
      {href ? (
        <a href={href} className="text-blue-500 underline text-sm">
          {value}
        </a>
      ) : (
        <p className="text-gray-300 text-sm">{value}</p>
      )}
    </div>
  );
};

export default ContactCard;
```

---

## src/components/molecules/ContactFormFields.jsx
```jsx
import { useState } from "react";

const ContactFormFields = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });

    if (name === "terms" && checked) {
      setError(""); // clear error if terms checked
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      setError("You must agree to the terms before submitting.");
      return;
    }

    setError("");
    setFormData({
      name: "",
      email: "",
      reason: "",
      message: "",
      terms: false,
    });
    console.log("Form Submitted", formData);
    // Submit logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 rounded-md bg-background-dull text-white placeholder-gray-400"
          placeholder="Your name"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-3 rounded-md bg-background-dull text-white placeholder-gray-400"
          placeholder="you@example.com"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Reason for Contact</label>
        <select
          name="reason"
          className="w-full p-3 rounded-md bg-background-dull text-white"
          onChange={handleChange}
          value={formData.reason}
          required
        >
          <option value="">Select a reason</option>
          <option value="General Query">General Query</option>
          <option value="Support">Support</option>
          <option value="Join Academy">Join Academy</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          className="w-full p-3 rounded-md bg-background-dull text-white placeholder-gray-400"
          placeholder="Type your message..."
          onChange={handleChange}
          value={formData.message}
          required
        ></textarea>
      </div>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          name="terms"
          className="mt-1"
          onChange={handleChange}
          checked={formData.terms}
        />
        <label className="text-sm">
          I agree to the <span className="underline">Terms</span>
        </label>
      </div>

      {error && <p className="text-red-500 text-sm -mt-4">{error}</p>}

      <button
        type="submit"
        className="bg-blue-lighter text-black px-6 py-2 rounded-md font-medium shadow-md hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactFormFields;
```

---

## src/components/molecules/ContactMap.jsx
```jsx
const ContactMap = () => {
  return (
    <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
      <iframe
        title="Regal Treasure Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.168418949911!2d77.46197567477762!3d23.273329306925145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69f6cc935e83%3A0x7d78964600879b46!2sRegal%20Treasure!5e0!3m2!1sen!2sin!4v1757913591047!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
```

---

## src/components/molecules/FeatureCard.jsx
```jsx
import React from "react";
import Button from "../atoms/Button";

const FeatureCard = ({ title, description, buttonText, iconUrl }) => {
  return (
    <div className="text-center py-6">
      <div className="w-16 h-16  rounded-full mx-auto mb-4">
        {iconUrl && <img src={iconUrl} alt="" className="w-full h-full rounded-full object-cover" />}
      </div>
      <h3 className="sub-heading-text mb-5">{title}</h3>
      <p className="body-text">{description}</p>
      <Button variant="primary" size="medium" className="mt-4">{buttonText}</Button>
    </div>
  );
};

export default FeatureCard;
```

---

## src/components/molecules/FloatingChessPieces.jsx
```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Queen } from "../../assets/images";
import { rook } from "../../assets/images";
import { Knight } from "../../assets/images";
import { pawn } from "../../assets/images";

const pieces = [
  { src: Queen, delay: 0 },
  { src: rook, delay: 0.3 },
  { src: Knight, delay: 0.6 },
  { src: pawn, delay: 0.9 },
];

const FloatingChessPieces = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="w-full flex justify-center gap-6">
      {pieces.map((piece, idx) => (
        <motion.img
          key={idx}
          src={piece.src}
          alt={`chess-piece-${idx}`}
          className={`w-16 h-16 md:w-32 md:h-32 rounded-full cursor-pointer transition duration-300 ${
            hoveredIdx === idx
              ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] scale-110"
              : ""
          }`}
          initial={{ y: 50, opacity: 1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            delay: piece.delay,
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          onMouseEnter={() => setHoveredIdx(idx)}    // hover in
          onMouseLeave={() => setHoveredIdx(null)}   // hover out
          onClick={() => setHoveredIdx(idx)}         // tap for mobile
        />
      ))}
    </div>
  );
};

export default FloatingChessPieces;
```

---

## src/components/molecules/GalleryCard.jsx
```jsx
const GalleryCard = ({ imageSrc, alt }) => {
  return (
    <div className="aspect-[4/3] bg-gray-300 rounded-md flex items-center justify-center overflow-hidden">
      <img
        src={imageSrc}
        alt={alt}
        className="w-12 h-12 opacity-60 object-cover"
      />
    </div>
  );
};

export default GalleryCard;
```

---

## src/components/molecules/MenuGroup.jsx
```jsx
import React from "react";
import { FaChessKnight } from "react-icons/fa";

const MenuGroup = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="flex gap-2 ">
              <div className="p-1">
              <FaChessKnight />
              </div>
              <div>
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-sm text-gray-400 max-sm:hidden">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuGroup;
```

---

## src/components/molecules/TestimonialCard.jsx
```jsx
// components/molecules/TestimonialCard.jsx
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[#444] text-white p-10 rounded-lg shadow-lg flex flex-col gap-4 min-h-[250px]">
      <div className="text-yellow-400 text-2xl">★★★★★</div>
      <p className="text-base">"{testimonial.message}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="text-sm">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-gray-300">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
```

---

## src/components/molecules/TestimonialControls.jsx
```jsx
// components/molecules/TestimonialControls.jsx
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialControls = ({ prevRef, nextRef }) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      {/* Dots (Pagination) - Left */}
      <div className="custom-pagination flex space-x-2"></div>

      {/* Arrows (Navigation) - Right */}
      <div className="flex gap-3">
        <button
          ref={prevRef}
          className="bg-[#444] text-white w-10 h-10 rounded-md hover:bg-[#666] transition flex justify-center items-center"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="bg-[#444] text-white w-10 h-10 rounded-md hover:bg-[#666] transition flex justify-center items-center"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialControls;
```

---

## src/components/molecules/TestimonialSlider.jsx
```jsx
// components/molecules/TestimonialSlider.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../../lib/constants/testimonial";
import TestimonialCard from "./TestimonialCard";
import TestimonialControls from "./TestimonialControls";

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <TestimonialControls prevRef={prevRef} nextRef={nextRef} />
    </>
  );
};

export default TestimonialSlider;
```

---

# Components - Organisms

## src/components/organisms/Navigation.jsx
```jsx
import React, { useState } from "react";
import DesktopNav from "../atoms/DesktopNav";
import MobileNav from "../atoms/MobileNav";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <DesktopNav
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <MobileNav
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
    </>
  );
};

export default Navigation;
```

---

## src/components/organisms/HeroSection.jsx
```jsx
import Button from "../atoms/Button";
import { bobby600x640 } from "../../assets/images";

const HeroSection = () => {
  return (
  <section className="section-wrapper relative overflow-hidden">
  <div className=" flex flex-col md:flex-row relative z-20">
    
    {/* Left Section */}
    <div className="md:w-1/2 p-4 md:my-auto">
      <h1 className="heading-text max-w-xl mb-6">
        Unlock Your Chess Potential Today!
      </h1>
      <p className="max-w-lg mb-8 body-text">
        Join our vibrant community of chess enthusiasts and elevate your skills. 
        Whether you're a beginner or an advanced player, we provide the guidance 
        you need to succeed.
      </p>
      <div className="flex gap-4">
        <Button variant="primary" size="medium">Join</Button>
        <Button variant="secondary" size="medium">Learn More</Button>
      </div>
    </div>

    {/* Right Section */}
    <div className="md:w-1/2 px-4 py-10 flex items-center justify-center">
      <div className="w-full md:w-[600px] max-w-full rounded-md overflow-hidden">
        <img
          src={bobby600x640}
          alt="Bobby Fischer"
          className="rounded-md w-full h-auto object-cover"
        />
      </div>
    </div>
    
  </div>
</section>

  );
};

export default HeroSection;
```

---

## src/components/organisms/FeaturesSection.jsx
```jsx
import React from "react";
import FeatureCard from "../molecules/FeatureCard";
import { features } from "../../lib/constants/features";

const FeaturesSection = () => {

  return (
    <section className="section-wrapper lg:py-16 lg:px-32 p-3">
      <div>
        <h2 className="heading-text md:w-3/5 text-center mx-auto mb-12">
          Unlock Your Child's Potential with Our Expert Chess Coaching
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              iconUrl={feature.iconUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

---

## src/components/organisms/TestimonialsSection.jsx
```jsx
import TestimonialSlider from "../molecules/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="section-wrapper relative">
      <div className="relative max-sm:p-3">
        <h2 className="heading-text mb-4">Customer Testimonials</h2>
        <p className="mb-10 body-text">
          My child has grown tremendously in confidence and skill!
        </p>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;
```

---

## src/components/organisms/CTASection.jsx
```jsx
import React from "react";
import Button from "../atoms/Button";

const CTASection = () => {
  return (
    <section className="section-wrapper">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-sm:px-3">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="heading-text mb-4">
            Unlock Your Chess Potential Today
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-6">
          <p className="body-text">
            Join our vibrant community of chess enthusiasts and take your skills to the next level. 
            Whether you're a beginner or looking to refine your strategies, we have the perfect program for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="medium">Get Started</Button>
            <Button variant="secondary" size="medium">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
```

---

## src/components/organisms/AboutHero.jsx
```jsx
import Button from "../atoms/Button";
import FloatingChessPieces from "../molecules/FloatingChessPieces";

const AboutHero = () => {
  return (
    <section className="section-wrapper flex flex-col md:flex-row items-center justify-between max-sm:px-5">
      <div className=" space-y-5">
        <h1 className="heading-text">Unicorn Chess Academy</h1>
        <p className="body-text">
          A leading institution dedicated to chess excellence and mental wellness for all ages.
        </p>
        <div className="flex gap-4 mt-6">
          <Button variant="primary" size="medium" >
            Join
          </Button>
          <Button variant="secondary" size="medium">
            Learn More
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <FloatingChessPieces />
      </div>
    </section>
  );
};

export default AboutHero;
```

---

## src/components/organisms/MissionIntro.jsx
```jsx
import { aboutHero } from "../../assets/images";

const MissionIntro = () => {
  return (
    <section className="section-wrapper flex flex-col-reverse md:flex-row items-center gap-10 max-sm:px-5">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="heading-text">
          Founded in 2012, our academy is dedicated to nurturing chess talent.
        </h2>
        <p className="body-text">
          Ms. Savita Shrivastava and Mr. Ravi Shrivastava, a passionate wife-husband duo, took the first step toward a vision they shared for the future of chess in their community. 
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-full md:w-[600px] max-w-full rounded-md overflow-hidden">
          <img
            src={aboutHero}
            alt="Bobby Fischer"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;
```

---

## src/components/organisms/ProgramsOverview.jsx
```jsx
import { Gamepad2, Laptop2, Users2, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: <Gamepad2 className="w-8 h-8 text-yellow-400" />,
    title: "Join Exciting Tournaments",
    description: "Showcase your skills on the board in thrilling matches against peers.",
    cta: "Learn",
  },
  {
    icon: <Laptop2 className="w-8 h-8 text-yellow-400" />,
    title: "Interactive Online Sessions",
    description: "Get coaching tailored to your skill level, no matter where you are.",
    cta: "Join",
  },
  {
    icon: <Users2 className="w-8 h-8 text-yellow-400" />,
    title: "Build Community & Friendship",
    description: "Make lasting connections through our regular academy events.",
    cta: "Connect",
  },
];

const ProgramsOverview = () => {
  return (
    <section className="section-wrapper max-sm:px-5">
      <div className="text-center mb-12">
        <h2 className="heading-text">Unlock Your Potential</h2>
        <p className="sub-heading-text">
          With Our Comprehensive Chess Coaching Programs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {programs.map((item, index) => (
          <div key={index} className="bg-[#1f1f1f] p-6 rounded-xl shadow-md hover:shadow-xl transition">
            {item.icon}
            <h3 className="sub-heading-text mt-4">{item.title}</h3>
            <p className="body-text mt-2">{item.description}</p>
            <button className="mt-4 text-yellow-300 hover:text-purple-100 transition flex items-center gap-1">
              {item.cta} <ArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsOverview;
```

---

## src/components/organisms/JoinAcademy.jsx
```jsx
import Button from "../atoms/Button";

const JoinAcademyCTA = () => {
  return (
    <section className="section-wrapper max-sm:px-5">
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="flex flex-col gap-3">
          <h2 className="heading-text">
            Unlock Your Potential: <br />
            Join Our Chess Academy Community Today!
          </h2>
          <p className="body-text">
            As a part of our vibrant academy, you&apos;ll gain access to expert
            coaching, exclusive tournaments, and a strong support system. Start
            your journey toward chess mastery today.
          </p>

          <div className="flex gap-4">
            <Button variant="primary" size="medium">
              Join Now
            </Button>
            <Button variant="secondary" size="medium">
              Learn More
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <div className=" rounded-md overflow-hidden  ">
          <img
            src="/src/assets/images/aboutUsPage.webp"
            alt="Bobby Fischer"
            className="rounded-md"
          />
        </div>{" "}
        {/* Placeholder for image */}
      </div>
    </section>
  );
};

export default JoinAcademyCTA;
```

---

## src/components/organisms/FAQs.jsx
```jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqData } from "../../lib/constants/faqs";


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-wrapper max-sm:px-5">
      <div >
        <h2 className="heading-text text-center py-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-background-dull rounded-md p-4 bg-[#1f1f1f]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="sub-heading-text">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="body-text mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
```

---

## src/components/organisms/PricingPlans.jsx
```jsx
import React, { useState } from "react";
import { pricingPlans } from "../../lib/constants/pricingPlans";
import Button from "../atoms/Button";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <section className="section-wrapper max-sm:px-5">
      <div className="text-center">
        <p className="body-text mb-2">Affordable</p>
        <h2 className="heading-text mb-2">Pricing Plans</h2>
        <p className="body-text mb-2">
          Choose a plan that suits your chess journey.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center bg-background-dull rounded-full p-1 mb-10">
          <button
            onClick={() => setBillingCycle("Monthly")}
            className={`px-4 py-1 rounded-full transition-all ${
              billingCycle === "Monthly"
                ? "bg-white text-black"
                : "text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("Yearly")}
            className={`px-4 py-1 rounded-full transition-all ${
              billingCycle === "Yearly"
                ? "bg-white text-black"
                : "text-white"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 ">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-background-dull border border-neutral-800 rounded-xl p-6 flex flex-col justify-between shadow-md"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="text-left space-y-2 mb-6 text-neutral-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="primary" size="large">
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
```

---

## src/components/organisms/Footer.jsx
```jsx
import NavLink from "../atoms/NavLink";
import { UnicornLogo } from "../../assets/images";

const Footer = () => {
  return (
    <footer className="section-wrapper">
      <div className="">
        <div className="flex justify-center py-5">
          <NavLink className="text-center">
            <img src={UnicornLogo} alt="Logo" className="h-20 w-auto" />
          </NavLink>
        </div>
        <div className="flex justify-center md:gap-16 gap-4 mb-4 max-sm:flex-col max-sm:text-center font-medium">
          <NavLink href="#">Join Us</NavLink>
          <NavLink href="#">Contact Us</NavLink>
          <NavLink href="#">Student Portal</NavLink>
        </div>
        <div className="flex items-center justify-between py-3 border-t border-gray-700 max-sm:flex-col-reverse max-sm:gap-3">
          <p>© 2025 Chess Academy. All rights reserved.</p>
          <div className="flex justify-center md:space-x-4 font-medium max-sm:flex-col max-sm:text-center max-sm:gap-2" >
            <NavLink href="#" className="text-sm border-b">Privacy Policy</NavLink>
            <NavLink href="#" className="text-sm border-b">Terms of Use</NavLink>
            <NavLink href="#" className="text-sm border-b">Cookie Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## src/components/organisms/GalleryHero.jsx
```jsx
import { section } from "framer-motion/client";

const GalleryHero = () => {
  return (
    <section className="section-wrapper">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
      <h1 className="text-4xl md:text-5xl ">
        Our Chess Gallery
      </h1>
      <p className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
        Explore the moments captured at our Chess Academy, from intense
        matches to joyful victories. Each image tells a story of dedication,
        skill, and the vibrant community we foster.
      </p>
    </div>
    </section>
  );
};

export default GalleryHero;
```

---

## src/components/organisms/ImageGallery.jsx
```jsx
import GalleryCard from "../molecules/GalleryCard";

const ImageGallery = () => {
  const galleryImages = Array.from({ length: 6 }).map((_, idx) => ({
    src: "https://via.placeholder.com/150",
    alt: `Gallery Image ${idx + 1}`,
  }));

  return (
    <div className="container mx-auto max-w-6xl text-center">
      <h2 className="text-3xl font-semibold font-rubik mb-2">Image Gallery</h2>
      <p className="text-gray-400 mb-10">
        Explore our vibrant moments and achievements.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <GalleryCard key={idx} imageSrc={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
```

---

## src/components/organisms/ContactDetails.jsx
```jsx
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
```

---

## src/components/organisms/ContactForm.jsx
```jsx
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
```

---

## src/components/organisms/ContactInfo.jsx
```jsx
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
```

---

## src/components/organisms/JoinSection.jsx
```jsx
import React from "react";
import Button from "../atoms/Button";

const JoinSection = () => {
  return (
    <section className="section-wrapper">
      <div className="max-sm:px-3">
        <h2 className="text-5xl mb-2">Join Our Academy</h2>
        <p className="py-3">
          Unlock your potential and master the game of chess with our expert coaching and community.
        </p>
      </div>
    </section>
  );
};

export default JoinSection;
```

---

## src/components/organisms/OpportunitiesSection.jsx
```jsx
import React from "react";
import Button from "../atoms/Button";

const OpportunitiesSection = () => {
  return (
    <section className="container mx-auto bg-background-dark md:h-[824px]  text-white py-16 max-sm:px-6">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 md:p-4 py-4 md:my-auto">
          <h1 className="md:text-4xl md:w-4/5 mb-4 text-3xl max-sm:font-medium">
            Unlock Your Potential Opportunities for Passionate Chess Coaches
            and Trainers
          </h1>
          <p className="mb-6 md:w-3/4 text-lg">
            Join our vibrant community of chess educators and elevate your
            coaching career. We offer a range of opportunities, from workshops
            to competitive events, designed to enhance your skills and connect
            you with aspiring players.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="large">
              Join
            </Button>
            <Button variant="secondary" size="large">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 p-4 py-8 flex items-center justify-center">
          <div className="md:w-[600px]  md:h-[600px] rounded-md overflow-hidden  ">
            <img
              src="/src/assets/images/bobby600x640.webp"
              alt="Bobby Fischer"
              className="rounded-md"
            />
          </div>{" "}
          {/* Placeholder for image */}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
```

---

## src/components/organisms/EmpowerSection.jsx
```jsx
import React from "react";
import { Brain, Users, GraduationCap } from "lucide-react"; // Icons
import Button from "../atoms/Button";

const EmpowerSection = () => {
  return (
    <section className="container mx-auto bg-background-dark text-white px-6 py-16 md:px-8 ">
      <div className="space-y-10">
        {/* Section Heading */}
        <div>
          <p className="uppercase text-sm text-gray-400 font-medium mb-2">Empower</p>
          <h2 className="text-4xl md:text-5xl mb-4 w-[90%]">
            Unlock Your Potential with <br className="hidden md:block" /> Chess Mastery
          </h2>
          <p className="text-gray-400 text-base max-w-2xl">
            Join our academy to experience unparalleled growth in your chess skills. Our
            dedicated coaches provide personalized mentorship in a nurturing environment.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <Brain className="text-yellow-400 mb-3" />
            <h3 className="font-semibold text-white mb-2 text-2xl">
              Experience Professional Growth Through Chess
            </h3>
            <p className="text-gray-400">
              Enhance your strategic thinking and problem-solving abilities.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <Users className="text-yellow-400 mb-3" />
            <h3 className="font-semibold text-white mb-2 text-2xl">
              Join a Supportive Community of Chess Enthusiasts
            </h3>
            <p className="text-gray-400">
              Connect with fellow players and refine your passion.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <GraduationCap className="text-yellow-400 mb-3" />
            <h3 className="font-semibold text-white mb-2 text-2xl">
              Mentorship from Experienced Chess Coaches
            </h3>
            <p className="text-gray-400">
              Receive guidance from experts who care about your success.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <Button variant="primary" size="large">
            Join Our Academy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
```

---

## src/components/organisms/TeamSection.jsx
```jsx
import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";
import { teamMembers } from "../../lib/constants/teamMembers";


const TeamCard = ({ name, role, description }) => (
  <div className="bg-background-dull/60 rounded-xl p-5 text-white space-y-2">
    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
      {name.split(" ").map((n) => n[0]).join("")}
    </div>
    <h4 className="text-lg font-medium">{name}</h4>
    <p className="text-sm text-yellow-400">{role}</p>
    <p className="text-sm ">{description}</p>
    <div className="flex gap-3 mt-2 text-gray-400">
      <Linkedin size={16} className="cursor-pointer hover:text-white text-yellow-400" />
      <Github size={16} className="cursor-pointer hover:text-white text-yellow-400" />
      <Twitter size={16} className="cursor-pointer hover:text-white text-yellow-400" />
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="bg-background-dark mx-auto container text-white px-5 py-16 md:px-8">
      <div className="space-y-10">
        <div>
          <p className="uppercase text-sm text-gray-400 font-medium mb-2">Together</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-400 text-base max-w-2xl">
            Meet our dedicated coaches and trainers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
```

---

## src/components/organisms/HiringSection.jsx
```jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const HiringSection = () => {
  return (
    <section className="bg-background-dark container mx-auto text-white py-20 md:px-8 px-5">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            We&apos;re Hiring
          </h2>
          <p className="text-gray-400 text-base max-w-md">
            Do you have a passion for chess and mentoring? We're always looking
            for talented and motivated individuals to join our team and shape
            the future of chess education.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Button variant="primary" size="large" as={Link} to="/careers">
            View Careers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
```

---

## src/components/organisms/GetInTouch.jsx
```jsx
import React, { useState } from "react";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.terms) newErrors.terms = "You must accept the terms.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="container mx-auto bg-background-dark text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-[#2a2a2a] rounded-md text-white"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-[#2a2a2a] rounded-md text-white"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full px-4 py-2 bg-[#2a2a2a] rounded-md text-white"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouchForm;
```

---

## src/components/organisms/MainMenu.jsx
```jsx
import React from "react";
import MenuGroup from "../molecules/MenuGroup";
import Button from "../atoms/Button";

const MainMenu = () => {
  const menuData = [
    {
      title: "Explore Our Pages",
      items: [
        { title: "Coaching Sessions", description: "Learn from experienced chess coaches." },
        { title: "Membership", description: "Become part of our vibrant chess community." },
        { title: "FAQs", description: "Find answers to common questions." },
        { title: "Sign Up", description: "Start your chess journey today." }
      ]
    },
    {
      title: "More Opportunities",
      items: [
        { title: "Tournaments", description: "Join exciting competitions and showcase your skills." },
        { title: "Events", description: "Participate in workshops and special events." },
        { title: "Testimonials", description: "Hear from our satisfied students and parents." },
        { title: "Login", description: "Access your account and resources." }
      ]
    },
    {
      title: "Stay Connected",
      items: [
        { title: "Online Classes", description: "Flexible learning from the comfort of home." },
        { title: "Blog", description: "Read tips and strategies from chess experts." },
        { title: "Community", description: "Join a network of passionate chess enthusiasts." },
        { title: "Learn More", description: "Discover what we offer at our academy." }
      ]
    },
    {
      title: "Join Our Academy",
      items: [
        { title: "Resources", description: "Access valuable materials for your chess journey." },
        { title: "Support", description: "Get assistance with your chess inquiries." },
        { title: "Contact Us", description: "Reach out for more information." },
        { title: "Get Started", description: "Begin your chess adventure with us." }
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {menuData.map((group, index) => (
          <MenuGroup key={index} title={group.title} items={group.items} />
        ))}
      </div>
      <div className="container mx-auto mt-8 flex justify-between items-center border-t border-gray-700 pt-4">
        <p>Ready to join us?</p>
        <div className="flex gap-4">
          <Button variant="primary" size="small">Sign up for free</Button>
          <Button variant="secondary" size="small">Join</Button>
          <Button variant="secondary" size="small">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
```

---

# Components - Template Designs

## src/components/template_designs/HomePageTemplate.jsx
```jsx
import HeroSection from "../organisms/HeroSection";
import FeaturesSection from "../organisms/FeaturesSection";
import TestimonialsSection from "../organisms/TestimonialsSection";
import CTASection from "../organisms/CTASection";
import JoinSection from "../organisms/JoinSection";

const HomePageTemplate = () => {
  return (
    <main className="flex flex-col bg-background-dark font-poppins">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <JoinSection />
    </main>
  );
};

export default HomePageTemplate;
```

---

## src/components/template_designs/AboutPageTemplate.jsx
```jsx
import React from 'react'
import AboutHero from '../organisms/AboutHero'
import MissionIntro from '../organisms/MissionIntro'
import ProgramsOverview from '../organisms/ProgramsOverview'
import JoinAcademyCTA from '../organisms/JoinAcademy'
import TestimonialSection from '../organisms/TestimonialsSection'
import FAQs from '../organisms/FAQs'
import PricingPlans from '../organisms/PricingPlans'
import CTASection from '../organisms/CTASection'

const AboutPageTemplate = () => {
  return (
    <main className=" bg-background-dark text-white min-h-screen font-poppins">
        <AboutHero />
        <MissionIntro />
        <ProgramsOverview />
        <JoinAcademyCTA />
        <TestimonialSection />
        <FAQs />
        <PricingPlans />
        <CTASection />
    </main>
  )
}

export default AboutPageTemplate
```

---

## src/components/template_designs/GalleryPageTemplate.jsx
```jsx
import React from 'react'
import GalleryHero from '../organisms/GalleryHero';
import ImageGallery from '../organisms/ImageGallery';

const GalleryPageTemplate = () => {
return (
    <main className="bg-background-dark text-white min-h-screen px-6 py-12 font-poppins">
      <GalleryHero />
      <ImageGallery />
    </main>
  );
}

export default GalleryPageTemplate
```

---

## src/components/template_designs/ContactPageTemplate.jsx
```jsx
import React from 'react'
import ContactInfo from '../organisms/ContactInfo'
import ContactForm from '../organisms/ContactForm'
import CTASection from '../organisms/CTASection'

const ContactPageTemplate = () => {
  return (
    <main className="bg-background-dark text-white min-h-screen px-6 max-sm:py-0 py-12 font-poppins">
      <ContactInfo />
      <CTASection />
    </main>
  )
}

export default ContactPageTemplate
```

---

## src/components/template_designs/CarrerPageTemplate.jsx
```jsx
import JoinSection from '../organisms/JoinSection'
import OpportunitiesSection from '../organisms/OpportunitiesSection'
import EmpowerSection from '../organisms/EmpowerSection'
import TeamSection from '../organisms/TeamSection'
import HiringSection from '../organisms/HiringSection'
import GetInTouchForm from '../organisms/GetInTouch'
import CTASection from '../organisms/CTASection'

const CarrerPageTemplate = () => {
  return (
    <main className="bg-background-dark text-white min-h-screen py-12 font-poppins">
        <JoinSection />
        <OpportunitiesSection />
        <EmpowerSection />
        <TeamSection />
        <HiringSection />
        <GetInTouchForm />
        <CTASection />
    </main>
  )
}

export default CarrerPageTemplate
```

---

# Lib - Constants

## src/lib/constants/faqs.js
```js
export const faqData = [
  {
    question: "What age groups do you teach?",
    answer:
      "We welcome chess enthusiasts of all ages – from young kids to adults. Our programs are tailored for various age groups and skill levels.",
  },
  {
    question: "Do I need prior chess experience?",
    answer:
      "Not at all! We have beginner-friendly lessons for complete newcomers as well as advanced sessions for experienced players.",
  },
  {
    question: "How do online classes work?",
    answer:
      "Our online classes are conducted via video conferencing and interactive boards, providing a real-time learning experience with our coaches.",
  },
  {
    question: "Can I get a free trial class?",
    answer:
      "Yes! We offer a free trial session for new students to explore our teaching style and curriculum.",
  },
];
```

---

## src/lib/constants/features.js
```js
import { pawn } from "../../assets/images";
import { rook } from "../../assets/images";
import { Knight } from "../../assets/images";

export const features = [
  {
    title: "Join a Community of Passionate Chess Learners and Players",
    description:
      "Experience the joy of chess while building critical thinking skills.",
    buttonText: "Join",
    iconUrl: pawn,
  },
  {
    title: "Book Your First Class Today and Start Your Chess Journey",
    description:
      "Our classes cater to all skill levels, from beginners to advanced players.",
    buttonText: "Book",
    iconUrl: rook,
  },
  {
    title: "Discover the Exciting World of Chess Tournaments and Events",
    description:
      "Join us for thrilling competitions that foster growth and camaraderie.",
    buttonText: "Learn",
    iconUrl: Knight,
  },
];
```

---

## src/lib/constants/menuData.js
```js
export const menuData = [
  {
    title: "Explore Our Pages",
    items: [
      { title: "Coaching Sessions", description: "Learn from experienced chess coaches." },
      { title: "Membership", description: "Become part of our vibrant chess community." },
      { title: "FAQs", description: "Find answers to common questions." },
      { title: "Sign Up", description: "Start your chess journey today." }
    ]
  },
  {
    title: "More Opportunities",
    items: [
      { title: "Tournaments", description: "Join exciting competitions and showcase your skills." },
      { title: "Events", description: "Participate in workshops and special events." },
      { title: "Testimonials", description: "Hear from our satisfied students and parents." },
      { title: "Login", description: "Access your account and resources." }
    ]
  },
  {
    title: "Stay Connected",
    items: [
      { title: "Online Classes", description: "Flexible learning from the comfort of home." },
      { title: "Blog", description: "Read tips and strategies from chess experts." },
      { title: "Community", description: "Join a network of passionate chess enthusiasts." },
      { title: "Learn More", description: "Discover what we offer at our academy." }
    ]
  },
  {
    title: "Join Our Academy",
    items: [
      { title: "Resources", description: "Access valuable materials for your chess journey." },
      { title: "Support", description: "Get assistance with your chess inquiries." },
      { title: "Contact Us", description: "Reach out for more information." },
      { title: "Get Started", description: "Begin your chess adventure with us." }
    ]
  }
];
```

---

## src/lib/constants/pricingPlans.js
```js
export const pricingPlans = [
  {
    name: "Beginners Program",
    price: "₹6000/mo",
    features: [
      "2 Live Classes per week",
      "Recorded sessions access",
      "Assignment provided with feedback",
      "Access to Platform resources",
      "Free Camps to level up your game",
      "Certificate of completion",
    ],
  },
  {
    name: "Intermediate Program",
    price: "₹8000/mo",
    features: [
      "All Beginners Program features",
      "Monthly tournaments access",
      "Personal coaching sessions",
      "Exclusive member events",
    ],
  },
  {
    name: "Advanced Program",
    price: "₹12000/mo",
    features: [
      "All Intermediate Program features",
      "Advanced strategy workshops",
      "Priority support access",
      "Custom training plans",
      "Monthly analysis reports",
    ],
  },
];
```

---

## src/lib/constants/teamMembers.js
```js
export const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Head Coach",
    description: "Passionate about nurturing chess talent and mentoring young players.",
  },
  {
    name: "Mark Lee",
    role: "Assistant Coach",
    description: "Brings years of experience and a love for the game.",
  },
  {
    name: "Sarah Kim",
    role: "Youth Trainer",
    description: "Dedicated to helping the next generation of chess players.",
  },
  {
    name: "David Brown",
    role: "Tournament Director",
    description: "Expert in organizing competitive events and fostering sportsmanship.",
  },
  {
    name: "Emily White",
    role: "Online Coach",
    description: "Specialist in virtual sessions to reach students everywhere.",
  },
  {
    name: "James Green",
    role: "Strategy Expert",
    description: "Focused on developing advanced tactics and critical thinking skills.",
  },
];
```

---

## src/lib/constants/testimonial.js
```js
export const testimonials = [
  {
    name: "Emily Johnson",
    role: "Parent, Local School",
    message: "The coaching here is top-notch and incredibly supportive.",
  },
  {
    name: "Michael Smith",
    role: "Student, Grade 8",
    message: "Chess Academy has transformed my approach to the game!",
  },
  {
    name: "Sarah Lee",
    role: "Champion, Chess Club",
    message: "The tournaments are exciting and well-organized!",
  },
  {
    name: "Emily Johnson",
    role: "Parent, Local School",
    message: "The coaching here is top-notch and incredibly supportive.",
  },
  {
    name: "Michael Smith",
    role: "Student, Grade 8",
    message: "Chess Academy has transformed my approach to the game!",
  },
  {
    name: "Sarah Lee",
    role: "Champion, Chess Club",
    message: "The tournaments are exciting and well-organized!",
  },
  {
    name: "Emily Johnson",
    role: "Parent, Local School",
    message: "The coaching here is top-notch and incredibly supportive.",
  },
  {
    name: "Michael Smith",
    role: "Student, Grade 8",
    message: "Chess Academy has transformed my approach to the game!",
  },
  {
    name: "Sarah Lee",
    role: "Champion, Chess Club",
    message: "The tournaments are exciting and well-organized!",
  },
];
```

---

## src/lib/constants/programs.js
```js
// Empty file
```