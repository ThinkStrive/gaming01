// src/Components/Authentication/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-phone-input-2/lib/style.css';
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { useToast } from "../../resources/Toast";
import { USER_REGISTER } from "../../api/ApiDetails";
import "../../../Style/Auth.css";

const Register = ({ inputData, setInputData }) => {

  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const [isPasswordView, setIsPasswordView] = useState(false);
  const navigate = useNavigate();

  const handleAuthLoginInputChange = (value, data) => {
    const countryCode = `+${data.countryCode}`; 
    const areaCode = value.slice(0, data.dialCode.length); 
    const mobileNumber = value.slice(data.dialCode.length); 
  
    setInputData({ ...inputData, mobile_number: `${countryCode}-${areaCode}-${mobileNumber}` });
  };

  const handleInputChange = (e) => {
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
          showToast("Register Successful, Email verification pending", "success");
          navigate("/auth/verifyEmail");
          setInputData({
            name: "",
            email: "",
            password: "",
            mobile_number: "",
          });
        } else {
          setLoading(false);
          showToast(res.data.data, "error");
        }
      })
      .catch((err) => {
        setLoading(false);
        showToast(err.response.data.data, "error");
      });
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div
        className="bg-[#040404] shadow-2xl border-2 rounded-3xl 
      flex flex-col justify-center items-center gap-5 
      w-full max-w-[600px] 
      h-full min-h-[70vh]
      px-7 py-5"
      >
        <h2 className="text-white lg:text-4xl md:text-wl text-2xl font-medium text-center my-3">
          Register
        </h2>

        <form
          action=""
          onSubmit={handleAuthLoginButton}
          className="flex flex-col justify-between gap-3 items-start lg:h-[70%] h-[70%] w-full lg:mt-3 mt-1"
        >
          <input
            type="text"
            placeholder="Enter your Name"
            className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
            name="name"
            id="name"
            value={inputData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
            name="email"
            id="email"
            value={inputData.email}
            onChange={handleInputChange}
          />
          <div className="relative lg:w-[100%] w-[100%]">
            <input
              type={isPasswordView ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
              name="password"
              id="password"
              value={inputData.password}
              onChange={handleInputChange}
            />
            <i
              className={`fa-solid ${isPasswordView ? "fa-eye" : "fa-eye-slash"
                } absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-black`}
              onClick={handleCLickViewPassword}
            ></i>
          </div>
          <PhoneInput
            country={"us"}
            value={inputData.mobile_number}
            onChange={handleAuthLoginInputChange}
            className="text-black rounded-lg placeholder:text-black"
            inputStyle={{
              backgroundColor: "#cbd5e1",
              outline: "none",
              width: "100%",
              height: "100%",
              padding: "0.80rem 3rem",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#000000",

            }}
            containerStyle={{
              marginBottom: "1rem",
            }}
            placeholder="Enter your Number"
          />
          {loading ? (
            <button
              type="submit"
              className="w-[100%] bg-darkNavy py-3 shadow-2xl rounded-lg text-lg font-semibold text-white lg:h-[55px] h-[50px] flex justify-center items-center"
            >
              <div className="login-loader"></div>
            </button>
          ) : (
            <button
              type="submit"
              className="w-[100%] bg-darkNavy py-3 shadow-2xl rounded-lg lg:text-lg text-md font-semibold text-white lg:h-[55px] h-[50px]"
            >
              Register
            </button>
          )}
        </form>

        <p className="lg:text-sm text-xs m-0 text-white">
          Already Have An Account?{" "}
          <Link to="/auth/login" className="cursor-pointer text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
