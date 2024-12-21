import React, { useEffect, useState } from "react";
import { data } from "../reuse/project1/logic/Project1ComponetRenderData.js";
import "../../Style/Main.css";
import { GrPowerReset } from "react-icons/gr";
import { useToast } from "../resources/Toast.jsx";
import Analyze from "../reuse/project4/Analyze.jsx";

import GaugeChart from "react-gauge-chart";
import { CgInsights } from "react-icons/cg";
import background from "../../assets/imgs/2002.i029.002_realistic-poker-club-illustration.jpg";
import MoneyManagementTable from "../reuse/project4/MoneyManagementTable.jsx";
import Lock from "../resources/Lock.jsx";
import axios from "axios";
import { USER_DETAILS } from "../api/ApiDetails.js";

import SpinCycleMoney from "../reuse/project4/TempMoneyManagement.jsx";
import History from "../reuse/project1/history/History.jsx";
import { max } from "moment/moment.js";

const Project4 = ({ theme }) => {
  const [isAlertAllowed, setIsAlertAllowed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const showToast = useToast();
  const [rowHoverEffect, setRowHoverEffect] = useState(false);
  const [dozenHoverEffect, setDozenHoverEffect] = useState(false);
  const [colHoverEffect, setColHoverEffect] = useState(false);
  const [i_btn, setI_btn] = useState(false);
  const [i1_btn, setI1_btn] = useState(false);
  const [i2_btn, setI2_btn] = useState(false);
  const [i3_btn, setI3_btn] = useState(false);
  const [i6_btn, setI6_btn] = useState(false);
  const [isLockFreeze, setIsLockFreeze] = useState(false);

  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  const initialScores = Array.from({ length: 36 }, (_, i) => 36 - i); // Initial score array from 30 to 1
  const [landedNumbers, setLandedNumbers] = useState(() => {
    const savedLandedNumbers = localStorage.getItem("landedNumbersDD");
    return savedLandedNumbers ? JSON.parse(savedLandedNumbers) : [];
  });

  const [dozenScores, setDozenScores] = useState(() => {
    const savedDozenScores = localStorage.getItem("dozenScores");
    return savedDozenScores
      ? JSON.parse(savedDozenScores)
      : { 1: 0, 2: 0, 3: 0 };
  });

  const [columnScores, setColumnScores] = useState(() => {
    const savedColumnScores = localStorage.getItem("columnScores");
    return savedColumnScores
      ? JSON.parse(savedColumnScores)
      : { 1: 0, 2: 0, 3: 0 };
  });

  const [rowDataScores, setRowDataScores] = useState(() => {
    const savedRowDataScores = localStorage.getItem("rowDataScores");
    return savedRowDataScores
      ? JSON.parse(savedRowDataScores)
      : { A: 0, B: 0, C: 0 };
  });

  // const [historyData, setHistoryData] = useState(() => {
  //   const savedHistoryData = localStorage.getItem("historyData");
  //   return savedHistoryData ? JSON.parse(savedHistoryData) : [];
  // });

  const [countData, setCountData] = useState(() => {
    const savedCountData = localStorage.getItem("countData");
    return savedCountData
      ? JSON.parse(savedCountData)
      : {
          red: 0,
          black: 0,
          even: 0,
          odd: 0,
          one_eighteen: 0,
          nineteen_thirtySix: 0,
          dozen_one: 0,
          dozen_two: 0,
          dozen_three: 0,
          col_one: 0,
          col_two: 0,
          col_three: 0,
        };
  });

  const [summaryData, setSummaryData] = useState(() => {
    const savedSummaryData = localStorage.getItem("summaryData");
    return savedSummaryData
      ? JSON.parse(savedSummaryData)
      : {
        lowEvenRed: 0,
        lowOddRed: 0,
        highEvenRed: 0,
        highOddRed: 0,
        lowEvenBlack: 0,
        lowOddBlack: 0,
        highEvenBlack: 0,
        highOddBlack: 0,
      };
  });

  const [nonSummaryData, setNonSummaryData] = useState(() => {
    const savedSummaryData = localStorage.getItem("nonSummaryData");
    return savedSummaryData
      ? JSON.parse(savedSummaryData)
      : {
        lowEvenRed: 0,
        lowOddRed: 0,
        highEvenRed: 0,
        highOddRed: 0,
        lowEvenBlack: 0,
        lowOddBlack: 0,
        highEvenBlack: 0,
        highOddBlack: 0,
      };
  });  

  const [circleData, setCircleData] = useState(() => {
    const isSaved = localStorage.getItem("circleData");
    return isSaved
      ? JSON.parse(isSaved)
      : {
        zero: 0,
        orphe: 0,
        tires: 0,
      };
  });

  const [nonCircleData, setNonCircleData] = useState(() => {
    const isSaved = localStorage.getItem("nonCircleData");
    return isSaved
      ? JSON.parse(isSaved)
      : {
        zero: 0,
        duZero: 0,
        orphe: 0,
        tires: 0,
      };
  });


  const [lastHitData, setLastHitData] = useState(() => {
    const savedLastHitData = localStorage.getItem("lastHitData");
    return savedLastHitData
      ? JSON.parse(savedLastHitData)
      : {
        red: 0,
        black: 0,
        even: 0,
        odd: 0,
        one_eighteen: 0,
        nineteen_thirtySix: 0,
        dozen_one: 0,
        dozen_two: 0,
        dozen_three: 0,
        col_one: 0,
        col_two: 0,
        col_three: 0,
      };
  });


  const [doubleStreetData, setDoubleStreetData] = useState(() => {
    const savedData = localStorage.getItem("doubleStreetData");
    return savedData
      ? JSON.parse(savedData)
      : {
        one_six: 0,
        seven_twelve: 0,
        thirteen_eighteen: 0,
        nineteen_twentyFour: 0,
        twentyFive_thirty: 0,
        thirtyOne_thirtySix: 0,
      };
  });

  const [nonDoubleStreetData, setNonDoubleStreetData] = useState(() => {
    const savedData = localStorage.getItem("nonDoubleStreetData");
    return savedData
      ? JSON.parse(savedData)
      : {
        one_six: 0,
        seven_twelve: 0,
        thirteen_eighteen: 0,
        nineteen_twentyFour: 0,
        twentyFive_thirty: 0,
        thirtyOne_thirtySix: 0,
      };
  });


  const [singleStreetData, setSingleStreetData] = useState(() => {
    const savedData = localStorage.getItem("singleStreetData");
    return savedData
      ? JSON.parse(savedData)
      : {
        one_three: 0,
        four_six: 0,
        seven_nine: 0,
        ten_twelve: 0,
        thirteen_fifteen: 0,
        sixteen_eighteen: 0,
        nineteen_twentyOne: 0,
        twentyTwo_twentyFour: 0,
        twentyFive_twentySeven: 0,
        twentyEight_thirty: 0,
        thirtyOne_thirtyThree: 0,
        thirtyFour_thirtySix: 0,
      };
  });

  const [nonSingleStreetData, setNonSingleStreetData] = useState(() => {
    const savedData = localStorage.getItem("nonSingleStreetData");
    return savedData
      ? JSON.parse(savedData)
      : {
        one_three: 0,
        four_six: 0,
        seven_nine: 0,
        ten_twelve: 0,
        thirteen_fifteen: 0,
        sixteen_eighteen: 0,
        nineteen_twentyOne: 0,
        twentyTwo_twentyFour: 0,
        twentyFive_twentySeven: 0,
        twentyEight_thirty: 0,
        thirtyOne_thirtyThree: 0,
        thirtyFour_thirtySix: 0,
      };
  });



   const [dozenScoresDD, setDozenScoresDD] = useState(() => {
      const savedDozenScores = localStorage.getItem("dozenScoresDD");
      return savedDozenScores
        ? JSON.parse(savedDozenScores)
        : { 1: 0, 2: 0, 3: 0 };
    });
  
    const [columnScoresDD, setColumnScoresDD] = useState(() => {
      const savedColumnScores = localStorage.getItem("columnScoresDD");
      return savedColumnScores
        ? JSON.parse(savedColumnScores)
        : { 1: 0, 2: 0, 3: 0 };
    });
 

  // const [previousState, setPreviousState] = useState(() => {
  //   const savedData = localStorage.getItem("previousData");
  //   return savedData
  //     ? JSON.parse(savedData)
  //     : {
  //       countData: {},
  //       doubleStreetData: {},
  //       singleStreetData: {},
  //       summaryData: {},
  //       nonSummaryData: {},
  //       circleData: {},
  //       lastHitNumber: {},
  //       lastHitData: {},
  //       nonCircleData: {},
  //       historyData: [],
  //       nonDoubleStreetData: {},
  //       nonSingleStreetData: {},
  //     };
  // });



  const updateMapping = {
    zero: {
      countUpdates: {},
      summaryUpdates: {},
      doubleStreetDataUpdates: {},
      singleStreetDataUpdates: {},
      circleDataUpdates: { zero: 1 },
    },
    doubleZero: {
      countUpdates: {},
      summaryUpdates: {},
      doubleStreetDataUpdates: {},
      singleStreetDataUpdates: {},
      circleDataUpdates: { zero: 1 },
    },
    one: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_one: 1,
      },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetDataUpdates: { one_six: 1 },
      singleStreetDataUpdates: { one_three: 1 },
      circleDataUpdates: { orphe: 1 },
    },
    two: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_two: 1,
      },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetDataUpdates: { one_six: 1 },
      singleStreetDataUpdates: { one_three: 1 },
      circleDataUpdates: { zero: 1 },
    },
    three: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_three: 1,
      },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetDataUpdates: { one_six: 1 },
      singleStreetDataUpdates: { one_three: 1 },
      circleDataUpdates: { zero: 1 },
    },
    four: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_one: 1,
      },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetDataUpdates: { one_six: 1 },
      singleStreetDataUpdates: { four_six: 1 },
      circleDataUpdates: { zero: 1 },
    },
    five: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_two: 1,
      },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetDataUpdates: { one_six: 1 },
      singleStreetDataUpdates: { four_six: 1 },
      circleDataUpdates: { tires: 1 },
    },
    six: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_three: 1,
      },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetDataUpdates: { one_six: 1 },
      singleStreetDataUpdates: { four_six: 1 },
      circleDataUpdates: { orphe: 1 },
    },
    seven: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_one: 1,
      },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetDataUpdates: { seven_twelve: 1 },
      singleStreetDataUpdates: { seven_nine: 1 },
      circleDataUpdates: { zero: 1 },
    },
    eight: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_two: 1,
      },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetDataUpdates: { seven_twelve: 1 },
      singleStreetDataUpdates: { seven_nine: 1 },
      circleDataUpdates: { tires: 1 },
    },
    nine: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_three: 1,
      },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetDataUpdates: { seven_twelve: 1 },
      singleStreetDataUpdates: { seven_nine: 1 },
      circleDataUpdates: { orphe: 1 },
    },
    ten: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_one: 1,
      },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetDataUpdates: { seven_twelve: 1 },
      singleStreetDataUpdates: { ten_twelve: 1 },
      circleDataUpdates: { tires: 1 },
    },
    eleven: {
      countUpdates: {
        black: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_two: 1,
      },
      summaryUpdates: { lowOddBlack: 1 },
      doubleStreetDataUpdates: { seven_twelve: 1 },
      singleStreetDataUpdates: { ten_twelve: 1 },
      circleDataUpdates: { tires: 1 },
    },
    twelve: {
      countUpdates: {
        red: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_three: 1,
      },
      summaryUpdates: { lowEvenRed: 1 },
      doubleStreetDataUpdates: { seven_twelve: 1 },
      singleStreetDataUpdates: { ten_twelve: 1 },
      circleDataUpdates: { zero: 1 },
    },
    thirteen: {
      countUpdates: {
        black: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_one: 1,
      },
      summaryUpdates: { lowOddBlack: 1 },
      doubleStreetDataUpdates: { thirteen_eighteen: 1 },
      singleStreetDataUpdates: { thirteen_fifteen: 1 },
      circleDataUpdates: { tires: 1 },
    },
    fourteen: {
      countUpdates: {
        red: 1,
        even: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_two: 1,
      },
      summaryUpdates: { lowEvenRed: 1 },
      doubleStreetDataUpdates: { thirteen_eighteen: 1 },
      singleStreetDataUpdates: { thirteen_fifteen: 1 },
      circleDataUpdates: { orphe: 1 },
    },
    fifteen: {
      countUpdates: {
        black: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_three: 1,
      },
      summaryUpdates: { lowOddBlack: 1 },
      doubleStreetDataUpdates: { thirteen_eighteen: 1 },
      singleStreetDataUpdates: { thirteen_fifteen: 1 },
      circleDataUpdates: { zero: 1 },
    },
    sixteen: {
      countUpdates: {
        red: 1,
        even: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_one: 1,
      },
      summaryUpdates: { lowEvenRed: 1 },
      doubleStreetDataUpdates: { thirteen_eighteen: 1 },
      singleStreetDataUpdates: { sixteen_eighteen: 1 },
      circleDataUpdates: { tires: 1 },
    },
    seventeen: {
      countUpdates: {
        black: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_two: 1,
      },
      summaryUpdates: { lowOddBlack: 1 },
      doubleStreetDataUpdates: { thirteen_eighteen: 1 },
      singleStreetDataUpdates: { sixteen_eighteen: 1 },
      circleDataUpdates: { orphe: 1 },
    },
    eighteen: {
      countUpdates: {
        red: 1,
        even: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_three: 1,
      },
      summaryUpdates: { lowEvenRed: 1 },
      doubleStreetDataUpdates: { thirteen_eighteen: 1 },
      singleStreetDataUpdates: { sixteen_eighteen: 1 },
      circleDataUpdates: { zero: 1 },
    },
    nineteen: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_one: 1,
      },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetDataUpdates: { nineteen_twentyFour: 1 },
      singleStreetDataUpdates: { nineteen_twentyOne: 1 },
      circleDataUpdates: { zero: 1 },
    },
    twenty: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_two: 1,
      },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetDataUpdates: { nineteen_twentyFour: 1 },
      singleStreetDataUpdates: { nineteen_twentyOne: 1 },
      circleDataUpdates: { orphe: 1 },
    },
    twentyOne: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_three: 1,
      },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetDataUpdates: { nineteen_twentyFour: 1 },
      singleStreetDataUpdates: { nineteen_twentyOne: 1 },
      circleDataUpdates: { zero: 1 },
    },
    twentyTwo: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_one: 1,
      },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetDataUpdates: { nineteen_twentyFour: 1 },
      singleStreetDataUpdates: { twentyTwo_twentyFour: 1 },
      circleDataUpdates: { zero: 1 },
    },
    twentyThree: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_two: 1,
      },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetDataUpdates: { nineteen_twentyFour: 1 },
      singleStreetDataUpdates: { twentyTwo_twentyFour: 1 },
      circleDataUpdates: { tires: 1 },
    },
    twentyFour: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_three: 1,
      },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetDataUpdates: { nineteen_twentyFour: 1 },
      singleStreetDataUpdates: { twentyTwo_twentyFour: 1 },
      circleDataUpdates: { tires: 1 },
    },
    twentyFive: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_one: 1,
      },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetDataUpdates: { twentyFive_thirty: 1 },
      singleStreetDataUpdates: { twentyFive_twentySeven: 1 },
      circleDataUpdates: { zero: 1 },
    },
    twentySix: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_two: 1,
      },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetDataUpdates: { twentyFive_thirty: 1 },
      singleStreetDataUpdates: { twentyFive_twentySeven: 1 },
      circleDataUpdates: { zero: 1 },
    },
    twentySeven: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_three: 1,
      },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetDataUpdates: { twentyFive_thirty: 1 },
      singleStreetDataUpdates: { twentyFive_twentySeven: 1 },
      circleDataUpdates: { tires: 1 },
    },
    twentyEight: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_one: 1,
      },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetDataUpdates: { twentyFive_thirty: 1 },
      singleStreetDataUpdates: { twentyEight_thirty: 1 },
      circleDataUpdates: { zero: 1 },
    },
    twentyNine: {
      countUpdates: {
        black: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_two: 1,
      },
      summaryUpdates: { highOddBlack: 1 },
      doubleStreetDataUpdates: { twentyFive_thirty: 1 },
      singleStreetDataUpdates: { twentyEight_thirty: 1 },
      circleDataUpdates: { zero: 1 },
    },
    thirty: {
      countUpdates: {
        red: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_three: 1,
      },
      summaryUpdates: { highEvenRed: 1 },
      doubleStreetDataUpdates: { twentyFive_thirty: 1 },
      singleStreetDataUpdates: { twentyEight_thirty: 1 },
      circleDataUpdates: { tires: 1 },
    },
    thirtyOne: {
      countUpdates: {
        black: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_one: 1,
      },
      summaryUpdates: { highOddBlack: 1 },
      doubleStreetDataUpdates: { thirtyOne_thirtySix: 1 },
      singleStreetDataUpdates: { thirtyOne_thirtyThree: 1 },
      circleDataUpdates: { orphe: 1 },
    },
    thirtyTwo: {
      countUpdates: {
        red: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_two: 1,
      },
      summaryUpdates: { highEvenRed: 1 },
      doubleStreetDataUpdates: { thirtyOne_thirtySix: 1 },
      singleStreetDataUpdates: { thirtyOne_thirtyThree: 1 },
      circleDataUpdates: { zero: 1 },
    },
    thirtyThree: {
      countUpdates: {
        black: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_three: 1,
      },
      summaryUpdates: { highOddBlack: 1 },
      doubleStreetDataUpdates: { thirtyOne_thirtySix: 1 },
      singleStreetDataUpdates: { thirtyOne_thirtyThree: 1 },
      circleDataUpdates: { tires: 1 },
    },
    thirtyFour: {
      countUpdates: {
        red: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_one: 1,
      },
      summaryUpdates: { highEvenRed: 1 },
      doubleStreetDataUpdates: { thirtyOne_thirtySix: 1 },
      singleStreetDataUpdates: { thirtyFour_thirtySix: 1 },
      circleDataUpdates: { orphe: 1 },
    },
    thirtyFive: {
      countUpdates: {
        black: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_two: 1,
      },
      summaryUpdates: { highOddBlack: 1 },
      doubleStreetDataUpdates: { thirtyOne_thirtySix: 1 },
      singleStreetDataUpdates: { thirtyFour_thirtySix: 1 },
      circleDataUpdates: { zero: 1 },
    },
    thirtySix: {
      countUpdates: {
        red: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_three: 1,
      },
      summaryUpdates: { highEvenRed: 1 },
      doubleStreetDataUpdates: { thirtyOne_thirtySix: 1 },
      singleStreetDataUpdates: { thirtyFour_thirtySix: 1 },
      circleDataUpdates: { tires: 1 },
    },
  };




  const handleClickRowHoverData = () => {
    if (landedNumbers.length > 36) {
      setRowHoverEffect(!rowHoverEffect);
    } else {
      showToast("Need 36 digits to switch on", "error");
    }
  };
  const handleClickDozenHoverData = () => {
    if (landedNumbers.length > 36) {
      setDozenHoverEffect(!dozenHoverEffect);
    } else {
      showToast("Need 36 digits to switch on", "error");
    }
  };
  const handleClickColHoverData = () => {
    if (landedNumbers.length > 36) {
      setColHoverEffect(!colHoverEffect);
    } else {
      showToast("Need 36 digits to switch on", "error");
    }
  };

  const [analyzeData, setAnalyzeData] = useState(() => {
    const savedCountData = localStorage.getItem("analyzeData4");
    return savedCountData
      ? JSON.parse(savedCountData)
      : {
          winPerData: 0,
          lossPerData: 0,
          dozenWinPer: 0,
          dozenLossPer: 0,
          colWinPer: 0,
          colLossPer: 0,
        };
  });

  const [statsData, setStatsData] = useState(() => {
    const savedCountData = localStorage.getItem("StatisticsData");
    return savedCountData
      ? JSON.parse(savedCountData)
      : {
          Agroup: 0,
          Agroup_loss: 0,
          Bgroup: 0,
          Bgroup_loss: 0,
          Cgroup: 0,
          Cgroup_loss: 0,
          dozen1: 0,
          dozen1_loss: 0,
          dozen2: 0,
          dozen2_loss: 0,
          dozen3: 0,
          dozen3_loss: 0,
          col1: 0,
          col1_loss: 0,
          col2: 0,
          col2_loss: 0,
          col3: 0,
          col3_loss: 0,
          odd: 0,
          odd_loss: 0,
          even: 0,
          even_loss: 0,
        };
  });



