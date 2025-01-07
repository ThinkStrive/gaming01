import React, { useState } from 'react';
import { IoIosRefreshCircle } from "react-icons/io";

const BaccaratMoneyv3 = ({ onBack }) => {
  const levels3 = [
    { level: "Level-1", units: [1, 1, 1] },
    { level: "Level-2", units: [2, 2, 2] },
    { level: "Level-3", units: [3, 3, 3] },
    { level: "Level-4", units: [5, 5, 5] },
    { level: "Level-5", units: [8, 8, 8] },
    { level: "Level-6", units: [13, 13, 13] },
  ];

  const [totalUnits, setTotalUnits] = useState(0);
  const [totalWagered, setTotalWagered] = useState(0);
  const [results, setResults] = useState({});
  const [unitSize, setUnitSize] = useState("1");
  const [activeUnit, setActiveUnit] = useState({ levelIndex: 0, unitIndex: 0 });
  const [consecutiveLosses, setConsecutiveLosses] = useState(0);
  const [levelTwoResults, setLevelTwoResults] = useState([]);
  const [levelOneResults, setLevelOneResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "" || (!isNaN(value) && parseFloat(value) > 0)) {
      setUnitSize(value);
    }
  };

  const handleLevelLogic = (type) => {
    const { levelIndex, unitIndex } = activeUnit;

    if (levelIndex === 0) {
      // Level 1 specific logic
      const newResults = [...levelOneResults, type];
      setLevelOneResults(newResults);

      if (newResults.length >= 3) {
        const pattern = newResults.slice(-3).join("-");
        
        // Stay at level 0, index 0 for these patterns
        if (pattern === "win-loss-win" || pattern === "win-win-loss" || pattern === "loss-win-win" || pattern === "win-win-win") {
          setActiveUnit({ levelIndex: 0, unitIndex: 0 });
          setLevelOneResults([]);
          return;
        }
        
        
        // Move to level 2 for these patterns
        if (pattern === "win-loss-loss" || pattern === "loss-loss-win" || pattern === "loss-win-loss" || pattern === "loss-loss-loss") {
          setActiveUnit({ levelIndex: 1, unitIndex: 0 });
          setLevelOneResults([]);
          return;
        }
      }

      // Default progression within level 1
      if (unitIndex < 2) {
        setActiveUnit({ levelIndex: 0, unitIndex: unitIndex + 1 });
      }
    } else {
      // Logic for Level 2 and above remains the same
      const newResults = [...levelTwoResults, type];
      setLevelTwoResults(newResults);

      if (type === "win") {
        setConsecutiveLosses(0);

        if (unitIndex === 0) {
          setActiveUnit({ levelIndex: levelIndex - 1, unitIndex: 0 });
        } else if (unitIndex === 2) {
          setActiveUnit({ levelIndex: Math.max(0, levelIndex - 1), unitIndex: 0 });
        } else {
          setActiveUnit({ levelIndex, unitIndex: unitIndex + 1 });
        }
      } else {
        const newConsecutiveLosses = consecutiveLosses + 1;
        setConsecutiveLosses(newConsecutiveLosses);

        if (
          newResults.length >= 3 &&
          newResults.slice(-3).join("-") === "loss-win-loss"
        ) {
          if (levelIndex < levels3.length - 1) {
            setActiveUnit({ levelIndex: levelIndex + 1, unitIndex: 0 });
            setConsecutiveLosses(0);
            setLevelTwoResults([]);
          }
        } else if (newConsecutiveLosses >= 2 && levelIndex < levels3.length - 1) {
          setActiveUnit({ levelIndex: levelIndex + 1, unitIndex: 0 });
          setConsecutiveLosses(0);
          setLevelTwoResults([]);
        } else if (unitIndex < 2) {
          setActiveUnit({ levelIndex, unitIndex: unitIndex + 1 });
        }
      }
    }
  };

  const handleCheckboxChange = (type) => {
    const { levelIndex, unitIndex } = activeUnit;
    const currentLevel = levels3[levelIndex];
    const currentUnit = currentLevel.units[unitIndex];
    const adjustedUnit = currentUnit * parseFloat(unitSize);
    const key = `${currentLevel.level}-${currentUnit}-${unitIndex}`;

    if (type === "win") {
      setResults((prev) => ({ ...prev, [key]: "win" }));
      setTotalUnits((prev) => prev + adjustedUnit);
      setTotalWagered((prev) => prev + adjustedUnit);
    } else if (type === "loss") {
      setResults((prev) => ({ ...prev, [key]: "loss" }));
      setTotalUnits((prev) => prev - adjustedUnit);
      setTotalWagered((prev) => prev + adjustedUnit);
    }

    handleLevelLogic(type);

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
    setConsecutiveLosses(0);
    setLevelTwoResults([]);
    setLevelOneResults([]);
  };

  return (
    <div className="bg-gradient-to-br from-purple-500 to-purple-900 h-[100%] flex flex-col items-center p-1 rounded-2xl w-full">
      <div className='w-full text-end'>
        <button onClick={onBack} className="bg-blue-700 cursor-pointer text-white py-1 px-4 rounded-lg mb-4">
          Back 
        </button>
      </div>
      <h1 className="text-2xl font-semibold text-white bg-customBlack w-full text-center rounded-xl md:text-xl sm:text-md">
        Monthly Member-Only Baccarat
      </h1>
      <div className="flex justify-between mt-0.5">
        <h2 className="text-md text-white bg-purplegrad px-3 font-semibold sm:text-md rounded-xl me-3 py-1">
          Profits: {totalUnits}
        </h2>
        <h2 className="text-md text-white bg-purplegrad px-3 font-semibold sm:text-md rounded-xl me-3 py-1">
          Wagered: {totalWagered}
        </h2>
      </div>

      <div className="w-full max-w-4xl mt-1">
        {levels3.map(({ level, units }, levelIndex) => (
          <div key={level} className="bg-purplegrad rounded-lg shadow-md p-1 mb-2">
            <h3 className="text-xl font-bold text-purple-100 mb-2 bg-purple-600 text-center rounded-md">
              {level} {levelIndex === activeUnit.levelIndex && "(Active)"}
            </h3>
            <div className="flex flex-wrap justify-between">
              {units.map((unit, unitIndex) => (
                <div
                  key={`${level}-${unit}-${unitIndex}`}
                  className={`flex flex-col items-center justify-center border-2 p-1 rounded-md shadow-sm transition-all duration-300 transform ${
                    activeUnit.levelIndex === levelIndex && activeUnit.unitIndex === unitIndex
                      ? "border-purple-200 bg-superPurple text-white scale-95 shadow-xl"
                      : "bg-purple-300 text-gray-300 hover:bg-purple-400 hover:scale-90"
                  }`}
                >
                  {activeUnit.levelIndex === levelIndex && activeUnit.unitIndex === unitIndex ? (
                    <>
                      <span className="text-sm font-semibold px-2 rounded-md mb-2 border border-purple-200 bg-purplegrad text-white">
                        Unit: {unit * parseFloat(unitSize)}
                      </span>
                      <div className="flex flex-wrap">
                        <label className="checkbox-label font-semibold text-white me-2">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600 bg-gray-100 rounded focus:ring focus:ring-blue-300 focus:ring-opacity-50 me-1"
                            checked={results[`${level}-${unit}-${unitIndex}`] === "win"}
                            onChange={() => handleCheckboxChange("win")}
                          />
                          Win
                        </label>
                        <label className="checkbox-label text-white font-semibold">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600 bg-gray-100 rounded focus:ring focus:ring-blue-300 focus:ring-opacity-50 me-1"
                            checked={results[`${level}-${unit}-${unitIndex}`] === "loss"}
                            onChange={() => handleCheckboxChange("loss")}
                          />
                          Loss
                        </label>
                      </div>
                    </>
                  ) : (
                    <span className="text-sm italic flex justify-center items-center px-4 bg-purple-900 rounded-md">
                      <img
                        src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1734086104/betamount_t4qyyk.gif"
                        width={30}
                        height={30}
                        alt="Upcoming Unit"
                      />
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
          <p className="text-md font-semibold sm:text-md text-white">Unit Size:</p>
          <input
            type="text"
            value={unitSize}
            onChange={handleInputChange}
            className="px-3 py-1 border text-white font-semibold font-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-purple-500"
            placeholder="Enter Unit Size"
          />
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
      </div>
    </div>
  );
};

export default BaccaratMoneyv3;