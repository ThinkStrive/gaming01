import React from 'react'
import GaugeChart from 'react-gauge-chart'

const Dozens = ({ dozenScoresDD, dozenScoresDDLong, countData, lastHitData, dozenCount }) => {

    
    const percent1ST = (Math.round(dozenScoresDD[1] / 3) / 35);
    const percent2ST = (Math.round(dozenScoresDD[2] / 3) / 35);
    const percent3ST = (Math.round(dozenScoresDD[3] / 3) / 35);
    
    const shortDozScore1 = percent1ST==0 ? "COLD" : percent1ST<0.36 ? "STABLE" : "HOT";
    const shortDozScore2 = percent2ST==0 ? "COLD" : percent2ST<0.36 ? "STABLE" : "HOT";
    const shortDozScore3 = percent3ST==0 ? "COLD" : percent3ST<0.36 ? "STABLE" : "HOT";

    const percent1LT = (Math.round(dozenScoresDDLong[1] / 9) / 35);
    const percent2LT = (Math.round(dozenScoresDDLong[2] / 9) / 35);
    const percent3LT = (Math.round(dozenScoresDDLong[3] / 9) / 35);



    const longDozScore1 = dozenCount[1] <=2 ? "COLD" : dozenCount[1] <=3 ? "STABLE" : "HOT";
    const longDozScore2 = dozenCount[2] <=2 ? "COLD" : dozenCount[2] <=3 ? "STABLE" : "HOT";
    const longDozScore3 = dozenCount[3] <=3 ? "COLD" : dozenCount[3] <=2 ? "STABLE" : "HOT";



    // const getStatus = (scores) => {
    //     const values = Object.values(scores);
    //     const maxScore = Math.max(...values);
    //     const minScore = Math.min(...values);
    //     return Object.keys(scores).reduce((status, key) => {
    //       if (scores[key] === 0) {
    //         // If score is 0, return an empty string
    //         status[key] = 'COLD';
    //       } else {
    //         status[key] = scores[key] === maxScore ? 'HOT' : scores[key] === minScore ? 'COLD' : 'STABLE';
    //       }
    //       return status;
    //  },{});
    // };

    // const longDozenScore = getStatus(dozenScoresDDLong)

    const calculatePercentage = (numerator, denominator1, denominator2, denominator3) => {
        const total = denominator1 + denominator2 + denominator3;
    
        // Return 0 if the total is 0 to avoid NaN
        if (total === 0) {
          return 0;
        }
        // Calculate the percentage and round to nearest integer
        const percentage = Math.round((numerator / total) * 100);
        return `${percentage}`;
      };
      const dozenCount_1 = calculatePercentage(countData.dozen_one, countData.dozen_one, countData.dozen_two, countData.dozen_three);
      const dozenCount_2 = calculatePercentage(countData.dozen_two, countData.dozen_one, countData.dozen_two, countData.dozen_three);
      const dozenCount_3 = calculatePercentage(countData.dozen_three, countData.dozen_one, countData.dozen_two, countData.dozen_three);


    

    return (
        <div className=' w-[100%]'>
            {/* Horizontal Percentage Bar Tabs for Dozens */}
            <div className="mb-2">
                <div className="flex justify-center">
                    <div style={{ width: '33%' }} className="bg-[rgba(2,0,36,1)] text-center p-2 text-xs">1st Dozen</div>
                    <div style={{ width: '33%' }} className="bg-[rgba(2,0,36,1)] text-center border-l-2 border-r-2 border-off_white p-2 text-xs">2nd Dozen</div>
                    <div style={{ width: '33%' }} className="bg-[rgba(2,0,36,1)] text-center p-2 text-xs">3rd Dozen</div>
                </div>
            </div>

            {/*  Count Bar Tabs for Dozens */}
            <div className="mb-2">
                <div>
                    Count:
                </div>

                <div className="flex justify-center font-bold text-white">
                    <div
                        style={{ width: '33%' }}
                        className={
                        dozenCount_1 <= 0 ? "bg-purple-200  text-black  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        dozenCount_1 <= 30 ? "bg-purple-400   text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        dozenCount_1 <= 49 ? "bg-purple-500   text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        "bg-purple-600   text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                        }
                    >
                        {countData.dozen_one}
                    </div>
                    <div
                        style={{ width: '33%' ,border:""}}
                        className={
                        dozenCount_2 <= 0 ? "bg-purple-200  text-black   text-center border-l-2 border-r-2 p-2 text-xs hover:bg-softBlue hover:text-white" :
                        dozenCount_2 <= 30 ? "bg-purple-400   text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        dozenCount_2 <= 49 ? "bg-purple-500   text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        "bg-purple-600   text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                        }
                    >
                        {countData.dozen_two}
                    </div>
                    <div
                        style={{ width: '33%' }}
                        className={
                        dozenCount_3 <= 0 ? "bg-purple-200 text-black  text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        dozenCount_3 <= 30 ? "bg-purple-400   text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        dozenCount_3 <= 49 ? "bg-purple-500   text-center p-2 text-xs hover:bg-softBlue hover:text-white" :
                        "bg-purple-600 text-center p-2 text-xs hover:bg-softBlue hover:text-white"
                        }
                    >
                        {countData.dozen_three}
                    </div>
                </div>

                
                {/* <div className="flex justify-center">
                    <div style={{ width: '33%' }} className="bg-purple-600 text-center p-2 text-xs">{countData.dozen_one}</div>
                    <div style={{ width: '33%' }} className="bg-purple-500 text-center p-2 text-xs">{countData.dozen_two}</div>
                    <div style={{ width: '33%' }} className="bg-purple-400 text-center p-2 text-xs">{countData.dozen_three}</div>
                </div> */}
                {/* <div className="flex justify-around text-xs my-1">
                    <p> {countData.dozen_one}</p>
                    <p> {countData.dozen_two}</p>
                    <p> {countData.dozen_three}</p>
                </div> */}

            </div>

            {/*  Last Hit Bar Tabs for Dozens */}
            <div className=" ">
                <div>
                    Last Hit:
                </div>
                <div className="flex justify-center font-bold  text-white">
                <div 
                    style={{ width: '33%' }} 
                    className={`text-center p-2 text-xs ${
                        lastHitData.dozen_one >= 10
                        ? "bg-purple-600  border hover:bg-softBlue"
                        : lastHitData.dozen_one > 0 && lastHitData.dozen_one <= 3
                        ? "bg-purple-400   border hover:bg-softBlue hover:text-white"
                        : lastHitData.dozen_one >= 4 && lastHitData.dozen_one <= 9
                        ? "bg-purple-500   border hover:bg-softBlue hover:text-white"
                        : "bg-purple-200  text-black  border hover:bg-softBlue hover:text-white"
                    }`}
                >
                    {lastHitData.dozen_one}
                </div>
                <div 
                    style={{ width: '33%' }} 
                    className={`text-center p-2 text-xs ${
                        lastHitData.dozen_two  >= 10
                        ? "bg-purple-600  border hover:bg-softBlue"
                        : lastHitData.dozen_two > 0 && lastHitData.dozen_two <= 3
                        ? "bg-purple-400   border hover:bg-softBlue hover:text-white"
                        : lastHitData.dozen_two >= 4 && lastHitData.dozen_two <= 9
                        ? "bg-purple-500   border hover:bg-softBlue hover:text-white"
                        : "bg-purple-200  text-black   border hover:bg-softBlue hover:text-white"
                    }`}
                >
                    {lastHitData.dozen_two}
                </div>
                <div 
                    style={{ width: '33%' }} 
                    className={`text-center p-2 text-xs ${
                        lastHitData.dozen_three>= 10
                        ? "bg-purple-600  border hover:bg-softBlue"
                        : lastHitData.dozen_three > 0 && lastHitData.dozen_three <= 3
                        ? "bg-purple-400   border hover:bg-softBlue hover:text-white"
                        : lastHitData.dozen_three >= 4 && lastHitData.dozen_three <= 9
                        ? "bg-purple-500   border hover:bg-softBlue hover:text-white"
                        : "bg-purple-200  text-black   border hover:bg-softBlue hover:text-white"
                    }`}
                >
                    {lastHitData.dozen_three}
                </div>
                </div>





                {/* <div className="flex justify-center">
                    <div style={{ width: '33%' }} className="bg-purple-600 text-center p-2 text-xs">{lastHitData.dozen_one}</div>
                    <div style={{ width: '33%' }} className="bg-purple-500 text-center p-2 text-xs">{lastHitData.dozen_two}</div>
                    <div style={{ width: '33%' }} className="bg-purple-400 text-center p-2 text-xs">{lastHitData.dozen_three}</div>
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
                            
                            {shortDozScore1}
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
                            
                            {shortDozScore2}
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
                                color: '#FFFFFF' ,
                            }}
                        >
                            
                            {shortDozScore3}
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
                            {longDozScore1}
                           
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
                            {longDozScore2}
                            
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
                                color: '#FFFFFF' ,
                            }}
                        >
                            {longDozScore3}
                            
                        </div>
                    </div>
                 
                  
                </div>
            </div>
        </div>
    )
}

export default Dozens