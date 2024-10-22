import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Style/ProjectsNav.css";

function ProjectsNav({ popUp, setPopUp, setNavHeaderName }) {
  const location = useLocation();

  const handleClickProjectSelect = (name) => {
    setPopUp(false);
    setNavHeaderName(name);
  };

  const handleClickLogOut = () => {
    localStorage.removeItem("userData");
  };

  return (
    <div
      className="absolute w-full h-full z-50"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
        display: popUp ? "block" : "none",
      }}
      onClick={() => setPopUp(false)}
    >
      <div className="bg-slate-900 flex flex-col w-[19rem] h-screen p-4 pt-20 sticky top-0 side--nav">
        <div className="flex flex-col h-[90%]">
          <Link
            to="/project1/blackRed"
            className={
              location.pathname == "/project1/blackRed"
                ? "w-full bg-darkNavy p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
            }
            onClick={() => handleClickProjectSelect("project1")}
          >
            Data Driven Roulette Tracker
          </Link>
          {/* <Link
            to="/project2"
            className={
              location.pathname == "/project2"
                ? "w-full bg-darkNavy p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
            }
            onClick={() => handleClickProjectSelect("project2")}
          >
            Roulette Strategy Analyzer
          </Link> */}
          <Link
            to="/project4"
            className={
              location.pathname == "/project4"
                ? "w-full bg-darkNavy p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
            }
            onClick={() => handleClickProjectSelect("project3")}
          >
            Spincycle
          </Link>
        </div>

        <div>
          <Link
            to="/auth/login"
            onClick={handleClickLogOut}
            className="flex cursor-pointer font-semibold justify-start items-center"
          >
            <i className="fa-solid fa-right-from-bracket mx-6"></i>
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsNav;
