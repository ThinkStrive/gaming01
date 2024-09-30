import React, { useEffect, useState } from "react";
import Main from "../components/main/Main";
import Nav from "../components/nav/nav";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("Theme"));
    return savedTheme ? savedTheme.theme : "light";
  });
  return (
    <div className={theme === "dark" ? "bg-slate-900" : "bg-slate-200"}>
      <Nav theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
    </div>
  );
};

export default Home;
