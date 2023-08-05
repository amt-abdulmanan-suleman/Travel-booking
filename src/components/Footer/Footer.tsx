import React from "react";
import "./footer.css"
import Logo from "../Logo/Logo";
import socialsImg from "../../assets/icons/Group 8.svg"

const Footer: React.FC = () => {
  // Your component logic here
  return (
   <>
   <div className="footer">
   <div className="footerTextArea">

    {/*  */}
     <div className="right">
     <Logo />
     <p>Get the Travelcity Newsletter<br/>Email address (required)</p>
     <div className="buttongroup">
      <input type="text" className="inputIcon" placeholder="Enter your email address" />
      <button>Subscribe</button>
     </div>
     <h5>
     This site is protected by reCAPTCHA and the <br/> Google Privacy Policy and Terms of Service apply.
     </h5>
     <div className="socials">
      <h1>Follow us</h1>
      <img src={socialsImg} alt="social media" />
     </div>
     </div>

     {/*  */}
     <div className="left"></div>
   </div>
   </div>
   </> 
  );
};

export default Footer;