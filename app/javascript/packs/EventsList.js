import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'

const EventsList = props => (
  <div>
    {props.events.map(function(event){
      return(
        <Event key={event.id} event={event} />
      )
    })}
  </div>
)

EventsList.propTypes = {
  events: PropTypes.array.isRequired
}

export default EventsList
