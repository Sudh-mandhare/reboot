import React, { useState } from "react";
import logo from "../assets/vnit_logo.webp";
import Hod from "../hodDesk/hod";
import Dean from "../DeanDesk/dean";
import Director from"../directorDesk/director"

// Define different components for different roles


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState(null);

  const handleSignIn = () => {
    // Simple validation for demonstration
    if (email === "profvnit@gmail.com" && password === "12345678") {
      // Simulating a successful login
      setUserRole("prof");
    } else if (email === "hodvnit@gmail.com" && password === "12345678") {
      setUserRole("hod");
    } else if (email === "deanvnit@gmail.com" && password === "12345678") {
      setUserRole("dean");
    } else if (email === "directorvnit@gmail.com" && password === "12345678") {
      setUserRole("director");
    } else {
      setError("Invalid email or password");
    }
  };

  // Conditionally render different components based on user role
  const renderDashboard = () => {
    switch (userRole) {
      case "prof":
      
      case "hod":
        return <Hod/>;
      case "dean":
        return <Dean />;
      case "director":
        return <Director/>
      default:
        return (
          
          <div className='flex border-2 rounded-2xl p-5 overflow-hidden m-5'>
            <div className=' w-1/2 px-10 py-14 bg-white border-r-2 '>
              <h1 className='text-5xl font-semibold'>
                <span className='text-[#3F8DF8]'>Welcome</span> VNIT{" "}
              </h1>
              <p className='text-lg font-medium text-gray-500 mt-4'>
                Sign in to your account
              </p>
              <div className='mt-8'>
                <div>
                  <label className='text-lg font-medium'>Email</label>
                  <input
                    className='mt-1 w-full p-4 border-2 border-gray-200 rounded-xl'
                    type='text'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mt-2'>
                  <label className='text-lg font-medium'>Password</label>
                  <input
                    className='mt-1 w-full p-4 border-2 border-gray-200 rounded-xl'
                    type='password'
                    placeholder='••••••••'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className='text-red-500 mt-2'>{error}</p>}
                <div className='mt-8 flex items-center justify-between'>
                  <div></div>
                  <button
                    onClick={handleSignIn}
                    className='bg-[#3F8DF8] text-white rounded-xl text-lg font-semibold py-2 active:scale-[0.98] hover:scale-[1.01] ease-in-out transition-all active:duration-75'
                  >
                    Sign In
                  </button>
                </div>
                <div className='flex justify-center items-center mt-8'>
                  <p className='font-medium text-base'>Don't have an account?</p>
                  
                    <button className='font-medium text-[#027DFF] text-base ml-2 hover:underline'>
                      Sign up
                    </button>
                  
                </div>
              </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <img src={logo} alt="VNIT Logo" />
            </div>
          </div>
        );
    }
  };

  return <div>{renderDashboard()}</div>;
};

export default LoginPage;
