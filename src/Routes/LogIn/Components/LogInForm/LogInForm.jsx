import React from 'react'
import axios from 'axios'
import InputText from '../../../../Components/Input/InputText.jsx'
import './loginform.css'
import Artist from './artist.jpg'

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

  handleSubmit(e) {
    const { enteredUsername: email, enteredPassword: password } = this.state

    e.preventDefault()
    axios.post('https://squilla.dacio.app/api/auth/sign-in', { email, password })
      .then((response) => {
        // If response is OK, set this.state.user to the returned userId
        // call this.getUser()
        if (response.status === 200) {
          this.setState({
            // eslint-disable-next-line no-underscore-dangle
            user: response.data._id,
          })

          this.getUser()
        }
      })
      .catch((err) => {
        // If response returns an error,
        // set incorrect to true
        // which will statefully alert this.promptIncorrect()
        this.setState({
          incorrect: true,
        })

        console.log(err.message)
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

  render() {
    const { enteredUsername, enteredPassword } = this.state

    return (
      <div className="limiter">
        <div className="login-container">
          <div className="flex-child wrap-login p-right p-left p-bottom p-top">
            <form className="login-form">
              {this.promptIncorrect()}
              <span className="login-form-title">Log In</span>
              {/* Username Input */}
              <div className="wrap-input grey-btm">
                <span className="label-input">User Name</span>
                <InputText
                  divId="username-input"
                  type="text"
                  placeholder="your@email.com"
                  name="username"
                  stateText={enteredUsername}
                  onChange={this.usernameStateHandler}
                />
              </div>
              <div className="wrap-input grey-btm">
                {/* Password Input */}
                <span className="label-input">Password</span>
                <InputText
                  divId="password-input"
                  type="password"
                  placeholder="password"
                  name="password"
                  stateText={enteredPassword}
                  onChange={this.passwordStateHandler}
                />
              </div>

              <button className="button2" type="submit" onClick={this.handleSubmit}>
                Log In
              </button>
            </form>
          </div>
          <div className="login-img p-top flex-child1">
            <img src={Artist} alt="artist" />
          </div>
        </div>
      </div>
    );
  }
}
