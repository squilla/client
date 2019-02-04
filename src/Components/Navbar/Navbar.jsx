import React from 'react'

import Logo from './Components/Logo/Logo.jsx'
import Notification from './Components/Notification/Nofication.jsx'
import UserState from './Components/UserState/UserState.jsx'
import LogInPrompt from './Components/LogInPrompt/LogInPrompt.jsx'

export default class Navbar extends React.Component {
    checkUserState() {
        if (!this.props.currentState.loggedIn) {
            return <LogInPrompt />
        } else {
            return <UserState />
        }
    }
    
    render() {
        return (
            <div id="navbar">
                {this.checkUserState()}
            </div>
        )
    }
  }