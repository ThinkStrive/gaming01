import React, { useState, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import ProfitPlanChart from '../reuse/charts/ProfitPlanChart'
import { FaEdit } from "react-icons/fa";

const Planprofit = () => {
  // currencies for Dropdown
  const currencies = [
    { label: "United States Dollar", symbol: "$", code: "USD" },
    { label: "Euro", symbol: "€", code: "EUR" },
    { label: "British Pound Sterling", symbol: "£", code: "GBP" },
    { label: "Indian Rupee", symbol: "₹", code: "INR" },
    { label: "Japanese Yen", symbol: "¥", code: "JPY" },
    { label: "Australian Dollar", symbol: "$", code: "AUD" },
    { label: "Canadian Dollar", symbol: "$", code: "CAD" },
    { label: "Swiss Franc", symbol: "CHF", code: "CHF" },
    { label: "Chinese Yuan", symbol: "¥", code: "CNY" },
    { label: "Hong Kong Dollar", symbol: "$", code: "HKD" },
    { label: "Singapore Dollar", symbol: "$", code: "SGD" },
    { label: "New Zealand Dollar", symbol: "$", code: "NZD" },
    { label: "Swedish Krona", symbol: "kr", code: "SEK" },
    { label: "Norwegian Krone", symbol: "kr", code: "NOK" },
    { label: "Danish Krone", symbol: "kr", code: "DKK" },
    { label: "South Korean Won", symbol: "₩", code: "KRW" },
    { label: "Mexican Peso", symbol: "$", code: "MXN" },
    { label: "Brazilian Real", symbol: "R$", code: "BRL" },
    { label: "South African Rand", symbol: "R", code: "ZAR" },
    { label: "Russian Ruble", symbol: "₽", code: "RUB" },
    { label: "Turkish Lira", symbol: "₺", code: "TRY" },
    { label: "Indonesian Rupiah", symbol: "Rp", code: "IDR" },
    { label: "Malaysian Ringgit", symbol: "RM", code: "MYR" },
    { label: "Thai Baht", symbol: "฿", code: "THB" },
    { label: "Philippine Peso", symbol: "₱", code: "PHP" },
    { label: "Egyptian Pound", symbol: "£", code: "EGP" },
    { label: "UAE Dirham", symbol: "د.إ", code: "AED" },
    { label: "Saudi Riyal", symbol: "ر.س", code: "SAR" },
    { label: "Qatari Rial", symbol: "ر.ق", code: "QAR" },
    { label: "Kuwaiti Dinar", symbol: "د.ك", code: "KWD" },
    { label: "Omani Rial", symbol: "ر.ع.", code: "OMR" },
    { label: "Bahraini Dinar", symbol: "ب.د", code: "BHD" },
    { label: "Israeli New Shekel", symbol: "₪", code: "ILS" },
    { label: "Pakistani Rupee", symbol: "₨", code: "PKR" },
    { label: "Bangladeshi Taka", symbol: "৳", code: "BDT" },
    { label: "Sri Lankan Rupee", symbol: "Rs", code: "LKR" },
    { label: "Vietnamese Dong", symbol: "₫", code: "VND" },
    { label: "Cambodian Riel", symbol: "៛", code: "KHR" },
    { label: "Nepalese Rupee", symbol: "₨", code: "NPR" },
    { label: "Algerian Dinar", symbol: "دج", code: "DZD" },
    { label: "Moroccan Dirham", symbol: "د.م.", code: "MAD" },
    { label: "Kenyan Shilling", symbol: "KSh", code: "KES" },
    { label: "Ghanaian Cedi", symbol: "₵", code: "GHS" },
    { label: "Ugandan Shilling", symbol: "USh", code: "UGX" },
    { label: "Tanzanian Shilling", symbol: "TSh", code: "TZS" },
    { label: "Zambian Kwacha", symbol: "ZK", code: "ZMK" },
    { label: "Botswana Pula", symbol: "P", code: "BWP" },
    { label: "Angolan Kwanza", symbol: "Kz", code: "AOA" },
    { label: "Mozambican Metical", symbol: "MT", code: "MZN" },
    { label: "Iraqi Dinar", symbol: "ع.د", code: "IQD" },
    { label: "Lebanese Pound", symbol: "ل.ل", code: "LBP" },
    { label: "Syrian Pound", symbol: "ل.س", code: "SYP" },
    { label: "Jordanian Dinar", symbol: "د.ا", code: "JOD" },
    { label: "Yemeni Rial", symbol: "ر.ي", code: "YER" },
    { label: "Armenian Dram", symbol: "֏", code: "AMD" },
    { label: "Georgian Lari", symbol: "₾", code: "GEL" },
    { label: "Kazakhstani Tenge", symbol: "₸", code: "KZT" },
    { label: "Uzbekistani Som", symbol: "сум", code: "UZS" },
    { label: "Mongolian Tugrik", symbol: "₮", code: "MNT" },
    { label: "Tajikistani Somoni", symbol: "SM", code: "TJS" },
    { label: "Turkmenistani Manat", symbol: "m", code: "TMT" },
    { label: "Kyrgyzstani Som", symbol: "с", code: "KGS" },
    { label: "Afghan Afghani", symbol: "؋", code: "AFN" },
    { label: "Laotian Kip", symbol: "₭", code: "LAK" },
    { label: "Bhutanese Ngultrum", symbol: "Nu.", code: "BTN" },
    { label: "Fijian Dollar", symbol: "$", code: "FJD" },
    { label: "Samoan Tala", symbol: "T", code: "WSK" },
    { label: "Tongan Paʻanga", symbol: "T$", code: "TOP" },
    { label: "Vanuatu Vatu", symbol: "Vt", code: "VUV" },
    { label: "Solomon Islands Dollar", symbol: "$", code: "SBD" },
    { label: "Papua New Guinean Kina", symbol: "K", code: "PGK" },
    { label: "New Caledonian Franc", symbol: "₣", code: "XPF" },
    { label: "Falkland Islands Pound", symbol: "£", code: "FKP" },
    { label: "Saint Helena Pound", symbol: "£", code: "SHP" },
    { label: "Saint Pierre and Miquelon Euro", symbol: "€", code: "XPF" },
    { label: "CFA Franc", symbol: "₣", code: "XOF" },
    { label: "CFP Franc", symbol: "₣", code: "CFP" },
  ];

  // getting data from local storage
  const [savedData, setSavedData] = useState(() => {
    const data = localStorage.getItem("profitPlanData");
    return data ? JSON.parse(data) : null;
  });

  // destructuring with default values
  const {
    savedBankRoll = 0,
    savedCurrency = "$",
    savedSession = 0,
    savedStopLoss = 0,
    savedProfitGoal = 0,
    savedUnitSize = 0,
  } = savedData || {};

  const [currency, setCurrency] = useState("$");
  const [bankRoll, setBankRoll] = useState("");
  const [unit, setUnit] = useState(1);
  const [isCustomUnit, setIsCustomUnit] = useState(false);
  const [profitGoal, setProfitGoal] = useState(10);
  const [isCustomProfit, setIsCustomProfit] = useState(false);
  const [stopLoss, setStopLoss] = useState(1);
  const [isCustomStopLoss, setIsCustomStopLoss] = useState(false);
  const [sessions, setSessions] = useState(7);
  const [isCustomSession, setIsCustomSession] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitToast, setIsSubmitToast] = useState(false);
  const [isResetToast, setIsResetToast] = useState(false);

  const [calculatedData, setCalculatedData] = useState(() => {
    const savedData = localStorage.getItem("calculatedGoalData");
    return savedData ? JSON.parse(savedData).savedEstimatedData : [];
  });

  const [calculatedProgress, setCalculatedProgress] = useState(() => {
    const savedData = localStorage.getItem("userProgressData");
    return savedData ? JSON.parse(savedData).savedProgress : [];
  });

  const [editableRow, setEditableRow] = useState(null);
  const [newFinalBalance, setNewFinalBalance] = useState("");

  // Dropdown Change logic
  const handleDropdownChange = (field, value) => {
    if (field === "unit") {
      if (value === "custom") {
        setIsCustomUnit(true);
        setUnit("");
      } else {
        setIsCustomUnit(false);
        setUnit(parseInt(value));
      }
    } else if (field === "stopLoss") {
      if (value === "custom") {
        setIsCustomStopLoss(true);
        setStopLoss("");
      } else {
        setIsCustomStopLoss(false);
        setStopLoss(parseInt(value));
      }
    } else if (field === "profitGoal") {
      if (value === "custom") {
        setIsCustomProfit(true);
        setProfitGoal("");
      } else {
        setIsCustomProfit(false);
        setProfitGoal(parseInt(value));
      }
    } else if (field === "sessions") {
      if (value === "custom") {
        setIsCustomSession(true);
        setSessions("");
      } else {
        setIsCustomSession(false);
        setSessions(parseInt(value));
      }
    }
  };

  // custom input field change Logic

  const handleCustomField = (field, value) => {
    if (value === "" || (Number(value) >= 0 && Number(value) <= 100)) {
      if (field === "unit") {
        setUnit(value);
      } else if (field === "stopLoss") {
        setStopLoss(value);
      } else if (field === "profitGoal") {
        setProfitGoal(value);
      } else if (field === "sessions") {
        setSessions(value);
      }
    }
  };

  // Validation & setting Errors

  const validate = () => {
    const newErrors = {};

    if (!bankRoll) newErrors.bankRoll = "bankRoll Required";

    if (unit === "" || Number(unit) < 1 || Number(unit) > 100) {
      newErrors.unit = "Enter Valid Unit % (1-100)";
    }

    if (stopLoss === "" || Number(stopLoss) < 1 || Number(stopLoss) > 100) {
      newErrors.stopLoss = "Enter Valid stop loss % (1-100)";
    }

    if (
      profitGoal === "" ||
      Number(profitGoal) < 1 ||
      Number(profitGoal) > 100
    ) {
      newErrors.profitGoal = "Enter Valid profit goal % (1-100)";
    }

    if (sessions === "" || Number(sessions) < 1 || Number(sessions) > 100) {
      newErrors.sessions = "Enter Valid Session (1-100)";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      return true;
    }

    return false;
  };

  // handling submit button click
  const handleSubmit = () => {
    const isFormValid = validate();

    if (isFormValid) {
      setSavedData((prev) => {
        const updateData = {
          ...prev,
          savedBankRoll: parseInt(bankRoll),
          savedCurrency: currency,
          savedProfitGoal: parseInt(profitGoal),
          savedSession: parseInt(sessions),
          savedUnitSize: parseInt(unit),
          savedStopLoss: parseInt(stopLoss),
        };

        localStorage.setItem("profitPlanData", JSON.stringify(updateData));

        return updateData;
      });

      // Submit click Toast Notification
      setIsSubmitToast(true);
      setTimeout(() => setIsSubmitToast(false), 3000);
    }
  };

  // handling reset Button Click

  const handleResetClick = () => {
    setSavedData(null);
    setUnit(1);
    setIsCustomUnit(false);
    setProfitGoal(10);
    setIsCustomProfit(false);
    setStopLoss(1);
    setIsCustomStopLoss(false);
    setBankRoll("");
    setIsCustomSession(false);
    setSessions(7);
    localStorage.removeItem("profitPlanData");
    localStorage.removeItem("calculatedGoalData");
    localStorage.removeItem("userProgressData");

    // Reset button click- Toast Notification
    setIsResetToast(true);
    setTimeout(() => setIsResetToast(false), 3000);
  };

  const calculateTableData = (sessionCount) => {
    let data = [];
    let bankroll = savedBankRoll;

    for (let i = 1; i <= sessionCount; i++) {
      const profit = (bankroll * savedProfitGoal) / 100;
      const newBalance = bankroll + profit;

      data.push({
        session: i,
        bankroll: bankroll.toFixed(2),
        profit: profit.toFixed(2),
        newBalance: newBalance.toFixed(2),
      });

      bankroll = newBalance;
    }

    setCalculatedData(data);
  };

  const calculateUserProgress = (sessionCount) => {
    let data = [];
    let bankRoll = savedBankRoll;

    for (let i = 1; i <= sessionCount; i++) {
      const unitSize = (bankRoll * unit) / 100;
      const stopLossSize = (bankRoll * stopLoss) / 100;

      data.push({
        session: i,
        bankRoll: bankRoll.toFixed(2),
        unitSize: unitSize.toFixed(2),
        stopLossSize: stopLossSize.toFixed(2),
        profitPercentage: 0,
        actualProfit: 0,
        finalBalance: 0,
      });
    }

    setCalculatedProgress(data);
  };

  useEffect(() => {
    calculateTableData(savedSession);
    calculateUserProgress(savedSession);
  }, [savedData]);

  useEffect(() => {
    localStorage.setItem(
      "calculatedGoalData",
      JSON.stringify({ savedEstimatedData: calculatedData })
    );
  }, [calculatedData]);

  useEffect(() => {
    localStorage.setItem(
      "userProgressData",
      JSON.stringify({ savedProgress: calculatedProgress })
    );
  }, [calculatedProgress]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userProgressData"));
    if (
      !savedData ||
      !savedData.savedProgress ||
      savedData.savedProgress.length === 0
    ) {
      calculateUserProgress(sessions);
    } else {
      setCalculatedProgress(savedData.savedProgress);
    }
  }, []);

  const handleEditClick = (index) => {
    setEditableRow(index);
    setNewFinalBalance(calculatedProgress[index].finalBalance);
  };

  const handleBalanceChange = (e) => {
    setNewFinalBalance(e.target.value);
  };

  const handleSaveClick = (index) => {
    const updatedProgress = [...calculatedProgress];

    const finalBalance = newFinalBalance || updatedProgress[index].finalBalance;

    if (!finalBalance || isNaN(finalBalance)) {
      alert("Please enter a valid Final Balance.");
      return;
    }

    updatedProgress[index].finalBalance = finalBalance;

    const profitPercent =
      ((finalBalance - updatedProgress[index].bankRoll) /
        updatedProgress[index].bankRoll) *
      100;
    updatedProgress[index].profitPercent = profitPercent.toFixed(2);
    updatedProgress[index].actualProfit = (
      finalBalance - updatedProgress[index].bankRoll
    ).toFixed(2);

    for (let i = index + 1; i < updatedProgress.length; i++) {
      updatedProgress[i].bankRoll =
        i === index + 1 ? finalBalance : updatedProgress[i - 1].finalBalance;

      const bankRoll = updatedProgress[i].bankRoll;
      updatedProgress[i].unitSize = ((bankRoll * unit) / 100).toFixed(2);
      updatedProgress[i].stopLossSize = ((bankRoll * stopLoss) / 100).toFixed(
        2
      );

      updatedProgress[i].finalBalance = bankRoll;
      updatedProgress[i].profitPercent = 0;
      updatedProgress[i].actualProfit = 0;
    }

    setCalculatedProgress(updatedProgress);
    setEditableRow(null);
  };

  return (
    <>
      <div className="flex max-md:flex-col gap-5 mt-2 md:mt-5 p-2 mx-4 md:mx-8">
        {/* profit plan form */}
        <div className="w-full md:w-5/12 max-sm:px-3 max-sm:py-1">
          <h2 className="text-white text-center my-2 text-base md:text-lg font-medium">
            Enter Details
          </h2>
          <div className="bg-[#532c90] text-slate-200 px-5 md:px-8 py-3 md:py-5 gap-1 md:gap-2 rounded-2xl">
            <div className="mb-1 md:mb-2">
              <label className="block mb-1 md:mb-2 text-base md:text-md font-medium">
                Currency
              </label>
              <select
                className="rounded-md  p-1 md:p-1.5 w-full outline-none focus:outline-lime-400"
                name="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {currencies.map((item, index) => (
                  <option key={index} value={item.symbol}>
                    {item.label} ({item.symbol})
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-1 md:mb-2">
              <label className="block mb-1 md:mb-2 text-base md:text-md font-medium">
                Bank Roll
              </label>
              <CurrencyInput
                id="bankRoll"
                placeholder="Enter amount"
                decimalsLimit={2}
                prefix={currency}
                className="rounded-md p-1 md:p-1.5 w-full outline-none focus:outline-lime-400"
                value={bankRoll}
                onValueChange={(value) => setBankRoll(value)}
              />
              {errors.bankRoll && (
                <p className="text-red-400 text-base font-semibold">
                  {errors.bankRoll}
                </p>
              )}
            </div>

            {/* Sessions DropDown */}

            <div className="my-1 md:my-2">
              <label className="block mb-1 md:mb-2 text-base md:text-md font-medium">
                Sessions
              </label>
              <div className="max-lg:flex-col flex gap-2 lg:items-center">
                <div>
                  <select
                    className="rounded-md p-1 md:p-1.5 w-[200px] md:w-[250px] outline-none focus:outline-lime-400"
                    value={isCustomSession ? "custom" : sessions}
                    onChange={(e) =>
                      handleDropdownChange("sessions", e.target.value)
                    }
                  >
                    <option value="7" className="max-sm:text-xs text-base">
                      7 Session
                    </option>
                    <option value="14" className="max-sm:text-xs text-base">
                      14 Session
                    </option>
                    <option value="custom" className="max-sm:text-xs text-base">
                      Custom
                    </option>
                  </select>
                </div>

                {/* Conditional input for custom session */}
                {isCustomSession && (
                  <div>
                    <input
                      type="number"
                      className="rounded-md p-1 md:p-1.5 w-[100px] md:w-[150px] outline-none focus:outline-lime-400"
                      value={sessions}
                      onChange={(e) =>
                        handleCustomField("sessions", e.target.value)
                      }
                      placeholder="Enter session"
                      max="100"
                    />
                  </div>
                )}
              </div>
              {errors.sessions && (
                <p className="text-red-400 text-base font-semibold">
                  {errors.sessions}
                </p>
              )}
            </div>

            {/* unit dropdown */}
            <div className="my-1 md:my-2">
              <label className="block mb-1 md:mb-2 text-base md:text-md font-medium">
                Unit Size %
              </label>
              <div className="max-lg:flex-col flex gap-2 lg:items-center">
                <div>
                  <select
                    className="rounded-md p-1 md:p-1.5 w-[200px] md:w-[250px] outline-none focus:outline-lime-400"
                    value={isCustomUnit ? "custom" : unit}
                    onChange={(e) =>
                      handleDropdownChange("unit", e.target.value)
                    }
                  >
                    <option value="1" className="max-sm:text-xs text-base">
                      1% - Recommended
                    </option>
                    <option value="2" className="max-sm:text-xs text-base">
                      2% - Moderate
                    </option>
                    <option value="custom" className="max-sm:text-xs text-base">
                      Custom
                    </option>
                  </select>
                </div>
                {/* Conditional input for custom unit */}
                {isCustomUnit && (
                  <div>
                    <input
                      type="number"
                      className="rounded-md p-1 md:p-1.5 w-[100px] md:w-[150px] outline-none focus:outline-lime-400"
                      value={unit}
                      onChange={(e) =>
                        handleCustomField("unit", e.target.value)
                      }
                      placeholder="Enter unit"
                      max="100"
                    />
                  </div>
                )}
              </div>
              {errors.unit && (
                <p className="text-red-400 text-base font-semibold">
                  {errors.unit}
                </p>
              )}
            </div>

            {/* Profit Goal Dropdown */}

            <div className="my-1 md:my-2">
              <label className="block mb-1 md:mb-2 text-base md:text-md font-medium">
                Profit Goal %
              </label>
              <div className="max-lg:flex-col flex gap-2 lg:items-center">
                <div>
                  <select
                    className="rounded-md p-1 md:p-1.5 w-[200px] md:w-[250px] outline-none focus:outline-lime-400"
                    value={isCustomProfit ? "custom" : profitGoal}
                    onChange={(e) =>
                      handleDropdownChange("profitGoal", e.target.value)
                    }
                  >
                    <option value="10" className="max-sm:text-xs text-base">
                      10% - Recommended
                    </option>
                    <option value="15" className="max-sm:text-xs text-base">
                      15% - Moderate
                    </option>
                    <option value="custom" className="max-sm:text-xs text-base">
                      Custom
                    </option>
                  </select>
                </div>

                {/* Conditional input for custom stopLoss */}
                {isCustomProfit && (
                  <div>
                    <input
                      type="number"
                      className="rounded-md p-1 md:p-1.5 w-[100px] md:w-[150px] outline-none focus:outline-lime-400"
                      value={profitGoal}
                      onChange={(e) =>
                        handleCustomField("profitGoal", e.target.value)
                      }
                      placeholder="Enter profit goal"
                      max="100"
                    />
                  </div>
                )}
              </div>
              {errors.profitGoal && (
                <p className="text-red-400 text-base font-semibold">
                  {errors.profitGoal}
                </p>
              )}
            </div>

            {/* stoploss dropdown */}

            <div className="my-1 md:my-2">
              <label className="block mb-1 md:mb-2 text-base md:text-md font-medium">
                Stop Loss %
              </label>
              <div className="max-lg:flex-col flex gap-2 lg:items-center">
                <div>
                  <select
                    className="rounded-md p-1 md:p-1.5 w-[200px] md:w-[250px] outline-none focus:outline-lime-400"
                    value={isCustomStopLoss ? "custom" : stopLoss}
                    onChange={(e) =>
                      handleDropdownChange("stopLoss", e.target.value)
                    }
                  >
                    <option value="1" className="max-sm:text-xs text-base">
                      1% - Recommended
                    </option>
                    <option value="2" className="max-sm:text-xs text-base">
                      2% - Moderate
                    </option>
                    <option value="custom" className="max-sm:text-xs text-base">
                      Custom
                    </option>
                  </select>
                </div>

                {/* Conditional input for custom stopLoss */}
                {isCustomStopLoss && (
                  <div>
                    <input
                      type="number"
                      className="rounded-md p-1 md:p-1.5 w-[100px] md:w-[150px] outline-none focus:outline-lime-400"
                      value={stopLoss}
                      onChange={(e) =>
                        handleCustomField("stopLoss", e.target.value)
                      }
                      placeholder="Enter stoploss"
                      max="100"
                    />
                  </div>
                )}
              </div>
              {errors.stopLoss && (
                <p className="text-red-400 text-base font-semibold">
                  {errors.stopLoss}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                className="bg-slate-300 text-black py-1.5 md:py-2 max-sm:w-8/12 w-10/12 font-bold rounded-md mt-1.5 md:mt-3 hover:bg-red-600"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* section for graph view */}
        <div className="w-full md:w-7/12 max-sm:px-1 flex flex-col">
          <div className="md:mt-5">
            <h2 className="text-white text-center my-2 text-base md:text-lg font-medium">
              Track Your Progress
            </h2>
            <ProfitPlanChart
              calculatedData={calculatedData}
              calculatedProgress={calculatedProgress}
            />
          </div>
          {/* Reset Selected Form Details */}

          <div>
            <h2 className="text-white text-center my-2 text-base font-medium">Reset All Data</h2>
          <div className=" text-black bg-[#532c90] rounded-md md:py-2 py-1 md:px-1 px-0.5">
            <div className="flex gap-2 md:gap-4 justify-center items-center flex-wrap">
              <p className="text-slate-200 text-base font-medium">
                Bank Roll :{" "}
                <span className="text-base text-[#F5A623] font-semibold">
                  {savedCurrency}
                  {savedBankRoll}
                </span>
              </p>
              <p className="text-slate-200 text-base font-medium">
                Unit Size :{" "}
                <span className="text-base text-[#F5A623] font-semibold">
                  {savedUnitSize}%
                </span>
              </p>
              <p className="text-slate-200 text-base font-medium">
                Profit Goal :{" "}
                <span className="text-base text-[#F5A623] font-semibold">
                  {savedProfitGoal}%
                </span>
              </p>
              <p className="text-slate-200 text-base font-medium">
                Stop Loss :{" "}
                <span className="text-base text-[#F5A623] font-semibold">
                  {savedStopLoss}%
                </span>
              </p>
              <p className="text-slate-200 text-base font-medium">
                Session :{" "}
                <span className="text-base text-[#F5A623] font-semibold">
                  {savedSession}
                </span>
              </p>
              <button
              className="bg-black text-[#F5A623] md:py-1.5 py-1 md:px-8 px-4 rounded-md  ml-2 md:ml-5"
              onClick={handleResetClick}
            >
              Reset
            </button>
            </div>
            
            {/* Toast Notifications */}
            <div className="toast toast-bottom ">
              {isSubmitToast && (
                <div className="alert alert-success">
                  <span>New Plan Created .</span>
                </div>
              )}
              {isResetToast && (
                <div className="alert alert-warning">
                  <span>Plan Resetted .</span>
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* profit plan table */}
      <div className="my-5 mx-8">
        <div className="bg-purple-800 rounded-md">
          <h2 className="text-slate-100 text-base font-medium text-center p-1 md:p-2">
            Profit Plan
          </h2>
        </div>

        {!savedData ? (
          <div className="p-2 rounded-md mt-2">
            <h2 className="text-base font-medium text-center text-white">
              No Data Available !!! Fill Details ...
            </h2>
          </div>
        ) : (
          /* Estimated Data and Your personal progress */
          <div className="mt-2">
              {/*   // Goal Data Table
              <div className="rounded-md mt-2 md:mt-4">
              <table className="table-auto w-full border-collapse text-sm text-white">
                <thead>
                  <tr className="bg-purple-600">
                  <th colSpan={8} className="py-2 px-4 text-base font-medium">Your Goal</th>
                  </tr>
                  <tr className="bg-purple-800 text-gray-200">
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Session
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Bankroll
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Profit
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      New Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {calculatedData.map((row, index) => (
                    <tr key={row.session} className="text-black font-medium">
                      <td className="border border-black px-4 py-3 text-center bg-purple-500">
                        {row.session}
                      </td>
                      <td className="border border-black px-4 py-2 text-center bg-orange-500">
                        {currency}
                        {row.bankroll}
                      </td>
                      <td className="border border-black px-4 py-2 text-center bg-green-600">
                        {currency}
                        {row.profit}
                      </td>
                      <td className="border border-black px-4 py-2 text-center bg-blue-600">
                        {currency}
                        {row.newBalance}
                      </td>
                    </tr>
                  ))}
                </tbody>
               </table>
               </div>
              
              */}

            <div className="rounded-md min-w-[85vw] overflow-x-scroll">
              <table className="table-auto w-full border-collapse text-sm text-white">
                <thead>
                  <tr className="bg-purple-700 text-slate-100">
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Session
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Bankroll
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Unit
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Stoploss
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Profit %
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Actual Profit
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Final Balance
                    </th>
                    <th className="border border-purple-700 px-4 py-2 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {calculatedProgress.map((row, index) => (
                    <tr key={row.session} className={`${row.session % 2 === 1 ? "bg-purple-900":"bg-purple-800"} text-slate-100 cursor-pointer hover:bg-[#7539d6]`}>
                      <td className="border border-black px-4 py-3 text-center font-medium">
                        {row.session}
                      </td>
                      <td className="border border-black px-4 py-2 text-center font-medium">
                        {currency}
                        {row.bankRoll}
                      </td>
                      <td className="border border-black px-4 py-2 text-center font-medium">
                        {currency}
                        {row.unitSize}
                      </td>
                      <td className="border border-black px-4 py-2 text-center font-medium">
                        {currency}
                        {row.stopLossSize}
                      </td>
                      <td className="border border-black px-4 py-2 text-center font-medium">
                        {row.profitPercent || 0} %
                      </td>
                      <td className="border border-black px-4 py-2 text-center font-medium">
                        {currency}
                        {row.actualProfit}
                      </td>
                      <td className="border border-black px-4 py-2 text-center font-medium">
                        {editableRow === index ? (
                          <input
                            type="number"
                            value={newFinalBalance}
                            onChange={handleBalanceChange}
                            className="px-2 py-1 bg-black text-slate-100 w-[100px] text-center rounded-md outline-none"
                          />
                        ) : (
                          `${currency}${row.finalBalance}`
                        )}
                      </td>
                      <td className="border border-black px-4 py-2 text-center">
                        {editableRow === index ? (
                          <button
                            onClick={() => handleSaveClick(index)}
                            className="bg-green-700 text-white px-4 py-1 rounded font-medium"
                          >
                            Save
                          </button>
                        ) : (
                          <button className="bg-purplegrad  text-white px-3 py-1 rounded-md font-medium"
                            onClick={() => handleEditClick(index)}
                          >
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Planprofit;
