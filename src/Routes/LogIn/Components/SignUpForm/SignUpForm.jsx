import React from 'react'
import axios from 'axios'
import './SignUp.css'
import Artist from './artist.jpg'

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
      <div className="limiter">
        <div className="signup-container">
          <div className=" p-top signup-img flex-child-1">
            <img src={Artist} alt="artist" />
          </div>
          <div className="flex-child wrap-signup p-right p-left p-bottom p-top">
            <form
              className="signup-form"
              action="/api/auth/sign-up"
              method="post"
            >
              <span className="signup-form-title">Sign Up</span>
              {/* Username Input */}
              <div className="wrap-input grey-btm">
                <span className="label-input">User Name</span>
                <InputText
                  className="input-100"
                  divId="username-input"
                  type="text"
                  placeholder="your@email.com"
                  name="username"
                  stateText={enteredUsername}
                  onChange={this.usernameStateHandler}
                />
              </div>

              {/* Password Input */}
              <div className="wrap-input grey-btm">
                <span className="label-input">Password</span>
                <InputText
                  className="input-100"
                  divId="password-input"
                  type="password"
                  placeholder="password"
                  name="password"
                  stateText={enteredPassword}
                  onChange={this.passwordStateHandler}
                />
              </div>

              {/* First Name Input */}
              <div className="wrap-input grey-btm input-100">
                <span className="label-input">First Name</span>
                <InputText
                  className="input-100"
                  divId="first-name-input"
                  type="text"
                  placeholder="First"
                  name="fname"
                  stateText={enteredFirstName}
                  onChange={this.firstNameStateHandler}
                />
              </div>

              <div className="wrap-input grey-btm">
                <span className="label-input">Last Name</span>
                {/* Last Name Input */}
                <InputText
                  className="input-100"
                  divId="last-name-input"
                  type="text"
                  placeholder="Last"
                  name="lname"
                  stateText={enteredLastName}
                  onChange={this.lastNameStateHandler}
                />
              </div>

              <div className="wrap-input">
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

              <button className="button2" type="submit" onClick={this.handleSubmit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
