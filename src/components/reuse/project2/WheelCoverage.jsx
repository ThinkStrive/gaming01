import React from "react";

function WheelCoverage({ data, type }) {
  console.log("ithu wheel coverage: ", data);

  let coverdNums = 0;
  let unCoveredNums = 0;
  const totalNums = type === "zero" ? 37 : 38;
  const nums = Object.values(data);

  nums.map((item) => {
    if (item <= 0) {
      unCoveredNums++;
    } else if (item > 0) {
      coverdNums++;
    }
  });

  console.log(
    "total : ",
    totalNums,
    "Covered : ",
    coverdNums,
    "UnCovered : ",
    unCoveredNums,
  );

  const win = (coverdNums / totalNums) * 100;
  const jackpot = (coverdNums / totalNums) * 100;
  const whack = (unCoveredNums / totalNums) * 100;

  return (
    <div
      className="w-64 text-white text-center font-semibold"
      style={{ backgroundColor: "rgb(34,34,34)" }}
    >
      Coverage
      <div
        className="w-full flex justify-between p-1"
        style={{ backgroundColor: "#111111", color: "rgb(0,188,0)" }}
      >
        <div className="w-[40%] text-left">Win</div>
        <div
          className="border-x-2 px-2"
          style={{ borderColor: "rgb(34,34,34)" }}
        >
          {coverdNums}
        </div>
        <div>{win.toFixed(1)}%</div>
      </div>
      {/*  */}
      <div className="w-full flex justify-between p-1">
        <div className="w-[40%] text-left">Jackpot</div>
        <div className="px-2">{coverdNums}</div>
        <div>{jackpot.toFixed(1)}%</div>
      </div>
      {/*  */}
      <div
        className="w-full flex justify-between p-1"
        style={{ backgroundColor: "#111111", color: "rgb(204,0,0)" }}
      >
        <div className="w-[40%] text-left">Whack</div>
        <div
          className="border-x-2 px-2"
          style={{ borderColor: "rgb(34,34,34)" }}
        >
          {unCoveredNums}
        </div>
        <div>{totalNums - 2 === unCoveredNums ? "0" : whack.toFixed(1)}%</div>
      </div>
    </div>
  );
}

export default WheelCoverage;
