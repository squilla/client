import React from 'react'

import './inputtextarea.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class InputTextArea extends React.Component {
  render() {
    const {
      divId, name, labelText, type, placeholder, stateText, onChange,
    } = this.props

    return (
      <div id={divId}>
        <label htmlFor={name}>
          {labelText}
          <textarea
            type={type}
            placeholder={placeholder}
            name={name}
            value={!stateText ? '' : stateText}
            onChange={onChange}
          />
        </label>
      </div>
    )
  }
}
