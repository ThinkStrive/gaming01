import React, { useEffect } from "react";

const PatternBigSmall = ({ historyData, isAlertAllowed }) => {
  const checkPlayerStreak = () => {
    const recentEntries = historyData.slice(-4);
    const isPlayerStreak = recentEntries.every((data) => data.size === "large");

    if (isPlayerStreak && isAlertAllowed) {
      alert("Player Streak detected, Big/small");
    }
  };

  const checkBankerStreak = () => {
    const recentEntries = historyData.slice(-4);
    const isBankerStreak = recentEntries.every((data) => data.size === "small");

    if (isBankerStreak && isAlertAllowed) {
      alert("Banker Streak detected, Big/small");
    }
  };

  const checkPingPongPattern = () => {
    const recentEntries = historyData.slice(-4);
    const isPingPong = recentEntries.every((data, index) => {
      if (index % 2 === 0) {
        return data.size === "large";
      } else {
        return data.size === "small";
      }
    });

    if (isPingPong && isAlertAllowed) {
      alert("Ping Pong Pattern detected, Big/small");
    }
  };

  const checkDoublePingPongPattern = () => {
    const recentEntries = historyData.slice(-8);
    const isDoublePingPong = recentEntries.every((data, index) => {
      if (index % 4 === 0 || index % 4 === 1) {
        return data.size === "large";
      } else if (index % 4 === 2 || index % 4 === 3) {
        return data.size === "small";
      }
    });

    if (isDoublePingPong && isAlertAllowed) {
      alert("Double Ping Pong Pattern detected, Big/small");
    }
  };

  const checkSandwichPattern = () => {
    const recentEntries = historyData.slice(-8);
    const isSandwich =
      recentEntries[0]?.size === "large" &&
      recentEntries[1]?.size === "large" &&
      recentEntries[2]?.size === "small" &&
      recentEntries[3]?.size === "small" &&
      recentEntries[4]?.size === "small" &&
      recentEntries[5]?.size === "large" &&
      recentEntries[6]?.size === "large" &&
      recentEntries[7]?.size === "large";

    if (isSandwich && isAlertAllowed) {
      alert("Sandwich Pattern detected, Big/small");
    }
  };

  const checkOneTwoOneTwoPattern = () => {
    const recentEntries = historyData.slice(-6);

    const isPattern =
      recentEntries[0]?.size === "large" &&
      recentEntries[1]?.size === "small" &&
      recentEntries[2]?.size === "small" &&
      recentEntries[3]?.size === "large" &&
      recentEntries[4]?.size === "small" &&
      recentEntries[5]?.size === "small";

    if (isPattern && isAlertAllowed) {
      alert("One Two One Two Pattern detected, Big/small");
    }
  };

  const checkStickWIthThePlayerPattern = () => {
    const recentEntries = historyData.slice(-9);

    const isPattern =
      recentEntries[0]?.size === "large" &&
      recentEntries[1]?.size === "large" &&
      recentEntries[2]?.size === "small" &&
      recentEntries[3]?.size === "large" &&
      recentEntries[4]?.size === "large" &&
      recentEntries[5]?.size === "large" &&
      recentEntries[6]?.size === "large" &&
      recentEntries[7]?.size === "small" &&
      recentEntries[8]?.size === "small";

    if (isPattern && isAlertAllowed) {
      alert("Stick With the Player Pattern detected, Big/small");
    }
  };

  const checkSwitchWIthThePlayerPattern = () => {
    const recentEntries = historyData.slice(-9);

    const isPattern =
      recentEntries[0]?.size === "small" &&
      recentEntries[1]?.size === "small" &&
      recentEntries[2]?.size === "small" &&
      recentEntries[3]?.size === "small" &&
      recentEntries[4]?.size === "large" &&
      recentEntries[5]?.size === "small" &&
      recentEntries[6]?.size === "small" &&
      recentEntries[7]?.size === "small" &&
      recentEntries[8]?.size === "large";

    if (isPattern && isAlertAllowed) {
      alert("Switch With the Player Pattern detected, Big/small");
    }
  };

  const checkStickWIthTheBankerPattern = () => {
    const recentEntries = historyData.slice(-8);

    const isPattern =
      recentEntries[0]?.size === "small" &&
      recentEntries[1]?.size === "small" &&
      recentEntries[2]?.size === "small" &&
      recentEntries[3]?.size === "small" &&
      recentEntries[4]?.size === "large" &&
      recentEntries[5]?.size === "small" &&
      recentEntries[6]?.size === "small" &&
      recentEntries[7]?.size === "large";

    if (isPattern && isAlertAllowed) {
      alert("Stick With the Banker Pattern detected, Big/small");
    }
  };

  const checkSwitchWIthTheBankerPattern = () => {
    const recentEntries = historyData.slice(-8);

    const isPattern =
      recentEntries[0]?.size === "large" &&
      recentEntries[1]?.size === "large" &&
      recentEntries[2]?.size === "small" &&
      recentEntries[3]?.size === "large" &&
      recentEntries[4]?.size === "large" &&
      recentEntries[5]?.size === "large" &&
      recentEntries[6]?.size === "large" &&
      recentEntries[7]?.size === "small";

    if (isPattern && isAlertAllowed) {
      alert("Switch With the Banker Pattern detected, Big/small");
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
      checkStickWIthTheBankerPattern();
      checkSwitchWIthTheBankerPattern();
    }

    if (historyData.length >= 9) {
      checkStickWIthThePlayerPattern();
      checkSwitchWIthThePlayerPattern();
    }
  };

  useEffect(() => {
    handleCheckPatterns();
  }, [historyData]);

  return <div></div>;
};

export default PatternBigSmall;
