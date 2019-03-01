import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Logo from './Components/Logo/Logo.jsx'
import Navlink from './Components/Navlink/Navlink.jsx'

import './navbar.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navbar extends React.Component {
  userState() {
    const { user } = this.props

    if (user) {
      // All of these ugly `div`s below exist for flex
      return (
        <div id="navbar-links-container">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div id="navbar-feedback-section-container">
            <div>
              <p>FEEDBACK:</p>
            </div>
            <div>
              <Navlink text="GET" link="/get" />
            </div>
            <div>
              <Navlink text="GIVE" link="/give" />
            </div>
            <div>
              <Navlink text="VIEW" link="/" />
            </div>
          </div>
          <div>
            <Navlink text="Logout" link="/logout" />
          </div>
        </div>
      )
    }

    if (!user) {
      return (
        <div id="navbar-links-container">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div>
            <Navlink text="Get Started" link="/signin" />
          </div>
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
