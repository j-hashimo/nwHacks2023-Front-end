import React, { useState } from "react";
import "./EventCreationForm.css";
import axios from "axios";

function EventCreationForm() {
  const [EventName, setEventName] = useState("");
  const [EventTime, setEventTime] = useState("");
  const [EventLocation, setEventLocation] = useState("");
  const [EventDescription, setEventDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8080/api/events/add", {
      name: EventName,
      time: EventTime,
      location: EventLocation,
      description: EventDescription,
      userId: JSON.parse(localStorage.getItem("user")).userId,
    });
    console.log(response);
  };
  return (
    <div>
      <form className="EventCreationForm" onSubmit={handleSubmit}>
        <h1>Tell us more about the event you are going to</h1>
        <label htmlFor="EventName"> Enter the name of the event </label>
        <input
          type="text"
          id="EventName"
          value={EventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <h1>When will this event take place?</h1>
        <input
          type="datetime-local"
          id="EventTime"
          value={EventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
        <label htmlFor="EventTime"> Enter the time of the event </label>
        <h1>Where will this event take place?</h1>
        <label htmlFor="EventLocation">Enter the location of the event </label>
        <input
          type="text"
          id="EventLocation"
          value={EventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
        />
        <h1> Write a brief description for the event </h1>
        <label htmlFor="EventDescription"></label>
        <input
          type="text"
          id="EventDescription"
          value={EventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <label htmlFor="EventSubmitButton">Submit the event!</label>
        <h2> Press the button below to submit </h2>
        <button
          className="mt-2 bg-green-700 text-white px-5 py-3 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base hover:bg-green-600 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-700 focus:ring-opacity-50 active:bg-green-800 transform transition"
          type="submit"
          id="EventSubmitButton"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventCreationForm;
