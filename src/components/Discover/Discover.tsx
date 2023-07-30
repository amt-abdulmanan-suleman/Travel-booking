import React from "react";
import "./discover.css"
import MySwiper from "../Swiper/Swiper";

const Discover: React.FC = () => {
  // Your component logic here
  return (
   <>
   <div className="discoverTextArea">
          <span>Where to go, right now</span>
          <p>Spots at the top of travelers must go list</p>
   </div>
   <MySwiper />
   </> 
  );
};

export default Discover;