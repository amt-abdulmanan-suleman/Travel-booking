import React from "react";
import "./footer.css"
import Logo from "../Logo/Logo";

const Footer: React.FC = () => {
  // Your component logic here
  return (
   <>
   <div className="footer">
   <div className="footerTextArea">
     <Logo />
   </div>
   </div>
   </> 
  );
};

export default Footer;