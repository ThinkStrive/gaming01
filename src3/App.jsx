import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Toast from "./components/resources/Toast";
import Auth from "./layout/Auth";
import ProtectedPage from "./ProtectedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toast>
          <Routes>
            <Route path="/auth/*" element={<Auth />} />
            {/* <Route path="/*" element={<Home />} /> */}
            <Route path="/*" element={<ProtectedPage element={<Home />} />} />
          </Routes>
        </Toast>
      </BrowserRouter>
    </>
  );
}

export default App;