//-----------1st project start--------------------

 // Save `summaryData` to local storage whenever it changes
 useEffect(() => {
  localStorage.setItem("summaryData", JSON.stringify(summaryData));
}, [summaryData]);

useEffect(() => {
  localStorage.setItem("nonSummaryData", JSON.stringify(nonSummaryData));
}, [nonSummaryData]);

// Save `lastHitData` to local storage whenever it changes


useEffect(() => {
  localStorage.setItem("doubleStreetData", JSON.stringify(doubleStreetData));
}, [doubleStreetData]);

useEffect(() => {
  localStorage.setItem(
    "nonDoubleStreetData",
    JSON.stringify(nonDoubleStreetData),
  );
}, [nonDoubleStreetData]);


useEffect(() => {
  localStorage.setItem("singleStreetData", JSON.stringify(singleStreetData));
}, [singleStreetData]);


useEffect(() => {
  localStorage.setItem(
    "nonSingleStreetData",
    JSON.stringify(nonSingleStreetData),
  );
}, [nonSingleStreetData]);

useEffect(() => {
  localStorage.setItem("circleData", JSON.stringify(circleData));
}, [circleData]);

useEffect(() => {
  localStorage.setItem("nonCircleData", JSON.stringify(nonCircleData));
}, [nonCircleData]);


 // Save `lastHitData` to local storage whenever it changes
 useEffect(() => {
  localStorage.setItem("lastHitData", JSON.stringify(lastHitData));
}, [lastHitData]);






