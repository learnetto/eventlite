import React from 'react'

const EventsList = props => (
  <div>
    {props.events.map(function(e){
      return(
        <div className="event">{e.title}</div>
      )
    })}
  </div>
)

export default EventsList
