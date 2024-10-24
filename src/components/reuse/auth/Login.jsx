// src/Components/Authentication/Login.js
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import axios from "axios";
import { useToast } from "../../resources/Toast";
import { USER_LOGIN } from "../../api/ApiDetails";
import "../../../Style/Auth.css";

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
    };
    await axios
      .post(USER_LOGIN, data)
      .then((res) => {
        if (res.data.status) {
          setLoading(false);
          localStorage.setItem("userData", JSON.stringify(res.data.data));
          showToast("Login Successful", "success");
          setInputData({
            email: "",
            password: "",
          });
        } else {
          setLoading(false);
          showToast(res.data.data, "error");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        showToast(err.response.data.data, "error");
      });
  };
  if (
    localStorage.getItem("userData") &&
    JSON.parse(localStorage.getItem("userData"))
  ) {
    return <Navigate to="/project1/blackRed" replace />;
  }
  return (
    <div className=" flex flex-col gap-5 justify-center items-center">
      <div
        className="bg-[#040404] shadow-2xl 2xl:h-[50rem] border-2 lg:h-[70vh] lg:w-[33vw] md:h-[65vh] md:w-[55vw] h-[75vh] w-[85vw] rounded-3xl px-10 py-6 flex flex-col justify-center gap-5"
        // style={{ backgroundColor: "rgb(245,245,245)" }}
      >
        <h2 className="text-white lg:text-4xl md:text-wl text-lg font-medium text-center my-3">
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
            className="bg-slate-300 outline-none lg:w-[100%] w-[95%] shadow-lg px-4 py-4 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
            name="email"
            id="email"
            value={inputData.email}
            onChange={handleAuthLoginInputChange}
          />
          <div className="relative lg:w-[100%] w-[95%]">
            <input
              type={`${isPasswordView ? "text" : "password"}`}
              placeholder="Enter your password"
              className="bg-slate-300 outline-none lg:w-[100%] w-[95%] shadow-lg px-4 py-4 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
              name="password"
              id="password"
              value={inputData.password}
              onChange={handleAuthLoginInputChange}
            />
            <i
              className={`fa-solid ${
                isPasswordView ? "fa-eye" : "fa-eye-slash"
              } absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-black `}
              onClick={handleCLickViewPassword}
            ></i>
          </div>
          {loading ? (
            <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-3 shadow-2xl rounded-lg text-lg font-semibold text-white h-[55px] flex justify-center items-center`}
            >
              <div className="login-loader"></div>
            </button>
          ) : (
            <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-3 shadow-2xl rounded-lg text-lg font-semibold text-white h-[55px]`}
              // style={{ backgroundColor: "rgb(239,68,68)" }}
            >
              Login
            </button>
          )}
        </form>

        <p className="text-sm m-0 text-white">
          Don't Have An Account ?{" "}
          <Link to="/auth/register" className="cursor-pointer text-blue-500">
            Sign up
          </Link>
        </p>
        {/* <div className="flex w-[100%] items-center justify-evenly text-black">
          <hr className={`border max-sm:w-[23%] w-[30%]`} />
          <p className="text-xs">Or Sign In with Email</p>
          <hr className={`border max-sm:w-[23%] w-[30%]`} />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
