import React from 'react';
import "./filterBox.css";
import HeadingWithText from '../TextHeading/TextHeading';
import mapImg from "../../assets/icons/map.png"


const FilterBox: React.FC = () => {
  return (
    <>
    <div className='filterArea'>
       <div className='heading'>
        <HeadingWithText
         h1Text='Last minute accommodation near you'
         pText='Find a great deal on a accommodation for tonight or an upcoming trip'
         />
         <img src={mapImg} alt="map" />
       </div>
    </div>
    </>
  );
};

export default FilterBox;

  
export {}; 