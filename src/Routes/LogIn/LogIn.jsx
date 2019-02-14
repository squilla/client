import React from 'react'

import LogInForm from './Components/LogInForm/LogInForm.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx';

export default class LogIn extends React.Component {
  render() {
    return (
      <div id="log-in-scene">
        <Navbar state={this.props.state.user} />
        <LogInForm />
      </div>
    )
  }
}