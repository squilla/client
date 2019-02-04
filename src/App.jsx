import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
  }

  componentDidMount(){
    document.title = "Squilla"
  }


  render() {
    return (
      <div className="App">
        <Navbar currentState={this.state} />
      </div>
    )
  }
}
