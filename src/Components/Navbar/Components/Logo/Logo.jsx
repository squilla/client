import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import './logo.css'

function Logo() {
  return (
    <div id="navbar-logo" className="navbar">
      <Link to="/">
        <img src="" alt="Squilla" />
      </Link>
    </div>
  );
}

export default Logo
