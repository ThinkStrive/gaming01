import React from "react";
import { useState,useEffect } from "react";
import '../../Style/Userinfo.css'
import moment from "moment";
import { IoPersonCircleSharp } from "react-icons/io5";

export function Userinfo({theme}){

    const [userData, setUserData] = useState({
        userName: "",
        userEmail: "",
        subscriptionDate: "",
        isPaid: { paid: false, paidType: "none" },
        subscriptionTime:"",
        subscriptionType:""
      });
      useEffect(() => {
        // Retrieve and parse user data from session storage
        const storedData = sessionStorage.getItem("userData");

        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
      }, []);

    // Calculate plan expiry
    const calculateExpiryDate = (startDate) => {
      const start = moment(startDate);
      const expiry = start.clone().add(1, 'month'); // Expiry date is 1 month from start date
      const daysLeft = expiry.diff(moment(), 'days'); // Calculate difference in days

    
      if (daysLeft > 30) {
        return "Plan Expired in more than 1 month";
      } else if (daysLeft > 7) {
        return `Plan Expired in ${Math.ceil(daysLeft / 7)} week${daysLeft / 7 > 1 ? 's' : ''}`;
      } else if (daysLeft > 0) {
        return `Plan Expired in ${daysLeft} day${daysLeft > 1 ? 's' : ''}`;
      } else {
        return "Plan Expired";
      }
    };
    
    return(

          <div className="flex flex-col  items-center mt-10 h-[60vh] w-[98vw] text-white">
            <div className="flex items-center justify-around w-[350px]" >
              <IoPersonCircleSharp  size={100}/>
              <div>
                <h1 className=" text-2xl font-bold">{userData.userName}</h1>
                <h3 className=" text-xl font-medium">{userData.userEmail}</h3>
              </div>
            </div>
            <div>
               <h5 className="text-customGreen mt-5" >{calculateExpiryDate(userData.subscriptionDate)}</h5>
            </div>
            <div className="mt-5 text-xl font-medium">
              <div className="flex gap-5 ">
                <p className="">Subscription Date:</p>
                <p>{userData.subscriptionDate}</p>
              </div>
              <div className="flex gap-5 my-5">
                <p>Subscription Time:</p>
                <p>{userData.subscriptionTime}</p>
              </div>
              <div className="flex gap-5">
                <p>Subscription Type:</p>
                <p>{userData.subscriptionType.toUpperCase()}</p>
              </div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {/* <div className="">
              <div className=" flex gap-5">
                <IoPersonCircleSharp  size={100}/>
                <div className="mt-5">
                  <p className="text-2xl">{userData.userName}</p>
                  <p className="text-xl" > {userData.userEmail}</p>
                </div>
              </div>
              <div>
              <h5 className="text-customGreen mt-5">{calculateExpiryDate(userData.subscriptionDate)}</h5>
              </div>
            </div>
            <div className="text-start">
                <dl>
                  <dt className="text-black">Subscription Date:</dt>
                  <dd className="my-2">{userData.subscriptionDate}</dd>
                  <dt className="text-black">Subscription Time</dt>
                  <dd className="my-2">{userData.subscriptionTime}</dd>
                  <dt className="text-black">Subscription Type</dt>
                  <dd className="my-2">{userData.subscriptionType}</dd>
                </dl>
            </div> */}
          </div>

    )
}