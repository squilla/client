import React from 'react'
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'

// eslint-disable-next-line react/prefer-stateless-function
export default class TextBtn extends React.Component {
  render() {
    const { link, text } = this.props

    return (
      <Link to={link}>
        <p>{text}</p>
      </Link>
    )
  }
}
