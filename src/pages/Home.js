import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.js";
import Navbar from "../components/navbar";
import Analytics from "../components/Analytics";
import SignUp from "../components/SignUp";

function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Analytics />
      <SignUp />
    </div>
  );
}

export default Home;
