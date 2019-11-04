import React from 'react'
import Event from './Event'
import axios from 'axios'

class EventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      start_datetime: '',
      location: ''
    }
  }

  handleSubmit = e => {
    axios({
      method: 'POST',
      url: '/events',
      data: { event: this.state },
      headers: {
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
      }
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
    e.preventDefault()
  }

  handleInput = e => {
    const name = e.target.name
    const newState = {}
    newState[name] = e.target.value
    this.setState(newState)
    e.preventDefault()
  }

  render () {
    return (
      <div>
        <h4>Create an Event:</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInput} />
          <input type="text" name="start_datetime" placeholder="Date" value={this.state.start_datetime} onChange={this.handleInput} />
          <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleInput} />
          <input type="submit" value="Create Event" />
        </form>
      </div>
    )
  }
}

export default EventForm
