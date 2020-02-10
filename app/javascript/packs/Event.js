import React from 'react'

const formatDate = datetime =>
  new Date(datetime).toDateString()

const Event = props => (
  <div className="event">
    <h2 className="event-title">{props.event.title}</h2>
    <div className="event-datetime">{formatDate(props.event.start_datetime)}</div>
    <div className="event-location">{props.event.location}</div>
  </div>
)

export default Event
