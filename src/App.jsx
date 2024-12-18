import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Toast from "./components/resources/Toast";
import Auth from "./layout/Auth";
import ProtectedPage from "./ProtectedPage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Toast >
          <Routes>
            <Route path="/auth/*" element={<Auth />} />
            {/* <Route path="/*" element={<Home />} /> */}
            <Route path="/*" element={<ProtectedPage element={<Home />} />} />
          </Routes>
        </Toast>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </BrowserRouter>
    </>
  );
}

export default App;
