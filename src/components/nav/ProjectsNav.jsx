import React, { useState, useEffect } from "react";
import {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Project1 from "../main/Project1";
import Project2 from "../main/Project2";
import Project3 from "../main/Project3";
import Project4 from "../main/Project4";
import Nav from "./nav";
import "../../Style/ProjectsNav.css";

function ProjectsNav({ theme, setTheme }) {
  const [popUp, setPopUp] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate("/project1/blackRed");
    // navigate('/project4')
  }, []);
  return (
    <div
      className={
        theme === "dark" ? "bg-slate-900 relative" : "bg-off_white relative"
      }
    >
      <div
        className="absolute w-full h-full z-50"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
          display: popUp ? "block" : "none",
        }}
        onClick={() => setPopUp(false)}
      >
        <div className="bg-gray-600 flex flex-col w-[15rem] h-screen p-4 pt-20 sticky top-0 side--nav">
          <Link
            to="/project1/blackRed"
            className={
              location.pathname == "/project1/blackRed"
                ? "w-full bg-darkNavy p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
            }
            onClick={() => setPopUp(false)}
          >
            Project 1
          </Link>
          <Link
            to="/project2"
            className={
              location.pathname == "/project2"
                ? "w-full bg-darkNavy p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
            }
            onClick={() => setPopUp(false)}
          >
            Project 2
          </Link>
          <Link
            to="/project4"
            className={
              location.pathname == "/project4"
                ? "w-full bg-darkNavy p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
                : "w-full p-2 font-semibold rounded-lg pl-6 hover:bg-softBlue my-0.5"
            }
            onClick={() => setPopUp(false)}
          >
            Project 4
          </Link>
        </div>
      </div>

      <Nav theme={theme} setTheme={setTheme} navigate={setPopUp} />

      <Routes>
        <Route
          path="project1/*"
          element={<Project1 theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="project2/*"
          element={<Project2 theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="project3/*"
          element={<Project3 theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="project4/*"
          element={<Project4 theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </div>
  );
}

export default ProjectsNav;
