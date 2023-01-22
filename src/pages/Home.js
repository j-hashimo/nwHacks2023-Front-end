import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.js";
import Navbar from "../components/navbar";
function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl mt-4">CarpoolPal</h1>
      <Hero />
      <Link to="/events">
        <h1>Events</h1>
      </Link>
    </div>
  );
}

export default Home;
