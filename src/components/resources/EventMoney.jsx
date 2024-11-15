import React from 'react'
import GaugeChart from 'react-gauge-chart'

const EventMoney = ({ oddEvenST, oddEvenLT, colorST, colorLT, rangeST, rangeLT, countData, lastHitData }) => {




    const calculateEvenMoneyPercentage = (numerator, num1, num2) => {
        const total = num1 + num2;
    
        // Return "0%" if total is 0 to avoid NaN
        if (total === 0) {
          return 0;
        }
    
        // Calculate the percentage and round to the nearest integer
        const percentage = Math.round((numerator / total) * 100);
        return `${percentage}`;
      };
    
      const valueRed = calculateEvenMoneyPercentage(countData.red,countData.red,countData.black);
      const valueBlack = calculateEvenMoneyPercentage(countData.black, countData.red, countData.black);
      const valueOdd = calculateEvenMoneyPercentage(countData.odd, countData.odd, countData.even);
      const valueEven = calculateEvenMoneyPercentage(countData.even, countData.odd, countData.even);
      const value1to18 = calculateEvenMoneyPercentage(countData.one_eighteen, countData.one_eighteen, countData.nineteen_thirtySix);
      const value19to36 = calculateEvenMoneyPercentage(countData.nineteen_thirtySix, countData.one_eighteen, countData.nineteen_thirtySix);  

     


      


// ----------------------Long Trend-------------------------


    const percentRedST = (Math.round(colorST.red/ 3) / 35);
    const percentBlackST = (Math.round(colorST.black / 3) / 35);

    const shortRedScore = percentRedST == 0 ? "COLD" : percentRedST < 0.36 ? "STABLE" : "HOT";
    const shortBlackScore = percentBlackST == 0 ? "COLD" : percentBlackST < 0.36 ? "STABLE" : "HOT";

    const LongRedScore =  (Math.round(colorLT.red / 9) / 35);
    const LongBlackScore =  (Math.round(colorLT.black / 9) / 35);

    const longRed = LongRedScore <=0.3 ? "COLD" : LongRedScore <= 0.50 ? "STABLE" : "HOT";
    const longBlack = LongBlackScore <=0.3 ? "COLD" : LongBlackScore <=0.50 ? "STABLE" : "HOT";

    //-----------------------------------Odd And Even-

    
    const percentOddST = (Math.round(oddEvenST.odd / 3)/35);
    const percentEvenST = (Math.round(oddEvenST.even / 3)/35);

    const shortOddScore = percentOddST == 0 ? "COLD" : percentOddST < 0.36 ? "STABLE" : "HOT";
    const shortEvenScore = percentEvenST == 0 ? "COLD" : percentEvenST < 0.36 ? "STABLE" : "HOT";

    const LongOddScore =  (Math.round(oddEvenLT.odd / 9) / 35);
    const LongEvenScore =  (Math.round(oddEvenLT.even / 9) / 35);

    const longOdd = LongOddScore <=0.3 ? "COLD" : LongOddScore <= 0.50 ? "STABLE" : "HOT";
    const longEven = LongEvenScore <=0.3 ? "COLD" : LongEvenScore <=0.50 ? "STABLE" : "HOT";

    // range -------1 TO 18 & 19 TO 36----------------

    const percentRange1St = (Math.round(rangeST["1-18"]/3)/35);
    const percentRange2St = (Math.round(rangeST["19-36"]/3)/35);

    const short1to18Score = percentRange1St == 0 ? "COLD" : percentRange1St < 0.36 ? "STABLE" : "HOT";
    const short19to36Score = percentRange2St == 0 ? "COLD" :percentRange2St < 0.36 ? "STABLE" : "HOT";

    const Longrange1_18 =  (Math.round(rangeLT['1-18'] / 9) / 35);
    const Longrange19_36 =  (Math.round(rangeLT['19-36'] / 9) / 35);

    const long1_18 =Longrange1_18<=0.3 ? "COLD" : Longrange1_18 <= 0.50 ? "STABLE" : "HOT";
    const long19_36 = Longrange19_36 <=0.3 ? "COLD" : Longrange19_36 <=0.50 ? "STABLE" : "HOT";



    return (
        <div>
            {/* Other Statistics */}
            {/* Red & Black Start */}
            <div className="flex flex-col gap-2 border-2 border-purple-900 rounded-2xl p-5 mb-5">
                <div className="mb-1">
                    <div className="flex justify-center">
                        <div
                            style={{ width: "50%" }}
                            className="bg-red-600 text-center p-2 text-xs"
                        >
                            Red
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className="bg-[rgba(2,0,36,1)] text-center border-l-2  border-off_white p-2 text-xs"
                        >
                            Black
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <div>Count:</div>
                    <div className="flex justify-center text-black font-bold">

                        <div
                            style={{ width: "50%" }}
                            className={
                                valueRed <= 0 ? "bg-purple-200 text-black  text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                                valueRed <= 30 ? "bg-purple-400  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                valueRed <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                "bg-purple-600 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                                }
                        >
                            {countData.red}
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className={
                                valueBlack <= 0 ? "bg-purple-200 text-black text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                valueBlack <= 30 ? "bg-purple-400  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                valueBlack <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                "bg-purple-600  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                                }
                        >
                            {countData.black}
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <div>Last Hit</div>
                    <div className="flex justify-center text-white font-bold">

                        <div
                            style={{ width: "50%" }}
                            className={`text-center p-2 text-xs ${
                                lastHitData.red >= 10
                                ? "bg-purple-600 border hover:bg-softBlue"
                                : lastHitData.red > 0 && lastHitData.red <= 3
                                ? "bg-purple-400  border hover:bg-softBlue hover:text-white"
                                : lastHitData.red >=4 && lastHitData.red <= 9
                                ? "bg-purple-500  border hover:bg-softBlue hover:text-white"
                                : "bg-purple-200  text-black border hover:bg-softBlue hover:text-white"
                            }`}
                        >
                            {lastHitData.red}
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className={`text-center p-2 text-xs ${
                                lastHitData.black >= 10
                                ? "bg-purple-600 border hover:bg-softBlue"
                                : lastHitData.black > 0 && lastHitData.black <= 3
                                ? "bg-purple-400  border hover:bg-softBlue hover:text-white"
                                : lastHitData.black >=4 && lastHitData.black <= 9
                                ? "bg-purple-500  border hover:bg-softBlue hover:text-white"
                                : "bg-purple-200 text-black  border hover:bg-softBlue hover:text-white"
                            }`}
                        >
                            {lastHitData.black}
                        </div>
                    </div>
                </div>

                <div className='mt-3  mb-2'>
                    <div className=" mt-3  mb-2">Short Term Trend</div>
                    <div className="flex justify-between">
                        <div
                            style={{
                                position: "relative",
                                width: "40%",
                                display: "inline-block",
                            }}
                        >
                            <GaugeChart
                                id="gauge-chart-1"
                                nrOfLevels={15}
                                percent={percentRedST}
                                colors={["#0bc1f7", "#00000", "#FF0000"]}
                                arcWidth={0.3}
                                hideText={true}
                            />
                            {/* Overlayed text */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "110%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                }}
                            >
                                {shortRedScore}
                            </div>
                        </div>
                        <div
                            style={{
                                position: "relative",
                                width: "40%",
                                display: "inline-block",
                            }}
                        >
                            <GaugeChart
                                id="gauge-chart-1"
                                nrOfLevels={15}
                                percent={percentBlackST}
                                colors={["#0bc1f7", "#00000", "#FF0000"]}
                                arcWidth={0.3}
                                hideText={true}
                            />
                            {/* Overlayed text */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "110%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "fff",
                                }}
                            >
                                {shortBlackScore}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-3  mb-2'>
                    <div className=" mt-5  mb-2">Long Term Trend</div>
                    <div className="flex justify-between">
                        <div
                            style={{
                                position: "relative",
                                width: "40%",
                                display: "inline-block",
                            }}
                        >
                            <GaugeChart
                                id="gauge-chart-1"
                                nrOfLevels={15}
                                percent={LongRedScore}
                                colors={["#0bc1f7", "#00000", "#FF0000"]}
                                arcWidth={0.3}
                                hideText={true}
                            />
                            {/* Overlayed text */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "110%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                }}
                            >
                                {longRed}
                            </div>
                        </div>
                        <div
                            style={{
                                position: "relative",
                                width: "40%",
                                display: "inline-block",
                            }}
                        >
                            <GaugeChart
                                id="gauge-chart-1"
                                nrOfLevels={15}
                                percent={LongBlackScore}
                                colors={["#0bc1f7", "#00000", "#FF0000"]}
                                arcWidth={0.3}
                                hideText={true}
                            />
                            {/* Overlayed text */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "110%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "fff",
                                }}
                            >
                                {longBlack}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Red &Black End ------------------ */}

            {/* Odd &Even Start ---------------------- */}
            <div className="flex flex-col gap-2 border-2 border-purple-900 rounded-2xl py-2 px-5 my-3">
                <div className="mt-5">
                    <div className="flex justify-center">
                        <div
                            style={{ width: "50%" }}
                            className="bg-[rgba(2,0,36,1)] text-center p-2 text-xs"
                        >
                            Odd
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className="bg-[rgba(2,0,36,1)] text-center border-l-2  border-off_white p-2 text-xs"
                        >
                            Even
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <div>Count:</div>
                    <div className="flex justify-center text-black font-bold">

                        <div
                            style={{ width: "50%" }}
                            className={
                                valueOdd <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                                valueOdd <= 30 ? "bg-purple-400  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                valueOdd <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                "bg-purple-600 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                                }
                        >
                            {countData.odd}
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className={
                                valueEven <= 0 ? "bg-purple-200  text-black text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                                valueEven <= 30 ? "bg-purple-400 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                valueEven <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                "bg-purple-600 text-white text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                                }
                        >
                            {countData.even}
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <div>Last Hit</div>
                    <div className="flex justify-center text-white font-bold">

                        <div
                            style={{ width: "50%" }}
                            className={`text-center p-2 text-xs ${
                                lastHitData.odd >= 10
                                ? "bg-purple-600 border hover:bg-softBlue"
                                : lastHitData.odd > 0 && lastHitData.odd <= 3
                                ? "bg-purple-400  border hover:bg-softBlue hover:text-white"
                                : lastHitData.odd >=4 && lastHitData.odd <= 9
                                ? "bg-purple-500  border hover:bg-softBlue hover:text-white"
                                : "bg-purple-200 text-black border hover:bg-softBlue hover:text-white"
                            }`}
                        >
                            {lastHitData.odd}
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className={`text-center p-2 text-xs ${
                                lastHitData.even >= 10
                                ? "bg-purple-600 border hover:bg-softBlue"
                                : lastHitData.even > 0 && lastHitData.even <= 3
                                ? "bg-purple-400  border hover:bg-softBlue hover:text-white"
                                : lastHitData.even >=4 && lastHitData.even <= 9
                                ? "bg-purple-500  border hover:bg-softBlue hover:text-white"
                                : "bg-purple-200  text-black border hover:bg-softBlue hover:text-white"
                            }`}
                        >
                            {lastHitData.even}
                        </div>
                    </div>
                </div>

                <div className=" mt-3 mb-2">
                    <div className=" mt-3 mb-2">Short Term Trend</div>
                    <div className="flex justify-between">
                        <div
                            style={{
                                position: "relative",
                                width: "40%",
                                display: "inline-block",
                            }}
                        >
                            <GaugeChart
                                id="gauge-chart-1"
                                nrOfLevels={15}
                                percent={percentOddST}
                                colors={["#0bc1f7", "#00000", "#FF0000"]}
                                arcWidth={0.3}
                                hideText={true}
                            />
                            {/* Overlayed text */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "110%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                }}
                            >
                                {shortOddScore}
                            </div>
                        </div>
                        <div
                            style={{
                                position: "relative",
                                width: "40%",
                                display: "inline-block",
                            }}
                        >
                            <GaugeChart
                                id="gauge-chart-1"
                                nrOfLevels={15}
                                percent={percentEvenST}
                                colors={["#0bc1f7", "#00000", "#FF0000"]}
                                arcWidth={0.3}
                                hideText={true}
                            />
                            {/* Overlayed text */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "110%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "fff",
                                }}
                            >
                                {shortEvenScore}
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-3 mb-2">
                    <div className=" mt-3  mb-2">Long Term Trend</div>
                    <div className="flex justify-between mb-4">
                        <div
                            style={{
                                position: "relative",
                                width: "40%",
                                display: "inline-block",
                            }}
                        >
                            <GaugeChart
                                id="gauge-chart-1"
                                nrOfLevels={15}
                                percent={LongOddScore}
                                colors={["#0bc1f7", "#00000", "#FF0000"]}
                                arcWidth={0.3}
                                hideText={true}
                            />
                            {/* Overlayed text */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "110%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                }}
                            >
                                {longOdd}
                            </div>
                        </div>
                        <div
                            style={{
                                position: "relative",
                                width: "40%",
                                display: "inline-block",
                            }}
                        >
                            <GaugeChart
                                id="gauge-chart-1"
                                nrOfLevels={15}
                                percent={LongEvenScore}
                                colors={["#0bc1f7", "#00000", "#FF0000"]}
                                arcWidth={0.3}
                                hideText={true}
                            />
                            {/* Overlayed text */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "110%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "fff",
                                }}
                            >
                                {longEven}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Odd &Even End ----------------------------- */}

            <div className="flex flex-col gap-2 border-2 border-purple-900 rounded-2xl px-5 py-3">
                <div className="mt-5">
                    <div className="flex justify-center">
                        <div
                            style={{ width: "50%" }}
                            className="bg-[rgba(2,0,36,1)] text-center p-2 text-xs"
                        >
                            1 - 18
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className="bg-[rgba(2,0,36,1)] text-center border-l-2  border-off_white p-2 text-xs"
                        >
                            19 - 36
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <div>Count:</div>
                    <div className="flex justify-center text-black font-bold">

                        <div
                            style={{ width: "50%" }}
                            className={
                                value1to18 <= 0 ? "bg-purple-200 text-black  text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                                value1to18 <= 30 ? "bg-purple-400  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                value1to18 <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                "bg-purple-600  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                                }
                        >
                            {countData.one_eighteen}
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className={
                                value19to36 <= 0 ? "bg-purple-200 text-black  text-center border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                                value19to36 <= 30 ? "bg-purple-400  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                value19to36 <= 49 ? "bg-purple-500 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                                "bg-purple-600 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                                }
                        >
                            {countData.nineteen_thirtySix}
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <div>Last Hit</div>
                    <div className="flex justify-center text-black font-bold">

                        <div
                            style={{ width: "50%" }}
                            className={`text-center p-2 text-xs ${
                                lastHitData.one_eighteen >= 10
                                ? "bg-purple-600 border hover:bg-softBlue"
                                : lastHitData.one_eighteen > 0 && lastHitData.one_eighteen <= 3
                                ? "bg-purple-400  border hover:bg-softBlue hover:text-white"
                                : lastHitData.one_eighteen >=4 && lastHitData.one_eighteen <= 9
                                ? "bg-purple-500  border hover:bg-softBlue hover:text-white"
                                : "bg-purple-200 text-black border hover:bg-softBlue hover:text-white"
                            }`}
                        >
                            {lastHitData.one_eighteen}
                        </div>
                        <div
                            style={{ width: "50%" }}
                            className={`text-center p-2 text-xs ${
                                lastHitData.nineteen_thirtySix >= 10
                                ? "bg-purple-600 border hover:bg-softBlue"
                                : lastHitData.nineteen_thirtySix > 0 && lastHitData.nineteen_thirtySix <= 3
                                ? "bg-purple-400  border hover:bg-softBlue hover:text-white"
                                : lastHitData.nineteen_thirtySix >=4 && lastHitData.nineteen_thirtySix <= 9
                                ? "bg-purple-500 border hover:bg-softBlue hover:text-white"
                                : "bg-purple-200 text-black border hover:bg-softBlue hover:text-white"
                            }`}
                        >
                            {lastHitData.nineteen_thirtySix}
                        </div>
                    </div>
                </div>

                <div className=" mt-3  mb-2">
                <div className=" mt-3  mb-2">Short Term Trend</div>
                <div className="flex justify-between">
                    <div
                        style={{
                            position: "relative",
                            width: "40%",
                            display: "inline-block",
                        }}
                    >
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={percentRange1St}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: "absolute",
                                top: "110%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                color: "#ffffff",
                            }}
                        >
                            {short1to18Score}
                        </div>
                    </div>
                    <div
                        style={{
                            position: "relative",
                            width: "40%",
                            display: "inline-block",
                        }}
                    >
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={percentRange2St}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: "absolute",
                                top: "110%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                color: "fff",
                            }}
                        >
                            {short19to36Score}
                        </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-3 mb-2">
                <div className=" mt-3 mb-2">Long Term Trend</div>
                <div className="flex justify-between mb-4">
                    <div
                        style={{
                            position: "relative",
                            width: "40%",
                            display: "inline-block",
                        }}
                    >
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={Longrange1_18}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: "absolute",
                                top: "110%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                color: "#ffffff",
                            }}
                        >
                            {long1_18}
                        </div>
                    </div>
                    <div
                        style={{
                            position: "relative",
                            width: "40%",
                            display: "inline-block",
                        }}
                    >
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={Longrange19_36}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: "absolute",
                                top: "110%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                color: "fff",
                            }}
                        >
                            {long19_36}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventMoney