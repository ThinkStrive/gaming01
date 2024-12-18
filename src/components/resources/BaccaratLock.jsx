import React from "react";
import "../../Style/Lock.css";
import { useToast } from "./Toast";
import PayPalBtn from "./PaypalBtn";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";



const BaccaratLock = ({ setPlanLockScreen }) => {
  const showToast = useToast();
  const handleClickPayButton = () => {
    // Handle the pay button click event
    setPlanLockScreen(false);
    showToast("Paid Successfully", "success");
  };

  return (
    <div className="info-con-lock flex justify-center items-center min-h-screen">
      <div className="w-[90%] sm:w-[80vw] md:w-[65vw] lg:w-[50vw] h-[90vh] sm:h-auto md:h-[75vh] lg:h-[75vh] lg:mt-[120px] md:mt-[100px] mt-[100px] rounded-lg bg-white relative px-4 sm:px-6 lg:py-6 py-2 flex flex-col justify-start items-center shadow-md overflow-y-scroll info-con-lock1">
        <h2 className="font-semibold text-lg my-4 flex justify-center items-center w-full">
          <i className="fa-solid fa-lock text-black text-4xl sm:text-5xl"></i>
        </h2>
        <div className="text-center mb-4 w-full flex flex-wrap sm:flex-nowrap justify-around gap-4 h-auto sm:h-[30%] my-2">
          <div className="bg-slate-200 h-[auto] sm:h-[100%] w-full sm:w-[40%] rounded-xl shadow flex justify-evenly items-center flex-col py-4">
            <h2 className="text-black font-semibold text-xl my-2">
              Daily Plan
            </h2>
            {/* <button
              className="bg-[#242424] text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition w-[80%] hover:bg-[#141414]"
              // onClick={handleClickPayButton}
            >
              <PayPalBtn amount={3.99} />
            </button> */}
            <Link
              to="https://www.paypal.com/ncp/payment/QWJGGR9ADNX7S"
              target="_blank"
              className="bg-[#242424] text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition w-[80%] hover:bg-[#141414]"
            >
              $12.00
            </Link>
          </div>
          <div className="bg-slate-200 h-[auto] sm:h-[100%] w-full sm:w-[40%] rounded-xl shadow flex justify-evenly items-center flex-col py-4">
            <h2 className="text-black font-semibold text-xl">Monthly Plan</h2>
            {/* <button
              className="bg-[#242424] text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition w-[80%] hover:bg-[#141414]"
              // onClick={handleClickPayButton}
            >
              <PayPalBtn amount={54.99} />
            </button> */}
            <Link
              to="https://www.paypal.com/ncp/payment/T8NMGGSKBYDLW"
              target="_blank"
              className="bg-[#242424] text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition w-[80%] hover:bg-[#141414]"
            >
              $300.00
            </Link>
          </div>
        </div>

        <div className="text-black px-2 sm:px-4 mt-1">
          <h6 className="text-md font-semibold my-2 text-center sm:text-left">
            Need Alternative Payment Options?
          </h6>
          <p className="text-sm text-center sm:text-left">
            We currently accept the following payment methods:
          </p>
          <p className="text-sm text-center sm:text-left">
            PayPal Debit or Credit Card (processed through PayPal – no PayPal
            account required) If you prefer other payment methods or need
            assistance with the payment process, feel free to reach out to us.
          </p>
          <div className="border w-full h-auto text-black px-4 py-2 bg-slate-200 rounded-lg my-3">
            <p>
              <i className="fa-brands fa-telegram text-blue-600"></i> Contact us
              on Telegram:{" "} 
              <Link
                to="https://t.me/rouletterisee"
                className="text-blue-600 font-semibold"
                target="_blank"
              >
                 https://t.me/rouletterisee
              </Link>
            </p>
            <p className="flex my-2 ">
              <MdEmail size={23} className=" text-customRed border pt-1" /> Contact us via Email:{" "}
              <Link
                to="mailto:rouletterise@gmail.com" 
                className="text-blue-600 font-semibold"
              >
               &nbsp;  rouletterise@gmail.com
              </Link>
            </p>
            <p className="text-sm my-1">
              We’ll be <span className="text-slate-900 font-bold">happy</span>{" "}
              to help with any questions or provide alternative options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaccaratLock;
