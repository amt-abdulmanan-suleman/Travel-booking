import React from "react";
import Logo from "../Logo/Logo";
import { Menu, XCircle } from "react-feather";
import "./navbar.css";
import { menuList } from "./navList"; // Import menuList and MenuItem interface
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import Button from "../Buttons/Buttons";
import DropButton from "../Buttons/DropButton";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="listContainer">
        <Logo />
        <div className="listItemsBox">
          <Link className="navitem" to={menuList[1].url}>
            {menuList[1].title}
          </Link>
          <Dropdown />
          <Link className="navitem" to={menuList[2].url}>
            {menuList[2].title}
          </Link>
        </div>
      </div>
      <div className="registration">
        <Link to={menuList[3].url}>Log in</Link>
        <DropButton />
      </div>
    </nav>
  );
};

export default Navbar;

export {}; // Add an empty export to make TypeScript treat this file as a module
