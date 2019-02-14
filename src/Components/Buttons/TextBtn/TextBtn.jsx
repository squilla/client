import React from 'react'

export default class TextBtn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { link, text } = this.props

    return (
      <div className="text-btn">
        <a href="{link}">
          <p>{text}</p>
        </a>
      </div>
    )
  }
}