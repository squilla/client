/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navlink from './Components/Navlink/Navlink.jsx'
import Logoff from './icons/logoff.png'
import Color1 from './icons/color1.png'
import Color2 from './icons/color2.png'
import Color3 from './icons/color3.png'

import './navbar.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.signInController = this.signInController.bind(this)
    this.logInController = this.logInController.bind(this)

  }

  signInController() {
    const { loginControl } = this.props

    loginControl(false)
  }

  logInController() {
    const { loginControl } = this.props

    loginControl(true)
  }

  userState() {
    const { user, handleLogout } = this.props

    if (user) {
      return (
        <nav>
          <div className="new-user-nav">
            <hr />
            <div className="nav-options">
              <img className="icons" src={Color1} alt="upload" />
              <Navlink text="Upload Art" link="/get" />
            </div>
            <hr />
            <div className="nav-options">
              <img className="icons" src={Color2} alt="comment" />
              <Navlink text="Give Feedback" link="/give" />
            </div>
            <hr />
            <div className="nav-options">
              <img className="icons" src={Color3} alt="comment" />
              <Navlink text="View Comments" link="/" />
            </div>
            <hr />
            <div className="nav-options">
              <img className="icons" src={Logoff} alt="logoff" />
              <Navlink
                text="Logout"
                link="/logout"
                handleLogout={handleLogout}
              />
            </div>
            <hr />
          </div>
        </nav>
      );
    }

    if (!user) {
      return (
        <header>
          <nav>
            <div className="new-user-nav">
              <div>
                <img src={Color1} alt="icon" />
                <Navlink text="Squilla" link="/" />
                <hr />
              </div>
              <div onClick={this.signInController}>
                <img src={Color2} alt="icon" />
                <Navlink text="Sign-Up" link="/signin" />
                <hr />
              </div>
              <div onClick={this.logInController}>
                <img src={Color3} alt="icon" />
                <Navlink text="Login" link="/signin" />
                <hr />
              </div>
            </div>
          </nav>
        </header>
      );
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
