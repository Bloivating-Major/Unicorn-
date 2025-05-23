import React, { useState } from "react";
import NavLink from "../atoms/NavLink";
import Button from "../atoms/Button";
import MenuGroup from "../molecules/MenuGroup";
import { BiMenu, BiX } from "react-icons/bi";
import { FaChessKnight } from "react-icons/fa";
import { menuData } from "../../lib/constants/menuData";


const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const toggleMobileNav = () => {
    // Close the main menu if it's open when toggling mobile nav
    if (showMenu) {
      setShowMenu(false);
    }
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      <nav className="bg-background-dark text-white p-4 font-poppins ">
        <div className="container mx-auto flex justify-between items-center px-3">
          {/* Logo and mobile menu button */}
          <div className="flex items-center  max-sm:justify-between max-sm:w-full">
            <NavLink href="/" onNavigate={()=> setShowMenu(false)} className="mr-4">Logo</NavLink>
            
            {/* Mobile menu button (hidden on desktop) */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileNav}
            >
              {mobileNavOpen ? (
                <BiX size={32} />
              ) : (
                <BiMenu size={32} />
              )}
            </button>

             {/* Desktop navigation (hidden on mobile) */}
          <div className="hidden md:flex space-x-4">
            <NavLink onNavigate={()=> setShowMenu(false)} href="/about">About Us</NavLink>
            <NavLink onNavigate={()=> setShowMenu(false)} href="/gallery">Gallery</NavLink>
            <NavLink onNavigate={()=> setShowMenu(false)} href="/contact">Contact Us</NavLink>
            <NavLink onNavigate={()=> setShowMenu(false)} href="/carrer">Carrers</NavLink>
          </div>
          </div>

         

          {/* Contact button (hidden on mobile) */}
          <div className="flex space-x-4 max-sm:hidden">
            <Button variant="primary" size="large" onClick={toggleMenu}>
              Join Us
            </Button>
          </div>
        </div>

        {/* Mobile navigation (shown when mobileNavOpen is true) */}
        {mobileNavOpen && (
          <div className="md:hidden mt-4 space-y-3 flex flex-col py-3 navbar">
            <NavLink onNavigate={()=> setMobileNavOpen(false)}  href="/about" block>About Us</NavLink>
            <NavLink onNavigate={()=> setMobileNavOpen(false)}  href="/gallery" block>Gallery</NavLink>
            <NavLink onNavigate={()=> setMobileNavOpen(false)}  href="/contact" block>Contact Us</NavLink>
             <Button  variant="primary" size="large" onClick={toggleMenu} className=" max-sm:rounded-xl">
              Join Us
            </Button>
          </div>
        )}
      </nav>

      {/* Dropdown menu (same for both mobile and desktop) */}
      {showMenu && (
        <div className="bg-background-dark text-white pt-8 relative z-30"  >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 ">
            {menuData.map((group, index) => (
              <MenuGroup key={index} title={group.title} items={group.items} />
            ))}
          </div>
          <div className="w-full bg-background-dull mt-8 py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
              <p className="mb-4 md:mb-0">
                Ready to join us? 
                <NavLink>
                  <span className="border-b ml-2">Sign up for free</span>
                </NavLink>
              </p>
              <div className="flex gap-4 max-sm:flex-col">
                <div className="flex items-center gap-2">
                  <FaChessKnight />
                  <NavLink className="text-black font-medium">Join</NavLink>
                </div>
                <div className="flex items-center gap-2">
                  <FaChessKnight />
                  <NavLink className="text-black font-medium">Login</NavLink>
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
