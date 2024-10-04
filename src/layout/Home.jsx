import React, { useEffect, useState } from "react";
// import Main from "../components/main/Main";
// import Nav from "../components/nav/nav";
// import Project1 from "../components/main/Project1";
// import {
//   Link,
//   Route,
//   Routes,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
// import Project4 from "../components/main/Project4";
// import Project3 from "../components/main/Project3";
// import Project2 from "../components/main/Project2";
import ProjectsNav from "../components/nav/ProjectsNav";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("Theme"));
    return savedTheme ? savedTheme.theme : "light";
  });
  // const [popUp, setPopUp] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();

  console.log("ithu location da: ", location.pathname);

  // useEffect(() => {
  //   navigate("/project1/blackRed");
  //   // navigate('/project4')
  // }, []);
  return (
    <div>
      <ProjectsNav theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Home;
