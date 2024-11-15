import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import BlackRed from "./BlackRed";
import OddEven from "./OddEven";
import BigSmall from "./BigSmall";
import DozenCol from "./DozenCol";
import PatternPre from "../../project1/pattern/PatternPre";
import PatternBigSmall from "../../project1/pattern/PatternBigSmall";
import PatternOddEven from "../../project1/pattern/PatternOddEven";
import His from "./His";
import background from "../../../../assets/imgs/2002.i029.002_realistic-poker-club-illustration.jpg";
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
    // Initialize counters
    let redCount = 0;
    let blackCount = 0;
    let evenCount = 0;
    let oddCount = 0;
    let bigCount = 0;
    let smallCount = 0;
    let zeroCount = 0;

    // Loop through historyData to calculate the counts
    historyData.forEach((data) => {
      // Count color
      if (data.color === "red") {
        redCount++;
      } else if (data.color === "black") {
        blackCount++;
      }

      // Count size (small/big)
      if (data.size === "small") {
        smallCount++;
      } else if (data.size === "large") {
        bigCount++;
      }

      // Count odd/even
      if (data.odd_even === "odd") {
        oddCount++;
      } else if (data.odd_even === "even") {
        evenCount++;
      }

      if (
        data.color === "zero" &&
        data.odd_even === "zero" &&
        data.size === "zero"
      ) {
        zeroCount++;
      }
    });

    // Update the historyCountData state with the calculated counts
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
    <div>
      <div
        className=" p-3 w-full  rounded-lg"
        style={{
          background: "transparant",
        }}
      >
        <div className="flex w-full justify-evenly items-center mb-10 overflow-x-auto">
          <div className="flex justify-center items-center">
            <div className="bg-red-500 rounded-[50%] w-5 h-5"></div>
            <p className="mx-2 text-white font-semibold">
              {historyCountData.red}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-black rounded-[50%] w-5 h-5"></div>
            <p className="mx-2 text-white font-semibold">
              {historyCountData.black}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 text-white rounded-[25%] w-5 h-5 flex justify-center items-center">
              S
            </div>
            <p className="mx-2 text-white font-semibold">
              {historyCountData.small}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-red-500 text-white rounded-[25%] w-5 h-5 flex justify-center items-center">
              B
            </div>
            <p className="mx-2 text-white font-semibold">
              {historyCountData.big}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-blue-500 text-white rounded-[25%] w-5 h-5 flex justify-center items-center">
              O
            </div>
            <p className="mx-2 text-white font-semibold">
              {historyCountData.odd}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-red-500 text-white rounded-[25%] w-5 h-5 flex justify-center items-center">
              E
            </div>
            <p className="mx-2 text-white font-semibold">
              {historyCountData.even}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-green-500 text-white rounded-[25%] w-5 h-5 flex justify-center items-center">
              Z
            </div>
            <p className="mx-2 text-white font-semibold">
              {historyCountData.zero}
            </p>
          </div>
        </div>

        <div className="px-10 max-sm:p-3 overflow-scroll max-sm:h-48 h-72 custom-scrollbar">
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

        <div className="w-full h-10 flex justify-evenly items-center border-t border-gray-500 mt-4">
          <Link
            to="blackRed"
            className={`${
              activeTab === "blackRed"
                ? "bg-red-500 text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1 rounded-lg"
                : "transparent text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1"
            }`}
            onClick={() => setActiveTab("blackRed")}
          >
            Red / Black
          </Link>
          <Link
            to="bigSmall"
            className={`${
              activeTab === "bigSmall"
                ? "bg-red-500 text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1 rounded-lg"
                : "transparent text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1"
            }`}
            onClick={() => setActiveTab("bigSmall")}
          >
            Big / Small
          </Link>
          <Link
            to="oddEven"
            className={`${
              activeTab === "oddEven"
                ? "bg-red-500 text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1 rounded-lg"
                : "transparent text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1"
            }`}
            onClick={() => setActiveTab("oddEven")}
          >
            Odd / Even
          </Link>
          <Link
            to="dozenCol"
            className={`${
              activeTab === "dozenCol"
                ? "bg-red-500 text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1 rounded-lg"
                : "transparent text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1"
            }`}
            onClick={() => setActiveTab("dozenCol")}
          >
            Dozen / Column
          </Link>

          <Link
            to="his"
            className={`${
              activeTab === "his"
                ? "bg-red-500 text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1 rounded-lg"
                : "transparent text-white font-semibold p-2 mt-2 max-sm:text-xs max-sm:font-bold max-sm:p-1"
            }`}
            onClick={() => setActiveTab("his")}
          >
            History
          </Link>
        </div>
      </div>

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
