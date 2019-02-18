import React from 'react'

import LogInForm from './Components/LogInForm/LogInForm.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export default class LogIn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="log-in-scene">
        <LogInForm />
      </div>
    )
  }
}