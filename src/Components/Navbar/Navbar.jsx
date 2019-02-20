import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
            <TextBtn text="New Post" link="/new" />
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
      return <TextBtn text="Sign In" link="/signin" />
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
