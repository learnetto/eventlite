import React from 'react'
import PropTypes from 'prop-types'

const formatDate = datetime =>
  new Date(datetime).toDateString()

const Event = props => (
  <div className="event">
    <h2 className="event-title">{props.event.title}</h2>
    <div className="event-datetime">{formatDate(props.event.start_datetime)}</div>
    <div className="event-location">{props.event.location}</div>
  </div>
)

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    start_datetime: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  })
}

export default Event
