import React from 'react';
import "./cover.css";
import coverimage from "../../assets/images/homepage/cover.png"


const Cover: React.FC = () => {
  return (
    <>
    <div className='coverframe'>
     <div className='covercontent'>
     <img src={coverimage} alt="cover img" />
     <div className='coverText'>
      
     </div>
     </div>
    </div>
    </>
  );
};

export default Cover;

  
export {}; 