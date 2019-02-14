import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Logo from './Components/Logo/Logo.jsx'
import TextBtn from '../Buttons/TextBtn/TextBtn.jsx'
import IconBtn from '../Buttons/IconBtn/IconBtn.jsx'

import './navbar.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  userState() {
    const { user } = this.props
    if (user) {
      return (
        <Link to="/profile">
          <TextBtn text="Profile" />
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

        <div>
          <Link to="/new">
            <TextBtn text="New Post" />
          </Link>
        </div>
        
        {this.userState()}
      </div>
    )
  }
}