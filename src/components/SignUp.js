import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="bg-black mt-6 pb-10">
      <div className="flex-col text-white">
        <h1 className="font-semibold text-2xl mt-8 mb-2 pt-8">
          Ready to carpool? Click below to Sign Up!
        </h1>
        <Link to="/signupform">
          <button className="mt-2 bg-green-700 text-white px-5 py-3 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base hover:bg-green-600 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-700 focus:ring-opacity-50 active:bg-green-800 transform transition">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
