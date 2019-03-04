import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import './logo.css'
import logo from './squilla-logo.png'


function Logo() {
  return (
    <div id="navbar-logo">
      <Link to="/">
        <img src={logo} alt="Squilla" />
      </Link>
    </div>
  );
}

export default Logo
