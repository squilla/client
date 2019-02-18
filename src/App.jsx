import React from 'react'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    document.title = 'Squilla'
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
