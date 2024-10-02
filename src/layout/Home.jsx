import React, { useEffect, useState } from "react";
import Main from "../components/main/Main";
import Nav from "../components/nav/nav";
import Project1 from "../components/main/Project1";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Project4 from "../components/main/Project4";
import Project3 from "../components/main/Project3";
import Project2 from "../components/main/Project2";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("Theme"));
    return savedTheme ? savedTheme.theme : "light";
  });
  const navigate = useNavigate()
  useEffect(() =>{
    navigate('/project1/blackRed')
    // navigate('/project4')
  },[])
  return (
    <div className={theme === "dark" ? "bg-slate-900" : "bg-off_white"} >
      <Link to='/project1/blackRed' >1</Link>
      <Link to='/project4' >4</Link>
      <Routes>
        <Route path='project1/*' element={<Project1 theme={theme} setTheme={setTheme} />} />
        <Route path='project2/*' element={<Project2 theme={theme} setTheme={setTheme} />} />
        <Route path='project3/*' element={<Project3 theme={theme} setTheme={setTheme} />} />
        <Route path='project4/*' element={<Project4 theme={theme} setTheme={setTheme} />} />
      </Routes>
    </div>
  );
};

export default Home;
