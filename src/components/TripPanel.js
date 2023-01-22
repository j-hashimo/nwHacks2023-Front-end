import React, { useEffect, useState } from 'react'
import "./TripPanel.css"
import {useParams} from 'react-router-dom'
import axios from 'axios'


function TripPanel(props) {
  let { tripId } = useParams();
  const [trip, setTrip] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await axios.post('http://localhost:8080/api/events/trips/single', {
        tripId     
      });
      console.log(response.data.data);
      setTrip(response.data.data);
      // const data = await response.json();
    }

    fetchData()


  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='TripPanelContainer'>
      <form className='tripPanel-box' onSubmit={handleSubmit} >
        <div>
          <p className='TripPanelTitle'>Departure time:</p>
          <p className='TripPanelText'>{trip.departTime}</p>
        </div>
        <div>
          <p className='TripPanelTitle'>Gathering location:</p>
          <p className='TripPanelText'>{trip.departLocation}</p>
        </div>
        <div>
          <p className='TripPanelTitle'>Spots left:</p>
          <p className='TripPanelText'>{trip.emptySlots}</p>
        </div>
        <div>
          <p className='TripPanelTitle'>Trip description:</p>
          <p className='TripPanelText'>{trip.tripDescription}</p>
        </div>
        <div className="btn-box">
          <label htmlFor='TripRegistrationButton'> Press the button below to join the trip! </label>
          <input type="submit" id='TripRegistrationButton'/>
        </div>
      </form>
    </div>
  )
}

export default TripPanel