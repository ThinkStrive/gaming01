import React, { useEffect, useState } from "react";
import Main from "../components/main/Main";
import Nav from "../components/nav/nav";
import Project1 from "../components/main/Project1";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Project4 from "../components/main/Project4";
import Project3 from "../components/main/Project3";
import Project2 from "../components/main/Project2";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("Theme"));
    return savedTheme ? savedTheme.theme : "light";
  });
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("ithu location da: ", location.pathname);

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
        className="absolute w-full h-full bg-slate-500 z-50"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
          display: popUp ? "block" : "none",
        }}
      >
        <div className="bg-gray-600 flex flex-col w-[15rem] h-screen p-4 pt-20 sticky top-0">
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
};

export default Home;
