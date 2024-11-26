import React, { useEffect, useState } from "react";
import { data } from "../reuse/project4/logic/RouletteData.js";
import "../../Style/Main.css";
import { GrPowerReset } from "react-icons/gr";

import GaugeChart from "react-gauge-chart";

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
import axios from "axios";
import { USER_DETAILS } from "../api/ApiDetails.js";
import { json } from "react-router-dom";
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

  const maxItems = 36; // Maximum items in the FIFO list
  const initialScores = Array.from({ length: 36 }, (_, i) => 36 - i); // Initial score array from 30 to 1
  const [landedNumbers, setLandedNumbers] = useState(() => {
    const savedLandedNumbers = localStorage.getItem("landedNumbers");
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
    localStorage.setItem("countData4", JSON.stringify(countData));
  }, [countData]);

  useEffect(() => {
    localStorage.setItem("landedNumbers", JSON.stringify(landedNumbers));
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
    localStorage.setItem("StatisticsData", JSON.stringify(statsData));
  }, [statsData]);

  useEffect(() => {
    localStorage.setItem("StatisticsData", JSON.stringify(statsData));
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
    localStorage.setItem("landedNumbers", JSON.stringify([]));
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
    setLandedNumbers((prev) => [{ key, number, letter, doz, col }, ...prev]);

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

  const calculatePercentage = (
    numerator,
    denominator1,
    denominator2,
    denominator3
  ) => {
    const total = denominator1 + denominator2 + denominator3;
    const percentage = Math.round((numerator / total) * 100);
    if (total === 0) return { className: "", label: " " };
    // Return 0 if the total is 0 to avoid NaN

    if (percentage >= 70) {
      return { className: "bg-red-500 text-white", label: "Hot" };
    } else if (percentage >= 50) {
      return { className: "bg-transparent", label: "Stable" };
    } else {
      return { className: "bg-green-300 text-black", label: "Cold" };
    }
  };

// ===== i need to add this logic to project 1 & 4 integration



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

// this for speedometer hot stable cold function


  const getHSC = (value) => {
    const percentage = Math.round((value / 666) * 100);
    return percentage <= 22 
      ? "COLD" 
      : percentage <= 33 
      ? "STABLE" 
      : "HOT";
  };
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
              <div className="w-[82%] ml-[18%] h-[7%]  text-white flex">
                <div
                  className={`${
                    repeatLetter === "A" && rowHoverEffect
                      ? "bg-[#58d68d]"
                      : "bg-customGreen"
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
                <div className="w-[17%] max-lg:w[30rem] text-white border-white h-[86%]">
                  <div
                    className="h-[33.33%] border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                    style={{
                      backgroundColor:
                        repeatDozen === "1" && dozenHoverEffect
                          ? "#58d68d"
                          : "",
                    }}
                  >
                    <p className="rotate-90 w-[10rem] max-xl:text-sm max-sm:text-xs">
                      1st 12
                    </p>
                  </div>

                  <div
                    className="h-[33.33%] border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                    style={{
                      backgroundColor:
                        repeatDozen === "2" && dozenHoverEffect
                          ? "#58d68d"
                          : "",
                    }}
                  >
                    <p className="rotate-90 w-[10rem] max-xl:text-sm max-sm:text-xs">
                      2nd 12
                    </p>
                  </div>

                  <div
                    className="h-[33.33%] border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                    style={{
                      backgroundColor:
                        repeatDozen === "3" && dozenHoverEffect
                          ? "#58d68d"
                          : "",
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
                        className={`w-[33.33%] flex justify-center text-white items-center border cursor-pointer number--divs`}
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
                  })}

                  {/* cols */}
                  <div className="w-full flex border-white text-white">
                    <div
                      className="w-[33.3%]  h-full border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                      style={{
                        backgroundColor:
                          repeatCol === "1" && colHoverEffect ? "#58d68d" : "",
                      }}
                    >
                      2 - 1
                    </div>
                    <div
                      className="w-[33.3%] h-full border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                      style={{
                        backgroundColor:
                          repeatCol === "2" && colHoverEffect ? "#58d68d" : "",
                      }}
                    >
                      2 - 1
                    </div>
                    <div
                      className="w-[33.3%] h-full border flex justify-center items-center cursor-pointer hover:bg-green-200 hover:text-black font-semibold"
                      style={{
                        backgroundColor:
                          repeatCol === "3" && colHoverEffect ? "#58d68d" : "",
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
      {/* <div>
      <p>Dozen 1: {dozenScores[1]} ({dozenStatus[1]})</p>
    <p>Dozen 2: {dozenScores[2]} ({dozenStatus[2]})</p>
    <p>Dozen 3: {dozenScores[3]} ({dozenStatus[3]})</p>

    <p>Column 1: {columnScores[1]} ({columnStatus[1]})</p>
    <p>Column 2: {columnScores[2]} ({columnStatus[2]})</p>
    <p>Column 3: {columnScores[3]} ({columnStatus[3]})</p>

    <p>A: {rowDataScores.A} ({rowDataStatus['A']})</p>
    <p>B: {rowDataScores.B} ({rowDataStatus['B']})</p>
    <p>C: {rowDataScores.C} ({rowDataStatus['C']})</p>
        </div> */}
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
          // scrollbarWidth: "",
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
                className="border border-2 border-purple-500  p-3 rounded-xl"
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
                className="border border-2 border-purple-500  p-3 rounded-xl"
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
                className="border border-2 border-purple-500  p-3 rounded-xl"
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
              <div className="   text-center  " style={{width:"33%"}}>
                Numbers
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



              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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


              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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


              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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

              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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


              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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


              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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


              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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



              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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


              <div className="border flex border-2 border-purple-500  p-1 rounded-xl">
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






          {/* <table
            className="border w-[35rem] max-md:w-[22rem] max-sm:w-[21rem]  "
            style={{ marginTop: "35rem" }}
          >
            <tr className="max-sm:h-20 max-md:h-20">
              <th className="w-[30%] max-sm:w-[30] border py-2 bg-yellow-500 text-black">
                Category
              </th>
              <th className="w-[40%] max-sm:w-[50] border bg-yellow-500 text-black break-words relative">
                Hot/Stable/Cold
                <div
                  className="text-gray-400 absolute  cursor-pointer bg-neutral-700 w-5 h-5 flex justify-center items-center rounded-full"
                  onMouseEnter={() => setI_btn(true)}
                  onMouseLeave={() => setI_btn(false)}
                  style={{ right: "10px", bottom: "6px" }}
                >
                  i
                </div>
                <div
                  className="bg-customPurple p-2 flex justify-between mb-4 text-start  items-start text-white w-60 h-24 max-sm:w-45 max-sm:h-35 absolute bottom-6 max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%]"
                  style={{ display: i_btn ? "flex" : "none" }}
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
              <th className="w-[30%] bg-yellow-500 max-sm:w-[20] text-black">
                ON/OFF
              </th>
            </tr>

           
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
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
          </table> */}

          
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

          {/* <table className="border w-[35rem] max-md:w-[22rem] max-sm:w-[18rem] mt-6">
            <tr className="max-sm:h-20 max-md:h-20">
              <th className="w-[30%] max-sm:w-[30] border py-2 bg-yellow-500 text-black">
                Numbers
              </th>
              <th className="w-[40%] max-sm:w-[50] border bg-yellow-500 text-black break-words relative">
                Hot/Stable/Cold
                <div
                  className="text-gray-400 absolute  cursor-pointer bg-neutral-700 w-5 h-5 flex justify-center items-center rounded-full"
                  onMouseEnter={() => setI1_btn(true)}
                  onMouseLeave={() => setI1_btn(false)}
                  style={{ right: "10px", bottom: "6px" }}
                >
                  i
                </div>
                <div
                  className="bg-customPurple p-2 flex justify-between mb-4 text-start  items-start text-white w-60 h-24 max-sm:w-45 max-sm:h-35 absolute bottom-6 max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%]"
                  style={{ display: i1_btn ? "flex" : "none" }}
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
              <th className="w-[30%] bg-yellow-500 max-sm:w-[20] text-black">
                Score
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {rowDataScores.A}
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {rowDataScores.B}
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {rowDataScores.C}
              </td>
            </tr>
          </table> */}

         

          {/* 3'rd Table 1'stDozen,2nd-Dozen,3rd-Dozen */}

          {/* <p>Dozen 1: {dozenScores[1]} ({dozenStatus[1]})</p>
                <p>Dozen 2: {dozenScores[2]} ({dozenStatus[2]})</p>
                <p>Dozen 3: {dozenScores[3]} ({dozenStatus[3]})</p> */}

          {/* <table className="border w-[35rem] max-md:w-[22rem] max-sm:w-[18rem] mt-6">
            <tr className="max-sm:h-20 max-md:h-20">
              <th className="w-[30%] max-sm:w-[30] border py-2 bg-yellow-500 text-black">
                Dozen
              </th>
              <th className="w-[40%] max-sm:w-[50] border bg-yellow-500 text-black break-words relative">
                Hot/Stable/Cold
                <div
                  className="text-gray-400 absolute  cursor-pointer bg-neutral-700 w-5 h-5 flex justify-center items-center rounded-full"
                  onMouseEnter={() => setI2_btn(true)}
                  onMouseLeave={() => setI2_btn(false)}
                  style={{ right: "10px", bottom: "6px" }}
                >
                  i
                </div>
                <div
                  className="bg-customPurple p-2 flex justify-between mb-4 text-start  items-start text-white w-60 h-24 max-sm:w-45 max-sm:h-35 absolute bottom-6 max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%]"
                  style={{ display: i2_btn ? "flex" : "none" }}
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
              <th className="w-[30%] bg-yellow-500 max-sm:w-[20] text-black">
                Score
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {dozenScores[1]}
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {dozenScores[2]}
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {dozenScores[3]}
              </td>
            </tr>
          </table> */}

          {/* 4th table Column Table 1ST column, 2nd Column ,3rd Column */}

          {/* <table className="border w-[35rem] max-md:w-[22rem] max-sm:w-[18rem] mt-6">
            <tr className="max-sm:h-20 max-md:h-20">
              <th className="w-[30%] max-sm:w-[30] border py-2 bg-yellow-500 text-black">
                Columns
              </th>
              <th className="w-[40%] max-sm:w-[50] border bg-yellow-500 text-black break-words relative">
                Hot/Stable/Cold
                <div
                  className="text-gray-400 absolute  cursor-pointer bg-neutral-700 w-5 h-5 flex justify-center items-center rounded-full"
                  onMouseEnter={() => setI3_btn(true)}
                  onMouseLeave={() => setI3_btn(false)}
                  style={{ right: "10px", bottom: "6px" }}
                >
                  i
                </div>
                <div
                  className="bg-customPurple p-2 flex justify-between mb-4 text-start  items-start text-white w-60 h-24 max-sm:w-45 max-sm:h-35 absolute bottom-6 max-sm:text-xs max-sm:right-[10%] max-lg:-right-[15%] -right-[35%]"
                  style={{ display: i3_btn ? "flex" : "none" }}
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
              <th className="w-[30%] bg-yellow-500 max-sm:w-[20] text-black">
                Score
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {columnScores[1]}
              </td>
            </tr>

          
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                Column 2
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {columnScores[2]}
              </td>
            </tr>

           
            <tr>
              <td className="font-semibold text-center p-1 border max-sm:text-sm">
                Column 3
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
              <td className="font-semibold text-center border max-sm:text-sm  ">
                {columnScores[3]}
              </td>
            </tr>
          </table> */}
        </div>
      </div>

      <div
        className="h-[25vh] mt-5 w-full overflow-y-scroll text-center rounded-xl p-2 scrollOff"
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
          className={`text-lg font-bold my-4 text-center ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Money Management Tool
        </h2> 
         <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
          <i className="fa-regular fa-clock mx-3 "></i>Coming Soon !
        </span>
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
      </div>

      {planLockScreen && <Lock setPlanLockScreen={setPlanLockScreen} />}
    </>
  );
};

export default Project4;
