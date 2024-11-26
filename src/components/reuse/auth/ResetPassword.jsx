import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { USER_RESET_PASSWORD } from "../../api/ApiDetails";
import { useToast } from "../../resources/Toast";
import axios from "axios";

export function ResetPass() {

  const showToast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isPasswordView, setIsPasswordView] = useState(false);
  const [data, setData] = useState({
    password: "",
  });
  const [resetPassword, setResetPassword] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Extract token from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const verifyToken = queryParams.get("verify");
    if (verifyToken) {
      setToken(verifyToken);
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClickViewPassword = () => {
    setIsPasswordView(!isPasswordView);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const requestData = {
      password: data.password,
      verifyToken: token,  // Add token to request data
    };

    try {
      const res = await axios.post(USER_RESET_PASSWORD, requestData);
      if (res.data.status) {
        setLoading(false);
        showToast("Password reset Successful", "success");
        setData({ password: "" });
        setResetPassword(true);
      } else {
        setLoading(false);
        showToast(res.data.data, "error");
      }
    } catch (err) {
      setLoading(false);
      showToast(err.response.data.data, "error");
    }
  };

  if (resetPassword) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparant p-0 m-0">
    {/* login container */}
    <div className="bg-purplegrad flex gap-5 flex-col sm:flex-row rounded-2xl shadow-lg max-w-6xl p-5 items-center">
      {/* image */}
      <div className="sm:block sm:w-1/2 w-full">
        <img
          className="rounded-2xl h-auto w-full object-cover sm:h-[450px]" 
          src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1732182131/medium-shot-man-futuristic-casino_vsslkq.jpg"
          alt="Login Illustration"
           loading="lazy"
        />
      </div>
  
      {/* form */}
      <div className="sm:w-1/2 w-[100%] flex-col gap-5">
      <h2 className="text-white lg:text-2xl md:text-2xl text-2xl mb-5 font-medium text-center lg:my-3">
          Reset Password
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3 lg:h-[53%] h-[55%] w-full lg:mt-3 mt-2"
        >
          <div className="relative lg:w-[100%] w-[100%]">
            <input
              type={isPasswordView ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-purplegrad backdrop-blur-sm bg-opacity-30 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] w-full"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
            />
            <i
              className={`fa-solid ${
                isPasswordView ? "fa-eye" : "fa-eye-slash"
              } absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-white`}
              onClick={handleClickViewPassword}
            ></i>
          </div>

          <button
            type="submit"
            className="w-[100%] bg-[#7F00FF] text-white mt-4 py-2  shadow-2xl rounded-lg text-lg font-semibold lg:h-[50px] h-[55px]  px-4 border-2 border-[#7F00FF] hover:bg-[#7F00FF] hover:text-black duration-300"
          >
            {loading ? <div className="login-loader flex justify-center"></div> : "Submit"}
          </button>
        </form>
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
    </div>
  </section>
  );
}
{/* <div
      className="flex justify-center items-center"
      // style={{ height: "100vh", width: "100%" }}
    >
      <div
        className="bg-[#040404] shadow-2xl border-2 rounded-3xl 
      flex flex-col justify-center items-center gap-5 
      w-full max-w-[600px] 
      h-full max-h-[70vh]
      px-7 py-5
    "
      >
        <h2 className="text-white lg:text-4xl md:text-3xll text-2xl font-medium text-center lg:my-3">
          Reset Password
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3 lg:h-[53%] h-[55%] w-full lg:mt-3 mt-2"
        >
          <div className="relative lg:w-[100%] w-[100%]">
            <input
              type={isPasswordView ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
            />
            <i
              className={`fa-solid ${
                isPasswordView ? "fa-eye" : "fa-eye-slash"
              } absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-black`}
              onClick={handleClickViewPassword}
            ></i>
          </div>

          <button
            type="submit"
            className="w-[100%] bg-red-600 py-3 shadow-2xl rounded-lg text-lg flex justify-center font-semibold text-white lg:h-[55px] h-[50px]"
          >
            {loading ? <div className="login-loader flex justify-center"></div> : "Submit"}
          </button>
        </form>
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
    </div> */}