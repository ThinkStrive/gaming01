import React, { useState } from "react";
import "../../Style/Lock.css";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BACCARAT_PLANS } from "../../utils/constants";
import PaypalButtonComponent from "../reuse/PaypalPayment/PaypalButtonComponent";
import TermsAndConditions from "./TermsAndConditions";
import LegalTermsModal from "./LegalTermsModal";


const BaccaratLock = ({ onPaymentSuccess, returnURL }) => {
  const [disabled, setDisabled] = useState(true); // State to control disabled status
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="info-con-lock fixed inset-0 flex justify-center items-start sm:items-center overflow-y-auto bg-black/50 p-4 lg:mt-20 md:mt-16 sm:mt-14 pb-20" >
      <div className="w-[95%] sm:w-[80vw] md:w-[70vw] lg:w-[64vw] max-h-[90vh] sm:max-h-[85vh] bg-white rounded-lg shadow-xl relative flex flex-col mt-16 sm:mt-0">
        {/* Scrollable content container */}
        <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-4 lg:py-6">
          {/* Lock icon header */}
          <div className=" pb-4">
            <h2 className="font-semibold text-lg flex justify-center items-center w-full">
              <i className="fa-solid fa-lock text-black text-4xl sm:text-5xl"></i>
            </h2>
          </div>

          {/* Pricing cards */}
          <div className="text-center mb-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {BACCARAT_PLANS.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-200 rounded-xl shadow flex flex-col items-center p-1 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <div className="text-center mb-3">
                  <h2 className="text-2xl font-bold text-black">{plan.title}</h2>
                </div>

                <div className="flex-grow flex flex-col items-center justify-between w-full">
                  <div className="mb-4 text-center">
                    <span className="text-4xl font-bold text-softBlue">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.duration}</span>

                  </div>

                  <div className="w-full mt-auto">
                    <PaypalButtonComponent
                      subFor={plan.subFor}
                      subType={plan.subType}
                      onPaymentSuccess={onPaymentSuccess}
                      returnURL={returnURL}
                    />
                  </div>
                </div>
              </div>
            ))}

          {/* Terms and Conditions Modal */}
              <div className="flex justify-center items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary border-2 border-black"
                  checked={accepted}  
                  disabled={!accepted}        
                />
                <LegalTermsModal accepted={accepted} setAccepted={setAccepted} setDisabled={setDisabled}/>
              </div>
           
          </div>

          {/* Payment options section */}
          <div className="text-black">
            <h6 className="text-md font-semibold  text-center sm:text-left">
              Need Alternative Payment Options?
            </h6>
            <p className="text-sm text-center sm:text-left">
              We currently accept the following payment methods:
            </p>
            <p className="text-sm text-center sm:text-left mb-2">
              PayPal Debit or Credit Card (processed through PayPal – no PayPal
              account required) If you prefer other payment methods or need
              assistance with the payment process, feel free to reach out to us.
            </p>
            <div className="border w-full text-black px-4 py-2 bg-slate-200 rounded-lg">



              <div className="flex flex-wrap items-center gap-2 ">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-telegram text-blue-600"></i>
                  <span className="whitespace-nowrap">Contact us on Telegram:</span>
                </div>
                <Link
                  to="https://t.me/rouletterisee"
                  className="text-blue-600 font-semibold hover:underline"
                  target="_blank"
                >
                  https://t.me/rouletterisee
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-2 ">
                <div className="flex items-center gap-2">
                  <MdEmail size={23} className="text-customRed min-w-[23px]" />
                  <span className="whitespace-nowrap">Contact us via Email:</span>
                </div>
                <Link
                  to="mailto:rouletterise@gmail.com"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  rouletterise@gmail.com
                </Link>
              </div>
              <p className="text-sm">
                We'll be{" "}
                <span className="text-slate-900 font-bold">happy</span> to help
                with any questions or provide alternative options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaccaratLock;
