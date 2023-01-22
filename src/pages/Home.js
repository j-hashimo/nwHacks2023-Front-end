import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.js";
function Home() {
  return (
    <div>
      <h1 className="text-4xl">JourneyShare</h1>
      <Hero />
      <Link to="/events">
        <h1>Events</h1>
      </Link>
    </div>
  );
}

export default Home;
