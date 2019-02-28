import React from 'react'
import axios from 'axios'

import InputText from '../../../../Components/Input/InputText.jsx'
import './loginform.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class LogIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      enteredUsername: '',
      enteredPassword: '',

      incorrect: false,
      user: undefined,
    }

    this.usernameStateHandler = this.usernameStateHandler.bind(this)
    this.passwordStateHandler = this.passwordStateHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getUser() {
    const { handleLogin } = this.props
    const { user: userId } = this.state

    if (userId) {
      axios.get(`/api/users/${userId}`)
        .then(response => handleLogin(response))
    }
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

  handleSubmit(e) {
    const { enteredUsername: email, enteredPassword: password } = this.state

    e.preventDefault()
    axios.post('/api/auth/sign-in', { email, password })
      .then((response) => {
        // If response is OK, set this.state.user to the returned userId
        // call this.handleLogin()
        if (response.status === 200) {
          this.setState({
            // eslint-disable-next-line no-underscore-dangle
            user: response.data._id,
          })

          this.getUser()
        }
      })
      .catch(() => {
        // If response returns an error,
        // set incorrect to true
        // which will statefully alert this.promptIncorrect()
        this.setState({
          incorrect: true,
        })
      })
  }

  promptIncorrect() {
    const { incorrect } = this.state

    if (incorrect) {
      return (
        <p className="error-text">Incorrect username or password.</p>
      )
    }
  }

  render() {
    const { enteredUsername, enteredPassword } = this.state

    return (
      <div id="login-form">
        <form>
          {this.promptIncorrect()}
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

          <button
            type="submit"
            onClick={this.handleSubmit}
          >
            Log In
          </button>
        </form>
      </div>
    )
  }
}
