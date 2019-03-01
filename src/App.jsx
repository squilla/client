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
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
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
    axios.get('/api/auth/sign-out').then(res => console.log(res).catch(err => console.log(err)))

    this.setState({
      user: undefined,
    })
  }

  render() {
    const { user } = this.state

    return (
      <div className="App">
        <Router>
          <div>
            <Navbar user={user} handleLogout={this.handleLogout} />
            <Routes user={user} handleLogin={this.handleLogin} />
          </div>
        </Router>
      </div>
    )
  }
}
