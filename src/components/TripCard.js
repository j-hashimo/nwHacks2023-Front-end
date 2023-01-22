import React from 'react'
import "./TripCard.css"

function TripCard(props) {
  return (
    <div className='TripCard'>
        <h1 className='TripCardInfo'>{props.organizerName}</h1>
        <p className='TripCardInfo'>{props.departTime}</p>
        <p className='TripCardInfo'>{props.departLocation}</p>
        <p className='TripCardInfo'>{props.slot}</p>
    </div>
  )
}

export default TripCard