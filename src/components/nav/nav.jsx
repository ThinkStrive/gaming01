import { useState, useEffect } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import logo from "../../assets/imgs/RouletteRise Transperent Logo.png";
import "../../Style/NavToggle.css";
// import { LuBell, LuBellOff, LuBellRing } from "react-icons/lu";
// import { FaBell } from "react-icons/fa6";
// import  NotificationBell from "../reuse/SystemNotification/NotificationBell"

const Nav = ({ theme, setTheme, navigate, navHeaderName }) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const handleTheme = (theme) => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem(
      "Theme",
      JSON.stringify({ theme: theme === "dark" ? "light" : "dark" }),
    );
  };

  return (
    <div
      className="flex items-center justify-between px-10 py-2 max-sm:px-3 sticky top-0 z-40 h-[10vh] md:h-[12vh] lg:h-[15vh]"
    // style={{ backgroundColor: "rgb(81,29,91)" }}
    style={{boxShadow:"1px 1px 16px #2d2e32"}}
    >
      <div className="mr-4 cursor-pointer" onClick={() => navigate(true)}>
        <TiThMenuOutline size={30} color="white" />
      </div>

      <img
        src={logo}
        alt="RouletteRise Logo"
        className="h-14 w-14 lg:h-20 lg:w-20 object-contain max-sm:h-16 max-sm:w-16 max-md:h-20 max-md:w-20"
      />
      <div className="flex-1 flex flex-col items-center">
      <h1 className="text-white text-2xl lg:text-4xl font-bold text-center max-sm:text-2xl">
        {navHeaderName === 'project1' 
          ? 'Data-Driven' 
          : navHeaderName === 'project2' 
          ? 'Roulette' 
          : navHeaderName === 'project3' 
          ? ' Baccarat' 
          : navHeaderName === 'project4' 
          ? 'SpinCycle Strategy' 
          : navHeaderName === 'userinfo' 
          ? 'User Information' 
          : navHeaderName === 'feedback' 
          ? 'Feedback' 
          : 'Daily Profit Plan '}
      </h1>

       <div className="flex">
        <h1 className="text-purple-400 text-base font-bold lg:text-2xl md:text-2xl uppercase text-center max-sm:text-xl">
          {navHeaderName === 'project3'?'Beyonce':''}
        </h1> &nbsp; &nbsp;
        <div className="text-white text-base font-semibold lg:text-md tracking-wide uppercase text-center max-sm:text-sm">
         <p className="pt-1.5">
         {navHeaderName === 'project1' ? 'Roulette Tracker' : navHeaderName === 'project2' ? 'Strategy Analyzer' : navHeaderName === 'project3' ? 'Hit & Run Strategy':''}
         </p>
        </div>
       </div>
        
      </div>

      {/* <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onInput={() => handleTheme(theme)}
          />
          <span className="slider"></span>
        </label>
      </div> */}

      {/* <div className="relative">
        <button onClick={toggleSideNav} className="p-3 bg-white rounded-2xl border">
          <FaBell className="text-xl" />
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-purplegrad shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <button onClick={toggleSideNav} className="text-2xl">&times;</button>
          </div>
          <div className="p-4">
            <p>No new notifications</p>
          </div>
        </div>
      </div> */}

      {/* <NotificationBell/> */}

    </div>
  );
};

export default Nav;
