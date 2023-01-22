import React, {useState} from 'react'
import "./EventCreationForm.css"
function EventCreationForm() {
  const [ EventName, setEventName ] = useState("")
  const [ EventTime, setEventTime ] = useState("")
  const [ EventLocation, setEventLocation ] = useState("")
  const [ EventDescription, setEventDescription ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <div >
        <form className='EventCreationForm' onSubmit={handleSubmit}>
            <h1>Tell us more about the event you are going to</h1>
            <label htmlFor='EventName'> Enter the name of the event </label>
            <input type="text" id='EventName' value={EventName} onChange={(e) => setEventName(e.target.value)}/>
            <h1>When will this event take place?</h1>
            <input type="datetime-local" id='EventTime' value={EventTime} onChange={(e) => setEventTime(e.target.value)}/> 
            <label htmlFor='EventTime'> Enter the time of the event </label>
            <h1>Where will this event take place?</h1>
            <label htmlFor='EventLocation'>Enter the location of the event </label>
            <input type="text" id='EventLocation' value={EventLocation} onChange={(e) => setEventLocation(e.target.value)}/> 
            <h1> Write a brief description for the event </h1>
            <label htmlFor='EventDescription'></label>
            <input type="text" id='EventDescription' value={EventDescription} onChange={(e) => setEventDescription(e.target.value)}/>
            <label htmlFor='EventSubmitButton'>Submit the event!</label>
            <h2> Press the button below to submit </h2>
            <input type="submit" id='EventSubmitButton' />
        </form>
    </div>
  )
}

export default EventCreationForm