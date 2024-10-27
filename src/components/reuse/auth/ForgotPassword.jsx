import React from "react";
import { useState } from "react";
import { backendUrl } from "../../../../config";
export function ForgotPass(){

    const [data,setData] = useState({
        email: '',
    })
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setData({...data, [name]: value});
    }
    const handleSubmit= async(e) =>{
        e.preventDefault();
        
        
        const response = await fetch(`${backendUrl}/forgotPassword`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'content-type': 'application/json'
            }
        });
         // eslint-disable-next-line no-unused-vars
         const res= await response.json();
        if(response.status === 401){
        //    alert("Email invalid")
        toast.error("Email Invalid", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
            //   alert("We have sent the Link")
              toast.success('We have sent the Link Please check your mail', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                setData({
                    email:"",
                })
        }

        console.log(res);
        }
    
    return(
        <div className="flex justify-center items-center" style={{height:"100vh",width:"100%"}}>
      <div
        className="bg-[#040404] shadow-2xl 2xl:h-[50rem] border-2 lg:h-[70vh] lg:w-[33vw] md:h-[65vh] md:w-[55vw] h-[55vh] w-[85vw] rounded-3xl lg:px-10 px-7 py-6 flex flex-col justify-center gap-5"
        // style={{ backgroundColor: "rgb(245,245,245)" }}
      >
        <h2 className="text-white lg:text-4xl md:text-3xll text-2xl font-medium text-center lg:my-3">
          Forgot Password
        </h2>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col justify-between items-start lg:h-[53%] h-[55%] w-full lg:mt-3 mt-2"
        >
        <label htmlFor="email" className="font-bold text-xm">Enter your Email Address:</label>
          <input
            type="email"
            placeholder="Enter here.."
            className="bg-slate-300 outline-none lg:w-[100%] w-[100%] shadow-lg px-4 my-4 lg:py-4 py-3 rounded-lg text-sm lg:text-[16px] login-input text-black placeholder:text-slate-700 font-bold"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
         
         <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-3 shadow-2xl  rounded-lg  text-lg font-semibold text-white lg:h-[55px] h-[50px]`}
              // style={{ backgroundColor: "rgb(239,68,68)" }}
            >
              Send Reset Link
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
    )
}