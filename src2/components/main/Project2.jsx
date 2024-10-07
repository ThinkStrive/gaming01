import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import {
  _1_34,
  _2_35,
  _3_36,
  black,
  coinInfo,
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
} from "../resources/mainCompData";
import WheelCoverage from "../reuse/project2/WheelCoverage";
import RouletteGrid from "../reuse/project2/RouletteGrid";
import _1dlr from "../../assets/imgs/coin_imgs/bet-1.svg";
import "../../Style/Project2.css";

function Project2() {
  // const [showCoin, setShowCoin] = useState(false);
  const [coin, setCoin] = useState({ amt: 1, img: _1dlr });
  const [coinPopup, setCoinPopup] = useState(false);
  const [customCoinVal, setCustomCoinVal] = useState(0);
  const [customCoinExists, setCustomCoinExists] = useState(false);
  const customCoins = JSON.parse(localStorage.getItem("CustomCoins")) || [];
  const [zero, setZero] = useState("doubleZero");
  const [ratioPopup, setRatioPopup] = useState(false);
  const [ratioPopupData, setRatioPopupData] = useState({
    head: "",
    ratio: "",
    betAnmount: 0,
    payout: 0,
  });

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

  // state for equity
  const [equityData, setEquityData] = useState(() => {
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
  // coins data according to selectors
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
  const equityPerSpot = Object.values(equityData);
  // const _1divKeys = Object.keys(singleDivCoinData);
  // const _1divData = Object.values(singleDivCoinData);
  // const _singleDivData = Object.values(data);
  // const _2divKeys = Object.keys(divSelect2Data);
  // const _2divData = Object.values(divSelect2Data);
  // const _2divHKeys = Object.keys(divSelect2DataHorizontal);
  // const _2divHData = Object.values(divSelect2DataHorizontal);
  // const _4divKeys = Object.keys(divSelect4Data);
  // const _4divData = Object.values(divSelect4Data);
  // const _3divKeys = Object.keys(divSelect3Data);
  // const _3divData = Object.values(divSelect3Data);
  // const _6divKeys = Object.keys(divSelect6Data);
  // const _6divData = Object.values(divSelect6Data);
  // // const _lowerDivsData = Object.values(lowerDivs);
  // //   console.log(win_lossObject);singleDivCoinData  setSingleDivCoinData

  // const setCoinData = (coin, coinData, selector) => {
  //   if (selector === "2v") {
  //     setDivSelect2Data((prevData) => {
  //       const newData = { ...prevData };

  //       for (const key in newData) {
  //         if (key === coinData) {
  //           newData[key] += coin;
  //           console.log((newData[key] += coin));
  //         }
  //       }

  //       localStorage.setItem("_2DivData", JSON.stringify(newData));

  //       return newData;
  //     });
  //   } else if (selector === 1) {
  //     setSingleDivCoinData((prevData) => {
  //       const newData = { ...prevData };

  //       for (const key in newData) {
  //         if (key === coinData) {
  //           newData[key] += coin;
  //           console.log((newData[key] += coin));
  //         }
  //       }

  //       localStorage.setItem("_singleDivCoin", JSON.stringify(newData));

  //       return newData;
  //     });
  //   } else if (selector === "2h") {
  //     setDivSelect2DataHorizontal((prevData) => {
  //       const newData = { ...prevData };

  //       for (const key in newData) {
  //         if (key === coinData) {
  //           newData[key] += coin;
  //           console.log((newData[key] += coin));
  //         }
  //       }

  //       localStorage.setItem("_2DivDataHorizontal", JSON.stringify(newData));

  //       return newData;
  //     });
  //   } else if (selector === 3) {
  //     setDivSelect3Data((prevData) => {
  //       const newData = { ...prevData };

  //       for (const key in newData) {
  //         if (key === coinData) {
  //           newData[key] += coin;
  //           console.log((newData[key] += coin));
  //         }
  //       }

  //       localStorage.setItem("_3DivData", JSON.stringify(newData));

  //       return newData;
  //     });
  //   } else if (selector === 4) {
  //     setDivSelect4Data((prevData) => {
  //       const newData = { ...prevData };

  //       for (const key in newData) {
  //         if (key === coinData) {
  //           newData[key] += coin;
  //           console.log((newData[key] += coin));
  //         }
  //       }

  //       localStorage.setItem("_4DivData", JSON.stringify(newData));

  //       return newData;
  //     });
  //   } else if (selector === 6) {
  //     setDivSelect6Data((prevData) => {
  //       const newData = { ...prevData };

  //       for (const key in newData) {
  //         if (key === coinData) {
  //           newData[key] += coin;
  //           console.log((newData[key] += coin));
  //         }
  //       }

  //       localStorage.setItem("_6DivData", JSON.stringify(newData));

  //       return newData;
  //     });
  //   } else if (selector === "lowerdivs") {
  //     setLowerDivs((prevData) => {
  //       const newData = { ...prevData };

  //       for (const key in newData) {
  //         if (key == coinData) {
  //           newData[key] += coin;
  //           console.log((newData[key] += coin));
  //         }
  //       }

  //       localStorage.setItem("LowerDivs", JSON.stringify(newData));

  //       return newData;
  //     });
  //   }
  // };

  // const selectSingleDiv = (
  //   num,
  //   coin,
  //   coinData,
  //   selector,
  //   type,
  //   ratio,
  //   amount,
  //   payout,
  // ) => {
  //   //num, coin, coinData, selector type ratio amount payout
  //   setData((prevData) => {
  //     const newData = { ...prevData };

  //     for (const key in newData) {
  //       if (key === num) {
  //         newData[key] += coin * 35;
  //       } else {
  //         newData[key] -= coin;
  //       }
  //     }

  //     localStorage.setItem("Data", JSON.stringify(newData));
  //     return newData;
  //   });
  //   console.log("data : ", type, ratio, amount, payout);

  //   showRatioPopup(type, ratio, amount, payout);
  //   setCoinData(coin / 2, coinData, selector);
  // };

  // const MultiDivSelector = (numsArray, coin, length, coinData, selector) => {
  //   setData((prevData) => {
  //     const newData = { ...prevData };

  //     numsArray.forEach((num) => {
  //       if (newData.hasOwnProperty(num)) {
  //         if (length === 4) {
  //           newData[num] += coin * 8;
  //         } else if (length === 6) {
  //           newData[num] += coin * 5;
  //         } else if (length === 2) {
  //           newData[num] += coin * 17;
  //         } else if (length === 12) {
  //           newData[num] += coin * 2;
  //         } else if (length === "1:1") {
  //           newData[num] += coin * 1;
  //         } else if (length === 3) {
  //           newData[num] += coin * 11;
  //         }
  //       }
  //     });

  //     for (const key in newData) {
  //       if (!numsArray.includes(key)) {
  //         newData[key] -= coin;
  //       }
  //     }

  //     localStorage.setItem("Data", JSON.stringify(newData));
  //     return newData;
  //   });
  //   setCoinData(coin / 2, coinData, selector);
  // };

  // const gridCell = (backgroundColor, num, selector, index) => (
  //   <div
  //     className="border w-[33.3%] text-white cursor-pointer relative flex items-center justify-center"
  //     style={{ backgroundColor }}
  //   >
  //     {num}
  //     <div
  //       className="w-full h-full hover:bg-blue-500 hover:bg-opacity-50 absolute z-10 top-0 flex justify-center items-center"
  //       onClick={() =>
  //         selectSingleDiv(
  //           selector,
  //           coin,
  //           _1divKeys[index],
  //           1,
  //           `${num} Straight-Up`,
  //           35,
  //           _1divData[index],
  //           _singleDivData[index],
  //         )
  //       } //num, coin, coinData, selector type ratio amount payout
  //       onMouseEnter={() =>
  //         showRatioPopup(
  //           `${num} Straight-Up`,
  //           35,
  //           _1divData[index],
  //           _singleDivData[index],
  //         )
  //       }
  //       onMouseLeave={() => removeRatioPopup()}
  //     >
  //       <div
  //         className="w-5 h-5 bg-yellow-500 rounded-full text-xs flex justify-center items-center text-white md:rotate-90"
  //         style={{ display: _1divData[index] > 0 ? "flex" : "none" }}
  //       >
  //         {_1divData[index]}
  //       </div>
  //     </div>
  //   </div>
  // );

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

    setLowerDivs((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("LowerDivs", JSON.stringify(newData));

      return newData;
    });
  };

  const showRatioPopup = (type, ratio, amount) => {
    setRatioPopupData(() => {
      const newData = { ...ratioPopupData };

      newData.head = type;
      newData.ratio = ratio;
      newData.betAnmount = amount;
      newData.payout = amount * ratio;

      return newData;
    });

    setRatioPopup(true);
  };

  const removeRatioPopup = () => {
    setRatioPopup(false);
  };

  // CustomCoins
  const addCustomCoins = (coin) => {
    const isCustomCoinExist = customCoins.some((item) => item === coin);
    const isPredefinedCoin = coinInfo.some((item) => item.amount === coin);

    if (!isCustomCoinExist && !isPredefinedCoin && coin !== 0) {
      customCoins.push(coin);
      localStorage.setItem("CustomCoins", JSON.stringify(customCoins));
      setCoinPopup(false);
      setCustomCoinExists(false);
    } else {
      setCustomCoinExists(true);
    }
  };

  return (
    <div
      className="bg-slate-500 mx-auto px-3 h-[400vh]"
      style={{ maxWidth: "80rem" }}
    >
      <div className="w-full flex justify-center items-center h-[30rem] bg-slate-900 relative">
        {/* Roulette Grid */}
        <div>
          <RouletteGrid
            data={data}
            setData={setData}
            singleDivCoinData={singleDivCoinData}
            setSingleDivCoinData={setSingleDivCoinData}
            divSelect2Data={divSelect2Data}
            setDivSelect2Data={setDivSelect2Data}
            divSelect2DataHorizontal={divSelect2DataHorizontal}
            setDivSelect2DataHorizontal={setDivSelect2DataHorizontal}
            divSelect4Data={divSelect4Data}
            setDivSelect4Data={setDivSelect4Data}
            divSelect3Data={divSelect3Data}
            setDivSelect3Data={setDivSelect3Data}
            divSelect6Data={divSelect6Data}
            setDivSelect6Data={setDivSelect6Data}
            lowerDivs={lowerDivs}
            setLowerDivs={setLowerDivs}
            showRatioPopup={showRatioPopup}
            removeRatioPopup={removeRatioPopup}
            zero={zero}
            setZero={setZero}
            coin={coin}
          />
        </div>
        {/* Roulette Grid Ends Here */}
        {/* info ratio box */}
        <div
          className="w-40 bg-customPurple absolute top-14 right-5 z-20"
          style={{ display: ratioPopup ? "block" : "none" }}
        >
          <div className="w-full p-1 bg-darkBlue text-center font-semibold">
            {ratioPopupData.head}
          </div>
          <div className="text-xs font-semibold">
            <p className="p-1">Pays: {ratioPopupData.ratio}:1</p>
            {ratioPopupData.betAnmount <= 0 || ratioPopupData.payout <= 0 ? (
              ""
            ) : (
              <>
                <p className="p-1">Bet: {ratioPopupData.betAnmount}</p>
                <p className="p-1">Payout: {ratioPopupData.payout}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Reset btn */}
      <div>
        <button className="bg-stone-600 p-2 rounded-lg" onClick={resetHandler}>
          Reset
        </button>
      </div>

      <div className="w-full flex justify-center max-sm:justify-between gap-6 items-start bg-zinc-700 max-sm:mt-20">
        {/* Coins section */}
        <div className=" w-[20rem] flex items-center gap-3 overflow-x-scroll">
          {coinInfo.map((item, index) => {
            return (
              <img
                key={index}
                src={item.img}
                alt=""
                className={
                  item.amount === coin.amt
                    ? "border border-neonGreen rounded-full p-1 hover:animate-pulse cursor-pointer"
                    : "rounded-full p-1 cursor-pointer"
                }
                onClick={() =>
                  setCoin((prevData) => {
                    const newData = { ...prevData };
                    newData.amt = item.amount;
                    return newData;
                  })
                }
              />
            );
          })}

          {customCoins
            ? customCoins.map((item) => {
                return (
                  <div
                    className="bg-blue-500 w-[100%]"
                    onClick={() =>
                      setCoin((prevData) => {
                        const newData = { ...prevData };
                        newData.amt = item;
                        return newData;
                      })
                    }
                  >
                    {item}
                  </div>
                );
              })
            : ""}

          <div
            className="px-4 h-[3.6rem] bg-gray-500 flex justify-center items-center rounded-full cursor-pointer"
            onClick={() => setCoinPopup(coinPopup ? false : true)}
          >
            <IoMdAdd size={28} />
          </div>
        </div>

        {/* Coin add Popup */}
        <div
          className="w-[15rem] h-[13rem] absolute p-2 flex flex-col justify-center items-center rounded-lg shadow-2xl backdrop-sepia bg-gray-900"
          style={{ display: coinPopup ? "flex" : "none" }}
        >
          <h2 className="text-gray-300 font-semibold text-[1rem]">
            Add Your custom Coin here!
          </h2>
          <div className="flex gap-5 flex-col justify-center items-center border border-gray-500 py-4 px-2 rounded-lg">
            <div>
              <input
                type={customCoinVal}
                className="bg-transparent border border-gray-700 py-1 rounded-md outline-none text-[.9rem] pl-1"
                placeholder="Enter the amount"
                onInput={(e) => setCustomCoinVal(e.target.value)}
              />
              <p
                className="inline text-xs text-[rgb(204,0,0)] font-semibold"
                style={{ display: customCoinExists ? "inline" : "none" }}
              >
                This coin already exists
              </p>
            </div>
            <button
              className="bg-white shadow-2xl w-[2rem] h-[2rem] flex justify-center items-center rounded-full text-gray-500"
              onClick={() => addCustomCoins(Number(customCoinVal))}
            >
              <IoMdAdd size={20} />
            </button>
          </div>
        </div>

        {/* WheelCoverage */}
        <div className="w-[16rem] max-sm:rotate-90">
          <WheelCoverage data={data} type={zero} />
        </div>

        <div className="w-full">
          {/* Win/Loss per spot */}
          <div
            className="w-[20%] bg-red-500 flex flex-wrap md:-rotate-90 md:h-[40rem] mt-5 max-sm:w-[50%] max-sm:h-[100%]"
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

          <div
            className="w-[10%] bg-red-500 flex flex-wrap md:-rotate-90 md:absolute md:h-[60%] mt-5 max-sm:w-[50%] max-sm:h-[100%]"
            style={{ maxHeight: "40rem" }}
          >
            {Data.map((item, index) => {
              return (
                <div
                  className="w-[33.33%] flex justify-center items-center text-white font-semibold border"
                  style={{ backgroundColor: item.bg }}
                >
                  <p className="rotate-90">{equityPerSpot[index]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className="w-full h-40 bg-black"></div>
      
      */}

      <footer className="w-full">
        <ul className="flex my-1">
          <li className="border-r-2 px-1 text-xs font-semibold h-3">
            <a href="#">Legcy RBA</a>
          </li>
          <li className="border-r-2 px-1 text-xs font-semibold h-3">
            <a href="#">Roulette Systems</a>
          </li>

          <li className="px-1 text-xs font-semibold h-3">
            <a href="#">How do I use this tool?</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Project2;
