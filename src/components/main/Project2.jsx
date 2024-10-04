import React, { useState } from "react";
import {
  black,
  Data,
  even_numbers,
  first_12,
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
} from "../resources/mainCompData";

function Project2() {
  // const [showCoin, setShowCoin] = useState(false);
  const [coin, setCoin] = useState(5);

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("Data");
    return savedData
      ? JSON.parse(savedData)
      : {
          _1: 0,
          _2: 0,
          _3: 0,
          _4: 0,
          _5: 0,
          _6: 0,
          _7: 0,
          _8: 0,
          _9: 0,
          _10: 0,
          _11: 0,
          _12: 0,
          _13: 0,
          _14: 0,
          _15: 0,
          _16: 0,
          _17: 0,
          _18: 0,
          _19: 0,
          _20: 0,
          _21: 0,
          _22: 0,
          _23: 0,
          _24: 0,
          _25: 0,
          _26: 0,
          _27: 0,
          _28: 0,
          _29: 0,
          _30: 0,
          _31: 0,
          _32: 0,
          _33: 0,
          _34: 0,
          _35: 0,
          _36: 0,
        };
  });
  // coins data accorfing to selectors
  const [singleDivCoinData, setSingleDivCoinData] = useState(() => {
    const savedData = localStorage.getItem("_singleDivCoin");
    return savedData
      ? JSON.parse(savedData)
      : {
          _1: 0,
          _2: 0,
          _3: 0,
          _4: 0,
          _5: 0,
          _6: 0,
          _7: 0,
          _8: 0,
          _9: 0,
          _10: 0,
          _11: 0,
          _12: 0,
          _13: 0,
          _14: 0,
          _15: 0,
          _16: 0,
          _17: 0,
          _18: 0,
          _19: 0,
          _20: 0,
          _21: 0,
          _22: 0,
          _23: 0,
          _24: 0,
          _25: 0,
          _26: 0,
          _27: 0,
          _28: 0,
          _29: 0,
          _30: 0,
          _31: 0,
          _32: 0,
          _33: 0,
          _34: 0,
          _35: 0,
          _36: 0,
        };
  });

  const [divSelect2Data, setDivSelect2Data] = useState(() => {
    const savedData = localStorage.getItem("_2DivData");
    return savedData
      ? JSON.parse(savedData)
      : {
          _1_4: 0,
          _2_5: 0,
          _3_6: 0,
          _4_7: 0,
          _5_8: 0,
          _6_9: 0,
          _7_10: 0,
          _8_11: 0,
          _9_12: 0,
          _10_13: 0,
          _11_14: 0,
          _12_15: 0,
          _13_16: 0,
          _14_17: 0,
          _15_18: 0,
          _16_19: 0,
          _17_20: 0,
          _18_21: 0,
          _19_22: 0,
          _20_23: 0,
          _21_24: 0,
          _22_25: 0,
          _23_26: 0,
          _24_27: 0,
          _25_28: 0,
          _26_29: 0,
          _27_30: 0,
          _28_31: 0,
          _29_32: 0,
          _30_33: 0,
          _31_34: 0,
          _32_35: 0,
          _33_36: 0,
        };
  });

  const [divSelect2DataHorizontal, setDivSelect2DataHorizontal] = useState(
    () => {
      const savedData = localStorage.getItem("_2DivDataHorizontal");
      return savedData
        ? JSON.parse(savedData)
        : {
            _1_2: 0,
            _2_3: 0,
            _4_5: 0,
            _5_6: 0,
            _7_8: 0,
            _8_9: 0,
            _10_11: 0,
            _11_12: 0,
            _13_14: 0,
            _14_15: 0,
            _16_17: 0,
            _17_18: 0,
            _19_20: 0,
            _20_21: 0,
            _22_23: 0,
            _23_24: 0,
            _25_26: 0,
            _26_27: 0,
            _28_29: 0,
            _29_30: 0,
            _31_32: 0,
            _32_33: 0,
            _34_35: 0,
            _35_36: 0,
          };
    },
  );

  const [divSelect3Data, setDivSelect3Data] = useState(() => {
    const savedData = localStorage.getItem("_3DivData");
    return savedData
      ? JSON.parse(savedData)
      : {
          _1_3: 0,
          _4_6: 0,
          _7_9: 0,
          _10_12: 0,
          _13_15: 0,
          _16_18: 0,
          _19_21: 0,
          _22_24: 0,
          _25_27: 0,
          _28_30: 0,
          _31_33: 0,
          _34_36: 0,
        };
  });

  const [divSelect4Data, setDivSelect4Data] = useState(() => {
    const savedData = localStorage.getItem("_4DivData");
    return savedData
      ? JSON.parse(savedData)
      : {
          _1_4_2_5: 0,
          _2_3_5_8: 0,
          _4_5_7_8: 0,
          _5_6_8_9: 0,
          _7_8_10_11: 0,
          _8_9_11_12: 0,
          _10_11_13_14: 0,
          _11_12_14_15: 0,
          _13_14_16_17: 0,
          _14_15_17_18: 0,
          _16_17_19_20: 0,
          _17_18_20_21: 0,
          _19_20_22_23: 0,
          _20_21_23_24: 0,
          _22_23_25_26: 0,
          _23_24_26_27: 0,
          _25_26_28_29: 0,
          _26_27_29_30: 0,
          _28_29_31_32: 0,
          _29_30_32_33: 0,
          _31_32_34_35: 0,
          _32_33_35_36: 0,
        };
  });

  const [divSelect6Data, setDivSelect6Data] = useState(() => {
    const savedData = localStorage.getItem("_6DivData");
    return savedData
      ? JSON.parse(savedData)
      : {
          _1_6: 0,
          _4_9: 0,
          _7_12: 0,
          _10_15: 0,
          _13_18: 0,
          _16_21: 0,
          _19_24: 0,
          _22_27: 0,
          _25_30: 0,
          _28_33: 0,
          _31_36: 0,
        };
  });

  const [lowerDivs, setLowerDivs] = useState(() => {
    const savedData = localStorage.getItem("LowerDivs");
    return savedData
      ? JSON.parse(savedData)
      : {
          _1st_12: 0,
          _2nd_12: 0,
          _3rd_12: 0,
          _1_18: 0,
          _19_36: 0,
          Odd: 0,
          Even: 0,
          black: 0,
          red: 0,
          col_1_2_1: 0,
          col_2_2_1: 0,
          col_3_2_1: 0,
        };
  });

  const win_lossObject = Object.values(data);
  const _1divKeys = Object.keys(singleDivCoinData);
  const _1divData = Object.values(singleDivCoinData);
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
  //   console.log(win_lossObject);singleDivCoinData  setSingleDivCoinData

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
            console.log((newData[key] += coin));
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
      coinData += coin;
      console.log(lowerDivs);
    }
  };

  const selectSingleDiv = (num, coin, coinData, selector) => {
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

  const resetHandler = () => {
    setData((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("Data", JSON.stringify(newData));
      return newData;
    });

    //resetting coin data
    setSingleDivCoinData((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("_singleDivCoin", JSON.stringify(newData));

      return newData;
    });

    setDivSelect2Data((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("_2DivData", JSON.stringify(newData));

      return newData;
    });

    setDivSelect2DataHorizontal((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("_2DivDataHorizontal", JSON.stringify(newData));

      return newData;
    });

    setDivSelect3Data((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("_3DivData", JSON.stringify(newData));

      return newData;
    });

    setDivSelect4Data((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("_4DivData", JSON.stringify(newData));

      return newData;
    });

    setDivSelect6Data((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("_6DivData", JSON.stringify(newData));

      return newData;
    });
  };

  const gridCell = (backgroundColor, num, selector, index) => (
    <div
      className="border w-[33.3%] text-white cursor-pointer relative flex items-center justify-center"
      style={{ backgroundColor }}
    >
      {num}
      <div
        className="w-full h-full hover:bg-blue-500 hover:bg-opacity-50 absolute z-10 top-0 flex justify-center items-center"
        onClick={() => selectSingleDiv(selector, coin, _1divKeys[index], 1)}
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
    <div
      className="bg-slate-500 mx-auto px-3 h-[400vh]"
      style={{ maxWidth: "80rem" }}
    >
      <div className="w-full flex justify-center items-center h-[30rem] bg-slate-300">
        {/* Roulette Grid */}

        <div className="relative max-sm:w-full w-[23rem] max-sm:h-[100vh] max-lg:h-[95vh] xl:h-[50rem] h-[95vh] bg-red-500  md:-rotate-90 flex flex-col items-end">
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
                <div
                  className="h-[16.667%] bg-green-700 flex justify-center items-center border"
                  onClick={() =>
                    MultiDivSelector(
                      one_eighteen,
                      coin,
                      "1:1",
                      lowerDivs._1_18,
                      "lowerdivs",
                    )
                  }
                >
                  <p className="rotate-90 text-white font-semibold">1 - 18</p>
                </div>
                <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                  <p
                    className="rotate-90 text-white font-semibold"
                    onClick={() =>
                      MultiDivSelector(
                        even_numbers,
                        coin,
                        "1:1",
                        lowerDivs.Even,
                        "lowerdivs",
                      )
                    }
                  >
                    EVEN
                  </p>
                </div>
                <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                  <p
                    className="rotate-90 text-white font-semibold"
                    onClick={() =>
                      MultiDivSelector(
                        red,
                        coin,
                        "1:1",
                        lowerDivs.red,
                        "lowerdivs",
                      )
                    }
                  >
                    Red
                  </p>
                </div>
                <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                  <p
                    className="rotate-90 text-white font-semibold"
                    onClick={() =>
                      MultiDivSelector(
                        black,
                        coin,
                        "1:1",
                        lowerDivs.black,
                        "lowerdivs",
                      )
                    }
                  >
                    Black
                  </p>
                </div>
                <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                  <p
                    className="rotate-90 text-white font-semibold"
                    onClick={() =>
                      MultiDivSelector(
                        odd_numbers,
                        coin,
                        "1:1",
                        lowerDivs.Odd,
                        "lowerdivs",
                      )
                    }
                  >
                    ODD
                  </p>
                </div>
                <div className="h-[16.667%] bg-green-700 flex justify-center items-center border">
                  <p
                    className="rotate-90 text-white font-semibold"
                    onClick={() =>
                      MultiDivSelector(
                        nineteen_thirtysix,
                        coin,
                        "1:1",
                        lowerDivs._19_36,
                        "lowerdivs",
                      )
                    }
                  >
                    19 - 36
                  </p>
                </div>
              </div>

              <div className="w-[50%]">
                <div
                  className="h-[33.33%] bg-red-700 flex justify-center items-center border"
                  onClick={() =>
                    MultiDivSelector(
                      first_12,
                      coin,
                      12,
                      lowerDivs._1st_12,
                      "lowerdivs",
                    )
                  }
                >
                  <p className="rotate-90 text-white font-semibold">1st 12</p>
                </div>
                <div
                  className="h-[33.33%] bg-red-700 flex justify-center items-center border"
                  onClick={() =>
                    MultiDivSelector(
                      second_12,
                      coin,
                      12,
                      lowerDivs._2nd_12,
                      "lowerdivs",
                    )
                  }
                >
                  <p className="rotate-90 text-white font-semibold">2nd 12</p>
                </div>
                <div
                  className="h-[33.33%] bg-red-700 flex justify-center items-center border"
                  onClick={() =>
                    MultiDivSelector(
                      third_12,
                      coin,
                      12,
                      lowerDivs._3rd_12,
                      "lowerdivs",
                    )
                  }
                >
                  <p className="rotate-90 text-white font-semibold">3rd 12</p>
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
                className="w-5 h-4 rounded-full absolute cursor-pointer z-20 text-xs flex justify-center items-center text-white"
                style={{
                  top: item.top,
                  right: item.right,
                  // backgroundColor: item.bg ? item.bg : "yellow",
                  // display: _2divData[index] > 0 ? "flex" : "none",
                }}
                onClick={() =>
                  MultiDivSelector(
                    item.num ? item.num : [],
                    coin,
                    4,
                    _4divKeys[index],
                    4,
                  )
                }
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
                    coin,
                    6,
                    _6divKeys[index],
                    6,
                  )
                }
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
                    coin,
                    2,
                    _2divKeys[index],
                    "2v",
                  )
                }
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
                    coin,
                    2,
                    _2divHKeys[index],
                    "2h",
                  )
                }
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
                    coin,
                    3,
                    _3divKeys[index],
                    3,
                  )
                }
              >
                {" "}
                <div
                  className="w-5 h-5 bg-yellow-500 rounded-full max-lg:mt-1.5 mt-3 -ml-0.5 text-xs flex justify-center items-center text-white md:rotate-90"
                  style={{ display: _3divData[index] > 0 ? "flex" : "none" }}
                >
                  {_3divData[index]}
                </div>
              </div>
            );
          })}
        </div>
        {/* Roulette Grid Ends Here */}
      </div>

      <div>
        <button className="bg-stone-600 p-2 rounded-lg" onClick={resetHandler}>
          Reset
        </button>
      </div>

      <div className="w-full flex justify-center max-sm:justify-between gap-6 items-start bg-zinc-700 mt-5">
        <div className="bg-blue-400 h-[40%] w-[30%]">a</div>

        <div className="w-full">
          <div
            className="w-[10%] bg-red-500 flex flex-wrap md:-rotate-90 md:absolute mt-5 max-sm:w-[50%] max-sm:h-[100%]"
            style={{ maxHeight: "40rem" }}
          >
            {Data.map((item, index) => {
              return (
                <div
                  className="w-[33.33%] flex justify-center items-center text-white font-semibold border"
                  style={{ backgroundColor: item.bg }}
                >
                  <p className="rotate-90">{win_lossObject[index]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className="w-full h-40 bg-black"></div>
      
      */}
    </div>
  );
}

export default Project2;
