import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Project1 from "../components/main/Project1";
// import Project2 from "../components/main/Project2";
import Project3 from "../components/main/Project3";
import Project4 from "../components/main/Project4";
import Nav from "../components/nav/nav";
import "../Style/ProjectsNav.css";
import ProjectsNav from "../components/nav/ProjectsNav";
import { Feedback } from "../components/main/Feedback";
import { Userinfo } from "../components/main/Userinfo";
import Planprofit from "../components/main/ProfitPlan";
// import Lobby from "../components/main/Lobby";
import PromoModal from "../components/resources/ThinkStrivePromo";

function Home() {
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("Theme"));
    return savedTheme ? savedTheme.theme : "dark";
  });

  const [navHeaderName, setNavHeaderName] = useState("");

  useEffect(() => {
    navigate("/project1/blackRed");
  }, []);

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    if (
      [
        "project1",
        "project2",
        "project3",
        "project4",
        "userinfo",
        "feedback",
        "profitplan",
        "lobby",
      ].includes(path)
    ) {
      setNavHeaderName(path);
    } else {
      setNavHeaderName("");
    }
  }, [location]);

  useEffect(() => {
    const promoShown = localStorage.getItem("promoModalShown");
    if (!promoShown) {
      setShowPromoModal(true);
    }
    navigate("/project1/blackRed");
  }, []);

  const closePromoModal = () => {
    setShowPromoModal(false);
    localStorage.setItem("promoModalShown", "true");
  };

  const elementToCaptureRef = useRef(null);

  const captureScreenshot = async () => {
    const canvas = await html2canvas(elementToCaptureRef.current);
    canvas.toBlob((blob) => {
      saveAs(blob, "screenshot.png");
    });

    if (navigator.share) {
      canvas.toBlob((blob) => {
        const file = new File([blob], "screenshot.png", { type: "image/png" });
        navigator
          .share({
            files: [file],
            title: "Check this Out!",
            text: "My Roulette Strategy analyzer!",
          })
          .then(() => console.log("Successfully shared"))
          .catch((error) => console.log("Sharing failed", error));
      });
    } else {
      console.log("Can't share in this  browser.");
    }
  };

  return (
    <div ref={elementToCaptureRef} className="bg-purplegrad relative">
      <PromoModal isOpen={showPromoModal} onClose={closePromoModal} />

      <ProjectsNav
        setPopUp={setPopUp}
        popUp={popUp}
        setNavHeaderName={setNavHeaderName}
      />

      <Nav
        theme={theme}
        setTheme={setTheme}
        navigate={setPopUp}
        navHeaderName={navHeaderName}
      />

      <div className="h-[90vh] md:h-[88vh] lg:h-[85vh] overflow-y-scroll">
        <Routes>
          <Route
            path="project1/*"
            element={<Project1 theme={theme} setTheme={setTheme} />}
          />
          {/* <Route
            path="project2/*"
            element={
              <Project2
                theme={theme}
                setTheme={setTheme}
                captureScreenshot={captureScreenshot}
              />
            }
          /> */}
          <Route
            path="/userinfo"
            element={<Userinfo />}
            theme={theme}
            setTheme={setTheme}
          />
          <Route
            path="/feedback"
            element={<Feedback theme={theme} setTheme={setTheme} />}
          />
          <Route path="/profitplan" element={<Planprofit />} />
          <Route
            path="project3/*"
            element={<Project3 theme={theme} setTheme={setTheme} />}
          />
          <Route
            path="project4/*"
            element={<Project4 theme={theme} setTheme={setTheme} />}
          />
          {/* <Route path="/lobby"
            element = {<Lobby/>}
          /> */}
        </Routes>
      </div>
    </div>
  );
}

export default Home;
