import React from 'react'
import Event from './Event'

const EventForm = props => (
  <div>
    <h4>Create an Event:</h4>
    <form>
      <input type="text" placeholder="Event Title" />
      <button type="submit">Create Event</button>
    </form>
  </div>
)

export default EventForm