//-----------1st project End--------------------




  const [rowData, setRowData] = useState(() => {
    const savedCountData = localStorage.getItem("rowData4");
    return savedCountData ? JSON.parse(savedCountData) : [];
  });

  const [dozenRowData, setDozenRowData] = useState(() => {
    const savedCountData = localStorage.getItem("dozenRowData4");
    return savedCountData ? JSON.parse(savedCountData) : [];
  });

  const [colRowData, setColRowData] = useState(() => {
    const savedCountData = localStorage.getItem("colRowData4");
    return savedCountData ? JSON.parse(savedCountData) : [];
  });

  const [suggestion, setSuggestion] = useState(() => {
    return localStorage.getItem("suggestion4") || "";
  });

  const [repeatLetter, setRepeatLetter] = useState(() => {
    return localStorage.getItem("repeatLetter4") || "";
  });

  const [repeatDozen, setRepeatDozen] = useState(() => {
    return localStorage.getItem("repeatDozen4") || "";
  });

  const [repeatCol, setRepeatCol] = useState(() => {
    return localStorage.getItem("repeatCol4") || "";
  });

  const [suggestionActive, setSuggestionActive] = useState(() => {
    return JSON.parse(localStorage.getItem("suggestionActive4")) || false;
  });

  const [suggestionActiveDozen, setSuggestionActiveDozen] = useState(() => {
    return JSON.parse(localStorage.getItem("suggestionActiveDozen4")) || false;
  });

  const [suggestionActiveCol, setSuggestionActiveCol] = useState(() => {
    return JSON.parse(localStorage.getItem("suggestionActiveCol4")) || false;
  });

  const [userMissedSuggestion, setUserMissedSuggestion] = useState(() => {
    return JSON.parse(localStorage.getItem("userMissedSuggestion4")) || false;
  });

  const [userMissedSuggestionDozen, setUserMissedSuggestionDozen] = useState(
    () => {
      return (
        JSON.parse(localStorage.getItem("userMissedSuggestionDozen4")) || false
      );
    }
  );

  const [userMissedSuggestionCol, setUserMissedSuggestionCol] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("userMissedSuggestionCol4")) || false
    );
  });

  const [lastHitNumber, setLastHitNumber] = useState(() => {
    const savedLastHitNumber = localStorage.getItem("lastHitNumber");
    return savedLastHitNumber ? JSON.parse(savedLastHitNumber) : null;
  });

  const [historyData, setHistoryData] = useState(() => {
    const savedHistoryData = localStorage.getItem("historyData");
    return savedHistoryData ? JSON.parse(savedHistoryData) : [];
  });

  const [moneyManagementData, setMoneyManagementData] = useState(() => {
    const savedHistoryData = localStorage.getItem("moneyManagement4");
    return savedHistoryData ? JSON.parse(savedHistoryData) : [];
  });

  const [unitData, setUnitData] = useState(() => {
    const savedHistoryData = localStorage.getItem("unitData4");
    return savedHistoryData ? JSON.parse(savedHistoryData) : 1;
  });
  const [unitDataDozen, setUnitDataDozen] = useState(() => {
    const savedHistoryData = localStorage.getItem("unitDataDozen4");
    return savedHistoryData ? JSON.parse(savedHistoryData) : 1;
  });
  const [unitDataCol, setUnitDataCol] = useState(() => {
    const savedHistoryData = localStorage.getItem("unitData4Col");
    return savedHistoryData ? JSON.parse(savedHistoryData) : 1;
  });

  const [suggestionProcessedRow, setSuggestionProcessedRow] = useState(() => {
    const savedHistoryData = localStorage.getItem("suggestionProcessedRow4");
    return savedHistoryData ? JSON.parse(savedHistoryData) : null;
  });

  const [suggestionProcessedDoz, setSuggestionProcessedDoz] = useState(() => {
    const savedHistoryData = localStorage.getItem("suggestionProcessedDoz4");
    return savedHistoryData ? JSON.parse(savedHistoryData) : null;
  });

  const [suggestionProcessedCol, setSuggestionProcessedCol] = useState(() => {
    const savedHistoryData = localStorage.getItem("suggestionProcessedCol4");
    return savedHistoryData ? JSON.parse(savedHistoryData) : null;
  });

  const [lockProfitValue, setLockProfitValue] = useState(() => {
    const savedHistoryData = localStorage.getItem("lockProfitValue");
    return savedHistoryData ? JSON.parse(savedHistoryData) : 0;
  });

  // moneyManagementData = {
  //   spin : '',
  //   winLoss : '',
  //   unit : '',
  //   total : '',
  //   covered : ''
  // }

  // Save `countData` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("lockProfitValue", JSON.stringify(lockProfitValue));
  }, [lockProfitValue]);

  useEffect(() => {
    localStorage.setItem("countData", JSON.stringify(countData));
  }, [countData]);

  useEffect(() => {
    localStorage.setItem("landedNumbersDD", JSON.stringify(landedNumbers));
  }, [landedNumbers]);

  useEffect(() => {
    localStorage.setItem("dozenScores", JSON.stringify(dozenScores));
  }, [dozenScores]);

  useEffect(() => {
    localStorage.setItem("columnScores", JSON.stringify(columnScores));
  }, [columnScores]);

  useEffect(() => {
    localStorage.setItem("rowDataScores", JSON.stringify(rowDataScores));
  }, [rowDataScores]);

  // Save `lastHitNumber` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("lastHitNumber", JSON.stringify(lastHitNumber));
  }, [lastHitNumber]);

  // Save `historyData` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("historyData", JSON.stringify(historyData));
  }, [historyData]);

  useEffect(() => {
    localStorage.setItem(
      "moneyManagement4",
      JSON.stringify(moneyManagementData)
    );
  }, [moneyManagementData]);

  useEffect(() => {
    localStorage.setItem("unitData4", JSON.stringify(unitData));
  }, [unitData]);
  useEffect(() => {
    localStorage.setItem(
      "suggestionProcessedRow4",
      JSON.stringify(suggestionProcessedRow)
    );
  }, [suggestionProcessedRow]);

  useEffect(() => {
    localStorage.setItem(
      "suggestionProcessedDoz4",
      JSON.stringify(suggestionProcessedDoz)
    );
  }, [suggestionProcessedDoz]);

  useEffect(() => {
    localStorage.setItem(
      "suggestionProcessedCol4",
      JSON.stringify(suggestionProcessedCol)
    );
  }, [suggestionProcessedCol]);

  useEffect(() => {
    localStorage.setItem("rowData4", JSON.stringify(rowData));
  }, [rowData]);

  useEffect(() => {
    localStorage.setItem("dozenRowData4", JSON.stringify(dozenRowData));
  }, [dozenRowData]);

  useEffect(() => {
    localStorage.setItem("colRowData4", JSON.stringify(colRowData));
  }, [colRowData]);

  useEffect(() => {
    localStorage.setItem("suggestion4", suggestion);
  }, [suggestion]);

  useEffect(() => {
    localStorage.setItem("repeatLetter4", repeatLetter);
  }, [repeatLetter]);

  useEffect(() => {
    localStorage.setItem("repeatDozen4", repeatDozen);
  }, [repeatDozen]);

  useEffect(() => {
    localStorage.setItem("repeatCol4", repeatCol);
  }, [repeatCol]);

  useEffect(() => {
    localStorage.setItem("suggestionActive4", JSON.stringify(suggestionActive));
  }, [suggestionActive]);

  useEffect(() => {
    localStorage.setItem("analyzeData4", JSON.stringify(analyzeData));
  }, [analyzeData]);

  useEffect(() => {
    localStorage.setItem("StatisticsData", JSON.stringify(statsData));
  }, [statsData]);

  // useEffect(() => {
  //   localStorage.setItem("StatisticsData", JSON.stringify(statsData));
  // }, [analyzeData]);

  useEffect(() => {
    localStorage.setItem(
      "suggestionActiveDozen4",
      JSON.stringify(suggestionActiveDozen)
    );
  }, [suggestionActiveDozen]);

  useEffect(() => {
    localStorage.setItem(
      "suggestionActiveCol4",
      JSON.stringify(suggestionActiveCol)
    );
  }, [suggestionActiveCol]);

  useEffect(() => {
    localStorage.setItem(
      "userMissedSuggestion4",
      JSON.stringify(userMissedSuggestion)
    );
  }, [userMissedSuggestion]);

  useEffect(() => {
    localStorage.setItem(
      "userMissedSuggestionDozen4",
      JSON.stringify(userMissedSuggestionDozen)
    );
  }, [userMissedSuggestionDozen]);

  useEffect(() => {
    localStorage.setItem(
      "userMissedSuggestionCol4",
      JSON.stringify(userMissedSuggestionCol)
    );
  }, [userMissedSuggestionCol]);

  // Handle reset button click
  const handleClickResetButton = () => {
    setColHoverEffect(false);
    setDozenHoverEffect(false);
    setRowHoverEffect(false);
    const initialRowData = [];
    const initialDozenRowData = [];
    const initialColRowData = [];
    const initialSuggestion = "";
    const initialRepeatLetter = "";
    const initialRepeatDozen = "";
    const initialRepeatCol = "";
    const initialSuggestionActive = false;
    const initialUserMissedSuggestion = false;
    const initialAnalyzeData = {
      winPerData: 0,
      lossPerData: 0,
      dozenWinPer: 0,
      dozenLossPer: 0,
      colWinPer: 0,
      colLossPer: 0,
    };
    const initialStatsData = {
      Agroup: 0,
      Agroup_loss: 0,
      Bgroup: 0,
      Bgroup_loss: 0,
      Cgroup: 0,
      Cgroup_loss: 0,
      dozen1: 0,
      dozen1_loss: 0,
      dozen2: 0,
      dozen2_loss: 0,
      dozen3: 0,
      dozen3_loss: 0,
      col1: 0,
      col1_loss: 0,
      col2: 0,
      col2_loss: 0,
      col3: 0,
      col3_loss: 0,
      odd: 0,
      odd_loss: 0,
      even: 0,
      even_loss: 0,
    };
    

    // Reset the component's state
    setRowData(initialRowData);
    setDozenRowData(initialDozenRowData);
    setColRowData(initialColRowData);
    setSuggestion(initialSuggestion);
    setRepeatLetter(initialRepeatLetter);
    setRepeatDozen(initialRepeatDozen);
    setRepeatCol(initialRepeatCol);
    setSuggestionActive(initialSuggestionActive);
    setUserMissedSuggestion(initialUserMissedSuggestion);
    setSuggestionActiveDozen(initialSuggestionActive);
    setUserMissedSuggestionDozen(initialUserMissedSuggestion);
    setSuggestionActiveCol(initialSuggestionActive);
    setUserMissedSuggestionCol(initialUserMissedSuggestion);
    setAnalyzeData(initialAnalyzeData);
    setStatsData(initialStatsData);
    setMoneyManagementData([]);
    setSuggestionProcessedRow(null);
    setSuggestionProcessedDoz(null);
    setSuggestionProcessedCol(null);
    setUnitData(1);
    setUnitDataDozen(1);
    setUnitDataCol(1);
    setLandedNumbers([]);
    setDozenScores({ 1: 0, 2: 0, 3: 0 });
    setColumnScores({ 1: 0, 2: 0, 3: 0 });
    setRowDataScores({ A: 0, B: 0, C: 0 });
    setLockProfitValue(0);

    // Set the initial values in localStorage
    localStorage.setItem("analyzeData4", JSON.stringify(initialAnalyzeData));
    localStorage.setItem("rowData4", JSON.stringify(initialRowData));
    localStorage.setItem("dozenRowData4", JSON.stringify(initialDozenRowData));
    localStorage.setItem("colRowData4", JSON.stringify(initialColRowData));
    localStorage.setItem("moneyManagement4", JSON.stringify([]));
    localStorage.setItem("landedNumbersDD", JSON.stringify([]));
    localStorage.setItem("dozenScores", JSON.stringify({ 1: 0, 2: 0, 3: 0 }));
    localStorage.setItem("columnScores", JSON.stringify({ 1: 0, 2: 0, 3: 0 }));
    localStorage.setItem("rowDataScores", JSON.stringify({ A: 0, B: 0, C: 0 }));
    localStorage.setItem("suggestionProcessedRow4", JSON.stringify(null));
    localStorage.setItem("suggestionProcessedDoz4", JSON.stringify(null));
    localStorage.setItem("suggestionProcessedCol4", JSON.stringify(null));
    localStorage.setItem("suggestion4", initialSuggestion);
    localStorage.setItem("repeatLetter4", initialRepeatLetter);
    localStorage.setItem("repeatDozen4", initialRepeatDozen);
    localStorage.setItem("repeatCol4", initialRepeatCol);
    localStorage.setItem("unitData4", 1);
    localStorage.setItem("unitDataDozen4", 1);
    localStorage.setItem("unitDataCol4", 1);
    localStorage.setItem("lockProfitValue", 0);
    localStorage.setItem(
      "suggestionActive4",
      JSON.stringify(initialSuggestionActive)
    );
    localStorage.setItem(
      "userMissedSuggestion4",
      JSON.stringify(initialUserMissedSuggestion)
    );
    localStorage.setItem(
      "suggestionActiveDozen4",
      JSON.stringify(initialSuggestionActive)
    );
    localStorage.setItem(
      "userMissedSuggestionDozen4",
      JSON.stringify(initialUserMissedSuggestion)
    );
    localStorage.setItem(
      "suggestionActiveCol4",
      JSON.stringify(initialSuggestionActive)
    );
    localStorage.setItem(
      "userMissedSuggestionCol4",
      JSON.stringify(initialUserMissedSuggestion)
    );

    const resetState = {
      red: 0,
      black: 0,
      even: 0,
      odd: 0,
      one_eighteen: 0,
      nineteen_thirtySix: 0,
      dozen_one: 0,
      dozen_two: 0,
      dozen_three: 0,
      col_one: 0,
      col_two: 0,
      col_three: 0,
    };
    setCountData(resetState);
    setLastHitNumber(null);
    setHistoryData([]);

    let emptyArray = [];

    let resetDoubleData = {
      one_six: 0,
      seven_twelve: 0,
      thirteen_eighteen: 0,
      nineteen_twentyFour: 0,
      twentyFive_thirty: 0,
      thirtyOne_thirtySix: 0,
    };

    let resetSingleStreetData = {
      one_three: 0,
      four_six: 0,
      seven_nine: 0,
      ten_twelve: 0,
      thirteen_fifteen: 0,
      sixteen_eighteen: 0,
      nineteen_twentyOne: 0,
      twentyTwo_twentyFour: 0,
      twentyFive_twentySeven: 0,
      twentyEight_thirty: 0,
      thirtyOne_thirtyThree: 0,
      thirtyFour_thirtySix: 0,
    };
    let resetCircleData = {
      zero: 0,
      duZero: 0,
      orphe: 0,
      tires: 0,
    };
    let summaryResetData = {
      lowEvenRed: 0,
      lowOddRed: 0,
      highEvenRed: 0,
      highOddRed: 0,
      lowEvenBlack: 0,
      lowOddBlack: 0,
      highEvenBlack: 0,
      highOddBlack: 0,
    };


    setDoubleStreetData(resetDoubleData);
    setNonDoubleStreetData(resetDoubleData);
    setSingleStreetData(resetSingleStreetData);
    setNonSingleStreetData(resetSingleStreetData);
    setSummaryData(summaryResetData);
    setNonSummaryData(summaryResetData);
    setLastHitData(resetState);
    setLastHitNumber(null);
    setCircleData(resetCircleData);
    setNonCircleData(resetCircleData);
    setLandedNumbers([]);
    setColumnScoresDD({ 1: 0, 2: 0, 3: 0 });
    setDozenScoresDD({ 1: 0, 2: 0, 3: 0 });


    // Also reset the data in local storage
    localStorage.setItem("countData", JSON.stringify(resetState));
    localStorage.setItem("rowData4", JSON.stringify(emptyArray));
    localStorage.setItem("dozenRowData4", JSON.stringify(emptyArray));
    localStorage.setItem("colRowData4", JSON.stringify(emptyArray));
    localStorage.setItem("lastHitNumber", null);
    localStorage.setItem("summaryData", JSON.stringify(summaryResetData));
    localStorage.setItem("landedNumbersDD", JSON.stringify([]));
    localStorage.setItem("dozenScoresDD", JSON.stringify({ 1: 0, 2: 0, 3: 0 }));
    localStorage.setItem("columnScoresDD", JSON.stringify({ 1: 0, 2: 0, 3: 0 }));
    localStorage.setItem("historyData", JSON.stringify([]));
    localStorage.setItem("nonSummaryData", JSON.stringify(summaryResetData));
    localStorage.setItem("doubleStreetData", JSON.stringify(resetDoubleData));
    localStorage.setItem("nonDoubleStreetData", JSON.stringify(resetDoubleData));
    localStorage.setItem("singleStreetData", JSON.stringify(resetSingleStreetData));
    localStorage.setItem("nonSingleStreetData", JSON.stringify(resetSingleStreetData));
    localStorage.setItem("circleData", JSON.stringify(resetCircleData));
    localStorage.setItem("nonCircleData", JSON.stringify(resetCircleData));
  };



















  useEffect(() => {
    let newLossEntries = [];

    // Check letter loss
    if (rowData.length > 1 && rowHoverEffect) {
      const previousRow = rowData[rowData.length - 2];
      const lastRow = rowData[rowData.length - 1];
      if (
        Object.keys(previousRow).length === 3 &&
        Object.keys(lastRow).length === 3 &&
        repeatLetter &&
        !Object.values(lastRow).includes(repeatLetter) &&
        !userMissedSuggestion
      ) {
        if (isAlertAllowed && rowHoverEffect) {
          showToast(`Book Your Loss!`, "error");
        }
        setUnitData(1);
        setRepeatLetter("");
        setUserMissedSuggestion(true);
        setSuggestionActive(false);
        setAnalyzeData((prev) => ({
          ...prev,
          lossPerData: prev.lossPerData + 1,
        }));

        setStatsData((prev) => ({
          ...prev,
          Agroup_loss:
            repeatLetter === "A" ? prev.Agroup_loss + 1 : prev.Agroup_loss,
          Bgroup_loss:
            repeatLetter === "B" ? prev.Bgroup_loss + 1 : prev.Bgroup_loss,
          Cgroup_loss:
            repeatLetter === "C" ? prev.Cgroup_loss + 1 : prev.Cgroup_loss,
        }));

        // Prepare the letter loss entry
        newLossEntries.push({
          spin: lastHitNumber,
          winLoss: "L",
          unit: unitData,
          total: repeatLetter === "A" ? unitData * -11.5 : unitData * -12,
          covered: repeatLetter === "A" ? 13 : 12,
        });
      }
    }

    // Check dozen loss
    if (dozenRowData.length > 1 && dozenHoverEffect) {
      const previousRow = dozenRowData[dozenRowData.length - 2];
      const lastRow = dozenRowData[dozenRowData.length - 1];
      if (
        Object.keys(previousRow).length === 3 &&
        Object.keys(lastRow).length === 3 &&
        repeatDozen &&
        !Object.values(lastRow).includes(repeatDozen) &&
        !userMissedSuggestionDozen
      ) {
        if (isAlertAllowed && dozenHoverEffect) {
          showToast(`Book Your Loss!`, "error");
        }
        setUnitDataDozen(1);
        setRepeatDozen("");
        setUserMissedSuggestionDozen(true);
        setSuggestionActiveDozen(false);
        setAnalyzeData((prev) => ({
          ...prev,
          dozenLossPer: prev.dozenLossPer + 1,
        }));

        setStatsData((prev) => ({
          ...prev,
          dozen1_loss:
            repeatDozen === "1" ? prev.dozen1_loss + 1 : prev.dozen1_loss,
          dozen2_loss:
            repeatDozen === "2" ? prev.dozen2_loss + 1 : prev.dozen2_loss,
          dozen3_loss:
            repeatDozen === "3" ? prev.dozen3_loss + 1 : prev.dozen3_loss,
        }));

        // Prepare the dozen loss entry
        newLossEntries.push({
          spin: lastHitNumber,
          winLoss: "L",
          unit: unitDataDozen,
          total: unitDataDozen * -1,
          covered:
            repeatDozen === "1" ? "D1" : repeatDozen === "2" ? "D2" : "D3",
        });
      }
    }

    // Check column loss
    if (colRowData.length > 1 && colHoverEffect) {
      const previousRow = colRowData[colRowData.length - 2];
      const lastRow = colRowData[colRowData.length - 1];
      if (
        Object.keys(previousRow).length === 3 &&
        Object.keys(lastRow).length === 3 &&
        repeatCol &&
        !Object.values(lastRow).includes(repeatCol) &&
        !userMissedSuggestionCol
      ) {
        if (isAlertAllowed && colHoverEffect) {
          showToast(`Book Your Loss! col`, "error");
        }
        setUnitDataCol(1);
        setRepeatCol("");
        setUserMissedSuggestionCol(true);
        setSuggestionActiveCol(false);
        setAnalyzeData((prev) => ({
          ...prev,
          colLossPer: prev.colLossPer + 1,
        }));

        setStatsData((prev) => ({
          ...prev,
          col1_loss: repeatCol === "1" ? prev.col1_loss + 1 : prev.col1_loss,
          col2_loss: repeatCol === "2" ? prev.col2_loss + 1 : prev.col2_loss,
          col3_loss: repeatCol === "3" ? prev.col3_loss + 1 : prev.col3_loss,
        }));

        // Prepare the column loss entry
        newLossEntries.push({
          spin: lastHitNumber,
          winLoss: "L",
          unit: unitDataCol,
          total: unitDataCol * -1,
          covered: repeatCol === "1" ? "C1" : repeatCol === "2" ? "C2" : "C3",
        });
      }
    }

    // If there are any losses, update the money management data once
    // if (newLossEntries.length > 0) {
    //   setMoneyManagementData((prevData) => [...prevData, ...newLossEntries]);
    // }
  }, [
    rowData,
    dozenRowData,
    colRowData,
    repeatLetter,
    repeatDozen,
    repeatCol,
    userMissedSuggestion,
    userMissedSuggestionDozen,
    userMissedSuggestionCol,
  ]);

  useEffect(() => {
    if (rowData.length > 0) {
      const lastRowIndex = rowData.length - 1;
      const lastRow = rowData[lastRowIndex];

      // Only process if we haven't already processed this row's first column
      if (
        Object.keys(lastRow).length === 3 &&
        suggestionProcessedRow !== lastRowIndex
      ) {
        const values = Object.values(lastRow);
        const occurrences = values.reduce((acc, letter) => {
          acc[letter] = (acc[letter] || 0) + 1;
          return acc;
        }, {});
        const repeatedLetter = Object.keys(occurrences).find(
          (letter) => occurrences[letter] > 1
        );

        // Check if the repeated letter is in the first column
        if (repeatedLetter) {
          // Only trigger the suggestion if it hasn't been processed for this row
          setRepeatLetter(repeatedLetter);
          setSuggestionActive(true);
          setUserMissedSuggestion(false);
          setSuggestion(`Suggestion: The repeated letter is ${repeatedLetter}`);

          // Add data to moneyManagementData only for the first column
          const newEntry = {
            spin: "",
            winLoss: "",
            unit: unitData,
            total: 0,
            covered: repeatedLetter === "A" ? 13 : 12,
          };

          setMoneyManagementData((prevData) => {
            const updatedData = [...prevData, newEntry];
            localStorage.setItem(
              "moneyManagement4",
              JSON.stringify(updatedData)
            );
            return updatedData;
          });

          // Mark this row as processed to prevent duplicate additions for this row
          setSuggestionProcessedRow(lastRowIndex);
        } else if (!repeatedLetter) {
          // Reset if there's no repeated letter
          setSuggestion("");
          // setRepeatLetter("");
          // setSuggestionActive(false);
          setSuggestionProcessedRow(null); // Reset flag if no suggestion
        }
      }
    }
  }, [rowData, repeatLetter, userMissedSuggestion, lastHitNumber, unitData]);

  useEffect(() => {
    if (dozenRowData.length > 0) {
      const lastRowIndex = dozenRowData.length - 1;
      const lastRow = dozenRowData[lastRowIndex];

      // Only process if we haven't already processed this row's first column
      if (
        Object.keys(lastRow).length === 3 &&
        suggestionProcessedDoz !== lastRowIndex
      ) {
        const values = Object.values(lastRow);
        const occurrences = values.reduce((acc, dozen) => {
          acc[dozen] = (acc[dozen] || 0) + 1;
          return acc;
        }, {});
        const repeatedDozen = Object.keys(occurrences).find(
          (dozen) => occurrences[dozen] > 1
        );

        // Check if the repeated dozen is in the first column
        if (repeatedDozen && repeatedDozen != 0) {
          // Only trigger the suggestion if it hasn't been processed for this row
          setRepeatDozen(repeatedDozen);
          setSuggestionActiveDozen(true);
          setUserMissedSuggestionDozen(false);
          setSuggestion(`Suggestion: The repeated dozen is ${repeatedDozen}`);

          // Add data to moneyManagementData only for the first column
          // const newEntry = {
          //   spin: "",
          //   winLoss: "",
          //   unit: unitDataDozen,
          //   total: 0,
          //   covered:
          //     repeatedDozen === "1"
          //       ? "D1"
          //       : repeatedDozen === "2"
          //       ? "D2"
          //       : "D3",
          // };

          // setMoneyManagementData((prevData) => {
          //   const updatedData = [...prevData, newEntry];
          //   localStorage.setItem(
          //     "moneyManagement4",
          //     JSON.stringify(updatedData)
          //   );
          //   return updatedData;
          // });

          // Mark this row as processed to prevent duplicate additions for this row
          setSuggestionProcessedDoz(lastRowIndex);
        } else if (!repeatedDozen) {
          // Reset if there's no repeated dozen
          setSuggestion("");
          // setRepeatDozen("");
          // setSuggestionActiveDozen(false);
          setSuggestionProcessedDoz(null); // Reset flag if no suggestion
        }
      }
    }
  }, [
    dozenRowData,
    repeatDozen,
    userMissedSuggestionDozen,
    lastHitNumber,
    unitData,
  ]);

  useEffect(() => {
    if (colRowData.length > 0) {
      const lastRowIndex = colRowData.length - 1;
      const lastRow = colRowData[lastRowIndex];

      // Only process if we haven't already processed this row's first column
      if (
        Object.keys(lastRow).length === 3 &&
        suggestionProcessedCol !== lastRowIndex
      ) {
        const values = Object.values(lastRow);
        const occurrences = values.reduce((acc, col) => {
          acc[col] = (acc[col] || 0) + 1;
          return acc;
        }, {});
        const repeatedCol = Object.keys(occurrences).find(
          (col) => occurrences[col] > 1
        );

        // Check if the repeated col is in the first column
        if (repeatedCol && repeatedCol != 0) {
          // Only trigger the suggestion if it hasn't been processed for this row
          setRepeatCol(repeatedCol);
          setSuggestionActiveCol(true);
          setUserMissedSuggestionCol(false);
          setSuggestion(`Suggestion: The repeated column is ${repeatedCol}`);

          // Add data to moneyManagementData only for the first column
          // const newEntry = {
          //   spin: "",
          //   winLoss: "",
          //   unit: unitDataCol,
          //   total: 0,
          //   covered:
          //     repeatedCol === "1" ? "C1" : repeatedCol === "2" ? "C2" : "C3",
          // };

          // setMoneyManagementData((prevData) => {
          //   const updatedData = [...prevData, newEntry];
          //   localStorage.setItem(
          //     "moneyManagement4",
          //     JSON.stringify(updatedData)
          //   );
          //   return updatedData;
          // });

          // Mark this row as processed to prevent duplicate additions for this row
          setSuggestionProcessedCol(lastRowIndex);
        } else if (!repeatedCol) {
          // Reset if there's no repeated col
          setSuggestion("");
          // setRepeatCol("");
          // setSuggestionActiveCol(false);
          setSuggestionProcessedCol(null); // Reset flag if no suggestion
        }
      }
    }
  }, [colRowData, repeatCol, userMissedSuggestionCol, lastHitNumber, unitData]);

  // Effect to handle multiple losses (letter, dozen, and column)

  let [isReachedTimeToIncreaseLetter, setIsReachedTimeToIncreaseLetter] =
    useState(false);

  useEffect(() => {}, [moneyManagementData]);








  
  // Handle when user clicks a letter/number
  const handleClickNumber = (key, number, doz,dozen, col, oddEven, color, range, ssRange, dsRange, wTracker,quadra,letter) => {
    const {
      countUpdates,
      summaryUpdates,
      doubleStreetDataUpdates,
      circleDataUpdates,
      singleStreetDataUpdates,
    } = updateMapping[key];


   

    // Update countData
    setCountData((prevState) => {
      const updatedCounts = {};
      Object.keys(countUpdates).forEach((field) => {
        updatedCounts[field] = prevState[field] + countUpdates[field];
      });
      return { ...prevState, ...updatedCounts };
    });

    setDoubleStreetData((prevState) => {
      const updatedCounts = {};
      Object.keys(doubleStreetDataUpdates).forEach((field) => {
        updatedCounts[field] =
          prevState[field] + doubleStreetDataUpdates[field];
      });
      return { ...prevState, ...updatedCounts };
    });

    setSingleStreetData((prevState) => {
      const updatedCounts = {};
      Object.keys(singleStreetDataUpdates).forEach((field) => {
        updatedCounts[field] =
          prevState[field] + singleStreetDataUpdates[field];
      });
      return { ...prevState, ...updatedCounts };
    });
    setSummaryData((prevState) => {
      const updatedSummary = {};
      Object.keys(summaryUpdates).forEach((field) => {
        updatedSummary[field] = prevState[field] + summaryUpdates[field];
      });
      return { ...prevState, ...updatedSummary };
    });

    setCircleData((prevState) => {
      const updatedSummary = {};
      Object.keys(circleDataUpdates).forEach((field) => {
        updatedSummary[field] = prevState[field] + circleDataUpdates[field];
      });
      return { ...prevState, ...updatedSummary };
    });




    setLastHitData((prevLastHitData) => {
      const updatedLastHitData = {};

      Object.keys(prevLastHitData).forEach((field) => {
        updatedLastHitData[field] =
          clickedDataUpdates[field] > 0 ? 0 : prevLastHitData[field] + 1;
      });

      return updatedLastHitData;
    });




    const clickedDataUpdates = {
      red: countUpdates.red || 0,
      black: countUpdates.black || 0,
      even: countUpdates.even || 0,
      odd: countUpdates.odd || 0,
      one_eighteen: countUpdates.one_eighteen || 0,
      nineteen_thirtySix: countUpdates.nineteen_thirtySix || 0,
      dozen_one: countUpdates.dozen_one || 0,
      dozen_two: countUpdates.dozen_two || 0,
      dozen_three: countUpdates.dozen_three || 0,
      col_one: countUpdates.col_one || 0,
      col_two: countUpdates.col_two || 0,
      col_three: countUpdates.col_three || 0,
    };

    const clickedDataDoubleStreetData = {
      one_six: doubleStreetDataUpdates.one_six || 0,
      seven_twelve: doubleStreetDataUpdates.seven_twelve || 0,
      thirteen_eighteen: doubleStreetDataUpdates.thirteen_eighteen || 0,
      nineteen_twentyFour: doubleStreetDataUpdates.nineteen_twentyFour || 0,
      twentyFive_thirty: doubleStreetDataUpdates.twentyFive_thirty || 0,
      thirtyOne_thirtySix: doubleStreetDataUpdates.thirtyOne_thirtySix || 0,
    };

    const clickedSummaryData = {
      lowEvenRed: summaryUpdates.lowEvenRed || 0,
      lowOddRed: summaryUpdates.lowOddRed || 0,
      highEvenRed: summaryUpdates.highEvenRed || 0,
      highOddRed: summaryUpdates.highOddRed || 0,
      lowEvenBlack: summaryUpdates.lowEvenBlack || 0,
      lowOddBlack: summaryUpdates.lowOddBlack || 0,
      highEvenBlack: summaryUpdates.highEvenBlack || 0,
      highOddBlack: summaryUpdates.highOddBlack || 0,
    };

    const clickedDataSingleStreetData = {
      one_three: singleStreetDataUpdates.one_three || 0,
      four_six: singleStreetDataUpdates.four_six || 0,
      seven_nine: singleStreetDataUpdates.seven_nine || 0,
      ten_twelve: singleStreetDataUpdates.ten_twelve || 0,
      thirteen_fifteen: singleStreetDataUpdates.thirteen_fifteen || 0,
      sixteen_eighteen: singleStreetDataUpdates.sixteen_eighteen || 0,
      nineteen_twentyOne: singleStreetDataUpdates.nineteen_twentyOne || 0,
      twentyTwo_twentyFour: singleStreetDataUpdates.twentyTwo_twentyFour || 0,
      twentyFive_twentySeven:
        singleStreetDataUpdates.twentyFive_twentySeven || 0,
      twentyEight_thirty: singleStreetDataUpdates.twentyEight_thirty || 0,
      thirtyOne_thirtyThree: singleStreetDataUpdates.thirtyOne_thirtyThree || 0,
      thirtyFour_thirtySix: singleStreetDataUpdates.thirtyFour_thirtySix || 0,
    };

    const clickedCircleData = {
      zero: circleDataUpdates.zero || 0,
      duZero: circleDataUpdates.duZero || 0,
      orphe: circleDataUpdates.orphe || 0,
      tires: circleDataUpdates.tires || 0,
    };

    setLastHitNumber({
      number: number,
      color:
        clickedDataUpdates.red === 1
          ? "red"
          : clickedDataUpdates.black === 1
            ? "black"
            : "zero",
    });

    // setLastHitData((prevLastHitData) => {
    //   const updatedLastHitData = {};

    //   Object.keys(prevLastHitData).forEach((field) => {
    //     updatedLastHitData[field] =
    //       clickedDataUpdates[field] > 0 ? 0 : prevLastHitData[field] + 1;
    //   });

    //   return updatedLastHitData;
    // });

    setNonSummaryData((prevLastHitData) => {
      const updatedLastHitData = {};

      Object.keys(prevLastHitData).forEach((field) => {
        updatedLastHitData[field] =
          clickedSummaryData[field] > 0 ? 0 : prevLastHitData[field] + 1;
      });

      return updatedLastHitData;
    });

    setNonDoubleStreetData((prevLastHitData) => {
      const updatedLastHitData = {};

      Object.keys(prevLastHitData).forEach((field) => {
        updatedLastHitData[field] =
          clickedDataDoubleStreetData[field] > 0
            ? 0
            : prevLastHitData[field] + 1;
      });

      return updatedLastHitData;
    });

    setNonCircleData((prevLastHitData) => {
      const updatedLastHitData = {};

      Object.keys(prevLastHitData).forEach((field) => {
        updatedLastHitData[field] =
          clickedCircleData[field] > 0 ? 0 : prevLastHitData[field] + 1;
      });

      return updatedLastHitData;
    });

    setNonSingleStreetData((prevLastHitData) => {
      const updatedLastHitData = {};

      Object.keys(prevLastHitData).forEach((field) => {
        updatedLastHitData[field] =
          clickedDataSingleStreetData[field] > 0
            ? 0
            : prevLastHitData[field] + 1;
      });

      return updatedLastHitData;
    });


    setLastHitNumber({
      number: number,
      color:
        clickedDataUpdates.red === 1
          ? "red"
          : clickedDataUpdates.black === 1
          ? "black"
          : "zero",
    });

// History Data Updates From First Project

let changedHistoryData = {
  color:
    clickedDataUpdates.red === 1
      ? "red"
      : clickedDataUpdates.black === 1
        ? "black"
        : "zero",
  size:
    clickedDataUpdates.one_eighteen === 1
      ? "small"
      : clickedDataUpdates.nineteen_thirtySix === 1
        ? "large"
        : "zero",
  odd_even:
    clickedDataUpdates.odd === 1
      ? "odd"
      : clickedDataUpdates.even === 1
        ? "even"
        : "zero",
  dozen:
    clickedDataUpdates.dozen_one === 1
      ? "1st"
      : clickedDataUpdates.dozen_two === 1
        ? "2nd"
        : clickedDataUpdates.dozen_three === 1
          ? "3rd"
          : "zero",
  column:
    clickedDataUpdates.col_one === 1
      ? "1st"
      : clickedDataUpdates.col_two === 1
        ? "2nd"
        : clickedDataUpdates.col_three === 1
          ? "3rd"
          : "zero",
  His_num: number,
};

setHistoryData([...historyData, changedHistoryData]);
    // Set Row Data for Letter
    setRowData((prevRowData) => {
      const lastRow = prevRowData[prevRowData.length - 1];
      if (!lastRow || Object.keys(lastRow).length >= 3) {
        return [...prevRowData, { [`let1`]: letter }];
      } else {
        const keyIndex = Object.keys(lastRow).length + 1;
        const updatedRow = { ...lastRow, [`let${keyIndex}`]: letter };
        return [...prevRowData.slice(0, -1), updatedRow];
      }
    });





    // Update statsData based on letter, dozen, and column

    // const parsedDoz = Number(doz);
    // const parsedCol = Number(col);
    // setStatsData((prevStats) => {
    //   const updatedStats = { ...prevStats };

    //   // Increment corresponding counts based on letter
    //   if (letter === "A") updatedStats.Agroup += 1;
    //   else if (letter === "B") updatedStats.Bgroup += 1;
    //   else if (letter === "C") updatedStats.Cgroup += 1;

    //   // Increment dozen count
    //   if (parsedDoz === 1) updatedStats.dozen1 += 1;
    //   else if (parsedDoz === 2) updatedStats.dozen2 += 1;
    //   else if (parsedDoz === 3) updatedStats.dozen3 += 1;

    //   // Increment column count
    //   if (parsedCol === 1) updatedStats.col1 += 1;
    //   else if (parsedCol === 2) updatedStats.col2 += 1;
    //   else if (parsedCol === 3) updatedStats.col3 += 1;

    //   // Update odd/even counts
    //   if (number % 2 === 0) updatedStats.even += 1;
    //   else updatedStats.odd += 1;

    //   // Save to local storage
    //   localStorage.setItem("StatisticsData", JSON.stringify(updatedStats));

    //   return updatedStats;
    // });

    // Handle suggestion for letters (RowData)
    if (suggestionActive) {
      if (letter === repeatLetter) {
        setSuggestionActive(false);
        setSuggestion("");
        if (isAlertAllowed && rowHoverEffect) {
          showToast(`Win Number!`, "success");
        }
        setUnitData(unitData + 1);
        setRepeatLetter("");
        setAnalyzeData((prev) => ({
          ...prev,
          winPerData: prev.winPerData + 1,
        }));

        setStatsData((prev) => ({
          ...prev,
          Agroup: repeatLetter === "A" ? prev.Agroup + 1 : prev.Agroup,
          Bgroup: repeatLetter === "B" ? prev.Bgroup + 1 : prev.Bgroup,
          Cgroup: repeatLetter === "C" ? prev.Cgroup + 1 : prev.Cgroup,
        }));

        setMoneyManagementData((prevData) => {
          // Flag to indicate if an update has been made
          let updateMade = false;
          const updatedData = prevData.map((entry, index) => {
            // Get the reverse indices of the last three objects: 3, 2, 1
            if (
              !updateMade && // Update only if no prior match was made
              entry.spin === "" && // Match condition
              entry.winLoss === "" &&
              entry.total === 0 &&
              (entry.covered === 13 || entry.covered === 12) // Fix logical condition
            ) {
              updateMade = true;
              return {
                ...entry,
                spin: {
                  number: number,
                  color: "",
                },
                winLoss: "W",
                total: letter === "A" ? unitData * 23 : unitData * 24,
              };
            }
            return entry; // Keep other entries unchanged
          });

          return updatedData;
        });

        if (!isReachedTimeToIncreaseLetter) {
          setUnitData(unitData / 2);
        }

        if (unitData >= 3) {
          setUnitData(1);
        } else {
          setUnitData(unitData + 1);
        }
      } else {
        setSuggestion(`Suggestion: The repeated letter is ${repeatLetter}`);

        // Step 1: Update `moneyManagementData` with the winLoss: "L" entry
        setMoneyManagementData((prevData) => {
          const updatedData = prevData.map((entry, index) => {
            if (
              index >= prevData.length - 3 && // Only check the last three objects
              entry.spin === "" && // Match condition
              entry.winLoss === "" &&
              entry.total === 0
            ) {
              return {
                ...entry,
                spin: {
                  number: number,
                  color: "",
                },
                winLoss: "L",
                total: -1,
              };
            }
            return entry;
          });

          // Save updated data to localStorage
          localStorage.setItem("moneyManagement4", JSON.stringify(updatedData));
          return updatedData;
        });

        // Step 2: Use the updated `moneyManagementData` to calculate `bothLose`
        setMoneyManagementData((prevData) => {
          const filteredData = prevData.filter(
            (entry) => entry.covered === 13 || entry.covered === 12
          );


          // Skip the last entry and pick the two before it
          const lastTwoEntries = filteredData.slice(-2); // Get the second-last and third-last entries

          // Ensure there are exactly two entries and check if both have `winLoss` as "L"
          const bothLose =
            lastTwoEntries.length === 2 &&
            lastTwoEntries.every((entry) => entry.winLoss === "L");

          // Update states based on `bothLose`
          if (bothLose) {
            setUnitData((prevUnit) => prevUnit * 2);
          }

          setIsReachedTimeToIncreaseLetter(bothLose);

          // Add a new entry if needed
          if ((landedNumbers.length + 1) % 3 !== 0) {
            const newEntry = {
              spin: "",
              winLoss: "",
              unit: bothLose ? unitData * 2 : unitData,
              total: 0,
              covered: repeatLetter === "A" ? 13 : 12,
            };

            const newData = [...prevData, newEntry];
            localStorage.setItem("moneyManagement4", JSON.stringify(newData));
            return newData;
          }

          return prevData;
        });
      }
    }
    // Handle Dozen and Column Data
    // if (doz !== 0 || col !== 0) {
    setDozenRowData((prevRowData) => {
      const lastRow = prevRowData[prevRowData.length - 1];
      if (!lastRow || Object.keys(lastRow).length >= 3) {
        return [...prevRowData, { [`doz1`]: doz }];
      } else {
        const keyIndex = Object.keys(lastRow).length + 1;
        const updatedRow = { ...lastRow, [`doz${keyIndex}`]: doz };
        return [...prevRowData.slice(0, -1), updatedRow];
      }
    });
    setColRowData((prevRowData) => {
      const lastRow = prevRowData[prevRowData.length - 1];
      if (!lastRow || Object.keys(lastRow).length >= 3) {
        return [...prevRowData, { [`col1`]: col }];
      } else {
        const keyIndex = Object.keys(lastRow).length + 1;
        const updatedRow = { ...lastRow, [`col${keyIndex}`]: col };
        return [...prevRowData.slice(0, -1), updatedRow];
      }
    });
    // Handle suggestions for Dozen
    if (suggestionActiveDozen) {
      if (doz === repeatDozen) {
        setSuggestionActiveDozen(false);
        setSuggestion("");
        if (isAlertAllowed && dozenHoverEffect) {
          showToast(`Win Dozen!`, "success");
        }
        // setUnitDataDozen(unitDataDozen + 1);
        setRepeatDozen("");
        setAnalyzeData((prev) => ({
          ...prev,
          dozenWinPer: prev.dozenWinPer + 1,
        }));

        setStatsData((prev) => ({
          ...prev,
          dozen1: repeatDozen === "1" ? prev.dozen1 + 1 : prev.dozen1,
          dozen2: repeatDozen === "2" ? prev.dozen2 + 1 : prev.dozen2,
          dozen3: repeatDozen === "3" ? prev.dozen3 + 1 : prev.dozen3,
        }));

        // Add to money management for dozens
        // setMoneyManagementData((prevData) => [
        //   ...prevData,
        //   {
        //     spin: {
        //       number: number,
        //       color:
        //         clickedDataUpdates.red === 1
        //           ? "red"
        //           : clickedDataUpdates.black === 1
        //           ? "black"
        //           : "zero",
        //     },
        //     winLoss: "W",
        //     unit: unitDataDozen,
        //     total: unitDataDozen * 2,
        //     covered: doz === "1" ? "D1" : doz === "2" ? "D2" : "D3",
        //   },
        // ]);
        // setMoneyManagementData((prevData) => {
        //   const updatedData = prevData.map((entry, index) => {
        //     if (
        //       index >= prevData.length - 3 && // Only check the last three objects
        //       entry.spin === "" && // Match condition
        //       entry.winLoss === "" &&
        //       entry.total === 0 &&
        //       entry.covered === 'D1' || 'D2' | 'D3'
        //     ) {
        //       return {
        //         ...entry,
        //         spin: {
        //           number: number,
        //           color:
        //             clickedDataUpdates.red === 1
        //               ? "red"
        //               : clickedDataUpdates.black === 1
        //               ? "black"
        //               : "zero",
        //         },
        //         winLoss: "W",
        //         total: unitDataDozen * 2,
        //       };
        //     }
        //     return entry;
        //   });
        //   return updatedData;
        // });
      } else {
        setSuggestion(`Suggestion: The repeated dozen is ${repeatDozen}`);
        // setMoneyManagementData((prevData) => {
        //   const updatedData = prevData.map((entry, index) => {
        //     if (
        //       index >= prevData.length - 3 && // Only check the last three objects
        //       entry.spin === "" && // Match condition
        //       entry.winLoss === "" &&
        //       entry.total === 0
        //     ) {
        //       return {
        //         ...entry,
        //         spin: {
        //           number: number,
        //           color:
        //             clickedDataUpdates.red === 1
        //               ? "red"
        //               : clickedDataUpdates.black === 1
        //               ? "black"
        //               : "zero",
        //         },
        //         winLoss: "L",
        //         total: -1,
        //       };
        //     }
        //     return entry;
        //   });
        //   return updatedData;
        // });
        // const newEntry = {
        //   spin: "",
        //   winLoss: "",
        //   unit: unitDataDozen,
        //   total: 0,
        //   covered:
        //   repeatDozen === "1" ? "D1" : repeatDozen === "2" ? "D2" : "D3",
        // };

        // setMoneyManagementData((prevData) => {
        //   const updatedData = [...prevData, newEntry];
        //   localStorage.setItem("moneyManagement4", JSON.stringify(updatedData));
        //   return updatedData;
        // });
      }
    }

    // Handle suggestions for Column
    if (suggestionActiveCol) {
      if (col === repeatCol) {
        setSuggestionActiveCol(false);
        setSuggestion("");
        if (isAlertAllowed && colHoverEffect) {
          showToast(`Win Column!`, "success");
        }
        // setUnitDataCol(unitDataCol + 1);
        setRepeatCol("");
        setAnalyzeData((prev) => ({
          ...prev,
          colWinPer: prev.colWinPer + 1,
        }));

        setStatsData((prev) => ({
          ...prev,
          col1: repeatCol === "1" ? prev.col1 + 1 : prev.col1,
          col2: repeatCol === "2" ? prev.col2 + 1 : prev.col2,
          col3: repeatCol === "3" ? prev.col3 + 1 : prev.col3,
        }));

        // Add to money management for columns
        // setMoneyManagementData((prevData) => [
        //   ...prevData,
        //   {
        //     spin: {
        //       number: number,
        //       color:
        //         clickedDataUpdates.red === 1
        //           ? "red"
        //           : clickedDataUpdates.black === 1
        //           ? "black"
        //           : "zero",
        //     },
        //     winLoss: "W",
        //     unit: unitDataCol,
        //     total: unitDataCol * 2,
        //     covered: col === "1" ? "C1" : col === "2" ? "C2" : "C3",
        //   },
        // ]);
        // setMoneyManagementData((prevData) => {
        //   const updatedData = prevData.map((entry, index) => {
        //     if (
        //       index >= prevData.length - 3 && // Only check the last three objects
        //       entry.spin === "" && // Match condition
        //       entry.winLoss === "" &&
        //       entry.total === 0 &&
        //       entry.covered === 'C1' || 'c2' || 'C3'
        //     ) {
        //       return {
        //         ...entry,
        //         spin: {
        //           number: number,
        //           color:
        //             clickedDataUpdates.red === 1
        //               ? "red"
        //               : clickedDataUpdates.black === 1
        //               ? "black"
        //               : "zero",
        //         },
        //         winLoss: "W",
        //         total: unitDataCol * 2,
        //       };
        //     }
        //     return entry;
        //   });
        //   return updatedData;
        // });
      } else {
        setSuggestion(`Suggestion: The repeated column is ${repeatCol}`);
        // setMoneyManagementData((prevData) => {
        //   const updatedData = prevData.map((entry, index) => {
        //     if (
        //       index >= prevData.length - 3 && // Only check the last three objects
        //       entry.spin === "" && // Match condition
        //       entry.winLoss === "" &&
        //       entry.total === 0
        //     ) {
        //       return {
        //         ...entry,
        //         spin: {
        //           number: number,
        //           color:
        //             clickedDataUpdates.red === 1
        //               ? "red"
        //               : clickedDataUpdates.black === 1
        //               ? "black"
        //               : "zero",
        //         },
        //         winLoss: "L",
        //         total: -1,
        //       };
        //     }
        //     return entry;
        //   });
        //   return updatedData;
        // });
        // const newEntry = {
        //   spin: "",
        //   winLoss: "",
        //   unit: unitDataCol,
        //   total: 0,
        //   covered:
        //   repeatCol === "1" ? "C1" : repeatCol === "2" ? "C2" : "C3",
        // };

        // setMoneyManagementData((prevData) => {
        //   const updatedData = [...prevData, newEntry];
        //   localStorage.setItem("moneyManagement4", JSON.stringify(updatedData));
        //   return updatedData;
        // });
      }
    }

    // Add new number to the FIFO queue without any max length
    setLandedNumbers((prev) => [{ key, number,doz, dozen, col, oddEven, color, range, ssRange, dsRange ,wTracker,quadra,letter}, ...prev]);

    // }
    // else {
    //   setDozenRowData([]);
    //   setRepeatDozen("");
    //   setSuggestionActiveDozen(false);
    //   setUserMissedSuggestionDozen(false);
    //   setColRowData([]);
    //   setRepeatCol("");
    //   setSuggestionActiveCol(false);
    //   setUserMissedSuggestionCol(false);
    //   localStorage.setItem("dozenRowData4", JSON.stringify([]));
    //   localStorage.setItem("colRowData4", JSON.stringify([]));
    // }
  };



  useEffect(() => {
    // Calculate the new scores for each dozen, column, and row once the array length reaches 30
    if (landedNumbers.length >= 36) {
      const newDozenScores = { 1: 0, 2: 0, 3: 0 };
      const newColumnScores = { 1: 0, 2: 0, 3: 0 };
      const newRowDataScores = { A: 0, B: 0, C: 0 };

      // Only calculate scores for the first 36 items
      landedNumbers.slice(0, 36).forEach((entry, index) => {
        const score = initialScores[index] || 0;

        // Update dozen scores
        if (entry.doz) {
          newDozenScores[entry.doz] += score;
        }

        // Update column scores
        if (entry.col) {
          newColumnScores[entry.col] += score;
        }

        // Update row data scores
        if (entry.letter) {
          newRowDataScores[entry.letter] += score;
        }
      });

      setDozenScores(newDozenScores);
      setColumnScores(newColumnScores);
      setRowDataScores(newRowDataScores);

    }
  }, [landedNumbers]);



  const handleClickResetUnitData = () => {
    let totalAmt = 0;
    moneyManagementData.map((item) => {
      totalAmt += item.total;
    });
    setLockProfitValue(totalAmt);
  };

  const [planLockScreen, setPlanLockScreen] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        let userData = JSON.parse(sessionStorage.getItem("userData"));
        const response = await axios.get(`${USER_DETAILS}/${userData._id}`);

        if (!response.data.data.projectsPlan.project4) {
          setPlanLockScreen(true);
        } else {
          setPlanLockScreen(false);
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    // Call the async function
    fetchUserDetails();
  }, []);


  const determineImage = (() => {
    const winPer = analyzeData.dozenWinPer;
    const lossPer = analyzeData.dozenLossPer;
    const total = winPer + lossPer;
    const winPercentage = (winPer / total) * 100;
  
    if (winPercentage >= 70) {
      return {
        label: "Hot",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732428032/fire_pqjs4c.gif",
      };
    } else if (winPercentage >= 50) {
      return {
        label: "Stable",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732427951/balance_upn6iz.gif",
      };
    } else {
      return {
        label: "Cold",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732427962/snowflake_lksgpy.gif",
      };
    }
  })();

  const determineStatusAndImage = (() => {
    const winPer = analyzeData.dozenWinPer;
    const lossPer = analyzeData.dozenLossPer;
    const total = winPer + lossPer;
    const winPercentage = (winPer / total) * 100;

    if (winPercentage >= 70) {
      return {
        label: "Hot",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732428032/fire_pqjs4c.gif",
      };
    } else if (winPercentage >= 50) {
      return {
        label: "Stable",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732427951/balance_upn6iz.gif",
      };
    } else {
      return {
        label: "Cold",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732427962/snowflake_lksgpy.gif",
      };
    }
  })();
  const determineStatusAndImage1 = (() => {
    const winPer = analyzeData.colWinPer;
    const lossPer = analyzeData.colLossPer;
    const total = winPer + lossPer;
    const winPercentage = (winPer / total) * 100;

    if (winPercentage >= 70) {
      return {
        label: "Hot",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732428032/fire_pqjs4c.gif",
      };
    } else if (winPercentage >= 50) {
      return {
        label: "Stable",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732427951/balance_upn6iz.gif",
      };
    } else {
      return {
        label: "Cold",
        src: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1732427962/snowflake_lksgpy.gif",
      };
    }
  })();


  const getStatus = (scores) => {
    const values = Object.values(scores);
    const maxScore = Math.max(...values);
    const minScore = Math.min(...values);
    return Object.keys(scores).reduce((status, key) => {
      if (scores[key] === 0) {
        // If score is 0, return an empty string
        status[key] = "Cold";
      } else {
        status[key] =
          scores[key] === maxScore
            ? "hot"
            : scores[key] === minScore
            ? "cold"
            : "stable";
      }
      return status;
    }, {});
  };
  
  const NumberHSC = getStatus(rowDataScores);
  const dozenHSC = getStatus(dozenScores);
  const columnHSC = getStatus(columnScores);




