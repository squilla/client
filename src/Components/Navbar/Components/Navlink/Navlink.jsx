import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import axios from 'axios'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navlink extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { link, text, handleLogout } = this.props

    if (link === '/logout') {
      return (
        <NavLink to={link} onClick={handleLogout}>
          <p>{text}</p>
        </NavLink>
      )
    }

    return (
      <NavLink to={link}>
        <p>{text}</p>
      </NavLink>
    )
  }
}
