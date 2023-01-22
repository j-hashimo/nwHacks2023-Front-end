import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.js";
import Navbar from "../components/navbar";
import Analytics from "../components/Analytics";
function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Analytics />
    </div>
  );
}

export default Home;
