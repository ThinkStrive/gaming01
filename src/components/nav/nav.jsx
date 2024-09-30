import { useState, useEffect } from "react";
import logo from "../../assets/imgs/RouletteRise Transperent Logo.png";
import "../../Style/NavToggle.css";

const Nav = ({ theme, setTheme }) => {
  const handleTheme = (theme) => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem(
      "Theme",
      JSON.stringify({ theme: theme === "dark" ? "light" : "dark" }),
    );
  };

  return (
    <div
      className="flex items-center justify-between px-10 py-2 max-sm:px-3 bg-darkNavy"
      // style={{ backgroundColor: "rgb(81,29,91)" }}
    >
      <img
        src={logo}
        alt="RouletteRise Logo"
        className="h-14 w-14 lg:h-20 lg:w-20 object-contain max-sm:h-16 max-sm:w-16 max-md:h-20 max-md:w-20"
      />
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-white text-2xl lg:text-3xl font-bold text-center max-sm:text-2xl">
          {/* RouletteRise */}
        </h1>
        <p className="text-white text-base font-semibold lg:text-xl tracking-wide uppercase text-center max-sm:text-xs">
          Data Driven Roulette Tracker
        </p>
      </div>

      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onInput={() => handleTheme(theme)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Nav;
