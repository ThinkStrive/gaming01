import React from "react";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  LabelList,
} from "recharts";

const StreetTable1 = ({singleStreetData,nonSingleStreetData,singleTableST,singleTableLT,singleStreetCount}) => {
  //----------short term trend--------------
  const percentSingle1ST = Math.round(singleTableST["1-3"] / 12) / 35;
  const percentSingle2ST = Math.round(singleTableST["4-6"] / 12) / 35;
  const percentSingle3ST = Math.round(singleTableST["7-9"] / 12) / 35;
  const percentSingle4ST = Math.round(singleTableST["10-12"] / 12) / 35;
  const percentSingle5ST = Math.round(singleTableST["13-15"] / 12) / 35;
  const percentSingle6ST = Math.round(singleTableST["16-18"] / 12) / 35;
  const percentSingle7ST = Math.round(singleTableST["19-21"] / 12) / 35;
  const percentSingle8ST = Math.round(singleTableST["22-24"] / 12) / 35;
  const percentSingle9ST = Math.round(singleTableST["25-27"] / 12) / 35;
  const percentSingle10ST = Math.round(singleTableST["28-30"] / 12) / 35;
  const percentSingle11ST = Math.round(singleTableST["31-33"] / 12) / 35;
  const percentSingle12ST = Math.round(singleTableST["34-36"] / 12) / 35;

  // const shortSingleScore1 =
  //   percentSingle1ST == 0 ? "COLD" : percentSingle1ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore2 =
  //   percentSingle2ST == 0 ? "COLD" : percentSingle2ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore3 =
  //   percentSingle3ST == 0 ? "COLD" : percentSingle3ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore4 =
  //   percentSingle4ST == 0 ? "COLD" : percentSingle4ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore5 =
  //   percentSingle5ST == 0 ? "COLD" : percentSingle5ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore6 =
  //   percentSingle6ST == 0 ? "COLD" : percentSingle6ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore7 =
  //   percentSingle7ST == 0 ? "COLD" : percentSingle7ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore8 =
  //   percentSingle8ST == 0 ? "COLD" : percentSingle8ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore9 =
  //   percentSingle9ST == 0 ? "COLD" : percentSingle9ST < 0.36 ? "STABLE" : "HOT";
  // const shortSingleScore10 =
  //   percentSingle10ST == 0
  //     ? "COLD"
  //     : percentSingle10ST < 0.36
  //     ? "STABLE"
  //     : "HOT";
  // const shortSingleScore11 =
  //   percentSingle11ST == 0
  //     ? "COLD"
  //     : percentSingle11ST < 0.36
  //     ? "STABLE"
  //     : "HOT";
  // const shortSingleScore12 =
  //   percentSingle12ST == 0
  //     ? "COLD"
  //     : percentSingle12ST < 0.36
  //     ? "STABLE"
  //     : "HOT";
  //--------------Long Term Trend----------------

  const percentSingle1LT = Math.round(singleTableLT["1-3"] / 36) / 35;
  const percentSingle2LT = Math.round(singleTableLT["4-6"] / 36) / 35;
  const percentSingle3LT = Math.round(singleTableLT["7-9"] / 36) / 35;
  const percentSingle4LT = Math.round(singleTableLT["10-12"] / 36) / 35;
  const percentSingle5LT = Math.round(singleTableLT["13-15"] / 36) / 35;
  const percentSingle6LT = Math.round(singleTableLT["16-18"] / 36) / 35;
  const percentSingle7LT = Math.round(singleTableLT["19-21"] / 36) / 35;
  const percentSingle8LT = Math.round(singleTableLT["22-24"] / 36) / 35;
  const percentSingle9LT = Math.round(singleTableLT["25-27"] / 36) / 35;
  const percentSingle10LT = Math.round(singleTableLT["28-30"] / 36) / 35;
  const percentSingle11LT = Math.round(singleTableLT["31-33"] / 36) / 35;
  const percentSingle12LT = Math.round(singleTableLT["34-36"] / 36) / 35;



  // const longSingleScore1 =
  //   singleStreetCount['1-3'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['1-3'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore2 =
  // singleStreetCount['4-6'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['4-6'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore3 =
  // singleStreetCount['7-9'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['7-9'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore4 =
  // singleStreetCount['10-12'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['10-12'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore5 =
  // singleStreetCount['13-15'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['13-15'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore6 =
  // singleStreetCount['16-18'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['16-18'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore7 =
  // singleStreetCount['19-21'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['19-21'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore8 =
  // singleStreetCount['22-24'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['22-24'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore9 =
  // singleStreetCount['25-27'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['25-27'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore10 =
  // singleStreetCount['28-30'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['28-30'] <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore11 =
  // singleStreetCount['31-33']  <= 2
  //     ? "COLD"
  //     : singleStreetCount['31-33']  <= 3
  //     ? "STABLE"
  //     : "HOT";
  // const longSingleScore12 =
  // singleStreetCount['34-36'] <= 2
  //     ? "COLD"
  //     : singleStreetCount['34-36'] <= 3
  //     ? "STABLE"
  //     : "HOT";

  const calculatePercentage = (numerator, ...nums) => {
    const total = nums.reduce((acc, num) => acc + (num || 0), 0);
    return total === 0 ? 0 : `${Math.round((numerator / total) * 100)}`;
  };

  const one_3 = calculatePercentage(
    singleStreetData.one_three,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const four_6 = calculatePercentage(
    singleStreetData.four_six,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const seven_9 = calculatePercentage(
    singleStreetData.seven_nine,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const ten_12 = calculatePercentage(
    singleStreetData.ten_twelve,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const thirteen_15 = calculatePercentage(
    singleStreetData.thirteen_fifteen,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const sixteen_18 = calculatePercentage(
    singleStreetData.sixteen_eighteen,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const nineteen_21 = calculatePercentage(
    singleStreetData.nineteen_twentyOne,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const twentyTwo_24 = calculatePercentage(
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const twentyFive_27 = calculatePercentage(
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const twentyEight_30 = calculatePercentage(
    singleStreetData.twentyEight_thirty,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const thirtyOne_33 = calculatePercentage(
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );
  const thirtyFour_36 = calculatePercentage(
    singleStreetData.thirtyFour_thirtySix,
    singleStreetData.one_three,
    singleStreetData.four_six,
    singleStreetData.seven_nine,
    singleStreetData.ten_twelve,
    singleStreetData.thirteen_fifteen,
    singleStreetData.sixteen_eighteen,
    singleStreetData.nineteen_twentyOne,
    singleStreetData.twentyTwo_twentyFour,
    singleStreetData.twentyFive_twentySeven,
    singleStreetData.twentyEight_thirty,
    singleStreetData.thirtyOne_thirtyThree,
    singleStreetData.thirtyFour_thirtySix
  );

 
///short Term Trend Hot, Stable, Cold Seperation

const categorizedTable = () => {
  const entries = Object.entries(singleTableLT); 

  // Sort entries by value in descending order
  entries.sort((a, b) => b[1] - a[1]);

  const categorized = {};

  entries.forEach(([key, value], index) => {
    if (value === 0) {
      // If value is 0, categorize as "COLD"
      categorized[key] = "";
    } else if (index < 3) {
      // Top 3 scores -> "HOT"
      categorized[key] = "HOT";
    } else if (index < 9) {
      // Next 6 scores -> "STABLE"
      categorized[key] = "STABLE";
    } else {
      // Remaining -> "COLD"
      categorized[key] = "COLD";
    }
  });

  return categorized;
};


const categorizedData = categorizedTable();

///Long Term Trend Hot, Stable, Cold Seperation

const categorizedTable1 = () => {
  const entries = Object.entries(singleTableLT); 

  // Sort entries by value in descending order
  entries.sort((a, b) => b[1] - a[1]);

  const categorized = {};

  entries.forEach(([key, value], index) => {
    if (value === 0) {
      categorized[key] = "";
    } else if (index < 3) {
      // Top 3 scores -> "HOT"
      categorized[key] = "HOT";
    } else if (index < 9) {
      // Next 6 scores -> "STABLE"
      categorized[key] = "STABLE";
    } else {
      // Remaining -> "COLD"
      categorized[key] = "COLD";
    }
  });

  return categorized;
};


const categorizedData1 = categorizedTable1();



  const Short = [
    { name: "1-3", pv: percentSingle1ST * 3000 ,category:categorizedData['1-3']},
    { name: "4-6", pv: percentSingle2ST * 3000 ,category:categorizedData['4-6']},
    { name: "7-9", pv: percentSingle3ST * 3000 ,category:categorizedData['7-9']},
    { name: "10-12", pv: percentSingle4ST * 3000 ,category:categorizedData['10-12']},
    { name: "13-15", pv: percentSingle5ST * 3000 ,category:categorizedData['13-15']},
    { name: "16-18", pv: percentSingle6ST * 3000 ,category:categorizedData['16-18']},
    { name: "19-21", pv: percentSingle7ST * 3000 ,category:categorizedData['19-21']},
    { name: "22-24", pv: percentSingle8ST * 3000 ,category:categorizedData['22-24']},
    { name: "25-27", pv: percentSingle9ST * 3000 ,category:categorizedData['25-27']},
    { name: "28-30", pv: percentSingle10ST * 3000 ,category:categorizedData['28-30']},
    { name: "31-33", pv: percentSingle11ST * 3000 ,category:categorizedData['31-33']},
    { name: "34-36", pv: percentSingle12ST * 3000 ,category:categorizedData['34-36']},
  ].map((entry) => {
    let fillColor = "#A78BFA"; // Default gradient
    if (entry.category === "HOT") fillColor = "#5B21B6";
    else if (entry.category === "STABLE") fillColor = "#8B5CF6";
    return { ...entry, fill: fillColor };
  });


  const Long = [
    { name: "1-3", pv: percentSingle1LT * 3000 ,category:categorizedData1['1-3']},
    { name: "4-6", pv: percentSingle2LT * 3000 ,category:categorizedData1['4-6']},
    { name: "7-9", pv: percentSingle3LT * 3000 ,category:categorizedData1['7-9']},
    { name: "10-12", pv: percentSingle4LT * 3000 ,category:categorizedData1['10-12']},
    { name: "13-15", pv: percentSingle5LT * 3000,category:categorizedData1['13-15']},
    { name: "16-18", pv: percentSingle6LT * 3000,category:categorizedData1['16-18']},
    { name: "19-21", pv: percentSingle7LT * 3000,category:categorizedData1['19-21']},
    { name: "22-24", pv: percentSingle8LT * 3000,category:categorizedData1['22-24']},
    { name: "25-27", pv: percentSingle9LT * 3000,category:categorizedData1['25-27']},
    { name: "28-30", pv: percentSingle10LT * 3000,category:categorizedData1['28-30']},
    { name: "31-33", pv: percentSingle11LT * 3000,category:categorizedData1['31-33']},
    { name: "34-36", pv: percentSingle12LT * 3000,category:categorizedData1['34-36']},
  ].map((entry) => {
    let fillColor = "#A78BFA"; // Default gradient
    if (entry.category === "HOT") fillColor = "#5B21B6";
    else if (entry.category === "STABLE") fillColor = "#8B5CF6";
    return { ...entry, fill: fillColor };
  });
  

 

  return (
    <div className="mb-1  text-white ">
      <div className="flex gap-3">
        <div className="w-[400px]">
          <div className="flex justify-center text-white font-bold  ">
            <div
              style={{ width: "45%" }}
              className={
                "bg-darkNavy text-center p-2 text-md hover:bg-softBlue hover:text-white"
              }
            >
              Category
            </div>
            <div
              style={{ width: "30%" }}
              className={
                "bg-darkNavy text-md text-center p-2 hover:bg-softBlue hover:text-white"
              }
            >
              count
            </div>
            <div
              style={{ width: "25%" }}
              className={
                "bg-darkNavy  text-center p-2 text-md hover:bg-softBlue hover:text-white"
              }
            >
              Last Hit
            </div>
          </div>

          {/* --------------------1 to 3 */}
          <div className="flex justify-center text-white my-1 font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center  p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              1 - 3
            </div>
            <div
              style={{ width: "30%" }}
              className={
                one_3 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : one_3 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : one_3 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.one_three}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.one_three >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.one_three > 0 &&
                    nonSingleStreetData.one_three <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.one_three >= 4 &&
                    nonSingleStreetData.one_three <= 9
                  ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.one_three}
            </div>
          </div>
          {/* --------------------4 to 6 */}
          <div className="flex justify-center text-white font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              4 - 6
            </div>
            <div
              style={{ width: "30%" }}
              className={
                four_6 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : four_6 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : four_6 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.four_six}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.four_six >= 10
                  ? "bg-purple-600    hover:bg-softBlue"
                  : nonSingleStreetData.four_six > 0 &&
                    nonSingleStreetData.four_six <= 3
                  ? "bg-purple-400  hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.four_six >= 4 &&
                    nonSingleStreetData.four_six <= 9
                  ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.four_six}
            </div>
          </div>

          {/* --------------------7 to 9 */}
          <div className="flex justify-center text-white my-1 font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              7 - 9
            </div>
            <div
              style={{ width: "30%" }}
              className={
                seven_9 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : seven_9 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : seven_9 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.seven_nine}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.seven_nine >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.seven_nine > 0 &&
                    nonSingleStreetData.seven_nine <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.seven_nine >= 4 &&
                    nonSingleStreetData.seven_nine <= 9
                  ? "bg-purple-500    hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.seven_nine}
            </div>
          </div>
          {/* --------------------10 to 12 */}
          <div className="flex justify-center text-white font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              10 - 12
            </div>
            <div
              style={{ width: "30%" }}
              className={
                ten_12 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : ten_12 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : ten_12 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.ten_twelve}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.ten_twelve >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.ten_twelve > 0 &&
                    nonSingleStreetData.ten_twelve <= 3
                  ? "bg-purple-400    hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.ten_twelve >= 4 &&
                    nonSingleStreetData.ten_twelve <= 9
                  ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.ten_twelve}
            </div>
          </div>
          {/* --------------------13 to 15 */}
          <div className="flex justify-center text-white my-1 font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              13 - 15
            </div>
            <div
              style={{ width: "30%" }}
              className={
                thirteen_15 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : thirteen_15 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : thirteen_15 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.thirteen_fifteen}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.thirteen_fifteen >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.thirteen_fifteen > 0 &&
                    nonSingleStreetData.thirteen_fifteen <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.thirteen_fifteen >= 4 &&
                    nonSingleStreetData.thirteen_fifteen <= 9
                  ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.thirteen_fifteen}
            </div>
          </div>
          {/* --------------------16 to 18 */}
          <div className="flex justify-center text-white  font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              16 - 18
            </div>
            <div
              style={{ width: "30%" }}
              className={
                sixteen_18 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : sixteen_18 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : sixteen_18 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.sixteen_eighteen}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.sixteen_eighteen >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.sixteen_eighteen > 0 &&
                    nonSingleStreetData.sixteen_eighteen <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.sixteen_eighteen >= 4 &&
                    nonSingleStreetData.sixteen_eighteen <= 9
                  ? "bg-purple-500    hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.sixteen_eighteen}
            </div>
          </div>
          {/* --------------------19 to 21 */}
          <div className="flex justify-center text-white my-1 font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              19 - 21
            </div>
            <div
              style={{ width: "30%" }}
              className={
                nineteen_21 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : nineteen_21 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : nineteen_21 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.nineteen_twentyOne}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.nineteen_twentyOne >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.nineteen_twentyOne > 0 &&
                    nonSingleStreetData.nineteen_twentyOne <= 3
                  ? "bg-purple-400    hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.nineteen_twentyOne >= 4 &&
                    nonSingleStreetData.nineteen_twentyOne <= 9
                  ? "bg-purple-500    hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.nineteen_twentyOne}
            </div>
          </div>
          {/* --------------------22 to 24 */}
          <div className="flex justify-center text-white font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              22 - 24
            </div>
            <div
              style={{ width: "30%" }}
              className={
                twentyTwo_24 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : twentyTwo_24 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : twentyTwo_24 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.twentyTwo_twentyFour}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.twentyTwo_twentyFour >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.twentyTwo_twentyFour > 0 &&
                    nonSingleStreetData.twentyTwo_twentyFour <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.twentyTwo_twentyFour >= 4 &&
                    nonSingleStreetData.twentyTwo_twentyFour <= 9
                  ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.twentyTwo_twentyFour}
            </div>
          </div>
          {/* --------------------25 to 27 */}
          <div className="flex justify-center text-white font-bold my-1">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              25 - 27
            </div>
            <div
              style={{ width: "30%" }}
              className={
                twentyFive_27 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : twentyFive_27 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : twentyFive_27 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.twentyFive_twentySeven}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.twentyFive_twentySeven >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.twentyFive_twentySeven > 0 &&
                    nonSingleStreetData.twentyFive_twentySeven <= 3
                  ? "bg-purple-400    hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.twentyFive_twentySeven >= 4 &&
                    nonSingleStreetData.twentyFive_twentySeven <= 9
                  ? "bg-purple-500    hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.twentyFive_twentySeven}
            </div>
          </div>
          {/* --------------------28 to 30 */}
          <div className="flex justify-center text-white font-bold">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              28 - 30
            </div>
            <div
              style={{ width: "30%" }}
              className={
                twentyEight_30 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : twentyEight_30 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : twentyEight_30 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.twentyEight_thirty}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.twentyEight_thirty >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.twentyEight_thirty > 0 &&
                    nonSingleStreetData.twentyEight_thirty <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.twentyEight_thirty >= 4 &&
                    nonSingleStreetData.twentyEight_thirty <= 9
                  ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.twentyEight_thirty}
            </div>
          </div>
          {/* --------------------31 to 33 */}
          <div className="flex justify-center text-black font-bold my-1 text-white">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              31 - 33
            </div>
            <div
              style={{ width: "30%" }}
              className={
                thirtyOne_33 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : thirtyOne_33 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : thirtyOne_33 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.thirtyOne_thirtyThree}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.thirtyOne_thirtyThree >= 10
                  ? "bg-purple-600    hover:bg-softBlue"
                  : nonSingleStreetData.thirtyOne_thirtyThree > 0 &&
                    nonSingleStreetData.thirtyOne_thirtyThree <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.thirtyOne_thirtyThree >= 4 &&
                    nonSingleStreetData.thirtyOne_thirtyThree <= 9
                  ? "bg-purple-500    hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black    hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.thirtyOne_thirtyThree}
            </div>
          </div>
          {/* --------------------34 to 36 */}
          <div className="flex justify-center  font-bold ">
            <div
              style={{ width: "45%" }}
              className={
                "bg-[rgba(2,0,36,1)] text-center text-white p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              34 - 36
            </div>
            <div
              style={{ width: "30%" }}
              className={
                thirtyFour_36 <= 0
                  ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                  : thirtyFour_36 <= 30
                  ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : thirtyFour_36 <= 49
                  ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                  : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
              }
            >
              {singleStreetData.thirtyFour_thirtySix}
            </div>
            <div
              style={{ width: "25%" }}
              className={`text-center p-2 text-xs ${
                nonSingleStreetData.thirtyFour_thirtySix >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonSingleStreetData.thirtyFour_thirtySix > 0 &&
                    nonSingleStreetData.thirtyFour_thirtySix <= 3
                  ? "bg-purple-400    hover:bg-softBlue hover:text-white"
                  : nonSingleStreetData.thirtyFour_thirtySix >= 4 &&
                    nonSingleStreetData.thirtyFour_thirtySix <= 9
                  ? "bg-purple-500    hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
            >
              {nonSingleStreetData.thirtyFour_thirtySix}
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <h2 className="text-white mt-5 text-center">Short Term Trend </h2>
          <BarChart
            width={410}
            height={300}
            data={Short}
            stackOffset="sign"
            margin={{
              top: 5,
              right: 10,
              left: 20,
              bottom: 30,
            }}
            
          >



            {/* <Tooltip /> */}
           

            {/* Bar data with conditional color fill */}
            <Bar
              dataKey="pv"
              stackId="stack"
              fill={({ payload }) => payload.fill}
              radius={[5, 5, 0, 0]}
            >
              {/* Custom labels for each bar with white text */}
              <LabelList
                dataKey="category"
                position="inside" 
                fill="#ffffff"
                fontSize={8}
                angle={-90} 
                fontWeight="bold"
              />
            </Bar>
            <XAxis
              dataKey="name"
              angle={90} 
              textAnchor="start"
              tick={{ fill: "white", fontSize: 12 }} 
            />
          </BarChart>
        </div>
        <div className="w-[400px]">
          <h2 className="text-white  mt-5 text-center">Long Term Trend </h2>
          <BarChart
            width={410} 
            height={300}
            data={Long}
            stackOffset="sign"
            margin={{
              top: 5,
              right: 10,
              left: 20,
              bottom: 30, // Increased bottom margin for label space
            }}
          >
            
            
            

            {/* YAxis hidden but still used for scaling */}
            <ReferenceLine y={0} stroke="#000" />

            {/* Bar data */}
            <Bar
              dataKey="pv"
              stackId="stack"
              // Dynamically change the bar color based on category
              fill={({ payload }) => payload.fill}
              radius={[5, 5, 0, 0]}
            >
              {/* Custom labels inside the bar */}
              <LabelList
                dataKey="category"
                position="inside" 
                fill="#ffffff"
                angle={-90} 
                fontSize={8}
                fontWeight="bold"
              />
            </Bar>
            
            <XAxis
              dataKey="name"
              angle={90} 
              textAnchor="start"
              tick={{ fill: "white", fontSize: 12 }} 
            />
          </BarChart>
        </div>
      </div>

    </div>
  );
};
export default StreetTable1;
