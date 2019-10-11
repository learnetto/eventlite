import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Eventlite = props => (
  <div>Welcome to Eventlite</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Eventlite />,
    document.body.appendChild(document.createElement('div')),
  )
})
