import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Logo from './Components/Logo/Logo.jsx'
import Navlink from './Components/Navlink/Navlink.jsx'

import './navbar.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navbar extends React.Component {
  userState() {
    const { user, handleLogout } = this.props

    if (user) {
      // All of these ugly `div`s below exist for flex
      return (
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="menu">
            <div>
              <Navlink text="Get Feedback" link="/get" />
            </div>
            <div>
              <Navlink text="Give Feedback" link="/give" />
            </div>
            <div>
              <Navlink text="View Feedback" link="/" />
            </div>
            <div>
              <Navlink text="Logout" link="/logout" handleLogout={handleLogout} />
            </div>
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
