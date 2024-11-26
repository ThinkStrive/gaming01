import React from "react";
import GaugeChart from "react-gauge-chart";
import { useState, useEffect } from "react";
const WheelSection = ({
  circleData,
  nonCircleData,
  wheelTrackerST,
  wheelTrackerLT,
}) => {
  const calculatePercentage = (numerator, ...nums) => {
    const total = nums.reduce((acc, num) => acc + (num || 0), 0);
    return total === 0 ? 0 : `${Math.round((numerator / total) * 100)}`;
  };

  // Short Term Trend

  const percent1ST = Math.round(wheelTrackerST.zero / 3) / 35;
  const percent2ST = Math.round(wheelTrackerST.orphe / 3) / 35;
  const percent3ST = Math.round(wheelTrackerST.tires / 3) / 35;




  //Long Term Trend

  const percent1LT = Math.round(wheelTrackerLT.zero / 9) / 35;
  const percent2LT = Math.round(wheelTrackerLT.orphe / 9) / 35;
  const percent3LT = Math.round(wheelTrackerLT.tires / 9) / 35;

  const getStatus = (scores) => {
    const values = Object.values(scores);
    const maxScore = Math.max(...values);
    const minScore = Math.min(...values);
    return Object.keys(scores).reduce((status, key) => {
      if (scores[key] === 0) {
        // If score is 0, return an empty string
        status[key] = "COLD";
      } else {
        status[key] =
          scores[key] === maxScore
            ? "HOT"
            : scores[key] === minScore
            ? "COLD"
            : "STABLE";
      }
      return status;
    }, {});
  };

  const shortWheel = getStatus(wheelTrackerST);

  const longWheel = getStatus(wheelTrackerLT);

  const zero = calculatePercentage(
    circleData.zero,
    circleData.zero,
    circleData.orphe,
    circleData.tires
  );
  const orphe = calculatePercentage(
    circleData.orphe,
    circleData.zero,
    circleData.orphe,
    circleData.tires
  );
  const tiers = calculatePercentage(
    circleData.tires,
    circleData.zero,
    circleData.orphe,
    circleData.tires
  );


  
  return (
    <div className="flex  gap-5">
      <div className="w-[50%] pt-20">
        <div className="flex justify-center text-white font-bold ">
          <div
            style={{ width: "45%" }}
            className="bg-darkNavy text-center p-2 text-sm hover:bg-softBlue hover:text-white"
          >
            Category
          </div>
          <div
            style={{ width: "30%" }}
            className="bg-darkNavy text-sm text-center p-2  hover:bg-softBlue hover:text-white"
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
            Voisins
          </div>
          <div
            style={{ width: "30%" }}
            className={
              zero <= 0
                ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                : zero <= 30
                ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                : zero <= 49
                ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
          >
            {circleData.zero}
          </div>
          <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
              nonCircleData.zero >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonCircleData.zero > 0 && nonCircleData.zero <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonCircleData.zero >= 4 && nonCircleData.zero <= 9
                ? "bg-purple-500   hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
          >
            {nonCircleData.zero}
          </div>
        </div>
        <div className="flex justify-center text-white my-1  font-bold">
          <div
            style={{ width: "45%" }}
            className={
              "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
          >
            Orphelins
          </div>
          <div
            style={{ width: "30%" }}
            className={
              orphe <= 0
                ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                : orphe <= 30
                ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                : orphe <= 49
                ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
          >
            {circleData.orphe}
          </div>
          <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
              nonCircleData.orphe >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonCircleData.orphe > 0 && nonCircleData.orphe <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonCircleData.orphe >= 4 && nonCircleData.orphe <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black  hover:bg-softBlue hover:text-white"
            }`}
          >
            {nonCircleData.orphe}
          </div>
        </div>
        <div className="flex justify-center text-white  font-bold">
          <div
            style={{ width: "45%" }}
            className={
              "bg-[rgba(2,0,36,1)] text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
          >
            Tiers du Cylindre
          </div>
          <div
            style={{ width: "30%" }}
            className={
              tiers <= 0
                ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white"
                : tiers <= 30
                ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                : tiers <= 49
                ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                : "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
            }
          >
            {circleData.tires}
          </div>
          <div
            style={{ width: "25%" }}
            className={`text-center p-2 text-xs ${
              nonCircleData.tires >= 10
                ? "bg-purple-600  hover:bg-softBlue"
                : nonCircleData.tires > 0 && nonCircleData.tires <= 3
                ? "bg-purple-400   hover:bg-softBlue hover:text-white"
                : nonCircleData.tires >= 4 && nonCircleData.tires <= 9
                ? "bg-purple-500  hover:bg-softBlue hover:text-white"
                : "bg-purple-200 text-black   hover:bg-softBlue hover:text-white"
            }`}
          >
            {nonCircleData.tires}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[50%]" >
        <div className="w-[400px] ">
          <h2 className="text-white text-center mb-2">Short Term Trend</h2>
          <div className="flex justify-around mt-3 gap-2">
            <div
            className="border border-2 border-purple-500  p-2 rounded-xl"
              style={{
                position: "relative",
                width: "33%",
                display: "inline-block",
              }}
            >
              <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">Voisins</h2>
              <GaugeChart
                id="gauge-chart-1"
                nrOfLevels={8}
                percent={percent1ST}
                colors={["#A78BFA","#7C3AED" ,"#8B5CF6","#5B21B6" ]}
                arcWidth={0.4}
                hideText={true}
              />
              {/* Overlayed text */}
              
              <p className="text-center font-semibold">{shortWheel.zero}</p> 
            
            </div>
            <div
            className="border border-2 border-purple-500  p-2 rounded-xl"
              style={{
                position: "relative",
                width: "33%",
                display: "inline-block",
              }}
            >
              <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">Orphelins</h2>
              <GaugeChart
                id="gauge-chart-1"
                nrOfLevels={8}
                percent={percent2ST}
                colors={["#A78BFA","#7C3AED" ,"#8B5CF6","#5B21B6"]}
                arcWidth={0.4}
                hideText={true}
              />
              {/* Overlayed text */}
              
              <p className="text-center font-semibold">{shortWheel.orphe}</p> 
            
            </div>
            <div
            className="border border-2 border-purple-500  p-2 rounded-xl"
              style={{
                position: "relative",
                width: "33%",
                display: "inline-block",
              }}
            >
              <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">Tiers Du</h2>
              <GaugeChart
                id="gauge-chart-1"
                nrOfLevels={8}
                percent={percent3ST}
                colors={["#A78BFA","#7C3AED" ,"#8B5CF6","#5B21B6"]}
                arcWidth={0.4}
                hideText={true}
              />
              {/* Overlayed text */}
              
              <p className="text-center font-semibold">{shortWheel.tires}</p> 
            
            </div>
          </div>
        </div>
      <div className="w-[400px] mt-5 ">
          <h2 className="text-white text-center mb-2">Long Term Trend</h2>
          <div className="flex justify-around mt-2 gap-2">
            <div
            className="border border-2 border-purple-500  p-2 rounded-xl"
              style={{
                position: "relative",
                width: "33%",
                display: "inline-block",
              }}
            >
              <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">Voisins</h2>
              <GaugeChart
                id="gauge-chart-1"
                nrOfLevels={8}
                percent={percent1LT}
                colors={["#A78BFA","#7C3AED" ,"#8B5CF6","#5B21B6"]}
                arcWidth={0.4}
                hideText={true}
              />
              {/* Overlayed text */}
              
              <p className="text-center font-semibold">{longWheel.zero}</p> 
            
            </div>
            <div
            className="border border-2 border-purple-500  p-2 rounded-xl"
              style={{
                position: "relative",
                width: "33%",
                display: "inline-block",
              }}
            >
              <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">Orphelins</h2>
              <GaugeChart
                id="gauge-chart-1"
                nrOfLevels={8}
                percent={percent2LT}
                colors={["#A78BFA","#7C3AED" ,"#8B5CF6","#5B21B6"]}
                arcWidth={0.4}
                hideText={true}
              />
              {/* Overlayed text */}
              
              <p className="text-center font-semibold">{longWheel.orphe}</p> 
            
            </div>
            <div
            className="border border-2 border-purple-500  p-2 rounded-xl"
              style={{
                position: "relative",
                width: "33%",
                display: "inline-block",
              }}
            >
              <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">Tiers Du</h2>
              <GaugeChart
                id="gauge-chart-1"
                nrOfLevels={8}
                percent={percent3LT}
                colors={["#A78BFA","#7C3AED" ,"#8B5CF6","#5B21B6"]}
                arcWidth={0.4}
                hideText={true}
              />
              {/* Overlayed text */}
              
              <p className="text-center font-semibold">{longWheel.tires}</p> 
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelSection;
