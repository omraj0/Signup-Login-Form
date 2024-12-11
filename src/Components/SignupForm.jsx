import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const[formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  
  const[showPassword, setShowPassword] = useState(false);
  const[showConfirmPassword, setShowConfirmPassword] = useState(false);
  const[accountType, setAccountType] = useState("student");
  
  function changeHandler(event) {
  
    setFormData( (prevData) => (
      {
        ...prevData,
        [event.target.name]:event.target.value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData
    };

    const finalData = {
      ...accountData,
      accountType
    }

    console.log("Printing Account Data");
    console.log(finalData);

    navigate("/dashboard");
  }


  return (
    <div>
      {/* Student-Instructor Tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max my-4">
        <button
          className={`${accountType === "student"
          ? "bg-richblack-900 text-richblack-5"
          : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}>
            Student
        </button>
        <button
          className={`${accountType === "instructor"
            ? "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}>
            Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 my-5">
          
          <label htmlFor='' className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        
        </div>


        <label htmlFor="" className="w-full my-5">
          <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup  className="text-pink-200">*</sup></p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Id"
            value={formData.email}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />
        </label>

        {/* Create and Confirm password */}
        <div className="flex gap-x-4 my-5">
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />

            <span onClick={() => (
              setShowPassword((prev) => !prev))}
              className="absolute right-3 top-[38px] cursor-pointer z-10"    
            >
              {showPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)}
            </span>

          </label>

          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
            <input
              required
              type={showConfirmPassword ? ("text") : ("password")}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />

            <span onClick={() => (
              setShowConfirmPassword((prev) => !prev))}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
              {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)}
            </span>

          </label>
        </div>
        
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>

      </form>

    </div>
  )
}

export default SignupForm
