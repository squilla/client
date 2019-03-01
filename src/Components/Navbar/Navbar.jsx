import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Logo from './Components/Logo/Logo.jsx'
import TextBtn from '../Buttons/TextBtn/TextBtn.jsx'

import './navbar.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navbar extends React.Component {
  userState() {
    const { user } = this.props

    if (user) {
      return (
        <div id="navbar-links-container">
          <Link to="/">
            <Logo />
          </Link>
          <p>FEEDBACK</p>
          <TextBtn text="GET" link="/get" />
          <TextBtn text="GIVE" link="/give" />
          <TextBtn text="VIEW" link="/" />
          <TextBtn text="Logout" link="/logout" />
        </div>
      )
    }

    if (!user) {
      return (
        <div id="navbar-links-container">
          <Link to="/">
            <Logo />
          </Link>

          <TextBtn text="Get Started" link="/signin" />
        </div>
      )
    }
  }

  render() {
    return (
      <div id="navbar">
        {this.userState()}
      </div>
    )
  }
}
