import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Style/ProjectsNav.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import '../../Style/Lock.css'
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
function ProjectsNav({ popUp, setPopUp, setNavHeaderName }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Help dropdown 1
  const [isOpen1, setIsOpen1] = useState(false); 
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);


  const [isOpenA, setIsOpenA] = useState(false); // Help dropdown 2
  const [isOpenB1, setIsOpenB1] = useState(false); 
  const [isOpenC2, setIsOpenC2] = useState(false);
  const [isOpenD3, setIsOpenD3] = useState(false);
  const [isOpenE4, setIsOpenE4] = useState(false);
  const [isOpenF5, setIsOpenF5] = useState(false);
  const [isOpenG6, setIsOpenG6] = useState(false);
  const [isOpenH7, setIsOpenH7] = useState(false);
  const [isOpenI8, setIsOpenI8] = useState(false);



const [isOpen1A, setIsOpen1A] = useState(false); // Help dropdown 3
const [isOpen2B, setIsOpen2B] = useState(false); 
const [isOpen3C, setIsOpen3C] = useState(false);
const [isOpen4D, setIsOpen4D] = useState(false);
const [isOpen5E, setIsOpen5E] = useState(false);
const [isOpen6F, setIsOpen6F] = useState(false);
const [isOpen7G, setIsOpen7G] = useState(false);



  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  
