import React, { useEffect, useState } from "react";
import { data } from "../reuse/project4/logic/RouletteData.js";
import "../../Style/Main.css";
import { GrPowerReset } from "react-icons/gr";
import { useToast } from "../resources/Toast.jsx";

const Project4 = ({ theme }) => {
  const [isAlertAllowed, setIsAlertAllowed] = useState(false);

  const showToast = useToast();

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

    // Set the initial values in localStorage
    localStorage.setItem("rowData4", JSON.stringify(initialRowData));
    localStorage.setItem("dozenRowData4", JSON.stringify(initialDozenRowData));
    localStorage.setItem("colRowData4", JSON.stringify(initialColRowData));
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
    if (rowData.length > 0) {
      const lastRow = rowData[rowData.length - 1];
      if (Object.keys(lastRow).length === 3) {
        const values = Object.values(lastRow);
        const occurrences = values.reduce((acc, letter) => {
          acc[letter] = (acc[letter] || 0) + 1;
          return acc;
        }, {});
        const repeatedLetter = Object.keys(occurrences).find(
          (letter) => occurrences[letter] > 1
        );
        if (repeatedLetter) {
          setRepeatLetter(repeatedLetter);
          setSuggestionActive(true);
          setUserMissedSuggestion(false);
          setSuggestion(`Suggestion: The repeated letter is ${repeatedLetter}`);
        } else {
          setSuggestion("");
          setRepeatLetter("");
          setSuggestionActive(false);
        }
      }
    }
  }, [rowData, repeatLetter, userMissedSuggestion]);

  useEffect(() => {
    if (dozenRowData.length > 0) {
      const lastRow = dozenRowData[dozenRowData.length - 1];
      if (Object.keys(lastRow).length === 3) {
        const values = Object.values(lastRow);
        const occurrences = values.reduce((acc, dozen) => {
          acc[dozen] = (acc[dozen] || 0) + 1;
          return acc;
        }, {});
        const repeatedDozen = Object.keys(occurrences).find(
          (dozen) => occurrences[dozen] > 1
        );
        if (repeatedDozen) {
          setRepeatDozen(repeatedDozen);
          setSuggestionActiveDozen(true);
          setUserMissedSuggestionDozen(false);
          setSuggestion(`Suggestion: The repeated letter is ${repeatedDozen}`);
        } else {
          setSuggestion("");
          setRepeatDozen("");
          setSuggestionActiveDozen(false);
        }
      }
    }
  }, [dozenRowData, repeatDozen, userMissedSuggestionDozen]);

  useEffect(() => {
    if (colRowData.length > 0) {
      const lastRow = colRowData[colRowData.length - 1];
      if (Object.keys(lastRow).length === 3) {
        const values = Object.values(lastRow);
        const occurrences = values.reduce((acc, dozen) => {
          acc[dozen] = (acc[dozen] || 0) + 1;
          return acc;
        }, {});
        const repeatedCol = Object.keys(occurrences).find(
          (dozen) => occurrences[dozen] > 1
        );
        if (repeatedCol) {
          setRepeatCol(repeatedCol);
          setSuggestionActiveCol(true);
          setUserMissedSuggestionCol(false);
          setSuggestion(`Suggestion: The repeated letter is ${repeatedCol}`);
        } else {
          setSuggestion("");
          setRepeatCol("");
          setSuggestionActiveCol(false);
        }
      }
    }
  }, [colRowData, repeatCol, userMissedSuggestionCol]);

  // Effect to handle missed suggestions (losses) based on repeated letters
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

  useEffect(() => {
    if (dozenRowData.length > 1) {
      const previousRow = dozenRowData[dozenRowData.length - 2];
      const lastRow = dozenRowData[dozenRowData.length - 1];

      if (
        Object.keys(previousRow).length === 3 &&
        Object.keys(lastRow).length === 3 &&
        repeatDozen
      ) {
        const lastRowValues = Object.values(lastRow);

        if (
          !lastRowValues.includes(repeatDozen) &&
          !userMissedSuggestionDozen
        ) {
          showToast(`Loss Dozen ${repeatDozen}`, "error");
          setUserMissedSuggestionDozen(true);
          setSuggestionActiveDozen(false);
        }
      }
    }
  }, [dozenRowData, repeatDozen, userMissedSuggestionDozen]);

  useEffect(() => {
    if (colRowData.length > 1) {
      const previousRow = colRowData[colRowData.length - 2];
      const lastRow = colRowData[colRowData.length - 1];

      if (
        Object.keys(previousRow).length === 3 &&
        Object.keys(lastRow).length === 3 &&
        repeatCol
      ) {
        const lastRowValues = Object.values(lastRow);

        if (!lastRowValues.includes(repeatCol) && !userMissedSuggestionCol) {
          showToast(`Loss Column ${repeatCol}`, "error");
          setUserMissedSuggestionCol(true);
          setSuggestionActiveCol(false);
        }
      }
    }
  }, [colRowData, repeatCol, userMissedSuggestionCol]);

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

    if (suggestionActive) {
      if (letter === repeatLetter) {
        console.log("User clicked the repeated letter: stop suggestion");
        setSuggestionActive(false);
        setSuggestion("");
        setRepeatLetter("");
      } else {
        setSuggestion(`Suggestion: The repeated letter is ${repeatLetter}`);
      }
    }

    if (doz !== 0 || col !== 0) {
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
      if (suggestionActiveDozen) {
        if (doz === repeatDozen) {
          console.log("User clicked the repeated letter: stop suggestion");
          setSuggestionActiveDozen(false);
          setSuggestion("");
          setRepeatDozen("");
        } else {
          setSuggestion(`Suggestion: The repeated letter is ${repeatLetter}`);
        }
      }

      if (suggestionActiveCol) {
        if (col === repeatCol) {
          console.log("User clicked the repeated col: stop suggestion");
          setSuggestionActiveCol(false);
          setSuggestion("");
          setRepeatCol("");
        } else {
          setSuggestion(`Suggestion: The repeated letter is ${repeatLetter}`);
        }
      }
    } else {
      setDozenRowData([]);
      setRepeatDozen("");
      setSuggestionActiveDozen(false);
      setUserMissedSuggestionDozen(false);
      setColRowData([]);
      setRepeatCol("");
      setSuggestionActiveCol(false);
      setUserMissedSuggestionCol(false);
      localStorage.setItem("dozenRowData4", JSON.stringify([]));
      localStorage.setItem("colRowData4", JSON.stringify([]));
    }
  };

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

          <div className="flex gap-2">
            {suggestionActiveDozen && (
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
            )}

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
                  className={`${
                    repeatLetter === "A" ? "bg-[#58d68d]" : "bg-customGreen"
                  } w-[50%] flex justify-center items-center cursor-pointer border hover:bg-neonGreen`}
                  onClick={() => handleClickNumber("zero", 0, "A", 0, 0)}
                  style={{
                    borderColor: theme === "light" ? "#F5F5F5" : "#0A1F44",
                  }}
                >
                  <p>0</p>
                </div>
                <div
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
                </div>
              </div>

              <div className="w-full h-[93%] flex flex-wrap">
                {data.map((item) => {
                  return (
                    <div
                      className={`w-[33.3%] flex justify-center items-center border cursor-pointer number--divs`}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Project4;