//   const calculateStats = (data) => {
//     const groups = {
//         AGroup: ["Agroup", "Bgroup", "Cgroup"],
//         dozen: ["dozen1", "dozen2", "dozen3"],
//         col: ["col1", "col2", "col3"]
//     };

//     const results = {};

//     for (const [groupName, groupItems] of Object.entries(groups)) {
//         let highestWin = 0;
//         let highestKey = "";

//         groupItems.forEach((key) => {
//             const win = data[key];
//             const loss = data[`${key}_loss`];
//             const total = win + loss;
//             const winPercentage = total > 0 ? (win / total) * 100 : 0;

//             console.log(`${key}: ${win} wins, ${loss} losses, ${winPercentage.toFixed(2)}% win rate`);

//             // Check for the highest win in the group
//             if (win > highestWin) {
//                 highestWin = win;
//                 highestKey = key;
//             }
//         });

//         results[groupName] = { highestKey, highestWin };
//     }

//     return results;
// };

// // Get the stats results
// const statsResults = calculateStats(statsData);




// const getHighestScoreWithKey = (scores) => {
//   const entries = Object.entries(scores); 
//   let highestKey = null;
//   let highestValue = -Infinity;

//   for (const [key, value] of entries) {
//       if (value > highestValue) {
//           highestKey = key;
//           highestValue = value;
//       }
//   }

