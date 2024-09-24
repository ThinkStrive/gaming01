import React, { useEffect } from "react";

const PatternOddEven = ({ historyData }) => {
  const checkPlayerStreak = () => {
    const recentEntries = historyData.slice(-4);
    const isPlayerStreak = recentEntries.every((data) => data.odd_even === "even");

    if (isPlayerStreak) {
      alert("Player Streak detected, Odd/Even");
    }
  };

  const checkBankerStreak = () => {
    const recentEntries = historyData.slice(-4);
    const isBankerStreak = recentEntries.every(
      (data) => data.odd_even === "odd"
    );

    if (isBankerStreak) {
      alert("Banker Streak detected, Odd/Even");
    }
  };

  const checkPingPongPattern = () => {
    const recentEntries = historyData.slice(-4);
    const isPingPong = recentEntries.every((data, index) => {
      if (index % 2 === 0) {
        return data.odd_even === "even";
      } else {
        return data.odd_even === "odd";
      }
    });

    if (isPingPong) {
      alert("Ping Pong Pattern detected, Odd/Even");
    }
  };

  const checkDoublePingPongPattern = () => {
    const recentEntries = historyData.slice(-8);
    const isDoublePingPong = recentEntries.every((data, index) => {
      if (index % 4 === 0 || index % 4 === 1) {
        return data.odd_even === "even";
      } else if (index % 4 === 2 || index % 4 === 3) {
        return data.odd_even === "odd";
      }
    });

    if (isDoublePingPong) {
      alert(
        "Double Ping Pong Pattern detected, Odd/Even"
      );
    }
  };

  const checkSandwichPattern = () => {
    const recentEntries = historyData.slice(-8);
    const isSandwich =
      recentEntries[0]?.odd_even === "even" &&
      recentEntries[1]?.odd_even === "even" &&
      recentEntries[2]?.odd_even === "odd" &&
      recentEntries[3]?.odd_even === "odd" &&
      recentEntries[4]?.odd_even === "odd" &&
      recentEntries[5]?.odd_even === "even" &&
      recentEntries[6]?.odd_even === "even" &&
      recentEntries[7]?.odd_even === "even";

    if (isSandwich) {
      alert(
        "Sandwich Pattern detected, Odd/Even"
      );
    }
  };

  const checkOneTwoOneTwoPattern = () => {
    const recentEntries = historyData.slice(-6);

    const isPattern =
      recentEntries[0]?.odd_even === "even" &&
      recentEntries[1]?.odd_even === "odd" &&
      recentEntries[2]?.odd_even === "odd" &&
      recentEntries[3]?.odd_even === "even" &&
      recentEntries[4]?.odd_even === "odd" &&
      recentEntries[5]?.odd_even === "odd";

    if (isPattern) {
      alert("One Two One Two Pattern detected, Odd/Even");
    }
  };


  const checkStickWIthThePlayerPattern = () => {
    const recentEntries = historyData.slice(-9);

    const isPattern =
      recentEntries[0]?.odd_even === "even" &&
      recentEntries[1]?.odd_even === "even" &&
      recentEntries[2]?.odd_even === "odd" &&
      recentEntries[3]?.odd_even === "even" &&
      recentEntries[4]?.odd_even === "even" &&
      recentEntries[5]?.odd_even === "even" &&
      recentEntries[6]?.odd_even === "even" &&
      recentEntries[7]?.odd_even === "odd" &&
      recentEntries[8]?.odd_even === "odd"

    if (isPattern) {
      alert("Stick With the Player Pattern detected, Odd/Even");
    }
  };


  const checkSwitchWIthThePlayerPattern = () => {
    const recentEntries = historyData.slice(-9);

    const isPattern =
      recentEntries[0]?.odd_even === "odd" &&
      recentEntries[1]?.odd_even === "odd" &&
      recentEntries[2]?.odd_even === "odd" &&
      recentEntries[3]?.odd_even === "odd" &&
      recentEntries[4]?.odd_even === "even" &&
      recentEntries[5]?.odd_even === "odd" &&
      recentEntries[6]?.odd_even === "odd" &&
      recentEntries[7]?.odd_even === "odd" &&
      recentEntries[8]?.odd_even === "even"

    if (isPattern) {
      alert("Switch With the Player Pattern detected, Odd/Even");
    }
  };


  const checkStickWIthTheBankerPattern = () => {
    const recentEntries = historyData.slice(-8);

    const isPattern =
      recentEntries[0]?.odd_even === "odd" &&
      recentEntries[1]?.odd_even === "odd" &&
      recentEntries[2]?.odd_even === "odd" &&
      recentEntries[3]?.odd_even === "odd" &&
      recentEntries[4]?.odd_even === "even" &&
      recentEntries[5]?.odd_even === "odd" &&
      recentEntries[6]?.odd_even === "odd" &&
      recentEntries[7]?.odd_even === "even"

    if (isPattern) {
      alert("Stick With the Banker Pattern detected, Odd/Even");
    }
  };


  const checkSwitchWIthTheBankerPattern = () => {
    const recentEntries = historyData.slice(-8);

    const isPattern =
      recentEntries[0]?.odd_even === "even" &&
      recentEntries[1]?.odd_even === "even" &&
      recentEntries[2]?.odd_even === "odd" &&
      recentEntries[3]?.odd_even === "even" &&
      recentEntries[4]?.odd_even === "even" &&
      recentEntries[5]?.odd_even === "even" &&
      recentEntries[6]?.odd_even === "even" &&
      recentEntries[7]?.odd_even === "odd"

    if (isPattern) {
      alert("Switch With the Banker Pattern detected, Odd/Even");
    }
  };

  const handleCheckPatterns = () => {
    if (historyData.length >= 4) {
      checkPlayerStreak();
      checkBankerStreak();
      checkPingPongPattern();
    }
    if (historyData.length >= 6) {
      checkOneTwoOneTwoPattern();
    }

    if (historyData.length >= 8) {
      checkDoublePingPongPattern();
      checkSandwichPattern();
      checkStickWIthTheBankerPattern()
      checkSwitchWIthTheBankerPattern()
    }

    if (historyData.length >= 9) {
      checkStickWIthThePlayerPattern();
      checkSwitchWIthThePlayerPattern()
    }
  };

  useEffect(() => {
    handleCheckPatterns();
  }, [historyData]);

  return <div></div>;
};

export default PatternOddEven;

