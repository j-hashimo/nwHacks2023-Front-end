import React from 'react'
import "./EventCreationForm.css"
function EventCreationForm() {
  return (
    <div >
        <form className='EventCreationForm'>
            <h1>Tell us more about the event you are going to</h1>
            <label htmlFor='EventName'> Enter the name of the event </label>
            <input type="text" id='EventName' />
            <h1>When will this event take place?</h1>
            <input type="datetime-local" id='EventTime' /> 
            <label htmlFor='EventTime'> Enter the time of the event </label>
            <h1>Where will this event take place?</h1>
            <label htmlFor='EventSubmitButton'>Enter the location of the event </label>
            <input type="text" id='EventLocation' /> 
            <h1> Write a brief description for the event </h1>
            <label htmlFor='EventDescription'></label>
            <input type="text" id='EventDescription'/>
            <label htmlFor='EventSubmitButton'>Submit the event!</label>
            <h2> Press the button below to submit </h2>
            <input type="submit" id='EventSubmitButton' />
        </form>
    </div>
  )
}

export default EventCreationForm