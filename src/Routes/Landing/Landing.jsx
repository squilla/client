import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './landing.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Landing extends React.Component {
  componentWillMount() {
    const { landingControlState } = this.props

    landingControlState(true)
  }

  componentWillUnmount() {
    const { landingControlState } = this.props

    landingControlState(false)
  }

  render() {
    return (
      <div id="body">
        <div className="header">
          <h1>Squilla</h1>
        </div> 
        <div className="cta-btn">
          <Link to="/signin">
            <button type="button">
                Enter
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
