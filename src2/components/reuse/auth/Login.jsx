// src/Components/Authentication/Login.js
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import axios from "axios";
import { useToast } from "../../resources/Toast";
import logo from "../../../assets/imgs/RouletteRise Transperent Logo.png";
// import { USER_LOGIN } from "../../api/ApiDetails";

const Login = ({ inputData, setInputData }) => {
  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const [isPasswordView, setIsPasswordView] = useState(false);
  const handleAuthLoginInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleCLickViewPassword = () => {
    setIsPasswordView(!isPasswordView);
  };
  const handleAuthLoginButton = async (e) => {
    setLoading(true);
    e.preventDefault();
    let data = {
      userEmail: inputData.email,
      password: inputData.password,
      role: "admin",
    };
    // await axios
    //   .post(USER_LOGIN, data)
    //   .then((res) => {
    //     if (res.data.status) {
    //       setLoading(false);
    //       localStorage.setItem("user", JSON.stringify(res.data.data));
    //       setTheme(res.data.data.configuration.theme);
    //       showToast("Login Successful", "success");
    //       setInputData({
    //         email: "",
    //         password: "",
    //       });
    //     } else {
    //       setLoading(false);
    //       showToast(res.data.data, "error");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //     showToast(err.response.data.data, "error");
    //   });
    if (
      inputData.email === "superadmin@gmail.com" &&
      inputData.password === "password"
    ) {
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(data));
      // setTheme(res.data.data.configuration.theme);
      showToast("Login Successful", "success");
      setInputData({
        email: "",
        password: "",
      });
    } else {
      setLoading(false);
      showToast("Invalid credentials", "error");
    }
  };
  if (
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user"))
  ) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <div
      className="w-full h-screen flex flex-col gap-5 justify-center items-center"
      style={{
        background: "linear-gradient(135deg, #4B006E, #E63946)",
        // backgroundColor: "rgb(81,29,91)",
      }}
    >
      <div className="lg:w-[33vw] md:w-[55vw] w-[85vw] rounded-3xl flex gap-7 justify-center">
        <img src={logo} alt="" className="w-14 h-14 md:w-16 md:h-16" />
        <div>
          <p className="font-semibold text-xl md:text-3xl">Data Driven</p>
          <p className="text-sm md:text-lg">Roulette Tracker</p>
        </div>
      </div>
      <div
        className=" backdrop-sepia-0 shadow-2xl 2xl:h-[50rem] lg:h-[70vh] lg:w-[33vw] md:h-[65vh] md:w-[55vw] h-[75vh] w-[85vw] rounded-3xl px-10 py-6 flex flex-col justify-center gap-5"
        // style={{ backgroundColor: "rgb(245,245,245)" }}
      >
        <h2 className="text-white lg:text-4xl md:text-wl text-lg font-medium text-center m-0">
          Login
        </h2>

        <form
          action=""
          onSubmit={handleAuthLoginButton}
          className="flex flex-col justify-between items-start h-[53%] w-full mt-3"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-b border-gray-400 outline-none bg-transparent lg:w-[100%] w-[95%] shadow-lg px-1 py-2 text-sm lg:text-md font-semibold login-input"
            name="email"
            id="email"
            value={inputData.email}
            onChange={handleAuthLoginInputChange}
          />
          <div className="relative lg:w-[100%] w-[95%]">
            <input
              type={`${isPasswordView ? "text" : "password"}`}
              placeholder="Enter your password"
              className="border-b border-gray-400 outline-none bg-transparent lg:w-[100%] w-[100%] shadow-lg px-1 py-2 text-sm lg:text-md font-semibold login-input"
              name="password"
              id="password"
              value={inputData.password}
              onChange={handleAuthLoginInputChange}
            />
            <i
              className={`fa-solid ${
                isPasswordView ? "fa-eye" : "fa-eye-slash"
              } absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer `}
              onClick={handleCLickViewPassword}
            ></i>
          </div>
          {loading ? (
            <button
              type="submit"
              className={`w-[100%] bg-red-400 py-3 shadow-lg rounded-lg text-lg font-semibold text-white flex justify-center items-center`}
            >
              <div className="login-loader"></div>
            </button>
          ) : (
            <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-2 shadow-2xl rounded-lg text-lg font-semibold text-white`}
              style={{ backgroundColor: "rgb(239,68,68)" }}
            >
              Login
            </button>
          )}
        </form>

        <p className="text-xs m-0">
          Don't Have An Account ?{" "}
          <Link to="/auth/login" className={``}>
            sign up
          </Link>
        </p>
        <div className="flex w-[100%] items-center justify-evenly">
          <hr className={`border max-sm:w-[23%] w-[30%]`} />
          <p className="text-xs">Or Sign In with Email</p>
          <hr className={`border max-sm:w-[23%] w-[30%]`} />
        </div>
      </div>
    </div>
  );
};

export default Login;
