import React from "react";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import {
  _1_34,
  _2_35,
  _3_36,
  black,
  Data,
  even_numbers,
  first_12,
  listener0,
  listener2DivHorizontal,
  listener2DivVertical,
  listener3div,
  listener4Div,
  listener6Div,
  nineteen_thirtysix,
  odd_numbers,
  one_eighteen,
  red,
  second_12,
  third_12,
} from "../../resources/mainCompData";

function RouletteGrid({
  data,
  setData,
  singleDivCoinData,
  setSingleDivCoinData,
  divSelect2Data,
  setDivSelect2Data,
  divSelect2DataHorizontal,
  setDivSelect2DataHorizontal,
  divSelect4Data,
  setDivSelect4Data,
  divSelect3Data,
  setDivSelect3Data,
  divSelect6Data,
  setDivSelect6Data,
  lowerDivs,
  setLowerDivs,
  showRatioPopup,
  removeRatioPopup,
  zero,
  setZero,
  coin,
}) {
  const _1divKeys = Object.keys(singleDivCoinData);
  const _1divData = Object.values(singleDivCoinData);
  const _singleDivData = Object.values(data);
  const _2divKeys = Object.keys(divSelect2Data);
  const _2divData = Object.values(divSelect2Data);
  const _2divHKeys = Object.keys(divSelect2DataHorizontal);
  const _2divHData = Object.values(divSelect2DataHorizontal);
  const _4divKeys = Object.keys(divSelect4Data);
  const _4divData = Object.values(divSelect4Data);
  const _3divKeys = Object.keys(divSelect3Data);
  const _3divData = Object.values(divSelect3Data);
  const _6divKeys = Object.keys(divSelect6Data);
  const _6divData = Object.values(divSelect6Data);

  const setCoinData = (coin, coinData, selector) => {
    if (selector === "2v") {
      setDivSelect2Data((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key === coinData) {
            newData[key] += coin;
            console.log((newData[key] += coin));
          }
        }

        localStorage.setItem("_2DivData", JSON.stringify(newData));

        return newData;
      });
    } else if (selector === 1) {
      setSingleDivCoinData((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key === coinData) {
            newData[key] += coin;
          }
        }

        localStorage.setItem("_singleDivCoin", JSON.stringify(newData));

        return newData;
      });
    } else if (selector === "2h") {
      setDivSelect2DataHorizontal((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key === coinData) {
            newData[key] += coin;
            console.log((newData[key] += coin));
          }
        }

        localStorage.setItem("_2DivDataHorizontal", JSON.stringify(newData));

        return newData;
      });
    } else if (selector === 3) {
      setDivSelect3Data((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key === coinData) {
            newData[key] += coin;
            console.log((newData[key] += coin));
          }
        }

        localStorage.setItem("_3DivData", JSON.stringify(newData));

        return newData;
      });
    } else if (selector === 4) {
      setDivSelect4Data((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key === coinData) {
            newData[key] += coin;
            console.log((newData[key] += coin));
          }
        }

        localStorage.setItem("_4DivData", JSON.stringify(newData));

        return newData;
      });
    } else if (selector === 6) {
      setDivSelect6Data((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key === coinData) {
            newData[key] += coin;
            console.log((newData[key] += coin));
          }
        }

        localStorage.setItem("_6DivData", JSON.stringify(newData));

        return newData;
      });
    } else if (selector === "lowerdivs") {
      setLowerDivs((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key == coinData) {
            newData[key] += coin;
            console.log((newData[key] += coin));
          }
        }

        localStorage.setItem("LowerDivs", JSON.stringify(newData));

        return newData;
      });
    }
  };

  const selectSingleDiv = (
    num,
    coin,
    coinData,
    selector,
    type,
    ratio,
    amount,
  ) => {
    //num, coin, coinData, selector type ratio amount payout
    setData((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        if (key === num) {
          newData[key] += coin * 35;
        } else {
          newData[key] -= coin;
        }
      }

      localStorage.setItem("Data", JSON.stringify(newData));
      return newData;
    });
    // console.log("data : ", type, ratio, amount, payout);

    showRatioPopup(type, ratio, amount);
    setCoinData(coin / 2, coinData, selector);
  };

  const MultiDivSelector = (numsArray, coin, length, coinData, selector) => {
    setData((prevData) => {
      const newData = { ...prevData };

      numsArray.forEach((num) => {
        if (newData.hasOwnProperty(num)) {
          if (length === 4) {
            newData[num] += coin * 8;
          } else if (length === 6) {
            newData[num] += coin * 5;
          } else if (length === 2) {
            newData[num] += coin * 17;
          } else if (length === 12) {
            newData[num] += coin * 2;
          } else if (length === "1:1") {
            newData[num] += coin * 1;
          } else if (length === 3) {
            newData[num] += coin * 11;
          }
        }
      });

      for (const key in newData) {
        if (!numsArray.includes(key)) {
          newData[key] -= coin;
        }
      }

      localStorage.setItem("Data", JSON.stringify(newData));
      return newData;
    });
    setCoinData(coin / 2, coinData, selector);
  };

  const gridCell = (backgroundColor, num, selector, index) => (
    <div
      className="border w-[33.3%] text-white cursor-pointer relative flex items-center justify-center"
      style={{ backgroundColor }}
    >
      {num}
      <div
        className="w-full h-full hover:bg-blue-500 hover:bg-opacity-50 absolute z-10 top-0 flex justify-center items-center"
        onClick={() =>
          selectSingleDiv(
            selector,
            coin.amt,
            _1divKeys[index],
            1,
            `${num} Straight-Up`,
            35,
            _1divData[index],
            _singleDivData[index],
          )
        } //num, coin, coinData, selector type ratio amount payout
        onMouseEnter={() =>
          showRatioPopup(`${num} Straight-Up`, 35, _1divData[index])
        }
        onMouseLeave={() => removeRatioPopup()}
      >
        <div
          className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90"
          style={{ display: _1divData[index] > 0 ? "flex" : "none" }}
        >
          {_1divData[index]}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative max-sm:w-full w-[23rem] max-sm:h-[100vh] max-lg:h-[95vh] xl:h-[50rem] h-[95vh] bg-red-500  md:-rotate-90 flex flex-col items-end max-sm:mt-14">
      {/* zero switch */}
      <div
        className="absolute left-6 -bottom-16 max-sm:-bottom-16 w-12 h-24 text-black z-20 rotate-90 flex flex-col justify-center items-center cursor-pointer"
        onClick={() => setZero(zero === "zero" ? "doubleZero" : "zero")}
      >
        <MdKeyboardDoubleArrowUp size={28} color="rgb(255,255,255)" />
        <p
          className="text-lg font-semibold text-white"
          style={{ color: "rgb(91,214,49)" }}
        >
          {zero === "zero" ? "00" : "0"}
        </p>
        <MdKeyboardDoubleArrowDown size={28} color="rgb(255,255,255)" />
      </div>

      {/* Top Zero's */}
      <div className="w-[70%] h-[7%] bg-green-400 flex">
        <div
          className="w-[50%]  border flex justify-center items-center text-white font-semibold"
          style={{ width: zero === "zero" ? "100%" : "50%" }}
          onMouseEnter={() => showRatioPopup()}
          onMouseLeave={() => removeRatioPopup()}
        >
          0
          <div
            className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90"
            style={{ display: data._0 > 0 ? "flex" : "none" }}
          >
            {_1divData._0}
          </div>
        </div>
        <div
          className="w-[50%] border flex justify-center items-center text-white font-semibold"
          style={{ display: zero === "zero" ? "none" : "flex" }}
        >
          00
          <div
            className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90"
            style={{ display: data._00 > 0 ? "flex" : "none" }}
          >
            {_1divData._00}
          </div>
        </div>
      </div>
      {/* parent for both red & black grid n odd even btns */}
      <div className="w-[100%] h-[90%] flex">
        {/* side btns starts*/}
        <div className="w-[30%] h-[100.6%] bg-green-600 flex">
          <div className="w-[50%]">
            <div
              className="h-[16.667%] bg-green-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(
                  one_eighteen,
                  coin.amt,
                  "1:1",
                  "_1_18",
                  "lowerdivs",
                )
              }
              onMouseEnter={() => showRatioPopup(`1 - 18`, 1, lowerDivs._1_18)}
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">1 - 18</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{ display: lowerDivs._1_18 === 0 ? "none" : "flex" }}
              >
                {lowerDivs._1_18}
              </div>
            </div>
            <div
              className="h-[16.667%] bg-green-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(
                  even_numbers,
                  coin.amt,
                  "1:1",
                  "Even",
                  "lowerdivs",
                )
              }
              onMouseEnter={() => showRatioPopup(`EVEN`, 1, lowerDivs.Even)}
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">EVEN</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{ display: lowerDivs.Even === 0 ? "none" : "flex" }}
              >
                {lowerDivs.Even}
              </div>
            </div>
            <div
              className="h-[16.667%] bg-green-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(red, coin.amt, "1:1", "red", "lowerdivs")
              }
              onMouseEnter={() => showRatioPopup(`RED`, 1, lowerDivs.red)}
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">Red</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{ display: lowerDivs.red === 0 ? "none" : "flex" }}
              >
                {lowerDivs.red}
              </div>
            </div>
            <div
              className="h-[16.667%] bg-green-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(black, coin.amt, "1:1", "black", "lowerdivs")
              }
              onMouseEnter={() => showRatioPopup(`Black`, 1, lowerDivs.black)}
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">Black</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{ display: lowerDivs.black === 0 ? "none" : "flex" }}
              >
                {lowerDivs.black}
              </div>
            </div>
            <div
              className="h-[16.667%] bg-green-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(
                  odd_numbers,
                  coin.amt,
                  "1:1",
                  "Odd",
                  "lowerdivs",
                )
              }
              onMouseEnter={() => showRatioPopup(`ODD`, 1, lowerDivs.Odd)}
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">ODD</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{ display: lowerDivs.Odd === 0 ? "none" : "flex" }}
              >
                {lowerDivs.Odd}
              </div>
            </div>
            <div
              className="h-[16.667%] bg-green-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(
                  nineteen_thirtysix,
                  coin.amt,
                  "1:1",
                  "_19_36",
                  "lowerdivs",
                )
              }
              onMouseEnter={() =>
                showRatioPopup(`19 - 36`, 1, lowerDivs._19_36)
              }
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">19 - 36</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{
                  display: lowerDivs._19_36 === 0 ? "none" : "flex",
                }}
              >
                {lowerDivs._19_36}
              </div>
            </div>
          </div>

          <div className="w-[50%]">
            <div
              className="h-[33.33%] bg-red-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(first_12, coin.amt, 12, "_1st_12", "lowerdivs")
              }
              onMouseEnter={() =>
                showRatioPopup(`1st Dozen`, 2, lowerDivs._1st_12)
              }
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">1st 12</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{
                  display: lowerDivs._1st_12 === 0 ? "none" : "flex",
                }}
              >
                {lowerDivs._1st_12}
              </div>
            </div>
            <div
              className="h-[33.33%] bg-red-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(
                  second_12,
                  coin.amt,
                  12,
                  "_2nd_12",
                  "lowerdivs",
                )
              }
              onMouseEnter={() =>
                showRatioPopup(`2nd Dozen`, 2, lowerDivs._2nd_12)
              }
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">2nd 12</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{
                  display: lowerDivs._2nd_12 === 0 ? "none" : "flex",
                }}
              >
                {lowerDivs._2nd_12}
              </div>
            </div>
            <div
              className="h-[33.33%] bg-red-700 flex justify-center items-center border relative cursor-pointer"
              onClick={() =>
                MultiDivSelector(third_12, coin.amt, 12, "_3rd_12", "lowerdivs")
              }
              onMouseEnter={() =>
                showRatioPopup(`3rd Dozen`, 2, lowerDivs._3rd_12)
              }
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="rotate-90 text-white font-semibold">3rd 12</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{
                  display: lowerDivs._3rd_12 === 0 ? "none" : "flex",
                }}
              >
                {lowerDivs._3rd_12}
              </div>
            </div>
          </div>
        </div>
        {/* side btns ends */}
        {/* black & red nums */}
        <div className="w-[70%] h-[109%] bg-white flex flex-wrap">
          {Data.map((item, index) =>
            gridCell(
              item.bg,
              item.num,
              item.selector ? item.selector : "",
              index,
            ),
          )}

          <div className="w-[100%] bg-green-700 flex">
            <div
              className="w-[33.33%] border flex justify-center items-center cursor-pointer relative"
              onClick={() =>
                MultiDivSelector(_1_34, coin.amt, 12, "col_1_2_1", "lowerdivs")
              }
              onMouseEnter={() =>
                showRatioPopup(`1st Column`, 2, lowerDivs.col_1_2_1)
              }
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="text-white font-semibold">2 - 1</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{
                  display: lowerDivs.col_1_2_1 === 0 ? "none" : "flex",
                }}
              >
                {lowerDivs.col_1_2_1}
              </div>
            </div>

            <div
              className="w-[33.33%] border flex justify-center items-center cursor-pointer relative"
              onClick={() =>
                MultiDivSelector(_2_35, coin.amt, 12, "col_2_2_1", "lowerdivs")
              }
              onMouseEnter={() =>
                showRatioPopup(`2nd Column`, 2, lowerDivs.col_2_2_1)
              }
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="text-white font-semibold">2 - 1</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{
                  display: lowerDivs.col_2_2_1 === 0 ? "none" : "flex",
                }}
              >
                {lowerDivs.col_2_2_1}
              </div>
            </div>

            <div
              className="w-[33.33%] border flex justify-center items-center cursor-pointer relatives"
              onClick={() =>
                MultiDivSelector(_3_36, coin.amt, 12, "col_3_2_1", "lowerdivs")
              }
              onMouseEnter={() =>
                showRatioPopup(`3rd Column`, 2, lowerDivs.col_3_2_1)
              }
              onMouseLeave={() => removeRatioPopup()}
            >
              <p className="text-white font-semibold">2 - 1</p>
              <div
                className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90 absolute"
                style={{
                  display: lowerDivs.col_3_2_1 === 0 ? "none" : "flex",
                }}
              >
                {lowerDivs.col_3_2_1}
              </div>
            </div>
          </div>
        </div>
        {/* black & red nums ends here */}
      </div>

      {listener4Div.map((item, index) => {
        return (
          <div
            key={index}
            className="w-5 h-4 rounded-full absolute cursor-pointer z-20 text-xs flex justify-center items-center text-white"
            style={{
              top: item.top,
              right: item.right,
            }}
            onClick={() =>
              MultiDivSelector(
                item.num ? item.num : [],
                coin.amt,
                4,
                _4divKeys[index],
                4,
              )
            }
            onMouseEnter={() =>
              showRatioPopup(`${item.corner} Corner`, 8, _4divData[index])
            }
            onMouseLeave={() => removeRatioPopup()}
          >
            <div
              className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90"
              style={{ display: _4divData[index] > 0 ? "flex" : "none" }}
            >
              {_4divData[index]}
            </div>
          </div>
        );
      })}

      {listener6Div.map((item, index) => {
        return (
          <div
            key={index}
            className="w-5 h-4 rounded-full absolute cursor-pointer z-20"
            style={{
              top: item.top,
              left: item.left,
              // backgroundColor: item.bg ? item.bg : "yellow",
            }}
            onClick={() =>
              MultiDivSelector(
                item.num ? item.num : [],
                coin.amt,
                6,
                _6divKeys[index],
                6,
              )
            }
            onMouseEnter={() =>
              showRatioPopup(
                `${item.double_street} Double Street`,
                5,
                _6divData[index],
              )
            }
            onMouseLeave={() => removeRatioPopup()}
          >
            <div
              className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90"
              style={{ display: _6divData[index] > 0 ? "flex" : "none" }}
            >
              {_6divData[index]}
            </div>
          </div>
        );
      })}

      {listener2DivVertical.map((item, index) => {
        return (
          <div
            className="w-16 h-3  absolute cursor-pointer z-20 flex justify-center"
            style={{
              top: item.top,
              right: item.right,
              // backgroundColor: item.bg ? item.bg : "",
            }}
            onClick={() =>
              MultiDivSelector(
                item.num ? item.num : [],
                coin.amt,
                2,
                _2divKeys[index],
                "2v",
              )
            }
            onMouseEnter={() =>
              showRatioPopup(`${item.split} Split`, 17, _2divData[index])
            }
            onMouseLeave={() => removeRatioPopup()}
          >
            <div
              className="w-5 h-5 bg-yellow-500 rounded-full -mt-1 text-xs flex justify-center items-center text-white md:rotate-90"
              style={{ display: _2divData[index] > 0 ? "flex" : "none" }}
            >
              {_2divData[index]}
            </div>
          </div>
        );
      })}

      {listener2DivHorizontal.map((item, index) => {
        return (
          <div
            className="w-3 h-12 max-lg:h-8 absolute cursor-pointer z-20"
            style={{
              top: item.top,
              left: item.left,
              // backgroundColor: item.bg ? item.bg : "",
            }}
            onClick={() =>
              MultiDivSelector(
                item.num ? item.num : [],
                coin.amt,
                2,
                _2divHKeys[index],
                "2h",
              )
            }
            onMouseEnter={() =>
              showRatioPopup(`${item.split} Split`, 17, _2divHData[index])
            }
            onMouseLeave={() => removeRatioPopup()}
          >
            <div
              className="w-5 h-5 bg-yellow-500 rounded-full max-lg:mt-1.5 mt-3 -ml-1 text-xs flex justify-center items-center text-white md:rotate-90"
              style={{ display: _2divHData[index] > 0 ? "flex" : "none" }}
            >
              {_2divHData[index]}
            </div>
          </div>
        );
      })}

      {listener3div.map((item, index) => {
        return (
          <div
            className="w-3 h-10 max-lg:h-8 absolute cursor-pointer z-20"
            style={{
              top: item.top,
              left: item.left,
              // backgroundColor: item.bg ? item.bg : "",
            }}
            onClick={() =>
              MultiDivSelector(
                item.num ? item.num : [],
                coin.amt,
                3,
                _3divKeys[index],
                3,
              )
            }
            onMouseEnter={() =>
              showRatioPopup(`${item.street} Street`, 11, _3divData[index])
            }
            onMouseLeave={() => removeRatioPopup()}
          >
            {" "}
            <div
              className="w-5 h-5 bg-yellow-500 rounded-full max-lg:mt-1.5 mt-3 -ml-0.5 text-xs flex justify-center items-center text-white md:rotate-90"
              style={{
                display: _3divData[index] > 0 ? "flex" : "none",
                background: `url(${coin.img}) center`,
              }}
            >
              {_3divData[index]}
            </div>
          </div>
        );
      })}

      {listener0.map((item, index) => {
        return (
          <div
            key={index}
            className="w-4 h-4 bg-gray-50 rounded-full absolute cursor-pointer z-20"
            style={{
              top: item.top,
              right: item.right,
              backgroundColor: item.bg ? item.bg : "yellow",
            }}
            // onClick={() => divSelect6(item.num ? item.num : [], coin)}
          ></div>
        );
      })}
    </div>
  );
}

export default RouletteGrid;
