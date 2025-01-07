import React, { useState ,useEffect} from "react";
import { IoIosRefreshCircle } from "react-icons/io";
import BaccaratMoneyv3 from "./Version3Money";
import axios from "axios";
import { USER_DETAILS } from "../../api/ApiDetails";
import { toast } from "react-toastify";
import { FaLock } from "react-icons/fa";
import '../../../Style/project3.css'
const BaccaratMoney = () => {
  const levels1 = [
    { level: "Level-1", units: [1, 3, 7] },
    { level: "Level-2", units: [3, 6, 10] },
    { level: "Level-3", units: [5, 10, 15] },
  ];

  const levels2 = [
    { level: "Level-1", units: [1, 2, 3, 4] },
    { level: "Level-2", units: [2, 3, 4, 5, 6] },
  ];

  const [totalUnits, setTotalUnits] = useState(0);
  const [totalWagered, setTotalWagered] = useState(0);
  const [results, setResults] = useState({});
  const [unitSize, setUnitSize] = useState("1");
  const [selectedVersion, setSelectedVersion] = useState("Version 1");
  const [levels, setLevels] = useState(levels1);
  const [activeUnit, setActiveUnit] = useState({ levelIndex: 0, unitIndex: 0 });
  const [view, setView] = useState("BaccaratMoney");


  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "" || (!isNaN(value) && parseFloat(value) > 0)) {
      setUnitSize(value);
    }
  };

  const handleVersionChange = (event) => {
    const version = event.target.value;
    setSelectedVersion(version);
    setLevels(version === "Version 1" ? levels1 : levels2);
    setResults({});
    setTotalUnits(0);
    setTotalWagered(0);
    setActiveUnit({ levelIndex: 0, unitIndex: 0 });
  };

  const moveToNextUnit = () => {
    const { levelIndex, unitIndex } = activeUnit;
    const currentLevel = levels[levelIndex];

    if (unitIndex < currentLevel.units.length - 1) {
      setActiveUnit({ levelIndex, unitIndex: unitIndex + 1 });
    } else if (levelIndex < levels.length - 1) {
      setActiveUnit({ levelIndex: levelIndex + 1, unitIndex: 0 });
    }
  };

  const moveToPreviousUnit = () => {
    const { levelIndex, unitIndex } = activeUnit;
    if (unitIndex > 0) {
      setActiveUnit({ levelIndex, unitIndex: unitIndex - 1 });
    } else if (levelIndex > 0) {
      const prevLevel = levels[levelIndex - 1];
      setActiveUnit({ levelIndex: levelIndex - 1, unitIndex: prevLevel.units.length - 1 });
    } else {
      // Reset to Level-1 Unit 1
      setActiveUnit({ levelIndex: 0, unitIndex: 0 });
    }
  };

  
  
  const handleCheckboxChange = (type) => {
    const { levelIndex, unitIndex } = activeUnit; // Destructure active unit
    const currentLevel = levels[levelIndex]; // Get the current level
    const currentUnit = currentLevel.units[unitIndex]; // Get the current unit
    const adjustedUnit = currentUnit * unitSize; // Calculate adjusted unit
    const key = `${currentLevel.level}-${currentUnit}`; // Create a unique key for the unit
  
    console.log("active unit",activeUnit);
    if (type === "win") {
      setResults((prev) => ({ ...prev, [key]: "win" }));
      setTotalUnits((prev) => prev + adjustedUnit);
      setTotalWagered((prev) => prev + adjustedUnit);
  

      if (selectedVersion === "Version 1") {
        if (levelIndex === 0 && unitIndex === currentLevel.units.length - 1) {
          setActiveUnit({ levelIndex: 0, unitIndex: 0 });
        } else {
          moveToPreviousUnit();
        }
      }
      if(selectedVersion === "Version 2"){
        moveToPreviousUnit();
      }

      if (selectedVersion ==="Version 1" && currentLevel.level === "Level-2" && unitIndex === 0){
        if(totalUnits <= -3 ){
          setActiveUnit({ levelIndex :1, unitIndex: 0 })
        }
      }

    } else if (type === "loss") {
      setResults((prev) => ({ ...prev, [key]: "loss" }));
      setTotalUnits((prev) => prev - adjustedUnit);
      setTotalWagered((prev) => prev + adjustedUnit);
      moveToNextUnit(); 
    }
  
    // Uncheck the checkbox after 2000ms
    setTimeout(() => {
      setResults((prev) => ({ ...prev, [key]: undefined }));
    }, 1000);
  };
  

  const handleResetClick = () => {
    setResults({});
    setTotalUnits(0);
    setTotalWagered(0);
    setUnitSize("1");
    setActiveUnit({ levelIndex: 0, unitIndex: 0 });
  };

  const handleMonthlyClick = async () => {
    try {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      const response = await axios.get(`${USER_DETAILS}/${userData._id}`);
      const isMonthlySubscriber = response.data.data?.projectSubscription?.baccarat?.subscriptionType === "monthly";
  
      if (isMonthlySubscriber) {
        setView("BaccaratMoneyv3");
      } else {
        toast.error("You are not a monthly subscriber. Please subscribe to access this feature.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error checking subscription status:", error);
    }
  };

  if (view === "BaccaratMoneyv3") {
    return <BaccaratMoneyv3 onBack={() => setView("BaccaratMoney")} />;
  }



  return (
    <div className="bg-gradient-to-br from-purple-500 to-purple-900 h-[100%] flex flex-col items-center p-1 rounded-2xl w-full">

    <div className="relative inline-block group">
      <button onClick={handleMonthlyClick} className="shimmer-button">
        <div className="shimmer-effect" />
        <span className="ml-2 font-semibold">Exclusive For Monthly Member</span>
      </button>
      <span className="new-badge">New</span>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Click to unlock exclusive content
      </div>
    </div>

      <h1 className="text-2xl font-semibold text-white bg-customBlack w-full text-center rounded-xl md:text-xl sm:text-md">
        Data Driven Baccarat
      </h1>
      <div className="flex justify-between mt-0.5">
        <h2 className="text-md text-white  bg-purplegrad px-3 font-semibold sm:text-md rounded-xl me-3 py-1">
         Profits: &nbsp; {totalUnits}
        </h2>
        <h2 className="text-md text-white  bg-purplegrad px-3 font-semibold sm:text-md rounded-xl me-3 py-1">
         Wagered: &nbsp; {totalWagered}
        </h2>
      </div>
      

      <div className="w-full max-w-4xl mt-1">
        {levels.map(({ level, units }, levelIndex) => (
          <div key={level} className="bg-purplegrad rounded-lg  shadow-md p-1 mb-2">
            <h3 className="text-xl font-bold text-purple-100 mb-2 bg-purple-600 text-center  rounded-md">
              &nbsp; {level}
            </h3>
             {/* another UI */}
            <div className="flex flex-wrap justify-between">
              {units.map((unit, unitIndex) => (
                <div
                  key={`${level}-${unit}`}
                  className={`flex flex-col  items-center justify-center border-2 p-1 rounded-md shadow-sm transition-all duration-300 transform ${
                    activeUnit.levelIndex === levelIndex && activeUnit.unitIndex === unitIndex
                      ? "border-purple-200 bg-superPurple text-white scale-95 shadow-xl"
                      : "bg-purple-300 text-gray-300 hover:bg-purple-400 hover:scale-90"
                  }`}
                >
                  {activeUnit.levelIndex === levelIndex && activeUnit.unitIndex === unitIndex ? (
                    <>
                      <span className="text-sm font-semibold px-2  rounded-md mb-2 border border-purple-200 bg-purplegrad text-white">
                        Unit: {unit * unitSize}
                      </span>
                      <div className="flex flex-wrap">
                        <label className="checkbox-label  font-semibold text-white me-2">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600 bg-gray-100 rounded focus:ring focus:ring-blue-300 focus:ring-opacity-50 me-1"
                            checked={results[`${level}-${unit}`] === "win"}
                            onChange={() => handleCheckboxChange("win")}
                          />
                          Win
                        </label>
                        <label className="checkbox-label text-white font-semibold">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600 bg-gray-100 rounded focus:ring focus:ring-blue-300 focus:ring-opacity-50 me-1"
                            checked={results[`${level}-${unit}`] === "loss"}
                            onChange={() => handleCheckboxChange("loss")}
                          />
                          Loss
                        </label>
                      </div>
                    </>
                  ) : (
                    <span className="text-sm italic flex justify-center items-center  px-4  bg-purple-900 rounded-md">
                     <img src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1734086104/betamount_t4qyyk.gif" width={30} height={30} alt="Upcoming Unit" />

                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start space-y-2 mt-1">
        <div className="flex gap-2">
          <p className="text-xl font-semibold mt-1 sm:text-md text-white">Select Version :</p>
          <select
            value={selectedVersion}
            onChange={handleVersionChange}
            className="px-4 py-1 border text-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-purple-500"
          >
            <option value="Version 1">Version 1</option>
            <option value="Version 2">Version 2</option>
          </select>
          <button
            onClick={handleResetClick}
            className="bg-customBlack rounded-full p-0.5 text-white hover:bg- hover:rotate-180 hover:transition"
          >
            <IoIosRefreshCircle size={30} />
            
          </button>
        </div>
        <div className=" mt-1 gap-5">
          <input
            type="text"
            placeholder="Enter StopLoss"
            className=" px-2 py-1 bg-purplegrad text-white rounded-lg my-1 mx-1 focus:outline-none focus:ring-2 placeholder-purple-100 text-sm"
          />
          <input
            type="text"
            placeholder="Enter Goal"
            className=" px-2 py-1 bg-purplegrad text-white rounded-lg my-1 mx-1 focus:outline-none focus:ring-2 placeholder-purple-100 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <p className="text-xl font-semibold sm:text-md text-white">Unit Size :</p>
          <input
            type="text"
            value={unitSize}
            onChange={handleInputChange}
            className="px-3 py-1 border text-white font-semibold font-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-purple-500"
            placeholder="Enter Unit Size"
          />
        </div>
      </div>
    </div>
  );
};

export default BaccaratMoney;

            {/* another UI */}
            {/* <div className="flex flex-wrap justify-between">
              {units.map((unit, unitIndex) => (
                <div
                  key={`${level}-${unit}`}
                  className={`flex flex-col  border-2 p-1 rounded-md shadow-sm transition-all duration-300 transform ${
                    activeUnit.levelIndex === levelIndex && activeUnit.unitIndex === unitIndex
                      ? "border-purple-500 bg-superPurple text-white scale-95 shadow-xl"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-90"
                  }`}
                >
                  {activeUnit.levelIndex === levelIndex && activeUnit.unitIndex === unitIndex ? (
                    <>
                      <span className="text-sm font-semibold px-2  rounded-xl mb-2 border border-purple-200 bg-white text-black">
                        Unit: {unit * unitSize}
                      </span>
                      <div className="flex flex-wrap">
                        <label className="checkbox-label  font-semibold text-white me-3">
                          <input
                            type="checkbox"
                            className="checkbox-input"
                            checked={results[`${level}-${unit}`] === "win"}
                            onChange={() => handleCheckboxChange("win")}
                          />
                          Win
                        </label>
                        <label className="checkbox-label text-white font-semibold">
                          <input
                            type="checkbox"
                            className="checkbox-input"
                            checked={results[`${level}-${unit}`] === "loss"}
                            onChange={() => handleCheckboxChange("loss")}
                          />
                          Loss
                        </label>
                      </div>
                    </>
                  ) : (
                    <span className="text-sm italic font-light text-center py-1 bg-gray-900 rounded-md">
                      Your Next Unit
                    </span>
                  )}
                </div>
              ))}
            </div> */}