//   return { key: highestKey, value: highestValue };
// };

// // Get the highest scores with keys
// const highestDozen = getHighestScoreWithKey(dozenScores);
// const highestColumn = getHighestScoreWithKey(columnScores);
// const highestRow = getHighestScoreWithKey(rowDataScores);

// console.log("Highest Dozen:", highestDozen); 
// console.log("Highest Column:", highestColumn); 
// console.log("Highest Row:", highestRow);
// // Log the results
// console.log("Highest values in each group:", statsResults);



// const calculateHighestFromScores = (scores) => {
//   let highestKey = "";
//   let highestWin = 0;

//   // Find the key with the highest score
//   Object.entries(scores).forEach(([key, value]) => {
//     if (value > highestWin) {
//       highestWin = value;
//       highestKey = key;
//     }
//   });

//   return { highestKey, highestWin };
// };



// // Calculate the highest value for each group
// const highestValues = {
//   dozen: calculateHighestFromScores(dozenScores),
//   row: calculateHighestFromScores(rowDataScores),
//   col: calculateHighestFromScores(columnScores),
// };

// console.log("highest Value",highestValues);
// const calculateMaxMinFromScores = (scores) => {
//   let highestKey = "";
//   let highestWin = 0;
//   let lowestKey = "";
//   let lowestWin = Infinity;
//   let stableKey = "";
//   let stableWin = 0;

//   // Find the key with the highest, lowest, and a representative "stable" scores
//   Object.entries(scores).forEach(([key, value]) => {
//     if (value > highestWin) {
//       highestWin = value;
//       highestKey = key;
//     }
//     if (value < lowestWin) {
//       lowestWin = value;
//       lowestKey = key;
//     }
//   });

//   // Find the key with the "stable" win (neither high nor low)
//   Object.entries(scores).forEach(([key, value]) => {
//     if (value > lowestWin && value < highestWin) {
//       stableKey = key;
//       stableWin = value;
//     }
//   });

//   return {
//     highest: { key: highestKey, win: highestWin },
//     lowest: { key: lowestKey, win: lowestWin },
//     stable: { key: stableKey, win: stableWin }
//   };
// };

const calculateMaxMinFromScores = (scores) => {
  const maxPossibleScore = 105; // Maximum possible score
  
  // Categorize scores based on percentage of max possible score
  const categorizeScore = (value) => {
    const percentage = (value / maxPossibleScore) * 100;
    
    if (value === 0) return 'cold';
    if (percentage <= 36) return 'stable';
    return 'hot';
  };

  let highestKey = "";
  let highestWin = 0;
  let lowestKey = "";
  let lowestWin = Infinity;
  let stableKey = "";

  // Categorize all scores
  const categorizedScores = {};
  Object.entries(scores).forEach(([key, value]) => {
    const category = categorizeScore(value);
    categorizedScores[key] = category;

    // Find highest and lowest
    if (value > highestWin) {
      highestWin = value;
      highestKey = key;
    }
    if (value < lowestWin) {
      lowestWin = value;
      lowestKey = key;
    }

    // Find a stable key
    if (category === 'stable' && !stableKey) {
      stableKey = key;
    }
  });

  // Fallback to highest key if no stable key found
  stableKey = stableKey || highestKey;

  return {
    highest: { 
      key: highestKey, 
      win: highestWin,
      category: categorizedScores
    },
    lowest: { 
      key: lowestKey, 
      win: lowestWin,
      category: categorizedScores
    },
    stable: { 
      key: stableKey,
      win: scores[stableKey],
      category: 'stable'
    },
    categorizedScores: categorizedScores
  };
};

const classifyScoresWithValues = (scores) => {
  const maxValue = 105; // Maximum value for each key
  const classifications = {};

  Object.entries(scores).forEach(([key, value]) => {
    const percentage = ((value / maxValue) * 100).toFixed(2); // Convert to percentage and round to 2 decimal places
    let status = "";

    if (value === 0) {
      status = "cold";
    } else if (percentage <= 36) {
      status = "stable";
    } else {
      status = "hot";
    }

    classifications[key] = {
      percentage: `${percentage}%`,
      status,
      value, // Include the original value for reference
    };
  });

  return classifications;
};



// Calculate the max, min, and stable values for each group
const maxMinValues = {
  dozen: classifyScoresWithValues(dozenScoresDD),
  column:classifyScoresWithValues(columnScoresDD),
};




useEffect(() => {
  const timer = setTimeout(() => {
    const backgroundStyles = {
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundRepeat: "no-repeat"
    };

    const resetContainerStyles = (container) => {
      if (container) {
        container.style.backgroundImage = '';
        container.style.backgroundSize = '';
        container.style.backgroundPosition = '';
        container.style.backgroundRepeat = '';
      }
    };

    const isScoresReset = 
      Object.values(dozenScoresDD).every(score => score === 0) &&
      Object.values(columnScoresDD).every(score => score === 0);

    if (isScoresReset) {
      ['1', '2', '3'].forEach(key => {
        const dozenContainer = document.getElementById(`dozenContainer${key}`);
        const columnContainer = document.getElementById(`columnContainer${key}`);
        
        resetContainerStyles(dozenContainer);
        resetContainerStyles(columnContainer);
      });
      return;
    }

    const backgroundImages = {
      hot: 'https://res.cloudinary.com/dxsdme4qy/image/upload/v1734435887/fireFrame_svrrrs.gif',
      cold: 'https://res.cloudinary.com/dxsdme4qy/image/upload/v1734445367/snow-fall_geftx9.gif',
      stable: 'https://res.cloudinary.com/dxsdme4qy/image/upload/v1734521202/stable_ggaahj.gif'
    };

    ['dozen', 'column'].forEach(group => {
      ['1', '2', '3'].forEach(key => {
        const container = document.getElementById(`${group}Container${key}`);
        if (container) {
          const scoreInfo = maxMinValues[group][key];

          resetContainerStyles(container);

          if (scoreInfo && backgroundImages[scoreInfo.status]) {
            container.style.backgroundImage = `url('${backgroundImages[scoreInfo.status]}')`;
            Object.assign(container.style, backgroundStyles);
          }
        }
      });
    });
  }, 100); // Delay for DOM readiness

  return () => clearTimeout(timer); // Cleanup timer
}, [maxMinValues, dozenScoresDD, columnScoresDD]);


// row data bacround hot cold image set

useEffect(() => {
  const backgroundStyles = {
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat"
  };

  const rowLetterNumbers = {
    A: [2, 4, 6, 13, 15, 17, 19, 21, 25, 27, 32, 34],
    B: [1, 5, 8, 10, 11, 16, 20, 23, 24, 30, 33, 36],
    C: [3, 7, 9, 12, 14, 18, 22, 26, 28, 29, 31, 35]
  };

  // Check if scores are reset (all zero)
  const isScoresReset = 
    Object.values(rowDataScores).every(score => score === 0);

  if (isScoresReset) {
    // Reset all number containers
    data.forEach(item => {
      const container = document.getElementById(`number-container-${item.num}`);
      if (container) {
        container.style.backgroundImage = '';
        container.style.backgroundSize = '';
        container.style.backgroundPosition = '';
        container.style.backgroundRepeat = '';
      }
    });
    return;
  }

  // Find highest and lowest row letters
  const highestRowLetter = Object.keys(rowDataScores).reduce((a, b) => 
    rowDataScores[a] > rowDataScores[b] ? a : b
  );
  
  const lowestRowLetter = Object.keys(rowDataScores).reduce((a, b) => 
    rowDataScores[a] < rowDataScores[b] ? a : b
  );

  // Apply backgrounds to number containers
  data.forEach(item => {
    const container = document.getElementById(`number-container-${item.num}`);
    
    if (container) {
      if (rowLetterNumbers[highestRowLetter].includes(item.num)) {
        // Highest row letter numbers get hot background
        container.style.backgroundImage = `url('https://res.cloudinary.com/dxsdme4qy/image/upload/v1734419453/fire_namnig.gif')`;

        // https://res.cloudinary.com/dxsdme4qy/image/upload/v1734435887/fireFrame_svrrrs.gif
        Object.assign(container.style, backgroundStyles);
      } else if (rowLetterNumbers[lowestRowLetter].includes(item.num)) {
        // Lowest row letter numbers get cold background
        container.style.backgroundImage = ``;
        Object.assign(container.style, backgroundStyles);
      } else {
        // Reset other containers
        container.style.backgroundImage = '';
        container.style.backgroundSize = '';
        container.style.backgroundPosition = '';
        container.style.backgroundRepeat = '';
      }
    }
  });
}, [rowDataScores]);




