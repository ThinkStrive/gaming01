import React from "react";
import {
  Data,
  first_12,
  listener2DivVertical,
  listener4Div,
  listener6Div,
  second_12,
  third_12,
} from "../../resources/mainCompData";

function RouletteGrid({
  singleDivSelector,
  MultiDivSelector,
  divSelect2Data,
  data,
  coin,
}) {
  const gridCell = (backgroundColor, num, selector) => (
    <div
      className="border w-[33.3%] text-white cursor-pointer relative flex items-center justify-center"
      style={{ backgroundColor }}
    >
      {num}
      <div
        className="w-full h-full hover:bg-blue-500 bg-blue-500 absolute z-10 top-0 opacity-50"
        onClick={() => singleDivSelector(selector, coin)}
      ></div>
    </div>
  );

  const win_lossObject = Object.values(data);
  const _2divKeys = Object.keys(divSelect2Data);
  const _2divData = Object.values(divSelect2Data);

  return (
    <div className="w-full flex justify-center items-center h-[60%]">
      {/* Roulette Grid */}

      <div className="relative max-sm:w-full w-[23rem] max-sm:h-[100%] max-lg:h-[95%] xl:h-[50rem] h-[95%] bg-red-500  md:-rotate-90 flex flex-col items-end">
        {/* Top Zero's */}
        <div className="w-[70%] h-[7%] bg-green-400 flex">
          <div className="w-[50%]  border flex justify-center items-center text-white font-semibold">
            00
          </div>
          <div className="w-[50%] border flex justify-center items-center text-white font-semibold">
            00
          </div>
        </div>
        {/* parent for both red & black grid n odd even btns */}
        <div className="w-[100%] h-[90%] flex">
          {/* side btns starts*/}
          <div className="w-[30%] h-[100.6%] bg-green-600 flex">
            <div className="w-[50%]">
              <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                <p className="rotate-90 text-white font-semibold">1 - 18</p>
              </div>
              <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                <p className="rotate-90 text-white font-semibold">EVEN</p>
              </div>
              <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                <p className="rotate-90 text-white font-semibold">Red</p>
              </div>
              <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                <p className="rotate-90 text-white font-semibold">Black</p>
              </div>
              <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                <p className="rotate-90 text-white font-semibold">ODD</p>
              </div>
              <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                <p className="rotate-90 text-white font-semibold">19 - 36</p>
              </div>
            </div>

            <div className="w-[50%]">
              <div
                className="h-[33.33%] bg-red-700 flex justify-center items-center border"
                onClick={() => MultiDivSelector(first_12, coin, 12)}
              >
                <p className="rotate-90 text-white font-semibold">1st 12</p>
              </div>
              <div
                className="h-[33.33%] bg-red-700 flex justify-center items-center border"
                onClick={() => MultiDivSelector(second_12, coin, 12)}
              >
                <p className="rotate-90 text-white font-semibold">2nd 12</p>
              </div>
              <div
                className="h-[33.33%] bg-red-700 flex justify-center items-center border"
                onClick={() => MultiDivSelector(third_12, coin, 12)}
              >
                <p className="rotate-90 text-white font-semibold">3rd 12</p>
              </div>
            </div>
          </div>
          {/* side btns ends */}
          {/* black & red nums */}
          <div className="w-[70%] h-[109%] bg-white flex flex-wrap">
            {Data.map((item) =>
              gridCell(item.bg, item.num, item.selector ? item.selector : ""),
            )}

            <div className="w-[100%] bg-green-700 flex">
              <div className="w-[33.33%] border flex justify-center items-center">
                <p className="text-white font-semibold">2 - 1</p>
              </div>

              <div className="w-[33.33%] border flex justify-center items-center">
                <p className="text-white font-semibold">2 - 1</p>
              </div>

              <div className="w-[33.33%] border flex justify-center items-center">
                <p className="text-white font-semibold">2 - 1</p>
              </div>
            </div>
          </div>
          {/* black & red nums ends here */}
        </div>

        {listener4Div.map((item, index) => {
          return (
            <div
              key={index}
              className="w-4 h-4 bg-gray-50 rounded-full absolute cursor-pointer z-20"
              style={{
                top: item.top,
                right: item.right,
                backgroundColor: item.bg ? item.bg : "yellow",
              }}
              onClick={() =>
                MultiDivSelector(item.num ? item.num : [], coin, 4)
              }
            ></div>
          );
        })}

        {listener6Div.map((item, index) => {
          return (
            <div
              key={index}
              className="w-4 h-4 bg-gray-50 rounded-full absolute cursor-pointer z-20"
              style={{
                top: item.top,
                left: item.left,
                backgroundColor: item.bg ? item.bg : "yellow",
              }}
              onClick={() =>
                MultiDivSelector(item.num ? item.num : [], coin, 6)
              }
            ></div>
          );
        })}

        {listener2DivVertical.map((item, index) => {
          return (
            <div
              className="w-16 h-3 bg-red-500 absolute cursor-pointer z-20 flex justify-center"
              style={{
                top: item.top,
                right: item.right,
                backgroundColor: item.bg ? item.bg : "",
              }}
              onClick={() =>
                MultiDivSelector(
                  item.num ? item.num : [],
                  coin,
                  2,
                  _2divKeys[index],
                )
              }
            >
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full -mt-1 text-xs flex justify-center items-center text-white"
                style={{ display: _2divData[index] > 0 ? "flex" : "none" }}
              >
                {_2divData[index]}
              </div>
            </div>
          );
        })}
      </div>
      {/* Roulette Grid Ends Here */}
    </div>
  );
}

export default RouletteGrid;
