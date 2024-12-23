import React, { useState, useRef, useEffect } from "react";
import { FaRedo } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/project3.css";
import FindPoints from "../reuse/project3/FindPoints";
import BankerImg from '../.././assets/imgs/red_chip_bold.png';
import PlayerImg from '../.././assets/imgs/blue_chip_bold.png';
// import GaugeChart from "react-gauge-chart";
import WaitImg from '../../assets/imgs/wait1.gif';
import { useToast } from "../resources/Toast.jsx";


// lock the application
import Lock from "../resources/Lock";
import axios from "axios";
import { USER_DETAILS } from "../api/ApiDetails.js";


import BaccaratMoney from "../reuse/project3/MoneyManagement.jsx";
import BaccaratLock from "../resources/BaccaratLock.jsx";
import BaccaratMaintanance from "../reuse/project3/BaccaratMaintanance.jsx";




const Project3 = () => {

  const showToast = useToast()
  const [columns, setColumns] = useState(() => {
    const savedColumns = localStorage.getItem("columns");
    return savedColumns ? JSON.parse(savedColumns) : [];
  });
  const [activeBoard, setActiveBoard] = useState("bigRoard");
  const containerRef = useRef(null);
  const [repeaterCoin, setRepeaterCoin] = useState("");
  const [clickCount, setClickCount] = useState({ P: 0, B: 0, T: 0 });

  const [bankerPoints, setBankerPoints] = useState(0);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [tiePoints, setTiePoints] = useState(0);

  const [bankerPointsLong, setBankerPointsLong] = useState(0);
  const [playerPointsLong, setPlayerPointsLong] = useState(0);
  const [tiePointsLong, setTiePointsLong] = useState(0);
  const [isSuggestionActive, setIsSuggestionActive] = useState(false);
  const [suggestionCoin, setSuggestionCoin] = useState("");



  const [planLockScreen, setPlanLockScreen] = useState(true);

  const [firstLogic, setFirstLogic] = useState(false);
  const [secondLogic, setSecondLogic] = useState(true);

  const [maintananceLock,setMaintananceLockScreen ] = useState(true); 
 

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        let userData = JSON.parse(sessionStorage.getItem("userData"));
        const response = await axios.get(`${USER_DETAILS}/${userData._id}`);

        if (!response.data.data.projectsPlan.project3) {
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


  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       let userData = JSON.parse(sessionStorage.getItem("userData"));
  //       const response = await axios.get(`${USER_DETAILS}/${userData._id}`);

  //       if (!response.data.data?.projectSubscription?.baccarat?.projectAccess) {
  //         setPlanLockScreen(true);
  //       } else {
  //         setPlanLockScreen(false);
  //       }
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   };

  //   // Call the async function
  //   fetchUserDetails();
  // }, []);


  const [currentImg, setCurrentImg] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);


  const [resetTriggered, setResetTriggered] = useState(false);


  

  const [totalWinLoss, setTotalWinLoss] = useState({
    totalWin: 0,
    totalLoss : 0,
    playerWin: 0,
    playerLoss : 0,
    bankerWin: 0,
    bankerLoss:0
  })




  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
    localStorage.setItem("clickCount", JSON.stringify(clickCount));
  }, [columns, clickCount]);



  // Add a new result to the respective column
  // const handleClick = (type) => {
  //   setColumns((prevColumns) => {
  //     const newColumns = [...prevColumns];
  //     const lastColumn = newColumns[newColumns.length - 1];

  //     if (lastColumn && lastColumn.type === type) {
  //       lastColumn.values.push(type);
  //     } else {
  //       newColumns.push({ type, values: [type] });
  //     }
  //     localStorage.setItem("columns", JSON.stringify(newColumns));
  //     return newColumns;
  //   });
  //   setClickCount((prevCount) => ({
  //     ...prevCount,
  //     [type]: prevCount[type] + 1,
  //   }));
  // };

  const handleClick = (type) => {


    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const lastColumn = newColumns[newColumns.length - 1];

      if (type === "T") {
        if (lastColumn) {
          lastColumn.values.push(type);
        }
        return newColumns;
      }

      if (lastColumn && lastColumn.type === type) {
        lastColumn.values.push(type);
      } else {
        newColumns.push({ type, values: [type] });
      }
      return newColumns;
    });

    // Update click count
    setClickCount((prevCount) => ({
      ...prevCount,
      [type]: prevCount[type] + 1,
    }));
  };

 // Reset all columns and click count
 const handleReset = () => {
  setColumns([]);
  setClickCount({ P: 0, B: 0, T: 0 });
  setRepeaterCoin("");
  setBankerPoints(0);
  setPlayerPoints(0);
  setTiePoints(0);
  setBankerPointsLong(0);
  setPlayerPointsLong(0);
  setTiePointsLong(0);
  setTotalWinLoss({
    totalWin: 0,
  totalLoss : 0,
  playerWin: 0,
  playerLoss : 0,
  bankerWin: 0,
  bankerLoss:0
  });

setSuggestionCoin('');
    setIsSuggestionActive(false)

  setResetTriggered((prev) => !prev);
};

  // Undo the last action
  const handleUndo = () => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const lastColumn = newColumns[newColumns.length - 1];

      if (lastColumn) {
        if (lastColumn.values.length > 1) {
          lastColumn.values.pop();
        } else {
          newColumns.pop();
        }
      }

      return newColumns;
    });
    setClickCount((prevCount) => {
      let newCount = { ...prevCount };
      const lastColumn = columns[columns.length - 1];

      if (lastColumn && lastColumn.values.length > 0) {
        const lastValue = lastColumn.values[lastColumn.values.length - 1];

        if (lastValue === "P") {
          newCount.P = Math.max(newCount.P - 1, 0);
        } else if (lastValue === "B") {
          newCount.B = Math.max(newCount.B - 1, 0);
        } else if (lastValue === "T") {
          newCount.T = Math.max(newCount.T - 1, 0);
        }
      }
      localStorage.setItem("clickCount", JSON.stringify(newCount));

      return newCount;
    });
  
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [columns]);

  const nineClick = columns.map((obj) => obj.values).flat();
  const columnsBead = [];
  for (let i = 0; i < nineClick.length; i += 6) {
    columnsBead.push(nineClick.slice(i, i + 6));
  }

  // logic for baccarat

  // useEffect(() => {
  //   if (nineClick.length >= 0) {
  //     if (columns.length === 0) return;

  //     // Extract all values from each object and flatten into a single array
  //     const allValues = columns
  //       .map((obj) => obj.values)
  //       .flat()
  //       .filter((value) => value === "B" || value === "P");

  //     console.log("allValues", allValues);

  //     // Split allValues into chunks of three
  //     const chunks = [];
  //     for (let i = 0; i < allValues.length; i += 3) {
  //       chunks.push(allValues.slice(i, i + 3));
  //     }

  //     // console.log("chunks", chunks);

  //     // Ensure we have at least two sets to compare
  //     if (chunks.length < 2) return;

  //     const lastSet = chunks[chunks.length - 1];
  //     const previousSet = chunks[chunks.length - 2];
  //     // console.log("lastSet", lastSet);
  //     // console.log("previousSet", previousSet);

  //     // Step 1: Compare first elements for "follow" or "flip"
  //     let repeaterValue;
  //     if (allValues.length === 4) {
  //       let isFollow = lastSet[0] === previousSet[0];
  //       // console.log("isFollow", isFollow);
  //       let oppositeValue = previousSet[1] === "P" ? "B" : "P";
  //       repeaterValue = isFollow ? previousSet[1] : oppositeValue;
  //     } else if (lastSet.length === 3) {
  //       let isFollow = lastSet[2] === previousSet[2];
  //       // console.log("isFollow", isFollow);
  //       let oppositeValue = lastSet[0] === "P" ? "B" : "P";
  //       repeaterValue = isFollow ? lastSet[0] : oppositeValue;
  //     } else {
  //       let findLength = lastSet.length - 1;
  //       let isFollow = lastSet[findLength] === previousSet[findLength];
  //       // console.log("isFollow", isFollow);
  //       let oppositeValue = previousSet[findLength + 1] === "P" ? "B" : "P";
  //       repeaterValue = isFollow ? previousSet[findLength + 1] : oppositeValue;
  //     }

  //     console.log("repeaterValue", repeaterCoin);

  //     if (repeaterValue) {
  //       // setRepeaterCoin(repeaterValue);
  //     } else {
  //       // setRepeaterCoin("Wait");
  //     }



  //     if (repeaterCoin) {
  //       if (repeaterCoin === 'P' && allValues[allValues.length - 1] === 'P') {
  //         setTotalWinLoss((prev) => ({
  //           ...prev,
  //           playerWin: prev.playerWin + 1,
  //         }));
  //       } else if (repeaterCoin === 'P' && (allValues[allValues.length - 1] === 'B' || allValues[allValues.length - 1] === 'T')) {
  //         setTotalWinLoss((prev) => ({
  //           ...prev,
  //           playerLoss: prev.playerLoss + 1,
  //         }));
  //       } else if (repeaterCoin === 'B' && allValues[allValues.length - 1] === 'B') {
  //         setTotalWinLoss((prev) => ({
  //           ...prev,
  //           bankerWin: prev.bankerWin + 1,
  //         }));
  //       } else if (repeaterCoin === 'B' && (allValues[allValues.length - 1] === 'P' || allValues[allValues.length - 1] === 'T')) {
  //         setTotalWinLoss((prev) => ({
  //           ...prev,
  //           bankerLoss: prev.bankerLoss + 1,
  //         }));
  //       }
      
  //       // Total win/loss update
  //       if(allValues.length > 4){
  //         if (repeaterCoin === allValues[allValues.length - 1]) {
  //           setTotalWinLoss((prev) => ({
  //             ...prev,
  //             totalWin: prev.totalWin + 1,
  //           }));
  //         } else if(repeaterCoin !== allValues[allValues.length - 1]){
  //           setTotalWinLoss((prev) => ({
  //             ...prev,
  //             totalLoss: prev.totalLoss + 1,
  //           }));
  //         }
  //       }
  //     }
      
      
  //   }
  // }, [columns]);

  // useEffect(() => {
  //   if (nineClick.length >= 0) {
  //     if (columns.length === 0) return;

  //     // Extract all values from each object and flatten into a single array
  //     const allValues = columns
  //       .map((obj) => obj.values)
  //       .flat()
  //       .filter((value) => value === "B" || value === "P");

  //     // console.log("allValues", allValues);

  //     // Split allValues into chunks of three
  //     const chunks = [];
  //     for (let i = 0; i < allValues.length; i += 3) {
  //       chunks.push(allValues.slice(i, i + 3));
  //     }

  //     // console.log("chunks", chunks);

  //     // Ensure we have at least two sets to compare
  //     if (chunks.length < 2) return;

  //     const lastSet = chunks[chunks.length - 1];
  //     const previousSet = chunks[chunks.length - 2];
  //     // console.log("lastSet", lastSet);
  //     // console.log("previousSet", previousSet);

  //     // Step 1: Compare first elements for "follow" or "flip"
  //     let repeaterValue;
  //     if (allValues.length === 4) {
  //       let isFollow = lastSet[0] === previousSet[0];
  //       // console.log("isFollow", isFollow);
  //       let oppositeValue = previousSet[1] === "P" ? "B" : "P";
  //       repeaterValue = isFollow ? previousSet[1] : oppositeValue;
  //     } else if (lastSet.length === 3) {
  //       let isFollow = lastSet[2] === previousSet[2];
  //       // console.log("isFollow", isFollow);
  //       let oppositeValue = lastSet[0] === "P" ? "B" : "P";
  //       repeaterValue = isFollow ? lastSet[0] : oppositeValue;
  //     } else {
  //       let findLength = lastSet.length - 1;
  //       let isFollow = lastSet[findLength] === previousSet[findLength];
  //       // console.log("isFollow", isFollow);
  //       let oppositeValue = previousSet[findLength + 1] === "P" ? "B" : "P";
  //       repeaterValue = isFollow ? previousSet[findLength + 1] : oppositeValue;
  //     }

  //     // console.log("repeaterValue", repeaterValue);

  //     if (repeaterValue) {
  //       setRepeaterCoin(repeaterValue);
  //     } else {
  //       setRepeaterCoin("Wait");
  //     }
  //   }
  // }, [columns]);



  // useEffect(() => {
  //  if(nineClick.length >=9){
  //   if (columns.length === 0) return;

  //   // Extract all values from each object and flatten into a single array
  //   const allValues = columns.map((obj) => obj.values).flat();

  //   // Split allValues into chunks of three
  //   const chunks = [];
  //   for (let i = 0; i < allValues.length; i += 3) {
  //     chunks.push(allValues.slice(i, i + 3));
  //   }

  //   if (repeaterCoin === allValues[allValues.length - 1]) {
  //     setRepeaterCoin("Wait");
  //     toast.success("You Win! 👍", {
  //       className: "bg-Tie text-white",
  //     });
  //   }

  //   // Take the last complete chunk (if it has exactly 3 elements)
  //   const lastChunk = chunks[chunks.length - 1];
  //   if (!lastChunk || lastChunk.length < 3) return;

  //   const valueCount = lastChunk.reduce((acc, value) => {
  //     acc[value] = (acc[value] || 0) + 1;
  //     return acc;
  //   }, {});

  //   const repeaterValue = Object.keys(valueCount).find(
  //     (value) => valueCount[value] >= 2
  //   );

  //   if (repeaterValue) {
  //     setRepeaterCoin(repeaterValue);
  //   } else {
  //     setRepeaterCoin("Wait");
  //   }
  //  }
  // }, [columns]);

  const getNonTPrevValue = (columnsBead, colIndex, index) => {
    let currentCol = colIndex;
    let currentIndex = index - 1;

    while (currentCol >= 0) {
      if (currentIndex >= 0) {
        const value = columnsBead[currentCol][currentIndex];
        if (value === "B" || value === "P") {
          return value;
        }
        currentIndex--;
      } else {
        currentCol--;
        if (currentCol >= 0) {
          currentIndex = columnsBead[currentCol].length - 1;
        }
      }
    }
    return null; 
  };

  const [activeTab, setActiveTab] = useState("Short Trend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Short Trend for Baccarat

  const getStatus = (bankerPoints, playerPoints) => {
    // Create an object for the concept scores
    const conceptScores = {
      banker: bankerPoints,
      player: playerPoints
    };
  
    const values = Object.values(conceptScores);
    const maxScore = Math.max(...values);
    const minScore = Math.min(...values);
  
    const statusImages = {
      hot: {
        text: 'HOT',
        image: 'https://res.cloudinary.com/dxsdme4qy/image/upload/v1733227962/hot_qktoti.jpg',
      },
      cold: {
        text: 'COLD',
        image: 'https://res.cloudinary.com/dxsdme4qy/image/upload/v1733227963/cold_nzqmy2.jpg',
      }
    };
  
    return Object.keys(conceptScores).reduce((status, key) => {
      if (conceptScores[key] === 0) {
        status[key] = statusImages.cold; // If score is 0, set as "cold"
      } else if (conceptScores[key] === maxScore) {
        status[key] = statusImages.hot; // Highest score is "hot"
      } else if (conceptScores[key] === minScore) {
        status[key] = statusImages.cold; // Lowest score is "cold"
      } 
      return status;
    }, {});
  };
  
  
  const ShortScore = getStatus(bankerPoints, playerPoints);
  

// Long Trend for Baccarat

  const getStatus1 = (bankerPointsLong,playerPointsLong) => {
    // Create an object for the concept scores
    const conceptScores = {
      banker: bankerPointsLong,
      player: playerPointsLong,
    };
  
    const values = Object.values(conceptScores);
    const maxScore = Math.max(...values);
    const minScore = Math.min(...values);
  
    const statusImages = {
      hot: {
        text: 'Hot',
        image: 'https://res.cloudinary.com/dxsdme4qy/image/upload/v1733227962/hot_qktoti.jpg',
      },
      cold: {
        text: 'COLD',
        image: 'https://res.cloudinary.com/dxsdme4qy/image/upload/v1733227963/cold_nzqmy2.jpg',
      },
      
    };
  
    return Object.keys(conceptScores).reduce((status, key) => {
      if (conceptScores[key] === 0) {
        status[key] = statusImages.cold; // If score is 0, set as "cold"
      } else if (conceptScores[key] === maxScore) {
        status[key] = statusImages.hot; // Highest score is "hot"
      } else if (conceptScores[key] === minScore) {
        status[key] = statusImages.cold; // Lowest score is "cold"
      } 
      return status;
    }, {});
  };
  
  const LongScore = getStatus1(bankerPointsLong,playerPointsLong);  


// Flip design


useEffect(() => {
  setIsFlipping(true);
  const timeout = setTimeout(() => {
    if (repeaterCoin === "P") {
      setCurrentImg(PlayerImg);
    } else if (repeaterCoin === "B") {
      setCurrentImg(BankerImg);
    } else {
      setCurrentImg(WaitImg);
    }
    setIsFlipping(false); // Stop animation
  }, 1000); 

  return () => clearTimeout(timeout);
}, [repeaterCoin, PlayerImg, BankerImg, WaitImg]);


const shortPlayerGauge = Math.max(0, Math.round(playerPoints / 7 * 10) / 10);
const shortBankerGauge = Math.max(0, Math.round(bankerPoints / 7 * 10) / 10);
const shortTieGauge = Math.max(0, Math.round(tiePoints / 7 * 10) / 10);


const LongPlayerGauge = Math.max(0, Math.round(playerPointsLong / 19 * 10) / 10);
const LongBankerGauge = Math.max(0, Math.round(bankerPointsLong /19 * 10) / 10);
const LongTieGauge = Math.max(0, Math.round(tiePointsLong / 19 * 10) / 10);



const handleCheckboxChange = (e) => {
  const allValues = columns
    .map((obj) => obj.values)
    .flat()
    .filter((value) => value === "B" || value === "P");
  if (allValues.length > 5) {
    setIsSuggestionActive(e.target.checked);
  } else {
    e.preventDefault();
    showToast("Need 6 digits", "error");
  }
};


var countof17 = columns
.map(obj=> obj.values)
.flat()



  return (
    <div className="flex flex-col custom-md:flex-row  lg:items-start md:items-center bg-purplegrad baccaratMain">
        {/* Left Panel */}
        <div className="left-panel  text-white p-2 w-100 mx-auto">
          {/* Container for columns */}
          <div className="flex flex-col justify-center items-center">
            <div className="tabs tabs-boxed bg-purple-500  w-full">
              {/* Buttons to switch between boards */}
              <div className="flex justify-center  w-full p-1 gap-2 ">
                <button
                  onClick={() => setActiveBoard("bigRoard")}
                  className={`px-4 py-2  w-[50%] text-white rounded-xl font-semibold transition sm:px-2 sm:py-1 ${
                    activeBoard === "bigRoard"
                      ? "bg-superPurple shadow-md"
                      : "bg-purplegrad hover:bg-slate-300 "
                  }`}
                >
                  Big Road
                </button>
                {/* <button
                  onClick={() => setActiveBoard("beadRoard")}
                  className={`px-4 py-2  text-white w-[50%] rounded-xl font-semibold transition sm:px-2 sm:py-1 ${
                    activeBoard === "beadRoard"
                      ? "bg-superPurple shadow-md"
                      : "bg-purplegrad hover:bg-slate-300 "
                  }`}
                >
                  Bead Road 


                </button> */}
                
              </div>

              {/* Container for both Roards */}
              <div className="flex w-full justify-start bg-purplegrad rounded-md">
                {/* Big Road Ui */}
              
                {activeBoard === "bigRoard" && (
                  <div >
                    <div
                    className="rounded-2xl p-2 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] "
                    style={{
                      height: "200px",
                      overflow: "scroll",
                      scrollbarWidth: "none",
                    }}
                    ref={containerRef}
                  >
                    <div
                      id="bigRoard"
                      className=" "
                      style={{ height: "100%"}}
                      
                    >
                      {/* column containers */}
                      <div className="flex flex-row gap-2 "style={{width:"335px"}}>
                      {columns.map((column, colIndex) => (
                        <div
                          key={colIndex}
                          className="flex flex-col items-center relative gap-2 "
                        >
                          {column.values.map((value, index) => {
                            const prevValue =
                              column.values.length > 0 ? column.values[0] : null;

                            // Apply separate styles for specific indices
                            const specialStyle =
                              index === 6
                                ? "absolute top-[160px] left-[32px]" // Move 6th index
                                : index === 7
                                ? "absolute top-[160px] left-[65px]" // Move 7th index
                                : index === 8
                                ? "absolute top-[160px] left-[96px]" // Move 8th index
                                : index === 9
                                ? "absolute top-[160px] left-[128px]" // Move 9th index
                                : index === 10
                                ? "absolute top-[160px] left-[160px]" // Move 10th index
                                : index === 11
                                ? "absolute top-[160px] left-[193px]" // Move 11th index
                                : index === 12
                                ? "absolute top-[160px] left-[224px]" // Move 12th index
                                : "";
                            const backgroundClass =
                              value === "T"
                                ? prevValue === "B"
                                  ? `inline-block bg-Banker text-white text-lg h-6 w-6 text-[7px] rounded-full ring-2 ring-green-600 ${specialStyle}`
                                  : prevValue === "P"
                                  ? `inline-block bg-Player text-white text-lg h-6 w-6 text-[7px] rounded-full ring-2 ring-green-600 ${specialStyle}`
                                  : `${specialStyle}`
                                : value === "B"
                                ? `bg-Banker w-6 h-6 ${specialStyle}`
                                : value === "P"
                                ? `bg-Player w-6 h-6 ${specialStyle}`
                                : `bg-tie w-6 h-6 ${specialStyle}`;

                            return (
                              <div
                                key={index}
                                className={`flex items-center justify-center text-sm text-lg font-semibold text-white rounded-full ${backgroundClass}`}
                              >
                                {value}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                      </div>
                    </div>
                    
                    </div>
                  </div>
                )}

                {/* Bead Road UI */}

                
                
              </div>
              
            </div>
              <div className="flex justify-end w-full mt-2">
                {/* <button
                  onClick={handleUndo}
                  className="group  bg-customBlack border-2 border-slate-300 gap-1 px-3  text-white flex rounded-full justify-center items-center shadow-lg hover:bg-superPurple hover:border-customBlack"
                >
                 Undo <FaArrowRight className="text-md transform group-hover:translate-x-2 transition-all duration-300" /> 
                </button> */}
                <button
                    onClick={handleReset}
                    className="p-1 bg-customBlack text-white border-2 p-2  border-slate-300 rounded-full shadow-lg hover:bg-superPurple hover:border-customBlack"
                  >
                    <FaRedo className="text-md transform transition-transform duration-300 ease-in-out hover:rotate-180" />
                  </button>
               </div>
            <div className="flex flex-col relative " >
              <div className="flex items-center gap-3">
                <div className="flex-col flex items-end gap-2 mt-12">
                  {/* <div className="flex justify-between w-full mr-2">
                      <p className="button-slant-right flex items-center bg-Player text-white   md:px-2 rounded-sm text-sm md:text-base space-x-2">
                      <span>
                        <FaTrophy />
                      </span>
                      <span>{totalWinLoss.bankerWin}</span>
                    </p>
                    <p className="button-slant-right flex items-center bg-Player text-white   md:px-2 rounded-sm text-sm md:text-base space-x-2">
                      <span>
                      <FaHeartBroken />
                      </span>
                      <span>{totalWinLoss.bankerLoss}</span>
                    </p>
                  </div> */}
                  <button
                    className="button-slant-right bg-Player px-8 md:px-12 py-1.5 text-white rounded-sm text-sm md:text-base font-medium glass-button"
                    onClick={() => handleClick("P")}
                  >
                    <span>Player</span>
                  </button>
                </div>
                <div
                  
                >
                  <div
                    className="border-[3px] rounded-full gold-border1 relative flex justify-center items-center"
                  >
                  <span
                    className={`rounded-full flex justify-center items-center h-[100px] w-[100px] ${
                      isFlipping ? "animate-coin-flip" : ""
                    }`}
                    style={{
                      transformStyle: "preserve-3d", 
                    }}
                  >
                    <img
                      src={currentImg} 
                      alt="Coin Image"
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </span>
                  </div>

                </div>
                <div className="flex-col flex items-start gap-2 mt-12">

                {/* <div className="flex justify-between w-full ml-2">
                <p className="button-slant-left flex items-center bg-Banker text-white   md:px-2 rounded-sm text-sm md:text-base space-x-2">
                  <span>
                    <FaTrophy />
                  </span>
                  <span>{totalWinLoss.playerWin}</span>
                </p>
                <p className="button-slant-left flex items-center bg-Banker text-white   md:px-2 rounded-sm text-sm md:text-base space-x-2">
                  <span>
                  <FaHeartBroken />
                  </span>
                  <span>{totalWinLoss.playerLoss}</span>
                </p>
                </div> */}

                  <button
                    className="button-slant-left bg-Banker px-8 md:px-12 text-white py-1.5 rounded-sm text-sm md:text-base font-medium glass-button1"
                    onClick={() => handleClick("B")}
                  >
                    <span>Banker</span>
                  </button>
                </div>
              </div>
              {/* <div className="flex justify-center">
                <div className="flex flex-col items-center mt-2">
                  {/* <p className='button-slant-middle bg-Tie text-white px-2 md:px-4 py-1 rounded-md text-sm md:text-base buttonCount'  ><span>{clickCount.T}</span></p> 
                   <button
                    className="button-slant-middle bg-Tie px-8 md:px-12 py-1.5 text-white rounded-sm text-sm md:text-base  font-medium glass-button2"
                    onClick={() => handleClick("T")}
                  >
                    <span>Tie</span>
                  </button> 
                </div>
              </div> */}
            </div>



            {/* <button className="bg-customBlack rounded-md font-bold text-superPurple p-2" onClick={() => {
            const allValues = columns
            .map((obj) => obj.values)
            .flat()
            .filter((value) => value === "B" || value === "P");
            if(allValues.length > 17 ){
              setIsSuggestionActive(!isSuggestionActive)
            }else{
              showToast('Need 17 digits', 'error')
            }
          }} >{isSuggestionActive ? 'On' : 'Off'}</button> */}

         
          
          <div className="relative flex gap-4 mt-3" >
          <div>
              {countof17.length >= 1 ? (
                (() => {
                  const total = totalWinLoss.totalWin + totalWinLoss.totalLoss;
                  const winPercentage =
                    total > 0 ? (totalWinLoss.totalWin / total) * 100 : 0;

                  if (winPercentage > 60) {
                    return (
                      <div className="px-4 py-1 bg-green-500 hot-button cursor-not-allowed">
                        Hot
                      </div>
                    );
                  } else if (winPercentage < 40) {
                    return (
                      <div className="px-4 bg-red-500 cold-button cursor-not-allowed">
                        Cold
                      </div>
                    );
                  } else {
                    return (
                      <div className="px-3 bg-yellow-500 stable-button cursor-not-allowed">
                        Stable
                      </div>
                    );
                  }
                })()
              ) : (
                <div className="px-5 bg-gray-500 wait-button cursor-not-allowed">
                  Wait
                </div>
              )}
            </div>

            <div className="">
              {countof17.length >= 1 ? (
                (() => {
                  const total = totalWinLoss.totalWin + totalWinLoss.totalLoss;
                  const winPercentage =
                    total > 0 ? (totalWinLoss.totalWin / total) * 100 : 0;

                  if (winPercentage > 60) {
                    return (
                      <div className="px-4 py-1 bg-green-500 hot-button cursor-not-allowed">
                        Table to Play
                      </div>
                    );
                  } else if (winPercentage < 40) {
                    return (
                      <div className="px-4 bg-red-500 cold-button cursor-not-allowed">
                        Avoid This Table
                      </div>
                    );
                  } else {
                    return (
                      <div className="px-3 bg-yellow-500 stable-button cursor-not-allowed">
                        Double-Edged Table
                      </div>
                    );
                  }
                })()
              ) : (
                <div className="px-5 bg-gray-500 wait-button cursor-not-allowed">
                  Hold for the signal.
                </div>
              )}
            </div>

            <div class="checkbox-wrapper-41 relative mt-1">
              <input type="checkbox" checked={isSuggestionActive} onChange={handleCheckboxChange}/>
            </div>
          </div>
          <div className="flex" >
            {/* <button className="mx-4 bg-superPurple rounded-lg text-white font-semibold border-none py-1 px-3 hover:bg-purple-400" onClick={() => {
              setFirstLogic(!firstLogic)
              setSecondLogic(!secondLogic)
              handleReset()
            }} >Core  <span className="px-2 bg-customBlack rounded-xl">{firstLogic ? 'On' : 'Off'}</span></button> */}
            <button className="mx-4 bg-superPurple  rounded-lg text-white font-semibold border-none py-1 px-3 hover:bg-purple-400" onClick={() => {
              setFirstLogic(!firstLogic)
              setSecondLogic(!secondLogic)
              handleReset()
            }} > Hit & Run <span  className="px-2 bg-customBlack rounded-xl"> {secondLogic ? 'On' : 'Off'}</span></button>
          </div>




            {/* <BaccaratCard/> */}

          {/* <h2>Total :</h2>
          <div className="my-3 flex text-white" >
            <h4 className="mx-2" >Win : {totalWinLoss.totalWin}</h4>
            <h4 className="mx-2" >Loss : {totalWinLoss.totalLoss}</h4>
          </div>

          <h2>Individual :</h2>
          <div className="my-3 flex text-white" >
            <h4 className="mx-2" >Banker Win : {totalWinLoss.bankerWin}</h4>
            <h4 className="mx-2" >Banker Loss : {totalWinLoss.bankerLoss}</h4>
            <h4 className="mx-2" >Player Win : {totalWinLoss.playerWin}</h4>
            <h4 className="mx-2" >Player Loss : {totalWinLoss.playerLoss}</h4>
          </div>


          <h2>Short Trend :</h2>
          <div className="my-3 flex text-white" >
            <h4 className="mx-2" >Banker : {bankerPoints}</h4>
            <h4 className="mx-2" >Player : {playerPoints}</h4>
            <h4 className="mx-2" >Tie : {tiePoints}</h4>
          </div>


          <h2>Long Trend :</h2>
          <div className="my-3 flex text-white" >
            <h4 className="mx-2" >Banker : {bankerPointsLong}</h4>
            <h4 className="mx-2" >Player : {playerPointsLong}</h4>
            <h4 className="mx-2" >Tie : {tiePointsLong}</h4>
          </div>
 */}

            {/* <h2>Total :</h2>
          <div className="my-3 flex text-white" >
            <h4 className="mx-2" >Win : {totalWinLoss.totalWin}</h4>
            <h4 className="mx-2" >Loss : {totalWinLoss.totalLoss}</h4>
          </div> */}

            {/* <h2>Short Trend :</h2>
            <div className="my-3 flex text-white" >
              <h4 className="mx-2" >Banker : {bankerPoints}</h4>
              <h4 className="mx-2" >Player : {playerPoints}</h4>
              <h4 className="mx-2" >Tie : {tiePoints}</h4>
            </div>




            <h2>Long Trend :</h2>
            <div className="my-3 flex text-white" >
              <h4 className="mx-2" >Banker : {bankerPointsLong}</h4>
              <h4 className="mx-2" >Player : {playerPointsLong}</h4>
              <h4 className="mx-2" >Tie : {tiePointsLong}</h4>
            </div>

            
        


          <h2>Individual :</h2>
          <div className="my-3 flex text-white" >
            <h4 className="mx-2" >Banker Win : {totalWinLoss.bankerWin}</h4>
            <h4 className="mx-2" >Banker Loss : {totalWinLoss.bankerLoss}</h4>
            <h4 className="mx-2" >Player Win : {totalWinLoss.playerWin}</h4>
            <h4 className="mx-2" >Player Loss : {totalWinLoss.playerLoss}</h4>
          </div> */}

            {/* Button Container */}
            {/* <div className="w-full rounded-md shadow-lg flex flex-wrap justify-center gap-4">
          
            <button
              onClick={() => handleClick("P")}
              className="flex flex-col items-start text-white rounded-md bg-Player rounded-r-3xl p-3 z-10"
              style={{ position: "relative", left: "40px", width: "90px" }}
              id="blue"
            >
              <h2 className="text-md font-bold">PLAYER</h2>
              <div className="mt-2 text-sm font-semibold">
                <BsPerson /> {clickCount.P}
              </div>
            </button>

            
            <button
              onClick={() => handleClick("T")}
              className="relative w-40 flex flex-col items-center bg-Tie text-white p-3"
              id="green"
            >
              <h2 className="text-md font-bold">TIE</h2>
              <div className="mt-2 text-sm font-semibold">
                <BsPerson /> {clickCount.T}
              </div>
            </button>

            
            <button
              onClick={() => handleClick("B")}
              className="w-1/3 flex flex-col items-end bg-Banker rounded-md text-white rounded-l-3xl p-3"
              style={{ position: "relative", right: "40px", width: "90px" }}
              id="brown"
            >
              <h2 className="text-md font-bold">BANKER</h2>
              <div className="mt-2 text-sm font-semibold">
                <BsPerson /> {clickCount.B}
              </div>
            </button>
          </div> */}
          </div>

          
          
         
        </div>
        
        {/* Right Panel */}
        <div className="flex justify-center items-center h-full w-full">
          <div className="right-panel text-center p-2 lg:w-[500px] md:w-[600px] custom-sm:w-[380px] w-full max-w-[600px]  flex justify-center items-center">
            <BaccaratMoney />
          </div>
        </div>


        <FindPoints
        setBankerPoints={setBankerPoints}
        setPlayerPoints={setPlayerPoints}
        columns={columns}
        setTiePoints={setTiePoints}
        setBankerPointsLong={setBankerPointsLong}
        setPlayerPointsLong={setPlayerPointsLong}
        setTiePointsLong={setTiePointsLong}
        setRepeaterCoin={setRepeaterCoin}
        repeaterCoin={repeaterCoin}
        resetTriggered={resetTriggered}
        isSuggestionActive={isSuggestionActive}
        setTotalWinLoss={setTotalWinLoss}
        setSuggestionCoin={setSuggestionCoin}
        suggestionCoin={suggestionCoin}
        firstLogic={firstLogic}
        secondLogic={secondLogic}
      />
        {/* {planLockScreen && <BaccaratLock setPlanLockScreen={setPlanLockScreen} />} */}
        {maintananceLock && <BaccaratMaintanance setMaintananceLockScreen={setMaintananceLockScreen} />}

      </div>
      
  );
};

export default Project3;
 {/* {activeBoard === "bigRoard" && (
          <div
            className="  rounded-2xl p-2 w-full sm:w-[400px] md:w-[500px] lg:w-[850px]"
            style={{
              height: "200px",
              overflow: "scroll",
              scrollbarWidth: "none",
            }} ref={containerRef}
          >
            <div
              id="bigRoard"
              className="flex flex-row gap-2"
              style={{ height: "100%" 
              }}
            >
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col items-center gap-2" style={{position:"relative"}}>
                {column.values.map((value, index) => {
                  var prevValue = column.values.length > 0 ? column.values[0] : null;

                  const specialStyle =
                  index === 6
                    ? "ring-4 ring-blue-500 font-bold text-yellow-300 " // Style for 6th index
                    : index === 7
                    ? "ring-4 ring-red-500 font-bold text-green-300" // Style for 7th index
                    : index === 8
                    ? "ring-4 ring-purple-500 font-bold text-pink-300" // Style for 8th index
                    : "";


                    const backgroundClass =
                    value === "T"
                      ? prevValue === "B"
                        ? `inline-block bg-Banker text-white text-lg h-6 w-6 text-[7px] rounded-full ring-2 ring-green-600 ${specialStyle}`
                        : prevValue === "P"
                        ? `inline-block bg-Player text-white text-lg h-6 w-6 text-[7px] rounded-full ring-2 ring-green-600 ${specialStyle}`
                        : `${specialStyle}`
                      : value === "B"
                      ? `bg-Banker w-6 h-6 ${specialStyle}`
                      : value === "P"
                      ? `bg-Player w-6 h-6 ${specialStyle}`
                      : `bg-tie w-6 h-6 ${specialStyle}`;
      

                  // const backgroundClass =
                  //   value === "T"
                  //     ? prevValue === "B"
                  //       ? "inline-block bg-Banker text-white text-lg h-6 w-6 text-[7px] rounded-full ring-2 ring-green-600"
                  //       : prevValue === "P"
                  //       ? "inline-block bg-Player text-white text-lg h-6 w-6 text-[7px] rounded-full ring-2 ring-green-600"
                  //       : ""
                  //     : value === "B"
                  //     ? "bg-Banker w-6 h-6"
                  //     : value === "P"
                  //     ? "bg-Player w-6 h-6"
                  //     : "bg-tie w-6 h-6";
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-center text-sm  text-lg font-semibold text-white rounded-full ${backgroundClass}`
                    }
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            ))}

            </div>
          </div>
        )} */}

        {/* button container */}
      {/* <div className="w-full flex justify-end gap-3 px-1 ">
        <button
          onClick={handleUndo}
          className="group  bg-customBlack border-2 border-slate-300 gap-1 px-3 text-white flex rounded-full justify-center items-center shadow-lg hover:bg-superPurple hover:border-customBlack"
        >
          <p>Undo</p>
          <FaArrowRight className="text-md transform group-hover:translate-x-2 transition-all duration-300" />
        </button>

        <button
          onClick={handleReset}
          className="p-2 bg-customBlack text-white border-2 border-slate-300 rounded-full shadow-lg hover:bg-superPurple hover:border-customBlack"
        >
          <FaRedo className="text-md transform transition-transform duration-300 ease-in-out hover:rotate-180" />
        </button>
      </div> 
      
      */}


      // {activeBoard === "beadRoard" && (
      //   <div
      //     className=" bg-purplegrad  p-2 w-full sm:w-[380px] md:w-[500px] lg:w-[600px]"
      //     style={{
      //       height: "200px",
      //       overflow: "scroll",
      //       scrollbarWidth: "none",
      //     }}
      //   >
      //     <div
      //       id="beadRoard"
      //       className="flex flex-row gap-2 bg-purplegrad"
      //       style={{ height: "100%" }}
      //     >
      //       {columnsBead.map((column, colIndex) => (
      //         <div
      //           key={colIndex}
      //           className="flex flex-col items-center gap-2"
      //         >
      //           {column.map((value, index) => {
      //             // Determine the previous non-"T" value
      //             const prevNonTValue =
      //               value === "T"
      //                 ? getNonTPrevValue(columnsBead, colIndex, index)
      //                 : value;

      //             const backgroundClass =
      //               value === "T"
      //                 ? prevNonTValue === "B"
      //                   ? "inline-block bg-Banker text-white text-lg h-6 w-6 text-[7px] rounded-full ring-2 ring-green-600"
      //                   : prevNonTValue === "P"
      //                   ? "inline-block bg-Player text-white text-lg h-6 w-6 text-[7px] rounded-full ring-2 ring-green-600"
      //                   : "bg-Tie w-6 h-6" // Default for "T"
      //                 : value === "B"
      //                 ? "bg-Banker w-6 h-6"
      //                 : value === "P"
      //                 ? "bg-Player w-6 h-6"
      //                 : "bg-Tie"; // Default for any other value

      //             return (
      //               <div
      //                 key={index}
      //                 className={`flex items-center justify-center text-sm w-6 h-6 text-lg font-semibold text-white rounded-full ${backgroundClass}`}
      //               >
      //                 {value}
      //               </div>
      //             );
      //           })}
      //         </div>
      //       ))}

      //       {/* {columnsBead.map((column, colIndex) => (
      //   <div
      //     key={colIndex}
      //     className="flex flex-col items-center gap-2"
      //   >
      //     {column.map((value, index) => (
      //       <div
      //         key={index}
      //         className={`flex items-center justify-center text-sm w-6 h-6 text-lg font-semibold text-white rounded-full ${
      //           value === "B"
      //             ? "bg-Banker"
      //             : value === "P"
      //             ? "bg-Player"
      //             : "bg-Tie"
      //         }`}
      //       >
      //         {value}
      //       </div>
      //     ))}
      //   </div>
      // ))} */}
      //     </div>
      //   </div>
      // )}