const initialScoresST = Array.from({ length: 36 }, (_, i) => 36 - i);
  useEffect(() => {
    // Calculate the new scores for each dozen, column, and row once the array length reaches 36
    if (landedNumbers.length >= 36) {
      const newDozenScores = { 1: 0, 2: 0, 3: 0 };
      const newColumnScores = { 1: 0, 2: 0, 3: 0 };

      
      // Only calculate scores for the first 36 items
      landedNumbers.slice(0, 3).forEach((entry, index) => {
        const score = initialScoresST[index] || 0;

        // Update dozen scores
        if (entry.dozen) {
          newDozenScores[entry.dozen] += score;
        }
        // Update column scores
        if (entry.col) {
          newColumnScores[entry.col] += score;
        }
      });
     



      setDozenScoresDD(newDozenScores);
      setColumnScoresDD(newColumnScores);
     
    }
  }, [landedNumbers]);

// showing % in ui 
// Calculate total for dozen scores
const total = Object.values(dozenScores).reduce((sum, value) => sum + value, 0);

// Convert values to percentages and ensure no NaN values
const percentagesDozen = Object.fromEntries(
  Object.entries(dozenScores).map(([key, value]) => [
    key,
    total === 0 || isNaN(value) ? 0 : Math.round((value / total) * 100), // Default to 0 for NaN or division by 0
  ])
);

console.log('dozenScores percentages:', percentagesDozen);

// Calculate total for column scores
const totalColumn = Object.values(columnScores).reduce((sum, value) => sum + value, 0);

