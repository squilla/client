import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Logo from './Components/Logo/Logo.jsx'
import Navlink from './Components/Navlink/Navlink.jsx'
import Upload from './icons/upload.png'
import Comment from './icons/comment.png'
import View from './icons/view.png'
import Logoff from './icons/logoff.png'

import './navbar.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navbar extends React.Component {
  userState() {
    const { user, handleLogout } = this.props

    if (user) {
      // All of these ugly `div`s below exist for flex
      return (
        <nav>
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="vertical-menu">
            <hr />
            <div className="nav-options">
              <img className="icons" src={Upload} alt="upload" />
              <Navlink text="Upload Art" link="/get" />
            </div>
            <div className="nav-options">
              <img className="icons" src={Comment} alt="comment" />
              <Navlink text="Give Feedback" link="/give" />
            </div>
            <div className="nav-options">
              <img className="icons" src={View} alt="comment" />
              <Navlink text="View Comments" link="/" />
            </div>
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
