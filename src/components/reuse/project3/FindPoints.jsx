import React, { useEffect, useState } from "react";

const FindPoints = ({
  setBankerPoints,
  setPlayerPoints,
  columns,
  setTiePoints,
  setBankerPointsLong,
  setPlayerPointsLong,
  setTiePointsLong,
  setRepeaterCoin,
  repeaterCoin,
  resetTriggered,
  isSuggestionActive,
  setTotalWinLoss,
  setSuggestionCoin,
  suggestionCoin,
  firstLogic,
  secondLogic,
}) => {
  const [startSuggestionCount, setStartSuggestionCount] = useState(6);

  useEffect(() => {
    // Extract the last 3 values directly
    const allValues = columns
      .map((obj) => obj.values)
      .flat()
      .filter((value) => value === "B" || value === "P" || value === "T");

    // console.log("all values", allValues);

    // If there are fewer than 3 valid values, skip processing
    if (allValues.length < 3) {
      setBankerPoints(0);
      setPlayerPoints(0);
      // Optional: If you're using Tie points
      setTiePoints(0);
      return;
    }

    const lastThreeValues = allValues.slice(-3); // Get the last 3 values
    // console.log("last three values", lastThreeValues);

    // Initialize points
    let calculateBankerPoints = 0;
    let calculatePlayerPoints = 0;
    let tiePoints = 0;

    // Apply the rules based on the last 3 values
    // Rule 1: Consecutive Wins (+2 points per streak)
    for (let i = 1; i < lastThreeValues.length; i++) {
      if (lastThreeValues[i] === lastThreeValues[i - 1]) {
        if (lastThreeValues[i] === "B") calculateBankerPoints += 2;
        if (lastThreeValues[i] === "P") calculatePlayerPoints += 2;
      }
    }

    // Rule 2: Cold Result (-2 points per missing result)
    if (!lastThreeValues.includes("B")) calculateBankerPoints -= 2;
    if (!lastThreeValues.includes("P")) calculatePlayerPoints -= 2;
    // if (!lastThreeValues.includes("T")) tiePoints -= 2;

    // Rule 3: Single Occurrence (+1 point per result that appears only once)
    const valueCounts = lastThreeValues.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
    console.log("value counts", valueCounts);
    if (valueCounts["B"] === 1) calculateBankerPoints += 1;
    if (valueCounts["P"] === 1) calculatePlayerPoints += 1;
    // if (valueCounts["T"] === 1) tiePoints += 1;

    // Rule 4: Repeater in Last 2 Spins (+3 points)
    if (
      lastThreeValues.length >= 2 &&
      lastThreeValues[lastThreeValues.length - 1] ===
        lastThreeValues[lastThreeValues.length - 2]
    ) {
      const lastResult = lastThreeValues[lastThreeValues.length - 1];
      if (lastResult === "B") calculateBankerPoints += 3;
      if (lastResult === "P") calculatePlayerPoints += 3;
      // if (lastResult === "T") tiePoints += 3;
    }

    // Rule 5: Alternating Pattern (+2 points per alternation)
    if (
      lastThreeValues.length >= 2 &&
      ((lastThreeValues[lastThreeValues.length - 1] === "B" &&
        lastThreeValues[lastThreeValues.length - 2] === "P") ||
        (lastThreeValues[lastThreeValues.length - 1] === "P" &&
          lastThreeValues[lastThreeValues.length - 2] === "B"))
    ) {
      calculateBankerPoints += 2;
      calculatePlayerPoints += 2;
    }

    // Rule 6: Tie Occurs (+1 point per Tie)
    if (lastThreeValues[lastThreeValues.length - 1] === "T") {
      tiePoints += 1;
    }

    // Rule 7: Tie After Streak (+2 points)
    if (
      allValues.length >= 3 &&
      lastThreeValues[lastThreeValues.length - 1] === "T" &&
      lastThreeValues[lastThreeValues.length - 2] ===
        lastThreeValues[lastThreeValues.length - 3]
    ) {
      tiePoints += 2;
    }

    // Update the state with the calculated points
    setBankerPoints(calculateBankerPoints);
    setPlayerPoints(calculatePlayerPoints);
    // Optional: If you're using Tie points
    setTiePoints(tiePoints);
  }, [columns]);

  useEffect(() => {
    // Extract and filter the last 9 valid values directly
    const allValues = columns
      .map((obj) => obj.values)
      .flat()
      .filter((value) => value === "B" || value === "P" || value === "T");

    console.log("all values", allValues);

    // If there are fewer than 9 valid values, skip processing
    if (allValues.length < 9) return;

    const lastNineValues = allValues.slice(-9); // Get the last 9 values
    console.log("last nine values", lastNineValues);

    // Initialize points
    let calculateBankerPoints = 0;
    let calculatePlayerPoints = 0;
    let tiePoints = 0;

    // Apply rules based on the last 9 values
    // Rule 1: Consecutive Wins (+2 points per streak)
    for (let i = 1; i < lastNineValues.length; i++) {
      if (lastNineValues[i] === lastNineValues[i - 1]) {
        if (lastNineValues[i] === "B") calculateBankerPoints += 2;
        if (lastNineValues[i] === "P") calculatePlayerPoints += 2;
      }
    }

    // Rule 2: Cold Result (-2 points per missing result)
    if (!lastNineValues.includes("B")) calculateBankerPoints -= 2;
    if (!lastNineValues.includes("P")) calculatePlayerPoints -= 2;
    // if (!lastNineValues.includes("T")) tiePoints -= 2;

    // Rule 3: Single Occurrence (+1 point per result that appears only once)
    const valueCounts = lastNineValues.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
    if (valueCounts["B"] === 1) calculateBankerPoints += 1;
    if (valueCounts["P"] === 1) calculatePlayerPoints += 1;
    // if (valueCounts["T"] === 1) tiePoints += 1;

    // Rule 4: Repeater in Last 3 Spins (+3 points)
    if (
      lastNineValues.length >= 3 &&
      lastNineValues[lastNineValues.length - 1] ===
        lastNineValues[lastNineValues.length - 2] &&
      lastNineValues[lastNineValues.length - 2] ===
        lastNineValues[lastNineValues.length - 3]
    ) {
      const lastResult = lastNineValues[lastNineValues.length - 1];
      if (lastResult === "B") calculateBankerPoints += 3;
      if (lastResult === "P") calculatePlayerPoints += 3;
      // if (lastResult === "T") tiePoints += 3;
    }

    // Rule 5: Alternating Pattern (+2 points per alternation)
    let alternationCount = 1;
    for (let i = 1; i < lastNineValues.length; i++) {
      if (
        (lastNineValues[i] === "B" && lastNineValues[i - 1] === "P") ||
        (lastNineValues[i] === "P" && lastNineValues[i - 1] === "B")
      ) {
        alternationCount++;
      } else {
        if (alternationCount >= 6) {
          // +2 points for every full alternation cycle of 6 spins
          calculateBankerPoints += Math.floor(alternationCount / 2) * 2;
          calculatePlayerPoints += Math.floor(alternationCount / 2) * 2;
        }
        alternationCount = 1; // Reset when pattern breaks
      }
    }

    // Rule 6: Tie Occurs (+1 point per Tie)
    if (lastNineValues[lastNineValues.length - 1] === "T") {
      tiePoints += 1;
    }

    // Rule 7: Tie After Streak (+2 points)
    if (
      lastNineValues.length >= 5 &&
      lastNineValues[lastNineValues.length - 1] === "T" &&
      lastNineValues[lastNineValues.length - 2] ===
        lastNineValues[lastNineValues.length - 3] &&
      lastNineValues[lastNineValues.length - 3] ===
        lastNineValues[lastNineValues.length - 4]
    ) {
      tiePoints += 2;
    }

    // Update the state with the calculated points
    setBankerPointsLong(calculateBankerPoints);
    setPlayerPointsLong(calculatePlayerPoints);
    // Optional: If you're using Tie points
    setTiePointsLong(tiePoints);
  }, [columns]);

  const [isWin, setIsWin] = useState(false);
  const [initialSlice, setInitialSlice] = useState(0);
  const [patternWonLength, setPatternWonLength] = useState(null);
  const [patternWin, setPatternWin] = useState(false);
  const [logicWin, setLogicWin] = useState(false);

  useEffect(() => {
    setIsWin(false);
    setInitialSlice(0);
    setPatternWonLength(null);
    setPatternWin(false);
    setLogicWin(false);
  }, [resetTriggered]);

  useEffect(() => {
    if (firstLogic) {
      const allValues = columns
        .map((obj) => obj.values)
        .flat()
        .filter((value) => value === "B" || value === "P");
      if (allValues.length < 1) return;

      if (allValues.length === 6) {
        setInitialSlice(6);
      }

      console.log("isWin", isWin);

      let slicedArray = allValues.slice(initialSlice);
      console.log("sliced array", slicedArray);
      const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
      };
      const chunks = chunkArray(slicedArray, 18);
      // console.log("Chunks:", chunks);
      let lastChunk = chunks[chunks.length - 1];
      const sixChunks = chunkArray(lastChunk, 6);
      let lastSixChunks = sixChunks[sixChunks.length - 1];
      // console.log("lastSixChunks", lastSixChunks);

      if (
        suggestionCoin === "P" &&
        suggestionCoin !== slicedArray[slicedArray.length - 1]
      ) {
        setTotalWinLoss((prev) => ({
          ...prev,
          totalLoss: prev.totalLoss + 1,
          playerLoss: prev.playerLoss + 1,
        }));
      } else if (
        suggestionCoin === "B" &&
        suggestionCoin !== slicedArray[slicedArray.length - 1]
      ) {
        setTotalWinLoss((prev) => ({
          ...prev,
          totalLoss: prev.totalLoss + 1,
          bankerLoss: prev.bankerLoss + 1,
        }));
      }

      if (slicedArray[slicedArray.length - 1] === suggestionCoin) {
        if (isSuggestionActive && allValues.length > startSuggestionCount) {
          setRepeaterCoin("Wait");
        }

        if (lastSixChunks.length <= 3) {
          setPatternWin(true);
          setIsWin(true);
        } else if (lastSixChunks.length > 3) {
          setLogicWin(true);
        }

        setTotalWinLoss((prev) => ({
          ...prev,
          totalWin: prev.totalWin + 1,
          bankerWin:
            suggestionCoin === "B" ? prev.bankerWin + 1 : prev.bankerWin,
          playerWin:
            suggestionCoin === "P" ? prev.playerWin + 1 : prev.playerWin,
        }));
        // setSuggestionCoin("Wait");
        // setIsWin(true);
        // setPatternWonLength(lastSixChunks.length);

        if (
          lastSixChunks[lastSixChunks.length - 1] ===
          lastSixChunks[lastSixChunks.length - 2]
        ) {
          if (
            lastSixChunks[lastSixChunks.length - 1] ===
            lastSixChunks[lastSixChunks.length - 3]
          ) {
            setSuggestionCoin("Wait");
            setIsWin(true);
            // setPatternWin(true);
            setPatternWonLength(lastSixChunks.length);
            console.log("Last three values are the same; skipping suggestion.");
          } else {
            if (isSuggestionActive && allValues.length > startSuggestionCount) {
              setRepeaterCoin(lastSixChunks[lastSixChunks.length - 1]);
            }
            setSuggestionCoin(lastSixChunks[lastSixChunks.length - 1]);
          }
        }

        console.log("isWin", isWin);

        return;
      }

      console.log("lastSixChunks", lastSixChunks.length);
      console.log("lastChunk", lastChunk.length);
      // console.log("repeaterCoin", repeaterCoin);
      // console.log("isSuggestionActive", isSuggestionActive);
      // console.log("startSuggestionCount", startSuggestionCount);
      console.log("isWin", isWin);
      // console.log("initialSlice", initialSlice);

      if (!isWin && !patternWin) {
        if (lastChunk.length < 3) {
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(
              slicedArray[slicedArray.length - 1] === "P" ? "P" : "B"
            );
          }
          setSuggestionCoin(
            slicedArray[slicedArray.length - 1] === "P" ? "P" : "B"
          );
        } else if (lastChunk.length === 3) {
          let findWins = lastChunk[1] === lastChunk[2];
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(findWins ? lastChunk[2] : "Wait");
          }
          setSuggestionCoin(findWins ? lastChunk[2] : "Wait");
        } else if (lastChunk.length === 4) {
          let findWins = lastChunk[2] === lastChunk[3];
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(findWins ? lastChunk[2] : "Wait");
          }
          setSuggestionCoin(findWins ? lastChunk[2] : "Wait");
        } else if (lastChunk.length === 5) {
          const countP = lastChunk.filter((char) => char === "P").length;
          const countB = lastChunk.filter((char) => char === "B").length;

          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(countP > countB ? "P" : "B");
          }
          setSuggestionCoin(countP > countB ? "P" : "B");
        } else if (lastChunk.length === 6) {
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(lastChunk[0] === "P" ? "P" : "B");
          }
          setSuggestionCoin(lastChunk[0] === "P" ? "P" : "B");
        } else if (lastChunk.length === 7) {
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(lastChunk[1] === "P" ? "P" : "B");
          }
          setSuggestionCoin(lastChunk[1] === "P" ? "P" : "B");
        } else if (lastChunk.length === 8) {
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(lastChunk[2] === "P" ? "P" : "B");
          }
          setSuggestionCoin(lastChunk[2] === "P" ? "P" : "B");
        } else if (lastChunk.length === 9) {
          let findWins = lastChunk[7] === lastChunk[8];
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(findWins ? lastChunk[8] : "Wait");
          }
          setSuggestionCoin(findWins ? lastChunk[8] : "Wait");
        } else if (lastChunk.length === 10) {
          let findWins = lastChunk[8] === lastChunk[9];
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(findWins ? lastChunk[8] : "Wait");
          }
          setSuggestionCoin(findWins ? lastChunk[8] : "Wait");
        } else if (lastChunk.length === 11) {
          const countP = lastSixChunks.filter((char) => char === "P").length;
          const countB = lastSixChunks.filter((char) => char === "B").length;

          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(countP > countB ? "P" : "B");
          }
          setSuggestionCoin(countP > countB ? "P" : "B");
        } else if (lastChunk.length === 12) {
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(lastChunk[0] === "P" ? "B" : "P");
          }
          setSuggestionCoin(lastChunk[0] === "P" ? "B" : "P");
        } else if (lastChunk.length === 13) {
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(lastChunk[1] === "P" ? "B" : "P");
          }
          setSuggestionCoin(lastChunk[1] === "P" ? "B" : "P");
        } else if (lastChunk.length === 14) {
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(lastChunk[2] === "P" ? "B" : "P");
          }
          setSuggestionCoin(lastChunk[2] === "P" ? "B" : "P");
        } else if (lastChunk.length === 15) {
          let findWins = lastChunk[13] === lastChunk[14];
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(findWins ? lastChunk[13] : "Wait");
          }
          setSuggestionCoin(findWins ? lastChunk[13] : "Wait");
        } else if (lastChunk.length === 16) {
          let findWins = lastChunk[14] === lastChunk[15];
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(findWins ? lastChunk[14] : "Wait");
          }
          setSuggestionCoin(findWins ? lastChunk[14] : "Wait");
        } else if (lastChunk.length === 16) {
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin("Wait");
          }
          setSuggestionCoin("Wait");
        } else if (lastChunk.length === 17) {
          const countP = lastSixChunks.filter((char) => char === "P").length;
          const countB = lastSixChunks.filter((char) => char === "B").length;

          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(countP > countB ? "P" : "B");
          }
          setSuggestionCoin(countP > countB ? "P" : "B");
        } else if (lastChunk.length === 18) {
          setInitialSlice(allValues.length);
          setRepeaterCoin("Wait");
        }
      } else {
        console.log("pattern", patternWin);
        console.log("logic", logicWin);
        // if (lastSixChunks.length === 6 && patternWin) {
        if (patternWin) {
          if (lastSixChunks.length === 6) {
            setIsWin(false);
            setPatternWin(false);
            setLogicWin(false);
            setPatternWonLength(null);
            setInitialSlice(allValues.length);
            setRepeaterCoin("Wait");
            setSuggestionCoin("Wait");
          } else if (lastSixChunks.length < 6) {
            setIsWin(true);
            setRepeaterCoin("Wait");
            setSuggestionCoin("Wait");
          }
        } else if (lastSixChunks.length === 6 && logicWin && !patternWin) {
          if (lastChunk.length === 6) {
            setIsWin(false);
            if (isSuggestionActive && allValues.length > startSuggestionCount) {
              setRepeaterCoin(lastChunk[0] === "B" ? "B" : "P");
            }
            setSuggestionCoin(lastChunk[0] === "B" ? "B" : "P");
          } else if (lastChunk.length === 12) {
            setIsWin(false);
            if (isSuggestionActive && allValues.length > startSuggestionCount) {
              setRepeaterCoin(lastChunk[0] === "P" ? "B" : "P");
            }
            setSuggestionCoin(lastChunk[0] === "P" ? "B" : "P");
          }
        } else {
          setRepeaterCoin("Wait");
          setSuggestionCoin("Wait");
        }

        // if (lastSixChunks.length === 6 && patternWonLength <= 3) {
        //   setIsWin(false);
        //   setPatternWin(false);
        //   setLogicWin(false)
        //   setPatternWonLength(null);
        //   setInitialSlice(allValues.length);
        // }else if(lastSixChunks.length === 6 && patternWonLength > 3 && lastChunk.length === 6) {
        //   setIsWin(false);
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[0] === "B" ? "B" : "P");
        //   }
        //   setSuggestionCoin(lastChunk[0] === "B" ? "B" : "P");
        // }else if(lastSixChunks.length === 6 && patternWonLength > 3 && lastChunk.length === 12) {
        //   setIsWin(false);
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[0] === "P" ? "B" : "P");
        //   }
        //   setSuggestionCoin(lastChunk[0] === "P" ? "B" : "P");
        // }
      }
    }
  }, [columns]);

  useEffect(() => {
    if (secondLogic) {
      const allValues = columns
        .map((obj) => obj.values)
        .flat()
        .filter((value) => value === "B" || value === "P");
      if (allValues.length < 1) return;

      // if (allValues.length === 6) {
      //   setInitialSlice(6);
      //   setIsWin(false);
      //   setInitialSlice(allValues.length);
      //   setSuggestionCoin("Wait");
      //   setRepeaterCoin("Wait");
      //   return;
      // }

      

      let slicedArray = allValues.slice(initialSlice);

      const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
      };
      const chunks = chunkArray(slicedArray, 6);
      // console.log("Chunks:", chunks);
      let lastChunk = chunks[chunks.length - 1];
      // const sixChunks = chunkArray(lastChunk, 6);
      // let lastSixChunks = sixChunks[sixChunks.length - 1];
      // console.log("slicedArray", slicedArray);
      // console.log("chunks", chunks);
      // console.log("lastChunk", lastChunk);

      if (
        suggestionCoin === "P" &&
        suggestionCoin !== lastChunk[lastChunk?.length - 1]
      ) {
        setTotalWinLoss((prev) => ({
          ...prev,
          totalLoss: prev.totalLoss + 1,
          playerLoss: prev.playerLoss + 1,
        }));
      } else if (
        suggestionCoin === "B" &&
        suggestionCoin !== lastChunk[lastChunk?.length - 1]
      ) {
        setTotalWinLoss((prev) => ({
          ...prev,
          totalLoss: prev.totalLoss + 1,
          bankerLoss: prev.bankerLoss + 1,
        }));
      }
      console.log("isWin", isWin);
      console.log('suggestionCoin', suggestionCoin);
      console.log('lastChunk[lastChunk?.length - 1]', lastChunk[lastChunk?.length - 1])

      if (lastChunk[lastChunk?.length - 1] === suggestionCoin) {
        // alert('coming')
        if (isSuggestionActive && allValues.length > startSuggestionCount) {
          setRepeaterCoin("Wait");
        }

        // if (lastChunk.length <= 3) {
        //   setPatternWin(true);
        // } else if (lastChunk.length > 3) {
        //   setLogicWin(true);
        // }
        setIsWin(true);
        setInitialSlice(allValues.length);
        setSuggestionCoin("Wait");
        setRepeaterCoin("Wait");

        setTotalWinLoss((prev) => ({
          ...prev,
          totalWin: prev.totalWin + 1,
          bankerWin:
            suggestionCoin === "B" ? prev.bankerWin + 1 : prev.bankerWin,
          playerWin:
            suggestionCoin === "P" ? prev.playerWin + 1 : prev.playerWin,
        }));
        // setSuggestionCoin("Wait");
        // setIsWin(true);
        // setPatternWonLength(lastSixChunks.length);

        // if (
        //   lastChunk[lastChunk.length - 1] === lastChunk[lastChunk.length - 2]
        // ) {
        //   if (
        //     lastChunk[lastChunk.length - 1] === lastChunk[lastChunk.length - 3]
        //   ) {
        //     setSuggestionCoin("Wait");
        //     setIsWin(true);
        //     // setPatternWin(true);
        //     // setPatternWonLength(lastChunk.length);
        //     console.log("Last three values are the same; skipping suggestion.");
        //   } else {
        //     if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //       setRepeaterCoin(lastChunk[lastChunk.length - 1]);
        //     }
        //     setSuggestionCoin(lastChunk[lastChunk.length - 1]);
        //   }
        // }

        return;
      }

      // console.log("lastSixChunks", lastSixChunks.length);
      // console.log("lastChunk", lastChunk.length);
      // console.log("repeaterCoin", repeaterCoin);
      // console.log("isSuggestionActive", isSuggestionActive);
      // console.log("startSuggestionCount", startSuggestionCount);
      // console.log("isWin", isWin);
      // console.log("initialSlice", initialSlice);

      if (!isWin) {
        if (lastChunk.length === 2) {
          let sameCoin = lastChunk[0] === lastChunk[1];
          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(sameCoin ? lastChunk[0] : "Wait");
          }
          setSuggestionCoin(sameCoin ? lastChunk[0] : "Wait");
        } else if (lastChunk.length === 3) {
          let findWins0 = lastChunk[0] === lastChunk[1];
          let findWins1 = lastChunk[1] === lastChunk[2];
          if (findWins0) {
            if (isSuggestionActive && allValues.length > startSuggestionCount) {
              setRepeaterCoin(findWins0 ? lastChunk[0] : "Wait");
            }
            setSuggestionCoin(findWins0 ? lastChunk[0] : "Wait");
          } else if (findWins1) {
            if (isSuggestionActive && allValues.length > startSuggestionCount) {
              setRepeaterCoin(findWins1 ? lastChunk[1] : "Wait");
            }
            setSuggestionCoin(findWins1 ? lastChunk[1] : "Wait");
          } else {
            if (isSuggestionActive && allValues.length > startSuggestionCount) {
              setRepeaterCoin("Wait");
            }
            setSuggestionCoin("Wait");
          }
        } else if (lastChunk.length === 4) {
          const countP = lastChunk.filter((char) => char === "P").length;
          const countB = lastChunk.filter((char) => char === "B").length;

          const findWins =
            countP > countB ? "P" : countB > countP ? "B" : "Wait";

          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(findWins);
          }
          setSuggestionCoin(findWins);
        } else if (lastChunk.length === 5) {
          const countP = lastChunk.filter((char) => char === "P").length;
          const countB = lastChunk.filter((char) => char === "B").length;

          if (isSuggestionActive && allValues.length > startSuggestionCount) {
            setRepeaterCoin(countP > countB ? "P" : "B");
          }
          setSuggestionCoin(countP > countB ? "P" : "B");
        } else if (lastChunk.length === 6) {
          // alert('coming')
          // if (isSuggestionActive && allValues.length > startSuggestionCount) {
          //   setRepeaterCoin(lastChunk[0] === "P" ? "P" : "B");
          // }
          // setSuggestionCoin(lastChunk[0] === "P" ? "P" : "B");
          setInitialSlice(allValues.length);
          setRepeaterCoin("Wait");
          setSuggestionCoin("Wait");
        }

        // else if (lastChunk.length === 7) {
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[1] === "P" ? "P" : "B");
        //   }
        //   setSuggestionCoin(lastChunk[1] === "P" ? "P" : "B");
        // } else if (lastChunk.length === 8) {
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[2] === "P" ? "P" : "B");
        //   }
        //   setSuggestionCoin(lastChunk[2] === "P" ? "P" : "B");
        // } else if (lastChunk.length === 9) {
        //   let findWins = lastChunk[7] === lastChunk[8];
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(findWins ? lastChunk[8] : "Wait");
        //   }
        //   setSuggestionCoin(findWins ? lastChunk[8] : "Wait");
        // } else if (lastChunk.length === 10) {
        //   let findWins = lastChunk[8] === lastChunk[9];
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(findWins ? lastChunk[8] : "Wait");
        //   }
        //   setSuggestionCoin(findWins ? lastChunk[8] : "Wait");
        // } else if (lastChunk.length === 11) {
        //   const countP = lastSixChunks.filter((char) => char === "P").length;
        //   const countB = lastSixChunks.filter((char) => char === "B").length;

        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(countP > countB ? "P" : "B");
        //   }
        //   setSuggestionCoin(countP > countB ? "P" : "B");
        // } else if (lastChunk.length === 12) {
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[0] === "P" ? "B" : "P");
        //   }
        //   setSuggestionCoin(lastChunk[0] === "P" ? "B" : "P");
        // } else if (lastChunk.length === 13) {
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[1] === "P" ? "B" : "P");
        //   }
        //   setSuggestionCoin(lastChunk[1] === "P" ? "B" : "P");
        // } else if (lastChunk.length === 14) {
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[2] === "P" ? "B" : "P");
        //   }
        //   setSuggestionCoin(lastChunk[2] === "P" ? "B" : "P");
        // } else if (lastChunk.length === 15) {
        //   let findWins = lastChunk[13] === lastChunk[14];
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(findWins ? lastChunk[13] : "Wait");
        //   }
        //   setSuggestionCoin(findWins ? lastChunk[13] : "Wait");
        // } else if (lastChunk.length === 16) {
        //   let findWins = lastChunk[14] === lastChunk[15];
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(findWins ? lastChunk[14] : "Wait");
        //   }
        //   setSuggestionCoin(findWins ? lastChunk[14] : "Wait");
        // } else if (lastChunk.length === 16) {
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin("Wait");
        //   }
        //   setSuggestionCoin("Wait");
        // } else if (lastChunk.length === 17) {
        //   const countP = lastSixChunks.filter((char) => char === "P").length;
        //   const countB = lastSixChunks.filter((char) => char === "B").length;

        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(countP > countB ? "P" : "B");
        //   }
        //   setSuggestionCoin(countP > countB ? "P" : "B");
        // } else if (lastChunk.length === 18) {
        //   setInitialSlice(allValues.length);
        //   setRepeaterCoin("Wait");
        // }
      } else {
        // if (lastSixChunks.length === 6 && patternWin) {
        // if (patternWin) {
        if (lastChunk.length === 6) {
          setIsWin(false);
          // setPatternWin(false);
          // setLogicWin(false);
          // setPatternWonLength(null);
          setInitialSlice(allValues.length);
          setRepeaterCoin("Wait");
          setSuggestionCoin("Wait");
        } else if (lastChunk.length < 6) {
          setIsWin(false);
          setRepeaterCoin("Wait");
          setSuggestionCoin("Wait");
        }
        // } else if (lastSixChunks.length === 6 && logicWin && !patternWin) {
        //   if (lastChunk.length === 6) {
        //     setIsWin(false);
        //     if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //       setRepeaterCoin(lastChunk[0] === "B" ? "B" : "P");
        //     }
        //     setSuggestionCoin(lastChunk[0] === "B" ? "B" : "P");
        //   } else if (lastChunk.length === 12) {
        //     setIsWin(false);
        //     if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //       setRepeaterCoin(lastChunk[0] === "P" ? "B" : "P");
        //     }
        //     setSuggestionCoin(lastChunk[0] === "P" ? "B" : "P");
        //   }
        // } else {
        //   setRepeaterCoin("Wait");
        //   setSuggestionCoin("Wait");
        // }

        // if (lastSixChunks.length === 6 && patternWonLength <= 3) {
        //   setIsWin(false);
        //   setPatternWin(false);
        //   setLogicWin(false)
        //   setPatternWonLength(null);
        //   setInitialSlice(allValues.length);
        // }else if(lastSixChunks.length === 6 && patternWonLength > 3 && lastChunk.length === 6) {
        //   setIsWin(false);
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[0] === "B" ? "B" : "P");
        //   }
        //   setSuggestionCoin(lastChunk[0] === "B" ? "B" : "P");
        // }else if(lastSixChunks.length === 6 && patternWonLength > 3 && lastChunk.length === 12) {
        //   setIsWin(false);
        //   if (isSuggestionActive && allValues.length > startSuggestionCount) {
        //     setRepeaterCoin(lastChunk[0] === "P" ? "B" : "P");
        //   }
        //   setSuggestionCoin(lastChunk[0] === "P" ? "B" : "P");
        // }
      }
    }
  }, [columns]);

  //   useEffect(() => {
  //     const allValues = columns
  //     .map((obj) => obj.values)
  //     .flat()
  //     .filter((value) => value === "B" || value === "P");

  //   if (allValues.length < 1) return;

  //   let slicedArray = allValues.slice(initialSlice);

  //   console.log("sliced array", slicedArray);

  //   const chunkArray = (array, chunkSize) => {
  //     const chunks = [];
  //     for (let i = 0; i < array.length; i += chunkSize) {
  //       chunks.push(array.slice(i, i + chunkSize));
  //     }
  //     return chunks;
  //   };

  //   const chunks = chunkArray(slicedArray, 18);

  //   console.log("Chunks:", chunks);

  //   let lastChunk = chunks[chunks.length - 1];
  //   const sixChunks = chunkArray(lastChunk, 6);
  //   let lastSixChunks = sixChunks[sixChunks.length - 1];

  //   console.log("lastSixChunks", lastSixChunks);

  //   if((suggestionCoin === 'P') && (suggestionCoin !== slicedArray[slicedArray.length - 1])){
  //     setTotalWinLoss((prev) => ({
  //       ...prev,
  //       totalLoss: prev.totalLoss + 1,
  //       playerLoss: prev.playerLoss + 1,
  //     }));
  //   }else if((suggestionCoin === 'B') && (suggestionCoin !== slicedArray[slicedArray.length - 1])){
  //     setTotalWinLoss((prev) => ({
  //       ...prev,
  //       totalLoss: prev.totalLoss + 1,
  //       bankerLoss: prev.bankerLoss + 1,
  //     }));
  //   }

  //   if (slicedArray[slicedArray.length - 1] === suggestionCoin) {
  //     if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //       setRepeaterCoin("Wait");
  //     }
  //     setTotalWinLoss((prev) => ({
  //       ...prev,
  //       totalWin: prev.totalWin + 1,
  //       bankerWin: suggestionCoin === 'B' ? prev.bankerWin + 1 : prev.bankerWin,
  //       playerWin: suggestionCoin === 'P' ? prev.playerWin + 1 : prev.playerWin,
  //     }));
  //     setSuggestionCoin("Wait");
  //     setIsWin(true);
  //     setPatternWonLength(lastChunk.length);
  //     return;
  //   }

  //   console.log("lastChunk", lastChunk.length);
  //   console.log('repeaterCoin', repeaterCoin);

  //   if (!isWin) {
  //     if (lastChunk.length < 3) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount) ) {
  //         setRepeaterCoin(
  //           slicedArray[slicedArray.length - 1] === "P" ? "P" : "B"
  //         );
  //       }
  //       setSuggestionCoin(
  //         slicedArray[slicedArray.length - 1] === "P" ? "P" : "B"
  //       );
  //     } else if (lastChunk.length >= 3 && lastChunk.length < 6) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount) ) {
  //         setRepeaterCoin("Wait");
  //       }
  //       setSuggestionCoin("Wait");
  //     } else if (lastChunk.length === 6) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //         setRepeaterCoin(lastChunk[0] === "P" ? "P" : "B");
  //       }
  //       setSuggestionCoin(lastChunk[0] === "P" ? "P" : "B");
  //     } else if (lastChunk.length === 7) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //         setRepeaterCoin(lastChunk[1] === "P" ? "P" : "B");
  //       }
  //       setSuggestionCoin(lastChunk[1] === "P" ? "P" : "B");
  //     } else if (lastChunk.length === 8) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //         setRepeaterCoin(lastChunk[2] === "P" ? "P" : "B");
  //       }
  //       setSuggestionCoin(lastChunk[2] === "P" ? "P" : "B");
  //     } else if (lastChunk.length >= 9 && lastChunk.length < 12) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //         setRepeaterCoin("Wait");
  //       }
  //       setSuggestionCoin("Wait");
  //     } else if (lastChunk.length === 12) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //         setRepeaterCoin(lastChunk[0] === "P" ? "B" : "P");
  //       }
  //       setSuggestionCoin(lastChunk[0] === "P" ? "B" : "P");
  //     } else if (lastChunk.length === 13) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //         setRepeaterCoin(lastChunk[1] === "P" ? "B" : "P");
  //       }
  //       setSuggestionCoin(lastChunk[1] === "P" ? "B" : "P");
  //     } else if (lastChunk.length === 14) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //         setRepeaterCoin(lastChunk[2] === "P" ? "B" : "P");
  //       }
  //       setSuggestionCoin(lastChunk[2] === "P" ? "B" : "P");
  //     } else if (lastChunk.length >= 15 && lastChunk.length <= 18) {
  //       if (isSuggestionActive && (allValues.length > startSuggestionCount)) {
  //         setRepeaterCoin("Wait");
  //       }
  //       setSuggestionCoin("Wait");
  //     }
  //   } else {
  //     const lengthMap = new Map([
  //       [2, 3],
  //       [3, 2],
  //       [7, 2],
  //       [8, 2],
  //       [9, 2],
  //       [13, 2],
  //       [14, 2],
  //       [15, 2],
  //     ]);

  //     const calculateLength = lengthMap.get(patternWonLength) || 3; // Default to 3 if no match

  //     if (lastChunk.length === patternWonLength + calculateLength) {
  //       setIsWin(false);
  //       setPatternWonLength(null);
  //       setInitialSlice(allValues.length);
  //     }
  //   }
  // }, [columns]);

  return <div></div>;
};

export default FindPoints;
