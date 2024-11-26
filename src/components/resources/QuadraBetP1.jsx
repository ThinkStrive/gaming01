import React from "react";
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
import { useState } from "react";

const QuadraBet = ({summaryData,nonSummaryData,QuadraTrackerST,QuadraTrackerLT})=>{
    
    // const calculatePercentage = (numerator, ...nums) => {
    //     const total = nums.reduce((acc, num) => acc + (num || 0), 0);
    //     return total === 0 ? 0 : `${Math.round((numerator / total) * 100)}`;
    // };
  

    const [i_btn, setI_btn] = useState(false);

    // const LER = calculatePercentage(summaryData.lowEvenRed,summaryData.lowEvenRed,summaryData.lowEvenBlack,summaryData.lowOddRed,summaryData.lowOddBlack,summaryData.highEvenRed,summaryData.highOddRed,summaryData.highEvenBlack,summaryData.highOddBlack);
    // const LEB = calculatePercentage(summaryData.lowEvenBlack,summaryData.lowEvenRed,summaryData.lowEvenBlack,summaryData.lowOddRed,summaryData.lowOddBlack,summaryData.highEvenRed,summaryData.highOddRed,summaryData.highEvenBlack,summaryData.highOddBlack);     
    // const LOR = calculatePercentage(summaryData.lowOddRed,summaryData.lowEvenRed,summaryData.lowEvenBlack,summaryData.lowOddRed,summaryData.lowOddBlack,summaryData.highEvenRed,summaryData.highOddRed,summaryData.highEvenBlack,summaryData.highOddBlack);   
    // const LOB = calculatePercentage(summaryData.lowOddBlack,summaryData.lowEvenRed,summaryData.lowEvenBlack,summaryData.lowOddRed,summaryData.lowOddBlack,summaryData.highEvenRed,summaryData.highOddRed,summaryData.highEvenBlack,summaryData.highOddBlack);
    // const HER = calculatePercentage(summaryData.highEvenRed,summaryData.lowEvenRed,summaryData.lowEvenBlack,summaryData.lowOddRed,summaryData.lowOddBlack,summaryData.highEvenRed,summaryData.highOddRed,summaryData.highEvenBlack,summaryData.highOddBlack);
    // const HOR = calculatePercentage(summaryData.highOddRed,summaryData.lowEvenRed,summaryData.lowEvenBlack,summaryData.lowOddRed,summaryData.lowOddBlack,summaryData.highEvenRed,summaryData.highOddRed,summaryData.highEvenBlack,summaryData.highOddBlack);
    // const HEB = calculatePercentage(summaryData.highEvenBlack,summaryData.lowEvenRed,summaryData.lowEvenBlack,summaryData.lowOddRed,summaryData.lowOddBlack,summaryData.highEvenRed,summaryData.highOddRed,summaryData.highEvenBlack,summaryData.highOddBlack);
    // const HOB = calculatePercentage(summaryData.highOddBlack,summaryData.lowEvenRed,summaryData.lowEvenBlack,summaryData.lowOddRed,summaryData.lowOddBlack,summaryData.highEvenRed,summaryData.highOddRed,summaryData.highEvenBlack,summaryData.highOddBlack);
        
  
    // console.log("Quadra Bet",summaryData);
    

    ///Quadara Short term trend percentages
    const quadra1ST = Math.round(QuadraTrackerST.LER/8)/35;
    const quadra2ST = Math.round(QuadraTrackerST.LEB/8)/35;
    const quadra3ST = Math.round(QuadraTrackerST.LOR/8)/35;
    const quadra4ST = Math.round(QuadraTrackerST.LOB/8)/35;
    const quadra5ST = Math.round(QuadraTrackerST.HER/8)/35;
    const quadra6ST = Math.round(QuadraTrackerST.HOR/8)/35;
    const quadra7ST = Math.round(QuadraTrackerST.HEB/8)/35;
    const quadra8ST = Math.round(QuadraTrackerST.HOB/8)/35;



    const categorizedTable = () => {
      const entries = Object.entries(QuadraTrackerST);
    
      // Sort entries by value in descending order
      entries.sort((a, b) => b[1] - a[1]);
      const categorized = {};
    
      // Categorize based on conditions
      entries.forEach(([key, value], index) => {
        if (value === 0) {
          categorized[key] = ""; // Assign an empty string for values equal to 0
        } else if (index < 2) {
          categorized[key] = "HOT"; // Top 2 scores -> HOT
        } else if (index < 6) {
          categorized[key] = "STABLE"; // Next 4 scores -> STABLE
        } else {
          categorized[key] = "COLD"; // Remaining scores -> COLD
        }
      });
    
      return categorized;
    };
          
      const categorizedData = categorizedTable();


    const Short = [
        { name: "LER", pv: quadra1ST * 3000 ,category:categorizedData.LER},
        { name: "LEB", pv: quadra2ST * 3000 ,category:categorizedData.LEB},
        { name: "LOR", pv: quadra3ST * 3000 ,category:categorizedData.LOR},
        { name: "LOB", pv: quadra4ST * 3000 ,category:categorizedData.LOB},
        { name: "HER", pv: quadra5ST * 3000 ,category:categorizedData.HER},
        { name: "HOR", pv: quadra6ST * 3000 ,category:categorizedData.HOR},
        { name: "HEB", pv: quadra7ST * 3000 ,category:categorizedData.HEB},
        { name: "HOB", pv: quadra8ST * 3000 ,category:categorizedData.HOB},
      ].map((entry) => {
        let fillColor = "#A78BFA"; // Default gradient
        if (entry.category === "HOT") fillColor = "#5B21B6";
        else if (entry.category === "STABLE") fillColor = "#8B5CF6";
        return { ...entry, fill: fillColor };
      });
 

    //Quadra Long Term Trend
    const quadra1LT = Math.round(QuadraTrackerST.LER/24)/35;
    const quadra2LT = Math.round(QuadraTrackerST.LEB/24)/35;
    const quadra3LT = Math.round(QuadraTrackerST.LOR/24)/35;
    const quadra4LT = Math.round(QuadraTrackerST.LOB/24)/35;
    const quadra5LT = Math.round(QuadraTrackerST.HER/24)/35;
    const quadra6LT = Math.round(QuadraTrackerST.HOR/24)/35;
    const quadra7LT = Math.round(QuadraTrackerST.HEB/24)/35;
    const quadra8LT = Math.round(QuadraTrackerST.HOB/24)/35;
    
    const categorizedTable1 = () => {
        const entries = Object.entries(QuadraTrackerLT); 
        
        if (value === 0) {
          // If value is 0, categorize as "COLD"
          categorized[key] = "";
        } 

        // Sort entries by value in descending order
        entries.sort((a, b) => b[1] - a[1]);
        const categorized = {};
      
        // Top 3 scores -> HOT
        entries.slice(0, 2).forEach(([key]) => {
          categorized[key] = "HOT";
        });
      
        // Next 6 scores -> STABLE
        entries.slice(2, 6).forEach(([key]) => {
          categorized[key] = "STABLE";
        });
      
        // Lowest 3 scores -> COLD
        entries.slice(8).forEach(([key]) => {
          categorized[key] = "COLD";
        });
      
        return categorized;
      };
      
      const categorizedData1 = categorizedTable();
      const Long = [
        { name: "LER", pv: quadra1LT * 3000 ,category:categorizedData1.LER},
        { name: "LEB", pv: quadra2LT * 3000 ,category:categorizedData1.LEB},
        { name: "LOR", pv: quadra3LT * 3000 ,category:categorizedData1.LOR},
        { name: "LOB", pv: quadra4LT * 3000 ,category:categorizedData1.LOB},
        { name: "HER", pv: quadra5LT * 3000 ,category:categorizedData1.HER},
        { name: "HOR", pv: quadra6LT * 3000 ,category:categorizedData1.HOR},
        { name: "HEB", pv: quadra7LT * 3000 ,category:categorizedData1.HEB},
        { name: "HOB", pv: quadra8LT * 3000 ,category:categorizedData1.HOB},
      ].map((entry) => {
        let fillColor = "#A78BFA"; // Default gradient
        if (entry.category === "HOT") fillColor = "#5B21B6";
        else if (entry.category === "STABLE") fillColor = "#8B5CF6";
        return { ...entry, fill: fillColor };
      });

    
    return (
        <div className="flex gap-5">
            <div className="w-[400px]">
        <div className="flex justify-center text-white font-bold ">
            <div
            style={{ width: "45%" }}
            className="bg-darkNavy text-center pe-3 p-2 text-sm hover:bg-softBlue hover:text-white"
            >
            Category
            </div>
            <div
            style={{ width: "30%" }}
            className="bg-darkNavy text-sm text-center p-2 hover:bg-softBlue hover:text-white"
            >
            count
            </div>
            <div
            style={{ width: "25%" }}
            className="bg-darkNavy text-center p-2 text-sm hover:bg-softBlue hover:text-white"
            >
            Last Hit
            </div>
        </div>
        <div className="flex justify-center text-white  font-bold">
            <div
            style={{ width: "45%" }}
            className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
                L.E.R
            </div>
            <div
            style={{ width: "30%" }}
            className={
                summaryData.lowEvenRed <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.lowEvenRed <= 2 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.lowEvenRed <= 5 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            {summaryData.lowEvenRed}
            </div>
            <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
                nonSummaryData.lowEvenRed >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonSummaryData.lowEvenRed > 0 && nonSummaryData.lowEvenRed <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonSummaryData.lowEvenRed >=4 && nonSummaryData.lowEvenRed <= 9
                ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
            >
            {nonSummaryData.lowEvenRed}
            </div>
        </div>
        <div className="flex justify-center text-white my-1  font-bold">
            <div
            style={{ width: "45%" }}
            className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            L.E.B
            </div>
            <div
            style={{ width: "30%" }}
            className={
                summaryData.lowEvenBlack<= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.lowEvenBlack <= 2 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.lowEvenBlack <= 5 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            {summaryData.lowEvenBlack}
            </div>
            <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
                nonSummaryData.lowEvenBlack >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonSummaryData.lowEvenBlack > 0 && nonSummaryData.lowEvenBlack <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonSummaryData.lowEvenBlack >=4 && nonSummaryData.lowEvenBlack <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black  hover:bg-softBlue hover:text-white"
            }`}
            >
            {nonSummaryData.lowEvenBlack}
            </div>
        </div>
        <div className="flex justify-center text-white  font-bold">
            <div
            style={{ width: "45%" }}
            className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            L.O.R
            </div>
            <div
            style={{ width: "30%" }}
            className={
                summaryData.lowOddRed <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.lowOddRed <= 2 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.lowOddRed <= 5 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            {summaryData.lowOddRed}
            </div>
            <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
                nonSummaryData.lowOddRed >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonSummaryData.lowOddRed > 0 && nonSummaryData.lowOddRed <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonSummaryData.lowOddRed >=4 && nonSummaryData.lowOddRed <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
            >
            {nonSummaryData.lowOddRed}
            </div>
        </div>

        <div className="flex justify-center text-white my-1 font-bold">
            <div
            style={{ width: "45%" }}
            className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            L.O.B
            </div>
            <div
            style={{ width: "30%" }}
            className={
                summaryData.lowOddBlack <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.lowOddBlack <= 2 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.lowOddBlack <= 5 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            {summaryData.lowOddBlack}
            </div>
            <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
                nonSummaryData.lowOddBlack >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonSummaryData.lowOddBlack > 0 && nonSummaryData.lowOddBlack <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonSummaryData.lowOddBlack >=4 && nonSummaryData.lowOddBlack <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
            >
            {nonSummaryData.lowOddBlack}
            </div>
        </div>
        <div className="flex justify-center text-white  font-bold">
            <div
            style={{ width: "45%" }}
            className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            H.E.R
            </div>
            <div
            style={{ width: "30%" }}
            className={
                summaryData.highEvenRed <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.highEvenRed <= 2 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.highEvenRed <= 5 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                "bg-purple-900 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            {summaryData.highEvenRed}
            </div>
            <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
                nonSummaryData.highEvenRed >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonSummaryData.highEvenRed > 0 && nonSummaryData.highEvenRed <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonSummaryData.highEvenRed >=4 && nonSummaryData.highEvenRed <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
            >
            {nonSummaryData.highEvenRed}
            </div>
        </div>
        <div className="flex justify-center text-white my-1 font-bold">
            <div
            style={{ width: "45%" }}
            className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            H.O.R
            </div>
            <div
            style={{ width: "30%" }}
            className={
                summaryData.highOddRed <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.highOddRed <= 2 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.highOddRed <= 5 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            {summaryData.highOddRed}
            </div>
            <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
                nonSummaryData.highOddRed >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonSummaryData.highOddRed > 0 && nonSummaryData.highOddRed <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonSummaryData.highOddRed >=4 && nonSummaryData.highOddRed <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
            >
            {nonSummaryData.highOddRed}
            </div>
        </div>
        <div className="flex justify-center text-white  font-bold">
            <div
            style={{ width: "45%" }}
            className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            H.E.B
            </div>
            <div
            style={{ width: "30%" }}
            className={
                summaryData.highEvenBlack <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.highEvenBlack <= 2 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.highEvenBlack <= 5 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            {summaryData.highEvenBlack}
            </div>
            <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
                nonSummaryData.highEvenBlack >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonSummaryData.highEvenBlack > 0 && nonSummaryData.highEvenBlack <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonSummaryData.highEvenBlack >=4 && nonSummaryData.highEvenBlack <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
            >
            {nonSummaryData.highEvenBlack}
            </div>
        </div>
        <div className="flex justify-center text-white my-1 font-bold">
            <div
            style={{ width: "45%" }}
            className={
                "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            H.O.B
            </div>
            <div
            style={{ width: "30%" }}
            className={
                summaryData.highOddBlack <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.highOddBlack <= 2 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                summaryData.highOddBlack <= 5 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
            >
            {summaryData.highOddBlack}
            </div>
            <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
                nonSummaryData.highOddBlack >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonSummaryData.highOddBlack > 0 &&nonSummaryData.highOddBlack <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonSummaryData.highOddBlack >=4 && nonSummaryData.highOddBlack <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
            >
            {nonSummaryData.highOddBlack}
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
          <h2 className="text-white  mt-5 text-center">Long Term Trend</h2>
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
    )
}
export default QuadraBet;
