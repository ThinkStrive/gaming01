import React, { useEffect } from "react";
import { useToast } from "../../resources/Toast";

const PatternPre = ({ historyData, isAlertAllowed }) => {
  const showToast = useToast();
  const checkPlayerStreak = () => {
    const recentEntries = historyData.slice(-4);
    const isPlayerStreak = recentEntries.every(
      (data) => data.color === "black",
    );

    if (isPlayerStreak && isAlertAllowed) {
      showToast("Red/Black Streak detected", "success");
    }
  };

  const checkBankerStreak = () => {
    const recentEntries = historyData.slice(-4);
    const isBankerStreak = recentEntries.every((data) => data.color === "red");

    if (isBankerStreak && isAlertAllowed) {
      showToast("Red/Black Streak detected", "success");
    }
  };

  const checkPingPongPattern = () => {
    const recentEntries = historyData.slice(-4);
    const isPingPong = recentEntries.every((data, index) => {
      if (index % 2 === 0) {
        return data.color === "black";
      } else {
        return data.color === "red";
      }
    });

    if (isPingPong && isAlertAllowed) {
      showToast("Ping Pong Pattern detected, Red/Black", "success");
    }
  };

  const checkDoublePingPongPattern = () => {
    const recentEntries = historyData.slice(-8);
    const isDoublePingPong = recentEntries.every((data, index) => {
      if (index % 4 === 0 || index % 4 === 1) {
        return data.color === "black";
      } else if (index % 4 === 2 || index % 4 === 3) {
        return data.color === "red";
      }
    });

    if (isDoublePingPong && isAlertAllowed) {
      showToast("Double Ping Pong Pattern detected, Red/Black", "success");
    }
  };

  const checkSandwichPattern = () => {
    const recentEntries = historyData.slice(-8);
    const isSandwich =
      recentEntries[0]?.color === "black" &&
      recentEntries[1]?.color === "black" &&
      recentEntries[2]?.color === "red" &&
      recentEntries[3]?.color === "red" &&
      recentEntries[4]?.color === "red" &&
      recentEntries[5]?.color === "black" &&
      recentEntries[6]?.color === "black" &&
      recentEntries[7]?.color === "black";

    if (isSandwich && isAlertAllowed) {
      showToast("Sandwich Pattern detected, Red/Black", "success");
    }
  };

  const checkOneTwoOneTwoPattern = () => {
    const recentEntries = historyData.slice(-6);

    const isPattern =
      recentEntries[0]?.color === "black" &&
      recentEntries[1]?.color === "red" &&
      recentEntries[2]?.color === "red" &&
      recentEntries[3]?.color === "black" &&
      recentEntries[4]?.color === "red" &&
      recentEntries[5]?.color === "red";

    if (isPattern && isAlertAllowed) {
      showToast("One Two Two Pattern detected, Red/Black", "success");
    }
  };

  const checkStickWIthThePlayerPattern = () => {
    const recentEntries = historyData.slice(-9);

    const isPattern =
      recentEntries[0]?.color === "black" &&
      recentEntries[1]?.color === "black" &&
      recentEntries[2]?.color === "red" &&
      recentEntries[3]?.color === "black" &&
      recentEntries[4]?.color === "black" &&
      recentEntries[5]?.color === "black" &&
      recentEntries[6]?.color === "black" &&
      recentEntries[7]?.color === "red" &&
      recentEntries[8]?.color === "red";

    if (isPattern && isAlertAllowed) {
      showToast("Stick With the Player Pattern detected, Red/Black", "success");
    }
  };

  const checkSwitchWIthThePlayerPattern = () => {
    const recentEntries = historyData.slice(-9);

    const isPattern =
      recentEntries[0]?.color === "red" &&
      recentEntries[1]?.color === "red" &&
      recentEntries[2]?.color === "red" &&
      recentEntries[3]?.color === "red" &&
      recentEntries[4]?.color === "black" &&
      recentEntries[5]?.color === "red" &&
      recentEntries[6]?.color === "red" &&
      recentEntries[7]?.color === "red" &&
      recentEntries[8]?.color === "black";

    if (isPattern && isAlertAllowed) {
      showToast(
        "Switch With the Player Pattern detected, Red/Black",
        "success",
      );
    }
  };

  const checkStickWIthTheBankerPattern = () => {
    const recentEntries = historyData.slice(-8);

    const isPattern =
      recentEntries[0]?.color === "red" &&
      recentEntries[1]?.color === "red" &&
      recentEntries[2]?.color === "red" &&
      recentEntries[3]?.color === "red" &&
      recentEntries[4]?.color === "black" &&
      recentEntries[5]?.color === "red" &&
      recentEntries[6]?.color === "red" &&
      recentEntries[7]?.color === "black";

    if (isPattern && isAlertAllowed) {
      showToast("Stick With the Banker Pattern detected, Red/Black", "success");
    }
  };

  const checkSwitchWIthTheBankerPattern = () => {
    const recentEntries = historyData.slice(-8);

    const isPattern =
      recentEntries[0]?.color === "black" &&
      recentEntries[1]?.color === "black" &&
      recentEntries[2]?.color === "red" &&
      recentEntries[3]?.color === "black" &&
      recentEntries[4]?.color === "black" &&
      recentEntries[5]?.color === "black" &&
      recentEntries[6]?.color === "black" &&
      recentEntries[7]?.color === "red";

    if (isPattern && isAlertAllowed) {
      showToast(
        "Switch With the Banker Pattern detected, Red/Black",
        "success",
      );
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

export default PatternPre;
