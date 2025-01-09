
import { useState } from 'react';
import { IoBarChart } from "react-icons/io5";
import Dozens from './Dozens';
import Columns from './Columns';
import EventMoney from './EventMoney';

const Statistics = () => {
    // State for recent numbers, slider value, and active tab
   
    const [activeTab, setActiveTab] = useState('Dozen');

    // Function to handle tab switch
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="text-white px-2 w-full h-[200px] flex flex-col gap-5" style={{ overflow: scroll, scrollbarWidth: "20px" }}>
            {/* Header */}
            <div className="flex justify-center items-center mb-1">
                <p className="flex items-center justify-center gap-2 font-bold text-xl">
                    <IoBarChart  /> Statistics
                </p>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-boxed bg-purple-800 mb-1 " >
                {['Dozen', 'Column', 'Even Money'].map((tab) => (
                    <a
                        key={tab}
                        className={`tab  ${activeTab === tab ? 'tab-active font-bold' : 'text-white'}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </a>
                ))}
            </div>

            <div>

                {activeTab === 'Dozen' && <Dozens />}

                {activeTab === 'Column' && <Columns />}

                {activeTab === 'Even Money' && <EventMoney />}
            </div>
        </div>
    );
};

export default Statistics;




// <div role="tablist" className="tabs tabs-bordered font-bold">

//     <input type="radio" name="my_tabs_1" role="tab" className="tab text-slate-900" aria-label="HOT/COLD" />
//     <div role="tabpanel" className="tab-content p-10 text-center text-slate-900">Tab content 1</div>

//     <input
//         type="radio"
//         name="my_tabs_1"
//         role="tab"
//         className="tab text-slate-900"
//         aria-label="ADVANCED"
//         defaultChecked />
//     <div role="tabpanel" className="tab-content text-center text-slate-900 p-10">
//         <div className="flex flex-col justify-center gap-5">
//             <p className="text-center">29 16 29 28 25 12 2 29 26 25 11 8</p>
//             <div className="join">
//                 <input className="join-item btn" type="radio" name="options" aria-label="0" />
//                 <input className="join-item btn" type="radio" name="options" aria-label="1ST DOZEN" />
//                 <input className="join-item btn" type="radio" name="options" aria-label="2ND DOZEN" />
//                 <input className="join-item btn" type="radio" name="options" aria-label="3RD DOZEN" />
//             </div>
//         </div>
//     </div>

//     <input type="radio" name="my_tabs_1" role="tab" className="tab text-slate-900" aria-label="LAST 500" />
//     <div role="tabpanel" className="tab-content text-center text-slate-900 p-10">Tab content 3</div>

// </div>