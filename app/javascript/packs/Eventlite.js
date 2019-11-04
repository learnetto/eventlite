import React from 'react'
import ReactDOM from 'react-dom'

import EventsList from './EventsList'
import EventForm from './EventForm'

class Eventlite extends React.Component {
  render() {
    return (
      <div>
        <EventForm />
        <EventsList events={this.props.events} />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('events_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Eventlite events={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})
