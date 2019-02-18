import React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class TextBtn extends React.Component {
  render() {
    const { link, text } = this.props

    return (
      <div className="text-btn">
        <a href={link}>
          <p>{text}</p>
        </a>
      </div>
    )
  }
}