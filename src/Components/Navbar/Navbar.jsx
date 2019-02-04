import React from 'react'

export default class Navbar extends React.Component {
    render() {
        let userState = this.props.currentState.loggedIn ? 'ya' : 'na'
        return (
            <div><p>{userState}</p></div>
        )
    }
  }