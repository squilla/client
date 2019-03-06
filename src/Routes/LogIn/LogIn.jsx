import React from 'react'

import LogInForm from './Components/LogInForm/LogInForm.jsx'
import SignUpForm from './Components/SignUpForm/SignUpForm.jsx'


// eslint-disable-next-line react/prefer-stateless-function
export default function LogIn(props) {
  const { handleLogin, display } = props

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
