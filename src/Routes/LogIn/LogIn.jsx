import React from 'react'

import LogInForm from './Components/LogInForm/LogInForm.jsx'
import SignUpForm from './Components/SignUpForm/SignUpForm.jsx'


// eslint-disable-next-line react/prefer-stateless-function
export default function LogIn(props) {
  const { handleLogin } = props
  // eslint-disable-next-line class-methods-use-this
  return (
    <div id="log-in-scene">
      <LogInForm handleLogin={handleLogin} />
      <SignUpForm />
    </div>
  )
}
