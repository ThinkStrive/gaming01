import React, { useState } from 'react';
import { IoIosRefreshCircle } from "react-icons/io";

const SpinCycleMoney = () => {
  const twentyNineOne = [
    { level: "Level-1", units: [1, 1, 3] },
    { level: "Level-2", units: [2, 2, 6] },
    { level: "Level-3", units: [3, 3, 9] },
  ];

  const thirtyFiveOne = [
    { level: "Level-1", units: [1, 1, 2] },
    { level: "Level-2", units: [2, 2, 4] },
    { level: "Level-3", units: [3, 3, 6] },
  ];

  const [selectedOdds, setSelectedOdds] = useState("29:1");
  const [totalUnits, setTotalUnits] = useState(0);
  const [totalWagered, setTotalWagered] = useState(0);
  const [results, setResults] = useState({});
  const [unitSize, setUnitSize] = useState("1");
  const [activeUnit, setActiveUnit] = useState({ levelIndex: 0, unitIndex: 0 });

  const levels3 = selectedOdds === "29:1" ? twentyNineOne : thirtyFiveOne;

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "" || (!isNaN(value) && parseFloat(value) > 0)) {
      setUnitSize(value);
    }
  };

  const handleOddsChange = (event) => {
    setSelectedOdds(event.target.value);
    handleResetClick();
  };

  const handleLevelLogic = (type) => {
    const { levelIndex, unitIndex } = activeUnit;
    const currentLevel = levels3[levelIndex];

    if (type === "win") {
      if (levelIndex === 0) { // Level 1 win
        setActiveUnit({ levelIndex: 1, unitIndex: 0 }); // Move to Level 2, first unit
      } else if (levelIndex === 1) { // Level 2 win
        setActiveUnit({ levelIndex: 2, unitIndex: 0 }); // Move to Level 3, first unit
      } else if (levelIndex === 2) { // Level 3 win
        setActiveUnit({ levelIndex: 0, unitIndex: 0 }); // Move back to Level 2, first unit
      }
    } else { // Loss
      if (levelIndex === 0) { // Level 1 loss
        if (unitIndex < currentLevel.units.length - 1) {
          setActiveUnit({ levelIndex: 0, unitIndex: unitIndex + 1 }); // Move to next unit in Level 1
        } else {
          setActiveUnit({ levelIndex: 0, unitIndex: 0 }); // All Level 1 units lost, restart at Level 1, first unit
        }
      } else if (levelIndex === 1) { // Level 2 loss
        if (unitIndex < currentLevel.units.length - 1) {
          setActiveUnit({ levelIndex: 1, unitIndex: unitIndex + 1 }); // Move to next unit in Level 2
        } else {
          setActiveUnit({ levelIndex: 0, unitIndex: 0 }); // All Level 2 units lost, move to Level 1, first unit
        }
      } else if (levelIndex === 2) { // Level 3 loss
        if (unitIndex < currentLevel.units.length - 1) {
          setActiveUnit({ levelIndex: 2, unitIndex: unitIndex + 1 }); // Move to next unit in Level 3
        } else {
          setActiveUnit({ levelIndex: 0, unitIndex: 0 }); // All Level 3 units lost, move to Level 2, first unit
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
    } else {
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
  };
  return (
    <div className="bg-gradient-to-br from-purple-500 to-purple-900 h-[100%] flex flex-col items-center p-1 rounded-2xl w-full max-w-[450px] lg:max-w-[450px] md:max-w-[420px] sm:max-w-[380px]">
      
      
      <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 mt-2 gap-4">
        <select 
          value={selectedOdds}
          onChange={handleOddsChange}
          className="bg-purple-900 text-white px-3 py-1 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 me-1"
        >
          <option value="29:1">29:1</option>
          <option value="35:1">35:1</option>
        </select>

        <div className="flex gap-4">
          <h2 className="text-md text-white bg-purplegrad px-3 font-semibold sm:text-md rounded-xl py-1">
            Profits: {totalUnits}
          </h2>
          <h2 className="text-md text-white bg-purplegrad px-3 font-semibold sm:text-md rounded-xl py-1">
            Wagered: {totalWagered}
          </h2>
        </div>
      </div>
    </div>
        <div className=" mt-1 gap-5 text-center">
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
      
      <div className="flex  justify-between space-y-2 mt-1 w-full">
        <div className="flex gap-2">
          <p className="text-md font-semibold sm:text-md text-white">Unit Size:</p>
          <input
            type="text"
            value={unitSize}
            onChange={handleInputChange}
            className="px-3 py-1 me-2 border text-white font-semibold border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-purple-500"
            placeholder="Enter Unit Size"
          />
        </div>
        <button
          onClick={handleResetClick}
          className="bg-customBlack rounded-full p-0.5 text-white hover:bg- hover:rotate-180 hover:transition "
        >
          <IoIosRefreshCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default SpinCycleMoney;