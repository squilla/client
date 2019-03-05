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
      user: undefined,
      displayLogin: true,
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.loginControl = this.loginControl.bind(this)
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

  render() {
    const { user, displayLogin } = this.state

    return (
      <div className="App">
        <Router>
          <div>
            <Navbar user={user} handleLogout={this.handleLogout} loginControl={this.loginControl} />
            <Routes user={user} handleLogin={this.handleLogin} display={displayLogin} />
          </div>
        </Router>
      </div>
    )
  }
}
