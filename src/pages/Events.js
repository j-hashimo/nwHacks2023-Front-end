import React, { useEffect } from "react";
import EventCard from "../components/EventCard";
import "./Events.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Events() {
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const userId = JSON.parse(localStorage.getItem("user")).userId;
      console.log(userId);

      const response = await axios.post("http://localhost:8080/api/events", {
        userId,
      });
      console.log(response.data.data);
      setEvents(response.data.data);
      // const data = await response.json();
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-white font-semibold text-3xl">Events</h1>
      <div>
        <Link to="/add">
          <h1 className="text-white font-semibold text-xl mb-5">
            Create an event:
          </h1>
        </Link>
      </div>

      <div className="events-box md:grid-cols-2 lg:grid-cols-3 gap-2">
        {events.length > 0
          ? events.map((event, index) => {
              return (
                <EventCard
                  key={index}
                  eventName={event.name}
                  eventTime={event.time}
                  eventLocation={event.location}
                  image={"https://picsum.photos/200/300"}
                  eventId={event.id}
                />
              );
            })
          : null}
        {/* <EventCard eventName={"nwHacks 2023"} eventTime={"2023-01-21 9:00am"} eventLocation={"UBC"} image={"https://picsum.photos/200/300"}/>
      <EventCard eventName={"nwHacks"} eventTime={"2023-01-21 9:00am"} eventLocation={"UBC"} image={"https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/310/023/datas/original.png"}/> */}
      </div>
    </div>
  );
}

export default Events;
