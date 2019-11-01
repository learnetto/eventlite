import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Eventlite = props => (
  <div>
    {props.events.map(function(e){
      return(
        <div className="event">{e.title}</div>
      )
    })}
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('events_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Eventlite events={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})
