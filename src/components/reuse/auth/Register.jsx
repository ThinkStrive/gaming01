// src/Components/Authentication/Login.js
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";
import { useToast } from "../../resources/Toast";
import { USER_REGISTER } from "../../api/ApiDetails";
import "../../../Style/Auth.css";

const Register = ({ inputData, setInputData }) => {
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
      userName: inputData.name,
      userEmail: inputData.email,
      password: inputData.password,
      mobileNumber: inputData.mobile_number,
    };
    await axios
      .post(USER_REGISTER, data)
      .then((res) => {
        if (res.data.status) {
          setLoading(false);
          sessionStorage.setItem("userData", JSON.stringify(res.data.data));
          showToast("Register Successful", "success");
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
    sessionStorage.getItem("userData") &&
    JSON.parse(sessionStorage.getItem("userData"))
  ) {
    return <Navigate to="/project1/blackRed" replace />;
  }
  return (
    <div className=" flex flex-col gap-5 justify-center items-center">
      <div className="bg-[#040404] border-2 shadow-2xl 2xl:h-[50rem] lg:h-[83vh] lg:w-[33vw] md:h-[78vh] md:w-[55vw] h-[70vh] xs:h-[60vh] w-[85vw] rounded-3xl lg:px-10 px-7 py-6 flex flex-col justify-center gap-5">
        <h2 className="text-white lg:text-4xl md:text-wl text-2xl font-medium text-center my-3">
          Register
        </h2>

        <form
          action=""
          onSubmit={handleAuthLoginButton}
          className="flex flex-col justify-between items-start lg:h-[70%] h-[70%] w-full lg:mt-3 mt-1"
        >
          <input
            type="text"
            placeholder="Enter your Name"
            className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
            name="name"
            id="name"
            value={inputData.name}
            onChange={handleAuthLoginInputChange}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
            name="email"
            id="email"
            value={inputData.email}
            onChange={handleAuthLoginInputChange}
          />
          <div className="relative lg:w-[100%] w-[100%]">
            <input
              type={`${isPasswordView ? "text" : "password"}`}
              placeholder="Enter your password"
              className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
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
          <input
            type="number"
            placeholder="Enter your Number"
            className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
            name="mobile_number"
            id="mobile_number"
            value={inputData.mobile_number}
            onChange={handleAuthLoginInputChange}
          />
          {loading ? (
            <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-3 shadow-2xl rounded-lg text-lg font-semibold text-white lg:h-[55px] h-[50px] flex justify-center items-center`}
            >
              <div className="login-loader"></div>
            </button>
          ) : (
            <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-3 shadow-2xl rounded-lg lg:text-lg text-md font-semibold text-white lg:h-[55px] h-[50px`}
              // style={{ backgroundColor: "rgb(239,68,68)" }}
            >
              Register
            </button>
          )}
        </form>

        <p className="lg:text-sm text-xs m-0 text-white">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="cursor-pointer text-blue-500">
            Sign in
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

export default Register;
