import React from 'react'
import InputText from '../../../../Components/Input/InputText.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export default class LogIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      enteredUsername: null,
      enteredPassword: null,
    }
  }

  usernameStateHandler(value) {
    this.setState({
      enteredUsername: value,
    })
  }

  passwordStateHandler(value) {
    this.setState({
      enteredPassword: value,
    })
  }

  render() {
    let { enteredUsername, enteredPassword } = this.state

    return (
      <div id="login-form">
        <form>
          {/* Username Input */}
          <InputText
            divId="username-input"
            labelText="Username"
            type="text"
            placeholder="jen@email.com"
            name="username"
            stateText={enteredUsername}
            onChange={this.usernameStateHandler()}
          />

          {/* Password Input */}
          <InputText
            divId="password-input"
            labelText="Password"
            type="password"
            placeholder="password"
            name="password"
            stateText={enteredPassword}
            onChange={this.passwordStateHandler()}
          />

          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
}
