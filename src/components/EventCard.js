import React, { useEffect } from 'react'
import "./EventCard.css"
function EventCard(props) {

    return (
       <div className="event-card">
            <h1>{props.eventName}</h1>
            <img className="picture" width="250" src={props.image} alt="Failed to load"/>
            <p>{props.eventTime}</p>
            <p>{props.eventLocation}</p>
        </div>
    )
}

export default EventCard