import React, { useEffect } from "react";
import "./EventCard.css";
import { Link } from "react-router-dom";

function EventCard(props) {
  return (
    <Link to={`/events/${props.eventId}/trips`}>
      <div className="event-card">
        <h1 className="text-white  font-semibold py-2">{props.eventName}</h1>
        <img
          className="picture rounded-sm"
          width="250"
          src={props.image}
          alt="Failed to load"
        />
        <p className="text-white  font-semibold py-1">{props.eventTime}</p>
        <p className="text-white  font-semibold py-1">{props.eventLocation}</p>
      </div>
    </Link>
  );
}

export default EventCard;
