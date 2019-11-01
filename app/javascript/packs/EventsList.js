import React from 'react'
import Event from './Event'

const EventsList = props => (
  <div>
    {props.events.map(function(event, i){
      return(
        <Event key={i} event={event} />
      )
    })}
  </div>
)

export default EventsList
