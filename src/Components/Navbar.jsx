import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast";

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-8/12 max-w-[1160px] py-8 mx-auto">

      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading='lazy' />
      </Link>

      <div className="flex items-center gap-x-6 text-richblack-100">
        { !isLoggedIn &&
          <Link to="/login">
            <button className="bg-yellow-50 py-[8px] px-[16px] rounded-[8px] border border-richblack-700 font-bold text-richblack-800">
              Login
            </button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup">
            <button className="bg-yellow-50 py-[8px] px-[16px] rounded-[8px] border border-richblack-700 font-bold text-richblack-800">
              Sign Up
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}>
              Log Out
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        }
      </div>      

    </div>
  )
}

export default Navbar