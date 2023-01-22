import React, { useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function TripCreationForm() {
  const [ departTime, setDepartTime ] = useState("")
  const [ departLocation, setDepartLocation ] = useState("")
  const [ emptySlots, setEmptySlots ] = useState("")
  const [ tripDescription, setTripDescription ] = useState("")
  const { eventId } = useParams();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post('http://localhost:8080/api/events/trips/add', {
      tripDescription,
      departLocation,
      departTime,
      emptySlots,
      eventId
    });
    console.log(response);
  }
  return (
    <div>
        <form className='TripCreationForm' onSubmit={handleSubmit}>
            <h1>Time of your trip?</h1>
            <label htmlFor='departTime'></label>
            <input type="datetime-local" id='departTime' value={departTime} onChange={(e) => setDepartTime(e.target.value)}/>
            <h1> Where is the gathering point before leaving? </h1>
            <label htmlFor='departLocation'></label>
            <input type="text" id='departLocation' value={departLocation} onChange={(e) => setDepartLocation(e.target.value)}/>
            <h1>How many more members are you looking for?</h1>
            <label htmlFor='emptySlots'></label>
            <input type="number" id='emptySlots' value={emptySlots} onChange={(e) => setEmptySlots(e.target.value)}/>
            <h1>Write a brief description for the trip </h1>
            <label htmlFor='TripDescription'></label>
            <input type="text" id='TripDescription' value={tripDescription} onChange={(e) => setTripDescription(e.target.value)}/>
            <h2> Press the button below to submit </h2>
            <input type="submit" id='TripSubmitButton' />
        </form>
    </div>
  )
}

export default TripCreationForm