const [userData, setUserData] = useState({
  userName: "",
  userEmail: "",
  subscriptionDate: "",
  isPaid: { paid: false, paidType: "none" },
});
useEffect(() => {
  // Retrieve and parse user data from session storage
  const storedData = sessionStorage.getItem("userData");
  if (storedData) {
    setUserData(JSON.parse(storedData));
  }
}, []);


  const handleClickProjectSelect = (name) => {
    setPopUp(false);  // Close sidebar on project selection
    setNavHeaderName(name);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);  // Open modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false);  // Close modal
  };

  const handleModalOpen1 = () => {
    setIsModalOpen1(true);  // Open modal
  };

  const handleModalClose1 = () => {
    setIsModalOpen1(false);  // Close modal
  };
  const handleModalOpen2 = () => {
    setIsModalOpen2(true);  // Open modal
  };

  const handleModalClose2 = () => {
    setIsModalOpen2(false);  // Close modal
  };
  

  return (
    <>
      {/* Side Navbar */}
      <div
        className="absolute w-full h-full z-50"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
          display: popUp ? "block" : "none",
        }}
        onClick={() => setPopUp(false)}  // Close sidebar when clicking outside
      >
        <div className="bg-purplegrad flex flex-col w-[19rem] text-white h-screen p-4 pt-20 sticky top-0 side--nav">
          <div className="flex flex-col h-[85%]">
            <Link
              to="/project1/blackRed"
              className={
                location.pathname === "/project1/blackRed"
                  ? "w-full bg-white text-black p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                  : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
              }
              onClick={() => handleClickProjectSelect("project1")}
            >
              Data-Driven Roulette Tracker
            </Link>
            <Link
              to="/project4"
              className={
                location.pathname === "/project4"
                  ? "w-full bg-white p-2 text-black font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                  : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
              }
              onClick={() => handleClickProjectSelect("project3")}
            >
              SpinCycle Strategy
            </Link>
            <Link
              to="/feedback"  
              className={
                location.pathname === "/feedback"
                  ? "w-full bg-white text-black p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                  : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
              }
            >
              Feedback 
            </Link>

            <Link
              to="/profitplan"  
              className={
                location.pathname === "/profitplan"
                  ? "w-full bg-white text-black p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                  : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
              }
            >
             Daily Profit Plan 
            </Link>

            {/* Help Dropdown */}
            <div className="relative items-start flex flex-col w-full bg-transparant p-2 font-semibold rounded-lg pl-6 my-0.5">
              <button
                className="flex w-full items-center justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                Help
                {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1">
                  <li onClick={handleModalOpen} className="list-none flex  flex-col w-full bg-white text-black p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5">
                    <button >Data-Driven</button>
                  </li>
                  <li onClick={handleModalOpen1} className="list-none flex flex-col w-full bg-white text-black p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5">
                    <button >QuadroBet Tracker</button>
                  </li>
                  <li onClick={handleModalOpen2} className="list-none flex flex-col w-full bg-white text-black p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5">
                    <button >SpinCycle Strategy</button>
                  </li>
                </div>
              )}
            </div>
          </div>




          <Link to="/userinfo" className="bg-purplegrad2 py-2 px-4 mb-4 rounded-xl justify-between flex border-2 border-white cursor-pointer group" >
            <div className="flex">
              <IoPersonCircleOutline size={50} className="rounded-full text-white" />
              <div className="ms-2">
                <h3 className="pb-1 text-xl overflow-hidden text-white text-ellipsis whitespace-normal">
                  {userData.userName}
                </h3>
                <h5 className="text-xs overflow-hidden text-white text-ellipsis whitespace-normal">
                  {userData.userEmail}
                </h5>
              </div>
            </div>
            <RiArrowRightSLine
              size={35}
              className="text-white mt-2 transition-transform duration-300 transform group-hover:translate-x-1"
            />
          </Link>





          <div className="flex justify-evenly items-center text-white h-[30px] mb-3" >
            <Link
              to="mailto:rouletterise@gmail.com"
              target="_blank"
              className="flex cursor-pointer font-semibold justify-start items-center mx-2"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
            </Link>
            <Link
              to="https://t.me/rouletterisee"
              target="_blank"
              className="flex cursor-pointer font-semibold justify-start items-center mx-2"
            >
               <i className="fa-brands fa-telegram text-xl"></i>
            </Link>
            <Link
              to="https://www.instagram.com/rouletterise?igsh=djI3a3dqYzVkb242"
              target="_blank"
              className="flex cursor-pointer font-semibold justify-start items-center mx-2"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </Link>
          </div>
          <div>
          <Link
              to="/auth/login"
              onClick={() => sessionStorage.removeItem("userData")}
              className="flex cursor-pointer text-white font-semibold justify-start items-center"
            >
              <i className="fa-solid fa-right-from-bracket mx-6"></i>
              Log Out
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Component 1 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20" style={{paddingTop:"150px"}}>
          <div className="bg-white p-3 rounded shadow-md  info-con-lock1" style={{width:"400px",height:"400px",overflow:"scroll"}}>
          <button
              className="mt-2 bg-customRed  text-white  p-1 mb-2 px-4 rounded"
              onClick={handleModalClose}
            >
              Close
            </button>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 Step 1: Inputting and Tracking Data
                {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>The Data-Driven Roulette Tracker begins by collecting critical data from the game. Here’s how to set it up:
                  <br />
                  - Track Every Spin: As the roulette game progresses, input the numbers that have landed on the wheel. You can either manually enter them or upload them if you’re using a live table.
                  <br />
                  - The tracker then processes the data, calculating statistics that will guide your betting decisions.
                  <br />
                  This feature allows you to collect, analyze, and track the numbers to identify patterns, trends, and hot zones in real-time.
                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen1((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                  Step 2: Using the Count and Last Hit Columns
                {!isOpen1 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen1 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  The Data-Driven Roulette Tracker is divided into multiple sections: Numbers, Streets, Double Streets, Wheel Sections, and QuadroBet. Each section displays two important metrics:
                    <br />
                    1. Count Column: Shows how many times each number or group has appeared.
                      - The new color-coding logic is as follows:
                        - Light Blue: Considered Cold (appeared the least)
                        - Medium Blue: Considered Stable (appearing at a balanced rate)
                        - Dark Blue: Considered Hot (appeared the most)
                      <br />
                    2. Last Hit Column: Displays how many spins have passed since that number or group last hit.
                      - The updated color logic for this is:
                        - Light Green: Considered Hot (recently hit)
                        - Yellow: Considered Stable (average interval between hits)
                        - Red: Considered Cold (hasn’t hit in a while)
                        <br />
                    These columns provide a quick overview of what’s hot, cold, or stable, helping you choose where to focus your bets.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen2((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                  Step 3: Analyzing Hot, Cold, and Stable Zones
                {!isOpen2 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen2 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  Based on the data you’ve entered, the tracker analyzes each section (Numbers, Streets, etc.) and categorizes them into Hot, Cold, or Stable zones.
                    <br />
                - Hot (Dark Blue/Light Green): These numbers or sections have appeared recently and frequently. These are good opportunities for betting.
                <br />
                - Cold (Light Blue/Red): These numbers or sections haven’t hit in a while and are less predictable, but betting on them could offer bigger payouts.
                <br />
                - Stable (Medium Blue/Yellow): These numbers or sections are appearing at a normal, balanced rate. They’re neither too frequent nor too rare, making them safer but less exciting bets.
                <br />
                This analysis gives you a dynamic and real-time snapshot of the table’s trends and helps guide your betting decisions.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen3((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                Step 4: Customizing Your Betting Strategy

                {!isOpen3 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen3 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  With the Data-Driven Roulette Tracker, you can tailor your strategy by focusing on specific sections of the game:
                    <br />
                - Numbers: Direct number tracking to find the hottest individual numbers.
                <br />
                - Streets & Double Streets: Track trends on the grouped sections of three and six numbers to spot potential streaks.
                <br />
                - Wheel Sections: Focus on sections of the roulette wheel to see if certain areas are trending hot, cold, or stable.
                <br />
                - QuadroBet: Leverage the pre-defined groups to see if any of the QuadroBet categories are repeating.
                <br />
                These customizations help you zero in on your preferred betting style and focus on where the trends are most favorable.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen4((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Step 5: Auto-Signal and Alerts

                {!isOpen4 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen4 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  To make betting decisions even easier, the Auto-Signal feature is available across all sections of the tracker. Here’s how it works:
                    <br />
                  - Auto-Signal for Numbers: When certain numbers become hot (Dark Blue/Light Green), an alert will trigger, highlighting where to bet.
                  <br />
                  - Auto-Signal for Dozens and Columns: Based on the patterns in the data, recommended dozens or columns will be automatically highlighted, guiding your next bet.
                  <br />
                  These signals save you time and reduce guesswork, allowing you to make informed decisions based on real data.

                  </p>
                </div>
              )}
           </div>
            <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen5((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 Step 6: Adjusting Based on Trends
                {!isOpen5 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen5 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  
                Once you’ve analyzed the hot, cold, and stable trends, it’s time to adjust your betting approach:
                  <br />
                - Hot Zones (Dark Blue/Light Green): If a number or section is hot, you can bet more confidently on these, knowing they’re hitting frequently.
                <br />
                - Cold Zones (Light Blue/Red): Cold sections can offer a high-risk, high-reward strategy by betting on numbers or sections that haven’t appeared in a while.
                <br />
                - Stable Zones (Medium Blue/Yellow): These are ideal for more conservative bets, where the patterns suggest a balanced chance of landing.
                <br />
                You can toggle between these strategies as the game progresses, giving you flexibility in your approach.

                  </p>
                </div>
              )}
           </div>


           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen5((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 Step 6: Adjusting Based on Trends
                {!isOpen5 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen5 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  
                Once you’ve analyzed the hot, cold, and stable trends, it’s time to adjust your betting approach:
                  <br />
                - Hot Zones (Dark Blue/Light Green): If a number or section is hot, you can bet more confidently on these, knowing they’re hitting frequently.
                <br />
                - Cold Zones (Light Blue/Red): Cold sections can offer a high-risk, high-reward strategy by betting on numbers or sections that haven’t appeared in a while.
                <br />
                - Stable Zones (Medium Blue/Yellow): These are ideal for more conservative bets, where the patterns suggest a balanced chance of landing.
                <br />
                You can toggle between these strategies as the game progresses, giving you flexibility in your approach.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen6((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                  Step 7: Setting Limits and Playing Responsibly

                {!isOpen6 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen6 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  
                  To ensure responsible gaming, always stick to your bankroll limits. A good rule of thumb is to bet no more than 1-2% of your total bankroll on any given spin. This will keep your risk low while allowing you to take advantage of the insights provided by the tracker.
                  <br />
                  Additionally, take breaks when needed. The Data-Driven Tracker’s insights will always be there when you’re ready to return.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen7((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Step 8: Additional Features Coming Soon

                {!isOpen7 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen7 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  
                  We’re constantly improving the Data-Driven Roulette Tracker, and there are exciting features on the way!
                  <br />
                - Detailed History Review: Look back at your past games, track trends over multiple sessions, and refine your strategy even further.
                <br />
                - Enhanced Alerts: Get more specific betting signals based on deeper trend analysis.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen8((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Closing Thoughts

                {!isOpen6 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen8 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  The Data-Driven Roulette Tracker is designed to make your roulette gameplay smarter, more informed, and, ultimately, more successful. By tracking and analyzing every spin, you can unlock hidden trends and take advantage of real-time signals.
                    <br />
                    Remember, the key to success is following the data. So, start tracking, stay disciplined, and may the spins be in your favor!

                  </p>
                </div>
              )}
           </div>

          </div>
        </div>
      )}


      {/* Model component 2 */}
      {isModalOpen1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20" style={{paddingTop:"150px"}}>
          <div className="bg-white p-3 rounded shadow-md  info-con-lock1" style={{width:"400px",height:"400px",overflow:"scroll"}}>
          <button
              className="mt-2 bg-customRed text-white  p-1 mb-2 px-4 rounded"
              onClick={handleModalClose1}
            >
              Close
            </button>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenA((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 Step 1: Categorizing Numbers into Groups
                {!isOpenA ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenA && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  To get started, the first thing you need to do is categorize the roulette numbers into eight distinct groups. This will form the core of your QuadroBet strategy:
                  <br />
                1. Low Even Red (LER): 12, 14, 16, 18  <br />
                2. Low Odd Red (LOR): 1, 3, 5, 7, 9  <br />
                3. High Even Red (HER): 30, 32, 34, 36  <br />
                4. High Odd Red (HOR): 19, 21, 23, 25, 27  <br />
                5. Low Even Black (LEB): 2, 4, 6, 8, 10  <br />
                6. Low Odd Black (LOB): 11, 13, 15, 17  <br />
                7. High Even Black (HEB): 20, 22, 24, 26, 28  <br />
                8. High Odd Black (HOB): 29, 31, 33, 35<br />

                These are the groups you'll be focusing on throughout the game.


                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenB1((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                   Step 2: Observing the Last Four Numbers
                {!isOpenB1 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenB1 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  Before placing any bets, observe the last four numbers that landed on the roulette table. You’ll assign these numbers to the corresponding groups from Step 1.
                    <br /><br />
                - It’s important that each of the four numbers belongs to a different group.  <br />
                - Once you have your four groups, you’re ready to move on to the next step.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenC2((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                   Step 3: Waiting for the Repeater
                {!isOpenC2 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenC2 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  Now, wait for one of the four groups to produce a repeater. A repeater is when a number lands again within the same group.
                    <br />
                  - For example: If 12 and 14 from the Low Even Red (LER) group land, that group is now a repeater.
                    <br />
                  This is the key trigger for starting your bets.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenD3((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Step 4: Placing Your Bets on the Repeater

                {!isOpenD3 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenD3 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  When a repeater occurs, it’s time to start betting. Here’s how you’ll approach it:
                    <br />
                  1. First Repeater: Bet 1 unit per number in the repeater group.<br />
                  2. Second Repeater: If a number from another group repeats, bet 2 units per number in both the first and second repeater groups.<br />
                  3. Third Repeater: If a third group shows a repeater, bet 3 units per number in all three repeater groups.<br />
                  <br />
                  This structured betting helps you build your chances of winning as more repeaters appear.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenE4((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Step 5: Winning and Resetting

                {!isOpenE4 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenE4 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  The beauty of the QuadroBet strategy is in its methodical approach to risk and reward:
                  <br />
                  - Winning: If you win by hitting a number within one of your betting groups, you immediately reset the game. This means starting over by waiting for a new set of four numbers and a repeater to emerge.
                  <br />
                  - Losing: If you lose after betting on repeaters, keep following the strategy:<br />
                    - Add new repeaters as they appear and continue increasing your units as described.<br />
                    - Final Chance: If you lose before a fourth repeater appears, it’s your last chance to win before resetting the game and starting fresh.

                  </p>
                </div>
              )}
           </div>
            <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenF5((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 Step 6: Managing Your Bankroll
                {!isOpenF5 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenF5 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  For optimal gameplay, it’s important to manage your bets carefully. We recommend keeping your bets to 1-2% of your total bankroll to maintain a controlled betting experience.
                  <br />
                  For example, if you have a bankroll of €100, your bet per number should be around €0.10-€0.20, depending on how many numbers you’re covering within the groups.



                  </p>
                </div>
              )}
           </div>


           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenG6((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                  Step 7: Advanced Features in the Data-Driven Roulette Tracker
                {!isOpenG6 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenG6 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  The QuadroBet feature is fully integrated into the Data-Driven Roulette Tracker, providing additional tools to improve your strategy:
                    <br />
                  - Auto Signal Alerts: The tracker highlights repeater groups automatically, helping you identify betting opportunities in real-time. <br />
                  - Statistics Dashboard: Easily track past results, group performance, and how many times repeaters have occurred. <br />
                  - Customizable Bets: Adjust your bet sizes and manage units directly within the app.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenH7((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Step 8: Stay Disciplined and Play Responsibly

                {!isOpenH7 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenH7 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  
                  Remember, the QuadroBet strategy is all about methodical betting and observing patterns. Stick to the strategy, follow your signals, and play responsibly.
                  <br />
                  - Never chase losses and always stick to your predefined bankroll limits to ensure a healthy gaming experience.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenI8((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Coming Soon: New Features!

                {!isOpenI8 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenI8 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  

                  Exciting new features for QuadroBet are on the way, including real-time alerts and more customizable betting options to help you stay ahead of the game!

                  </p>
                </div>
              )}
           </div>
          </div>
        </div>
      )}

{/* Model Spin Wheel -3 ---------------------------------------------*/}


      {isModalOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20" style={{paddingTop:"150px"}}>
          <div className="bg-white p-3 rounded shadow-md  info-con-lock1" style={{width:"400px",height:"400px",overflow:"scroll"}}>
          <button
              className="mt-2 bg-customRed  text-white  p-1 mb-2 px-4 rounded"
              onClick={handleModalClose2}
            >
              Close
            </button>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen1A((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 Step 1: Choosing the Right Table
                {!isOpen1A ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen1A && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  To start, it's crucial to choose the right table. You'll need to enter the last 30 landed numbers from the table into the app. Once you've entered this data, click on the "Statistics" icon. This will give you a breakdown of whether the numbers, dozens, and columns are in Hot, Stable, or Cold categories. 
                  <br />
                  - Hot means it's a good table for betting. <br />
                  - Stable means it's a decent choice, but be cautious. <br />
                  - Cold means the table is too unpredictable and should be avoided.


                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen2B((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                                  
                Step 2: Managing Signals

                {!isOpen2B ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen2B && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                    
                    You can customize your gameplay by turning on or off the signals for numbers, dozens, and columns. Simply press these to toggle them to Hot, so you can avoid signals for Cold sections. This gives you more control over where to focus your betting.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen3C((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                   Step 3: Betting Strategy with SpinCycle
                {!isOpen3C ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen3C && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                    
                    - Direct number betting covers 12-13 numbers based on multiple logical triggers. <br />
                    - Dozen betting provides a recommendation for any one dozen based on the data you enter. <br />
                    - Column betting provides a recommendation for any one column. <br />

                    Once a signal triggers, either a dozen or column will light up in green, showing you where to bet.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen4D((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Step 4: Responsible Bankroll Management

                {!isOpen4D ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen4D && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  For a safer gaming experience, we recommend that you bet 1% of your total bankroll. For example, if you have a €100 balance and wish to play with dozens, your bet should be €1. This keeps your risk low while you follow the strategy.

                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen5E((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Step 5: Betting Progression

                {!isOpen5E ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen5E && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  As this is the beta version of SpinCycle, the current betting progression is simple: whenever you get a signal, you have 3 chances to hit the number or section with the following unit progression:
                 <br /> - 1st bet: 1 unit <br />
                  - 2nd bet: 1 unit <br />
                  - 3rd bet: 2 units <br /> <br />

                  There’s no martingale or aggressive doubling strategy here—just a steady approach to increase your odds of hitting a win.

                  </p>
                </div>
              )}
           </div>
            <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen6F((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                Beta Version Features
                {!isOpen6F ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen6F && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  Currently, this is a beta version of the application and is supported only for the European Wheel. In the near future, Single Street and Double Street signals will be added, and we’ll also introduce support for the American table version.
                    <br />
                    Additionally, the app is fully mobile-friendly! You can use SpinCycle on iPhone, iPad, Android, or any laptop computer.

                  </p>
                </div>
              )}
           </div>


           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpen7G((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                  Responsible Gaming
                {!isOpen7G ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpen7G && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  Remember to always play responsibly. Stick to your bankroll limits, follow your signals, and enjoy the game with a clear mind.
                  </p>
                </div>
              )}
           </div>
           <div className="mb-2">
           <button
                className="flex w-full items-center text-white px-3 py-2 rounded bg-darkNavy justify-between"
                onClick={(e) => {
                  e.stopPropagation();  // Prevent sidebar closing
                  setIsOpenI8((prev) => !prev);  // Toggle Help dropdown
                }}
              >
                 
                 Coming Soon: New Features!

                {!isOpenI8 ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
              </button>

              {isOpenI8 && (
                <div className="w-full p-2 font-semibold rounded-lg pl-6 my-0.5 mt-1 text-black" >
                  <p>
                  

                  Exciting new features for QuadroBet are on the way, including real-time alerts and more customizable betting options to help you stay ahead of the game!

                  </p>
                </div>
              )}
           </div>
          </div>
        </div>
      )}


    </>
  );
}

export default ProjectsNav;
