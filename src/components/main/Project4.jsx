import React, { useEffect, useState } from "react";
import { data } from "../reuse/project4/logic/RouletteData.js";
import "../../Style/Main.css";
import { GrPowerReset } from "react-icons/gr";
import { useToast } from "../resources/Toast.jsx";
import Analyze from "../reuse/project4/Analyze.jsx";
import { CgInsights } from "react-icons/cg";
import background from "../../assets/imgs/2002.i029.002_realistic-poker-club-illustration.jpg";
import MoneyManagementTable from "../reuse/project4/MoneyManagementTable.jsx";
// import { TiThMenuOutline } from "react-icons/ti";
// import { AiOutlineClose } from "react-icons/ai";
// import { PiListNumbers } from "react-icons/pi";
// import { DiVim } from "react-icons/di";
import Lock from "../resources/Lock.jsx";
const Project4 = ({ theme }) => {
  const [isAlertAllowed, setIsAlertAllowed] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const showToast = useToast();
  const [rowHoverEffect, setRowHoverEffect] = useState(true);
  const [dozenHoverEffect, setDozenHoverEffect] = useState(true);
  const [colHoverEffect, setColHoverEffect] = useState(true);
  const [i_btn, setI_btn] = useState(false);
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  const [countData, setCountData] = useState(() => {
    const savedCountData = localStorage.getItem("countData4");
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

  const handleClickRowHoverData = () => {
    setRowHoverEffect(!rowHoverEffect);
  };
  const handleClickDozenHoverData = () => {
    setDozenHoverEffect(!dozenHoverEffect);
  };
  const handleClickColHoverData = () => {
    setColHoverEffect(!colHoverEffect);
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
    const savedLastHitNumber = localStorage.getItem("lastHitNumber4");
    return savedLastHitNumber ? JSON.parse(savedLastHitNumber) : null;
  });

  const [historyData, setHistoryData] = useState(() => {
    const savedHistoryData = localStorage.getItem("historyData4");
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

  // moneyManagementData = {
  //   spin : '',
  //   winLoss : '',
  //   unit : '',
  //   total : '',
  //   covered : ''
  // }

  // Save `countData` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("countData4", JSON.stringify(countData));
  }, [countData]);

  // Save `lastHitNumber` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("lastHitNumber4", JSON.stringify(lastHitNumber));
  }, [lastHitNumber]);

  // Save `historyData` to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("historyData4", JSON.stringify(historyData));
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
    setMoneyManagementData([]);
    setSuggestionProcessedRow(null);
    setSuggestionProcessedDoz(null);
    setSuggestionProcessedCol(null);
    setUnitData(1);

    // Set the initial values in localStorage
    localStorage.setItem("analyzeData4", JSON.stringify(initialAnalyzeData));
    localStorage.setItem("rowData4", JSON.stringify(initialRowData));
    localStorage.setItem("dozenRowData4", JSON.stringify(initialDozenRowData));
    localStorage.setItem("colRowData4", JSON.stringify(initialColRowData));
    localStorage.setItem("moneyManagement4", JSON.stringify([]));
    localStorage.setItem("suggestionProcessedRow4", JSON.stringify(null));
    localStorage.setItem("suggestionProcessedDoz4", JSON.stringify(null));
    localStorage.setItem("suggestionProcessedCol4", JSON.stringify(null));
    localStorage.setItem("suggestion4", initialSuggestion);
    localStorage.setItem("repeatLetter4", initialRepeatLetter);
    localStorage.setItem("repeatDozen4", initialRepeatDozen);
    localStorage.setItem("repeatCol4", initialRepeatCol);
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

    // Also reset the data in local storage
    localStorage.setItem("countData4", JSON.stringify(resetState));
    localStorage.setItem("rowData4", JSON.stringify(emptyArray));
    localStorage.setItem("dozenRowData4", JSON.stringify(emptyArray));
    localStorage.setItem("colRowData4", JSON.stringify(emptyArray));
    localStorage.setItem("lastHitNumber4", null);
    localStorage.setItem("historyData4", JSON.stringify([]));
  };

  const updateMapping = {
    zero: {
      countUpdates: {},
    },
    doubleZero: {
      countUpdates: {},
    },
    one: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_one: 1,
      },
    },
    two: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_two: 1,
      },
    },
    three: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_three: 1,
      },
    },
    four: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_one: 1,
      },
    },
    five: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_two: 1,
      },
    },
    six: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_three: 1,
      },
    },
    seven: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_one: 1,
      },
    },
    eight: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_two: 1,
      },
    },
    nine: {
      countUpdates: {
        red: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_three: 1,
      },
    },
    ten: {
      countUpdates: {
        black: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_one: 1,
      },
    },
    eleven: {
      countUpdates: {
        black: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_two: 1,
      },
    },
    twelve: {
      countUpdates: {
        red: 1,
        even: 1,
        one_eighteen: 1,
        dozen_one: 1,
        col_three: 1,
      },
    },
    thirteen: {
      countUpdates: {
        black: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_one: 1,
      },
    },
    fourteen: {
      countUpdates: {
        red: 1,
        even: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_two: 1,
      },
    },
    fifteen: {
      countUpdates: {
        black: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_three: 1,
      },
    },
    sixteen: {
      countUpdates: {
        red: 1,
        even: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_one: 1,
      },
    },
    seventeen: {
      countUpdates: {
        black: 1,
        odd: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_two: 1,
      },
    },
    eighteen: {
      countUpdates: {
        red: 1,
        even: 1,
        one_eighteen: 1,
        dozen_two: 1,
        col_three: 1,
      },
    },
    nineteen: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_one: 1,
      },
    },
    twenty: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_two: 1,
      },
    },
    twentyOne: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_three: 1,
      },
    },
    twentyTwo: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_one: 1,
      },
    },
    twentyThree: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_two: 1,
      },
    },
    twentyFour: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_two: 1,
        col_three: 1,
      },
    },
    twentyFive: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_one: 1,
      },
    },
    twentySix: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_two: 1,
      },
    },
    twentySeven: {
      countUpdates: {
        red: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_three: 1,
      },
    },
    twentyEight: {
      countUpdates: {
        black: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_one: 1,
      },
    },
    twentyNine: {
      countUpdates: {
        black: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_two: 1,
      },
    },
    thirty: {
      countUpdates: {
        red: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_three: 1,
      },
    },
    thirtyOne: {
      countUpdates: {
        black: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_one: 1,
      },
    },
    thirtyTwo: {
      countUpdates: {
        red: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_two: 1,
      },
    },
    thirtyThree: {
      countUpdates: {
        black: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_three: 1,
      },
    },
    thirtyFour: {
      countUpdates: {
        red: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_one: 1,
      },
    },
    thirtyFive: {
      countUpdates: {
        black: 1,
        odd: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_two: 1,
      },
    },
    thirtySix: {
      countUpdates: {
        red: 1,
        even: 1,
        nineteen_thirtySix: 1,
        dozen_three: 1,
        col_three: 1,
      },
    },
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
        setRepeatLetter('')
        setUserMissedSuggestion(true);
        setSuggestionActive(false);
        setAnalyzeData((prev) => ({
          ...prev,
          lossPerData: prev.lossPerData + 1,
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
        setUnitData(1);
        setRepeatDozen('')
        setUserMissedSuggestionDozen(true);
        setSuggestionActiveDozen(false);
        setAnalyzeData((prev) => ({
          ...prev,
          dozenLossPer: prev.dozenLossPer + 1,
        }));

        // Prepare the dozen loss entry
        newLossEntries.push({
          spin: lastHitNumber,
          winLoss: "L",
          unit: unitData,
          total: unitData * -1,
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
        console.log('repeatCol', repeatCol);
        if (isAlertAllowed && colHoverEffect) {
          showToast(`Book Your Loss! col`, "error");
        }
        setUnitData(1);
        setRepeatCol('')
        setUserMissedSuggestionCol(true);
        setSuggestionActiveCol(false);
        setAnalyzeData((prev) => ({
          ...prev,
          colLossPer: prev.colLossPer + 1,
        }));

        // Prepare the column loss entry
        newLossEntries.push({
          spin: lastHitNumber,
          winLoss: "L",
          unit: unitData,
          total: unitData * -1,
          covered: repeatCol === "1" ? "C1" : repeatCol === "2" ? "C2" : "C3",
        });
      }
    }

    // If there are any losses, update the money management data once
    if (newLossEntries.length > 0) {
      setMoneyManagementData((prevData) => [...prevData, ...newLossEntries]);
    }
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

          setUnitData(1);

          // Add data to moneyManagementData only for the first column
          // const newEntry = {
          //   spin: "",
          //   winLoss: "",
          //   unit: unitData,
          //   total: 0,
          //   covered: repeatedLetter === "A" ? 13 : 12,
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
        console.log('occurrences', occurrences)
        console.log('values', values)
        const repeatedDozen = Object.keys(occurrences).find(
          (dozen) => occurrences[dozen] > 1
        );

        // Check if the repeated dozen is in the first column
        if (repeatedDozen && repeatedDozen != 0 ) {
          console.log('repeated dozen is coming', repeatedDozen)
          // Only trigger the suggestion if it hasn't been processed for this row
          setRepeatDozen(repeatedDozen);
          setSuggestionActiveDozen(true);
          setUserMissedSuggestionDozen(false);
          setSuggestion(`Suggestion: The repeated dozen is ${repeatedDozen}`);

          setUnitData(1);

          // Add data to moneyManagementData only for the first column
          // const newEntry = {
          //   spin: "",
          //   winLoss: "",
          //   unit: unitData,
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

  // console.log("dozen data", dozenRowData);
  // console.log("repeatDozen", repeatDozen);
  // console.log('userMissedSuggestionDozen', userMissedSuggestionDozen)
  // console.log('suggestionActiveDozen', suggestionActiveDozen)
  // console.log('suggestionProcessedDozen', suggestionProcessedDoz)
  // // console.log('dozenHoverEffect', dozenHoverEffect)
  // console.log('----------')

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

          setUnitData(1);

          // Add data to moneyManagementData only for the first column
          // const newEntry = {
          //   spin: "",
          //   winLoss: "",
          //   unit: unitData,
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
  

  // Handle when user clicks a letter/number
  const handleClickNumber = (key, number, letter, doz, col) => {
    const { countUpdates } = updateMapping[key];
    const clickedDataUpdates = {
      red: countUpdates.red || 0,
      black: countUpdates.black || 0,
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

        // Add data to MoneyManagement only if the letter matches
        setMoneyManagementData((prevData) => [
          ...prevData,
          {
            spin: {
              number: number,
              color:
                clickedDataUpdates.red === 1
                  ? "red"
                  : clickedDataUpdates.black === 1
                  ? "black"
                  : "zero",
            },
            winLoss: "W",
            unit: unitData,
            total: letter === "A" ? unitData * 23 : unitData * 24,
            covered: letter === "A" ? 13 : 12,
          },
        ]);
      } else {
        setSuggestion(`Suggestion: The repeated letter is ${repeatLetter}`);
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
        setUnitData(unitData + 1);
        setRepeatDozen("");
        setAnalyzeData((prev) => ({
          ...prev,
          dozenWinPer: prev.dozenWinPer + 1,
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
        //     unit: unitData,
        //     total: unitData * 2,
        //     covered: doz === "1" ? "D1" : doz === "2" ? "D2" : "D3",
        //   },
        // ]);
      } else {
        setSuggestion(`Suggestion: The repeated dozen is ${repeatDozen}`);
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
        setUnitData(unitData + 1);
        setRepeatCol("");
        setAnalyzeData((prev) => ({
          ...prev,
          colWinPer: prev.colWinPer + 1,
        }));

        // Add to money management for columns
        setMoneyManagementData((prevData) => [
          ...prevData,
          {
            spin: {
              number: number,
              color:
                clickedDataUpdates.red === 1
                  ? "red"
                  : clickedDataUpdates.black === 1
                  ? "black"
                  : "zero",
            },
            winLoss: "W",
            unit: unitData,
            total: unitData * 2,
            covered: col === "1" ? "C1" : col === "2" ? "C2" : "C3",
          },
        ]);
      } else {
        setSuggestion(`Suggestion: The repeated column is ${repeatCol}`);
      }
    }
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


  console.log('analyze data', analyzeData)




  // Plan Data

const [planLockScreen, setPlanLockScreen] = useState(false)

// useEffect(() => {
//    let userData = JSON.parse(localStorage.getItem('userData'))
//    if(!userData?.projectsPlan.project4){
//     setPlanLockScreen(false)
//    }else{
//     setPlanLockScreen(false)
//    }
//    },[])



  return (
    <>
      <div className="sticky lg:top-0 max-sm:top-0 md:top-0 z-30">
        {/* <Nav theme={theme} setTheme={setTheme} /> */}
        <div
          className="py-1 px-2 justify-between flex sm--navbar"
          style={{ backgroundColor: "#FFFBE3" }}
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
                  ? "border-customRed text-customRed border-2"
                  : lastHitNumber?.color === "black"
                  ? "border-customBlack text-customBlack border-2"
                  : ""
              } flex justify-center items-center w-7 h-7 rounded-md mt-1 px-1`}
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
              className="text-gray-500 py-1 px-1 rounded-full text-sm font-semibold"
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
      <div className="px-4 main h-[75.5vh] flex">
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
                    repeatLetter === "A"  && rowHoverEffect ? "bg-[#58d68d]" : "bg-customGreen"
                  } w-[100%] flex justify-center items-center cursor-pointer border`}
                  onClick={() => handleClickNumber("zero", 0, "A", 0, 0)}
                  style={{
                    borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
                  }}
                >
                  <p>0</p>
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
                <div className="w-[17%] max-lg:w[30rem] h-[86%]">
                  <div
                    className="h-[33.33%] border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                    style={{
                      backgroundColor: repeatDozen === "1" && dozenHoverEffect ? "#58d68d" : "",
                      border: theme === "dark" ? "" : "1px black solid",
                      color: theme === "dark" ? "" : "black",
                    }}
                  >
                    <p className="rotate-90 w-[10rem] max-xl:text-sm max-sm:text-xs">
                      1st 12
                    </p>
                  </div>

                  <div
                    className="h-[33.33%] border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                    style={{
                      backgroundColor: repeatDozen === "2" && dozenHoverEffect ? "#58d68d" : "",
                      border: theme === "dark" ? "" : "1px black solid",
                      color: theme === "dark" ? "" : "black",
                    }}
                  >
                    <p className="rotate-90 w-[10rem] max-xl:text-sm max-sm:text-xs">
                      2nd 12
                    </p>
                  </div>

                  <div
                    className="h-[33.33%] border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                    style={{
                      backgroundColor: repeatDozen === "3" && dozenHoverEffect ? "#58d68d" : "",
                      border: theme === "dark" ? "" : "1px black solid",
                      color: theme === "dark" ? "" : "black",
                    }}
                  >
                    <p className="rotate-90 w-[10rem] max-xl:text-sm max-sm:text-xs">
                      3rd 12
                    </p>
                  </div>
                </div>
                <div className="w-full h-[93%] flex flex-wrap">
                  {data.map((item) => {
                    return (
                      <div
                        className={`w-[33.33%] flex justify-center items-center border cursor-pointer number--divs`}
                        onClick={() =>
                          handleClickNumber(
                            item.numString,
                            item.num,
                            item.letter,
                            item.dozen,
                            item.col
                          )
                        }
                        style={{
                          backgroundColor:
                            item.letter === repeatLetter && rowHoverEffect ? "#58d68d" : item.bg,
                          borderColor:
                            theme === "light" ? "#F5F5F5" : "#0A1F44",
                        }}
                        key={item.num}
                      >
                        {item.num}
                      </div>
                    );
                  })}

                  {/* cols */}
                  <div className="w-full flex">
                    <div
                      className="w-[33.3%] h-full border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                      style={{
                        backgroundColor: repeatCol === "1" && colHoverEffect ? "#58d68d" : "",
                        border: theme === "dark" ? "" : "1px black solid",
                        color: theme === "dark" ? "" : "black",
                      }}
                    >
                      2 - 1
                    </div>
                    <div
                      className="w-[33.3%] h-full border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                      style={{
                        backgroundColor: repeatCol === "2" && colHoverEffect ? "#58d68d" : "",
                        border: theme === "dark" ? "" : "1px black solid",
                        color: theme === "dark" ? "" : "black",
                      }}
                    >
                      2 - 1
                    </div>
                    <div
                      className="w-[33.3%] h-full border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                      style={{
                        backgroundColor: repeatCol === "3" && colHoverEffect ? "#58d68d" : "",
                        border: theme === "dark" ? "" : "1px black solid",
                        color: theme === "dark" ? "" : "black",
                      }}
                    >
                      2 - 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[10%] h-full  max-sm:flex justify-center items-center statistics "   >
          <div
            className="border rounded-full flex justify-center bg-black items-center relative cursor-pointer z-30 hover:bg-neonGreen"
            onClick={() => setShowPopup(!showPopup)}
            style={{padding:"5px",width:"50px"}}
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
        className="w-full h-screen absolute top-0 flex justify-center items-center"
        style={{
          display: showPopup ? "flex" : "none",
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
        }}
        onClick={() => setShowPopup(false)}
      >
        <div className="max-sm:mr-4">
          <table className="border w-[35rem] max-md:w-[22rem] max-sm:w-[18rem]">
            <tr className="max-sm:h-20 max-md:h-20" >
              <th className="w-[30%] max-sm:w-[30] border py-2 bg-yellow-500 text-black">Category</th>
              <th className="w-[40%] max-sm:w-[50] border bg-yellow-500 text-black break-words relative">Hot/Stable/Cold 

              <div
                className="text-gray-400 absolute  cursor-pointer bg-neutral-700 w-5 h-5 flex justify-center items-center rounded-full"
                onMouseEnter={() => setI_btn(true)}
                onMouseLeave={()=> setI_btn(false)}
              style={{right:"10px",bottom:"6px"}}
              >
                i
              </div>

              <div
                className="bg-customPurple p-2 flex justify-between mb-4 text-start  items-start text-white w-60 h-24 max-sm:w-45 max-sm:h-35 absolute bottom-6 max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%]"
                style={{ display: i_btn ? "flex" : "none" }}
                id="statsInfo"
              >

                <div className="text-start" style={{fontSize:"11px",paddingLeft:"5px"}}>
                  <p>
                    <span className="font-bold me-2">Hot : </span>&nbsp; &nbsp; &nbsp;  Good table For betting ✅
                  </p>

                  <p className="border-y my-1 py-1">
                    <span className="font-bold me-2">Stable : </span>Decent choice,be cautious ⚖️
                  </p>

                  <p>
                    <span className="font-bold me-2">Cold : </span> &nbsp; &nbsp;Avoid, too unpredictable ❌
                  </p>
                </div>
              </div>
              </th>
              <th className="w-[30%] bg-yellow-500 max-sm:w-[20] text-black">ON/OFF</th>
            </tr>

            {/* Numbers */}
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                Numbers
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = analyzeData.winPerData;
                  const lossPer = analyzeData.lossPerData;
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
                  const winPer = analyzeData.winPerData;
                  const lossPer = analyzeData.lossPerData;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
              <td className="font-semibold text-center border max-sm:text-sm  " >
                      <button
                        onClick={handleClickRowHoverData}
                        className="menu-bars bg-black text-white px-2  rounded-full btns max-sm:text-sm hover:bg-neonGreen"
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
              </td>
            </tr>

            {/* Dozen */}
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                Dozen
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = analyzeData.dozenWinPer;
                  const lossPer = analyzeData.dozenLossPer;
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
                  const winPer = analyzeData.dozenWinPer;
                  const lossPer = analyzeData.dozenLossPer;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
              <td className="font-semibold text-center border max-sm:text-sm  " >
              <button
                        onClick={handleClickDozenHoverData}
                        className="menu-bars bg-black text-white px-2  rounded-full btns max-sm:text-sm hover:bg-neonGreen"
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
              </td>
            </tr>

            {/* Column */}
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                Column
              </td>
              <td
                className={`font-semibold text-center p-1 border max-sm:text-sm ${(() => {
                  const winPer = analyzeData.colWinPer;
                  const lossPer = analyzeData.colLossPer;
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
                  const winPer = analyzeData.colWinPer;
                  const lossPer = analyzeData.colLossPer;
                  const total = winPer + lossPer;
                  const winPercentage = (winPer / total) * 100;

                  return winPercentage >= 70
                    ? `Hot`
                    : winPercentage >= 50
                    ? `Stable`
                    : `Cold`;
                })()}
              </td>
              <td className="font-semibold text-center border max-sm:text-sm  " >
                     <button
                        onClick={handleClickColHoverData}
                        className="menu-bars bg-black text-white px-2 rounded-full btns max-sm:text-sm hover:bg-neonGreen"
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
              </td>
            </tr>
          </table>

          {/* <p>Win - {analyzeData.winPerData}</p>
        <p>Loss - {analyzeData.lossPerData}</p>
        <p>dozen win - {analyzeData.dozenWinPer}</p>
        <p>dozen Loss - {analyzeData.dozenLossPer}</p>
        <p>col win - {analyzeData.colWinPer}</p>
        <p>col Loss - {analyzeData.colLossPer}</p> */}
        </div>
      </div>




      <div
        // className="h-[65vh] mt-5 w-full overflow-y-scroll rounded-xl p-2 scrollOff"
        className="h-[35vh] mt-5 w-full rounded-xl p-2 flex justify-center items-center flex-col"
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
        <h2 className={`text-lg font-bold my-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`} >Money Management Tool</h2>
        <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} ><i className="fa-regular fa-clock mx-3"></i>Coming Soon !</span>
        {/* <button
          onClick={() => setMoneyManagementData([])}
          className="border py-1 px-4 rounded-lg mb-2 mx-2"
        >
          Reset
        </button> */}
        {/* <MoneyManagementTable
          moneyManagementData={moneyManagementData}
          theme={theme}
        /> */}
      </div>


      {
        planLockScreen && <Lock setPlanLockScreen={setPlanLockScreen} />
      }
    </>
  );
};

export default Project4;
