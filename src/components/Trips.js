import React from 'react'
import TripCard from './TripCard'
import "./Trips.css"
function Trips() {
  return (
    <div>
        <button className='TripCreationButton'> Create a trip plan </button>
        <ul className='TripList'>
            <li>
                <TripCard organizerName={"Frodo Baggins"} departTime={"2023-10-21"} departLocation={"Hobbiton"} slot={"8"} />
                <TripCard organizerName={"John Wick"} departTime={"2023-3-22"} departLocation={"Some where in NewYork"} slot={"0"} />
                
            </li>

        </ul>
    </div>
  )
}

export default Trips