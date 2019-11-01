import React from 'react'

const EventsList = props => (
  <div>
    {props.events.map(function(e, i){
      return(
        <div key ={i} className="event">{e.title}</div>
      )
    })}
  </div>
)

export default EventsList
