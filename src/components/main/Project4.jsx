import React, { useEffect, useState } from "react";
import History from "../reuse/project1/history/History.jsx";
import background from "../../assets/imgs/2002.i029.002_realistic-poker-club-illustration.jpg";
import { data } from "../reuse/project4/logic/RouletteData.js";
import "../../Style/Main.css";
import Nav from "../nav/nav.jsx";
import { GrPowerReset } from "react-icons/gr";
import { useToast } from "../resources/Toast.jsx";

const Project4 = ({ theme, setTheme }) => {
  const [isAlertAllowed, setIsAlertAllowed] = useState(false);

  const showToast = useToast();

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

  const [rowData, setRowData] = useState(() => {
    const savedCountData = localStorage.getItem("rowData");
    return savedCountData ? JSON.parse(savedCountData) : [];
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

  const [circleData, setCircleData] = useState(() => {
    const isSaved = localStorage.getItem("circleData");
    return isSaved
      ? JSON.parse(isSaved)
      : {
          zero: 0,
          duZero: 0,
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

  const [singleStreetData, setSIngleStreetData] = useState(() => {
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

  const [previousState, setPreviousState] = useState(() => {
    const savedData = localStorage.getItem("previousData");
    return savedData
      ? JSON.parse(savedData)
      : {
          countData: {},
          doubleStreetData: {},
          singleStreetData: {},
          summaryData: {},
          circleData: {},
          lastHitNumber: {},
          lastHitData: {},
          nonCircleData: {},
          historyData: [],
          nonDoubleStreetData: {},
          nonSingleStreetData: {},
        };
  });

  const [lastHitNumber, setLastHitNumber] = useState(() => {
    const savedLastHitNumber = localStorage.getItem("lastHitNumber");
    return savedLastHitNumber ? JSON.parse(savedLastHitNumber) : null;
  });

  const [historyData, setHistoryData] = useState(() => {
    const savedHistoryData = localStorage.getItem("historyData");
    return savedHistoryData ? JSON.parse(savedHistoryData) : [];
  });

  const [suggestion, setSuggestion] = useState(""); // State to store the suggestion
  const [repeatLetter, setRepeatLetter] = useState(""); // State to store the repeated letter
  const [suggestionActive, setSuggestionActive] = useState(false);
  const [userMissedSuggestion, setUserMissedSuggestion] = useState(false);

  // Save `countData` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("countData", JSON.stringify(countData));
  }, [countData]);

  // Save `summaryData` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("summaryData", JSON.stringify(summaryData));
  }, [summaryData]);

  // Save `lastHitData` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("lastHitData", JSON.stringify(lastHitData));
  }, [lastHitData]);

  // Save `lastHitNumber` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("lastHitNumber", JSON.stringify(lastHitNumber));
  }, [lastHitNumber]);

  // Save `historyData` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("historyData", JSON.stringify(historyData));
  }, [historyData]);

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

  useEffect(() => {
    localStorage.setItem("previousData", JSON.stringify(previousState));
  }, [previousState]);

  // Handle reset button click
  const handleClickResetButton = () => {
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
    setSummaryData({
      lowEvenRed: 0,
      lowOddRed: 0,
      highEvenRed: 0,
      highOddRed: 0,
      lowEvenBlack: 0,
      lowOddBlack: 0,
      highEvenBlack: 0,
      highOddBlack: 0,
    });
    setLastHitData(resetState);
    setLastHitNumber(null);
    setHistoryData([]);

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

    setDoubleStreetData(resetDoubleData);
    setNonDoubleStreetData(resetDoubleData);

    setSIngleStreetData(resetSingleStreetData);
    setNonSingleStreetData(resetSingleStreetData);

    let resetCircleData = {
      zero: 0,
      duZero: 0,
      orphe: 0,
      tires: 0,
    };

    setCircleData(resetCircleData);
    setNonCircleData(resetCircleData);

    // Also reset the data in local storage
    localStorage.setItem("countData", JSON.stringify(resetState));
    localStorage.setItem("summaryData", JSON.stringify(resetState));
    localStorage.setItem("lastHitData", JSON.stringify(resetState));
    localStorage.setItem("doubleStreetData", JSON.stringify(resetDoubleData));
    localStorage.setItem(
      "nonDoubleStreetData",
      JSON.stringify(resetDoubleData),
    );
    localStorage.setItem(
      "singleStreetData",
      JSON.stringify(resetSingleStreetData),
    );
    localStorage.setItem(
      "nonSingleStreetData",
      JSON.stringify(resetSingleStreetData),
    );
    localStorage.setItem("circleData", JSON.stringify(resetCircleData));
    localStorage.setItem("nonCircleData", JSON.stringify(resetCircleData));
    localStorage.setItem("lastHitNumber", null);
    localStorage.setItem("historyData", JSON.stringify([]));
  };

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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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
      circleDataUpdates: { duZero: 1 },
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

  console.log("row data", rowData);
  console.log("suggestion", suggestion);
  console.log("repeator", repeatLetter);

  const handleClickNumber = (key, number, letter) => {
    const {
      countUpdates,
      summaryUpdates,
      doubleStreetDataUpdates,
      circleDataUpdates,
      singleStreetDataUpdates,
    } = updateMapping[key];

    setPreviousState({
      countData,
      doubleStreetData,
      singleStreetData,
      summaryData,
      lastHitNumber,
      lastHitData,
      nonDoubleStreetData,
      nonCircleData,
      circleData,
      historyData,
      nonSingleStreetData,
    });

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

    setSIngleStreetData((prevState) => {
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

    setLastHitData((prevLastHitData) => {
      const updatedLastHitData = {};

      Object.keys(prevLastHitData).forEach((field) => {
        updatedLastHitData[field] =
          clickedDataUpdates[field] > 0 ? 0 : prevLastHitData[field] + 1;
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
    };

    setHistoryData([...historyData, changedHistoryData]);

    setRowData((prevRowData) => {
      // Get the last object in rowData
      const lastRow = prevRowData[prevRowData.length - 1];

      // If no last row exists or the last row already has 3 keys, create a new row
      if (!lastRow || Object.keys(lastRow).length >= 3) {
        // Create a new row with the clicked letter as the first key
        return [...prevRowData, { [`let1`]: letter }];
      } else {
        // The last row has less than 3 keys, add the new letter to it
        const keyIndex = Object.keys(lastRow).length + 1; // Calculate the next key number (let1, let2, let3)
        const updatedRow = { ...lastRow, [`let${keyIndex}`]: letter };

        // Replace the last row with the updated one
        return [...prevRowData.slice(0, -1), updatedRow];
      }
    });

    // Handle suggestions
    if (suggestionActive) {
      if (letter === repeatLetter) {
        // User clicked the repeated letter, stop suggestion for this object
        console.log("User clicked the repeated letter: stop suggestion");
        setSuggestionActive(false);
        setSuggestion(""); // Clear the suggestion once the user follows it
        setRepeatLetter("");
      } else {
        // Continue suggesting if the user clicks any other letter
        setSuggestion(`Suggestion: The repeated letter is ${repeatLetter}`);
      }
    }
  };

  // Effect to handle suggestions based on the last completed object
  useEffect(() => {
    if (rowData.length > 0) {
      const lastRow = rowData[rowData.length - 1];

      // Check if the last object has exactly 3 letters
      if (Object.keys(lastRow).length === 3) {
        const values = Object.values(lastRow);

        // Count occurrences of each letter
        const occurrences = values.reduce((acc, letter) => {
          acc[letter] = (acc[letter] || 0) + 1;
          return acc;
        }, {});

        // Find if there's any repeated letter
        const repeatedLetter = Object.keys(occurrences).find(
          (letter) => occurrences[letter] > 1,
        );

        // If there's a repeated letter, prepare the suggestion for the next object
        if (repeatedLetter) {
          setRepeatLetter(repeatedLetter);
          setSuggestionActive(true);
          setUserMissedSuggestion(false); // Reset missed suggestion for new object
          setSuggestion(`Suggestion: The repeated letter is ${repeatedLetter}`);
        } else {
          setSuggestion("");
          setRepeatLetter("");
          setSuggestionActive(false);
        }
      }
    }
  }, [rowData]);

  useEffect(() => {
    if (rowData.length > 1) {
      const previousRow = rowData[rowData.length - 2];
      const lastRow = rowData[rowData.length - 1];

      if (
        Object.keys(previousRow).length === 3 &&
        Object.keys(lastRow).length === 3 &&
        repeatLetter
      ) {
        const lastRowValues = Object.values(lastRow);

        if (!lastRowValues.includes(repeatLetter) && !userMissedSuggestion) {
          showToast(`Loss ${repeatLetter}`, "error");
          setUserMissedSuggestion(true);
          setSuggestionActive(false);
        }
      }
    }
  }, [rowData, repeatLetter, userMissedSuggestion]);

  const handleClickUndoButton = () => {
    try {
      setCountData(previousState.countData);
      setDoubleStreetData(previousState.doubleStreetData);
      setNonDoubleStreetData(previousState.nonDoubleStreetData);
      setSIngleStreetData(previousState.singleStreetData);
      setNonSingleStreetData(previousState.nonSingleStreetData);
      setHistoryData(previousState.historyData);
      setSummaryData(previousState.summaryData);
      setCircleData(previousState.circleData);
      setNonCircleData(previousState.nonCircleData);
      setLastHitNumber(previousState.lastHitNumber);
      setLastHitData(previousState.lastHitData);
    } catch (err) {
      console.log("err", err);
    }
  };

  const tableRow = (category, count, lastHit, screen) => {
    return (
      <tr className="text-center">
        <td
          className="bg-customGray border text-darkNavy max-sm:text-xs max-sm:py-2  text-base max-lg:text-sm font-semibold"
          style={{
            padding: screen === "small" ? "7px 10px" : "",
            borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
          }}
        >
          {category}
        </td>
        <td
          className={
            count >= 6
              ? "bg-darkBlue border hover:bg-softBlue"
              : count > 0 && count <= 2
                ? "bg-lightBlue text-black border hover:bg-softBlue"
                : count > 2 && count <= 5
                  ? "bg-mediumBlue text-black border hover:bg-softBlue"
                  : "bg-customGray text-black border hover:bg-softBlue"
          }
          style={{
            padding: screen === "small" ? "3px 10px" : "",
            borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
          }}
        >
          {count}
        </td>
        <td
          className={
            lastHit >= 11
              ? "bg-normalRed border hover:bg-softBlue"
              : lastHit > 0 && lastHit <= 3
                ? "bg-lightGreen text-black border hover:bg-softBlue"
                : lastHit > 3 && lastHit <= 10
                  ? "bg-customYellow text-black border hover:bg-softBlue"
                  : "bg-customGray text-black border hover:bg-softBlue"
          }
          style={{
            padding: screen === "small" ? "3px 10px" : "",
            borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
          }}
        >
          {lastHit}
        </td>
      </tr>
    );
  };

  const renderSummaryData = (category, count, lastHit) => {
    return (
      <>
        <div
          className="w-[33.3%] p-1 border bg-customGray text-customBlack font-semibold flex items-center justify-center max-md:text-sm"
          style={{
            borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
          }}
        >
          {category}
        </div>
        <div
          className={
            count !== 0
              ? "w-[33.3%] bg-goldenYellow flex items-center justify-center border max-md:text-sm"
              : "w-[33.3%] bg-customGray text-black font-semibold flex items-center justify-center border max-md:text-sm"
          }
          style={{
            borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
          }}
        >
          {count}
        </div>

        <div
          className={
            count !== 0
              ? "w-[33.3%] bg-goldenYellow flex items-center justify-center border max-md:text-sm"
              : "w-[33.3%] bg-customGray text-black font-semibold flex items-center justify-center border max-md:text-sm"
          }
          style={{
            borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
          }}
        >
          {count}
        </div>
      </>
    );
  };

  const displayDivHandler = (div) => {
    if (div === "a") {
      setIsa_Active(true);
      setIsb_Active(false);
      setIsc_Active(false);
    } else if (div === "b") {
      setIsa_Active(false);
      setIsb_Active(true);
      setIsc_Active(false);
    } else if (div === "c") {
      setIsa_Active(false);
      setIsb_Active(false);
      setIsc_Active(true);
    } else if (div === "single--streak") {
      setIsSingle_Active(true);
      setIsDouble_Active(false);
    } else if (div === "double--streak") {
      setIsSingle_Active(false);
      setIsDouble_Active(true);
    }
  };

  console.log(theme);

  return (
    <>
      <div className="sticky top-0 z-40">
        {/* <Nav theme={theme} setTheme={setTheme} /> */}
        <div
          className="py-3 px-2 justify-between flex sm--navbar"
          style={{ backgroundColor: "#FFFBE3" }}
        >
          <div className="flex gap-4 pl-2 items-center sm--lasthit">
            <div>
              <h2 className="text-customPurple text-base font-bold">
                Last Hit Number
              </h2>
              {/* <p className="text-customPurple text-xs">Last Hit Number</p> */}
            </div>
            <div
              className={`${
                lastHitNumber?.color === "zero"
                  ? "border-customGreen text-customGreen border-2"
                  : ""
              } ${
                lastHitNumber?.color === "red"
                  ? "border-customRed text-customRed border-2"
                  : lastHitNumber?.color === "black"
                    ? "border-customBlack text-customBlack border-2"
                    : ""
              } flex justify-center items-center w-10 h-10 rounded-md mt-1 px-1`}
            >
              {lastHitNumber?.number}
            </div>
          </div>

          <div className="flex">
            <div
              className="flex justify-center items-center p-0.5 py-0 rounded-md font-semibold text-sm text-gray-500"
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
              className="text-gray-500 py-1 px-1 rounded-full text-sm font-semibold"
              onClick={handleClickResetButton}
            >
              Undo
            </button>

            <button
              className="text-gray-500 py-1 px-1 rounded-full text-sm font-semibold"
              onClick={handleClickResetButton}
            >
              <GrPowerReset className="inline mr-0.5 -mt-0.5" />
              Reset
            </button>
          </div>
        </div>
        <div
          className="flex justify-between items-center px-10 py-2 max-sm:px-3 pb-3 max-sm:hidden"
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

          {/* <div className="w-44 max-sm:hidden">
            <img src={rouletteImg} alt="" className="w-full object-cover" />
          </div> */}
          <div className="flex gap-2">
            <div className="bg-neutral-300 p-1 rounded-full">
              <div
                className="flex justify-center items-center bg-customBlack p-1.5 font-semibold cursor-pointer rounded-full hover:bg-gray-500"
                onClick={() => setIsAlertAllowed(!isAlertAllowed)}
              >
                Alerts{" "}
                <span
                  className={
                    !isAlertAllowed
                      ? "text-red-500 ml-1"
                      : "text-neonGreen ml-1"
                  }
                >
                  {!isAlertAllowed ? "Off" : "On"}
                </span>
              </div>
            </div>

            <div className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
              <button
                className="bg-black text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
                onClick={handleClickUndoButton}
              >
                Undo
              </button>
            </div>

            <div className="bg-neutral-300 p-1 rounded-full hover:bg-gray-400">
              <button
                onClick={handleClickResetButton}
                className="bg-black text-white px-5 py-1 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 main">
        <div
          className="flex gap-2 mt-3 max-sm:flex-wrap rit-wrapper w-full"
          style={{ height: "73vh" }}
        >
          <div className="w-full flex justify-between">
            <div
              className="w-[35%] max-sm:w-[50%] max-w-xs"
              style={{ maxHeight: "100%" }}
            >
              <div className="w-full h-[7%] flex">
                <div
                  className="bg-customGreen w-[50%] flex justify-center items-center cursor-pointer border hover:bg-neonGreen"
                  onClick={() => handleClickNumber("zero", 0, "A")}
                  style={{
                    borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
                  }}
                >
                  <p>0</p>
                </div>
                <div
                  className="bg-customGreen w-[50%] flex justify-center items-center cursor-pointer border hover:bg-neonGreen"
                  onClick={() => handleClickNumber("doubleZero", "00", "A")}
                  style={{
                    borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
                  }}
                >
                  <p>00</p>
                </div>
              </div>

              <div className="w-full h-[93%] flex flex-wrap">
                {data.map((item) => {
                  return (
                    <div
                      className={`w-[33.3%] flex justify-center items-center border cursor-pointer number--divs`}
                      onClick={() =>
                        handleClickNumber(item.numString, item.num, item.letter)
                      }
                      style={{
                        backgroundColor:
                          item.letter === repeatLetter ? "#58d68d" : item.bg,
                        borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
                      }}
                      key={item.num}
                    >
                      {item.num}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div>
          <div className="flex items-center justify-evenly w-full">
            <div
              className="bg-green-500 h-full w-[50%] flex justify-center items-center cursor-pointer border"
              onClick={() => handleClickNumber("zero", 0)}
            >
              <p>0</p>
            </div>
            <div
              className="bg-green-500 h-full w-[50%] flex justify-center items-center cursor-pointer border"
              onClick={() => handleClickNumber("doubleZero", "00")}
            >
              <p>00</p>
            </div>
          </div>

          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-red-500 h-full w-[33.3%] flex justify-center items-center cursor-pointer border-white border-x-2 border-y-2"
              onClick={() => handleClickNumber("one", 1)}
            >
              <p>1</p>
            </div>
            <div
              className="bg-black h-full w-[33.3%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("two", 2)}
            >
              <p>2</p>
            </div>
            <div
              className="bg-red-500 h-full w-[33.3%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("three", 3)}
            >
              <p>3</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("four", 4)}
            >
              <p>4</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("five", 5)}
            >
              <p>5</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("six", 6)}
            >
              <p>6</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("seven", 7)}
            >
              <p>7</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("eight", 8)}
            >
              <p>8</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("nine", 9)}
            >
              <p>9</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("ten", 10)}
            >
              <p>10</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("eleven", 11)}
            >
              <p>11</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twelve", 12)}
            >
              <p>12</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("thirteen", 13)}
            >
              <p>13</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("fourteen", 14)}
            >
              <p>14</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("fifteen", 15)}
            >
              <p>15</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("sixteen", 16)}
            >
              <p>16</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("seventeen", 17)}
            >
              <p>17</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("eighteen", 18)}
            >
              <p>18</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("nineteen", 19)}
            >
              <p>19</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twenty", 20)}
            >
              <p>20</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentyOne", 21)}
            >
              <p>21</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentyTwo", 22)}
            >
              <p>22</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentyThree", 23)}
            >
              <p>23</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentyFour", 24)}
            >
              <p>24</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentyFive", 25)}
            >
              <p>25</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentySix", 26)}
            >
              <p>26</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentySeven", 27)}
            >
              <p>27</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentyEight", 28)}
            >
              <p>28</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("twentyNine", 29)}
            >
              <p>29</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("thirty", 30)}
            >
              <p>30</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("thirtyOne", 31)}
            >
              <p>31</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("thirtyTwo", 32)}
            >
              <p>32</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("thirtyThree", 33)}
            >
              <p>33</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[30vw] h-[5vh] border-2">
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("thirtyFour", 34)}
            >
              <p>34</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("thirtyFive", 35)}
            >
              <p>35</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("thirtySix", 36)}
            >
              <p>36</p>
            </div>
          </div>
        </div> */}

            <table
              border="1"
              cellPadding="10"
              className="w-[30%] max-sm:w-[40%] table--1"
            >
              <thead>
                <tr className="text-center max-sm:text-base md:text-sm">
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Category
                  </th>
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Count
                  </th>
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Last Hit
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRow("Red", countData.red, lastHitData.red)}
                {tableRow("Black", countData.black, lastHitData.black)}
                {tableRow("Even", countData.even, lastHitData.even)}
                {tableRow("Odd", countData.odd, lastHitData.odd)}
                {tableRow(
                  "1-18",
                  countData.one_eighteen,
                  lastHitData.one_eighteen,
                )}
                {tableRow(
                  "19-36",
                  countData.nineteen_thirtySix,
                  lastHitData.nineteen_thirtySix,
                )}
                {tableRow(
                  "1st Dozen",
                  countData.dozen_one,
                  lastHitData.dozen_one,
                )}
                {tableRow(
                  "2nd Dozen",
                  countData.dozen_two,
                  lastHitData.dozen_two,
                )}
                {tableRow(
                  "3rd Dozen",
                  countData.dozen_three,
                  lastHitData.dozen_three,
                )}
                {tableRow("1st Column", countData.col_one, lastHitData.col_one)}
                {tableRow("3nd Column", countData.col_two, lastHitData.col_two)}
                {tableRow(
                  "3rd Column",
                  countData.col_three,
                  lastHitData.col_three,
                )}
                {/* <tr>
              <td>Red</td>
              <td>{countData.red}</td>
              <td>{lastHitData.red}</td>
            </tr>
            <tr>
              <td>Black</td>
              <td>{countData.black}</td>
              <td>{lastHitData.black}</td>
            </tr>
            <tr>
              <td>Even</td>
              <td>{countData.even}</td>
              <td>{lastHitData.even}</td>
            </tr>
            <tr>
              <td>Odd</td>
              <td>{countData.odd}</td>
              <td>{lastHitData.odd}</td>
            </tr>
            <tr>
              <td>1-18</td>
              <td>{countData.one_eighteen}</td>
              <td>{lastHitData.one_eighteen}</td>
            </tr>
            <tr>
              <td>19-36</td>
              <td>{countData.nineteen_thirtySix}</td>
              <td>{lastHitData.nineteen_thirtySix}</td>
            </tr>
            <tr>
              <td>1st Dozen</td>
              <td>{countData.dozen_one}</td>
              <td>{lastHitData.dozen_one}</td>
            </tr>
            <tr>
              <td>2nd Dozen</td>
              <td>{countData.dozen_two}</td>
              <td>{lastHitData.dozen_two}</td>
            </tr>
            <tr>
              <td>3rd Dozen</td>
              <td>{countData.dozen_three}</td>
              <td>{lastHitData.dozen_three}</td>
            </tr>
            <tr>
              <td>1st Column</td>
              <td>{countData.col_one}</td>
              <td>{lastHitData.col_one}</td>
            </tr>
            <tr>
              <td>2nd Column</td>
              <td>{countData.col_two}</td>
              <td>{lastHitData.col_two}</td>
            </tr>
            <tr>
              <td>3rd Column</td>
              <td>{countData.col_three}</td>
              <td>{lastHitData.col_three}</td>
            </tr> */}
              </tbody>
            </table>
            <table
              border="1"
              cellPadding="10"
              className="w-[30%] max-sm:mt-14 table--1 max-sm:hidden hidden"
            >
              <thead>
                <tr className="text-center max-sm:text-sm">
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Category
                  </th>
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Count
                  </th>
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Last Hit
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRow(
                  "1 - 6",
                  doubleStreetData.one_six,
                  nonDoubleStreetData.one_six,
                )}
                {tableRow(
                  "7 - 12",
                  doubleStreetData.seven_twelve,
                  nonDoubleStreetData.seven_twelve,
                )}
                {tableRow(
                  "13 - 18",
                  doubleStreetData.thirteen_eighteen,
                  nonDoubleStreetData.thirteen_eighteen,
                )}
                {tableRow(
                  "19 - 24",
                  doubleStreetData.nineteen_twentyFour,
                  nonDoubleStreetData.nineteen_twentyFour,
                )}
                {tableRow(
                  "25 - 30",
                  doubleStreetData.twentyFive_thirty,
                  nonDoubleStreetData.twentyFive_thirty,
                )}
                {tableRow(
                  "31 - 36",
                  doubleStreetData.thirtyOne_thirtySix,
                  nonDoubleStreetData.thirtyOne_thirtySix,
                )}

                {/* <tr>
              <td>one four</td>
              <td>{doubleStreetData.one_six}</td>
              <td>{nonDoubleStreetData.one_six}</td>
            </tr>
            <tr>
              <td>seven ten</td>
              <td>{doubleStreetData.seven_twelve}</td>
              <td>{nonDoubleStreetData.seven_twelve}</td>
            </tr>
            <tr>
              <td>thirteen sixteen</td>
              <td>{doubleStreetData.thirteen_eighteen}</td>
              <td>{nonDoubleStreetData.thirteen_eighteen}</td>
            </tr>
            <tr>
              <td>nineteen twentyTwo</td>
              <td>{doubleStreetData.nineteen_twentyFour}</td>
              <td>{nonDoubleStreetData.nineteen_twentyFour}</td>
            </tr>
            <tr>
              <td>twentyFive twentyEight</td>
              <td>{doubleStreetData.twentyFive_thirty}</td>
              <td>{nonDoubleStreetData.twentyFive_thirty}</td>
            </tr>
            <tr>
              <td>thirtyOne thirtySix</td>
              <td>{doubleStreetData.thirtyOne_thirtySix}</td>
              <td>{nonDoubleStreetData.thirtyOne_thirtySix}</td>
            </tr> */}
              </tbody>
            </table>
            <table
              border="1"
              cellPadding="10"
              className="w-[30%] max-sm:mt-14 table--1 max-sm:hidden hidden"
            >
              <thead>
                <tr className="text-center max-sm:text-sm">
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Category
                  </th>
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Count
                  </th>
                  <th className="border p-3 max-sm:p-2 bg-customGreen">
                    Last Hit
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRow(
                  "1-3",
                  singleStreetData.one_three,
                  nonSingleStreetData.one_three,
                )}
                {tableRow(
                  "4 - 6",
                  singleStreetData.four_six,
                  nonSingleStreetData.four_six,
                )}
                {tableRow(
                  "7 - 9",
                  singleStreetData.seven_nine,
                  nonSingleStreetData.seven_nine,
                )}
                {tableRow(
                  "10 - 12",
                  singleStreetData.ten_twelve,
                  nonSingleStreetData.ten_twelve,
                )}
                {tableRow(
                  "13 - 15",
                  singleStreetData.thirteen_fifteen,
                  nonSingleStreetData.thirteen_fifteen,
                )}
                {tableRow(
                  "16 - 18",
                  singleStreetData.sixteen_eighteen,
                  nonSingleStreetData.sixteen_eighteen,
                )}
                {tableRow(
                  "19 - 21",
                  singleStreetData.nineteen_twentyOne,
                  nonSingleStreetData.nineteen_twentyOne,
                )}
                {tableRow(
                  "22 - 24",
                  singleStreetData.twentyTwo_twentyFour,
                  nonSingleStreetData.twentyTwo_twentyFour,
                )}
                {tableRow(
                  "25 - 27",
                  singleStreetData.twentyFive_twentySeven,
                  nonSingleStreetData.twentyFive_twentySeven,
                )}
                {tableRow(
                  "28 - 30",
                  singleStreetData.twentyEight_thirty,
                  nonSingleStreetData.twentyEight_thirty,
                )}
                {tableRow(
                  "31 - 33",
                  singleStreetData.thirtyOne_thirtyThree,
                  nonSingleStreetData.thirtyOne_thirtyThree,
                )}
                {tableRow(
                  "31 - 33",
                  singleStreetData.thirtyFour_thirtySix,
                  nonSingleStreetData.thirtyFour_thirtySix,
                )}
              </tbody>
            </table>
          </div>

          {/* <div className="w-2/5 small--screen--wrapper">
            <table
              border="1"
              cellPadding="10"
              className="text-center max-h-60 hidden max-sm:block table-408"
            >
              <thead>
                <tr>
                  <th className="border p-3 max-sm:p-1 bg-customGreen">
                    Category
                  </th>
                  <th className="border p-3 max-sm:p-1 bg-customGreen">
                    Count
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-customGray border text-black font-semibold p-2 max-sm:text-xs">
                    Voisins du Zero
                  </td>
                  <td
                    className={
                      circleData.duZero === 0
                        ? "bg-gray-100 text-black"
                        : "bg-customBlue"
                    }
                  >
                    {circleData.duZero}
                  </td>
                </tr>
                <tr>
                  <td className="bg-customGray border text-black font-semibold p-2 max-sm:text-xs">
                    Orphelins
                  </td>
                  <td
                    className={
                      circleData.orphe === 0
                        ? "bg-gray-100 text-black"
                        : "bg-customBlue"
                    }
                  >
                    {circleData.orphe}
                  </td>
                </tr>
                <tr>
                  <td className="bg-customGray border text-black font-semibold p-2 max-sm:text-xs">
                    Tiers du Cylindre
                  </td>
                  <td
                    className={
                      circleData.tires === 0
                        ? "bg-gray-100 text-black"
                        : "bg-customBlue"
                    }
                  >
                    {circleData.tires}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="border max-sm:flex flex-wrap max-sm:text-xs w-40 mt-5 hidden table-408">
              {renderSummaryData("LER", summaryData.lowEvenRed)}
              {renderSummaryData("LEB", summaryData.lowEvenBlack)}
              {renderSummaryData("LOR", summaryData.lowOddRed)}
              {renderSummaryData("LOB", summaryData.lowOddBlack)}
              {renderSummaryData("HER", summaryData.highEvenRed)}
              {renderSummaryData("HOR", summaryData.highOddRed)}
              {renderSummaryData("HEB", summaryData.highEvenBlack)}
              {renderSummaryData("HOB", summaryData.highOddBlack)}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Project4;
