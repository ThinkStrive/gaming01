import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";
import '../../Style/Feedback.css';
import { FaStar } from "react-icons/fa6";
import { FaSmileBeam, FaSmile, FaMeh, FaFrown, FaSadTear } from "react-icons/fa";
import { useToast } from "../resources/Toast";
import { USER_FEEDBACK } from "../api/ApiDetails";

export function Feedback({theme, setTheme}) {

  const showToast = useToast();
  const authUser =JSON.parse(sessionStorage.getItem("userData"))
  const [issues, setIssues] = useState('');
  const [improve, setImprove] = useState('');
  const [Afeedback, setAfeedback] = useState('');
  const [features,setFeatures] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [ratingNav, setNavRating] = useState(0);
  const [followUp, setFollowUp] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const options = [
    { value: 'QuadroBet', label: 'QuadroBet Strategy' },
    { value: 'spinCycle', label: 'SpinCycle Strategy' },
    { value: 'Money Management', label: 'Money Management Tool' },
    { value: 'Since Last Spin', label: 'SINCE LAST SPIN Tracker' },
    { value: 'Spin History', label: 'Spin History' },
    { value: 'Double Street', label: 'Double Street Data' },
    { value: 'Wheel Section', label: 'Wheel Section Tracker' },
    { value: 'Roadmaps', label: 'Roadmaps with Auto Detector' },
    { value: 'Personalized Alerts', label: 'Personalized Alerts' },
  ];


  const handleSelectChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevOptions) => {
      if (!prevOptions.includes(value)) {
        return [...prevOptions, value];
      }
      return prevOptions; 
    });
  };


  const handleFollowUpChange = (value) => {
    setFollowUp(value);
    if (value !== "Yes") {
      setEmail(''); 
    }
  };
    

  const handleNavRating = (rateNav) => {
    setNavRating(rateNav);
  };
  const handleChangeImprove = (event) => {
    setImprove(event.target.value);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleChangeIssues = (event) => {
    setIssues(event.target.value);
    setError('');
  };

  const handleChangeAfeedback = (event) => {
    setAfeedback(event.target.value);
    setError('');
  };
  const handleChangeFeatures = (event) => {
    setFeatures(event.target.value);
    setError('');
  };

 const handleSubmit = async (event) => {
  event.preventDefault();
  
  const data1 = {
    rating,
    selectedOptions,
    ratingNav,
    issues,
    improve,
    Afeedback,
    features,
    followUp,
    email,
    userName: authUser.userName,
    userEmail: authUser.userEmail
  };

 


  try {
    const response = await axios.post(USER_FEEDBACK, data1);
    if (response.status === 201) {
      setSuccessMessage("Feedback submitted successfully! Please return to the home screen.");
      showToast("Feedback submitted successfully! Please return to the home screen.", "success");
      // Clear the form fields
      setRating(0);
      setSelectedOptions([]);
      setNavRating(0);
      setIssues('');
      setImprove('');
      setAfeedback('');
      setFeatures('');
      setFollowUp('');
      setEmail('');
    }
  } catch (error) {
    console.error("Error submitting feedback:", error);
    setError("There was an error submitting your feedback. Please try again later.");
  }

};

  return (
    <div className="flex justify-center items-start mt-5" style={{ minheight: "100vh", width: "100%", color: "#ffffff" }}>
      <div className="bg-transparant p-4 w-full">
        <div >
          <div className="flex justify-between feedback-title">
          <h1 className={`text-3xl font-bold text-white pb-2 ` } style={{textShadow:"2px 2px 5px #555",borderBottom:"2px solid white"}} >Feedback Form</h1>
          <Link to="/project1/blackRed" className={`text-black inline-block text-2xl hover:text-customPurple ${theme === 'light' ? 'text-black' : 'text-white'} `} style={{ width: "28px" }}>
            <FaRegWindowClose />
          </Link>
          </div>
        
          </div>
        <form onSubmit={handleSubmit} className="flex  form-parent p-1 mt-2 max-sm:w-[350px] max-md:w-[450px] max-md:flex-col max-sm:flex-col ">
        
        
        
          {/* //1 */}
          <div className="form-sub">
             <div>
             <label htmlFor="" className="text-white font-bold text-md mt-3">
              1.How would you rate your overall experience with the app?
              </label>
              <div className="flex text-black text-3xl gap-4 my-2">
              <div style={{ display: "flex", gap: "16px" }}>
                {[1, 2, 3, 4, 5].map((rate) => (
                  <FaStar
                    key={rate}
                    size={30}
                    color={rating >= rate ? "#FFD700" : "gray"}
                    onClick={() => handleRating(rate)}
                    style={{
                      cursor: "pointer"}}
                  />
                ))}
              </div>
              </div>
              <div className="flex rating ">
                <span className="flex flex-col">
                  <FaSadTear
                    size={24}
                    style={{color:"yellow",background:"black",borderRadius:"50%"}}
                  />
                  <p className="font-bold text-customRed text-xs mt-2">Poor</p>
                </span>
                <span className="flex flex-col">
                  
                  <FaFrown
                    size={24}
                    style={{color:"yellow",background:"black",borderRadius:"50%"}}
                  />
                </span>
                <span>
                  
                  <FaMeh
                  size={24}
                  style={{color:"yellow",background:"black",borderRadius:"50%"}}
                />
                </span>
                <span>
                  
                  <FaSmile
                  size={24}
                  style={{color:"yellow",background:"black",borderRadius:"50%"}}
                />
                </span>
                <span>
                  
                  <FaSmileBeam
                  size={24}
                  style={{color:"yellow",background:"black",borderRadius:"50%"}}
                />
                <p className="text-customGreen font-bold text-xs mt-2"> Excellent</p>
                </span>
              </div>
             </div>
                {/* //2 */}
                <div className="mt-3">
                  <div className="flex flex-col">
                    <label htmlFor="features" className="text-text-white font-bold text-md mt-3">
                      2. Which features do you find most useful?
                    </label>
                    <select
                      id="options"
                      style={{ width: "200px" }}
                      className="dropdown mt-2 p-1 py-2 border rounded-lg bg-customPurple text-white cursor-pointer"
                      onChange={handleSelectChange}
                    >
                      <option value="" >--Select an option--</option>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="features flex flex-wrap mt-3 p-2 overflow-scroll w-[95%]" 
                      style={{ height: "100px", backgroundColor: "white", boxShadow: "2px 2px 5px black", borderRadius: '5px' }}>
                    {selectedOptions.map((option, index) => (
                      <p key={index} className="m-1 px-2 p-2 bg-mediumBlue text-center rounded-xl" style={{ height: "35px" }}>
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
             {/* //3 */}
              <div className="mt-3 flex flex-col">
                <label htmlFor="" className="text-text-white font-bold text-md">
                  3.How easy is it to navigate the app?
                </label>
                <div style={{ display: "flex", gap: "16px" }} className="mt-2">
                  {[1, 2, 3, 4, 5].map((rateNav) => (
                    <FaStar
                      key={rateNav}
                      size={30}
                      color={ratingNav >= rateNav ? "#FFD700" : "gray"}
                      onClick={() => handleNavRating(rateNav)}
                      style={{
                        cursor: "pointer"}}
                    />
                  ))}
                </div>
                <div className="flex mt-3 ">
                    <p className="text-xs font-bold text-customRed me-5 pe-5">Very Difficult</p>
                    <p className="text-xs font-bold text-customGreen ms-5 ps-5"> Very Easy</p>
                </div>
              </div>
              {/* //4 */}
              <div className="mt-3">
                <label htmlFor="issues" className="text-text-white font-bold text-md mt-3">
                  4.Did you encounter any issues or bugs? Please describe them.
                </label>
                <textarea
                  id="issues"
                  name="issues"
                  rows="3"
                  className="bg-white text-black w-[95%]"
                  placeholder="Enter your Issues here..."
                  value={issues}
                  onChange={handleChangeIssues}
                  style={{
                    marginTop: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    // width: '100%',
                    fontSize: '16px',
                    boxShadow: "2px 2px 5px #2d2e32"
                  }}
                />

                </div>
          </div>
          {/* col2 */}

          <div className="form-sub">
            {/* //5 */}
          <div>
          <label htmlFor="improve" className="text-text-white font-bold text-md mt-3">
            5.What suggestions do you have to improve your experience?
          </label>
          <textarea
            id="improve"
            name="improve"
            rows="3"
            className="bg-white text-black w-[95%]"
            placeholder="Enter your suggestions here..."
            value={improve}
            onChange={handleChangeImprove}
            style={{
              marginTop: '10px',
              padding: '10px',
              borderRadius: '5px',
              // width: '100%',
              fontSize: '16px',
              boxShadow: "2px 2px 5px #2d2e32"
            }}
          />
          </div>
          {/* //6 */}
          <div className="mt-1">
          <label htmlFor="Afeedback" className="text-text-white font-bold text-md mt-3">
            6.Any additional feedback or thoughts you'd like to share?
          </label>
          <textarea
            id="Afeedback"
            name="Afeedback"
            rows="3"
            className="bg-white text-black w-[95%]"
            placeholder="Enter your feedback here..."
            value={Afeedback}
            onChange={handleChangeAfeedback}
            style={{
              marginTop: '10px',
              padding: '10px',
              borderRadius: '5px',
              // width: '100%',
              fontSize: '16px',
              boxShadow: "2px 2px 5px #2d2e32"
            }}
          />
          </div>
          {/* //7 */}
          <div className="mt-5">
          <label htmlFor="features" className="text-text-white font-bold text-md ">
            7.Are there any features you'd like to see added?
          </label>
          <textarea
            id="features"
            name="features"
            rows="3"
            className="bg-white text-black w-[95%]"
            placeholder="Enter your idea's here..."
            value={features}
            onChange={handleChangeFeatures}
            style={{
              marginTop: '10px',
              padding: '10px',
              borderRadius: '5px',
              // width: '100%',
              fontSize: '16px',
              boxShadow: "2px 2px 5px #2d2e32"
            }}
          />
          </div>
          {/* //8 */}
          <div className="mt-5 flex flex-col">
            <label htmlFor="followUp" className="text-text-white font-bold text-md">
              8.Would you like us to follow up with you regarding your feedback?
            </label>
            <select
              id="followUp"
              name="followUp"
              style={{width:"100px"}}
              className="mt-2 p-2  rounded-lg text-white bg-customPurple dropdown"
              onChange={(e) => handleFollowUpChange(e.target.value)}
            >
              <option value=""  >Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>

              
            </select>
            
            {/* Conditionally render the email input field */}
            {followUp === "Yes" && (
              <div className="mt-1 z-1 mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  style={{boxShadow:"2px 2px 5px black",width:"300px"}}
                  className="mt-2 p-2 border rounded text-black bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}
          </div>
              <div className="py-5">
                {error && <p className="text-customRed text-md mt-2">{error}</p>}
                {successMessage && <p className="text-customGreen text-md mt-2">{successMessage}</p>}
                <div className="flex justify-center items-center w-full my-8" >
                <button
                  type="submit"
                  className="bg-coldBlue border-2 border-customBlue font-semibold  py-3 px-8 feed-btn rounded-lg hover:bg-darkBlue font-bold "
                  // style={{ width: "200px" }}
                >
                  Submit Feedback
                </button>
                </div>
              </div>
          </div>
          
        </form>
        
      </div>
    </div>
  );
}
