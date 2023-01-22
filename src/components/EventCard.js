import React, { useEffect } from 'react'
import "./EventCard.css"
import {Link} from "react-router-dom";

 

function EventCard(props) {

    return (
        <Link to={`/events/${props.eventId}/trips`}>
            <div className="event-card">
                <h1>{props.eventName}</h1>
                <img className="picture" width="250" src={props.image} alt="Failed to load"/>
                <p>{props.eventTime}</p>
                <p>{props.eventLocation}</p>
            </div>
        </Link>
    )
}

export default EventCard