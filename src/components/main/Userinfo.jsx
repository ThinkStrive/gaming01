import React, { useState, useEffect } from "react";
import "../../Style/Userinfo.css"; // Ensure this path is correct
import moment from "moment";
import { FaEnvelope, FaUpload, FaCamera } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaCalendarAlt, FaClock, FaTags } from "react-icons/fa";
export function Userinfo({ theme }) {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    subscriptionDate: "",
    subscriptionTime: "",
    subscriptionType: "",
    isPaid: { paid: false, paidType: "none" },
    profilePicture: "",
  });

  const [isUploadSectionVisible, setIsUploadSectionVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("userData");
    if (storedData) setUserData(JSON.parse(storedData));

    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) {
      setUserData((prevState) => ({
        ...prevState,
        profilePicture: storedImage,
      }));
    }
  }, []);

  const handleImageSelect = (image) => setSelectedImage(image);

  const handleImageUpload = () => {
    if (selectedImage) {
      setUserData((prevState) => ({
        ...prevState,
        profilePicture: selectedImage,
      }));
      localStorage.setItem("profilePicture", selectedImage);
      setIsUploadSectionVisible(false);
    } else {
      alert("Please select an image to upload.");
    }
  };

  const handleIconClick = () =>
    setIsUploadSectionVisible(!isUploadSectionVisible);

  const imageList = [
    "https://tse4.mm.bing.net/th?id=OIP.wEsBe2udHBieFeZVmus8qAHaHk&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.0fokmaFE0ehPoMTaIOgmYAHaHa&pid=Api&P=0&h=180",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ];

  const calculateExpiryDate = (startDate) => {
    const start = moment(startDate);
    const expiry = start.clone().add(1, "month");
    const daysLeft = expiry.diff(moment(), "days");
    const totalDays = expiry.diff(start, "days");
    const progressPercentage = Math.max((daysLeft / totalDays) * 100, 0);

    if (daysLeft > 30) {
      return {
        message: "Plan Expired in more than 1 month",
        progressPercentage: 0,
      };
    } else if (daysLeft > 7) {
      return {
        message: `Plan Expired in ${Math.ceil(daysLeft / 7)} week${
          daysLeft / 7 > 1 ? "s" : ""
        }`,
        progressPercentage,
      };
    } else if (daysLeft > 0) {
      return {
        message: `Plan Expired in ${daysLeft} day${daysLeft > 1 ? "s" : ""}`,
        progressPercentage,
      };
    } else {
      return { message: "Plan Expired", progressPercentage: 0 };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center " style={{minHeight:"100vh" , width:"100%"}}>
      <div className="flex flex-wrap justify-center items-start gap-5   w-full max-w-6xl ">
        {/* Profile Picture Section */}
        <div className="flex flex-col justify-center  items-center p-3 h-[300px] w-[300px]  shadow-lg rounded-full border-2 border-white relative">
          {userData.profilePicture ? (
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="w-[220px] h-[220px] object-cover rounded-full"
            />
          ) : (
            <IoPersonCircleSharp
              size={100}
              className="text-gray-500 w-[200px] h-[200px]"
            />
          )}
          <div
            onClick={handleIconClick}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 p-3 rounded-full cursor-pointer"
          >
            <FaCamera size={20} color="white" />
          </div>
          {isUploadSectionVisible && (
            <div className="absolute top-1/2 left-0 w-full bg-gray-300  p-5 mt-5 rounded-lg">
              <div className="flex flex-wrap gap-3 justify-center">
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 p-2 ${
                      selectedImage === image ? "border-2 border-blue-500" : ""
                    } cursor-pointer`}
                    onClick={() => handleImageSelect(image)}
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handleImageUpload}
                className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Upload Selected Image
              </button>
            </div>
          )}
        </div>

        {/* Subscription Progress Section */}
        <div className="flex flex-col items-center justify-center h-[300px] w-[300px]   bg-purple-600 shadow-lg rounded-lg border-2 border-white">
          <div
            className="w-full p-3 rounded-t-lg   flex items-center justify-center"
            style={{ background: "rgba(125, 23, 161, 0.3)" }}
          >
            <h1 className="text-2xl font-bold mb-12 h-[103px] flex items-center gap-2 text-white">
              <IoPersonCircleSharp size={24} className="text-white" />
              {userData.userName || "Guest"}
            </h1>
          </div>
          <div className="w-full bg-gray-200 p-8 rounded-b-lg">
            {(() => {
              const { message, progressPercentage } = calculateExpiryDate(
                userData.subscriptionDate
              );
              return (
                <>
                  <h5 className="text-customGreen mb-4">{message}</h5>
                  <div className="w-full bg-gray-300 h-[15px] rounded-full h-2.5 ">
                    <div
                      className="bg-customGreen h-3.5 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* User Information Section */}
        <div className="flex flex-col gap-5 h-[150px] w-[460px] shadow-lg rounded-lg border-2 border-white bg-purple-900">
          {/* Center Email Section */}
          <div className="flex items-center justify-center mt-10 gap-2">
            <img
              src="https://www.pngmart.com/files/23/Gmail-Logo-PNG-Transparent.png " // New Email GIF URL
              alt="Email GIF"
              className="w-12 h-10" // Adjust the size of the GIF as needed
            />
            <h5 className="font-medium text-3xl text-white">
              {userData.userEmail || "N/A"}
            </h5>
          </div>

          <div
            className="flex flex-col sm:flex-row flex-wrap gap-5 mt-[60px] text-black"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <div className="flex flex-col p-4 lg:w-[138px] sm:w-[138px] rounded-lg shadow-md border-2 border-white text-white bg-purple-900">
              <div className="flex items-center justify-center mb-3">
                <FaCalendarAlt size={24} color="white" />
              </div>
              <p className="font-semibold">Subscription Date:</p>
              <p className="overflow-hidden text-ellipsis ">
                {userData.subscriptionDate || "N/A"}
              </p>
            </div>

            <div className="flex flex-col p-4 lg:w-[138px] sm:w-[138px] rounded-lg shadow-md justify-between border-2 border-white text-white bg-purple-900">
              <div className="flex items-center justify-center mb-3">
                <FaClock size={24} color="white" />
              </div>
              <p className="font-semibold">Subscription Time:</p>
              <p className="overflow-hidden text-ellipsis">
                {userData.subscriptionTime || "N/A"}
              </p>
            </div>

            <div className="flex flex-col p-4 lg:w-[135px] sm:w-[135px] rounded-lg shadow-md justify-between border-2 border-white text-white bg-purple-900">
              <div className="flex items-center justify-center mb-3">
                <FaTags size={24} color="white" />
              </div>
              <p className="font-semibold">Subscription Type:</p>
              <p className="overflow-hidden text-ellipsis">
                {userData.subscriptionType || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
