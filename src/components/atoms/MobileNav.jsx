import React from "react";
import NavLink from "./NavLink";
import Button from "./Button";
import { BiChevronDown } from "react-icons/bi";
import { menuData } from "../../lib/constants/menuData";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ showMenu, setShowMenu, mobileNavOpen, setMobileNavOpen }) => {
  const navigate = useNavigate();

  const closeAllMenus = () => {
    setShowMenu(false);
    setMobileNavOpen(false);
  };

  const goToContact = () => {
    closeAllMenus();
    navigate("/contact");
  };

  return (
    <>
      {/* ── MOBILE SLIDE-DOWN MENU ── */}
      {mobileNavOpen && (
        <div className="md:hidden bg-white border-b border-border-light shadow-card-lg px-4 py-5 space-y-4 z-40 animate-fade-up">
          <NavLink onNavigate={closeAllMenus} href="/about" className="block text-base font-medium py-1">
            About Us
          </NavLink>
          <NavLink onNavigate={closeAllMenus} href="/gallery" className="block text-base font-medium py-1">
            Gallery
          </NavLink>
          <NavLink onNavigate={closeAllMenus} href="/tournaments" className="block text-base font-medium py-1">
            Tournaments
          </NavLink>

          {/* Services toggle */}
          <div>
            <button
              className="flex w-full items-center justify-between text-ink-light text-base font-medium py-1"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <span>Services</span>
              <BiChevronDown
                size={22}
                className={`transition-transform duration-200 ${showMenu ? "rotate-180" : ""}`}
              />
            </button>

            {showMenu && (
              <div className="mt-3 ml-3 space-y-4 border-l-2 border-royal/20 pl-4">
                {menuData.map((group, index) => (
                  <div key={index}>
                    <p className="text-xs font-bold tracking-widest uppercase text-royal mb-2">
                      {group.title}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item, i) => (
                        <li key={i}>
                          <NavLink
                            href="#"
                            onNavigate={closeAllMenus}
                            className="block text-sm text-ink-light hover:text-royal after:hidden"
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="pt-2 flex flex-col gap-3">
            <Button variant="primary" size="large" className="w-full justify-center" onClick={goToContact}>
              Join Us →
            </Button>
            <Button variant="secondary" size="large" className="w-full justify-center" onClick={closeAllMenus}>
              Login
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;