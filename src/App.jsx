import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import './App.css'

import Routes from './Routes/Routes.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      displayLogin: true,
      displayLanding: null,
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.loginControl = this.loginControl.bind(this)
    this.landingControl = this.landingControl.bind(this)
    this.landingControlState = this.landingControlState.bind(this)
  }

  componentDidMount() {
    document.title = 'Squilla'
  }

  handleLogin(userData) {
    this.setState({
      user: userData.data,
    })
  }

  handleLogout() {
    axios.get('/api/auth/sign-out')
      .catch(err => new Error(err))

    this.setState({
      user: undefined,
    })
  }

  loginControl(value) {
    this.setState({
      displayLogin: value,
    })
  }

  landingControlState(value) {
    this.setState({
      displayLanding: value,
    })
  }

  landingControl() {
    const { user, displayLanding } = this.state

    if (displayLanding === true) {
      console.log(displayLanding)
      return null
    }

    return <Navbar user={user} handleLogout={this.handleLogout} loginControl={this.loginControl} />
  }

  render() {
    const { user, displayLogin } = this.state

    return (
      <div className="App">
        <Router>
          <div>
            {this.landingControl()}
            <Routes
              user={user}
              handleLogin={this.handleLogin}
              display={displayLogin}
              landingControlState={this.landingControlState}
            />
          </div>
        </Router>
      </div>
    )
  }
}
