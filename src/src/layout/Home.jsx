import React, { useState, useEffect } from "react";
import {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Project1 from "../components/main/Project1";
import Project2 from "../components/main/Project2";
import Project3 from "../components/main/Project3";
import Project4 from "../components/main/Project4";
import Nav from "../components/nav/nav";
import "../Style/ProjectsNav.css";
import ProjectsNav from "../components/nav/ProjectsNav";

function Home() {
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("Theme"));
    return savedTheme ? savedTheme.theme : "light";
  });

  const [navHeaderName, setNavHeaderName] = useState('project1')

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
      <ProjectsNav setPopUp={setPopUp} popUp={popUp} setNavHeaderName={setNavHeaderName} />

      <Nav theme={theme} setTheme={setTheme} navigate={setPopUp} navHeaderName={navHeaderName} />

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

export default Home;
