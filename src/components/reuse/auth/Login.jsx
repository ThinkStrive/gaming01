// src/Components/Authentication/Login.js
import  { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { USER_LOGIN } from "../../api/ApiDetails";
import "../../../Style/Auth.css";

const Login = ({ inputData, setInputData }) => {

  const [loading, setLoading] = useState(false);
  const [isPasswordView, setIsPasswordView] = useState(false);
  const navigate = useNavigate(); // Added navigate

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
          sessionStorage.setItem("userData", JSON.stringify(res.data.data));

          toast.success("Login Successful", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          setInputData({
            email: "",
            password: "",
          });
        } else {
          setLoading(false);
          toast.warn(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.warn(err.response.data.data);
        if (err.response.data.data === "Please verify your email") {
          return navigate("/auth/verifyEmail");
        }
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
      <div
        className="bg-[#040404] shadow-2xl border-2 rounded-3xl 
      flex flex-col justify-center items-center gap-5 
      w-full max-w-[600px] 
      h-full max-h-[70vh]
      px-7 py-5
    "
      >
        <h2 className="text-white lg:text-4xl md:text-3xl text-2xl font-medium text-center lg:my-3">
          Login
        </h2>

        <form
          action=""
          onSubmit={handleAuthLoginButton}
          className="flex flex-col justify-between items-start lg:h-[53%] h-[55%] w-full lg:mt-3 mt-2"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
            name="email"
            id="email"
            value={inputData.email}
            onChange={handleAuthLoginInputChange}
          />
          <div className="relative lg:w-[100%] w-[100%] my-3">
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
              className={`fa-solid ${isPasswordView ? "fa-eye" : "fa-eye-slash"
                } absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-black `}
              onClick={handleCLickViewPassword}
            ></i>
          </div>
          {loading ? (
            <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-3  shadow-2xl rounded-lg text-lg font-semibold text-white lg:h-[55px] h-[50px] flex justify-center items-center`}
            >
              <div className="login-loader"></div>
            </button>
          ) : (
            <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-3 shadow-2xl  rounded-lg  text-lg font-semibold text-white lg:h-[55px] h-[50px]`}
            // style={{ backgroundColor: "rgb(239,68,68)" }}
            >
              Login
            </button>
          )}
        </form>
        <p className="lg:text-sm text-xs m-0 text-white" style={{ cursor: "pointer" }}>
          Forgot your password?
          <Link to="/auth/forgotPassword" className="cursor-pointer text-blue-500 ms-2" >
            Click here
          </Link>
        </p>
        <p className="lg:text-sm text-xs m-0 text-white mb-5">
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
          theme="dark"
        />
    </div>
  );
};

export default Login;
