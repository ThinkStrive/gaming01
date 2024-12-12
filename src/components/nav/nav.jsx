import { useState, useEffect } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import logo from "../../assets/imgs/RouletteRise Transperent Logo.png";
import "../../Style/NavToggle.css";
import { LuBell, LuBellOff, LuBellRing } from "react-icons/lu";

const Nav = ({ theme, setTheme, navigate, navHeaderName }) => {
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
        {/* <h1 className="text-white text-2xl lg:text-4xl font-bold text-center max-sm:text-2xl">
          {navHeaderName === 'project1' ? 'Data-Driven' : navHeaderName === 'project2' ? 'Roulette' : 'SpinCycle Strategy'}
        </h1> */}

<h1 className="text-white text-2xl lg:text-4xl font-bold text-center max-sm:text-2xl">
        {navHeaderName === 'project1' 
          ? 'Data-Driven' 
          : navHeaderName === 'project4' 
          ? 'SpinCycle Strategy' 
          : navHeaderName === 'userinfo' 
          ? 'User Information' 
          : navHeaderName === 'feedback' 
          ? 'Feedback' 
          : 'Daily Profit Plan '}
      </h1>
        <p className="text-white text-base font-semibold lg:text-xl tracking-wide uppercase text-center max-sm:text-sm">
          {navHeaderName === 'project1' ? 'Roulette Tracker' : navHeaderName === 'project2' ? 'Strategy Analyzer' : ''}
        </p>
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


    </div>
  );
};

export default Nav;
