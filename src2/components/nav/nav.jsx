import { useState, useEffect } from "react";
import logo from "../../assets/imgs/RouletteRise Transperent Logo.png";
import "../../Style/NavToggle.css";

const Nav = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("Theme"));
    return savedTheme ? savedTheme.theme : "light";
  });

  const ThemeHandler = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("Theme", JSON.stringify({ theme: newTheme }));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div
      className="flex items-center justify-between p-6"
      style={{ backgroundColor: "rgb(81,29,91)" }}
    >
      <img
        src={logo}
        alt="RouletteRise Logo"
        className="h-24 w-24 lg:h-32 lg:w-32 object-contain max-sm:h-16 max-sm:w-16 max-md:h-20 max-md:w-20"
      />
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-white text-4xl lg:text-6xl font-bold text-center max-sm:text-2xl">
          RouletteRise
        </h1>
        <p className="text-white text-lg lg:text-2xl tracking-wide uppercase text-center max-sm:text-xs">
          Roulette Tracker + Daily Profit Plan
        </p>
      </div>

      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={ThemeHandler}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Nav;
