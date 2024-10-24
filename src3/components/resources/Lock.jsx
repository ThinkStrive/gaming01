import React from "react";
import "../../Style/Lock.css";
import { useToast } from "./Toast";
import PayPalBtn from "./PaypalBtn";

const Lock = ({ setPlanLockScreen }) => {
  const showToast = useToast();
  const handleClickPayButton = () => {
    // Handle the pay button click event
    setPlanLockScreen(false);
    showToast("Paid Successfully", "success");
  };

  return (
    <div className="info-con-lock flex justify-center items-center min-h-screen">
      <div className="w-[80%] sm:w-[80vw] md:w-[50vw] lg:w-[30vw] h-auto sm:h-[30vh] md:h-[25vh] rounded-lg bg-white relative px-6 py-3 flex flex-col justify-between items-center shadow-md">
        <h2 className="font-semibold text-lg my-4 flex justify-center items-center w-full">
          <i className="fa-solid fa-lock text-black text-5xl"></i>
        </h2>
        <div className="text-center mb-4 w-full flex justify-around">
          <button
            className="bg-[#242424] text-white font-bold py-2 px-8 rounded-lg transition"
            // onClick={handleClickPayButton}
          >
            <PayPalBtn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lock;
