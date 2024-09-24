import React, { useEffect, useState } from "react";
import History from "../reuse/history/History.jsx";

const Main = () => {
  const [countData, setCountData] = useState(() => {
    const savedCountData = localStorage.getItem('countData');
    return savedCountData ? JSON.parse(savedCountData) : {
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
    const savedSummaryData = localStorage.getItem('summaryData');
    return savedSummaryData ? JSON.parse(savedSummaryData) : {
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
    const isSaved = localStorage.getItem('circleData');
    return isSaved ? JSON.parse(isSaved) : {
      duZero: 0,
      orphe: 0,
      tires: 0,
    };
  });

  const [lastHitData, setLastHitData] = useState(() => {
    const savedLastHitData = localStorage.getItem('lastHitData');
    return savedLastHitData ? JSON.parse(savedLastHitData) : {
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
    const savedData = localStorage.getItem('doubleStreetData');
    return savedData ? JSON.parse(savedData) : {
      one_six: 0,
      seven_twelve: 0,
      thirteen_eighteen: 0,
      nineteen_twentyFour: 0,
      twentyFive_thirty: 0,
      thirtyOne_thirtySix: 0,
    };
  });


  const [nonDoubleStreetData, setNonDoubleStreetData] = useState(() => {
    const savedData = localStorage.getItem('nonDoubleStreetData');
    return savedData ? JSON.parse(savedData) : {
      one_six: 0,
      seven_twelve: 0,
      thirteen_eighteen: 0,
      nineteen_twentyFour: 0,
      twentyFive_thirty: 0,
      thirtyOne_thirtySix: 0,
    };
  });

  const [lastHitNumber, setLastHitNumber] = useState(() => {
    const savedLastHitNumber =  localStorage.getItem('lastHitNumber');
    return savedLastHitNumber? JSON.parse(savedLastHitNumber) : null;
  });

  const [historyData, setHistoryData] = useState(() => {
    const savedHistoryData = localStorage.getItem('historyData');
    return savedHistoryData ? JSON.parse(savedHistoryData) : [];
  });



    // Save `countData` to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('countData', JSON.stringify(countData));
    }, [countData]);
  
    // Save `summaryData` to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('summaryData', JSON.stringify(summaryData));
    }, [summaryData]);
  
    // Save `lastHitData` to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('lastHitData', JSON.stringify(lastHitData));
    }, [lastHitData]);
  
    // Save `lastHitNumber` to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('lastHitNumber', JSON.stringify(lastHitNumber));
    }, [lastHitNumber]);
  
    // Save `historyData` to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('historyData', JSON.stringify(historyData));
    }, [historyData]);

    useEffect(() => {
      localStorage.setItem('doubleStreetData', JSON.stringify(doubleStreetData));
    }, [doubleStreetData]);

    useEffect(() => {
      localStorage.setItem('nonDoubleStreetData', JSON.stringify(nonDoubleStreetData));
    }, [nonDoubleStreetData]);

    useEffect(() => {
      localStorage.setItem('circleData', JSON.stringify(circleData));
    }, [circleData]);

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
    }

    setDoubleStreetData(resetDoubleData)
    setNonDoubleStreetData(resetDoubleData)

    let resetCircleData = {
      duZero: 0,
      orphe: 0,
      tires: 0,
    }

    setCircleData(resetCircleData)

    // Also reset the data in local storage
    localStorage.setItem('countData', JSON.stringify(resetState));
    localStorage.setItem('summaryData', JSON.stringify(resetState));
    localStorage.setItem('lastHitData', JSON.stringify(resetState));
    localStorage.setItem('doubleStreetData', JSON.stringify(resetDoubleData));
    localStorage.setItem('nonDoubleStreetData', JSON.stringify(resetDoubleData));
    localStorage.setItem('circleData', JSON.stringify(resetCircleData));
    localStorage.setItem('lastHitNumber', null);
    localStorage.setItem('historyData', JSON.stringify([]));
  };


  const updateMapping = {
    zero: {
      countUpdates: {  },
      summaryUpdates: {  },
      doubleStreetData : {},
      circleData : { duZero : 1 }
    },
    doubleZero: {
      countUpdates: { },
      summaryUpdates: {  },
      doubleStreetData : {},
      circleData : { duZero : 1 }
    },
    one: {
      countUpdates: { red: 1, odd: 1, one_eighteen: 1, dozen_one: 1, col_one: 1 },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetData : { one_six : 1 },
      circleData : { orphe : 1 }
    },
    two: {
      countUpdates: { black: 1, even: 1, one_eighteen: 1, dozen_one: 1, col_two: 1 },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetData : { one_six : 1 },
      circleData : { duZero : 1 }
    },
    three: {
      countUpdates: { red: 1, odd: 1, one_eighteen: 1, dozen_one: 1, col_three: 1 },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetData : { one_six : 1 },
      circleData : { duZero : 1 }
    },
    four: {
      countUpdates: { black: 1, even: 1, one_eighteen: 1, dozen_one: 1, col_one: 1 },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetData : { one_six : 1 },
      circleData : { duZero : 1 }
    },
    five: {
      countUpdates: { red: 1, odd: 1, one_eighteen: 1, dozen_one: 1, col_two: 1 },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetData : { one_six : 1 },
      circleData : { tires : 1 }
    },
    six: {
      countUpdates: { black: 1, even: 1, one_eighteen: 1, dozen_one: 1, col_three: 1 },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetData : { one_six : 1 },
      circleData : { orphe : 1 }
    },
    seven: {
      countUpdates: { red: 1, odd: 1, one_eighteen: 1, dozen_one: 1, col_one: 1 },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetData : { seven_twelve : 1 },
      circleData : { duZero : 1 }
    },
    eight: {
      countUpdates: { black: 1, even: 1, one_eighteen: 1, dozen_one: 1, col_two: 1 },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetData : { seven_twelve : 1 },
      circleData : { tires : 1 }
    },
    nine: {
      countUpdates: { red: 1, odd: 1, one_eighteen: 1, dozen_one: 1, col_three: 1 },
      summaryUpdates: { lowOddRed: 1 },
      doubleStreetData : { seven_twelve : 1 },
      circleData : { orphe : 1 }
    },
    ten: {
      countUpdates: { black: 1, even: 1, one_eighteen: 1, dozen_one: 1, col_one: 1 },
      summaryUpdates: { lowEvenBlack: 1 },
      doubleStreetData : { seven_twelve : 1 },
      circleData : { tires : 1 }
    },
    eleven: {
      countUpdates: { black: 1, odd: 1, one_eighteen: 1, dozen_one: 1, col_two: 1 },
      summaryUpdates: { lowOddBlack: 1 },
      doubleStreetData : { seven_twelve : 1 },
      circleData : { tires : 1 }
    },
    twelve: {
      countUpdates: { red: 1, even: 1, one_eighteen: 1, dozen_one: 1, col_three: 1 },
      summaryUpdates: { lowEvenRed: 1 },
      doubleStreetData : { seven_twelve : 1 },
      circleData : { duZero : 1 }
    },
    thirteen: {
      countUpdates: { black: 1, odd: 1, one_eighteen: 1, dozen_two: 1, col_one: 1 },
      summaryUpdates: { lowOddBlack: 1 },
      doubleStreetData : { thirteen_eighteen : 1 },
      circleData : { tires : 1 }
    },
    fourteen: {
      countUpdates: { red: 1, even: 1, one_eighteen: 1, dozen_two: 1, col_two: 1 },
      summaryUpdates: { lowEvenRed: 1 },
      doubleStreetData : { thirteen_eighteen : 1 },
      circleData : { orphe : 1 }
    },
    fifteen: {
      countUpdates: { black: 1, odd: 1, one_eighteen: 1, dozen_two: 1, col_three: 1 },
      summaryUpdates: { lowOddBlack: 1 },
      doubleStreetData : { thirteen_eighteen : 1 },
      circleData : { duZero : 1 }
    },
    sixteen: {
      countUpdates: { red: 1, even: 1, one_eighteen: 1, dozen_two: 1, col_one: 1 },
      summaryUpdates: { lowEvenRed: 1 },
      doubleStreetData : { thirteen_eighteen : 1 },
      circleData : { tires : 1 }
    },
    seventeen: {
      countUpdates: { black: 1, odd: 1, one_eighteen: 1, dozen_two: 1, col_two: 1 },
      summaryUpdates: { lowOddBlack: 1 },
      doubleStreetData : { thirteen_eighteen : 1 },
      circleData : { orphe : 1 }
    },
    eighteen: {
      countUpdates: { red: 1, even: 1, one_eighteen: 1, dozen_two: 1, col_three: 1 },
      summaryUpdates: { lowEvenRed: 1 },
      doubleStreetData : { thirteen_eighteen : 1 },
      circleData : { duZero : 1 }
    },
    nineteen: {
      countUpdates: { red: 1, odd: 1, nineteen_thirtySix: 1, dozen_two: 1, col_one: 1 },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetData : { nineteen_twentyFour : 1 },
      circleData : { duZero : 1 }
    },
    twenty: {
      countUpdates: { black: 1, even: 1, nineteen_thirtySix: 1, dozen_two: 1, col_two: 1 },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetData : { nineteen_twentyFour : 1 },
      circleData : { orphe : 1 }
    },
    twentyOne: {
      countUpdates: { red: 1, odd: 1, nineteen_thirtySix: 1, dozen_two: 1, col_three: 1 },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetData : { nineteen_twentyFour : 1 },
      circleData : { duZero : 1 }
    },
    twentyTwo: {
      countUpdates: { black: 1, even: 1, nineteen_thirtySix: 1, dozen_two: 1, col_one: 1 },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetData : { nineteen_twentyFour : 1 },
      circleData : { duZero : 1 }
    },
    twentyThree: {
      countUpdates: { red: 1, odd: 1, nineteen_thirtySix: 1, dozen_two: 1, col_two: 1 },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetData : { nineteen_twentyFour : 1 },
      circleData : { tires : 1 }
    },
    twentyFour: {
      countUpdates: { black: 1, even: 1, nineteen_thirtySix: 1, dozen_two: 1, col_three: 1 },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetData : { nineteen_twentyFour : 1 },
      circleData : { tires : 1 }
    },
    twentyFive: {
      countUpdates: { red: 1, odd: 1, nineteen_thirtySix: 1, dozen_three: 1, col_one: 1 },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetData : { twentyFive_thirty : 1 },
      circleData : { duZero : 1 }
    },
    twentySix: {
      countUpdates: { black: 1, even: 1, nineteen_thirtySix: 1, dozen_three: 1, col_two: 1 },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetData : { twentyFive_thirty : 1 },
      circleData : { duZero : 1 }
    },
    twentySeven: {
      countUpdates: { red: 1, odd: 1, nineteen_thirtySix: 1, dozen_three: 1, col_three: 1 },
      summaryUpdates: { highOddRed: 1 },
      doubleStreetData : { twentyFive_thirty : 1 },
      circleData : { tires : 1 }
    },
    twentyEight: {
      countUpdates: { black: 1, even: 1, nineteen_thirtySix: 1, dozen_three: 1, col_one: 1 },
      summaryUpdates: { highEvenBlack: 1 },
      doubleStreetData : { twentyFive_thirty : 1 },
      circleData : { duZero : 1 }
    },
    twentyNine: {
      countUpdates: { black: 1, odd: 1, nineteen_thirtySix: 1, dozen_three: 1, col_two: 1 },
      summaryUpdates: { highOddBlack: 1 },
      doubleStreetData : { twentyFive_thirty : 1 },
      circleData : { duZero : 1 }
    },
    thirty: {
      countUpdates: { red: 1, even: 1, nineteen_thirtySix: 1, dozen_three: 1, col_three: 1 },
      summaryUpdates: { highEvenRed: 1 },
      doubleStreetData : { twentyFive_thirty : 1 },
      circleData : { tires : 1 }
    },
    thirtyOne: {
      countUpdates: { black: 1, odd: 1, nineteen_thirtySix: 1, dozen_three: 1, col_one: 1 },
      summaryUpdates: { highOddBlack: 1 },
      doubleStreetData : { thirtyOne_thirtySix : 1 },
      circleData : { orphe : 1 }
    },
    thirtyTwo: {
      countUpdates: { red: 1, even: 1, nineteen_thirtySix: 1, dozen_three: 1, col_two: 1 },
      summaryUpdates: { highEvenRed: 1 },
      doubleStreetData : { thirtyOne_thirtySix : 1 },
      circleData : { duZero : 1 }
    },
    thirtyThree: {
      countUpdates: { black: 1, odd: 1, nineteen_thirtySix: 1, dozen_three: 1, col_three: 1 },
      summaryUpdates: { highOddBlack: 1 },
      doubleStreetData : { thirtyOne_thirtySix : 1 },
      circleData : { tires : 1 }
    },
    thirtyFour: {
      countUpdates: { red: 1, even: 1, nineteen_thirtySix: 1, dozen_three: 1, col_one: 1 },
      summaryUpdates: { highEvenRed: 1 },
      doubleStreetData : { thirtyOne_thirtySix : 1 },
      circleData : { orphe : 1 }
    },
    thirtyFive: {
      countUpdates: { black: 1, odd: 1, nineteen_thirtySix: 1, dozen_three: 1, col_two: 1 },
      summaryUpdates: { highOddBlack: 1 },
      doubleStreetData : { thirtyOne_thirtySix : 1 },
      circleData : { duZero : 1 }
    },
    thirtySix: {
      countUpdates: { red: 1, even: 1, nineteen_thirtySix: 1, dozen_three: 1, col_three: 1 },
      summaryUpdates: { highEvenRed: 1 },
      doubleStreetData : { thirtyOne_thirtySix : 1 },
      circleData : { tires : 1 }
    },
  };
  


  const handleClickNumber = (key, number) => {
    const { countUpdates, summaryUpdates, doubleStreetData, circleData } = updateMapping[key];
  
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
      Object.keys(doubleStreetData).forEach((field) => {
        updatedCounts[field] = prevState[field] + doubleStreetData[field];
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
      Object.keys(circleData).forEach((field) => {
        updatedSummary[field] = prevState[field] + circleData[field];
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
      one_six: doubleStreetData.one_six || 0,
      seven_twelve: doubleStreetData.seven_twelve || 0,
      thirteen_eighteen: doubleStreetData.thirteen_eighteen || 0,
      nineteen_twentyFour: doubleStreetData.nineteen_twentyFour || 0,
      twentyFive_thirty: doubleStreetData.twentyFive_thirty || 0,
      thirtyOne_thirtySix: doubleStreetData.thirtyOne_thirtySix || 0
    };


    setLastHitNumber({
      number : number,
      color : clickedDataUpdates.red === 1 ? 'red' : clickedDataUpdates.black === 1 ? 'black' : 'zero'
    })

    setLastHitData((prevLastHitData) => {
      const updatedLastHitData = {};
  
      Object.keys(prevLastHitData).forEach((field) => {
        updatedLastHitData[field] = clickedDataUpdates[field] > 0 ? 0 : prevLastHitData[field] + 1;
      });
  
      return updatedLastHitData;
    });

    setNonDoubleStreetData((prevLastHitData) => {
      const updatedLastHitData = {};
  
      Object.keys(prevLastHitData).forEach((field) => {
        updatedLastHitData[field] = clickedDataDoubleStreetData[field] > 0 ? 0 : prevLastHitData[field] + 1;
      });
  
      return updatedLastHitData;
    });


    let changedHistoryData = {
      color : clickedDataUpdates.red === 1 ? 'red' : clickedDataUpdates.black === 1 ? 'black' : 'zero',
      size : clickedDataUpdates.one_eighteen === 1 ? 'small' : clickedDataUpdates.nineteen_thirtySix === 1 ? 'large' : 'zero',
      odd_even : clickedDataUpdates.odd === 1 ? 'odd' : clickedDataUpdates.even === 1 ? 'even' : 'zero',
      dozen : clickedDataUpdates.dozen_one === 1 ? '1st' : clickedDataUpdates.dozen_two === 1 ? '2nd' : clickedDataUpdates.dozen_three === 1 ? '3rd' : 'zero',
      column : clickedDataUpdates.col_one === 1 ? '1st' : clickedDataUpdates.col_two === 1 ? '2nd' : clickedDataUpdates.col_three === 1 ? '3rd' : 'zero'
    }

    setHistoryData([...historyData, changedHistoryData])

  };

  return (
    <>
      <div className="flex">
        <p>Last Hit Number</p>
        {lastHitNumber ? (
          <div
            className={`${
              lastHitNumber?.color === "red"
                ? "bg-red-500"
                : lastHitNumber.color === "black"
                ? "bg-black"
                : "bg-green-500"
            } h-8 w-10 flex justify-center items-center`}
          >
            <p className="text-white">{lastHitNumber?.number}</p>
          </div>
        ) : (
          <div className="transparent">
            <p className="text-white"></p>
          </div>
        )}
      </div>
      <div className="flex">
        <div>
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
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("one", 1)}
            >
              <p>1</p>
            </div>
            <div
              className="bg-black h-full w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => handleClickNumber("two", 2)}
            >
              <p>2</p>
            </div>
            <div
              className="bg-red-500 h-full w-[20%] flex justify-center items-center cursor-pointer"
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
        </div>

        <button
          onClick={handleClickResetButton}
          className="bg-white text-black h-10 px-4 py-2 rounded-lg"
        >
          Reset
        </button>

        <div>
          <p>LER : {summaryData.lowEvenRed}</p>
          <p>LEB : {summaryData.lowEvenBlack}</p>
          <p>LOR : {summaryData.lowOddRed}</p>
          <p>LOB : {summaryData.lowOddBlack}</p>
          <p>HER : {summaryData.highEvenRed}</p>
          <p>HOR : {summaryData.highOddRed}</p>
          <p>HEB : {summaryData.highEvenBlack}</p>
          <p>HOB : {summaryData.highOddBlack}</p>
        </div>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Category</th>
              <th className="w-[7vw]">Count</th>
              <th className="w-[7vw]">Last Hit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
            </tr>
          </tbody>
        </table>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Category</th>
              <th className="w-[7vw]">Count</th>
              <th className="w-[7vw]">Last Hit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
            </tr>
          </tbody>
        </table>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Category</th>
              <th className="w-[7vw]">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Voisins du Zero</td>
              <td>{circleData.duZero}</td>
            </tr>
            <tr>
              <td>Orphelins</td>
              <td>{circleData.orphe}</td>
            </tr>
            <tr>
              <td>Tiers du Cylindre</td>
              <td>{circleData.tires}</td>
            </tr>
          </tbody>
        </table>
        <div></div>
      </div>
      {/* <Routes>
        <Route path="/*" element={<History  historyData={historyData} />} />
      </Routes> */}
      <History historyData={historyData} />
    </>
  );
};

export default Main;
