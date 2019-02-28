import React from 'react'
import axios from 'axios'

import InputText from '../../../../Components/Input/InputText.jsx'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      enteredUsername: '',
      enteredPassword: '',
      enteredFirstName: '',
      enteredLastName: '',
      isArtist: false,
    }

    this.usernameStateHandler = this.usernameStateHandler.bind(this)
    this.passwordStateHandler = this.passwordStateHandler.bind(this)
    this.firstNameStateHandler = this.firstNameStateHandler.bind(this)
    this.lastNameStateHandler = this.lastNameStateHandler.bind(this)
    this.radioChangeHandler = this.radioChangeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  usernameStateHandler(event) {
    this.setState({
      enteredUsername: event.target.value,
    })
  }

  passwordStateHandler(event) {
    this.setState({
      enteredPassword: event.target.value,
    })
  }

  firstNameStateHandler(event) {
    this.setState({
      enteredFirstName: event.target.value,
    })
  }

  lastNameStateHandler(event) {
    this.setState({
      enteredLastName: event.target.value,
    })
  }

  radioSetState(newState) {
    this.setState({
      isArtist: newState,
    })
  }

  radioChangeHandler() {
    const { isArtist } = this.state

    if (isArtist === false) {
      const newState = true
      this.radioSetState(newState)
    }

    if (isArtist === true) {
      const newState = false
      this.radioSetState(newState)
    }
  }

  handleSubmit(e) {
    const {
      enteredUsername: email,
      enteredPassword: password,
      enteredFirstName: firstName,
      enteredLastName: lastName,
      isArtist,
    } = this.state

    e.preventDefault()
    axios.post('/api/auth/sign-up', {
      firstName, lastName, email, password, isArtist,
    }).then((response) => {
      // TODO: Move the page forward if 200
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    const {
      enteredUsername,
      enteredPassword,
      enteredFirstName,
      enteredLastName,
      isArtist,
    } = this.state

    return (
      <div id="signup-form">
        <form action="/api/auth/sign-up" method="post">
          {/* Username Input */}
          <InputText
            divId="username-input"
            labelText="Username"
            type="text"
            placeholder="jen@email.com"
            name="username"
            stateText={enteredUsername}
            onChange={this.usernameStateHandler}
          />

          {/* Password Input */}
          <InputText
            divId="password-input"
            labelText="Password"
            type="password"
            placeholder="password"
            name="password"
            stateText={enteredPassword}
            onChange={this.passwordStateHandler}
          />

          {/* First Name Input */}
          <InputText
            divId="first-name-input"
            labelText="First Name"
            type="text"
            placeholder="Dan"
            name="fname"
            stateText={enteredFirstName}
            onChange={this.firstNameStateHandler}
          />

          {/* Last Name Input */}
          <InputText
            divId="last-name-input"
            labelText="Last Name"
            type="text"
            placeholder="Morse"
            name="lname"
            stateText={enteredLastName}
            onChange={this.lastNameStateHandler}
          />

          <div>
            <legend>Artist account?</legend>

            <label htmlFor="artist">
              Yes
              <input
                type="radio"
                id="artist"
                name="account-type"
                value={isArtist}
                onChange={this.radioChangeHandler}
              />
            </label>
          </div>

          <button
            type="submit"
            onClick={this.handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}
