import React from 'react'

import LogInForm from './Components/LogInForm/LogInForm.jsx'
import SignUpForm from './Components/SignUpForm/SignUpForm.jsx'


// eslint-disable-next-line react/prefer-stateless-function
export default class LogIn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleLogin, display } = this.props
    console.log(display)

    return (
      <div id="log-in-scene">
        {display ? (
          <LogInForm handleLogin={handleLogin} />
        ) : (
          <SignUpForm />
        )}
      </div>
    );
  }
}
