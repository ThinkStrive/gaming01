import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../resources/Toast";
import axios from "axios";
import { USER_EMAIL_VERIFY } from "../../api/ApiDetails";

const VerifyMail = () => {
  const [inputData, setInputData] = useState({
    code: ["", "", "", "", "", ""], // 6 separate OTP inputs
  });
  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Refs to focus on the next input
  const inputRefs = useRef([]);

  const handleAuthLoginInputChange = (e, index) => {
    const value = e.target.value;

    // Only allow single digits
    if (!/[^0-9]/.test(value)) {
      const updatedCode = [...inputData.code];
      updatedCode[index] = value; // Update the specific index
      setInputData({ ...inputData, code: updatedCode });

      // Focus the next input if a value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspaceOrDelete = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      // If the current input box is empty, move focus and update the previous input box
      if (inputData.code[index] === "") {
        if (index > 0) {
          // Move focus to the previous input
          inputRefs.current[index - 1].focus();
        }
      } else {
        // If the current input is not empty, clear the input box and move the value from the next box
        if (index < 5 && inputData.code[index + 1] !== "") {
          const updatedCode = [...inputData.code];
          updatedCode[index] = inputData.code[index + 1]; // Copy value from next input
          updatedCode[index + 1] = ""; // Clear the next input
          setInputData({ ...inputData, code: updatedCode });
          inputRefs.current[index].focus(); // Focus current input box
        }
      }
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const pastedValue = e.clipboardData.getData("Text").trim();

    // If the pasted value is 6 digits, distribute them across the 6 inputs
    if (/^\d{6}$/.test(pastedValue)) {
      const updatedCode = pastedValue.split("").map((digit) => digit);
      setInputData({ code: updatedCode });
    }
  };

  const handleAuthLoginButton = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Concatenate the OTP digits to form the full OTP
    const otp = inputData.code.join("");

    let data = {
      code: otp,
    };


    await axios
      .post(USER_EMAIL_VERIFY, data)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          showToast("Verification Successful, Email verification Success", "success");
          setInputData({
            code: ["", "", "", "", "", ""], // Reset OTP
          });
          navigate("/project1/blackRed");
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
    <section className="min-h-screen flex items-center justify-center bg-transparant p-0 m-0">
    {/* login container */}
    <div className="bg-purplegrad flex gap-5 flex-col sm:flex-row rounded-2xl shadow-lg max-w-6xl p-5 items-center">
      {/* image */}
      <div className="sm:block sm:w-1/2 w-full">
        <img
          className="rounded-2xl h-auto w-full object-cover sm:h-[450px]" 
          src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1732187347/medium-shot-man-futuristic-casino_1_rh3rro.jpg"
          alt="Login Illustration"
          
        />
      </div>
  
      {/* form */}
      <div className="sm:w-1/2 w-[100%] flex-col">
      <h2 className="text-white lg:text-4xl md:text-3xl text-2xl font-medium text-center my-3">
          Verify Email OTP
        </h2>

        <form
          onSubmit={handleAuthLoginButton}
          className="flex flex-col justify-center gap-5 items-center h-full w-full"
        >
          <div className="flex gap-1">
            {/* Create 6 input boxes for OTP */}
             {inputData.code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleAuthLoginInputChange(e, index)}
                onKeyDown={(e) => handleBackspaceOrDelete(e, index)}
                onPaste={(e) => handlePaste(e, index)} // Handle paste event
                className="w-10 h-10 bg-purplegrad backdrop-blur-sm bg-opacity-30 font-bold text-center text-white p-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] "
                ref={(el) => (inputRefs.current[index] = el)}
                autoFocus={index === 0} // Focus first input by default
              />
            ))}
          </div>
          <button
            type="submit"
            className={`w-[100%] bg-[#7F00FF] text-white mt-4 py-2  shadow-2xl rounded-lg text-lg font-semibold lg:h-[50px] h-[55px]  px-4 border-2 border-[#7F00FF] hover:bg-[#7F00FF] hover:text-black duration-300 ${loading ? "flex justify-center items-center" : ""}`}
          >
            {loading ? <div className="login-loader"></div> : "Verify & Login"}
          </button>
       </form> 
      </div>
    </div>
  </section>
  );
};

export default VerifyMail;
{/* <div className="flex flex-col gap-5 justify-center items-center h-screen">
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
          className="flex flex-col justify-center gap-5 items-center h-full w-full"
        >
          <div className="flex gap-3">
            {/* Create 6 input boxes for OTP */}
    //         {inputData.code.map((digit, index) => (
    //           <input
    //             key={index}
    //             type="text"
    //             maxLength="1"
    //             value={digit}
    //             onChange={(e) => handleAuthLoginInputChange(e, index)}
    //             onKeyDown={(e) => handleBackspaceOrDelete(e, index)}
    //             onPaste={(e) => handlePaste(e, index)} // Handle paste event
    //             className="w-12 h-12 bg-purplegrad backdrop-blur-sm bg-opacity-30 font-bold text-center text-white p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] "
    //             ref={(el) => (inputRefs.current[index] = el)}
    //             autoFocus={index === 0} // Focus first input by default
    //           />
    //         ))}
    //       </div>
    //       <button
    //         type="submit"
    //         className={`w-full bg-darkNavy py-3 shadow-2xl rounded-lg lg:text-lg text-md font-semibold text-white lg:h-[55px] h-[50px] ${loading ? "flex justify-center items-center" : ""}`}
    //       >
    //         {loading ? <div className="login-loader"></div> : "Verify & Login"}
    //       </button>
    //     </form>
    //   </div>
    // </div> */}