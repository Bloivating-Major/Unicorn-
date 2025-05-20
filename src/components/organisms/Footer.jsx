import React from "react";
import NavLink from "../atoms/NavLink";

const Footer = () => {
  return (
    <footer className="bg-background-dark text-white py-8 font-poppins">
      <div className="container mx-auto py-5">
        <div className="flex justify-center py-5">
          <NavLink className="text-center">Logo</NavLink>
        </div>
        <div className="flex justify-center md:gap-8 gap-4 mb-4 max-sm:flex-col max-sm:text-center font-bold">
          <NavLink href="#">Join Us</NavLink>
          <NavLink href="#">Contact Us</NavLink>
          <NavLink href="#">Student Portal</NavLink>
        </div>
        <div className="text-center">
          <p>© 2025 Chess Academy. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4 font-bold " >
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