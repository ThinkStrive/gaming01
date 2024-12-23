import React, { useState, useRef } from "react";

import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoIosSwap } from "react-icons/io";
import { MdOutlineCameraAlt, MdDataSaverOff } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";

import {
  _1_34,
  _2_35,
  _3_36,
  black,
  coinImg,
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
} from "../resources/Project2CompnentRenderData";
import WheelCoverage from "../reuse/project2/WheelCoverage";
import RouletteGrid from "../reuse/project2/RouletteGrid";
import _1dlr from "../../assets/imgs/coin_imgs/bet-1.png";
import "../../Style/Project2.css";
import Notes from "../reuse/project2/Notes";

function Project2({ captureScreenshot, theme }) {
  // const [showCoin, setShowCoin] = useState(false);
  const [coin, setCoin] = useState({ amt: 1, img: _1dlr });
  const [isChipsExpanded, setIsChipsExpanded] = useState(false);
  const moonDesktopRadius = 125; // for chips flower view
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
  const [show, setShow] = useState("winloss");
  const [showTable, setShowTable] = useState("roulette");
  // const [showWheelCoverage, setShowWheelCoverage] = useState(false);
  const [showPopup, setShowPopup] = useState({ show: false, showWhat: "" });
  const [totalBetAmt, setTotalBetAmt] = useState(() => {
    const savedData = localStorage.getItem("totalBetAmount");
    return savedData ? JSON.parse(savedData) : { amt: 0 };
  });

  const [isbtnClicked, setIsbtnClicked] = useState(false);

  const previousData = JSON.parse(localStorage.getItem("previousData2")) || [];

  const [zeroDivs, setZeroDivs] = useState(() => {
    const savedData = localStorage.getItem("zeroDivs");
    return savedData
      ? JSON.parse(savedData)
      : {
          _0: 0,
          _00: 0,
        };
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
    const savedData = localStorage.getItem("EquityData");
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

  const [zeroEquityData, setZeroEquityData] = useState(() => {
    const savedData = localStorage.getItem("zeroEquityData");
    return savedData
      ? JSON.parse(savedData)
      : {
          _0: 0,
          _00: 0,
        };
  });

  // setZeroEquityData

  // coins data according to selectors

  const [zeroData, setZeroData] = useState(() => {
    const savedData = localStorage.getItem("zeroData");
    return savedData
      ? JSON.parse(savedData)
      : {
          _0: {
            _0: 0,
            _0_1: 0,
            _0_1_2: 0,
            _0_2: 0,
            _0_2_3: 0,
            _0_3: 0,
          },
          _00: {
            _00: 0,
            _0_1: 0,
            _0_1_2: 0,
            _0_2: 0,
            _0_00_2: 0,
            _00_2: 0,
            _00_2_3: 0,
            _00_3: 0,
          },
        };
  });

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
    }
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

  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isNotesContentOpen, setIsNotesContentOpen] = useState(true);

  const [notesData, setNotesData] = useState(() => {
    const storedNotes = localStorage.getItem("notes4");
    return storedNotes ? JSON.parse(storedNotes) : null;
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

  const setCoinData = (coin, coinData, selector, ops) => {
    console.log("insde the set coin : !!!", ops);

    if (selector === "2v") {
      setDivSelect2Data((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key === coinData) {
            ops === "add" ? (newData[key] += coin) : (newData[key] -= coin);
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
            ops === "add" ? (newData[key] += coin) : (newData[key] -= coin);
          }
        }

        localStorage.setItem("_singleDivCoin", JSON.stringify(newData));

        return newData;
      });

      setZeroData((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          for (const subKey in newData[key]) {
            if (subKey === coinData) {
              ops === "add"
                ? (newData[key][subKey] += coin)
                : (newData[key][subKey] -= coin);
            }
          }
        }

        localStorage.setItem("zeroData", JSON.stringify(newData));

        return newData;
      });
    } else if (selector === "2h") {
      setDivSelect2DataHorizontal((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          if (key === coinData) {
            ops === "add" ? (newData[key] += coin) : (newData[key] -= coin);
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
            ops === "add" ? (newData[key] += coin) : (newData[key] -= coin);
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
            ops === "add" ? (newData[key] += coin) : (newData[key] -= coin);
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
            ops === "add" ? (newData[key] += coin) : (newData[key] -= coin);
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
            ops === "add" ? (newData[key] += coin) : (newData[key] -= coin);
          }
        }

        localStorage.setItem("LowerDivs", JSON.stringify(newData));

        return newData;
      });
    } else if (selector === "zeroDivs") {
      setZeroData((prevData) => {
        const newData = { ...prevData };

        for (const key in newData) {
          for (const subKey in newData[key]) {
            if (subKey === coinData) {
              ops === "add"
                ? (newData[key][subKey] += coin)
                : (newData[key][subKey] -= coin);
            }
          }
        }

        localStorage.setItem("zeroData", JSON.stringify(newData));

        return newData;
      });
    }
  };

  const resetHandler = () => {
    setZeroDivs((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("zeroDivs", JSON.stringify(newData));
      return newData;
    });

    setData((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("Data", JSON.stringify(newData));
      return newData;
    });

    setEquityData((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("EquityData", JSON.stringify(newData));
      return newData;
    });

    setZeroEquityData((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("zeroEquityData", JSON.stringify(newData));
      return newData;
    });

    setZeroData((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        for (const subKey in newData[key]) {
          newData[key][subKey] = 0;
        }
      }

      localStorage.setItem("zeroData", JSON.stringify(newData));

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

    setTotalBetAmt((prevData) => {
      const newData = { ...prevData };

      for (const key in newData) {
        newData[key] = 0;
      }

      localStorage.setItem("totalBetAmount", JSON.stringify(newData));

      return newData;
    });
  };

  const undoHandler = () => {
    // numsArray, coin, length, coinData, selector
    // console.log("selected : ", coin, coinData, selector);
    // previousData.push({ value: coin, selector: coinData, type: selector });
    // localStorage.setItem("previousData2", JSON.stringify(previousData));
    //     {
    //     "value": 25,
    //     "selector": "_2_3_5_8",
    //     "type": 4
    // }

    if (previousData.length > 0) {
      const undoData = previousData.pop();
      localStorage.setItem("previousData2", JSON.stringify(previousData));
      const { value, selector, type } = undoData;
      console.log("undoData : ", undoData);

      setData((prevData) => {
        const newData = { ...prevData };

        if (type === 4) {
          newData[selector] -= value * 8;
        } else if (type === 6) {
          newData[selector] -= value * 5;
        } else if (type === 2) {
          newData[selector] -= value * 17;
        } else if (type === 12) {
          newData[selector] -= value * 2;
        } else if (type === "1:1") {
          newData[selector] -= value * 1;
        } else if (type === 3) {
          newData[selector] -= value * 11;
        }

        for (const key in newData) {
          newData[key] += value;
        }

        localStorage.setItem("Data", JSON.stringify(newData));
        return newData;
      });

      setZeroDivs((prevData) => {
        const newData = { ...prevData };

        if (newData.hasOwnProperty(value)) {
          if (type === 3) {
            newData[value] -= value * 11;
          } else if (type === 2) {
            newData[value] -= value * 17;
          }
        }

        for (const key in newData) {
          newData[key] += value;
        }

        localStorage.setItem("zeroDivs", JSON.stringify(newData));
        return newData;
      });

      // Equity per spot
      setEquityData((prevData) => {
        const newData = { ...prevData };

        if (newData.hasOwnProperty(selector)) {
          if (type === 4) {
            newData[selector] -= coin / 4;
          } else if (type === 6) {
            newData[selector] -= coin / 6;
          } else if (type === 2) {
            newData[selector] -= coin / 2;
          } else if (type === 12) {
            newData[selector] -= coin / 12;
          } else if (type === "1:1") {
            newData[selector] -= coin / 18;
          } else if (type === 3) {
            newData[selector] -= coin / 3;
          }
        }

        localStorage.setItem("EquityData", JSON.stringify(newData));
        return newData;
      });

      setZeroEquityData((prevData) => {
        const newData = { ...prevData };

        if (newData.hasOwnProperty(selector)) {
          if (type === 3) {
            newData[selector] -= coin / 3;
          } else if (type === 2) {
            newData[selector] -= coin / 2;
          } else if (type === 1) {
            newData[selector] -= coin + 1;
          }
        }

        localStorage.setItem("zeroEquityData", JSON.stringify(newData));
        return newData;
      });

      setTotalBetAmt((prevData) => {
        const newData = { ...prevData };

        newData.amt -= value;

        localStorage.setItem("totalBetAmount", JSON.stringify(newData));
        return newData;
      });
      setCoinData(value, selector, type, "undo");
    }
  };

  const showRatioPopup = (type, ratio, amount, listeners) => {
    console.log("inside the ratio popup : ", amount);

    if (listeners === "zeroListeners") {
      const amt = amount.find((item) => item > 0);

      setRatioPopupData(() => {
        const newData = { ...ratioPopupData };

        newData.head = type;
        newData.ratio = ratio;
        newData.betAnmount = typeof amt === "number" ? amt : 0;
        newData.payout = typeof amt === "number" ? amt * ratio : 0 * ratio;

        return newData;
      });
      setRatioPopup(true);
    } else {
      setRatioPopupData(() => {
        const newData = { ...ratioPopupData };

        newData.head = type;
        newData.ratio = ratio;
        newData.betAnmount = amount;
        newData.payout = amount * ratio;

        return newData;
      });
      setRatioPopup(true);
    }
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

  const setCoinValue = (amt, img) => {
    setCoin((prevData) => {
      const newData = { ...prevData };
      newData.amt = amt;
      newData.img = img;
      return newData;
    });

    setIsbtnClicked(false);
  };

  return (
    <div className="bg-purplegrad px-8 ">
      <div className="flex flex-col justify-center items-center bg-transparent relative">
        <div className="flex text-black justify-between items-center w-10/12 sm:w-7/12 md:w-6/12 lg:w-4/12 lg:gap-8 px-3 md:px-5 mt-6 md:mt-8 rounded-lg max-sm:mb-8">
          <div className="bg-Tie px-2.5 py-1 -skew-x-4 rounded-md cursor-pointer whitespace-nowrap">
            <span className="font-medium text-base md:text-lg skew-x-4 inline-block">
              Total Bet :
            </span>
            <span className="ml-2 text-base sm:text-lg md:text-xl font-semibold text-white skew-x-4 inline-block">
              {totalBetAmt.amt}
            </span>
          </div>
          {/* <div>EV/Spin 0</div>
          <div>Comp Val/Spin 0</div> */}

          <div className="flex gap-1 md:gap-3">
            <div className="-skew-x-12 bg-Banker rounded-md">
              <button
                className="px-3 md:px-6 py-1 md:py-1.5 text-sm md:text-base inline-block skew-x-12 text-white"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>

            <div className="-skew-x-12 bg-Player rounded-md">
              <button
                className="px-3 md:px-6 py-1 md:py-1.5 text-sm md:text-base skew-x-12 inline-block text-white"
                onClick={undoHandler}
              >
                Undo
              </button>
            </div>
          </div>
        </div>

        {/* Roulette Grid */}
        <div className="relative flex justify-center max-sm:mt-2 max-md:mt-9">
          <div className="flex justify-center">
            {showTable === "roulette" ? (
              <RouletteGrid
                data={data}
                setData={setData}
                equityData={equityData}
                setEquityData={setEquityData}
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
                zeroData={zeroData}
                setZeroData={setZeroData}
                zeroDivs={zeroDivs}
                setZeroDivs={setZeroDivs}
                setZeroEquityData={setZeroEquityData}
                zeroEquityData={zeroEquityData}
                totalBetAmt={totalBetAmt}
                setTotalBetAmt={setTotalBetAmt}
                previousData={previousData}
                setCoinData={setCoinData}
                captureScreenshot={captureScreenshot}
                theme={theme}
              />
            ) : (
              ""
            )}

            {/* Win/Loss per spot for mobile view */}
            {showTable === "winloss" ? (
              <div className=" main h-[60vh] flex max-sm:mb-8">
                <div className="w-[95%] flex justify-center items-center md:h-[64vh] max-[800px]:h-[64vh] max-[600px]:h-full max-sm:ml-14 max-sm:mr-5">
                  <div
                    className="relative max-sm:w-[13rem] w-[16rem] max-md:h-[62vh] md:h-[520px] xl:h-[40rem] md:-rotate-90"
                    style={{
                      display: show === "winloss" ? "block" : "none",
                    }}
                  >
                    <div className="bg-green-700 w-full h-[9%] flex">
                      <div
                        className="w-[50%] h-full border flex justify-center items-center"
                        style={{
                          width: zero === "doubleZero" ? "50%" : "100%",
                        }}
                      >
                        <p className="-rotate-270 md:rotate-90 text-white">
                          {zeroDivs._0 === 0 ? "0" : zeroDivs._0}
                        </p>
                      </div>

                      {zero === "doubleZero" ? (
                        <div className="w-[50%] h-full border flex justify-center items-center">
                          <p className="-rotate-270 md:rotate-90 text-white">
                            {zeroDivs._00 === 0 ? "00" : zeroDivs._00}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex flex-wrap h-full">
                      {Data.map((item, index) => {
                        return (
                          <div
                            className="w-[33.33%] flex justify-center items-center text-white border"
                            style={{ backgroundColor: item.bg }}
                            key={index}
                          >
                            <p className="-rotate-270 md:rotate-90">
                              {win_lossObject[index] === 0
                                ? "0"
                                : win_lossObject[index]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* side boxes for small screen */}
          <div className="h-full flex flex-col justify-center gap-6 p-2 ml-3 mr-3 items-center md:hidden mt-5">
            <button
              onClick={() =>
                setShowPopup({
                  show: (showPopup.show = true),
                  showWhat: "equity",
                })
              }
              className="relative z-40"
              style={{
                color: theme === "dark" ? "gray" : "black",
              }}
            >
              <MdDataSaverOff className="size-6 text-white" />
            </button>
            <button
              className="relative z-40"
              onClick={() =>
                setShowTable(showTable === "roulette" ? "winloss" : "roulette")
              }
            >
              <IoIosSwap className="size-6 text-white cursor-pointer" />
            </button>
            <button className="relative z-40" onClick={captureScreenshot}>
              <MdOutlineCameraAlt className="size-6 text-white" />
            </button>
            <button
              className="relative z-40"
              onClick={() =>
                setShowPopup({
                  show: (showPopup.show = true),
                  showWhat: "wheelCoverage",
                })
              }
            >
              <GrAnalytics className="size-6 text-white" />
            </button>

            {/* chips small screen */}

            <button
              onClick={() => setIsChipsExpanded(!isChipsExpanded)}
              className="relative flex items-center justify-center"
            >
              <FaCoins className="size-6 text-white" />
              {isChipsExpanded && (
                <div className="w-full h-full absolute">
                  {coinInfo.map((item, index) => {
                    const spacing = 30;
                    const x = -52;
                    const y = (index - (coinInfo.length - 1) / 2) * spacing;

                    return (
                      <div
                        key={item.coin}
                        className="w-[56px] h-[32px] rounded-full flex items-center justify-center cursor-pointer absolute transition-transform hover:scale-110"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                        onClick={() => {
                          setCoin((prevState) => ({
                            ...prevState,
                            amt: item.amount,
                            img: item.img,
                          }));
                          setIsChipsExpanded(false);
                        }}
                      >
                        <img
                          src={item.img}
                          alt=""
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </button>
          </div>

          {/* info ratio box - table hover */}
          <div
            className="w-40 bg-customPurple absolute top-17 right-2 z-20"
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

          {/* swap btn  && Chips flower container*/}
          <div className="flex justify-center items-center absolute top-[185px] -right-[320px] lg:-right-[400px] gap-2 max-md:hidden">
            {/* chips flower view  */}

            <div className="border-4 border-white hover:border-cyan-500 rounded-full h-14 w-14 flex justify-center items-center">
              <div className="relative w-[65px] h-[40px] flex items-center justify-center">
                <div
                  className="w-[70px] h-[45px] rounded-full flex items-center justify-center cursor-pointer z-10"
                  onClick={() => setIsChipsExpanded(!isChipsExpanded)}
                >
                  <img
                    src={coin.img}
                    alt=""
                    className="w-[85%] h-[85%] rounded-full"
                  />
                </div>

                {isChipsExpanded && (
                  <div className="w-full h-full absolute">
                    {coinInfo.map((item, index) => {
                      const angle = (index / (coinInfo.length - 1)) * 180;
                      const x =
                        moonDesktopRadius * Math.sin((angle * Math.PI) / 180);
                      const y =
                        moonDesktopRadius * Math.cos((angle * Math.PI) / 180);
                      return (
                        <div
                          key={item.coin}
                          className="w-[70px] h-[45px] rounded-full flex items-center justify-center cursor-pointer absolute transition-transform hover:scale-110"
                          style={{ transform: `translate(${x}px, ${y}px)` }}
                          onClick={() => {
                            setCoin((prevState) => ({
                              ...prevState,
                              amt: item.amount,
                              img: item.img,
                            }));
                            setIsChipsExpanded(false);
                          }}
                        >
                          <img
                            src={item.img}
                            alt=""
                            className="w-full h-full rounded-full"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            {/* swap btn */}
            <div
              id="swap-btn"
              className=" max-md:hidden h-14 w-14 flex justify-center items-center rounded-full cursor-pointer border-4 border-white p-1 hover:border-cyan-500"
              onClick={() =>
                setShowTable(showTable === "roulette" ? "winloss" : "roulette")
              }
            >
              <IoIosSwap className="size-8 text-off_white hover:scale-110 hover:text-cyan-500" />
            </div>
          </div>
        </div>
      </div>
      {/* Roulette Grid Ends Here */}

      {/* win/Loss per spot */}
      <div className="border-t-2 border-white pt-10 max-md:mt-24 mt-5 max-sm:hidden">
        <div className="flex justify-center ">
          <p className="bg-purple-300 text-base md:text-lg text-black font-medium md:font-semibold w-8/12 sm:6/12 md:w-4/12 py-2.5 rounded-3xl text-center">
            win / Loss per spot
          </p>
        </div>
        <div className="max-sm:hidden w-full h-[20rem] max-sm:h-[80vh] flex justify-between  pt-12 relative">
          <div className="w-[30%] max-[600px]:w-[50%] bg-red-500 bg-transparent flex flex-col justify-evenly items-center">
            {/*
               // Add Custom Coin
            <div className="bg-teal-600 py-2 w-[9rem] h-20 max-sm:w-full flex flex-wrap items-center justify-evenly gap-3 overflow-y-scroll overflow-x-hidden">
              {coinInfo.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.img}
                    alt=""
                    className={
                      item.amount === coin.amt
                        ? ""
                        : "rounded-full cursor-pointer w-[80px]"
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
                        className="bg-blue-500 w-[5rem]"
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

           // Coin Add popup

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
               */}

            {/* WheelCoverage */}
            <div className="w-[14rem] lg:h-[65%] md:h-[50%] -mt-10 max-sm:rotate-90 wheel--coverage">
              <WheelCoverage data={data} type={zero} />
            </div>
          </div>

          {/* Win/Loss per spot */}
          <div className="max-sm:w-[50%] w-[80%]  rounded-xl flex justify-center md:items-center max-[600px]:h-[100%] relative">
            <div
              className="w-[20%] max-xl:w-[25%] bg-red-500 md:-rotate-90 md:h-[55vw] mt-5 max-sm:w-[90%] h-[85%] md:-mt-10 max-md:text-[.7rem] max-lg:text-[.8rem]"
              style={{
                maxHeight: "40rem",
                display: show === "winloss" ? "block" : "none",
              }}
            >
              <div className="bg-customGreen w-full h-[9%] flex">
                <div
                  className="w-[50%] h-full border flex justify-center items-center"
                  style={{ width: zero === "doubleZero" ? "50%" : "100%" }}
                >
                  <p className="rotate-90">
                    {zeroDivs._0 === 0 ? "" : zeroDivs._0}
                  </p>
                </div>

                {zero === "doubleZero" ? (
                  <div className="w-[50%] h-full border flex justify-center items-center">
                    <p className="rotate-90">
                      {zeroDivs._00 === 0 ? "" : zeroDivs._00}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-wrap h-full">
                {Data.map((item, index) => {
                  return (
                    <div
                      className="w-[33.33%] flex justify-center items-center text-white font-semibold border"
                      style={{ backgroundColor: item.bg }}
                      key={index}
                    >
                      <p className="rotate-90">
                        {win_lossObject[index] === 0
                          ? ""
                          : win_lossObject[index]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* equity per spot */}

      <div className="border-t-2 border-white pt-10 mt-10 max-sm:hidden">
        <div className="flex justify-center ">
          <p className="bg-purple-300 text-base md:text-lg text-black font-medium md:font-semibold w-8/12 sm:6/12 md:w-4/12 py-2.5 rounded-3xl text-center">
            Equity per spot
          </p>
        </div>
        <div className="max-sm:hidden w-full flex justify-center items-center gap-10 h-[18rem] max-sm:h-[90vh] relative mt-10">
          <div className="w-[15%] bg-red-500 flex flex-wrap md:-rotate-90 md:h-[55vw] mt-5 max-sm:w-[50%] h-[80%] md:-mt-10 max-md:text-[.7rem] max-lg:text-[.8rem]">
            <div className="bg-customGreen w-full h-[8%] flex">
              <div
                className="w-[50%] h-full border flex justify-center items-center"
                style={{ width: zero === "doubleZero" ? "50%" : "100%" }}
              >
                <p className="rotate-90">
                  {zeroEquityData._0 > 0 ? zeroEquityData._0.toFixed(2) : ""}
                </p>
              </div>

              {zero === "doubleZero" ? (
                <div className="w-[50%] h-full border flex justify-center items-center">
                  <p className="rotate-90">
                    {zeroEquityData._00 > 0
                      ? zeroEquityData._00.toFixed(2)
                      : ""}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="flex flex-wrap h-full w-full">
              {Data.map((item, index) => {
                return (
                  <div
                    className="w-[33.33%] h-[8.4%] flex justify-center items-center text-white font-semibold border"
                    style={{ backgroundColor: item.bg }}
                    key={index}
                  >
                    <p className="rotate-90">
                      {equityPerSpot[index] <= 0
                        ? ""
                        : equityPerSpot[index].toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-40 bg-black"></div>
      
      */}

      <div
        className="w-full h-screen bg-black absolute top-0 left-0 z-20 flex justify-center items-center"
        style={{
          display: showPopup.show ? "flex" : "none",
          background: `linear-gradient(rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.9))`,
        }}
        onClick={() =>
          setShowPopup({
            show: (showPopup.show = false),
            showWhat: "",
          })
        }
      >
        <div
          className="w-[17rem] lg:h-[65%] md:h-[50%] wheel--coverage"
          style={{
            display: showPopup.showWhat === "wheelCoverage" ? "block" : "none",
          }}
        >
          {/*  */}
          <WheelCoverage data={data} type={zero} />
        </div>

        {/* equity per spot */}
        <div
          className="w-[15%] bg-red-500 flex flex-wrap md:-rotate-90 md:h-[55vw] mt-10 max-sm:w-[50%] h-[75%] md:-mt-10 max-md:text-[.7rem] max-lg:text-[.8rem]"
          style={{ display: showPopup.showWhat === "equity" ? "flex" : "none" }}
        >
          <div className="bg-customGreen w-full h-[8%] flex">
            <div
              className="w-[50%] h-full border flex justify-center items-center"
              style={{ width: zero === "doubleZero" ? "50%" : "100%" }}
            >
              <p className="rotate-90">
                {zeroEquityData._0 > 0 ? zeroEquityData._0.toFixed(2) : ""}
              </p>
            </div>

            {zero === "doubleZero" ? (
              <div className="w-[50%] h-full border flex justify-center items-center">
                <p className="rotate-90">
                  {zeroEquityData._00 > 0 ? zeroEquityData._00.toFixed(2) : ""}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-wrap h-full w-full">
            {Data.map((item, index) => {
              return (
                <div
                  className="w-[33.33%] h-[8.4%] flex justify-center items-center text-white font-semibold border"
                  style={{ backgroundColor: item.bg }}
                  key={index}
                >
                  <p className="rotate-90">
                    {equityPerSpot[index] <= 0
                      ? ""
                      : equityPerSpot[index].toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Notes section  && Footer*/}
      <div>
        {isNotesOpen && (
          <Notes
            isNotesOpen={isNotesOpen}
            setIsNotesOpen={setIsNotesOpen}
            setNotesData={setNotesData}
          />
        )}

        {/* <div>
          {notesData !== null && isNotesContentOpen === true ? (
            <div className="flex flex-wrap">
              <div className=" w-[100vw] flex flex-wrap justify-between items-center">
                <div className="w-[30%]">
                  <p className="text-sm">Strategy Name</p>
                  <p className="bg-slate-800 px-3 py-2 rounded-lg my-2 text-sm">
                    {notesData.strategy_name}
                  </p>
                </div>
                <div className="w-[30%]">
                  <p className="text-sm">Strategy Type</p>
                  <p className="bg-slate-800 px-3 py-2 rounded-lg my-2 text-sm">
                    {notesData.strategy_type}
                  </p>
                </div>
                <div className="w-[30%]">
                  <p className="text-sm">Buy In</p>
                  <p className="bg-slate-800 px-3 py-2 rounded-lg my-2 text-sm">
                    {notesData.Buy_in}
                  </p>
                </div>
              </div>
              <div className="w-[100vw] flex flex-wrap justify-between items-center">
                <div className="w-[30%]">
                  <p className="text-sm">Average Bet</p>
                  <p className="bg-slate-800 px-3 py-2 rounded-lg my-2 text-sm">
                    {notesData.Average_bet}
                  </p>
                </div>
                <div className="w-[30%]">
                  <p className="text-sm">No of Bullets</p>
                  <p className="bg-slate-800 px-3 py-2 rounded-lg my-2 text-sm">
                    {notesData.no_bullets}
                  </p>
                </div>
                <div className="w-[30%]">
                  <p className="text-sm">Walk Away</p>
                  <p className="bg-slate-800 px-3 py-2 rounded-lg my-2 text-sm">
                    {notesData.walkaway}
                  </p>
                </div>
              </div>
              <div className="w-[100vw] flex flex-wrap justify-between items-center">
                <div className="w-[30%]">
                  <p className="text-sm">Betting Tries</p>
                  <p className="bg-slate-800 px-3 py-2 rounded-lg my-2 text-sm">
                    {notesData.betting_tries}
                  </p>
                </div>
              </div>
              <div className="w-[100vw]">
                <p className="text-sm">Bet Settup</p>
                <p className="bg-slate-800 px-3 py-1 rounded-lg my-2 w-[full] h-36 text-sm">
                  {notesData.bet_settup}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div> */}

        {/* open close and Notes Buttons */}

        <div className="w-[100%] flex justify-between my-8 max-sm:mt-14">
          <div className="pl-4">
            <button
              className="px-4 py-2 bg-slate-700 rounded-lg cursor-pointer text-sm"
              onClick={() => setIsNotesContentOpen(!isNotesContentOpen)}
            >
              {isNotesContentOpen === true ? "Close" : "Open"}
            </button>
          </div>
          <div className="pr-4">
            <button
              className="px-4 py-2 bg-slate-700 rounded-lg cursor-pointer text-sm"
              onClick={() => setIsNotesOpen(true)}
            >
              Notes
            </button>
          </div>
        </div>
        <footer className="w-full mb-3">
          <ul className="flex my-1">
            <li className="border-r-2 px-1 text-xs font-semibold h-3">
              <a href="#">Legcy RSA</a>
            </li>
            <li className="border-r-2 px-1 text-xs font-semibold h-3">
              <a href="#">Roulette Strategy</a>
            </li>

            <li className="px-1 text-xs font-semibold h-3">
              <a href="#">How do I use this tool?</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Project2;
