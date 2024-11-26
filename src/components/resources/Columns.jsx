import React from 'react'
import GaugeChart from 'react-gauge-chart'

const Columns = ({ columnScoresDD, colScoresDDLong, countData, lastHitData ,columnCount }) => {

    const percent1ST = (Math.round(columnScoresDD[1] / 3) / 35);
    const percent2ST = (Math.round(columnScoresDD[2] / 3) / 35);
    const percent3ST = (Math.round(columnScoresDD[3] / 3) / 35);

    



    const shortColScore1 = percent1ST == 0 ? "COLD" : percent1ST < 0.36 ? "STABLE" : "HOT";
    const shortColScore2 = percent2ST == 0 ? "COLD" : percent2ST < 0.36 ? "STABLE" : "HOT";
    const shortColScore3 = percent3ST == 0 ? "COLD" : percent3ST < 0.36 ? "STABLE" : "HOT";


    const percent1LT = (Math.round(colScoresDDLong[1] / 9) / 35);
    const percent2LT = (Math.round(colScoresDDLong[2] / 9) / 35);
    const percent3LT = (Math.round(colScoresDDLong[3] / 9) / 35);


    const longColScore1 = columnCount[1]<= 2 ? "COLD" :columnCount[1] <= 3 ? "STABLE" : "HOT";
    const longColScore2 = columnCount[2] <=2 ? "COLD" : columnCount[2] <=3? "STABLE" : "HOT";
    const longColScore3 = columnCount[3] <=2 ? "COLD" : columnCount[3]<=3 ? "STABLE" : "HOT";


    const calculateColumnPercentage = (numerator, col_one, col_two, col_three) => {
        // Ensure that col_one, col_two, col_three are valid numbers
        const total = (col_one || 0) + (col_two || 0) + (col_three || 0);
        
        // Return 0 if the total is 0 to avoid NaN
        if (total === 0) {
            return 0;
        }
    
        // Calculate the percentage and round to nearest integer
        const percentage = Math.round((numerator / total) * 100);
        return `${percentage}`;
    };
    
    // Ensure all countData properties are correctly named and contain valid numbers
    const colCount_1 = calculateColumnPercentage(countData.col_one, countData.col_one, countData.col_two, countData.col_three);
    const colCount_2 = calculateColumnPercentage(countData.col_two, countData.col_one, countData.col_two, countData.col_three);
    const colCount_3 = calculateColumnPercentage(countData.col_three, countData.col_one, countData.col_two, countData.col_three);
    
    // const getStatus = (scores) => {
    //     const values = Object.values(scores);
    //     const maxScore = Math.max(...values);
    //     const minScore = Math.min(...values);
    //     return Object.keys(scores).reduce((status, key) => {
    //         if (scores[key] === 0) {
    //             // If score is 0, return an empty string
    //             status[key] = 'COLD';
    //         } else {
    //             status[key] = scores[key] === maxScore ? 'HOT' : scores[key] === minScore ? 'COLD' : 'STABLE';
    //         }
    //         return status;
    //     }, {});
    // };

    // const longColScore = getStatus(colScoresDDLong)

    // console.log(longColScore);

    return (
        <div className=' rounded-2xl  '>
            {/* Horizontal Percentage Bar Tabs for Dozens */}
            <div className="mb-2">
                <div className="flex justify-center">
                    <div style={{ width: '33%' }} className="bg-[rgba(2,0,36,1)] text-center p-2 text-xs">1st Column</div>
                    <div style={{ width: '33%' }} className="bg-[rgba(2,0,36,1)] text-center border-l-2 border-r-2 border-off_white p-2 text-xs">2nd Column</div>
                    <div style={{ width: '33%' }} className="bg-[rgba(2,0,36,1)] text-center p-2 text-xs">3rd Column</div>
                </div>
            </div>

            {/*  Count Bar Tabs for Dozens */}
            <div className="mb-2">
                <div>
                    Count:
                </div>
                    <div className="flex justify-center font-bold text-black  font-bold">
                    <div
                        style={{ width: '33%' }}
                        className={
                        colCount_1 <= 0 ? "bg-purple-200  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        colCount_1 <= 30 ? "bg-purple-400  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        colCount_1 <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        "bg-purple-600  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                        }
                    >
                        {countData.col_one}
                    </div>
                    <div
                        style={{ width: '33%' }}
                        className={
                        colCount_2 <= 0 ? "bg-purple-200 text-black  text-center p-2 border-l-2 border-r-2 text-xs hover:bg-softBlue hover:text-white" :
                        colCount_2 <= 30 ? "bg-purple-400  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        colCount_2 <= 49 ? "bg-purple-500  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        "bg-purple-600  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                        }
                    >
                        {countData.col_two}
                    </div>
                    <div
                        style={{ width: '33%' }}
                        className={
                        colCount_3 <= 0 ? "bg-purple-200  text-black text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        colCount_3 <= 30 ? "bg-purple-400  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        colCount_3 <= 49 ? "bg-purple-500 text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        "bg-purple-600  text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                        }
                    >
                        {countData.col_three}
                    </div>
                </div>

                {/* <div className="flex justify-around text-xs my-1">
                    <p> {countData.dozen_one}</p>
                    <p> {countData.dozen_two}</p>
                    <p> {countData.dozen_three}</p>
                </div> */}

            </div>

            {/*  Last Hit Bar Tabs for Dozens */}
            <div className="">
                <div>
                    Last Hit:
                </div>

            <div className="flex justify-center text-black font-bold text-white">
                <div 
                    style={{ width: '33%' }} 
                    className={`text-center p-2 text-xs ${
                        lastHitData.col_one >= 10
                        ? "bg-purple-600 border hover:bg-softBlue"
                        : lastHitData.col_one > 0 && lastHitData.col_one <= 3
                        ? "bg-purple-400  border hover:bg-softBlue hover:text-white"
                        : lastHitData.col_one >=4 && lastHitData.col_one <= 9
                        ? "bg-purple-500  border hover:bg-softBlue hover:text-white"
                        : "bg-purple-200 text-black  border hover:bg-softBlue hover:text-white"
                    }`}
                >
                    {lastHitData.col_one}
                </div>
                <div 
                    style={{ width: '33%' }} 
                    className={`text-center p-2 text-xs ${
                        lastHitData.col_two  >= 10
                        ? "bg-purple-600 border hover:bg-softBlue"
                        : lastHitData.col_two > 0 && lastHitData.col_two <= 3
                        ? "bg-purple-400  border hover:bg-softBlue hover:text-white"
                        : lastHitData.col_two >=4 && lastHitData.col_two <= 9
                        ? "bg-purple-500  border hover:bg-softBlue hover:text-white"
                        : "bg-purple-200 text-black border hover:bg-softBlue hover:text-white"
                    }`}
                >
                    {lastHitData.col_two}
                </div>
                <div 
                    style={{ width: '33%' }} 
                    className={`text-center p-2 text-xs ${
                        lastHitData.col_three >= 10
                        ? "bg-purple-600 border hover:bg-softBlue"
                        : lastHitData.col_three > 0 && lastHitData.col_three <= 3
                        ? "bg-purple-400 border hover:bg-softBlue hover:text-white"
                        : lastHitData.col_three >= 4 && lastHitData.col_three <= 9
                        ? "bg-purple-500 border hover:bg-softBlue hover:text-white"
                        : "bg-purple-200 text-black  border hover:bg-softBlue hover:text-white"
                    }`}
                >
                    {lastHitData.col_three}
                </div>
                </div>

                {/* <div className="flex justify-center">
                    <div style={{ width: '33%' }} className="bg-purple-600 text-center p-2 text-xs">{lastHitData.col_one}</div>
                    <div style={{ width: '33%' }} className="bg-purple-500 text-center p-2 text-xs">{lastHitData.col_two}</div>
                    <div style={{ width: '33%' }} className="bg-purple-400 text-center p-2 text-xs">{lastHitData.col_three}</div>
                </div> */}
                {/* <div className="flex justify-around text-xs my-1">
                    <p> {lastHitData.dozen_one}</p>
                    <p> {lastHitData.dozen_two}</p>
                    <p> {lastHitData.dozen_three}</p>
                </div> */}
            </div>

            <div className='py-3 my-1'>Short Term Trend:
                <div className="flex justify-around mt-3">
                    <div style={{ position: 'relative', width: '33%', display: 'inline-block' }}>
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={percent1ST}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '120%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                color: '#FFFFFF',
                            }}
                        >

                            {shortColScore1}
                        </div>
                    </div>
                    <div style={{ position: 'relative', width: '33%', display: 'inline-block' }}>
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={percent2ST}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '120%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                color: '#FFFFFF',
                            }}
                        >

                            {shortColScore2}
                        </div>
                    </div>
                    <div style={{ position: 'relative', width: '33%', display: 'inline-block' }}>
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={percent3ST}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '120%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                color: '#FFFFFF',
                            }}
                        >

                            {shortColScore3}
                        </div>
                    </div>


                </div>

            </div>

            <div className='my-5'>Long Term Trend:
                <div className="flex justify-around mt-3">
                    <div style={{ position: 'relative', width: '33%', display: 'inline-block' }}>
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={percent1LT}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '120%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                color: '#FFFFFF',
                            }}
                        >
                            {longColScore1}

                        </div>
                    </div>
                    <div style={{ position: 'relative', width: '33%', display: 'inline-block' }}>
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={percent2LT}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '120%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                color: '#FFFFFF',
                            }}
                        >
                            {longColScore2}

                        </div>
                    </div>
                    <div style={{ position: 'relative', width: '33%', display: 'inline-block' }}>
                        <GaugeChart
                            id="gauge-chart-1"
                            nrOfLevels={15}
                            percent={percent3LT}
                            colors={["#0bc1f7", "#00000", "#FF0000"]}
                            arcWidth={0.3}
                            hideText={true}
                        />
                        {/* Overlayed text */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '120%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                color: '#FFFFFF',
                            }}
                        >
                            {longColScore3}

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Columns