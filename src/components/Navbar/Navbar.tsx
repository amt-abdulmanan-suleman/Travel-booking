import React from "react";
import Logo from "../Logo/Logo";
import "./navbar.css"

const Navbar: React.FC = () => {
  // Your component logic here
  return (
    <nav>
      <Logo />
    </nav>
  )
};

export default Navbar;

export {}; // Add an empty export to make TypeScript treat this file as a module
