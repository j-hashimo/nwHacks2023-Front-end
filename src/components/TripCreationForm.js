import React from 'react'

function TripCreationForm() {
  return (
    <div>
        <form className='TripCreationForm'>
            <h1> When are you departing? </h1>
            <label htmlFor='departTime'></label>
            <input type="datetime-local" id='departTime'/>
            <h1> Where is the gathering point before leaving? </h1>
            <label htmlFor='departLocation'></label>
            <input type="text" id='departLocation'/>
            <h1> How many more members are you looking for? </h1>
            <label htmlFor='emptySlots'></label>
            <input type="number" id='emptySlots'/>
            <h1> Write a brief description for the trip </h1>
            <label htmlFor='TripDescription'></label>
            <input type="text" id='TripDescription'/>
            <h2> Press the button below to submit </h2>
            <input type="submit" id='TripSubmitButton' />
        </form>
    </div>
  )
}

export default TripCreationForm