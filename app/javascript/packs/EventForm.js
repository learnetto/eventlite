import React from 'react'

const EventForm = (props) => (
  <div>
    <h4>Create an Event:</h4>
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={props.title} onChange={props.handleInput} />
      <input type="text" name="start_datetime" placeholder="Date" value={props.start_datetime} onChange={props.handleInput} />
      <input type="text" name="location" placeholder="Location" value={props.location} onChange={props.handleInput} />
      <input type="submit" value="Create Event"
       disabled={!props.formValid} />
    </form>
  </div>
)

export default EventForm
