import React from 'react'
import "./TripPanel.css"
function TripPanel(props) {
  return (
    <div className='TripPanel'>
        <h1 className='TripPanelTitle'>Departure time:</h1>
        <h2 className='TripPanelText'>{props.departTime}</h2>
        <h1 className='TripPanelTitle'>Gathering location:</h1>
        <h2 className='TripPanelText'>{props.departLocation}</h2>
        <h1 className='TripPanelTitle'>Spots left:</h1>
        <h2 className='TripPanelText'>{props.emptySlots}</h2>
        <h1 className='TripPanelTitle'>Trip description:</h1>
        <h2 className='TripPanelText'>{props.tripDescription}</h2>
        <label htmlFor='tripRegistrationButton'> Press the button below to join the trip! </label>
        <input type="button" id='tripRegistrationButton'/>
    </div>
  )
}

export default TripPanel