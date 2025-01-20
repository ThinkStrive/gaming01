// src/Components/Authentication/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-phone-input-2/lib/style.css';
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { useToast } from "../../resources/Toast";
import { USER_REGISTER } from "../../api/ApiDetails";
import "../../../Style/Auth.css";
import LegalTermsModal from "../../resources/LegalTermsModal";



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

    const [disabled, setDisabled] = useState(true); // State to control disabled status
    const [accepted, setAccepted] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparant p-0 m-0">
  {/* login container */}
  <div className="bg-purplegrad flex gap-5 flex-col sm:flex-row rounded-2xl shadow-lg max-w-6xl p-5 items-center">
    {/* image */}
    <div className="sm:block sm:w-1/2 w-full">
      <img
        className="rounded-2xl h-auto w-full object-cover  sm:h-[450px]" 
        src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1732179342/casinobg1_iqhrl3.jpg"
        alt="Login Illustration"
        
      />
    </div>

    {/* form */}
    <div className="sm:w-1/2 w-[100%] flex-col">
      
    <h2 className="text-white lg:text-3xl md:text-wl text-2xl font-medium text-center my-3">
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
            className="bg-purplegrad backdrop-blur-sm bg-opacity-30 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] w-full"
            name="name"
            id="name"
            value={inputData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-purplegrad backdrop-blur-sm bg-opacity-30 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] w-full"
            name="email"
            id="email"
            value={inputData.email}
            onChange={handleInputChange}
          />
          <div className="relative lg:w-[100%] w-[100%]">
            <input
              type={isPasswordView ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-purplegrad backdrop-blur-sm bg-opacity-30 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] w-full"
              name="password"
              id="password"
              value={inputData.password}
              onChange={handleInputChange}
            />
            <i
              className={`fa-solid ${isPasswordView ? "fa-eye" : "fa-eye-slash"
                } absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-white`}
              onClick={handleCLickViewPassword}
            ></i>
          </div>
          <PhoneInput
            country={"us"}
            value={inputData.mobile_number}
            onChange={handleAuthLoginInputChange}
            className="text-black rounded-lg placeholder:text-black bg-purplegrad backdrop-blur-sm bg-opacity-30 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] w-full"
            inputStyle={{
              outline: "none",
              width: "100%",
              height: "100%",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#000000",
              background:"transparant",
              padding:" 5px 0px 5px 40px"
            }}
            containerStyle={{
              marginBottom: "0.3rem",
            }}
            placeholder="Enter your Number"
          />

             {/* Terms and Conditions Modal */}
             <div className="flex justify-center items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary border-2 border-black"
                checked={accepted}
                onChange={() => setShowTermsModal(true)}
                onClick={(e) => e.preventDefault()} 
              />
              <LegalTermsModal 
                accepted={accepted} 
                setAccepted={setAccepted} 
                setDisabled={setDisabled} 
                colors={`text-base-950 hover:text-gray-100`}
                isOpen={showTermsModal}
                setIsOpen={setShowTermsModal}
              />
            </div>
            <button
              type="submit"
              disabled={!accepted || loading}
              className={`w-full bg-[#7F00FF] text-black shadow-2xl rounded-lg text-lg 
                font-semibold lg:h-[40px] h-[40px] px-4 border-2 
                border-[#7F00FF] hover:bg-[#7F00FF] hover:text-white duration-300 
                flex items-center justify-center ${(!accepted || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="login-loader"></div>
              ) : (
                'Register'
              )}
            </button>

        </form>

        <p className="lg:text-sm text-xs mt-4 m-0 text-white text-center">
          Already Have An Account?{" "}
          <Link to="/auth/login" className="cursor-pointer text-blue-500">
            Sign in
          </Link>
        </p> 
   
    </div>
  </div>
</section>

  );
};

export default Register;
{/* <div className="flex flex-col gap-5 justify-center items-center">
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
    </div> */}