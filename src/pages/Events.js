import React from "react";
import EventCard from "../components/EventCard";
import "./Events.css";
import { Link } from "react-router-dom";
function Events() {
  return (
    <div class="container">
      <h1>Events</h1>
      <div className="events-box">
      <Link to="/events/1/trips">
        <EventCard eventName={"nwHacks 2023"} eventTime={"2023-01-21 9:00am"} eventLocation={"UBC"} image={"https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/310/023/datas/original.png"}/>
      </Link>
      <EventCard eventName={"BeaverHacks"} eventTime={"2023-01-11 11:11am"} eventLocation={"Stanley Park"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg"}/>
      </div>
    </div>
  );
}

export default Events;
