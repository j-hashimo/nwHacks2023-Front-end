import React from 'react'
import "./TripCard.css"

function TripCard(props) {
  return (
    <div className='TripCard'>
        <p className='TripCardInfo'>{props.departTime}</p>
        <p className='TripCardInfo'>{props.departLocation}</p>
        <p className='TripCardInfo'>{props.emptySlot}</p>
    </div>
  )
}

export default TripCard