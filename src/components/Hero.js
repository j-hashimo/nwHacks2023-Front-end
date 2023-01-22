import React from "react";
import carImage from "../images/car.jpg";
import "../App.css";

function Hero() {
  return (
    <div className="my-1 bg-image bg-cover  py-40 px-5">
      <div className="flex flex-col text-white drop-shadow-xl ">
        <h1 className="text-4xl text-white font-semibold ">
          Ride together. Make memories.
        </h1>
        <p className="text-white text-2xl mt-4 font-semibold">
          Introducing CarpoolPal.
        </p>
      </div>
    </div>
  );
}

export default Hero;
