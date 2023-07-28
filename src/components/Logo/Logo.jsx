import React from "react";
import LogoImg from "../../assets/icons/logo.png";

const Logo = () => (
  <div className="flex flex-row">
    <img className="w-10 h-10 flex-shrink-0" src={LogoImg} alt="brand logo" />
    <span className="flex flex-row items-end justify-end text-blue-700 text-xs font-bold text-xs h-10 w-61 flex-shrink-0 ml-[-12px] mt-[5px]">
      Travelcity
    </span>
  </div>
);

export default Logo;
