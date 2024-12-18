import React from "react";

function WheelCoverage({ data, type }) {
  const american = type === "zero" ? false : true;
  let coverdNums = 0;
  let unCoveredNums = 0;
  const totalNums = american ? 38 : 37;
  const nums = Object.values(data);

  nums.map((item) => {
    if (item <= 0) {
      unCoveredNums++;
    } else if (item > 0) {
      coverdNums++;
    }
  });

  american ? (unCoveredNums = unCoveredNums + 2) : unCoveredNums++;

  const win = (coverdNums / totalNums) * 100;
  const jackpot = (coverdNums / totalNums) * 100;
  const whack = (unCoveredNums / totalNums) * 100;

  return (
    <div className="w-[250px] bg-purple-500 rounded-md flex flex-col">
      <h2 className="text-center text-black text-lg font-semibold p-1.5 border-b-2 border-darkNavy">
        Coverage
      </h2>
      <div className="grid grid-cols-[1.6fr,1fr,1fr] px-2 py-1 text-black border-b-2 border-black bg-green-700">
        <div className="border-r-2 border-black mr-5">
          <span className="pl-1 font-semibold"> Win</span>
        </div>
        <div className="border-r-2 border-black mr-5">
          <span className="pl-1 font-semibold"> {coverdNums}</span>
        </div>
        <div>
          <span className="pl-1.5 font-semibold">
            {win.toFixed(1)}%
          </span>
        </div>
      </div>
      {/*  */}

      <div className="grid grid-cols-[1.6fr,1fr,1fr] px-2 py-1 text-black border-b-2 border-black bg-yellow-500">
        <div className="border-r-2 border-black mr-5">
          <span className="pl-1 font-semibold">Jackpot</span>
        </div>
        <div className="border-r-2 border-black mr-5">
          <span className="pl-1 font-semibold">{coverdNums}</span>
        </div>
        <div>
          <span className="pl-1.5 font-semibold">
            {jackpot.toFixed(1)}%
          </span>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-[1.6fr,1fr,1fr] px-2 py-1 text-black bg-red-600">
        <div className="border-r-2 border-black mr-5">
          <span className="pl-1 font-semibold">Whack</span>
        </div>
        <div className="border-r-2 border-black mr-5">
          <span className="pl-0.5 font-semibold">{unCoveredNums}</span>
        </div>
        <div>
          <span className="pl-1.5 font-semibold">
            {totalNums === unCoveredNums ? "0" : whack.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default WheelCoverage;
