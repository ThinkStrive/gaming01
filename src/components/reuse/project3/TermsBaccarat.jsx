import React, { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const HitRunStrategy = ({ setIsOpen }) => {
  const [openSection, setOpenSection] = useState(null);

  const strategies = [
    {
      emoji: "1️⃣",
      title: "Bankroll Management",
      content: "Divide your bankroll by 100 for optimal bet size, or choose a comfortable amount that fits your style."
    },
    {
      emoji: "2️⃣",
      title: "Table Setup",
      content: "Before playing, input all previous results from the table into the application (do not include ties)."
    },
    {
      emoji: "3️⃣",
      title: "Analyze Table Situation",
      content: "Cold Table: If the table is cold, do not play.\nStable Table: Wait patiently for the table to become hot.\nHot Table: Place your bets confidently."
    },
    {
      emoji: "4️⃣",
      title: "Hit and Run Policy",
      content: "Step 1: Enter all results accurately into the app.\nStep 2: Assess the table's status using the app signals.\nStep 3: Play the recommended bets when the table is hot.\nStep 4: Win or lose, stop after:\n3 Wins OR\n3 Losses\nStep 5: Switch to a new table and repeat the process."
    },
    {
      emoji: "5️⃣",
      title: "Stay Disciplined",
      content: "Stick to the plan. Avoid chasing losses or deviating from the strategy.\nRemember, consistency and control lead to long-term success."
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white text-black rounded-lg shadow">
      <div className="relative">
        <h2 className="text-xl font-bold mb-4 pr-8">Hit and Run Strategy</h2>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-0 top-0 p-2 bg-slate-300 hover:bg-gray-100 rounded-full "
          style={{cursor:"pointer"}}
        >
          <MdOutlineClose size={20} className='font-bold'/>
        </button>
      </div>
      <div className=" space-y-2">
        {strategies.map((strategy, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-200 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setOpenSection(openSection === index ? null : index)}
            >
              <span className="flex items-center space-x-2">
                <span>{strategy.emoji}</span>
                <span className="font-medium">{strategy.title}</span>
              </span>
              <FaChevronCircleDown
                className={`transform transition-transform ${
                  openSection === index ? 'rotate-180' : ''
                }`}
                size={20}
              />
            </button>
            {openSection === index && (
              <div className="px-4 py-3 whitespace-pre-line w-full">
                {strategy.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 Important: This strategy ensures effective bankroll usage and helps you stay ahead by keeping emotions in check. Follow these steps for maximum success with the app!
        </p>
      </div>
    </div>
  );
};

export default HitRunStrategy;
