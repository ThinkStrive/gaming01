import React, { useEffect } from "react";
import { useToast } from "../../../resources/Toast";

const PatternPre = ({ historyData, isAlertAllowed }) => {
  const showToast = useToast();

  
  const checkPattern = (condition, message) => {
    if (condition && isAlertAllowed) {
      showToast(message, "success");
    }
  };

  
  const checkPlayerStreak = () => {
    const recentEntries = historyData.slice(-4);
    const isPlayerStreak = recentEntries.every((data) => data.color === "black");
    checkPattern(isPlayerStreak, "Red/Black Streak detected");
  };

  const checkBankerStreak = () => {
    const recentEntries = historyData.slice(-4);
    const isBankerStreak = recentEntries.every((data) => data.color === "red");
    checkPattern(isBankerStreak, "Red/Black Streak detected");
  };

  const checkPingPongPattern = () => {
    const recentEntries = historyData.slice(-4);
    const isPingPong = recentEntries.every((data, index) => 
      (index % 2 === 0 && data.color === "black") ||
      (index % 2 === 1 && data.color === "red")
    );
    checkPattern(isPingPong, "Ping Pong Pattern detected, Red/Black");
  };

  const checkDoublePingPongPattern = () => {
    const recentEntries = historyData.slice(-8);
    const isDoublePingPong = recentEntries.every((data, index) =>
      (index % 4 < 2 && data.color === "black") ||
      (index % 4 >= 2 && data.color === "red")
    );
    checkPattern(isDoublePingPong, "Double Ping Pong Pattern detected, Red/Black");
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
    checkPattern(isSandwich, "Sandwich Pattern detected, Red/Black");
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
    checkPattern(isPattern, "One Two Two Pattern detected, Red/Black");
  };

  const checkStickWithPlayerPattern = () => {
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
    checkPattern(isPattern, "Stick With the Player Pattern detected, Red/Black");
  };

  const checkSwitchWithPlayerPattern = () => {
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
    checkPattern(isPattern, "Switch With the Player Pattern detected, Red/Black");
  };

  const checkStickWithBankerPattern = () => {
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
    checkPattern(isPattern, "Stick With the Banker Pattern detected, Red/Black");
  };

  const checkSwitchWithBankerPattern = () => {
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
    checkPattern(isPattern, "Switch With the Banker Pattern detected, Red/Black");
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
      checkStickWithBankerPattern();
      checkSwitchWithBankerPattern();
    }
    if (historyData.length >= 9) {
      checkStickWithPlayerPattern();
      checkSwitchWithPlayerPattern();
    }
  };

  useEffect(() => {
    handleCheckPatterns();
  }, [historyData]);

  return <div></div>;
};

export default PatternPre;
