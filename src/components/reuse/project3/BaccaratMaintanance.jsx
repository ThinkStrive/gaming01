import React from "react";
import "../../../Style/Lock.css";



const BaccaratMaintanance = ({ setMaintananceLockScreen }) => {
  
  return (
    <div className="info-con-lock flex justify-center items-center min-h-screen">
      <div className="w-[90%] sm:w-[80vw] md:w-[65vw] lg:w-[50vw] h-[50vh] sm:h-auto md:h-[75vh] lg:h-[75vh] lg:mt-[120px] md:mt-[100px] mt-[100px] rounded-lg bg-white relative px-4 sm:px-6 lg:py-6 py-2 flex flex-col justify-start items-center shadow-md overflow-y-scroll info-con-lock1">
        <img src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1734948246/maintanance12_jfdiet.webp"  alt="We Are Under Maintanance" style={{width:"100%",height:"100%"}} />
      </div>
    </div>
  );
};

export default BaccaratMaintanance;
