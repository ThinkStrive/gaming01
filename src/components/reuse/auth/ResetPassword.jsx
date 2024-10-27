import React from "react";
import { backendUrl } from "../../../../config";
import { Navigate } from "react-router-dom";
export function ResetPass(){
    // const navigate=useNavigate();
    const [data,setData]= useState({
        password: '',
    });
    // eslint-disable-next-line no-unused-vars
    const [resetPassword,setResetPassword] = useState(false)
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setData({...data, [name]: value});
    }
    const handleCLickViewPassword = () => {
        setIsPasswordView(!isPasswordView);
      };

    const handleSubmit= async(e) =>{
    e.preventDefault();
    const response = await fetch(`${backendUrl}/resetPassword`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    });
     // eslint-disable-next-line no-unused-vars
     const res= await response.json();
     console.log(res)
    if(response.status === 401){
     alert("Reset validation error");
      toast.error("Reset Validation error", {
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
     alert("Password reset successfully")
    toast.success('Password reset successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
            setResetPassword(true);
            setData({
                password:'',
            })
    }
    }


    if(resetPassword === true){
        return <Navigate to={'/login'} replace/>
      }

    return(
        <div className="flex justify-center items-center" style={{height:"100vh",width:"100%"}}>
         <div
        className="bg-[#040404] shadow-2xl 2xl:h-[50rem] border-2 lg:h-[70vh] lg:w-[33vw] md:h-[65vh] md:w-[55vw] h-[55vh] w-[85vw] rounded-3xl lg:px-10 px-7 py-6 flex flex-col justify-center gap-5"
        // style={{ backgroundColor: "rgb(245,245,245)" }}
      >
        <h2 className="text-white lg:text-4xl md:text-3xll text-2xl font-medium text-center lg:my-3">
          Reset Password
        </h2>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col justify-between items-start lg:h-[53%] h-[55%] w-full lg:mt-3 mt-2"
        >
        <div className="relative lg:w-[100%] w-[100%]">
            <input
              type={`${isPasswordView ? "text" : "password"}`}
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
              } absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-black `}
              onClick={handleCLickViewPassword}
            ></i>
          </div>
         
         <button
              type="submit"
              className={`w-[100%] bg-darkNavy py-3 shadow-2xl  rounded-lg  text-lg font-semibold text-white lg:h-[55px] h-[50px]`}
              // style={{ backgroundColor: "rgb(239,68,68)" }}
            >
             Submit
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