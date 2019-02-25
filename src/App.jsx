import React from 'react'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

const fetch = require('node-fetch')

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    document.title = 'Squilla'

    fetch('/api').then((res) => {
      return res.json()
    }).then((json) => {
      console.log(json)
    }).catch((err) => {
      // Handle errors
      console.log(err.message)
    })
  }

  render() {
    const { user } = this.state

    return (
      <div className="App">
        <Router>
          <div>
            <Navbar user={user} />


            <Routes user={user} />
          </div>
        </Router>
      </div>
    )
  }
}