// Convert values to percentages and ensure no NaN values
const percentagesColumn = Object.fromEntries(
  Object.entries(columnScores).map(([key, value]) => [
    key,
    totalColumn === 0 || isNaN(value) ? 0 : Math.round((value / totalColumn) * 100), // Default to 0 for NaN or division by 0
  ])
);



  

 
  

  return (
    <>
      <div className="sticky lg:top-0 max-sm:top-0 md:top-0 z-30 ">
        {/* <Nav theme={theme} setTheme={setTheme} /> */}
        
        <div
          className="py-1 px-2 justify-between flex sm--navbar bg-purple-600"
          // style={{ backgroundColor: "#FFFBE3" }}
        >
          <div className="flex gap-4 pl-2 items-center sm--lasthit">
            {/* <div>
              <h2 className="text-customPurple text-base font-bold">
                Last Hit Number
              </h2>
            </div> */}
            <div
              className={`${
                lastHitNumber?.color === "zero"
                  ? "border-customGreen text-customGreen border-2"
                  : ""
              } ${
                lastHitNumber?.color === "red"
                  ? "border-customRed bg-customRed text-white border"
                  : lastHitNumber?.color === "black"
                  ? "border-customBlack bg-customBlack text-white border-4"
                  : ""
              } flex justify-center font-bold text-2xl items-center w-8 h-8 rounded-md mt-1 px-1`}
            >
              {lastHitNumber?.number}
            </div>
          </div>

          <div className="flex">
            <div
              className="flex justify-center items-center p-0.5 py-0 rounded-md font-semibold text-sm text-white"
              onClick={() => setIsAlertAllowed(!isAlertAllowed)}
            >
              <div>
                Alerts{" "}
                <span
                  className={
                    !isAlertAllowed ? "text-red-500" : "text-neonGreen"
                  }
                >
                  {!isAlertAllowed ? "Off!" : "On!"}
                </span>
              </div>
            </div>

            <button
              className="text-white py-1 px-1 rounded-full text-sm font-semibold"
              // onClick={handleClickResetButton}
            >
              Undo
            </button>
            {/* {suggestionActiveDozen && (
              <div className="p-1 rounded">
                <div className="dozen--col flex justify-center items-center bg-[#58d68d] p-0.5 text-sm font-semibold cursor-pointer rounded hover:bg-gray-500 px-2">
                  Dozen {repeatDozen}
                </div>
              </div>
            )}
            {suggestionActiveCol && (
              <div className="p-1 rounded">
                <div className="dozen--col flex justify-center items-center bg-[#58d68d] p-0.5 text-sm font-semibold cursor-pointer rounded hover:bg-gray-500 px-4">
                  Column {repeatCol}
                </div>
              </div>
            )} */}

            <button
              className="text-white py-1 px-1 rounded-full text-sm font-semibold"
              onClick={handleClickResetButton}
            >
              <GrPowerReset className="inline mr-0.5 -mt-0.5 reset-icon" />
              Reset
            </button>
            {/* <div className=" bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
                <div className="menu-bars bg-black text-white px-3 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen" onClick={showSidebar}>
                <TiThMenuOutline size={15} />
                </div>
            </div> */}

            {/* <div className={sidebar ? "nav-menu active" : "nav-menu"}onClick={showSidebar}>
                  <ul className="nav-menu-items ">
                    <li id="navbar-toggle">
                     <AiOutlineClose  size={24}/>
                    </li>
                    <li className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
                    <button
                        onClick={handleClickRowHoverData}
                        className="bg-black flex text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                      >
                        Number &nbsp;{" "}
                        <span
                          className={`${
                            rowHoverEffect ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {rowHoverEffect ? "On" : "Off"}
                        </span>
                      </button>
                    </li>
                    <li className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
                    <button
                        onClick={handleClickDozenHoverData}
                        className="bg-black flex text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                      >
                        Dozen &nbsp; &nbsp; {" "}
                        <span
                          className={`${
                            dozenHoverEffect ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {dozenHoverEffect ? "On" : "Off"}
                        </span>
                      </button>
                    </li>
                    <li className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
                    <button
                        onClick={handleClickColHoverData}
                        className="bg-black flex text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                      >
                        Column &nbsp;&nbsp; {" "}
                        <span
                          className={`${
                            colHoverEffect ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {colHoverEffect ? "On" : "Off"}
                        </span>
                      </button>
                    </li>
                    <li>
                    <div
                      className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400"
                      onClick={() => setShowPopup(!showPopup)}
                    >
                      <button className="bg-black flex text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen">
                        <CgInsights size={24} /> Statistics
                      </button>
                    </div>
                    </li>
                  </ul>
            </div> */}
          </div>
        </div>


        <div
          className="flex justify-between items-center px-10 py-2 max-sm:px-3 pb-3 max-sm:hidden "
          // style={{ backgroundColor: "rgb(81,29,91)" }}
        >
          <div className="flex bg-neutral-300 p-1 rounded-full items-center">
            <p className="bg-black p-1 rounded-full z-10 btns max-sm:text-sm">
              Last Hit Number
            </p>
            {lastHitNumber ? (
              <div
                className={`${
                  lastHitNumber?.color === "red"
                    ? "bg-customRed"
                    : lastHitNumber.color === "black"
                    ? "bg-black"
                    : "bg-customGreen"
                } py-1 flex justify-center items-center w-20 max-sm:w-14 rounded-full -ml-8 max-sm:-ml-7`}
              >
                <p className="text-white ml-6 max-sm:text-xs">
                  {lastHitNumber?.number}
                </p>
              </div>
            ) : (
              <div className="transparent">
                <p className="text-white ml-6"></p>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            {/* {suggestionActiveDozen && (
              <div className="p-1 rounded">
                <div className="flex justify-center items-center bg-[#58d68d] p-1.5 font-semibold cursor-pointer rounded hover:bg-gray-500 px-2">
                  Dozen {repeatDozen}
                </div>
              </div>
            )}
            {suggestionActiveCol && (
              <div className="p-1 rounded">
                <div className="flex justify-center items-center bg-[#58d68d] p-1.5 font-semibold cursor-pointer rounded hover:bg-gray-500 px-4">
                  Column {repeatCol}
                </div>
              </div>
            )} */}
            <div
              className="flex justify-center items-center py-0 font-semibold text-sm text-gray-500 bg-neutral-300 p-1 rounded-full hover:bg-gray-400"
              onClick={() => setIsAlertAllowed(!isAlertAllowed)}
            >
              <div className="bg-black text-white px-5 py-2 rounded-full btns max-sm:text-sm hover:bg-neonGreen cursor-pointer">
                Alerts{" "}
                <span
                  className={
                    !isAlertAllowed ? "text-red-500" : "text-neonGreen"
                  }
                >
                  {!isAlertAllowed ? "Off!" : "On!"}
                </span>
              </div>
            </div>

            {/* <div className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400 flex justify-center items-center">
              <button
                className="bg-black text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                // onClick={handleClickResetButton}
              >
                Undo
              </button>
            </div> */}
            <div className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
              <button
                onClick={handleClickResetButton}
                className="bg-black text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
              >
                Reset
              </button>
            </div>

            {/* //---Hamburger Menu button  */}

            {/* <div className=" bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
                <div className="menu-bars bg-black text-white px-5 py-2 rounded-full btns max-sm:text-sm hover:bg-neonGreen" onClick={showSidebar}>
                <TiThMenuOutline size={17} />
                </div>
            </div>
            <div className={sidebar ? "nav-menu active" : "nav-menu"}onClick={showSidebar}>
                  <ul className="nav-menu-items ">
                    <li id="navbar-toggle">
                     <AiOutlineClose  size={24}/>
                    </li>
                    <li className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
                    <button
                        onClick={handleClickRowHoverData}
                        className="menu-bars bg-black flex text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                      > 
                        Number &nbsp; {" "}
                        <span
                          className={`${
                            rowHoverEffect ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {rowHoverEffect ? "On" : "Off"}
                        </span>
                      </button>
                    </li>
                    <li className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
                    <button
                        onClick={handleClickDozenHoverData}
                        className="menu-bars bg-black text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                      >
                        Dozen &nbsp; &nbsp;{" "}
                        <span
                          className={`${
                            dozenHoverEffect ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {dozenHoverEffect ? "On" : "Off"}
                        </span>
                      </button>
                    </li>
                    <li className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
                    <button
                        onClick={handleClickColHoverData}
                        className="menu-bars bg-black text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                      >
                        Column &nbsp; {" "}
                        <span
                          className={`${
                            colHoverEffect ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {colHoverEffect ? "On" : "Off"}
                        </span>
                      </button>
                    </li>
                    <li>
                    <div
                      className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400"
                      onClick={() => setShowPopup(!showPopup)}
                    >
                      <button className="bg-black flex text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen">
                        <CgInsights size={20} /> &nbsp;Statistics
                      </button>
                    </div>
                    </li>
                  </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div className="px-2 main h-[75.5vh] flex text-white ">
        <div
          className="mt-1 w-[90%] flex justify-center items-center md:h-[76vh] max-[800px]:h-[75vh] max-[600px]:h-full md:py-4"
          // style={{ height: "100vh" }}
        >
          <div
            className="w-[70%]  md:w-[45%] lg:w-[30%] flex justify-between items-center min-[600px]:w-[35%] min-[600px]:-rotate-90 min-[600px]:h-[70vw] max-sm:h-[100%] roulate--grid--proj--4"
            // style={{ height: "70vw" }}
          >
            <div className="w-[100%] h-full max-sm:h-[100%] lg:h-[90%] md:h-[110%] xl:h-[50rem]">
              <div className="w-[82%] ml-[18%] h-[7%] flex">
                <div
                  className={`${
                    repeatLetter === "A" && rowHoverEffect
                      ? "bg-[#58d68d]"
                      : "bg-customGreen"
                  } w-[100%] flex justify-center items-center cursor-pointer border rounded-md`}
                  onClick={() => handleClickNumber("zero", 0, "A", 0, 0)}
                  style={{
                    borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
                  }}
                >
                  <p className="text-white">0</p>
                </div>
                {/* <div
                  className={`${
                    repeatLetter === "A" ? "bg-[#58d68d]" : "bg-customGreen"
                  } w-[50%] flex justify-center items-center cursor-pointer border hover:bg-neonGreen`}
                  onClick={() =>
                    handleClickNumber("doubleZero", "00", "A", 0, 0)
                  }
                  style={{
                    borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
                  }}
                >
                  <p>00</p>
                </div> */}
              </div>

              <div className="w-full h-full flex">
                {/* dozens */}
                <div className="w-[17%] max-lg:w[30rem] font-white border-white h-[86%]">
                  <div
                    className="h-[33.33%] border bgPercentage border-slate-300 flex justify-center relative items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold rounded-md "
                    style={{
                      backgroundColor:
                        repeatDozen === "1" && dozenHoverEffect
                          ? "#58d68d"
                          : "",
                    }}id="dozenContainer1"

                  >
                  
                    <p className="rotate-90 w-[10rem] max-xl:text-sm max-sm:text-xs">
                      1st 12
                    </p>
                    <p
                      className=" bgPercentage text-white text-md rounded-xl text-center  font-bold p-0.5 absolute h-[30px] w-[60px] rotate-90 z-[20] "
                      style={{
                        left: "-53px",
                      }}
                    >
                      {percentagesDozen[1]}%
                    </p>

                  </div>

                  <div
                    className="h-[33.33%] border bgPercentage border-slate-300 flex justify-center relative items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold rounded-md "
                    style={{
                      backgroundColor:
                        repeatDozen === "2" && dozenHoverEffect
                          ? "#58d68d"
                          : "",
                    }}
                    id="dozenContainer2"
                  >
                    <p className="rotate-90 w-[10rem] max-xl:text-sm max-sm:text-xs"
                    
                    >
                      2nd 12
                    </p>
                    <p
                      className=" bgPercentage text-white text-md rounded-xl text-center  font-bold p-0.5 absolute h-[30px] w-[60px] rotate-90 z-[20] "
                      style={{
                        left: "-53px",
                      }}
                    >
                      {percentagesDozen[2]}%
                    </p>
                  </div>

                  <div
                    className="h-[33.33%] border bgPercentage border-slate-300 flex justify-center relative items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold rounded-md "
                    style={{
                      backgroundColor:
                        repeatDozen === "3" && dozenHoverEffect
                          ? "#58d68d"
                          : "",
                    }}
                    id="dozenContainer3"
                  >
                    <p className="rotate-90 w-[10rem] max-xl:text-sm max-sm:text-xs ">
                      3rd 12
                    </p>
                    <p
                      className=" bgPercentage text-white text-md rounded-xl text-center  font-bold p-0.5 absolute h-[30px] w-[60px] rotate-90 z-[20] "
                      style={{
                        left: "-53px",
                      }}
                    >
                      {percentagesDozen[3]}%
                    </p>
                  </div>
                  
                </div>
                
                <div className="w-full h-[93%] flex flex-wrap">
                  {/* {data.map((item) => {
                    return (
                      <div
                        className={`w-[33.33%] flex justify-center items-center border cursor-pointer number--divs`}
                        onClick={() =>
                          handleClickNumber(
                            item.numString,
                            item.num,
                            item.doz,
                            item.dozen,
                            item.col,
                            item.oddOrEven,
                            item.color,
                            item.range,
                            item.ssRange,
                            item.dsRange,
                            item.wTracker,
                            item.quadra,
                            item.letter
                          )
                        }
                        style={{
                          backgroundColor:
                            item.letter === repeatLetter && rowHoverEffect
                              ? "#58d68d"
                              : item.bg,
                          borderColor:
                            theme === "light" ? "#F5F5F5" : "#0A1F44",
                        }}
                        key={item.num}
                      >
                        {item.num}
                      </div>
                    );
                  })} */}


                    {data.map((item) => {
                      return (
                        <div
                          id={`number-container-${item.num}`}
                          className={`
                            w-[33.33%] 
                            flex 
                            justify-center 
                            items-center 
                            border 
                            cursor-pointer 
                            number--divs
                            relative
                            overflow-hidden
                            backdrop-blur-sm
                            bg-opacity-30
                            hover:backdrop-blur-md
                            rounded-md
                          `}
                          style={{
                            backgroundColor:
                              item.letter === repeatLetter && rowHoverEffect
                                ? "#58d68d"
                                : item.bg,
                            borderColor:
                              theme === "light" ? "#F5F5F5" : "#0A1F44",
                          }}
                          onClick={() =>
                            handleClickNumber(
                              item.numString,
                              item.num,
                              item.doz,
                              item.dozen,
                              item.col,
                              item.oddOrEven,
                              item.color,
                              item.range,
                              item.ssRange,
                              item.dsRange,
                              item.wTracker,
                              item.quadra,
                              item.letter
                            )
                          }
                          key={item.num}
                        >
                          {/* Glassmorphism overlay */}
                          <div 
                            className="
                              absolute 
                              inset-0 
                              bg-white 
                              bg-opacity-10 
                              backdrop-blur-sm 
                              border-opacity-10
                              pointer-events-none
                            "
                          ></div>
                          
                          {/* Number */}
                          <span className="relative z-10 text-white">
                            {item.num}
                          </span>
                        </div>
                      );
                    })}

                  {/* cols */}
                  <div className="w-full flex border-white font-white">
                  <div
                    className="w-[33.3%] h-full bgPercentage border border-slate-300 relative flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold rounded-md"
                    style={{
                      backgroundColor:
                        repeatCol === "1" && colHoverEffect ? "#58d68d" : "", // Preserves your existing conditional background color logic
                    }}
                    id="columnContainer1"
                  >
                    2 - 1
                    <p
                      className=" bgPercentage text-white text-md text-center  rounded-xl font-bold p-1 absolute w-[60px] h-[32px]  z-[20] "
                      style={{
                        bottom: "-35px",
                      }}
                    >
                      {percentagesColumn[1]}%
                    </p>
                  </div>

                    <div
                      className="w-[33.3%] bgPercentage h-full border border-slate-300 relative flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold rounded-md"
                      style={{
                        backgroundColor:
                          repeatCol === "2" && colHoverEffect ? "#58d68d" : "",
                      }}
                      id="columnContainer2"
                    >
                      2 - 1
                      <p
                      className=" bgPercentage text-white text-md text-center  rounded-xl font-bold p-1 absolute w-[60px] h-[32px]  z-[20] "
                      style={{
                        bottom: "-35px",
                      }}
                    >
                      {percentagesColumn[2]}%
                    </p>
                    </div>
                    <div
                      className="w-[33.3%] h-full bgPercentage border border-slate-300 relative flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold rounded-md"
                      style={{
                        backgroundColor:
                          repeatCol === "3" && colHoverEffect ? "#58d68d" : "",
                      }}
                      id="columnContainer3"
                    >
                      2 - 1
                      <p
                      className=" bgPercentage text-white text-md text-center  rounded-xl font-bold p-1 absolute w-[60px] h-[32px]  z-[20] "
                      style={{
                        bottom: "-35px",
                      }}
                    >
                      {percentagesColumn[3]}%
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

               
                


        </div>

        <div className="w-[10%] h-full  max-sm:flex justify-center items-center statistics ">
          <div
            className="border rounded-full flex justify-center bg-black items-center relative cursor-pointer z-30 hover:bg-neonGreen"
            onClick={() => setShowPopup(!showPopup)}
            style={{ padding: "5px", width: "50px" }}
          >
            <CgInsights size={24} />
          </div>

          
        </div>
      </div>
      
      {/* <div className="h-[40vh] border max-sm:hidden">
        <table className="border w-[20rem]">
          <tr>
            <th className="w-[33.3%] bg-yellow-500 text-black">Catagory</th>
            <th className="w-[33.3%] bg-green-600 p-1">Win</th>
            <th className="w-[33.3%] bg-red-600 p-1">Loss</th>
          </tr>

          <tr>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              Win
            </td>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              {analyzeData.winPerData}
            </td>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              {analyzeData.lossPerData}
            </td>
          </tr>

          <tr>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              Dozen
            </td>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              {analyzeData.dozenWinPer}
            </td>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              {analyzeData.dozenLossPer}
            </td>
          </tr>

          <tr>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              Column
            </td>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              {analyzeData.colWinPer}
            </td>
            <td className="bg-customGray text-black font-semibold text-center p-1 border-2 border-black">
              {analyzeData.colLossPer}
            </td>
          </tr>
        </table>

        <p>Win - {analyzeData.winPerData}</p>
        <p>Loss - {analyzeData.lossPerData}</p>
        <p>dozen win - {analyzeData.dozenWinPer}</p>
        <p>dozen Loss - {analyzeData.dozenLossPer}</p>
        <p>col win - {analyzeData.colWinPer}</p>
        <p>col Loss - {analyzeData.colLossPer}</p>
      </div> */}

      <div
        className="w-full h-screen absolute top-0 flex justify-center items-center "
        style={{
          display: showPopup ? "flex" : "none",
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
          minHeight: "100vh",
          overflow: "scroll",
          scrollbarWidth: "",
        }}
        onClick={() => setShowPopup(false)}
      >
        <div className="max-sm:mr-4">
          {/* Table 1 of Statistics */}
          <div className="flex justify-around  flex-col w-[35rem] max-md:w-[22rem] max-sm:w-[21rem]  "
            style={{ marginTop: "65rem" }}
          >
            <div className="bg-purple-600 text-white py-1 font-bold text-xl text-center relative rounded-3xl">
              Category
              <div
                className="text-black p-1 absolute  cursor-pointer bg-white w-6 h-6 flex justify-center items-center rounded-full"
                onMouseEnter={() => setI_btn(true)}
                onMouseLeave={() => setI_btn(false)}
                style={{ right: "15px", bottom: "6px" }}
              >
                i
              </div>
              <div
                className="bg-purple-500 p-2 flex justify-between mb-4 text-start  items-start text-white w-60 h-30 max-sm:w-45 max-sm:h-35 absolute bottom-6 max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%]"
                style={{ display: i_btn ? "flex" : "none" }}
                id="statsInfo"
              >
                <div
                  className="text-start"
                  style={{ fontSize: "11px", paddingLeft: "5px" }}
                >
                  <p>
                    <span className="font-bold me-2">Hot : </span>&nbsp; &nbsp;
                    &nbsp; Good table For betting ✅
                  </p>

                  <p className="border-y my-1 py-1">
                    <span className="font-bold me-2">Stable : </span>Decent
                    choice,be cautious ⚖️
                  </p>

                  <p>
                    <span className="font-bold me-2">Cold : </span> &nbsp;
                    &nbsp;Avoid, too unpredictable ❌
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-2 gap-1">
              <div
                className=" border-2 border-purple-500  p-3 rounded-xl"
                style={{
                  position: "relative",
                  width: "33%",
                  display: "inline-block",
                }}
              >
                <h2 className="text-white  text-center py-1 bg-purple-500 rounded-xl font-semibold sm:text-xs">
                  Numbers
                </h2>
                <div className="p-3">
                <img
                  src={determineImage.src}
                  width="100%"
                  alt={determineImage.label}
                  className="rounded-full"
                />
                </div>
                {/* Overlayed text */}
                <div className="text-center">
                  <button
                    onClick={handleClickRowHoverData}
                    className="menu-bars bg-white text-white px-4 font-bold mt-2 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                  >
                    {" "}
                    <span
                      className={`${
                        rowHoverEffect ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {rowHoverEffect ? "On" : "Off"}
                    </span>
                  </button>
                </div>
              </div>
              <div
                className="border-2 border-purple-500  p-3 rounded-xl"
                style={{
                  position: "relative",
                  width: "33%",
                  display: "inline-block",
                }}
              >
                <h2 className="text-white  text-center bg-purple-500 py-1 rounded-xl font-semibold sm:text-xs">
                  Dozen
                </h2>
               <div className="p-3">
               <img
                  src={determineStatusAndImage.src}
                  width="100%"
                  alt={determineStatusAndImage.label}
                  className="rounded-full"
                />
               </div>
                {/* Overlayed text */}
                <div className="text-center mt-2">
                  <button
                    onClick={handleClickDozenHoverData}
                    className="menu-bars bg-white text-white px-4 font-bold  rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                  >
                    {" "}
                    <span
                      className={`${
                        dozenHoverEffect ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {dozenHoverEffect ? "On" : "Off"}
                    </span>
                  </button>
                </div>
              </div>
              <div
                className="border-2 border-purple-500  p-3 rounded-xl"
                style={{
                  position: "relative",
                  width: "33%",
                  display: "inline-block",
                }}
              >
                <h2 className="text-white  text-center bg-purple-500 py-1 rounded-xl font-semibold sm:text-xs">
                  Column
                </h2>
                <div className="p-3 ">
                <img
                  src={determineStatusAndImage1.src}
                  width="100%"
                  alt={determineStatusAndImage1.label}
                  className="rounded-full"
                />
                </div>
                {/* Overlayed text */}
                <div className="text-center mt-2">
                  <button
                    onClick={handleClickColHoverData}
                    className="menu-bars bg-white text-white font-bold px-4 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                  >
                    {" "}
                    <span
                      className={`${
                        colHoverEffect ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {colHoverEffect ? "On" : "Off"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="flex justify-around  flex-col w-[35rem] max-md:w-[22rem] mt-10 max-sm:w-[21rem]" >
          <div className="flex justify-around bg-purple-600 text-white rounded-3xl py-1 text-md font-bold sm:text-md ">
              <div className="   justify-center flex relative " style={{width:"33%"}}>
                <span>Numbers</span> <div
                    className="text-black cursor-pointer bg-white w-6 p-2 h-6 flex justify-center items-center rounded-full "
                    onMouseEnter={() => setI6_btn(true)}
                    onMouseLeave={() => setI6_btn(false)}
                  >
                    i
                  </div>
                  {i6_btn && (
                    <div
                      className="bg-purple-500 p-2 flex justify-between mb-4 text-start items-start text-white w-60 h-30 max-sm:w-45 max-sm:h-35 absolute max-sm:text-xs max-sm:left-[10%] max-lg:-right-[15%] -right-[35%] bottom-6"
                      id="statsInfo"
                    >
                      <div
                        className="text-start"
                        style={{ fontSize: "11px", paddingLeft: "5px" }}
                      >
                        <p>
                          <span className="font-bold h-5 w-5 p-1 text-center bg-customRed ps-2 rounded-md"> 0 </span>&nbsp; &nbsp; &nbsp;
                          2,4,6,13,15,17,19,21,25,27,32,34
                        </p>

                        <p className="border-y my-1 py-1">
                        <span className="font-bold h-5 w-5 p-1 text-center bg-customRed ps-2 rounded-md"> 1 </span> &nbsp; &nbsp; 1,5,8,10,11,16,20,23,24,30,33,36
                        </p>

                        <p>
                        <span className="font-bold h-5 w-5 p-1 text-center bg-customRed ps-2 rounded-md"> 3 </span> &nbsp; &nbsp;3,7,9,12,14,18,22,26,28,29,31,35
                        </p>
                      </div>
                    </div>
                  )}
              </div>
              <div style={{ width: "33%" }} className="text-center flex items-center relative">
                <span>Performance</span>
                  <div
                    className="text-black cursor-pointer bg-white w-6 p-2 h-6 flex justify-center items-center rounded-full "
                    onMouseEnter={() => setI1_btn(true)}
                    onMouseLeave={() => setI1_btn(false)}
                  >
                    i
                  </div>
                  {i1_btn && (
                    <div
                      className="bg-purple-500 p-2 flex justify-between mb-4 text-start items-start text-white w-60 h-30 max-sm:w-45 max-sm:h-35 absolute max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%] bottom-6"
                      id="statsInfo"
                    >
                      <div
                        className="text-start"
                        style={{ fontSize: "11px", paddingLeft: "5px" }}
                      >
                        <p>
                          <span className="font-bold me-2">Hot : </span>&nbsp; &nbsp; &nbsp;
                          Good table For betting ✅
                        </p>

                        <p className="border-y my-1 py-1">
                          <span className="font-bold me-2">Stable : </span>Decent choice, be cautious ⚖️
                        </p>

                        <p>
                          <span className="font-bold me-2">Cold : </span> &nbsp; &nbsp;Avoid,
                          too unpredictable ❌
                        </p>
                      </div>
                    </div>
                  )}
              </div>
              <div style={{width:"33%"}} className="text-center">
                Long Term
              </div>
            </div>
            <div className="flex flex-col mt-2 gap-1">



              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center items-center"
                >
                  <h2 className="text-white text-center p-2 bg-purple-500 rounded-xl font-semibold sm:text-xs px-4  ">
                    0
                  </h2>
                </div>
                {/* Overlayed text */}
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center items-center"
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      width: "33%",
                    }}
                    className="text-center pt-1"
                  >
                    {(() => {
                      const winPer = statsData.Agroup;
                      const lossPer = statsData.Agroup_loss;
                      const total = winPer + lossPer;
                      const winPercentage = (winPer / total) * 100;

                      return winPercentage >= 70
                        ? `Hot`
                        : winPercentage >= 50
                        ? `Stable`
                        : `Cold`;
                    })()}
                  </p>
                </div>
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center flex-col items-center"
                >
                  <GaugeChart
                    id="gauge-chart-1"
                    nrOfLevels={10}
                    percent={rowDataScores.A / 666}
                    colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                    arcWidth={0.3}
                    hideText={true}
                    style={{ width: "100px", height: "50px" }} // Adjust width and height as needed
                  />
                  <p className="text-white font-bold text-center">
                    {
                      NumberHSC.A
                    }
                  </p>
                </div>
              </div>


              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center items-center"
                >
                  <h2 className="text-white text-center p-2 bg-purple-500 rounded-xl font-semibold sm:text-xs px-4  ">
                    1
                  </h2>
                </div>
                {/* Overlayed text */}
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center items-center"
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      width: "33%",
                    }}
                    className="text-center pt-1"
                  >
                    {(() => {
                      const winPer = statsData.Bgroup;
                      const lossPer = statsData.Bgroup_loss;
                      const total = winPer + lossPer;
                      const winPercentage = (winPer / total) * 100;

                      return winPercentage >= 70
                        ? `Hot`
                        : winPercentage >= 50
                        ? `Stable`
                        : `Cold`;
                    })()}
                  </p>
                </div>
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center flex-col items-center"
                >
                  <GaugeChart
                    id="gauge-chart-1"
                    nrOfLevels={10}
                    percent={rowDataScores.B / 666}
                    colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                    arcWidth={0.3}
                    hideText={true}
                    style={{ width: "100px", height: "50px" }}
                  />
                  <p className="text-white font-bold text-center">
                    {NumberHSC.B}
                  </p>
                </div>
              </div>


              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center items-center"
                >
                  <h2 className="text-white text-center p-2 bg-purple-500 rounded-xl font-semibold sm:text-xs px-4  ">
                    3
                  </h2>
                </div>
                {/* Overlayed text */}
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center items-center"
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      width: "33%",
                    }}
                    className="text-center pt-1"
                  >
                    {(() => {
                      const winPer = statsData.Cgroup;
                      const lossPer = statsData.Cgroup_loss;
                      const total = winPer + lossPer;
                      const winPercentage = (winPer / total) * 100;

                      return winPercentage >= 70
                        ? `Hot`
                        : winPercentage >= 50
                        ? `Stable`
                        : `Cold`;
                    })()}
                  </p>
                </div>
                <div
                  style={{ width: "33%" }}
                  className="flex justify-center flex-col items-center"
                >
                  <GaugeChart
                    id="gauge-chart-1"
                    nrOfLevels={10}
                    percent={rowDataScores.C / 666}
                    colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                    arcWidth={0.3}
                    hideText={true}
                    style={{ width: "100px", height: "50px" }}
                  />
                  <p className="text-white font-bold text-center">
                  {NumberHSC.C}
                  </p>
                </div>

              </div>
              {/* <div 
                      className="border border-2 border-purple-500  p-3 rounded-xl"
                      style={{
                        position: "relative",
                        width: "33%",
                        display: "inline-block",
                      }}
                      >
                        <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">B Group</h2>
                          <GaugeChart
                              id="gauge-chart-1"
                              nrOfLevels={10}
                              percent={(rowDataScores.B/666)}
                              colors={["#A78BFA","#7C3AED" ,"#8B5CF6","#5B21B6" ]}
                              arcWidth={0.3}
                              hideText={true}
                          />
                         
                          <p
                              style={{
                                  fontSize: '1.2rem',
                                  fontWeight: 'bold',
                                  color: '#FFFFFF',
                              }}
                              className="text-center pt-1"
                          >

                            {(() => {
                              const winPer = statsData.Bgroup;
                              const lossPer = statsData.Bgroup_loss;
                              const total = winPer + lossPer;
                              const winPercentage = (winPer / total) * 100;

                              return winPercentage >= 70
                                ? `Hot`
                                : winPercentage >= 50
                                ? `Stable`
                                : `Cold`;
                            })()}
                          </p>
                      </div> */}
              {/* <div 
                      className="border border-2 border-purple-500  p-3 rounded-xl"
                      style={{
                        position: "relative",
                        width: "33%",
                        display: "inline-block",
                      }}
                      >
                        <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">C Group</h2>
                          <GaugeChart
                              id="gauge-chart-1"
                              nrOfLevels={10}
                              percent={(rowDataScores.C/666)}
                              colors={["#A78BFA","#7C3AED" ,"#8B5CF6","#5B21B6" ]}
                              arcWidth={0.3}
                              hideText={true}
                          />
                          <p
                              style={{
                                  fontSize: '1.2rem',
                                  fontWeight: 'bold',
                                  color: '#FFFFFF',
                              }}
                              className="text-center pt-1"
                          >

                            {(() => {
                              const winPer = statsData.Cgroup;
                              const lossPer = statsData.Cgroup_loss;
                              const total = winPer + lossPer;
                              const winPercentage = (winPer / total) * 100;

                              return winPercentage >= 70
                                ? `Hot`
                                : winPercentage >= 50
                                ? `Stable`
                                : `Cold`;
                            })()}
                          </p>
                      </div> */}
            </div>
          </div>


          <div className="flex justify-around  flex-col w-[35rem] max-md:w-[22rem] my-10 max-sm:w-[21rem]">
            <div className="flex justify-around bg-purple-600 text-white rounded-3xl py-1 text-md font-bold sm:text-md ">
              <div className="   text-center  " style={{width:"33%"}}>
                Dozen
                
              </div>
              <div style={{ width: "33%" }} className="text-center flex items-center relative">
                <span>Performance</span>
                <div
                    className="text-black cursor-pointer bg-white w-6 p-2 h-6 flex justify-center items-center rounded-full "
                    onMouseEnter={() => setI2_btn(true)}
                    onMouseLeave={() => setI2_btn(false)}
                  >
                    i
                  </div>
                  {i2_btn && (
                    <div
                      className="bg-purple-500 p-2 flex justify-between mb-4 text-start items-start text-white w-60 h-30 max-sm:w-45 max-sm:h-35 absolute max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%] bottom-6"
                      id="statsInfo"
                    >
                      <div
                        className="text-start"
                        style={{ fontSize: "11px", paddingLeft: "5px" }}
                      >
                        <p>
                          <span className="font-bold me-2">Hot : </span>&nbsp; &nbsp; &nbsp;
                          Good table For betting ✅
                        </p>

                        <p className="border-y my-1 py-1">
                          <span className="font-bold me-2">Stable : </span>Decent choice, be cautious ⚖️
                        </p>

                        <p>
                          <span className="font-bold me-2">Cold : </span> &nbsp; &nbsp;Avoid,
                          too unpredictable ❌
                        </p>
                      </div>
                    </div>
                  )}
              </div>
              <div style={{width:"33%"}} className="text-center">
                Long Term
              </div>
            </div>
            <div className="flex flex-col mt-2 gap-1">

              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <h2 className="text-white text-center bg-purple-500 rounded-xl py-1 font-semibold sm:text-xs px-4  ">
                    Dozen 1
                    </h2>
                  </div>
                  {/* Overlayed text */}
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        width: "33%",
                      }}
                      className="text-center pt-1"
                    >
                      {(() => {
                      const winPer = statsData.dozen1;
                      const lossPer = statsData.dozen1_loss;
                      const total = winPer + lossPer;
                      const winPercentage = (winPer / total) * 100;

                      return winPercentage >= 70
                        ? `Hot`
                        : winPercentage >= 50
                        ? `Stable`
                        : `Cold`;
                    })()}
                    </p>
                  </div>
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center flex-col items-center"
                  >
                    <GaugeChart
                      id="gauge-chart-1"
                      nrOfLevels={10}
                      percent={dozenScores[1]/ 666}
                      colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                      arcWidth={0.3}
                      hideText={true}
                      style={{ width: "100px", height: "50px" }} // Adjust width and height as needed
                    />
                    <p className="text-white font-bold text-center">{dozenHSC[1]}</p>
                  </div>
              </div>


              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <h2 className="text-white text-center bg-purple-500 rounded-xl font-semibold sm:text-xs py-1 px-4  ">
                    Dozen 2
                    </h2>
                  </div>
                  {/* Overlayed text */}
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        width: "33%",
                      }}
                      className="text-center pt-1"
                    >
                      {(() => {
                      const winPer = statsData.dozen2;
                      const lossPer = statsData.dozen2_loss;
                      const total = winPer + lossPer;
                      const winPercentage = (winPer / total) * 100;

                      return winPercentage >= 70
                        ? `Hot`
                        : winPercentage >= 50
                        ? `Stable`
                        : `Cold`;
                    })()}
                    </p>
                  </div>
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center flex-col items-center"
                  >
                    <GaugeChart
                      id="gauge-chart-1"
                      nrOfLevels={10}
                      percent={dozenScores[2]/ 666}
                      colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                      arcWidth={0.3}
                      hideText={true}
                      style={{ width: "100px", height: "50px" }} // Adjust width and height as needed
                    />
                    <p className="text-white font-bold text-center">{dozenHSC[2]}</p>
                  </div>
              </div>


              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <h2 className="text-white text-center bg-purple-500 rounded-xl py-1 font-semibold sm:text-xs px-4  ">
                    Dozen 3
                    </h2>
                  </div>
                  {/* Overlayed text */}
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        width: "33%",
                      }}
                      className="text-center pt-1"
                    >
                      {(() => {
                      const winPer = statsData.dozen3;
                      const lossPer = statsData.dozen3_loss;
                      const total = winPer + lossPer;
                      const winPercentage = (winPer / total) * 100;

                      return winPercentage >= 70
                        ? `Hot`
                        : winPercentage >= 50
                        ? `Stable`
                        : `Cold`;
                    })()}
                    </p>
                  </div>
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center flex-col items-center"
                  >
                    <GaugeChart
                      id="gauge-chart-1"
                      nrOfLevels={10}
                      percent={dozenScores[3]/ 666}
                      colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                      arcWidth={0.3}
                      hideText={true}
                      style={{ width: "100px", height: "50px" }} // Adjust width and height as needed
                    />
                    <p className="text-white font-bold text-center">{dozenHSC[3]}</p>
                  </div>
              </div>
            </div>
          </div>


          <div className="flex justify-around  flex-col w-[35rem] mb-5 max-md:w-[22rem] max-sm:w-[21rem]">
          <div className="flex justify-around bg-purple-600 text-white rounded-3xl py-1 text-md font-bold sm:text-md ">
              <div className="   text-center  " style={{width:"33%"}}>
                Column
                
              </div>
              <div style={{ width: "33%" }} className="text-center flex items-center relative">
                <span>Performance</span>
                <div
                    className="text-black cursor-pointer bg-white w-6 p-2 h-6 flex justify-center items-center rounded-full"
                    onMouseEnter={() => setI3_btn(true)}
                    onMouseLeave={() => setI3_btn(false)}
                  >
                    i
                  </div>
                  {i3_btn && (
                    <div
                      className="bg-purple-500 p-2 flex justify-between mb-4 text-start items-start text-white w-60 h-30 max-sm:w-45 max-sm:h-35 absolute max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%] bottom-6"
                      id="statsInfo"
                    >
                      <div
                        className="text-start"
                        style={{ fontSize: "11px", paddingLeft: "5px" }}
                      >
                        <p>
                          <span className="font-bold me-2">Hot : </span>&nbsp; &nbsp; &nbsp;
                          Good table For betting ✅
                        </p>

                        <p className="border-y my-1 py-1">
                          <span className="font-bold me-2">Stable : </span>Decent choice, be cautious ⚖️
                        </p>

                        <p>
                          <span className="font-bold me-2">Cold : </span> &nbsp; &nbsp;Avoid,
                          too unpredictable ❌
                        </p>
                      </div>
                    </div>
                  )}
              </div>

              <div style={{width:"33%"}} className="text-center">
                Long Term
              </div>
            </div>
            <div className="flex mt-2 flex-col gap-1">


              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <h2 className="text-white text-center bg-purple-500 rounded-xl py-1 font-semibold sm:text-xs px-4  ">
                    Column 1
                    </h2>
                  </div>
                  {/* Overlayed text */}
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        width: "33%",
                      }}
                      className="text-center pt-1"
                    >
                      {(() => {
                    const winPer = statsData.col1;
                    const lossPer = statsData.col1_loss;
                    const total = winPer + lossPer;
                    const winPercentage = (winPer / total) * 100;

                    return winPercentage >= 70
                      ? `Hot`
                      : winPercentage >= 50
                      ? `Stable`
                      : `Cold`;
                  })()}
                    </p>
                  </div>
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center flex-col items-center"
                  >
                    <GaugeChart
                      id="gauge-chart-1"
                      nrOfLevels={10}
                      percent={columnScores[1]/ 666}
                      colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                      arcWidth={0.3}
                      hideText={true}
                      style={{ width: "100px", height: "50px" }} // Adjust width and height as needed
                    />
                  <p className="text-white font-bold text-center">{columnHSC[1]}</p>
                  </div>
              </div>



              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <h2 className="text-white text-center bg-purple-500 py-1 rounded-xl font-semibold sm:text-xs px-4  ">
                    Column 2
                    </h2>
                  </div>
                  {/* Overlayed text */}
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        width: "33%",
                      }}
                      className="text-center pt-1"
                    >
                      {(() => {
                    const winPer = statsData.col2;
                    const lossPer = statsData.col2_loss;
                    const total = winPer + lossPer;
                    const winPercentage = (winPer / total) * 100;

                    return winPercentage >= 70
                      ? `Hot`
                      : winPercentage >= 50
                      ? `Stable`
                      : `Cold`;
                  })()}
                    </p>
                  </div>
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center flex-col items-center"
                  >
                    <GaugeChart
                      id="gauge-chart-1"
                      nrOfLevels={10}
                      percent={columnScores[2]/ 666}
                      colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                      arcWidth={0.3}
                      hideText={true}
                      style={{ width: "100px", height: "50px" }} // Adjust width and height as needed
                    />
                   <p className="text-white font-bold text-center">{columnHSC[2]}</p>
                  </div>
              </div>


              <div className="flex border-2 border-purple-500  p-1 rounded-xl">
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <h2 className="text-white text-center bg-purple-500 rounded-xl py-1 font-semibold sm:text-xs px-4  ">
                    Column 3
                    </h2>
                  </div>
                  {/* Overlayed text */}
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center items-center"
                  >
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        width: "33%",
                      }}
                      className="text-center pt-1"
                    >
                      {(() => {
                    const winPer = statsData.col3;
                    const lossPer = statsData.col3_loss;
                    const total = winPer + lossPer;
                    const winPercentage = (winPer / total) * 100;

                    return winPercentage >= 70
                      ? `Hot`
                      : winPercentage >= 50
                      ? `Stable`
                      : `Cold`;
                  })()}
                    </p>
                  </div>
                  <div
                    style={{ width: "33%" }}
                    className="flex justify-center flex-col items-center"
                  >
                    <GaugeChart
                      id="gauge-chart-1"
                      nrOfLevels={10}
                      percent={columnScores[3]/ 666}
                      colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                      arcWidth={0.3}
                      hideText={true}
                      style={{ width: "100px", height: "50px" }} // Adjust width and height as needed
                    />
                   <p className="text-white font-bold text-center">{columnHSC[3]}</p>
                  </div>
              </div>
              {/* <div
                className="border border-2 border-purple-500  p-3 rounded-xl"
                style={{
                  position: "relative",
                  width: "33%",
                  display: "inline-block",
                }}
              >
                <h2 className="text-white mb-5 text-center bg-purple-500 rounded-xl font-semibold">
                  Column 3
                </h2>
                <GaugeChart
                  id="gauge-chart-1"
                  nrOfLevels={10}
                  percent={columnScores[3] / 666}
                  colors={["#A78BFA", "#7C3AED", "#8B5CF6", "#5B21B6"]}
                  arcWidth={0.3}
                  hideText={true}
                />
                
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                  }}
                  className="text-center pt-1"
                >
                  {(() => {
                    const winPer = statsData.col3;
                    const lossPer = statsData.col3_loss;
                    const total = winPer + lossPer;
                    const winPercentage = (winPer / total) * 100;

                    return winPercentage >= 70
                      ? `Hot`
                      : winPercentage >= 50
                      ? `Stable`
                      : `Cold`;
                  })()}
                </p>
              </div> */}
            </div>
          </div>
         
         

          {/* <table className="border w-[35rem] max-md:w-[22rem] max-sm:w-[18rem] mt-6">
            <tr className="max-sm:h-20 max-md:h-20">
              <th className="w-[30%] max-sm:w-[30] border py-2 bg-yellow-500 text-black">
                Numbers
              </th>
              <th className="w-[40%] max-sm:w-[50] border bg-yellow-500 text-black break-words relative">
                Hot/Stable/Cold
                <div
                  className="text-gray-400 absolute  cursor-pointer bg-neutral-700 w-5 h-5 flex justify-center items-center rounded-full"
                  onMouseEnter={() => setI6_btn(true)}
                  onMouseLeave={() => setI6_btn(false)}
                  style={{ right: "10px", bottom: "6px" }}
                >
                  i
                </div>
                <div
                  className="bg-customPurple p-2 flex justify-between mb-4 text-start  items-start text-white w-60 h-24 max-sm:w-45 max-sm:h-35 absolute bottom-6 max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%]"
                  style={{ display: i6_btn ? "flex" : "none" }}
                  id="statsInfo"
                >
                  <div
                    className="text-start"
                    style={{ fontSize: "11px", paddingLeft: "5px" }}
                  >
                    <p>
                      <span className="font-bold me-2">Hot : </span>&nbsp;
                      &nbsp; &nbsp; Good table For betting ✅
                    </p>

                    <p className="border-y my-1 py-1">
                      <span className="font-bold me-2">Stable : </span>Decent
                      choice,be cautious ⚖️
                    </p>

                    <p>
                      <span className="font-bold me-2">Cold : </span> &nbsp;
                      &nbsp;Avoid, too unpredictable ❌
                    </p>
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                A-Group
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.Agroup;
                  const lossPer = statsData.Agroup_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.Agroup;
                  const lossPer = statsData.Agroup_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                B-Group
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.Bgroup;
                  const lossPer = statsData.Bgroup_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.Bgroup;
                  const lossPer = statsData.Bgroup_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                C-Group
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.Cgroup;
                  const lossPer = statsData.Cgroup_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.Cgroup;
                  const lossPer = statsData.Cgroup_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>
          </table>


          <table className="border w-[35rem] max-md:w-[22rem] max-sm:w-[18rem]">
            <tr className="max-sm:h-20 max-md:h-20">
              <th className="w-[30%] max-sm:w-[30] border py-2 bg-yellow-500 text-black">
                Dozen
              </th>
              <th className="w-[40%] max-sm:w-[50] border bg-yellow-500 text-black break-words relative">
                Hot/Stable/Cold
              </th>
            </tr>
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                1st Dozen
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.dozen1;
                  const lossPer = statsData.dozen1_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.dozen1;
                  const lossPer = statsData.dozen1_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>

            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                2nd Dozen
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.dozen2;
                  const lossPer = statsData.dozen2_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.dozen2;
                  const lossPer = statsData.dozen2_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                3rd Dozen
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.dozen3;
                  const lossPer = statsData.dozen3_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.dozen3;
                  const lossPer = statsData.dozen3_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>
          </table>


          <table className="border w-[35rem] max-md:w-[22rem] max-sm:w-[18rem]">
            <tr className="max-sm:h-20 max-md:h-20">
              <th className="w-[30%] max-sm:w-[30] border py-2 bg-yellow-500 text-black">
                Columns
              </th>
              <th className="w-[40%] max-sm:w-[50] border bg-yellow-500 text-black break-words relative">
                Hot/Stable/Cold
              </th>
            </tr>
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                Column 1
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.col1;
                  const lossPer = statsData.col1_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.col1;
                  const lossPer = statsData.col1_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>

            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                column2
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.col2;
                  const lossPer = statsData.col2_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.col2;
                  const lossPer = statsData.col2_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                column3
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = statsData.col3;
                  const lossPer = statsData.col3_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? "bg-red-500 text-white"
                    : winPercentage >= 50
                    ? "bg-transparent"
                    : "bg-green-300 text-black";
                })()}`}
              >
                {(() => {
                  const winPer = statsData.col3;
                  const lossPer = statsData.col3_loss;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
            </tr>
          </table> */}

          {/* <p>Win - {analyzeData.winPerData}</p>
        <p>Loss - {analyzeData.lossPerData}</p>
        <p>dozen win - {analyzeData.dozenWinPer}</p>
        <p>dozen Loss - {analyzeData.dozenLossPer}</p>
        <p>col win - {analyzeData.colWinPer}</p>
        <p>col Loss - {analyzeData.colLossPer}</p> */}

          {/* 2nd table Agroup Bgroup Cgroup */}

          
        </div>
      </div>
      
      <section className="max-sm:w-[85vw] max-sm:mt-12 w-[80vw] mx-auto mt-10">

      



     
          <History historyData={historyData} isAlertAllowed={isAlertAllowed} />
        </section>

      <div
        className="h-[100%] text-center mt-5 w-full overflow-y-scroll rounded-xl p-2 scrollOff"
        // className="h-[35vh] mt-5 w-full rounded-xl p-2 flex justify-center items-center flex-col"
        style={{
          background:
            theme === "dark"
              ? `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(${background}) center center no-repeat`
              : `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 255.9)),url(${background}) center center no-repeat`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          border: theme === "dark" ? "white 2px solid" : "black 2px solid",
        }}
      >
        <h2
          className={`text-lg font-bold my-4 bg-purplegrad rounded-xl py-2 ${
            theme === "dark" ? "text-white" : "text-black"

          }`}
        >
          Money Management Tool
        </h2> 
        <SpinCycleMoney/>
      </div>

      {planLockScreen && <Lock setPlanLockScreen={setPlanLockScreen} />}
    </>
  );
};

export default Project4;
 {/* <button
          onClick={() => setMoneyManagementData([])}
          className="border py-1 px-4 rounded-lg mb-2 mx-2"
        >
          Reset
        </button>
        <button
          onClick={handleClickResetUnitData}
          className="border py-1 px-4 rounded-lg mb-2 mx-2"
        >
          Lock Profit {lockProfitValue}
        </button>
        <MoneyManagementTable
          moneyManagementData={moneyManagementData}
          theme={theme}
          lockProfitValue={lockProfitValue}
        /> */}

        // <div className="flex gap-4">
        //           {Object.entries(highestValues).map(([groupName, { highestKey, highestWin, highestFrom }]) => (
        //               <div key={groupName} className="bg-white p-1 shadow-lg rounded-lg border transform rotate-90">
        //               <h2 className="text-xl font-semibold text-gray-700">{groupName}</h2>
        //               {/* <p className="text-gray-500 mt-2">Source: {highestFrom}</p> */}
        //               <p className="text-lg text-gray-800">
        //                   <strong>{highestKey}</strong>:
        //               </p>
        //               </div>
        //           ))}
        //         </div>