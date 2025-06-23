import React from "react";
import NavLink from "../atoms/NavLink";

const Footer = () => {
  return (
    <footer className="section-wrapper">
      <div className="">
        <div className="flex justify-center py-5">
          <NavLink className="text-center">Logo</NavLink>
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