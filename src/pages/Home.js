import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/events">
        <h1>Events</h1>
      </Link>
    </div>
  );
}

export default Home;
