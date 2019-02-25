import React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class InputText extends React.Component {
  render() {
    const {
      divId, name, labelText, type, placeholder, stateText, onChange
    } = this.props

    return (
      <div id={divId}>
        <label htmlFor={name}>
          {labelText}
          <input
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