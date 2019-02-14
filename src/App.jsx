import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'
import Routes from './Routes/Routes.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount() {
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
