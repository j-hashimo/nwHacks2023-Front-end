import React from "react";
import EventCard from "../components/EventCard";
import "./Events.css";
function Events() {
  return (
    <div class="container">
      <h1>Events</h1>
      <div className="events-box">

      <EventCard eventName={"nwHacks 2023"} eventTime={"2023-01-21 9:00am"} eventLocation={"UBC"} image={"https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/310/023/datas/original.png"}/>
      <EventCard eventName={"nwHacks"} eventTime={"2023-01-21 9:00am"} eventLocation={"UBC"} image={"https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/310/023/datas/original.png"}/>
      </div>
    </div>
  );
}

export default Events;
