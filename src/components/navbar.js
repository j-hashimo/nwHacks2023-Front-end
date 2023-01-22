import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const handleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div className="flex justify-between text-white items-center h-24 w-full mx-auto px-4 shadow-md sticky top-0 bg-gradient-to-r from-green-500 to-green-600 border-b border-gray-300 z-50">
      <h1>Image</h1>
      <h1>CarpoolPal</h1>

      <ul className="hidden md:flex justify-center text-center">
        <Link to="/events">
          <li className="px-4 cursor-pointer">Find Events</li>
        </Link>
        <li className="px-4 cursor-pointer">Find Rides</li>
      </ul>
      <div className="hidden md:flex justify-center text-center">
        <Link to="/LoginForm">
          <h1 className="px-4 cursor-pointer">Log In</h1>
        </Link>
        <Link to="/signupform">
          <h1 className="px-4 cursor-pointer">Sign Up</h1>
        </Link>
      </div>

      <div onClick={handleNavBar} className="block md:hidden">
        {navBar ? (
          <AiOutlineClose className="text-3xl" />
        ) : (
          <AiOutlineMenu className="text-3xl" />
        )}
      </div>
      <div
        className={
          navBar
            ? "fixed w-full left-0 top-0 items-center text-center h-[32] text-black bg-white mt-24  md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <Link to="/events">
            <li className="px-4 py-4 cursor-pointer border-b">Find Events</li>
          </Link>
          <li className="px-4 py-4 cursor-pointer border-b">Find Rides</li>
          <li className="px-4 py-4 cursor-pointer border-b">Log In</li>
          <li className="px-4 py-4 cursor-pointer border-b">Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
