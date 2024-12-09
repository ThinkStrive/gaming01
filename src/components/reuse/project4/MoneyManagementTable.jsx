import React, { useState } from "react";
import { GiTrophy } from "react-icons/gi";
import { FaHeartBroken } from "react-icons/fa";

const ManualManagement = () => {
  const initialState = {
    level1: { pairs: [null, null, null], active: true },
    level2: { pairs: [null, null, null], active: false },
    level3: { pairs: [null, null, null], active: false },
  };

  const [levels, setLevels] = useState(initialState);
  const [resetKey, setResetKey] = useState(0);
  const [selectedRatio, setSelectedRatio] = useState("29:1");

  const handleSelection = (levelKey, index, result) => {
    setLevels((prev) => {
      const currentLevel = prev[levelKey];
      const updatedPairs = [...currentLevel.pairs];
      updatedPairs[index] = result;

      const allLoss = updatedPairs.every((pair) => pair === "loss");
      const anyWin = updatedPairs.includes("win");

      const updatedLevels = { ...prev };

      if (levelKey === "level1" && anyWin) {
        updatedLevels.level1.active = false;
        updatedLevels.level2.active = true;
      } else if (levelKey === "level2") {
        if (anyWin) {
          updatedLevels.level2.active = false;
          updatedLevels.level3.active = true;
        } else if (allLoss) {
          updatedLevels.level2.active = false;
          updatedLevels.level1.active = true;
          updatedLevels.level1.pairs = [null, null, null];
          setResetKey((prev) => prev + 1);
        }
      } else if (levelKey === "level3") {
        if (anyWin) {
          updatedLevels.level3.active = false;
          updatedLevels.level3.pairs = [null, null, null];
          updatedLevels.level1.active = true;
          updatedLevels.level1.pairs = [null, null, null];
          setResetKey((prev) => prev + 1);
        } else if (allLoss) {
          updatedLevels.level3.active = false;
          updatedLevels.level2.active = true;
          updatedLevels.level2.pairs = [null, null, null];
          setResetKey((prev) => prev + 1);
        }
      }

      updatedLevels[levelKey].pairs = updatedPairs;
      return updatedLevels;
    });
  };

  const resetLevels = () => {
    setLevels({ ...initialState });
    setResetKey((prev) => prev + 1);
  };

  const handleRatioChange = (event) => {
    setSelectedRatio(event.target.value);
  };

  const getTextForLevel = (levelKey) => {
    if (selectedRatio === "29:1") {
      if (levelKey === "level1") return "1-1-3";
      if (levelKey === "level2") return "2-2-6";
      if (levelKey === "level3") return "3-3-9";
    } else if (selectedRatio === "35:1") {
      if (levelKey === "level1") return "1-1-2";
      if (levelKey === "level2") return "2-2-4";
      if (levelKey === "level3") return "3-3-6";
    }
    return "";
  };

  const renderContainer = (levelKey, level) => {
    const text = getTextForLevel(levelKey);
    return (
      <div className="w-[350px] p-2">
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            margin: "10px",
            backgroundColor: level.active ? "#7F00FF" : "#D9D9D9",
            pointerEvents: level.active ? "auto" : "none",
            color: level.active ? "#ffffff" : "#000000",
          }}
          className="text-white rounded-2xl font-bold"
          key={`${levelKey}-${resetKey}`}
        >
          <h3
            className="py-1 rounded-xl"
            style={{
              color: level.active ? "#ffffff" : "#000000",
              backgroundColor: level.active ? "#2d2e32" : "#D9D9D9",
            }}
          >
            {levelKey.toUpperCase()} &nbsp;({text})
          </h3>
          {level.pairs.map((pair, index) => (
            <div key={index} className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name={`${levelKey}-${index}-${resetKey}`}
                  disabled={!level.active}
                  onClick={() => handleSelection(levelKey, index, "win")}
                />
                <GiTrophy className="trophy-icon" size={25} /> Win
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name={`${levelKey}-${index}-${resetKey}`}
                  disabled={!level.active}
                  onClick={() => handleSelection(levelKey, index, "loss")}
                />
                <FaHeartBroken className="heart-icon" size={25} /> Loss
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-end w-full mb-4">
        <select
          value={selectedRatio}
          onChange={handleRatioChange}
          className="bg-white text-black px-3 py-2 rounded-xl font-semibold"
        >
          <option value="29:1">29:1</option>
          <option value="35:1">35:1</option>
        </select>
        <button
          onClick={resetLevels}
          style={{ marginLeft: "10px" }}
          className="bg-white text-black px-3 py-1 rounded-xl font-semibold"
        >
          Reset All
        </button>
      </div>
      {renderContainer("level1", levels.level1)}
      {renderContainer("level2", levels.level2)}
      {renderContainer("level3", levels.level3)}
    </div>
  );
};

export default ManualManagement;
