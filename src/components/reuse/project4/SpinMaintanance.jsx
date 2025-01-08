import React from "react";
import "../../../Style/Lock.css";

const SpinMaintanance = ({ setMaintananceLockScreen }) => {
  return (
    <div className="info-con-lock flex justify-center items-center min-h-screen">
      <div className="w-[90%] sm:w-[80vw] md:w-[65vw] lg:w-[50vw] h-[90vh] sm:h-auto md:h-[75vh] lg:h-[75vh] lg:mt-[120px] md:mt-[100px] mt-[100px] rounded-lg bg-white relative px-4 sm:px-6 lg:py-6 py-2 flex flex-col justify-start items-center shadow-md overflow-y-scroll info-con-lock1">
        <img 
          src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1736340623/DALL_E_2025-01-08_18.17.04_-_A_stylish_maintenance_announcement_image_for_a_roulette-themed_game_called_SpinCycle_Strategy._The_design_features_a_roulette_wheel_in_the_backgroun_jh6gmi.webp" 
          alt="We Are Under Maintanance" 
          className="w-full h-full"
        />
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full text-center">
          <div className="mb-6">
            <svg 
              className="w-16 h-16 mx-auto text-yellow-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Under Maintenance
          </h2>
          
          <p className="text-gray-600 mb-6">
            Sorry for the inconvenience. We are currently undergoing maintenance. 
            Once maintenance is complete, please clear your browsing data:
          </p>
          
          <div className="text-left bg-gray-50 rounded-md p-4 text-gray-600">
            <p className="mb-2">To clear your data:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to Settings</li>
              <li>Select History</li>
              <li>Click "Clear browsing data"</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinMaintanance;