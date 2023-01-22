import React from 'react'
import TripCard from './TripCard'
import "./Trips.css"
import { Link } from "react-router-dom"

function Trips() {
  return (
    <div>
        <button className='TripCreationButton'> Create a trip plan </button>
        <ul className='TripList'>
            <li>
                <Link to="/events/1/trips/1">
                    <TripCard departTime={"2023-10-21"} departLocation={"Hobbiton"} emptySlot={"8"} tripDescription={"Cozy wagon ride"}/>
                </Link>
                <Link to="/events/1/trips/2">
                    <TripCard departTime={"2023-3-22"} departLocation={"Some where in NewYork"} emptySlot={"0"} tripDescription={"Dog partner only"}/>
                </Link>
            </li>

        </ul>
    </div>
  )
}

export default Trips