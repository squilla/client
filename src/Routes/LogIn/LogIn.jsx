import React from 'react'

import LogInForm from './Components/LogInForm/LogInForm.jsx'
import SignUpForm from './Components/SignUpForm/SignUpForm.jsx'


// eslint-disable-next-line react/prefer-stateless-function
export default class LogIn extends React.Component {
  render() {
    return (
      <div id="log-in-scene">
        <LogInForm />
        <SignUpForm />
      </div>
    )
  }
}