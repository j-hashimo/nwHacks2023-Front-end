import React, {useEffect, useState} from 'react'
import TripCard from './TripCard'
import "./Trips.css"
<<<<<<< HEAD
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
=======
import { Link } from "react-router-dom"
>>>>>>> 8314b6601e23b4f24d6281ade0407ca52f93bfd1

function Trips() {
  let { eventId } = useParams();
  const [trips, setTrips] = useState([]);
  console.log(eventId);

  useEffect(() => {
  async function fetchData() {
      const response = await axios.post('http://localhost:8080/api/events/trips', {
        eventId     
      });
      console.log(response.data.data);
      setTrips(response.data.data);
      // const data = await response.json();
    }

  fetchData() 

  }, [])


  return (
    <div>
      <Link to={`/events/${eventId}/trips/add`}>
        <button className='TripCreationButton'> Create a trip plan </button>
      </Link>
        <ul className='TripList'>
            <li>
              {trips.length > 0 ? trips.map((trip, index) => {
                return <TripCard key={index} organizerName={trip.name} departTime={trip.departTime} departLocation={trip.departLocation} slot={trip.emptySlots} />
              }): null}
                {/* <TripCard organizerName={"Frodo Baggins"} departTime={"2023-10-21"} departLocation={"Hobbiton"} slot={"8"} />
                <TripCard organizerName={"John Wick"} departTime={"2023-3-22"} departLocation={"Some where in NewYork"} slot={"0"} /> */}
                
            </li>

        </ul>
    </div>
  )
}

export default Trips