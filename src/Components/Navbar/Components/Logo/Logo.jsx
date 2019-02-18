import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import './logo.css'

function Logo() {
  return (
    <div id="navbar-logo" className="navbar-item">
      <Link to="/"><img src="./images/logo.png" alt="Squilla" /></Link>
    </div>
  )
}

export default Logo
