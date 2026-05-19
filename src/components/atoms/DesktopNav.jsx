import React from "react";
import NavLink from "./NavLink";
import Button from "./Button";
import { BiMenu, BiX, BiChevronDown } from "react-icons/bi";
import { UnicornLogo } from "../../assets/images";
import { menuData } from "../../lib/constants/menuData";
import { useNavigate } from "react-router-dom";

const DesktopNav = ({
  showMenu,
  setShowMenu,
  mobileNavOpen,
  setMobileNavOpen,
}) => {
  const navigate = useNavigate();

  const closeAllMenus = () => {
    setShowMenu(false);
    setMobileNavOpen(false);
  };

  const toggleMobileNav = () => {
    setShowMenu(false);
    setMobileNavOpen((prev) => !prev);
  };

  const goToContact = () => {
    closeAllMenus();
    navigate("/contact");
  };

  const goToLogin = () => {
    closeAllMenus();
    window.location.href = "https://app.meetchess.com";
  };

  return (
    <>
      {/* ── MAIN NAV BAR ── */}
      <nav className="bg-white/90 backdrop-blur-xl border-b border-border-light text-ink font-sans sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">

          {/* Logo + Mobile Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">

            <NavLink
              href="/"
              onNavigate={closeAllMenus}
              className="after:hidden"
            >
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={UnicornLogo}
                    alt="Unicorn Chess Logo"
                    className="w-14 h-14 rounded-lg bg-gradient-to-br from-royal-light to-royal flex items-center justify-center text-white text-lg font-bold shadow-brand-sm"
                  />
                </div>
              </div>
            </NavLink>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle Menu"
              className="md:hidden text-ink p-1 hover:text-royal transition-colors"
              onClick={toggleMobileNav}
            >
              {mobileNavOpen ? (
                <BiX size={28} />
              ) : (
                <BiMenu size={28} />
              )}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            <NavLink
              onNavigate={closeAllMenus}
              href="/about"
            >
              About Us
            </NavLink>

            <NavLink
              onNavigate={closeAllMenus}
              href="/gallery"
            >
              Gallery
            </NavLink>

            <NavLink
              onNavigate={closeAllMenus}
              href="/tournaments"
            >
              Tournaments
            </NavLink>

            {/* Services dropdown trigger */}
            <button
              className="flex items-center gap-1 text-ink-light hover:text-royal transition-colors text-sm font-medium"
              onClick={() =>
                setShowMenu((prev) => !prev)
              }
            >
              Services

              <BiChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  showMenu ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              variant="primary"
              size="medium"
              onClick={goToContact}
            >
              Join Us →
            </Button>
          </div>
        </div>
      </nav>

      {/* ── MEGA DROPDOWN ── */}
      {showMenu && (
        <div className="hidden md:block bg-white border-b border-border-light shadow-card-lg z-40 relative animate-fade-up">

          <div className="container mx-auto grid grid-cols-4 gap-8 px-10 py-8">

            {menuData.map((group, index) => (
              <div key={index}>

                <h3 className="text-xs font-bold tracking-widest uppercase text-royal mb-4">
                  {group.title}
                </h3>

                <ul className="space-y-3">

                  {group.items.map((item, i) => (
                    <li key={i}>

                      <NavLink
                        href={item.href}
                        onNavigate={closeAllMenus}
                        className="flex flex-col gap-0.5 after:hidden"
                      >
                        <span className="text-sm font-medium text-ink hover:text-royal transition-colors">
                          {item.title}
                        </span>

                        <span className="text-xs text-ink-muted">
                          {item.description}
                        </span>
                      </NavLink>

                    </li>
                  ))}

                </ul>
              </div>
            ))}
          </div>

          {/* Dropdown footer */}
          <div className="border-t border-border-light py-4">

            <div className="container mx-auto flex justify-between items-center px-10">


              <div className="flex gap-4">

                <Button
                  variant="secondary"
                  size="small"
                  onClick={goToLogin}
                >
                  Login
                </Button>

                <Button
                  variant="primary"
                  size="small"
                  onClick={goToContact}
                >
                  Join Now
                </Button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopNav;