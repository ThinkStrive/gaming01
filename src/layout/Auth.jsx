// src/Components/Authentication/Login.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/reuse/auth/Login";
import img from '../assets/imgs/auth/background.avif'; // Import the image
import Register from "../components/reuse/auth/Register";
import { ForgotPass } from "../components/reuse/auth/ForgotPassword";
import { ResetPass } from "../components/reuse/auth/ResetPassword";
import VerifyMail from "../components/reuse/auth/VerifyMail";
// Styles

const Auth = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    mobile_number: ""
  });

  return (
    <div
  className={`bg-purplegrad bg-no-repeat bg-cover bg-center flex justify-center sm:pt-5 items-center relative`}
  style={{ height: "100vh", width: "100%" }}
>
  <div
    className="bg-transparent bg-purplegrad bg-opacity-90 rounded-lg shadow-lg w-full max-w-6xl px-6"
  >
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
      <Route path="/verifyEmail" element={<VerifyMail />} />
      <Route path="/forgotPassword" element={<ForgotPass />} />
      <Route path="/resetPassword" element={<ResetPass />} />
    </Routes>
  </div>
</div>

  );
};

export default Auth;
