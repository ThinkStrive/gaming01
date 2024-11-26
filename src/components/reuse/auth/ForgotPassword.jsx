import React from "react";
import { useState } from "react";
import axios from "axios";
import { useToast } from "../../resources/Toast";
import { ToastContainer } from "react-toastify";
import { USER_FORGOT_PASSWORD } from "../../api/ApiDetails";
import { useNavigate } from "react-router-dom";


export function ForgotPass() {

  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState({
    userEmail: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let data = {
      userEmail: email.userEmail,
    };
    await axios
      .post(USER_FORGOT_PASSWORD, data)
      .then((res) => {
        if (res.data.status) {
          setLoading(false);
          // sessionStorage.setItem("userData", JSON.stringify(res.data.data));
          showToast("Reset Password Link sent to your registered Email", "success");
          setEmail({
            userEmail: "",
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
  // const handleSubmit= async(e) =>{
  //     e.preventDefault();


  //     const response = await fetch(USER_FORGOT_PASSWORD, {
  //         method: 'POST',
  //         body: JSON.stringify(data),
  //         headers:{
  //             'content-type': 'application/json'
  //         }
  //     });
  //      const res= await response.json();
  //     if(response.status === 401){
  //     //    alert("Email invalid")
  //     toast.error("Email Invalid", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //       });
  //     } else {
  //         //   alert("We have sent the Link")
  //           toast.success('We have sent the Link Please check your mail', {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "dark",
  //             });
  //             setData({
  //                 email:"",
  //             })
  //     }

  //     console.log(res);
  //     }

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparant p-0 m-0">
    {/* login container */}
    <div className="bg-purplegrad flex gap-5 flex-col sm:flex-row rounded-2xl shadow-lg max-w-6xl p-5 items-center">
      {/* image */}
      <div className="sm:block sm:w-1/2 w-full">
        <img
          className="rounded-2xl h-auto w-full object-cover sm:h-[350px]" 
          src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1732182017/registration_enwk4v.jpg"
          alt="Login Illustration"
           loading="lazy"
        />
      </div>
  
      {/* form */}
      <div className="sm:w-1/2 w-[100%] flex-col">
      <h2 className="text-white lg:text-3xl md:text-3xll text-2xl font-medium text-center lg:my-5">Forgot Password</h2>

         <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start lg:h-[53%] h-[55%] w-full lg:mt-3 mt-2"
        >
          <label htmlFor="email" className="font-bold text-white text-xm my-3">Enter your Email Address</label>
          <input
            type="email"
            placeholder="Enter here.."
            className="bg-purplegrad backdrop-blur-sm bg-opacity-30 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] w-full"
            name="userEmail"
            id="email"
            value={email.userEmail}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={`w-[100%] bg-[#7F00FF] text-white mt-4 py-2  shadow-2xl rounded-lg text-lg font-semibold lg:h-[50px] h-[55px]  px-4 border-2 border-[#7F00FF] hover:bg-[#7F00FF] hover:text-black duration-300 ${loading ? "flex justify-center items-center" : ""
              }`}
          >
            {loading ? <div className="login-loader"></div> : "Send Reset Link"}
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
  )
}



// <div className="flex justify-center items-center" >
//       <div
//         className="bg-[#040404] shadow-2xl border-2 rounded-3xl 
//       flex flex-col justify-center items-center gap-5 
//       w-full max-w-[600px] 
//       h-full max-h-[70vh]
//       px-7 py-5
//     "
//       >
//         <h2 className="text-white lg:text-4xl md:text-3xll text-2xl font-medium text-center lg:my-3">
//           Forgot Password
//         </h2>

//         <form
//           action=""
//           onSubmit={handleSubmit}
//           className="flex flex-col justify-center items-start lg:h-[53%] h-[55%] w-full lg:mt-3 mt-2"
//         >
//           <label htmlFor="email" className="font-bold text-xm">Enter your Email Address:</label>
//           <input
//             type="email"
//             placeholder="Enter here.."
//             className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 my-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
//             name="userEmail"
//             id="email"
//             value={email.userEmail}
//             onChange={handleChange}
//           />

//           <button
//             type="submit"
//             className={`w-full bg-darkNavy py-3 shadow-2xl rounded-lg lg:text-lg text-md font-semibold text-white lg:h-[55px] h-[50px] ${loading ? "flex justify-center items-center" : ""
//               }`}
//           >
//             {loading ? <div className="login-loader"></div> : "Send Reset Link"}
//           </button>
//         </form>
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />

//       </div>
//     </div>