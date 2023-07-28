import React from "react";
import Logo from "../../components/Logo/Logo";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-auto h-[72px] px-[112px] bg-[#F1F1F1]">
      <Logo />
    </nav>
  );
}

export default Navbar;
