// src/Components/Authentication/Login.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/reuse/auth/Login";
import img from '../assets/imgs/auth/background.avif'; // Import the image
import Register from "../components/reuse/auth/Register";

// Styles

const Auth = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    mobile_number: "",
    profile: "",
  });

  return (
    <div
      className={`h-screen w-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative`}
      style={{ backgroundImage: `url(${img})` }} // Set the background image
    >
      <div className="bg-transparent bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md">
        <Routes>
          <Route
            path="/login"
            element={
              <Login inputData={inputData} setInputData={setInputData} />
            }
          />
          <Route
            path="/register"
            element={
              <Register inputData={inputData} setInputData={setInputData} />
            }
          />
          {/* <Route path="/forgotPassword" element={<ForgotPass />} />
          <Route path="/resetPassword" element={<ResetPass />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
