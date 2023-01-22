import React from 'react'
import "./TripPanel.css"
function TripPanel(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='TripPanelContainer'>
      <form className='TripPanel' onSubmit={handleSubmit}>
        <h1 className='TripPanelTitle'>Departure time:</h1>
        <h2 className='TripPanelText'>{props.departTime}</h2>
        <h1 className='TripPanelTitle'>Gathering location:</h1>
        <h2 className='TripPanelText'>{props.departLocation}</h2>
        <h1 className='TripPanelTitle'>Spots left:</h1>
        <h2 className='TripPanelText'>{props.emptySlot}</h2>
        <h1 className='TripPanelTitle'>Trip description:</h1>
        <h2 className='TripPanelText'>{props.tripDescription}</h2>
        <label htmlFor='TripRegistrationButton'> Press the button below to join the trip! </label>
        <input type="submit" id='TripRegistrationButton'/>
      </form>
    </div>
  )
}

export default TripPanel