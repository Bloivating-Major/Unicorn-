import React, { useState, useCallback } from "react";
import NavLink from "../atoms/NavLink";
import Button from "../atoms/Button";
import MenuGroup from "../molecules/MenuGroup";
import { BiMenu, BiX, BiChevronDown } from "react-icons/bi";
import { FaChessKnight } from "react-icons/fa";
import { menuData } from "../../lib/constants/menuData";
import { useNavigate } from "react-router-dom";
import { UnicornLogo } from "../../assets/images";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  // Close all menus on link click
  const closeAllMenus = useCallback(() => {
    setShowMenu(false);
    setMobileNavOpen(false);
  }, []);

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

        {/* Mobile Menu */}
        {mobileNavOpen && (
          <div className="md:hidden flex flex-col bg-background-dark px-4 py-4 space-y-3 z-40">
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
      </nav>

      {/* Dropdown Menu (Join Us) */}
      {showMenu && (
        <div className="bg-background-dark text-white pt-8 z-40 relative">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 lg:px-8">
            {menuData.map((group, index) => (
              <MenuGroup key={index} title={group.title} items={group.items} />
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

export default Navigation;
