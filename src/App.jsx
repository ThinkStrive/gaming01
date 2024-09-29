import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Toast from "./components/resources/Toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toast>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </Toast>
      </BrowserRouter>
    </>
  );
}

export default App;
