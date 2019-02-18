import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

import Logo from './Components/Logo/Logo.jsx'
import TextBtn from '../Buttons/TextBtn/TextBtn.jsx'
import IconBtn from '../Buttons/IconBtn/IconBtn.jsx'

import './navbar.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navbar extends React.Component {
  userState() {
    const { user } = this.props

    if (user) {
      return (
        <div>
          <div>
            <Link to="/new">
              <TextBtn text="New Post" />
            </Link>
          </div>

          <div>
            <Link to="/profile">
              <IconBtn img="./images/profile.png" alt="Profile" />
            </Link>
          </div>
        </div>
      )
    }

    if (!user) {
      return (
        <Link to="/signin">
          <TextBtn text="Sign Up" />
        </Link>
      )
    }
  }

  render() {
    return (
      <div id="navbar">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {this.userState()}
      </div>
    )
  }
}
