import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import BlackRed from "./BlackRed";
import OddEven from "./OddEven";
import BigSmall from "./BigSmall";
import DozenCol from "./DozenCol";
import PatternPre from "../../project1/pattern/PatternPre";
import PatternBigSmall from "../../project1/pattern/PatternBigSmall";
import PatternOddEven from "../../project1/pattern/PatternOddEven";
import His from "./His";
import "../../../../Style/History.css";

const History = ({ historyData, isAlertAllowed }) => {
  const [activeTab, setActiveTab] = useState("blackRed");

  const [historyCountData, setHistoryCountData] = useState({
    red: 0,
    black: 0,
    even: 0,
    odd: 0,
    big: 0,
    small: 0,
    zero: 0,
  });

  const handleFindCountOfAllData = () => {
    let redCount = 0;
    let blackCount = 0;
    let evenCount = 0;
    let oddCount = 0;
    let bigCount = 0;
    let smallCount = 0;
    let zeroCount = 0;

    historyData.forEach((data) => {
      if (data.color === "red") redCount++;
      if (data.color === "black") blackCount++;
      if (data.size === "small") smallCount++;
      if (data.size === "large") bigCount++;
      if (data.odd_even === "odd") oddCount++;
      if (data.odd_even === "even") evenCount++;
      if (
        data.color === "zero" &&
        data.odd_even === "zero" &&
        data.size === "zero"
      )
        zeroCount++;
    });

    setHistoryCountData({
      red: redCount,
      black: blackCount,
      even: evenCount,
      odd: oddCount,
      big: bigCount,
      small: smallCount,
      zero: zeroCount,
    });
  };

  useEffect(() => {
    handleFindCountOfAllData();
  }, [historyData]);

  return (
    <div className="mb-5 md:mb-8 bg-purple-950 rounded-lg text-white px-3 py-3 md:p-8">
      {/* Summary Section */}
      <div className="flex flex-wrap justify-evenly items-center gap-4 md:gap-6 mb-5 md:mb-8 bg-darkNavy p-1.5 md:p-3 rounded-xl">
        {[
          { color: "bg-red-500", label: historyCountData.red, icon: "R" },
          { color: "bg-black", label: historyCountData.black, icon: "BL" },
          { color: "bg-blue-500", label: historyCountData.small, icon: "S" },
          { color: "bg-red-500", label: historyCountData.big, icon: "B" },
          { color: "bg-blue-500", label: historyCountData.odd, icon: "O" },
          { color: "bg-red-500", label: historyCountData.even, icon: "E" },
          { color: "bg-green-500", label: historyCountData.zero, icon: "Z" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-4">
            <div
              className={`${item.color} text-white rounded-full w-8 md:w-10 h-8 md:h-10 flex justify-center items-center text-base md:text-lg font-bold`}
            >
              {item.icon}
            </div>
            <p className="text-base md:text-lg font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Routes Section */}
      <div className="overflow-auto custom-scrollbar h-[300px] py-2 bg-darkNavy rounded-xl px-2 md:px-4">
        <Routes>
          <Route
            path="/blackRed"
            element={<BlackRed historyData={historyData} />}
          />
          <Route
            path="/oddEven"
            element={<OddEven historyData={historyData} />}
          />
          <Route
            path="/bigSmall"
            element={<BigSmall historyData={historyData} />}
          />
          <Route
            path="/dozenCol"
            element={<DozenCol historyData={historyData} />}
          />
          <Route path="/his" element={<His historyData={historyData} />} />
        </Routes>
      </div>

      {/* Tabs Section */}
      <div
        className="flex items-center justify-between mt-6 pt-4 px-3 md:px-6 space-x-2 "
        style={{
          borderTop: "1px solid white",
        }}
      >
        {[
          {
            fullLabel: "Red Black",
            shortLabel: "R / B",
            path: "blackRed",
            tab: "blackRed",
          },
          {
            fullLabel: "Big Small",
            shortLabel: "B / S",
            path: "bigSmall",
            tab: "bigSmall",
          },
          {
            fullLabel: "Odd Even",
            shortLabel: "O / E",
            path: "oddEven",
            tab: "oddEven",
          },
          {
            fullLabel: "Dozen Column",
            shortLabel: "D / C",
            path: "dozenCol",
            tab: "dozenCol",
          },
          { fullLabel: "History", shortLabel: "History", path: "his", tab: "his" },
        ].map((item) => (
          <Link
            key={item.tab}
            to={item.path}
            className={`${
              activeTab === item.tab ? "bg-red-500" : "text-white bg-[#7F00FF]"
            } px-2 py-1 rounded-md font-semibold sm:px-2.5 sm:py-1.5 text-sm  sm:text-base md:px-3 md:py-2`}
            onClick={() => setActiveTab(item.tab)}
          >
            <span className="hidden sm:inline">{item.fullLabel}</span>
            <span className="sm:hidden">{item.shortLabel}</span>
          </Link>
        ))}
      </div>

      {/* Pattern Components */}
      <div>
        <PatternPre historyData={historyData} isAlertAllowed={isAlertAllowed} />
        <PatternBigSmall
          historyData={historyData}
          isAlertAllowed={isAlertAllowed}
        />
        <PatternOddEven
          historyData={historyData}
          isAlertAllowed={isAlertAllowed}
        />
      </div>
    </div>
  );
};

export default History;
