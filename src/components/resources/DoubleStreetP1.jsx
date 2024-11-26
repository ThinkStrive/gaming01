import React from "react";
import { useState, useEffect } from "react";
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


  const StreetTable2 = ({doubleStreetData,nonDoubleStreetData,doubleTableST,doubleTableLT,doubleStreetCount}) => {


//Short Term Trend Score

    const percentDouble1ST =  Math.round(doubleTableST["1-6"] / 3)/35;
    const percentDouble2ST =  Math.round(doubleTableST["7-12"] / 3)/35;
    const percentDouble3ST =  Math.round(doubleTableST["13-18"] / 3)/35;
    const percentDouble4ST =  Math.round(doubleTableST["19-24"] / 3)/35;
    const percentDouble5ST =  Math.round(doubleTableST["25-30"] / 3)/35;
    const percentDouble6ST =  Math.round(doubleTableST["31-36"] / 3)/35;

    const categorizedTable = () => {
      const entries = Object.entries(doubleTableST); // Convert object to array of [key, value]
    
      // Sort entries by value in descending order
      entries.sort((a, b) => b[1] - a[1]);
    
      const categorized = {};
    
      // Categorize based on value
      entries.forEach(([key, value], index) => {
        if (value === 0) {
          // If value is 0, categorize as "COLD"
          categorized[key] = "";
        } else if (index < 2) {
          // Top 2 scores -> "HOT"
          categorized[key] = "HOT";
        } else if (index < 4) {
          // Next 2 scores -> "STABLE"
          categorized[key] = "STABLE";
        } else {
          // Remaining -> "COLD"
          categorized[key] = "COLD";
        }
      });
    
      return categorized;
    };
    
    
    const shortDouble = categorizedTable();



    
   //Long term trend CAlculations

    const percentDouble1LT = Math.round(doubleTableLT["1-6"] / 9) / 35;
    const percentDouble2LT = Math.round(doubleTableLT["7-12"] / 9) / 35;
    const percentDouble3LT = Math.round(doubleTableLT["13-18"] / 9) / 35;
    const percentDouble4LT = Math.round(doubleTableLT["19-24"] / 9) / 35;
    const percentDouble5LT = Math.round(doubleTableLT["25-30"] / 9) / 35;
    const percentDouble6LT = Math.round(doubleTableLT["31-36"] / 9) / 35;

    const categorizedTable1 = () => {
      const entries = Object.entries(doubleTableLT); 
    
      // Sort entries by value in descending order
      entries.sort((a, b) => b[1] - a[1]);
    
      const categorized = {};
    
      // Categorize based on value
      entries.forEach(([key, value], index) => {
        if (value === 0) {
          // If value is 0, categorize as "COLD"
          categorized[key] = "";
        } else if (index < 2) {
          // Top 2 scores -> "HOT"
          categorized[key] = "HOT";
        } else if (index < 4) {
          // Next 2 scores -> "STABLE"
          categorized[key] = "STABLE";
        } else {
          // Remaining -> "COLD"
          categorized[key] = "COLD";
        }
      });
    
      return categorized;
    };
    const longDouble = categorizedTable1();
   
    const calculatePercentage = (numerator, ...nums) => {
      const total = nums.reduce((acc, num) => acc + (num || 0), 0);
      return total === 0 ? 0 : `${Math.round((numerator / total) * 100)}`;
  };

    const one_6 = calculatePercentage(doubleStreetData.one_six,doubleStreetData.one_six,doubleStreetData.seven_twelve,doubleStreetData.thirteen_eighteen,doubleStreetData.nineteen_twentyFour,doubleStreetData.twentyFive_thirty,doubleStreetData.thirtyOne_thirtySix);
    const seven_12 = calculatePercentage(doubleStreetData.seven_twelve,doubleStreetData.one_six,doubleStreetData.seven_twelve,doubleStreetData.thirteen_eighteen,doubleStreetData.nineteen_twentyFour,doubleStreetData.twentyFive_thirty,doubleStreetData.thirtyOne_thirtySix);
    const thirteen_18 = calculatePercentage(doubleStreetData.thirteen_eighteen,doubleStreetData.one_six,doubleStreetData.seven_twelve,doubleStreetData.thirteen_eighteen,doubleStreetData.nineteen_twentyFour,doubleStreetData.twentyFive_thirty,doubleStreetData.thirtyOne_thirtySix);
    const nineteen_24 = calculatePercentage(doubleStreetData.nineteen_twentyFour,doubleStreetData.one_six,doubleStreetData.seven_twelve,doubleStreetData.thirteen_eighteen,doubleStreetData.nineteen_twentyFour,doubleStreetData.twentyFive_thirty,doubleStreetData.thirtyOne_thirtySix);
    const twentyFive_30 =calculatePercentage(doubleStreetData.twentyFive_thirty,doubleStreetData.one_six,doubleStreetData.seven_twelve,doubleStreetData.thirteen_eighteen,doubleStreetData.nineteen_twentyFour,doubleStreetData.twentyFive_thirty,doubleStreetData.thirtyOne_thirtySix);
    const thirtyOne_36 = calculatePercentage(doubleStreetData.thirtyOne_thirtySix,doubleStreetData.one_six,doubleStreetData.seven_twelve,doubleStreetData.thirteen_eighteen,doubleStreetData.nineteen_twentyFour,doubleStreetData.twentyFive_thirty,doubleStreetData.thirtyOne_thirtySix);

    
    

    const Short = [
      { name: "1-6", pv: percentDouble1ST* 3000 ,category: shortDouble["1-6"]},
      { name: "7-12", pv: percentDouble2ST* 3000 ,category: shortDouble["7-12"] },
      { name: "13-18", pv: percentDouble3ST* 3000 ,category: shortDouble["13-18"] },
      { name: "19-24", pv: percentDouble4ST* 3000  ,category: shortDouble["19-24"]},
      { name: "25-30", pv: percentDouble5ST* 3000  ,category: shortDouble["25-30"]},
      { name: "31-36", pv: percentDouble6ST * 3000 ,category: shortDouble["31-36"]},
    ].map((entry) => {
      let fillColor = "#A78BFA"; 
      if (entry.category === "HOT") fillColor = "#5B21B6";
      else if (entry.category === "STABLE") fillColor = "#8B5CF6";
      return { ...entry, fill: fillColor };
    });
  


    const Long = [
      { name: "1-6", pv: percentDouble1LT* 3000  ,category: longDouble["1-6"] },
      { name: "7-12", pv: percentDouble2LT* 3000 ,category: longDouble["7-12"]},
      { name: "13-18", pv: percentDouble3LT* 3000  ,category: longDouble["13-18"]},
      { name: "19-24", pv: percentDouble4LT * 3000 ,category: longDouble["19-24"]},
      { name: "25-30", pv: percentDouble5LT* 3000 ,category: longDouble["25-30"] },
      { name: "31-36", pv: percentDouble6LT* 3000  ,category: longDouble["31-36"]},
    ].map((entry) => {
      let fillColor = "#A78BFA"; 
      if (entry.category === "HOT") fillColor = "#5B21B6";
      else if (entry.category === "STABLE") fillColor = "#7C3AED";
      return { ...entry, fill: fillColor };
    });


    // Filter out entries with negative 'pv' values and categorize the 'pv' into Hot, Stable, Cold


    return (
      <div className="mb-1 mt-4 ">
        <div className="flex gap-5">
          <div className="w-[400px]  ">
          <div className="flex justify-center text-white font-bold   ">
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
                  "bg-darkNavy text-md text-center p-2   hover:bg-softBlue hover:text-white"
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
  
            {/* --------------------1 to 6 */}
            <div className="flex justify-center text-white my-1 font-bold">
              <div
                style={{ width: "45%" }}
                className={
                  "bg-[rgba(2,0,36,1)] text-center  p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                1 - 6
              </div>
              <div
                style={{ width: "30%" }}
                className={
                  one_6 <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                  one_6 <= 30 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  one_6 <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                {doubleStreetData.one_six}
              </div>
              <div
                style={{ width: "25%" }}
                className={`text-center p-2 text-xs ${
                  nonDoubleStreetData.one_six >= 10
                  ? "bg-purple-600  hover:bg-softBlue"
                  : nonDoubleStreetData.one_six> 0 && nonDoubleStreetData.one_six <= 3
                  ? "bg-purple-400  hover:bg-softBlue hover:text-white"
                  : nonDoubleStreetData.one_six>= 4 && nonDoubleStreetData.one_six <= 9
                  ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black hover:bg-softBlue hover:text-white"
              }`}
              >
                {nonDoubleStreetData.one_six}
              </div>
            </div>
            {/* --------------------7 to 12 */}
            <div className="flex justify-center text-white font-bold">
              <div
                style={{ width: "45%" }}
                className={
                  "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                7 - 12
              </div>
              <div
                style={{ width: "30%" }}
                className={
                  seven_12 <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                  seven_12<= 30 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  seven_12 <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                {doubleStreetData.seven_twelve}
              </div>
              <div
                style={{ width: "25%" }}
                className={`text-center p-2 text-xs ${
                  nonDoubleStreetData.seven_twelve >= 10
                  ? "bg-purple-600  hover:bg-softBlue"
                  : nonDoubleStreetData.seven_twelve> 0 && nonDoubleStreetData.seven_twelve <= 3
                  ? "bg-purple-400  hover:bg-softBlue hover:text-white"
                  : nonDoubleStreetData.seven_twelve>= 4 && nonDoubleStreetData.seven_twelve <= 9
                  ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black  hover:bg-softBlue hover:text-white"
              }`}
              >
                {nonDoubleStreetData.seven_twelve}
              </div>
            </div>
  
            {/* --------------------13 to 18 */}
            <div className="flex justify-center text-white my-1 font-bold">
              <div
                style={{ width: "45%" }}
                className={
                  "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                13 - 18
              </div>
              <div
                style={{ width: "30%" }}
                className={
                  thirteen_18 <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                  thirteen_18 <= 30 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  thirteen_18 <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                {doubleStreetData.thirteen_eighteen}
              </div>
              <div
                style={{ width: "25%" }}
                className={`text-center p-2 text-xs ${
                  nonDoubleStreetData.thirteen_eighteen >= 10
                  ? "bg-purple-600   hover:bg-softBlue"
                  : nonDoubleStreetData.thirteen_eighteen> 0 && nonDoubleStreetData.thirteen_eighteen <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonDoubleStreetData.thirteen_eighteen>= 4 && nonDoubleStreetData.thirteen_eighteen <= 9
                  ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black  hover:bg-softBlue hover:text-white"
              }`}
              >
                {nonDoubleStreetData.thirteen_eighteen}
              </div>
            </div>
            {/* --------------------19 to 24 */}
            <div className="flex justify-center text-white font-bold">
              <div
                style={{ width: "45%" }}
                className={
                  "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                19 - 24
              </div>
              <div
                style={{ width: "30%" }}
                className={
                  nineteen_24 <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                  nineteen_24 <= 30 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  nineteen_24 <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                {doubleStreetData.nineteen_twentyFour}
              </div>
              <div
                style={{ width: "25%" }}
                className={`text-center p-2 text-xs ${
                  nonDoubleStreetData.nineteen_twentyFour >= 10
                  ? "bg-purple-600  hover:bg-softBlue"
                  : nonDoubleStreetData.nineteen_twentyFour> 0 && nonDoubleStreetData.nineteen_twentyFour <= 3
                  ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                  : nonDoubleStreetData.nineteen_twentyFour>= 4 && nonDoubleStreetData.nineteen_twentyFour <= 9
                  ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black  hover:bg-softBlue hover:text-white"
              }`}
              >
                {nonDoubleStreetData.nineteen_twentyFour}
              </div>
            </div>
            {/* --------------------25 to 30 */}
            <div className="flex justify-center text-white my-1 font-bold">
              <div
                style={{ width: "45%" }}
                className={
                  "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                25 - 30
              </div>
              <div
                style={{ width: "30%" }}
                className={
                  twentyFive_30 <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                  twentyFive_30 <= 30 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  twentyFive_30<= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                {doubleStreetData.twentyFive_thirty}
              </div>
              <div
                style={{ width: "25%" }}
                className={`text-center p-2 text-xs ${
                  nonDoubleStreetData.twentyFive_thirty >= 10
                  ? "bg-purple-600  hover:bg-softBlue"
                  : nonDoubleStreetData.twentyFive_thirty> 0 && nonDoubleStreetData.twentyFive_thirty <= 3
                  ? "bg-purple-400  hover:bg-softBlue hover:text-white"
                  :nonDoubleStreetData.twentyFive_thirty>= 4 && nonDoubleStreetData.twentyFive_thirty <= 9
                  ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black hover:bg-softBlue hover:text-white"
              }`}
              >
              {nonDoubleStreetData.twentyFive_thirty}
              </div>
            </div>
            {/* --------------------31 to 36 */}
            <div className="flex justify-center text-white  font-bold">
              <div
                style={{ width: "45%" }}
                className={
                  "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                31 - 36
              </div>
              <div
                style={{ width: "30%" }}
                className={
                  thirtyOne_36 <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                  thirtyOne_36 <= 30 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  thirtyOne_36 <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                  "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                }
              >
                {doubleStreetData.thirtyOne_thirtySix}
              </div>
              <div
                style={{ width: "25%" }}
                className={`text-center p-2 text-xs ${
                  nonDoubleStreetData.thirtyOne_thirtySix >= 10
                  ? "bg-purple-600 hover:bg-softBlue"
                  : nonDoubleStreetData.thirtyOne_thirtySix> 0 && nonDoubleStreetData.thirtyOne_thirtySix <= 3
                  ? "bg-purple-400  hover:bg-softBlue hover:text-white"
                  : nonDoubleStreetData.thirtyOne_thirtySix>= 4 && nonDoubleStreetData.thirtyOne_thirtySix <= 9
                  ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                  : "bg-purple-200  text-black   hover:bg-softBlue hover:text-white"
              }`}
              >
                {nonDoubleStreetData.thirtyOne_thirtySix}
              </div>
            </div>
          </div>

          <div className="w-[400px]">
            <h2 className="text-white mt-3 text-center">Short Term Trend</h2>
              <BarChart
                  width={350} // Increased width to fit more labels
                  height={300}
                  data={Short}
                  stackOffset="sign"
                  margin={{
                      bottom: 30, // Increased bottom margin for label space
                  }}
                  >
                  
                  {/* Bar data */}
                  <Bar dataKey="pv" fill={({ payload }) => payload.fill} stackId="stack" radius={[5, 5, 0, 0]}>
                      {/* Custom labels for each bar */}
                      <LabelList
                        dataKey="category"
                        position="inside" 
                        fill="#ffffff"
                        fontSize={13}
                        angle={-90} 
                        fontWeight="bold"
                      />
                  </Bar>
                  <XAxis
                    dataKey="name"
                    angle={90} 
                    textAnchor="start"
                    tick={{ fill: "white", fontSize: 15 }} 
                  />
              </BarChart>
          </div>

          <div className="w-[400px]">
          <h2 className="text-white mt-3 text-center">Long Term Trend</h2>
              <BarChart
                  width={350} // Increased width to fit more labels
                  height={300}
                  data={Long}
                  stackOffset="sign"
                  margin={{
                    bottom: 30
                }}
                  >
                  {/* XAxis with rotated labels */}
                  <XAxis 
                      dataKey="name" 
                      angle={90} 
                      textAnchor="start" 
                      tick={{ fill: "white", fontSize: 12 }} 
                  />
                  
                  {/* YAxis hidden but still used for scaling */}
                  
                  {/* Bar data */}
                  <Bar dataKey="pv" fill={({ payload }) => payload.fill} stackId="stack" radius={[5, 5, 0, 0]}>
                      {/* Custom labels for each bar */}
                      <LabelList
                        dataKey="category"
                        position="inside" 
                        fill="#ffffff"
                        fontSize={13}
                        angle={-90} 
                        fontWeight="bold"
                      />
                  </Bar>
                  <XAxis
                    dataKey="name"
                    angle={90} 
                    textAnchor="start"
                    tick={{ fill: "white", fontSize: 15 }} 
                  />
              </BarChart>
          </div>
        </div>
      </div>
    );
  };
  export default StreetTable2;
  