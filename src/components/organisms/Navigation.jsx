import React, { useState } from "react";
import DesktopNav from "../atoms/DesktopNav";
import MobileNav from "../atoms/MobileNav";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header>
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
    </header>
  );
};

export default Navigation;