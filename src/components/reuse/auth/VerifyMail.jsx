import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from "../../resources/Toast";
import axios from "axios";
import { USER_EMAIL_VERIFY } from "../../api/ApiDetails";

const VerifyMail = () => {
  const [inputData, setInputData] = useState({
    code: "",
  });
  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuthLoginInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleAuthLoginButton = async (e) => {
    setLoading(true);
    e.preventDefault();
    let data = {
      code: inputData.code,
    };
    console.log(data);
    await axios
      .post(USER_EMAIL_VERIFY, data)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          showToast("Verification Successful, Email verification Success", "success");
          setInputData({
            code: "",
          });
          navigate("/auth/login");
        } else {
          showToast(res.data.data, "error");
        }
      })
      .catch((err) => {
        setLoading(false);
        showToast(err.response?.data?.data || "An error occurred", "error");
      });
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <div
        className="bg-[#040404] shadow-2xl border-2 rounded-3xl 
      flex flex-col justify-center items-center gap-5 
      w-full max-w-[600px] 
      h-full max-h-[70vh]
      px-7 py-5
    "
      >
        <h2 className="text-white lg:text-4xl md:text-3xl text-2xl font-medium text-center my-3">
          Verify Email OTP
        </h2>

        <form
          onSubmit={handleAuthLoginButton}
          className="flex flex-col justify-center gap-3 items-center h-full w-full mt-3"
        >
          <input
            type="number"
            placeholder="Enter Verification code"
            className="bg-slate-300 outline-none w-full shadow-lg px-4 py-3 rounded-lg text-sm lg:text-[16px] text-black placeholder:text-slate-700 font-bold"
            name="code"
            value={inputData.code}
            onChange={handleAuthLoginInputChange}
          />
          <button
            type="submit"
            className={`w-full bg-darkNavy py-3 shadow-2xl rounded-lg lg:text-lg text-md font-semibold text-white lg:h-[55px] h-[50px] ${loading ? "flex justify-center items-center" : ""
              }`}
          >
            {loading ? <div className="login-loader"></div> : "Verify & Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyMail;
