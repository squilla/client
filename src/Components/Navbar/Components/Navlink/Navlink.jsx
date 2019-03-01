import React from 'react'
import { BrowserRouter as Router, Route, NavLink }  from 'react-router-dom'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navlink extends React.Component {
  render() {
    const { link, text } = this.props

    return (
      <NavLink to={link}>
        <p>{text}</p>
      </NavLink>
    )
  }
}
